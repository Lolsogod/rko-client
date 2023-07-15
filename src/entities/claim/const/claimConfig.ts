import type { IMenuItem } from 'interfaces/IMenuItem';
import { useReferenceStore} from 'app/providers/stores'
import { router } from 'app/providers'
import type { Claim } from 'interfaces/Claim';
import { useModalStore } from 'widgets/modal';
import {computed} from 'vue'
import type { ReferenceData, References } from 'interfaces/References';

export const useClaimConfig = (claim: Claim) =>{
  
    const modalStore = useModalStore()
    const refStore = useReferenceStore()
    //хз мб херня но пусть так пока
    const items = new Map<string, IMenuItem[]>([
      ['NEW', [
        {text: "Взять в работу", action: () => router.push('/claim/1')},
        {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)}
    ]],
      ['IN_PROGRESS', [
        {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)},
      ]],
      ['PENDING', [
            {text: "Взять в работу", action: () => router.push('/claim/1')},
            {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
            {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)}
        ]],
      ['DONE', [
            {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
            {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)},
        ]]
    ]);
    //можно ли так компутеды юзать?
    const menuItems = computed(() =>{
        return items.get(claim.status)
    })
    const createdDate = computed(() => {
      const date = new Date(claim.created_date);
      
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
    
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
    
      const formattedDate = `${day}.${month}.${year} в ${hours}.${minutes}`;
    
      return formattedDate;
    })

    const channelIco = computed(() => {
      switch (claim.channel) {
          case "CHAT":
            return("Chat24")
          case "PHONE":
              //спросить по поводу иконки телефона(ее нету)
            return("Bell24")
          case "EMAIL":
              return("Mail24")
          default:
            return("")
        }
    })
 
    const getTextByCode = (code: string, targetArray: string) => {
      return refStore.refernces?.[targetArray as keyof References]!.find((item: ReferenceData) => item.code === code)?.text;
    }
    const channelLine = `${getTextByCode(claim.channel!, 'channels')}${claim.is_first_line?' 1 линия':''}`
    const initiator = getTextByCode(claim.initiator_type!, 'initiatorTypes')
    const status = getTextByCode(claim.status, 'statuses')
    const priority = getTextByCode(claim.priority!, 'priority')
    
    return {menuItems, createdDate, channelIco, channelLine,
             initiator, status, priority}
}

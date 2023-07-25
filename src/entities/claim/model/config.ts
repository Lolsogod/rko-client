import { useReferenceStore} from 'entities/reference'
import { router } from 'app/providers'
import type { Claim } from 'entities/claim/model';
import { useModalStore } from 'widgets/modal';
import {computed} from 'vue'
import type { ReferenceData, References } from 'entities/reference';
import type { IMenuItem } from 'shared/ui/menu';

export const useClaimConfig = (claim: Claim) =>{
  
    const modalStore = useModalStore()
    const refStore = useReferenceStore()

    //хз мб херня но пусть так пока + неуверн что вобще надо с новым юаем
    const items = new Map<string, IMenuItem[]>([
      ['NEW', [
        {text: "Взять в работу", action: () => router.push(`/client/${claim.client?.id}/${claim.id}`)},
        {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)}
    ]],
      ['IN_PROGRESS', [
        {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)},
      ]],
      ['PENDING', [
        {text: "Взять в работу", action: () => router.push(`/client/${claim.client?.id}/${claim.id}`)},
        {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)}
      ]],
      ['DONE', [
        {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)},
      ]]
    ]);
    //можно ли так компутеды юзать?(почитал нельзя, но я и неюзаю уже, всё закоменчено)
    const menuItems = computed(() =>{
        return items.get(claim.status)
    })
    const formatDate = (isoDate: string) =>{
      const date = new Date(isoDate);
      
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear().toString().slice(2);
    
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
    
      const formattedDate = `${day}.${month}.${year} в ${hours}.${minutes}`;
    
      return formattedDate;
    }
    const createdDate = computed(() => {
      return formatDate(claim.created_date);
    })
    const pauseTill = computed(() => {
      if (claim.pause_till)
        return formatDate(claim.pause_till);
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
    const type = getTextByCode(claim.claim_type!, 'claimTypes')
    const theme = getTextByCode(claim.claim_theme!, 'claimThemes')
    
     const inWorkFor = () => {
      //обновлять? да и вобще както неоч, потом поменяю
      const date = new Date(claim.updated_date);
      const now = new Date();
      const timeDiff = now.getTime() - date.getTime();
      const seconds = Math.floor(timeDiff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
    
      if (days > 0) {
        return `${days} д.`;
      } else if (hours > 0) {
        return `${hours} ч.`;
      } else if (minutes > 0) {
        return `${minutes} мин.`;
      } else {
        return `${seconds} сек`;
      }
    }

    const isExpired = computed(() =>{
      if (claim.pause_till){
        const date = new Date(claim.pause_till);
        const now = new Date();
        return date < now
      }
      return false
    })

    return { createdDate, channelIco, channelLine,
             initiator, status, priority, type, 
             inWorkFor, theme, pauseTill,
             isExpired, menuItems}
}

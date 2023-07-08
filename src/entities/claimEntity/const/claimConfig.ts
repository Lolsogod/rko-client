import type { IMenuItem } from '@/interfaces/IMenuItem';
import {useModalrStore} from '@/stores/modal'
import router from '@/router'
import type { Claim } from '@/interfaces/Claim';
import {computed} from 'vue'
import { useReferenceStore } from '@/stores/references';

export const useClaimConfig = (claim: Claim) =>{
  
    const modalStore = useModalrStore()
    const refStore = useReferenceStore()
    //хз мб херня но пусть так пока
    const items = new Map<string, IMenuItem[]>([
      ['NEW', [
        {text: "Взять в работу", action: () => router.push('/claim/1')},
        {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)}
    ]],
      ['IN_PROGRESS', [{text: "Что то", action: () => modalStore.openModal('', claim)},]],
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
      const date = new Date(claim.createdDate);
      
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
    //повторяются, придумать функцию?
    const channelLine = computed(() => {
      const cName = refStore.refernces?.channels.find((channel) => channel.code == claim.channel)?.text
      return `${cName}${claim.isFirstLine?' 1 линия':''}`
    })
    const initiator = computed(() => {
      return refStore.refernces?.initiatorTypes.find((initiator) => initiator.code == claim.initiatorType)?.text
    })
    const status = computed(() => {
      return refStore.refernces?.statuses.find((status) => status.code == claim.status)?.text
    })
    return {menuItems, createdDate, channelIco, channelLine, initiator, status}
}
import type { IMenuItem } from '@/interfaces/IMenuItem';
import {useModalrStore} from '@/stores/modal'
import router from '@/router'

export const useMenuConfig = () =>{
    const modalStore = useModalrStore()
   
    //хз мб херня но пусть так пока
    const items = new Map<string, IMenuItem[]>([
      ['new', [
        {text: "Взять в работу", action: () => router.push('/claim/1')},
        {text: "Посмотреть", action: () => modalStore.openModal('info', '')},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', '')}
    ]],
      ['wip', [{text: "Что то", action: () => modalStore.openModal('', '')},]],
      ['queue', [
            {text: "Взять в работу", action: () => router.push('/claim/1')},
            {text: "Посмотреть", action: () => modalStore.openModal('info', '')},
            {text: "Журнал состояний", action: () => modalStore.openModal('journal', '')}
        ]],
      ['closed', [
            {text: "Посмотреть", action: () => modalStore.openModal('info', '')},
            {text: "Журнал состояний", action: () => modalStore.openModal('journal', '')},
        ]]
    ]);

    const getItems = (claimStatus: string) =>{
        return items.get(claimStatus)
    }

    return {getItems}
}
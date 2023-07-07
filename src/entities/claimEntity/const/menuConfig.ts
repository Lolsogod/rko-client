import type { IMenuItem } from '@/interfaces/IMenuItem';
import {useModalrStore} from '@/stores/modal'
import router from '@/router'

export const useMenuConfig = () =>{
    const modalStore = useModalrStore()
   
    //хз мб херня но пусть так пока
    const items = new Map<string, IMenuItem[]>([
      ['NEW', [
        {text: "Взять в работу", action: () => router.push('/claim/1')},
        {text: "Посмотреть", action: () => modalStore.openModal('info', '')},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', '')}
    ]],
      ['IN_PROGRESS', [{text: "Что то", action: () => modalStore.openModal('', '')},]],
      ['PENDING', [
            {text: "Взять в работу", action: () => router.push('/claim/1')},
            {text: "Посмотреть", action: () => modalStore.openModal('info', '')},
            {text: "Журнал состояний", action: () => modalStore.openModal('journal', '')}
        ]],
      ['DONE', [
            {text: "Посмотреть", action: () => modalStore.openModal('info', '')},
            {text: "Журнал состояний", action: () => modalStore.openModal('journal', '')},
        ]]
    ]);

    const getItems = (claimStatus: string) =>{
        return items.get(claimStatus)
    }

    return {getItems}
}
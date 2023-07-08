import type { IMenuItem } from '@/interfaces/IMenuItem';
import {useModalrStore} from '@/stores/modal'
import router from '@/router'
import type { Claim } from '@/interfaces/Claim';

export const useMenuConfig = (claim: Claim) =>{
    const modalStore = useModalrStore()
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

    const getItems = (claimStatus: string) =>{
        return items.get(claimStatus)
    }

    return {getItems}
}
import type { IMenuItem } from '@/interfaces/IMenuItem';
import {useModalrStore} from '@/stores/modal'

export const useMenuConfig = () =>{
    const modalStore = useModalrStore()
   
    //хз мб херня но пусть так пока
    const items = new Map<string, IMenuItem[]>([
      ['new', [{text: "Что то", action: () => modalStore.openModal("", "test2")},]],
      ['wip', [{text: "Что то", action: () => modalStore.openModal('', 'из пропса клайм инфо будет браться')},]],
      ['queue', [
            {text: "Взять в работу", action: () => modalStore.openModal('', 'но они уже уникальные')},
            {text: "Посмотреть", action: () => modalStore.openModal('info', 'можно будет наверн както переорганиззовать мапу')},
            {text: "Журнал состояний", action: () => modalStore.openModal('journal', 'чтоб тоже из пропсов бралась')}
        ]],
      ['closed', [
            {text: "Посмотреть", action: () => modalStore.openModal('info', 'хотя хз')},
            {text: "Журнал состояний", action: () => modalStore.openModal('journal', 'пусть так будет')},
        ]]
    ]);

    const getItems = (claimStatus: string) =>{
        return items.get(claimStatus)
    }

    return {getItems}
}
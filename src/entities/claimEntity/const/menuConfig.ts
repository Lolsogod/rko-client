import type { IMenuItem } from '@/interfaces/IMenuItem';
import {useModalrStore} from '@/stores/modal'

export const useMenuConfig = () =>{
    const modalStore = useModalrStore()
   
    //хз мб херня но пусть так пока
    const items = new Map<string, IMenuItem[]>([
      ['new', [{text: "Что то", action: () => modalStore.openModal("тест", "test2")},]],
      ['wip', [{text: "Что то", action: () => modalStore.openModal('пока что плохо 1', 'из пропса клайм инфо будет браться')},]],
      ['queue', [
            {text: "Взять в работу", action: () => modalStore.openModal('пока что плохо 2', 'но они уже уникальные')},
            {text: "Посмотреть", action: () => modalStore.openModal('будте доделано', 'можно будет наверн както переорганиззовать мапу')},
            {text: "Журнал состояний", action: () => modalStore.openModal('оно работает', 'чтоб тоже из пропсов бралась')}
        ]],
      ['closed', [
            {text: "Посмотреть", action: () => modalStore.openModal('вроде', 'хотя хз')},
            {text: "Журнал состояний", action: () => modalStore.openModal('ну нужен бэк', 'пусть так будет')},
        ]]
    ]);

    const getItems = (claimStatus: string) =>{
        return items.get(claimStatus)
    }

    return {getItems}
}
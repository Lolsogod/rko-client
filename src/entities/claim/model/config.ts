import {useReferenceStore} from 'entities/reference'
import {router} from 'app/providers'
import type {Claim, ClaimReq, RealClaim} from 'entities/claim/model';
import {useModalStore} from 'widgets/modal';
import {computed} from 'vue'
import type {ReferenceData, References} from 'entities/reference';
import type {IMenuItem} from 'shared/ui/menu';
import {assign} from 'shared/api/claim-api';

//перегруженная штука получилась, разделить врят ли успею
export const useClaimConfig = (claim: RealClaim) => {

    const modalStore = useModalStore()
    const refStore = useReferenceStore()

    const take = () => {
        //ругается пока так как нету бэка
        assign(claim.id)
        router.push(`/client/${claim.client?.id}/${claim.id}`)
    }
    //это бы лучше сделать но потом
    const takeMenu = [
        {text: "Взять в работу", action: () => take()},
        {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)}
    ]
    const edMenu = [
        {text: "Редактировать", action: () => router.push(`/client/${claim.client?.id}/${claim.id}`)},
        {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)},
    ]

    const items = new Map<string, IMenuItem[]>([
        ['NEW', takeMenu],
        ['IN_PROGRESS', edMenu],
        ['PENDING', takeMenu],
        ['DONE', edMenu]
    ]);

    const menuItems = () => {
        return items.get(claim.status)
    }
    const formatDate = (isoDate: string) => {
        const date = new Date(isoDate?.split(".")[0]);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear().toString().slice(2);

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        const formattedDate = `${day}.${month}.${year} в ${hours}.${minutes}`;
        const dateOnly = `${day}.${month}.${year}`;
        const timeOnly = `${hours}.${minutes}`;
        return {formattedDate, dateOnly, timeOnly};
    }
    const createdDate = computed(() => {
        return formatDate(claim.createdDate).formattedDate;
    })
    const createdDateOnly = computed(() => {
        return formatDate(claim.createdDate).dateOnly;
    })
    const createdTimeOnly = computed(() => {
        return formatDate(claim.createdDate).timeOnly;
    })



    const pauseTill = computed(() => {
        if (claim.pauseTill)
            return formatDate(claim.pauseTill).formattedDate;
    })

    const updDate = computed(() => {
        if (claim.updatedDate)
            return formatDate(claim.updatedDate).formattedDate;
    })

    const minsFromCreation = () => {
        const date = new Date(claim.createdDate);
        const now = new Date();
        const timeDiff = now.getTime() - date.getTime();
        return Math.floor(timeDiff / 60000);
    }


    const getTextByCode = (code: string, targetArray: string) => {
        return refStore.refernces?.[targetArray as keyof References]!.find((item: ReferenceData) => item.code === code)?.text;
    }
    const channelLine = `${getTextByCode(claim.channel!, 'channels')}${claim.isFirstLine ? ' 1 линия' : ''}`
    const initiator = getTextByCode(claim.initiatorType!, 'initiatorTypes')
    const status = getTextByCode(claim.status, 'statuses')
    const priority = getTextByCode(claim.priority!, 'priority')
    const type = getTextByCode(claim.claimType!, 'claimTypes')
    const theme = getTextByCode(claim.claimTheme!, 'claimThemes')
    const inWorkFor = () => {
        //обновлять? да и вобще както неоч, потом поменяю
        const date = new Date(claim.updatedDate);
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



    const isExpired = computed(() => {
        if (claim.pauseTill) {
            const date = new Date(claim.pauseTill);
            const now = new Date();
            return date < now
        }
        return false
    })
    return {
        createdDate,
        channelLine,
        initiator,
        status,
        priority,
        type,
        inWorkFor,
        theme,
        pauseTill,
        isExpired,
        menuItems,
        minsFromCreation,
        updDate,
        createdDateOnly,
        createdTimeOnly,

    }
}

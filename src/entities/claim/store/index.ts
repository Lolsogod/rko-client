import {ref, computed, watch} from 'vue'
import {defineStore} from 'pinia'
import type {ClaimReq, UpdateReq, ClaimFilterReq, Claim, CloseReq} from '../model'
import {useClaimService} from "shared/api/commonApi";
import {getClaims} from "../../../shared/api/claim-api";
import {useEditClaimStore} from "../../../features/edit-claim";

export const useClaimStore = defineStore('claims', () => {
    const claims = ref<Claim[]>()
    const {createClaim, getClaims,close} = useClaimService();
    const fetchClaims = async (claimReq?: ClaimFilterReq) => {
        claims.value = await getClaims(claimReq);
    }
    const postCreateClaim = async (claimReq: ClaimReq) => {
        const newClaim = await createClaim(claimReq);
        claims.value = [...claims?.value ?? [], newClaim];
    }

    //неуверен как определять текущее обращение пусть берётся первая со статусом ин прогрес
    //потом поменять логику на реальную
    const currentClaim = computed(() => {
        if (claims.value) {
            for (const claim of claims.value!) {
                console.log(claim.status)
                if (claim.status == "IN_PROGRESS")
                    return claim;
            }
        }
        return null;
    })
    const isNew = (claim: Claim) => {
        const date = new Date(claim.createdDate);
        const now = new Date();
        const timeDiff = now.getTime() - date.getTime();
        const minutes = timeDiff / 60000;
        return minutes <= 99999999
    }

    function isToday(claim: Claim) {
        if (claim.pauseTill) {
            const date = new Date(claim.pauseTill!).toISOString().split('T')[0];
            const currentDate = new Date().toISOString().split('T')[0];
            return date == currentDate;
        }
        return false
    }
    function isTomorrow(claim: Claim) {
        if (claim.pauseTill) {
            const date = new Date(claim.pauseTill!).toISOString().split('T')[0];
            const tomorrowDateTime = new Date();
            tomorrowDateTime.setDate(tomorrowDateTime.getDate() + 1);
            const tomorrowDate = tomorrowDateTime.toISOString().split('T')[0];
            return date == tomorrowDate
        }
        return false
    }
    const sorted = ref<{ [key: string]: Claim[] }>({
        new: [],
        today: [],
        tomorrow: []
    })
    const closePost = async (closeReq : CloseReq, id:number) => {
        await close(closeReq,id);
        const {fetchClaimIdsByClientInn} = useEditClaimStore();
        await fetchClaimIdsByClientInn();
        claims.value = await getClaims();
    }
    //сюда бы фильтр на законченные ещё, но неуверен надо ли
    watch(claims, () => {
        if (claims.value) {
            sorted.value = ({new: [], today: [], tomorrow: []})
            claims.value.forEach(claim => {
                if (isNew(claim))
                    sorted.value.new.push(claim)
                else if (isToday(claim))
                    sorted.value.today.push(claim)
                else if (isTomorrow(claim))
                    sorted.value.tomorrow.push(claim)
            });
        }
    })
    return {claims, fetchClaims, currentClaim, sorted, postCreateClaim,closePost}
})
import {ref} from 'vue'
import {defineStore} from 'pinia'
import type {ClaimReq, Claim} from 'entities/claim'
import {useClaimService} from "../../../shared/api/commonApi";

export const useEditClaimStore = defineStore('editClaim', () => {
    const claim = ref<Claim>()
    const claimids = ref<Array<string>>()
    const {getClaimById, editClaim, getClaims} = useClaimService();
    const fetchClaim = async (id: number) => {
        const res =  await getClaimById(id);
        claim.value = res;
    }

    const fetchClaimIdsByClientInn = async () => {
        let claims :Array<Claim>= [];
        try{
            claims = await getClaims();

        }catch (e){
            claims = [];
        }
        claimids.value = claims.map((claim: Claim) => {
            return claim.id + "";
        });

    };
    const wasDeleted = () => {
        if(claim.value){
            claim.value = undefined;
        }
    }
    const edit = () => {
        editClaim(claim.value as ClaimReq, claim.value!.id)
    }
    return {claim, claimids,fetchClaim, edit,fetchClaimIdsByClientInn,wasDeleted}
})
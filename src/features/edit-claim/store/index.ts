import {ref} from 'vue'
import {defineStore} from 'pinia'
import type {ClaimReq, RealClaim} from 'entities/claim'
import {useClaimService} from "../../../shared/api/commonApi";

export const useEditClaimStore = defineStore('editClaim', () => {
    const claim = ref<RealClaim>()
    const claimids = ref<Array<string>>()
    const {getClaimById, editClaim, getClaims} = useClaimService();
    const fetchClaim = async (id: number) => {
        claim.value = await getClaimById(id)
    }
    const fetchClaimIdsByClientInn = async () => {
        let claims :Array<RealClaim>= [];
        try{
            claims = await getClaims();

        }catch (e){
            claims = [];
        }
        claimids.value = claims.map((claim: RealClaim) => {
            return claim.id + "";
        });

    };
    const edit = () => {
        editClaim(claim.value as ClaimReq, claim.value!.id)
    }
    return {claim, claimids,fetchClaim, edit,fetchClaimIdsByClientInn}
})
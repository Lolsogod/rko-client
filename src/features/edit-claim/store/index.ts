import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Claim } from 'entities/claim'
import { editClaim, getClaimById } from 'shared/api/claim-api'
import { claimtoReq } from '../request'

export const useEditClaimStore = defineStore('editClaim', () => {
  const claim = ref<Claim>()
  const fetchClaim = async (id: number) => {
    claim.value = await getClaimById(id)
  }
  const edit = () =>{
     const req = claimtoReq(claim.value!)
     editClaim(req, claim.value!.id)
  }
  return {claim, fetchClaim, edit}
})
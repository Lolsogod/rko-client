import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Claim } from 'entities/claim'
import { getClaimById } from 'shared/api/claim-api'

export const useEditClaimStore = defineStore('editClaim', () => {
  const claim = ref<Claim>()
  const fetchClaim = async (id: number) => {
    claim.value = await getClaimById(id)
  } 

  return {claim, fetchClaim }
})
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Claim } from 'interfaces/Claim'
import { getClaims } from 'shared/api/claimApi'

export const useClaimStore = defineStore('claims', () => {
  const calims = ref<Claim[]>()
  const fetchClaims = async () => {
    calims.value = await getClaims()
  } 
  const getClaimsByStatus = (status: string) =>{
    return calims.value?.filter(claim => claim.status == status); 
  }
  
  return {calims, fetchClaims, getClaimsByStatus}
})
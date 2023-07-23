import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Claim } from '../model'
import { getClaims } from 'shared/api/claim-api'

export const useClaimStore = defineStore('claims', () => {
  const calims = ref<Claim[]>()
  const fetchClaims = async () => {
    calims.value = await getClaims()
  } 
  //неуверен надо ли с новым уи, если нет уберу
  const getClaimsByStatus = (status: string) =>{
    return calims.value?.filter(claim => claim.status == status); 
  }

  //неуверен как определять текущее обращение пусть берётся первая со статусом ин прогрес
  //потом поменять логику на реальную
  const currentClaim = computed(() =>{
    if(calims.value){
        for (const claim of calims.value!) {
            if (claim.status == "IN_PROGRESS")
                return claim;
        }
    }
    return null;
  })
  
  //мейби сделать класс врапер для клеймов?

  return {calims, fetchClaims, getClaimsByStatus, currentClaim}
})
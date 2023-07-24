import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Claim } from '../model'
import { getClaims } from 'shared/api/claim-api'

export const useClaimStore = defineStore('claims', () => {
  const claims = ref<Claim[]>()
  const fetchClaims = async () => {
    claims.value = await getClaims()
  } 
  //неуверен надо ли с новым уи, если нет уберу
  const getClaimsByStatus = (status: string) =>{
    return claims.value?.filter(claim => claim.status == status); 
  }

  //неуверен как определять текущее обращение пусть берётся первая со статусом ин прогрес
  //потом поменять логику на реальную
  const currentClaim = computed(() =>{
    if(claims.value){
        for (const claim of claims.value!) {
            if (claim.status == "IN_PROGRESS")
                return claim;
        }
    }
    return null;
  })
  const isNew = (claim: Claim) =>{
      const date = new Date(claim.created_date);
      const now = new Date();
      const timeDiff = now.getTime() - date.getTime();
      const minutes = timeDiff / 60000;
      console.log(`${claim.id} - ${minutes}`)
      return minutes <= 15
  }
  const sorted = ref<{[key: string]: Claim[]}>({
    new: [],
    today: [],
    tomorrow: []
  })
  //хз как это на производительности скажется, может лучше просто использовать функцию ис нью напрямую
  //и не ясно откуда брать крайнюю дату поэтому всё в сегодня что не новое
  watch(claims, ()=>{
    if (claims.value){
      claims.value.forEach(claim => {
        if (isNew(claim))
          sorted.value.new.push(claim)
        else sorted.value.today.push(claim)
      });
    }
  })
  return {claims, fetchClaims, getClaimsByStatus, currentClaim, sorted}
})
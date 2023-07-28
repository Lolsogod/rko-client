import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type {ReferenceData, References} from './model'
import { getReferences } from 'shared/api/claim-api'

export const useReferenceStore = defineStore('references', () => {
  const refernces = ref<References>();
  const statusReasons = ref<ReferenceData[]>([]);
  const fetchReferences = async () => {
    refernces.value = await getReferences()

  }
  const getStatusesReasonsByStatus = (statusCode:string) :ReferenceData[]=> {
    if(refernces.value && refernces.value?.statuses){
      const donestatus = refernces.value?.statuses.find(status => {
        return status.reasons &&  status.code === statusCode;
      })
      let res = donestatus?.reasons??[];
      statusReasons.value = res;
      return res;
    }
    statusReasons.value = []
    return [];
  }
  
  return {refernces, fetchReferences,getStatusesReasonsByStatus, statusReasons}
})
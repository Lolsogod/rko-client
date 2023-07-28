import { ref } from 'vue'
import { defineStore } from 'pinia'
import { createClaim } from 'shared/api/claim-api'
import type { ClaimReq } from '..'
//а может и ненужен он
export const useCreateClaimStore = defineStore('createClaim', () => {
  const claim = ref<ClaimReq>({
    category: 'OUTGOING',
    channel: '',
    initiatorType: '',
    isFirstLine: false,
    claimType: '',
    claimTheme: '',
    description: '',
    serviceCount: 0,
    priority: '',
    priority_reason: '',
    assignee: '',
    comment: '',
    client: {
      globalCompanyId: 0,
      plCompanyId: '',
      inn: '',
      kpp: '',
      ogrn: '',
      fullName: '',
      shortName: '',
    },
    documents: [],
  })

  const create = () =>{
     createClaim(claim)
  }
  return {claim, create}
})
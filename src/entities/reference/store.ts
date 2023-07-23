import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { References } from './model'
import { getReferences } from 'shared/api/claim-api'

export const useReferenceStore = defineStore('references', () => {
  const refernces = ref<References>()
  const fetchReferences = async () => {
    refernces.value = await getReferences()
  } 
  
  return {refernces, fetchReferences}
})
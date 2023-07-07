import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { References } from '@/interfaces/References'
import { getReferences } from '@/shared/api/ClaimApi'

export const useReferenceStore = defineStore('references', () => {
  const refernces = ref<References>()
  const fetchReferences = async () => {
    refernces.value = await getReferences()
  } 
  const statuses = computed(() => {
    //пока без драфтов и реджектов (не оч понял где их рендерить)
    return refernces.value?.statuses.filter(status => status.code !== "DRAFT" && status.code !== "REJECTED"); 
  })
  return {refernces, fetchReferences, statuses}
})
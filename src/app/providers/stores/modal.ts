import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Claim } from '@/interfaces/Claim'

export const useModalStore = defineStore('modal', () => {
  const type = ref('')
  //и обьеденить их обьектом
  const title = computed(()=>{
    switch (type.value) {
      case "info":
        return("Просмотр обращения")
      case "journal":
        return("Журнал состояний")
      default:
        return("Заголовок")
    }
  })
  //сюда надо как то компонент запихать а хотя мб и ненадо
  const claim = ref<Claim>()

  const isOpen = ref(false)
  
  const openModal = (newType: string, newClaim: Claim)=>{
    type.value = newType 
    claim.value = newClaim
    isOpen.value = true
  }
  function closeModal() {
    isOpen.value = false
  }
  return { isOpen, openModal, closeModal, claim: claim, type, title}
})

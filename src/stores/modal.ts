import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalrStore = defineStore('modal', () => {
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
  const content = ref('')

  const isOpen = ref(false)
  
  const openModal = (newType: string, newContent: string)=>{
    type.value = newType 
    content.value = newContent
    isOpen.value = true
  }
  function closeModal() {
    isOpen.value = false
  }
  return { isOpen, openModal, closeModal, content, type, title}
})

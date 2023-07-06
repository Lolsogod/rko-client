import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
//example store, delete later
export const useModalrStore = defineStore('modal', () => {
  //и обьеденить их обьектом
  const title = ref('')
  //сюда надо как то компонент запихать
  const content = ref('')

  const isOpen = ref(false)
  
  const openModal = (newTitle: string, newContent: string)=>{
    title.value = newTitle
    content.value = newContent
    isOpen.value = true
  }
  function closeModal() {
    isOpen.value = false
  }
  return { isOpen, openModal, closeModal,title,content}
})

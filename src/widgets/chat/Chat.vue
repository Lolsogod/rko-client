<script setup lang="ts">
import { ref } from 'vue'
//какойто пустой компонент, убрать мусор
const categories = ref({
  "calls": [
    {
      id: 1,
      name: 'Олег Юрьевич',
      date: '24.06.23 15:18',
      duration:"50",
      type:"incoming",
      document:"342543534543"
    },
    {
      id: 2,
      name: 'Олег Юрьевич2',
      date: '24.06.23 15:19',
      duration:"0",
      type:"cancelled",
      document:"342543534543"
    },
  ],
  "latters": [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],

})
</script>

<template>
  <div class="w-full max-w-md px-2 sm:px-0 nc-container chat">

  </div>
</template>


<style scoped>
.d-flex.gap-6{
  margin-bottom: 5px;
}
.chat{

  padding: 0 !important;
}
.tablist{
  margin: 10px 0 10px 0;
}

button.callstab{
  margin-top: 4px;
  height: 100%;
  background-color: transparent;

  border: 0;
}
button.callstab.active{
  border-bottom: 1px solid var(--token-color-border-active);

}
footer.callsFooter{
  padding: 15px;
  justify-content: flex-end;
  align-items: flex-end;
  border-top: 2px solid #cccccc;
  margin-top: auto;
  flex: 0 0 auto;
}
</style>
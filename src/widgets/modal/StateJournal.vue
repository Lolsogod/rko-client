<script setup lang="ts">
import JItem from '../JItem/JItem.vue';
import type { JournalData } from '../JItem/types'
//пока всё захардкожено, потом будет круто
const states: JournalData[]  = [
    {
        date: "01.07.23 23:17",
        status: "Новая",
        name: "Auto (Чат)",
    },
    {
        date: "03.07.23 09:00",
        status: "В работу",
        name: "Алёшина Анастасия",
        comment: "Комментарий что ждали и зачем"
    },
    {
        date: "02.07.23 14:20",
        status: "Ожидание",
        name: "Алёшина Анастасия",
    },
    {
        date: "02.07.23 15:07",
        status: "В работу",
        name: "Алёшина Анастасия",
    },
    {
        date: "03.07.23 15:45",
        status: "Ожидание",
        name: "Александрова Александра",
        comment: "Почему переводили"
    }
]
</script>

<template>
   <div class="container">
     <JItem v-for="data in states " :data="data"/>
   </div>
</template>

<style scoped>
   .container{
      width: 60rem;
   }
   hr{
      border-top: 1px solid #c0c0bd;
   }
</style>
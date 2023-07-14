<script setup lang="ts">
import type { Claim } from 'interfaces/Claim';
import JItem from 'widgets/JItem/JItem.vue';

defineProps<{
   claim: Claim
}>()
</script>

<template>
   <div class="container">
     <JItem v-for="status in claim.status_history " :status="status"/>
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
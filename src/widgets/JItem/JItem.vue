<script setup lang="ts">
import type {Status} from "@/interfaces/Claim"
import { useReferenceStore } from "@/stores/references";
import { computed } from "vue";
const props = defineProps<{
    status: Status
}>()
const refStore = useReferenceStore()
//мб както конфиг юзать
const upd_date = computed(() => {
      const date = new Date(props.status.updated_date);
      
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
    
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
    
      const formattedDate = `${day}.${month}.${year} ${hours}.${minutes}`;
    
      return formattedDate;
})
const statusText =computed(() => refStore.refernces?.statuses.find(status => status.code === props.status.status)?.text)
</script>

<template>
    <div class="d-grid" style="grid-template-columns: 1fr 1fr 2fr 3fr">
        <div class="cell">{{ upd_date }}</div>
        <div class="cell">{{ statusText}}</div>
        <div class="cell">{{ status.updated_by }}</div>
        <div class="cell">{{ status.comment }}</div>
    </div>
</template>

<style scoped>
    .cell{
        font-size: .8rem;
        padding: .5rem;
        height: 3rem;
        border: 1px solid #f5f8fc
    }
</style>
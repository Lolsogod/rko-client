<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ClaimsCol from './ClaimsCol.vue';
import {useReferenceStore} from '@/stores/references'

const store = useReferenceStore()
//погуглю как на старте вызывать функцию, а пока пусть так
console.log(store.fetchReferences)
store.fetchReferences()


</script>

<template>
    <div class="d-flex gap-8 claims">
        <ClaimsCol v-for="status in store.statuses" :key="status.code" :status="status"/>
    </div>
    
</template>

<style scoped>
    .claims{
        /**временное решение */
        flex-grow: 1;
        align-items: start;
        overflow-x: auto;
    }
</style>
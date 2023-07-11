<script setup lang="ts">
import ClaimsCol from './ClaimsCol.vue';
import {useReferenceStore} from '@/stores/references'
import {useClaimStore} from '@/stores/claims'

const rStore = useReferenceStore()
const cStore = useClaimStore()
//погуглю как на старте вызывать функцию, а пока пусть так
cStore.fetchClaims()
</script>

<template>
    <div class="d-flex gap-8 claims">
        <ClaimsCol v-for="status in rStore.statuses" :key="status.code" :status="status"/>
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
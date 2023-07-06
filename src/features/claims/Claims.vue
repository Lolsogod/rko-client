<script setup lang="ts">
import ClaimsCol from './ClaimsCol.vue';

</script>

<template>
    <div class="d-flex gap-8 claims">
        <ClaimsCol claim-status="new"/>
        <ClaimsCol claim-status="wip"/>
        <ClaimsCol claim-status="queue"/>
        <ClaimsCol claim-status="closed"/>
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
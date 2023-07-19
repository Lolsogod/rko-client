<script setup lang="ts">
import { Badge } from 'shared/ui/badge'
import { ClaimCard } from '..';
</script>

<template>
    <div class="col">
        <div class="d-flex-cb w-100">
            <Badge>🏁 Новые</Badge>
            <Badge>15</Badge>
        </div>
        <ClaimCard v-for="n in 5" />
    </div>
</template>

<style scoped>
    
   .col{
        display: flex;
        height: 45.9375rem;
        padding: 0.75rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
        flex-grow: 1;

        border-radius: 1rem;
        background: var(--surface-opacity-2, rgba(25, 25, 26, 0.08));
   }
</style>
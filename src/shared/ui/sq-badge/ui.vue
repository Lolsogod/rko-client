<script setup lang="ts">
defineProps<{
    type: string
}>()
</script>

<template>
   <div class="ci-badge" :class="type">
        <slot></slot>
   </div>
</template>

<style scoped>
    .ci-badge{
        display: flex;
        padding: 0.125rem 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        border-radius: 0.375rem;
        
        
        /* Body/B2-Medium */
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem; /* 171.429% */
        letter-spacing: 0.00525rem;
    }
    .id{
        padding: 0rem 0.5rem;
        border: 1px solid var(--border-divider, #E3E3E3);
        background: var(--surface-card, #FFF);
        color: var(--text-icons-interactive, #4164EB);

        /* Subtitle/S1-Semi Bold */
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.5rem; /* 150% */
        letter-spacing: 0.006rem;
    }
    .CRITICAL{
        border-radius: 0.375rem;
        background: var(--system-surface-warning, rgba(255, 125, 31, 0.08));
        color: var(--text-icons-warning, #FF7D1F);
    }
    /**эти потом проработаю */
    .HIGH{

    }
    .MEDIUM{

    }
    .LOW{

    }
    .PAUSE{

    }
</style>

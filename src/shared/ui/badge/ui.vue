<script setup lang="ts">
defineProps<{
    color?: string
    size?: string
}>()
</script>

<template>
   <div class="badge" :class="size" :style="{backgroundColor: color}">
        <slot></slot>
   </div>
</template>

<style scoped>
    .badge{
        display: flex;
        padding: 0.25rem 0.75rem;
        flex-direction: column;
        align-items: center;
        border-radius: 1.25rem;
        background: var(--surface-opacity-2, rgba(25, 25, 26, 0.08));

        /**font */
        color: var(--text-icons-primary, #19191A);
        /* Body / B3-Semi Bold */
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.5rem; /* 171.429% */
        letter-spacing: 0.00525rem;
    }
    .small{
        padding: 0rem 0.5rem;
        justify-content: center;
        align-items: center;
        
        color: var(--text-icons-error, #ED3636);

        /* Body/B2-Medium */
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem; /* 171.429% */
        letter-spacing: 0.00525rem;
        border-radius: 0.75rem;
        background: var(--system-surface-error, rgba(237, 54, 54, 0.08));
    }
</style>

<script setup lang="ts">

</script>

<template>
   <div class="badge">
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
</style>

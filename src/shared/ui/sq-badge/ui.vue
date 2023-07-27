<script setup lang="ts">
defineProps<{
    type: string
}>()
</script>

<template>
   <div class="ci-badge b2" :class="type">
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
        background: var(--system-surface-warning, rgba(255, 125, 31, 0.08));
        color: var(--text-icons-warning, #FF7D1F);
    }
    .gray{
        border: 1px solid var(--border-divider, #E3E3E3);
        background: var(--surface-card, #FFF);
    }
    .red{
        color: var(--text-icons-error, #ED3636);
        background: var(--system-surface-error, rgba(237, 54, 54, 0.08));
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

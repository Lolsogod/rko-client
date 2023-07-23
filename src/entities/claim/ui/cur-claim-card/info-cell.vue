<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
   <div class="info">
        <span class="title">{{ title }}</span>
        <div class="content">
            <slot></slot>
        </div>
   </div> 
</template>

<style scoped>
    .title{
        white-space: nowrap;
        color: var(--text-icons-secondary, #5E6271);

        /* Body/B2-Medium */
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem; /* 171.429% */
        letter-spacing: 0.00525rem;
    }
    .info{
        display: flex;
        flex-direction: column;
        gap: .75rem
    }
    .content{
        color: var(--text-icons-primary, #141414);

        /* Subtitle/S1-Semi Bold */
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.5rem; /* 150% */
        letter-spacing: 0.006rem;
    }
</style>
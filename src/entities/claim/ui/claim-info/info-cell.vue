<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
   <div class="info">
        <span class="title">{{ title }}</span>
        <div>
            <slot></slot>
        </div>
   </div> 
</template>

<style scoped>
    .title{
        white-space: nowrap;
        color: #535356;
    }
    .info{
        display: flex;
        flex-direction: column;
        gap: 1rem
    }
</style>
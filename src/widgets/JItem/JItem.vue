<script setup lang="ts">
import type { JournalData } from './types'
defineProps<{
    data: JournalData
}>()
</script>

<template>
    <div class="d-grid" style="grid-template-columns: 1fr 1fr 2fr 3fr">
        <div class="cell">{{ data.date }}</div>
        <div class="cell">{{ data.status }}</div>
        <div class="cell">{{ data.name }}</div>
        <div class="cell">{{ data.comment?data.comment:"" }}</div>
    </div>
</template>

<style scoped>
    .cell{
        font-size: .8rem;
        padding: .5rem;
        height: 3rem;
        border: 1px solid #f5f8fc
    }
</style>
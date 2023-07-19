<script setup lang="ts">
import type { BtnData } from '.';


defineProps<{
    data: BtnData
}>()
</script>

<template>
    <div class="s-btn" :class="data.active?'active':''" @click="data.action">
        <img :src="data.ico" alt="ico">
    </div>
</template>

<style scoped>

    .s-btn{
        cursor: pointer;
        display: flex;
        padding: 0.75rem;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        background: var(--surface-opacity-1, rgba(25, 25, 26, 0.04));
    }
    .s-btn:hover{
        background-color: rgba(25, 25, 26, 0.08);
    }

    img{
        height: 1.5rem;
        width: 1.5rem;
    }
    .active {
        background: var(--buttons-alternative, #E8ECFD);
    }
    .active:hover{
        background: #dbe1fa
    }
    .active>img{
        filter: invert(37%) sepia(83%) 
                saturate(3561%) hue-rotate(219deg)
                brightness(95%) contrast(94%);
    }
</style>
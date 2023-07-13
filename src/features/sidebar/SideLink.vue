<script setup lang="ts">
import type { SLinkInfo } from 'interfaces/SideLink';
import {router} from 'app/providers';
    const props = defineProps<{
        link: SLinkInfo
    }>()
    const goTo = () =>{
        router.push(props.link.to)
    }
</script>

<template>
    <div class="side-item d-flex c-flex" @click="goTo">
            <PlIcon  class="ico" :name="link.icon" :color="link.current?'#6489e0':'#6e6e70'"></PlIcon> 
            <span class="text" :class="link.current?'':'no-cur'">{{ link.text }}</span>
        </div>
</template>

<style scoped>
    .side-item{
        cursor: pointer;
    } 
    .ico{
        justify-content: center;
        min-width: 4rem
    }
    .text{
        overflow: hidden;
        white-space: nowrap;
    }
    .no-cur{
        color: #828284;
    }
</style>@/app/router
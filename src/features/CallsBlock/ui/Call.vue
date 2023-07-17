<script setup lang="ts">
import type { Call } from '../model/types';
defineProps<{
  call: Call
}>()
</script>

<template>
    <div class="d-flex c-flex b-flex">
        <div class="d-flex c-flex gap-6">
            <img :src="`/call-${call.type}.svg`" width="20" alt="">
            <div>
                <div>{{ call.name }}</div>
                <div class="pt-2">{{ call.number }}</div>
            </div>
        </div>
        <div class="d-flex c-flex gap-4">
            <!--сделать форматеры даты времени, не приоритет-->
            <div class="d-flex date-dur">
                <div>{{ call.date }}</div>
                <div class="pt-2">{{ call.duration }}сек</div>
            </div>
            <div class="paly-cont">
                <img v-if="call.type!='canceled'" src="/play.svg" width="25" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
   *{
    font-size: small;
   }
   .date-dur{
    flex-direction: column;
    align-items: end
   }
   .paly-cont{
    width: 25px;
   }
</style>
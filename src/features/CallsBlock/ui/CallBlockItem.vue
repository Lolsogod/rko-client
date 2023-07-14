<template>
  <div class="d-flex justify-content-between callBlockItem">
    <div class="clientData d-flex justify-content-between align-items-center">
      <template v-if="type === 'incoming'">
        <img src="/call-in.svg" width="20" alt="">
      </template>
      <template v-else-if="type === 'outcoming'">
        <img src="/call-out.svg" width="20" alt="">
      </template>
      <template v-else-if="type==E_CALL_TYPE.canceled">
        <img src="/call-cancel.svg" width="20" alt="">
      </template>
      <div class="common_data d-flex flex-column gap-1">
        <div>{{ name }}</div>
        <div>{{ document }}</div>
      </div>
    </div>
    <div class="clientTimings gap-3 d-flex justify-content-between align-items-center">
      <div class="d-flex flex-column gap-1 commonTimings align-items-center">
        <div>{{ date }}</div>
        <div class="duration text-end">{{ duration }}сек</div>
      </div>
      <div>
        <img src="/play.svg" width="25" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue';
import { E_CALL_TYPE} from "features/CallsBlock/model/types";
import type {CallBlockItem} from "features/CallsBlock/model/types"


const props = defineProps<
  CallBlockItem
>()
// export default {
//   props: {
//     id: Number,
//     date: String,
//     duration: String,
//     name: String,
//     type: String,
//     document: Number
//   },
//
// };


</script>

<style scoped>
.clientData h6 {
  margin: 0;
}
.common_data {
  margin-left: 25px;
}
.callBlockItem {
  font-size: 0.8em;
}
.clientTimings {
}
</style>
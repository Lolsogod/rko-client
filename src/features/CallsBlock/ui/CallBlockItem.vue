<template>
  <div class="d-flex justify-content-between callBlockItem">
    <div class="clientData d-flex justify-content-between align-items-center">
      <template v-if="call.type === 'incoming'">
        <img src="/call-in.svg" width="20" alt="">
      </template>
      <template v-else-if="call.type === 'outgoing'">
        <img src="/call-out.svg" width="20" alt="">
      </template>
      <template v-else-if="call.type=='canceled'">
        <img src="/call-cancel.svg" width="20" alt="">
      </template>
      <div class="common_data d-flex flex-column gap-1">
        <div>{{call.name }}</div>
        <div>{{ call.number }}</div>
      </div>
    </div>
    <div class="clientTimings gap-3 d-flex justify-content-between align-items-center">
      <div class="d-flex flex-column gap-1 commonTimings align-items-center">
        <div>{{ call.date }}</div>
        <div class="duration text-end">{{ call.duration }}сек</div>
      </div>
      <div>
        <img src="/play.svg" width="25" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Call} from "features/CallsBlock/model/types"


const props = defineProps<{
  call: Call
}
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
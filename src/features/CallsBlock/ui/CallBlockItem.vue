<script lang="ts">

import SecondaryCard from "../../../shared/ui/SecondaryCard.vue";
export const enum E_CALL_TYPE{
  "outcoming",
  incoming,
  canceled
}

export default {

  components: {SecondaryCard},
  props:{
    id:{
      type:Number
    },
    date:{
      type:String
    },
    duration:{
      type:String
    },
    name:{
      type:String
    },
    type:{
      type:String
    },
    document:{
      type:Number
    }
  }
}
</script>

<template>
    <div class="d-flex justify-content-between callBlockItem">
      <div class="clientData d-flex justify-content-between align-items-center">
        <template v-if="type === 'incoming'">
          <img src="../../../../public/call-in.svg" width="20" alt="">

        </template>
        <template v-else-if = "type ==='outcoming'">
          <img src="../../../../public/call-out.svg" width="20" alt="">

        </template>
        <template v-else>
          <img src="../../../../public/call-cancel.svg" width="20" alt="">
        </template>
        <div class="common_data d-flex flex-column gap-1">
          <div>
            {{name}}
          </div>
          <div>
            {{document}}
          </div>
        </div>
      </div>
      <div class="clientTimings gap-3 d-flex justify-content-between align-items-center">
        <div class="d-flex flex-column gap-1 commonTimings align-items-center">
          <div>
            {{date}}
          </div>
          <div class="duration text-end">
              {{duration}}сек

          </div>
        </div>
        <div>
          <img src="../../../../public/play.svg" width="25" alt="">
        </div>

      </div>
    </div>
</template>

<style scoped>
.clientData h6{
  margin: 0;
}
.common_data{
  margin-left: 25px;
}
.clientTimings{
}
.callBlockItem{
  font-size: .8em;
}
.clientTimings{
}
</style>
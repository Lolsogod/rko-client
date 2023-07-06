<script lang="ts">

import SecondaryCard from "@/shared/ui/SecondaryCard.vue";
export default {
  components: {SecondaryCard},
  props:{
    document:{
      type:String,
      default:() => "xxxxxxxxxxxxx"
    },
    type:{
      type:String,
      default:() => "X-TYPE"
    },
    company:{
      type:String,
      default:() => "ООО XXX"
    },
  }
}
</script>

<template>
  <SecondaryCard>
    <div class="client_prod_item d-flex justify-content-between align-items-center">
      <div class="docInfo d-flex flex-column">
        <div class="document default-text">
            {{document}}

        </div>
        <div class="types d-flex flex-raw flex-wrap justify-content-center">
          <div class="type secondary-text">
<!--            <h6 class="secondary-text">-->
              {{type}} |
<!--            </h6>-->
          </div>
          <div class="company secondary-text">
<!--            <h6 class="secondary-text">-->
              {{company}}
<!--            </h6>-->
          </div>
        </div>
      </div>
      <div class="load">
        <PlIcon :name = "'Download24'"/>

      </div>
    </div>
  </SecondaryCard>
</template>

<style scoped>
  .client_prod_item{
    padding: 0;
  }
  .client_prod_item {
    font-size: 10px;
    font-weight: 500;

    padding: 5px;
  }
  .document{
    font-size: 14px !important;
  }

</style>
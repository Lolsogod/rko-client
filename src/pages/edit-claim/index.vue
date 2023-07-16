<script setup lang="ts">
//нагромаждено всего, это всё зарефачу но потом
import ClaimWorkForm from "features/claimForms/workForm/ClaimWorkForm.vue";
import CallsBlock from "features/CallsBlock/ui/CallsBlock.vue";
import WorkClaimMiniForm from "features/claimForms/workForm/WorkClaimMiniForm.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import { CFooter} from "shared/ui/footer";
import { ProductList } from "entities/client-product";
import type { ProductData } from "entities/client-product/model";

const claimId = ref<String | String[]>('');
const clientProds: ProductData[] =
    [
          {name:"Тариф Контракт Плюс", type:"Расчетный", number:3245635254645},
          {name:"Тариф Контракт Плюс", type:"Номинальный", number:43435446543},
          {name:"ООО РОВИ ФАКТОРИНГ ПЛЮС", type:"Расчетный", number:43242342342344},
    ]
onMounted(() => {
  const route = useRoute();
  claimId.value = route.params.id;
})
</script>

<template>
  <div class="grid">
    <div class="form-cont"> 
      <ClaimWorkForm/>
    </div>
    <div class="prod-cont">
      <ProductList :data="clientProds"/>  
    </div>
    <div class="mini-form-cont">
      <WorkClaimMiniForm/>
    </div>
    <div class="calls-cont">
      <CallsBlock/>
    </div>
    <div class="chat-cont">
      <div class="nc-container h-100"></div>  
    </div>
  </div>
</template>

<style scoped>
  /**temp */
  .grid {
      display: grid;
      grid-template-columns: auto 2.5fr 3.5fr;
      grid-template-rows: auto 2fr;
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
      min-height: 100%;
  }
  .form-cont { grid-area: 1 / 1 / 3 / 2; }
  .prod-cont { grid-area: 1 / 2 / 2 / 3; }
  .mini-form-cont { grid-area: 1 / 3 / 2 / 4; }
  .calls-cont { grid-area: 2 / 2 / 3 / 3; }
  .chat-cont { grid-area: 2 / 3 / 3 / 4; }

</style>
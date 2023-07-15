<script setup lang="ts">
//нагромаждено всего, это всё зарефачу но потом
import ClaimWorkForm from "features/claimForms/workForm/ClaimWorkForm.vue";
import ClientProductsList from "entities/ClientProduct/ui/ClientProductsList.vue";
import CallsBlock from "features/CallsBlock/ui/CallsBlock.vue";
import WorkClaimMiniForm from "features/claimForms/workForm/WorkClaimMiniForm.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import ClaimFooter from "shared/ui/footer/ClaimFooter.vue";

const claimId = ref<String | String[]>('');
const clientDocsInfoArray =
    [
          {company:"Тариф Контракт Плюс", type:"Расчетный", document:"3245635254645"},
          {company:"Тариф Контракт Плюс", type:"Номинальный", document:"43435446543"},
          {company:"ООО РОВИ ФАКТОРИНГ ПЛЮС", type:"Расчетный", document:"43242342342344"},
        ]

onMounted(() => {
  const route = useRoute();
  claimId.value = route.params.id;
})
</script>

<template>
  <div class="claimSolo d-flex flex-column justify-content-between">
    <div class="mb-6">
      <PlButton type="empty" icon="ArrowLeft24"  @click="$router.push('/')">Вернуться к обращениям</PlButton>
    </div>
    <div
        class="d-grid gap-10 claimSolo_main"
        style="grid-template-columns: 43% 24.45% auto"
    >
      <div class="claimWorkFormContainer">
        <ClaimWorkForm/>
      </div>
      <div class="calls_products d-flex flex-column gap-10">
        <ClientProductsList :clientDocsInfoArray = "clientDocsInfoArray"/>
        <CallsBlock/>
      </div>
      <div class="chats d-flex flex-column gap-10">
        <WorkClaimMiniForm/>
        <div class="nc-container"></div>
      </div>
    </div>
    <ClaimFooter type="edit"/>
  </div>

</template>

<style scoped>
  .claimSolo_main{
    height: 100%;
  }
  .claimSolo{
    margin-bottom: 90px !important;
    height: calc(100% + 300px);
  }
  footer{
    z-index: 2;
    padding: 10px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
  }
</style>
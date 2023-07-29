<script setup lang="ts">
import {computed, ref, watch} from 'vue';
import { DropDown } from "shared/ui/drop-down"
import { useReferenceStore, type ReferenceData } from 'entities/reference';
import { storeToRefs } from 'pinia';
import {type CloseReq, useClaimConfig, useClaimStore} from 'entities/claim';
import {useClaimService} from "../../shared/api/commonApi";
import {router} from "../../app/providers";
import {useRoute} from "vue-router";
import {useModalStore} from "../../widgets/modal";
defineProps(['claimId', 'clientId'])
const {refernces, getStatusesReasonsByStatus} = useReferenceStore()
// const doneStatuses = getStatusesReasonsByDone();
const {closePost} = useClaimStore();
const {closeModal} = useModalStore();
const claimId = ref({
  id:useRoute().params.claimId
})
const formatter = (value) => {
  return value.replace(/D/g, "");
};
const checkMaxSum = (rule, value, callback) => {
  if (value.length < 5) {
    callback(new Error("Оставьте коментарий подлинне"));
  }
  callback();
};
const rules = ref({
  comment : [{
    required:true,
    validator:checkMaxSum
  }],
  status : [{
    required:true,
    message:"Обязалово"
  }],
  status_reason : [{
    required:false,
    message:"Обязалово"
  }]
})
const ncForm = ref<CloseReq>({
  status:'',
  comment: '',
  status_reason:'',
});
const disabled = ref(true);
const curReasons = computed(() => getStatusesReasonsByStatus(ncForm.value.status))
watch(curReasons, (newV,oldV) => {
    if(newV && newV.length>0){
      rules.value.status_reason[0].required = true;
    }else{
      rules.value.status_reason[0].required = false;
    }
})
watch(ncForm, () => {
  formRef?.value?.validate((v) => {
    disabled.value = !v;
  })
}, {deep:true})
const formRef = ref<{validate:(v:any)=>void}|null>(null);
const close = () => {
  formRef?.value?.validate((v) => {
    disabled.value = !v;
    if(v){
      const id  = +claimId.value.id;
      if(!isNaN(id)){
        try{
          closePost(ncForm.value, id);
          ncForm.value.status = '';
          ncForm.value.status_reason = '';
          ncForm.value.comment = '';
          closeModal();
        }catch (e){
          ncForm.value.comment = 'Что-то пошло не так';
        }

      }
    }
  })

}
</script>

<template>
  <PlForm :model="ncForm" :style="{minHeight:'500px', minWidth:'755px'}" ref="formRef"   class="d-grid gap-6 w-100" :rules="rules">
    <div class="d-grid gap-4" style="grid-template-columns: 1fr 1fr .25fr">
      <DropDown label="Статус"
                v-model = "ncForm.status"
                :options="refernces?.statuses!"
                />
      <DropDown v-if="curReasons && curReasons.length > 0" label="Причина"
                v-model = "ncForm.status_reason"
                :options="curReasons"
      />
    </div>
    <div class="d-flex gap-4">
      <PlInputPlus
          textarea
          :formatter = "formatter"
          v-model="ncForm.comment"
          prop="comment"
          label="Коментарий"
          placeholder="Коментарий"
          width="100%"
      />
    </div>
    <div class="d-grid gap-4" style="grid-template-columns: 1fr 1.25fr">
    </div>

    <div class="d-grid gap-4 btns" style="grid-template-columns: 1fr 1.25fr">
        <PlButton :disabled="disabled" @click="close" size="medium">Закрыть</PlButton>
    </div>

  </PlForm>
</template>

<style scoped>

</style>
<script setup lang="ts">
import { computed, ref } from 'vue';
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
const rules = {

}
const ncForm = ref<CloseReq>({
  status:'',
  comment: '',
  status_reason:''
});
const curReasons = computed(() => getStatusesReasonsByStatus(ncForm.value.status))

const formRef = ref(null);
const close = () => {
  const id  = +claimId.value.id;
  console.log(id)
  if(!isNaN(id)){
    closePost(ncForm.value, id);
    ncForm.value.status = '';
    ncForm.value.status_reason = '';
    ncForm.value.comment = '';
    closeModal();
  }
}
const disabled = computed(() => {
  const closeReq = ncForm.value;
  console.log(curReasons.value.length < 1)
  if(!curReasons.value || curReasons.value.length! < 1){
    return (closeReq.status == '' || closeReq.comment == '')
  }
  for(const [_,val] of Object.entries(closeReq)){
    if(val === '' || !val) return true;
  }
  return false;
})
</script>

<template>
  <PlForm model="ncForm" :style="{minHeight:'500px', minWidth:'755px'}" ref="formRef"   class="d-grid gap-6 w-100" :rules="rules">
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
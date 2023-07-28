<script setup lang="ts">
import {CreateClaimForm} from 'features/create-claim'
import type { ClaimReq } from 'entities/claim';
import ActionBar from './action-bar.vue';
import { ref } from 'vue';
import {useClaimService} from "../../shared/api/commonApi";
import {useClaimStore} from "entities/claim";
//мб както вынести? хз пока
const ncForm = ref<ClaimReq>({
  category: 'OUTGOING',
  channel: '',
  initiatorType: '',
  isFirstLine: false,
  claimType: '',
  claimTheme: '',
  description: '',
  priority: '',
  priority_reason: '',
  assignee: '',
  comment: '',
  client: {
    globalCompanyId: null,
    plCompanyId: null,
    inn: '',
    kpp: '',
    ogrn: '',
    fullName: '',
    shortName: '',
  },
  documents: [],
});
const {postCreateClaim} = useClaimStore();
const formRef = ref(null);
const create = () => {
  formRef?.value?.validate(valid => {
    console.log(valid)
  })
  postCreateClaim(ncForm.value)
}

</script>

<template>
    <ActionBar @create="create"/>
    <div class="d-flex gap-6 container">
        <CreateClaimForm :formRef = "formRef" v-model="ncForm"/>
        <div class="right-cont">
        </div>
    </div>
</template>

<style scoped>
    .right-cont{
        flex-grow: 1;
    }
    .container{
        margin: 2rem 13rem;
    }
</style>
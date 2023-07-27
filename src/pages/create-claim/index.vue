<script setup lang="ts">
import {CreateClaimForm, type ClaimReq} from 'features/create-claim'
import ActionBar from './action-bar.vue';
import { ref } from 'vue';
//мб както вынести? хз пока
const ncForm = ref<ClaimReq>({
  category: 'OUTGOING',
  channel: '',
  initiatorType: '',
  isFirstLine: false,
  claimType: '',
  claimTheme: '',
  description: '',
  serviceCount: 0,
  priority: '',
  priority_reason: '',
  assignee: '',
  comment: '',
  client: {
    globalCompanyId: 0,
    plCompanyId: '',
    inn: '',
    kpp: '',
    ogrn: '',
    fullName: '',
    shortName: '',
  },
  documents: [],
});

</script>

<template>
    <ActionBar/>
    <div class="d-flex gap-6 container">
        <CreateClaimForm v-model="ncForm"/>
        <div class="right-cont">
        </div>
    </div>
</template>

<style scoped>
    .right-cont{
        flex-grow: 1;
    }
    .container{
        margin: 3rem 2rem;
    }
</style>
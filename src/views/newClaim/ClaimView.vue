<script setup lang="ts">
import NewClaimForm from '@/features/claimForms/newForm/NewClaimForm.vue'
import ClientInfo from '@/components/ClientInfo.vue'
import Chat from '@/widgets/chat/Chat.vue'
import ClaimFooter from '@/widgets/footer/ClaimFooter.vue'
import type { ClaimReq } from '@/interfaces/requests/ClaimReq';
import { ref } from 'vue';

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
    <div class="mb-6">
        <PlButton type="empty" icon="ArrowLeft24"  @click="$router.push('/')">Вернуться к обращениям</PlButton>
    </div>
    <div class="d-flex gap-6">
        <NewClaimForm v-model="ncForm"/>
        <div class="right-cont">
            <ClientInfo/>
            <Chat/>
        </div>
    </div>
    <ClaimFooter :req="ncForm"/>
</template>

<style scoped>
    .right-cont{
        flex-grow: 1;
    }
</style>
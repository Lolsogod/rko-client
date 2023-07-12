<script setup lang="ts">
import Layout from '@/layouts/Layout.vue';
import Claims from '@/features/claims/Claims.vue'
import router from '@/app/providers/router'
import Modal from '@/widgets/modal/Modal.vue';

import {useModalStore} from '@/app/providers/stores/modal'
import ClaimInfo from '@/widgets/modal/ClaimInfo.vue';
import  StateJournal from '@/widgets/modal/StateJournal.vue';

const modalStore = useModalStore()
</script>
<template>
    <div class="d-flex c-flex b-flex mb-6">
      <span class="typography-headline-h3-semi-bold">Мои задачи</span>
      <!--сделать стрелочку-->
      <PlButton size="medium" @click="router.push('/claim')">Добавить обращения</PlButton>
    </div>
    <Claims/>
    <Modal :is-open="modalStore.isOpen" @close="modalStore.closeModal" :title="modalStore.title">
      <ClaimInfo v-if="modalStore.type == 'info'" :claim="modalStore.claim!"/>
      <StateJournal v-else-if="modalStore.type == 'journal'" :claim="modalStore.claim!"/>
    </Modal>
</template>
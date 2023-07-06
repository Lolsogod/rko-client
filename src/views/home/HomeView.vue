<script setup lang="ts">
import Layout from '@/layouts/Layout.vue';
import Claims from '@/features/claims/Claims.vue'
import router from '@/router'
import Modal from '@/widgets/modal/Modal.vue';

import {useModalrStore} from '@/stores/modal'
import ClaimInfo from '@/widgets/modal/ClaimInfo.vue';
import  StateJournal from '@/widgets/modal/StateJournal.vue';

const modalStore = useModalrStore()
</script>

<template>
    <div class="d-flex c-flex b-flex mb-6">
      <span class="typography-headline-h3-semi-bold">Мои задачи</span>
      <!--спросить самому ли делать стрелочку-->
      <PlButton size="medium" @click="router.push('/claim')">Добавить обращения</PlButton>
    </div>
    <Claims/>
    <Modal :is-open="modalStore.isOpen" @close="modalStore.closeModal" :title="modalStore.title">
      <ClaimInfo v-if="modalStore.type == 'info'"/>
      <StateJournal v-else-if="modalStore.type == 'journal'"/>
    </Modal>
</template>

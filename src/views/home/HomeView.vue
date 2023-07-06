<script setup lang="ts">
import Layout from '@/layouts/Layout.vue';
import Claims from '@/features/claims/Claims.vue'
import router from '@/router'
import Modal from '@/widgets/modal/Modal.vue';

import {useModalrStore} from '@/stores/modal'
import ClaimInfo from '@/widgets/modal/ClaimInfo.vue';

const modalStore = useModalrStore()
</script>

<template>
    <div class="d-flex c-flex b-flex mb-6">
      <span class="typography-headline-h3-semi-bold">Мои задачи</span>
      <!--спросить самому ли делать стрелочку-->
      <PlButton size="medium" @click="router.push('/claim')">Добавить обращения</PlButton>
    </div>
    <Claims/>
    <!-- тут временно будет онли инфа клейма, для теста (и всегда открыт)
    <Modal :is-open="modalStore.isOpen" @close="modalStore.closeModal" :title="modalStore.title">
      
      {{ modalStore.content }}
    </Modal>}-->
    <Modal :is-open="true" @close="modalStore.closeModal" title="Просмотр обращения">
      <ClaimInfo/>
    </Modal>
</template>

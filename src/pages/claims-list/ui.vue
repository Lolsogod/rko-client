<script setup lang="ts">
/*
import {ClaimsTable} from 'entities/claim'
import { router } from 'app/providers'
import {Modal} from 'widgets/modal';

import {useModalStore} from 'widgets/modal'
import {ClaimInfo} from 'entities/claim';
import  {StatusTable} from 'entities/status-history';


const modalStore = useModalStore()*/
</script>
<template>
    Всё Заново!
    <!--
    <div class="d-flex c-flex b-flex mb-6">
      <span class="typography-headline-h3-semi-bold">Мои задачи</span>
      --сделать стрелочку--
      <PlButton size="medium" @click="router.push('/claim')">Добавить обращения</PlButton>
    </div>
    <ClaimsTable/>
    <Modal :is-open="modalStore.isOpen" @close="modalStore.closeModal" :title="modalStore.title">
      <ClaimInfo v-if="modalStore.type == 'info'" :claim="modalStore.claim!"/>
      <StatusTable v-else-if="modalStore.type == 'journal'" :claim="modalStore.claim!"/>
    </Modal>-->

</template>
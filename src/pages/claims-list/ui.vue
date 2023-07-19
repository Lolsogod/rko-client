<script setup lang="ts">
import { CurClaimCard } from 'entities/claim';

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
    <main>
      <h3>Задачи</h3>
      <div class="d-flex gap-4">
        <!--это тож в отд компонент-->
        <button>Мои задачи</button>
        <button>Все задачи</button>
        <button>Создать</button>
      </div>
      <!--роутер виев сюда потом-->
      <div>
        <CurClaimCard/>
        <!--columns-->
      </div>
    </main>
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

<style scoped>
  main{
    margin: auto;
    margin-top: 1.5rem;
    width: 84rem;
  }
</style>
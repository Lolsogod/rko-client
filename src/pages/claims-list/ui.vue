<script setup lang="ts">
import {ClaimListNav} from 'widgets/claim-list-nav'
import { useClaimStore } from 'entities/claim'
import { useModalStore } from 'widgets/modal'
import {Modal} from 'widgets/modal';
import {ClaimInfo} from 'entities/claim';
import  {StatusTable} from 'entities/status-history';

const modalStore = useModalStore()
const store = useClaimStore()
store.fetchClaims()
</script>

<template>
    <main>
      <h3>Задачи</h3>
      <div class="d-flex gap-4 no-select ">
        <ClaimListNav/>
      </div>
      <RouterView/>
    </main>
    <Modal :is-open="modalStore.isOpen" @close="modalStore.closeModal" :title="modalStore.title">
      <ClaimInfo v-if="modalStore.type == 'info'" :claim="modalStore.claim!"/>
      <StatusTable v-else-if="modalStore.type == 'journal'" :claim="modalStore.claim!"/>
    </Modal>
</template>

<style scoped>
  main{
    margin: auto;
    margin-top: 1.5rem;
    width: 84rem;
  }
</style>
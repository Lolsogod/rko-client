
<script setup lang="ts">
//section edit-claim-page
//нагромаждено всего, это всё зарефачу но потом

import {ActionBar, ClaimEditor, useEditClaimStore} from "features/edit-claim";
import { watch } from "vue";
import {ClaimInfo} from "../../entities/claim";
import {StatusTable} from "../../entities/status-history";
import {Modal, useModalStore} from "../../widgets/modal";
import {CloseForm} from "features/close-claim";
const props = defineProps(['clientId', 'claimId'])
const store = useEditClaimStore()
const modalStore = useModalStore();
watch(props, () => store.fetchClaim(props.claimId))
//store.fetchClaim(props.claimId)
</script>

<template>
    <div class="d-grid container"  style="grid-template-columns: 18fr 5fr">
        <div>
            <div class="d-grid">
                <ActionBar v-if="store.claim" :claim="store.claim"/>
                <div class="d-grid gap-6 content" style="grid-template-columns: 18fr 9fr">
                    <ClaimEditor/>
                    <div class="client"></div>
                </div>
            </div>
            
        </div>
        <div class="chat">
        </div>
      <Modal :is-open="modalStore.isOpen" @close="modalStore.closeModal" :title="modalStore.title">
        <CloseForm v-if="modalStore.type == 'close'" :claim="modalStore.claim!"/>
      </Modal>
    </div>

</template>

<style scoped>
    .content{
        margin: 2rem 3rem;
    }
    .chat{
        background: white;
        height: 100%;
    }
    .client{
        width: 100%;
        height: 40rem;
        border-radius: 0.75rem;
        background: var(--surface-card);
    }
    .container{
        height: 100%;
    }
</style>
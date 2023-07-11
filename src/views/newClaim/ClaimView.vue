<script setup lang="ts">
import NewClaimForm from '@/features/claimForms/newForm/NewClaimForm.vue'
import ClientInfo from '@/components/ClientInfo.vue'
import Chat from '@/widgets/chat/Chat.vue'
import ClaimFooter from '@/widgets/footer/ClaimFooter.vue'
</script>

<template>

    <div class="mb-6">
        <PlButton type="empty" icon="ArrowLeft24"  @click="$router.push('/')">Вернуться к обращениям</PlButton>
    </div>
    <div class="d-flex gap-6">
        <NewClaimForm/>
        <div class="right-cont">
            <ClientInfo/>
            <Chat/>
        </div>
    </div>
    <ClaimFooter/>
</template>

<style scoped>
    .right-cont{
        flex-grow: 1;
    }
</style>
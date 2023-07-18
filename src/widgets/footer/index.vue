<script setup lang="ts">
import type { ClaimReq } from 'interfaces/requests/ClaimReq';
import { createClaim } from "shared/api/claimApi"

const props = defineProps<{
    req?: ClaimReq
    type?: String
}>()
</script>

<template>
    <footer v-if="type!='claims-list'" class="d-flex align-items-center justify-content-end">
        <div v-if="type=='create-claim'" class="d-flex gap-6">
            <PlButton type ="secondary">Отмена</PlButton>
            <PlButton type ="secondary">Зарегистрировать + Новое</PlButton>
            <PlButton @click="createClaim(props.req!)">Зарегистрировать</PlButton>
        </div>
        <div v-else-if="type=='edit-claim'" class="d-flex gap-6">
            <PlButton type ="secondary">Свернуть</PlButton>
            <PlButton type ="secondary">Перевести</PlButton>
            <PlButton type ="secondary">Отложить</PlButton>
            <PlButton>Закрыть</PlButton>
        </div>
    </footer>
</template>

<style scoped>
    footer{
        padding: 1rem;
        height: 5rem;
        background-color: white;
    }
</style>
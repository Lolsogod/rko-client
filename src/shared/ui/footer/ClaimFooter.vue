<script setup lang="ts">
import type { ClaimReq } from 'interfaces/requests/ClaimReq';
import { createClaim } from "shared/api/claimApi"

const props = defineProps<{
    req?: ClaimReq
    type: String
}>()
</script>

<template>
    <footer class="d-flex align-items-center justify-content-end">
        <div v-if="props.type=='create'" class="d-flex gap-6">
            <PlButton type ="secondary">Отмена</PlButton>
            <PlButton type ="secondary">Зарегистрировать + Новое</PlButton>
            <PlButton @click="createClaim(props.req!)">Зарегистрировать</PlButton>
        </div>
        <div v-else-if="props.type=='edit'" class="d-flex gap-6">
            <PlButton type ="secondary">Свернуть</PlButton>
            <PlButton type ="secondary">Перевести</PlButton>
            <PlButton type ="secondary">Отложить</PlButton>
            <PlButton>Закрыть</PlButton>
        </div>
    </footer>
</template>

<style scoped>
    footer{
        z-index: 2;
        padding: 10px;
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: white;
        width: 100%;
    }
</style>
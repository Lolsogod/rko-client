<script setup lang="ts">
import { router } from 'app/providers';
import { BadgeBtnGrad } from 'shared/ui/badge-btn-grad';

const isCur = route => router.currentRoute.value.path==route
console.log(router.currentRoute.value.path)
</script>
<template>
    <BadgeBtnGrad @click="$router.push('/')" :active="isCur('/')">Мои задачи</BadgeBtnGrad>
    <BadgeBtnGrad @click="$router.push('/all')" :active="isCur('/all')">Все задачи</BadgeBtnGrad>
    <BadgeBtnGrad>Создать</BadgeBtnGrad>
</template>
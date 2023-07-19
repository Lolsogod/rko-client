<script setup lang="ts">
import { router } from 'app/providers';
import { BadgeBtn } from 'shared/ui/badge-btn';

const isCur = route => router.currentRoute.value.path==route
console.log(router.currentRoute.value.path)
</script>
<template>
    <BadgeBtn @click="$router.push('/')" :active="isCur('/')">Мои задачи</BadgeBtn>
    <BadgeBtn @click="$router.push('/all')" :active="isCur('/all')">Все задачи</BadgeBtn>
    <BadgeBtn>Создать</BadgeBtn>
</template>
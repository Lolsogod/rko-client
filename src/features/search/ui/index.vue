<script setup lang="ts">
import { DropDown } from "shared/ui/drop-down";
</script>

<template>
    <div class="d-flex c-flex gap-4 mr-6 ml-4">
        <PlInputPlus class="search" placeholder="Поиск задачи" leftIcon="Search20" width="30rem"/>
        <DropDown placeholder="Сегодня"/>
        <PlButton type="secondary" icon="Filter24"/>
    </div>
</template>

<style scoped>

</style>
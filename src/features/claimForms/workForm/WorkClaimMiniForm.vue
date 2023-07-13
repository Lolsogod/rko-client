<script setup lang="ts">

import DropDown from 'shared/ui/DropDown/ui/DropDown.vue';
</script>

<template>
  <div class="d-grid gap-4">
    <div>Работа с обращениями</div>
    <div class="d-grid gap-4" style="grid-template-columns: 1fr 1fr">
      <DropDown placeholder="Журнал состояний" grey/>
      <DropDown placeholder="Учёт времени" grey/>
    </div>
    <DropDown placeholder="Архивные обращения по клиенту" grey/>
    <div class="mt-2">Карточка клиента</div>
    <div class="d-grid gap-4" style="grid-template-columns: 1fr 1fr">
      <DropDown placeholder="Организация" grey/>
      <DropDown placeholder="Представитель" grey/>
    </div>
  </div>
</template>

<style scoped>

</style>
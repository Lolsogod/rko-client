<script setup lang="ts">
import HorisontalFormMenu from "./HorisontalFormMenu.vue"

</script>

<template>
  <div class="gap-2 nc-container ecForm">
    <h5 class="m-0 form-title">Работа с обращением</h5> 
    <HorisontalFormMenu/>
    <RouterView/>
  </div>
</template>

<style scoped>
  .form-title{
    font-weight: normal;
  }


.ecForm{
  max-width: 900px;
  height: 100%;
}

</style>
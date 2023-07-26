<script setup lang="ts">
import HorisontalFormMenu from "./edit-nav.vue"

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

    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white !important;
    padding: 2rem;
    border-radius: 1rem;
    flex-grow: 1;
  }

</style>
<script setup lang="ts">

</script>

<template>
  <div class="gap-2 nc-container ecForm">
    <PlInputPlus
        prop="descrClaim"
        label="Описание обращения"
        placeholder="Введите описание обращения"
        width="100%"
    />
  </div>
</template>

<style scoped>
  .form-title{
    color: var(--text-icons-primary);
  }
  .ecForm{
    height: 100%;

    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white !important;
    padding: 2rem;
    border-radius: 1rem;
    flex-grow: 1;
  }

</style>
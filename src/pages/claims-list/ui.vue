<script setup lang="ts">
import { CurClaimCard } from 'entities/claim';
</script>
<template>
    <main>
      <h3>Задачи</h3>
      <div class="d-flex gap-4">
        <!--это тож в отд компонент-->
        <button>Мои задачи</button>
        <button>Все задачи</button>
        <button>Создать</button>
      </div>
      <!--роутер виев сюда потом-->
      <div>
        <CurClaimCard/>
        <!--columns-->
      </div>
    </main>
</template>

<style scoped>
  main{
    margin: auto;
    margin-top: 1.5rem;
    width: 84rem;
  }
</style>
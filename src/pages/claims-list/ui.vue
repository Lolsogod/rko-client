<script setup lang="ts">
import {ClaimListNav} from 'widgets/claim-list-nav'
</script>
<template>
    <main>
      <h3>Задачи</h3>
      <div class="d-flex gap-4">
        <ClaimListNav/>
      </div>
      <RouterView/>
    </main>
</template>

<style scoped>
  main{
    margin: auto;
    margin-top: 1.5rem;
    width: 84rem;
  }
</style>
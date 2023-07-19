<script setup lang="ts">
import { CurClaimCard, ClaimCol } from 'entities/claim';
</script>
<template>
    <div>
        <CurClaimCard/>
        <div class="col-cont">
            <ClaimCol/>
            <ClaimCol/>
            <ClaimCol/>
        </div>
      </div>
</template>

<style scoped>
  .col-cont{
    padding: 2rem 0;
    display: flex;
    gap: 1.5rem
  }
</style>
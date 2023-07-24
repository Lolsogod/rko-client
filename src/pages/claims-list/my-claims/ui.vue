<script setup lang="ts">
import { CurClaimCard, ClaimCol, useClaimStore } from 'entities/claim';
const claimStore = useClaimStore()

</script>
<template>
    <div>
        <!--тут чо нить лучше в ифа надобы-->
        <CurClaimCard v-if="claimStore.currentClaim" :claim="claimStore.currentClaim"/>
        <div class="col-cont">
            <ClaimCol title="🏁 Новые" type="new"/>
            <ClaimCol title="🕐 Сегодня" type="today"/>
            <ClaimCol title="🙋‍♂ Завтра" type="tomorrow"/>
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
<script setup lang="ts">
import { router } from "app/providers";
import { BadgeBtn } from "shared/ui/badge-btn";
import {computed, ref} from "vue";
import { useEditClaimStore } from ".";
import {useClaimStore} from "entities/claim/index";

//список айди всех клаймов клиента, но пока не с бэка
const sel = computed(()=>router.currentRoute.value.params.claimId)
const store = useEditClaimStore()
store.fetchClaimIdsByClientInn();
const select = (item:string) => {
  store.fetchClaim(parseInt(item))
  router.push(`/client/1/${item}`)
}
//@ts-ignore
store.fetchClaim(parseInt(sel.value))

</script>

<template>
    <div class="cont d-flex gap-3">
      <BadgeBtn v-for="id in store.claimids" :key="id"
       :active="sel==id" 
       @click="select(id)">
        rko-{{ id }}
      </BadgeBtn>
    </div>
</template>



<style scoped>
  
  
</style>
<script setup lang="ts">
import { router } from "app/providers";
import { BadgeBtn } from "shared/ui/badge-btn";
import {computed, ref} from "vue";
import { useEditClaimStore } from ".";

//список айди всех клаймов клиента, но пока не с бэка
const ids = ref(['1', '2', '3', '4','5','6','7']);
const sel = computed(()=>router.currentRoute.value.params.claimId)
const store = useEditClaimStore()

const select = (item:string) => {
  store.fetchClaim(parseInt(item))
  router.push(`/client/1/${item}`)
}
//@ts-ignore
store.fetchClaim(parseInt(sel.value))

</script>

<template>
    <div class="cont d-flex gap-3">
      <BadgeBtn v-for="id in ids" :key="id"
       :active="sel==id" 
       @click="select(id)">
        rko-{{ id }}
      </BadgeBtn>
    </div>
</template>



<style scoped>
  
  
</style>
<script setup lang="ts">
import { router } from "app/providers";
import {computed, ref} from "vue";
const ids = ref(['1', '2', '3', '4']);
const sel = computed(()=>router.currentRoute.value.params.claimId)

const select = (item:string) => {
  router.push(`/client/1/${item}`)
}

</script>

<template>
    <div class="cont d-flex b-flex">
      <button v-for="id in ids" :key="id"
       :class="sel==id?'active':''" 
       @click="select(id)">
        SD-{{ id }}
      </button>
    </div>
    <!--кружок потом-->
</template>



<style scoped>
  .cont{
    border-bottom: 2px solid #dadde7;
  }
  button{
    text-align: left;
    width: 10rem;
    font-size: medium;
    transform: translateY(2px);
    border: 0;
    border-bottom: 2px solid #dadde7;
    background-color: transparent;
    padding: 1rem
  }
  .active{
    color: #4063eb;
    border-bottom: 2px solid #4063eb;
  }
</style>
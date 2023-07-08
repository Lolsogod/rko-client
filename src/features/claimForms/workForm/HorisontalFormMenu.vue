<template>
  <div class="menu  d-flex justify-content-between">
    <div class="menu__items">
      <div v-for="(item, index) in menuItems" :key="index" class="menu-item"
           :class="{ 'active': selectedItem === item }" @click="selectItem(item)">
        {{ item }}
      </div>


    </div>
    <IconInCircle>
      <div>1</div>
    </IconInCircle>
  </div>
</template>

<script setup lang="ts">
import IconInCircle from "../../../shared/ui/IconInCircle.vue";
import {ref} from "vue";
const menuItems = ref(['SD1', 'SD2', 'SD3', 'SD4']);
const selectedItem = ref<String | null>(null);
const selectItem = (item:String) => {
  selectedItem.value = item;
}

</script>

<style scoped>
.menu {
  align-items: center;
}

.menu__items {
  border-bottom: 1px solid #cccccc;
  width: 100%;
  justify-content: space-between;
  display: flex;

}

.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100px;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
}

.menu-item.active {
  border-bottom: 1px solid var(--token-color-border-active);

  color: var(--token-color-border-active);
}


</style>
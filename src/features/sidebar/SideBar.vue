<script setup lang="ts">
import type {SLinkInfo} from '@/interfaces/SideLink'
import SideLink from './SideLink.vue';

const props = defineProps<{
  open: boolean
}>();

const links: SLinkInfo[] = [
  {text: "Открытие счёта", to: "#", icon: "BlankCheck24", current: false},
  {text: "Обращения", to: "/", icon: "Mail24", current: true},
  {text: "Доставка", to: "#", icon: "Truck24", current: false},
  {text: "Обновление Данных", to: "#", icon: "BlankPan24", current: false},
  {text: "Доп счёт", to: "#", icon: "Wallet24", current: false},
  {text: "Смена тарифа", to: "#", icon: "Edit24", current: false},
  {text: "Закрытие счёта", to: "#", icon: "BlankLock24", current: false},
  {text: "Организация", to: "#", icon: "Group24", current: false},
  {text: "Физ Лица", to: "#", icon: "User24", current: false},

]
</script>

<template>
  <div class="side-bar d-grid gap-4 pt-4" :class="props.open?'open':''">
    <SideLink v-for="link in links" :key="link.text" :link="link"/>
  </div>
</template>
<style scoped>
.side-bar {
  overflow: hidden;
  align-content: start;
  background-color: white;
  width: 4rem;
  transition: .3s all ease;

}

.open {
  transition: .3s all ease;
  width: 15rem;
}

</style>
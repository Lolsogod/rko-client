<script setup lang="ts">
import type {SLinkInfo} from './side-link/model'
import {SideLink} from './side-link';

const props = defineProps<{
  open: boolean
}>();

const links: {[key: string]: SLinkInfo[]} = {
  claim: [
    {text: "Открытие счёта", to: "#", icon: "BlankCheck24", current: false},
    {text: "Обращения", to: "/", icon: "Mail24", current: true},
    {text: "Доставка", to: "#", icon: "Truck24", current: false},
    {text: "Обновление Данных", to: "#", icon: "BlankPan24", current: false},
    {text: "Доп счёт", to: "#", icon: "Wallet24", current: false},
    {text: "Смена тарифа", to: "#", icon: "Edit24", current: false},
    {text: "Закрытие счёта", to: "#", icon: "BlankLock24", current: false}
  ],
  client: [
    {text: "Организация", to: "#", icon: "Group24", current: false},
    {text: "Физ Лица", to: "#", icon: "User24", current: false},
  ],
  settings:[
    {text: "Настройки профиля", to: "#", icon: "Settings24", current: false},
  ]
}


</script>

<template>
  <div class="side-bar d-grid  pt-4 pb-6" :class="props.open?'open':''">
    <div class="d-grid start gap-14">
      <div class="d-grid start gap-4">
        <SideLink v-for="link in links.claim" :key="link.text" :link="link"/>
      </div>
      <div class="d-grid start gap-4">
        <SideLink v-for="link in links.client" :key="link.text" :link="link"/>
      </div>
    </div>
    <div class="bot">
      <SideLink v-for="link in links.settings" :key="link.text" :link="link"/>
    </div>
  </div>
</template>
<style scoped>
.side-bar {
  overflow: hidden;

  background-color: white;
  width: 4rem;
  transition: .3s all ease;
  
}
.start{
  align-content: start;
}
.open {
  transition: .3s all ease;
  width: 16rem;
}
.bot{
  align-self: end;
}
</style>
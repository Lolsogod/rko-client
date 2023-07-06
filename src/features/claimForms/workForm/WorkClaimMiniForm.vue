<script setup lang="ts">

import DropDownSelect from "../../../shared/ui/DropDownSelect.vue";
</script>

<template>
  <div class="workClaimMiniForm d-flex flex-column gap-4">
    <div class="workClaimMiniForm__item inline">
      <div class="label">
        Работа с обращениями
      </div>
      <div class="dropDownBlock">
        <DropDownSelect :bg="'#e7e7e7'" :menu-items="['Журнал состояний1','Журнал2']" :title="''"/>
        <DropDownSelect :bg="'#e7e7e7'" :menu-items="['Учет времени','Учет времени']" :title="''"/>
      </div>

    </div>
    <div class="workClaimMiniForm__item">
      <DropDownSelect :bg="'#e7e7e7'" :menu-items="['Архивные обращения по клиенту','Журнал ']" :title="''"/>

    </div>
    <div class="workClaimMiniForm__item inline mt-8">
      <div class="label">
        Карточка клиента
      </div>
      <div class="dropDownBlock">
        <DropDownSelect :bg="'#e7e7e7'" :menu-items="['Организации','Журнал ']" :title="''"/>
        <DropDownSelect :bg="'#e7e7e7'" :menu-items="['Представитель','Представитель1']" :title="''"/>
      </div>


    </div>
  </div>
</template>

<style scoped>
.workClaimMiniForm__item.inline {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.workClaimMiniForm__item.inline .dropDownBlock{
  display: flex;
  gap: 6%;
}
.workClaimMiniForm{
  height: 250px;

}
.workClaimMiniForm__item.inline .inline__items {
  align-self: flex-end;
}


.workClaimMiniForm__item {
}
</style>
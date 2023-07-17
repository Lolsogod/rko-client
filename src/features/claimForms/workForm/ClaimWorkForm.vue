<script setup lang="ts">
import {ref} from "vue";
import HorisontalFormMenu from "./HorisontalFormMenu.vue"
import { DropDown } from "shared/ui/drop-down"



const rules = {}
const ecForm = ref({
  channelClaim: ""//канал обращений
  ,
  initiator: ""//инициатор
  ,
  clientInfo: ""//информация клиента
  ,
  themeClaim: ""//тип обращения
  ,
  descrClaim: ""//описание обращения
  ,
  pririority: ""//приоритет
  ,
  cause: ""//обоснование
  ,
  executor: ""//исполнитель
  ,
  comment: ""
});
const formRef = ref(null);
const create = () => {
  //@ts-ignore
  formRef.value!.validate((valid) => {
    console.log(valid);
  });
};
</script>

<template>
  <div class="gap-2 nc-container ecForm">
    <h5 class="mt-0 form-title">Работа с обращением</h5> 
    <HorisontalFormMenu/>
    <RouterView/>
    <!--<PlForm ref="formRef" :model="ecForm" style="max-width: 900px" class="d-grid gap-6 w-100" :rules="rules">

      <div class="claimWorkForm__item inline">
        <DropDown label="Канал сообщений"/>
        <DropDown label="Клиент" />
        <h6 class="inline__items">Входящие</h6>
      </div>
      <div class="claimWorkForm__item">
        <PlInputPlus
            v-model="ecForm.clientInfo"
            prop="clientInfo"
            label="Клиент"
            placeholder="ИНН 1234 Дмитрий А"
            width="100%"
        />
      </div>
      <div class="claimWorkForm__item inline">
        <DropDown label="Тип сообщения"/>
        <DropDown label="Тема"/>
      </div>
      <div class="claimWorkForm__item">
        <PlInputPlus
            textarea
            v-model="ecForm.descrClaim"
            prop="descrClaim"
            label="Описание обращения"
            placeholder="Введите описание обращения"
            width="100%"
        />
      </div>
      <div class="claimWorkForm__item inline">
        <DropDown label="Приоритет"/>
        <PlInputPlus
            v-model="ecForm.cause"
            prop="cause"
            label="Обоснование"
            placeholder="Повышение приоритета"
            width="100%"
        />
      </div>
      <div class="claimWorkForm__item inline">
        <DropDown label="Исполнитель"/>
        <PlInputPlus
            :style="{padding:'5px'}"
            v-model="ecForm.executor"
            prop="executor"
            label="Комментарий"
            placeholder="Опционально"
            width="100%"
        />
      </div>
    </PlForm>-->
  </div>
</template>

<style scoped>
  .form-title{
    font-weight: normal;
  }

.claimWorkForm__item.inline {
  display: grid;
  gap: 40px;
  grid-auto-flow: column;
}

.claimWorkForm__item.inline .inline__items {
  align-self: flex-end;
}
.ecForm{
  max-width: 900px;
  height: 100%;
}

.claimWorkForm__item {
  margin-top: 20px;
}
</style>
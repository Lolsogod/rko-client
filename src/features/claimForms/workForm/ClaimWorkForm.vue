<script setup lang="ts">
import {ref} from "vue";
import HorisontalFormMenu from "./HorisontalFormMenu.vue"
import DropDownSelect from "../../../shared/ui/DropDownSelect.vue";

const formatter = (value: any) => {
  return value.replace(/D/g, "");
};
const checkMaxSum = (rule: any, value: any, callback: any) => {
  if (value > 11111) {
    callback(new Error("Сумма превышает доступный лимит"));
  }
  if (value === null) {
    callback(new Error("Обязательно для заполнения"));
  }
  callback();
};

const rules = {
  channelClaim: [{
    require: true,

  }]//канал обращений
  ,
  initiator: [{
    require: true,

  }]//инициатор
  ,
  clientInfo: [{
    require: true,

  }]//информация клиента
  ,
  themeClaim: [{
    require: true,
    trigger:"blur"
  }]//тип обращения
  ,
  descrClaim: [{
    require: true,
    trigger:"blur"

  }]//описание обращения
  ,
  pririority: [{
    require: true,
    trigger: "blur"
  }]//приоритет
  ,
  cause: [{
    require: true,
    trigger:"blur"

  }]//обоснование
  ,
  executor: [{
    require: true,
    trigger:"blur"

  }]//исполнитель
  ,
  comment: [{
    require: true,
    trigger:"blur"

  }]
}
const ncForm = ref({
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
  <div class="d-grid gap-2 nc-container claimWorkForm">
    <div class="claimWorkForm__header">
      <h4 class="mt-0">Работа с обращениями</h4>
      <HorisontalFormMenu/>

      <PlForm ref="formRef" :model="ncForm" style="max-width: 900px" class="d-grid gap-6 w-100" :rules="rules">

        <div class="claimWorkForm__item inline">
                    <DropDownSelect :menu-items="['Чат','Чат1вывы']" :title="'Канал сообщений'"/>
                    <DropDownSelect :menu-items="['Клиент','Клиент1']" :title="'Клиент'"/>
          <h6 class="inline__items">Входящие</h6>
        </div>
        <div class="claimWorkForm__item">
          <!--          тут надо заблочить его, эта инфа с сервера приходит-->
          <PlInputPlus
              v-model="ncForm.clientInfo"
              prop="clientInfo"
              label="Клиент"
              placeholder="ИНН 1234 Дмитрий А"
              width="100%"
          />
        </div>
        <div class="claimWorkForm__item inline">
          <!--          //тут просто добавить проп можно selectedItem - вынести его сюда, хотя лучше в стор-->
                    <DropDownSelect :menu-items="['Тип1','Тип2']" :title="'Тип сообщения'"/>
                    <DropDownSelect :menu-items="['Тема1','Тема2']" :title="'Тема'"/>
        </div>
        <div class="claimWorkForm__item">
          <PlInputPlus
              textarea
              v-model="ncForm.descrClaim"
              prop="descrClaim"
              label="Описание обращения"
              placeholder="Введите описание обращения"
              width="100%"
          />
          <!---->
        </div>
        <div class="claimWorkForm__item inline">
          <!--          тут тоже самое-->
                    <DropDownSelect :menu-items="['низкий','высокий']" :title="'Приоритет'"/>
          <PlInputPlus
              v-model="ncForm.cause"
              prop="cause"
              label="Обоснование"
              placeholder="Повышение приоритета"
              width="100%"
          />
        </div>
        <div class="claimWorkForm__item inline">
                    <DropDownSelect :menu-items="['Исполнитель1','Исполнитель2']" :title="'Исполнитель'"/>
          <PlInputPlus
              :style="{padding:'5px'}"
              v-model="ncForm.executor"
              prop="executor"
              label="Комментарий"
              placeholder="Опционально"
              width="100%"

          />
        </div>
      </PlForm>
    </div>
  </div>
</template>

<style scoped>


.claimWorkForm__item.inline {
  display: flex;
  gap: 40px;
  justify-content: space-between;
}

.claimWorkForm__item.inline .inline__items {
  align-self: flex-end;
}
.claimWorkForm{
  height: 100%;
}

.claimWorkForm__item {
  margin-top: 20px;
}
</style>
<script setup lang="ts">
import { ref } from "vue";

const formatter = (value:any) => {
  return value.replace(/D/g, "");
};
const checkMaxSum = (rule: any, value:any, callback:any) => {
  if (value > 11111) {
    callback(new Error("Сумма превышает доступный лимит"));
  }
  if (value === null) {
    callback(new Error("Обязательно для заполнения"));
  }
  callback();
};
const rules = ref({
  summ: [
    {
      validator: checkMaxSum,
      trigger: "blur",
    },
  ],
  name: [
    {
      required: true,
      trigger: "blur",
    },
  ],
  age: [
    {
      required: true,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Обязательное поле",
      trigger: "blur",
    },
  ],
  text: [
    {
      required: true,
      message: "Обязательное поле",
      trigger: "blur",
    },
  ],
});
const ncForm = ref({
  client: "",
  descr: ""
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
    <div class="d-grid gap-2 nc-container">
      <div>
        <h4 class="mt-0">Новое обращение</h4> <!--когда разберусь с формой добавлю штуки-->
        <PlForm ref="formRef" :model="ncForm" style="max-width: 900px" :rules="rules" class="d-grid gap-6 w-100">
          <div class="d-flex gap-4">
            <PlInputPlus 
              v-model="ncForm.client" 
              prop="client"
              tooltip="ИНН клиент шото там хз" 
              label="Клиент" 
              placeholder="Начните вводить ИНН или наименование и выберите из списка" 
              width="100%"
            />
          </div>
          
          <PlInputPlus
            textarea
            v-model="ncForm.descr"
            prop="descr"
            label="Описание обращения" 
            placeholder="Введите описание обращения" 
            width="100%"
    
          />
          <!--<div class="d-flex gap-2">
            <PlButton type="primary" @click="create">Submit</PlButton>
            <PlButton @click="formRef!.resetFields()">Reset Fields</PlButton>
            <PlButton @click="formRef!.clearValidate()">Clear Validate</PlButton>
          </div>-->
        </PlForm>
      </div>
    </div>
  </template>
<!--<script setup lang="ts">

</script>

<template>
    <div class="nc-container">
a
    </div>
</template>
-->
<style scoped>
    .nc-container{
        background-color: white;
        padding: 2rem;
        border-radius: 1rem;
        max-width: 900px;
        flex-grow: 1;
    }
</style>
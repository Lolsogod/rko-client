<script setup lang="ts">
import { reactive, ref } from "vue";

const rules = {
  client: [{
    require: true,
  }],
  descr: [{
    require: true,
  }],
}

const ncForm = ref({
  client: "",
  descr: ""
});

const formRef = ref(null)
</script>

<template>
    <div class="d-grid gap-2 nc-container">
      {{ ncForm.client }}
      <div>
        <div class="d-flex c-flex b-flex">
          <h5 class="mt-0 form-title">Новое обращение</h5> 
          <div class="claim-id">SM-1247</div>
          <div class="d-flex gap-12 c-flex">
            <label class="rad d-flex c-flex gap-2">
              <input type="radio" name="radio" />
                Входящие
            </label>
            <label class="rad d-flex c-flex gap-2">
              <input type="radio" name="radio" />
                Исходящие
            </label>
          </div>
        </div>
        <PlForm ref="formRef" :model="ncForm" style="max-width: 900px" :rules="rules" class="d-grid gap-6 w-100">
          <div class="d-flex gap-4">
            <PlInputPlus 
              class="test"
              v-model="ncForm.client" 
              prop="client"
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
        </PlForm>
      </div>
    </div>
  </template>

<style scopraded>
    .rad{
      font-size: smaller;
    }
    input[type="radio"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      margin: 0;
      font: inherit;
      width: 1.2rem;
      height: 1.2rem;
      border: 0.15rem solid #eff0f5;
      border-radius: 50%;
      display: grid;
      place-content: center;
    }
    input[type="radio"]::before {
      content: "";
      width: .5rem;
      height: .5rem;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em #a5abc7;
    }
    input[type="radio"]:checked::before {
      transform: scale(1);
    }
    .nc-container{
        background-color: white;
        padding: 2rem;
        border-radius: 1rem;
        max-width: 900px;
        flex-grow: 1;
    }
    .form-title{
      font-weight: normal;
    }
</style>
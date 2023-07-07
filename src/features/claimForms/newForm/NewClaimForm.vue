<script setup lang="ts">
import { reactive, ref } from "vue";
import newDropDown from "@/widgets/newDropDown/newDropDown.vue"
const rules = {
  client: [{
    require: true,
  }],
  descr: [{
    require: true,
  }],
  just: [{
    require: true,
  }],
}

const ncForm = ref({
  client: "",
  descr: "",
  just: "",
});

const formRef = ref(null)
//вынести чек и радио в отдельные компоненты?
</script>

<template>
    <div class="d-grid gap-2 nc-container">
      {{ ncForm.client }}
      <div>
        <PlForm ref="formRef" :model="ncForm" style="max-width: 900px" :rules="rules" class="d-grid gap-10 w-100">
          <div class="d-flex c-flex b-flex">
            <h5 class="mt-0 form-title">Новое обращение</h5> 
            <div class="id">SM-1247</div>
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
          <div class="d-grid gap-4" style="grid-template-columns: 1fr 1fr .25fr">
            <newDropDown label="Канал обращения" />
            <newDropDown label="Инициатор" />
            <label class="check d-flex c-flex gap-2">
              <input type="checkbox" name="checkbox" />
              1 линия
            </label>
          </div>
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
          <div class="d-grid gap-4" style="grid-template-columns: 1fr 1.25fr">
            <newDropDown label="Исполнитель" />
            <newDropDown label="Тема" />
          </div>
          <PlInputPlus
            textarea
            v-model="ncForm.descr"
            prop="descr"
            label="Описание обращения" 
            placeholder="Введите описание обращения" 
            width="100%"
          />
          <div class="d-grid gap-4" style="grid-template-columns: 1fr 1.25fr">
            <newDropDown label="Приоритет" />
            <PlInputPlus 
              class="test"
              v-model="ncForm.just" 
              prop="just"
              label="Обоснование" 
              placeholder="Повышение приоритета" 
              width="100%"
            />
          </div>
          <div class="d-grid gap-4" style="grid-template-columns: 1fr 1.25fr">
            <newDropDown label="Исполнитель" />
          </div>
        </PlForm>
      </div>
    </div>
  </template>

<style scopraded>
    .id{
      padding: .75rem;
      font-size: small;
      width: 8rem;
      border-radius: .5rem;
      border: 3px solid #eff0f5;
    }
    h5{
      margin: 0
    }
    /*check */
    .check {
      margin-top: 28px;
      font-size: smaller;
    }

    .form-control--disabled {
      color: var(--form-control-disabled);
      cursor: not-allowed;
    }

    input[type="checkbox"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: var(--form-background);
      margin: 0;
      font: inherit;
      color: #eff0f5;
      width: 1.5rem;
      height: 1.5rem;
      border: 3px solid #eff0f5;
      border-radius: .3rem;
      transform: translateY(-0.075em);
      display: grid;
      place-content: center;
    }

    input[type="checkbox"]::before {
      content: "";
      width: .75rem;
      height: .75rem;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      transform: scale(0);
      transform-origin: bottom left;
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--form-control-color);
      background-color: #a5abc7;
    }

    input[type="checkbox"]:checked::before {
      transform: scale(1);
    }
    /*check-end */
    /*radio */
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
      border: 3px solid #eff0f5;
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
    /*radio-end*/
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
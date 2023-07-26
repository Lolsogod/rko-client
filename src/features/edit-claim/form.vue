<script setup lang="ts">
import { ref } from 'vue';
import { DropDown } from "shared/ui/drop-down"
defineProps(['claimId'])

const rules = {}
const ecForm = ref({
  channelClaim: "",
  initiator: "",
  clientInfo: "",
  themeClaim: "",
  descrClaim: "",
  pririority: "",
  cause: "",
  executor: "",
  comment: ""
});
const formRef = ref(null);
</script>

<template>
    <PlForm ref="formRef" :model="ecForm" style="max-width: 900px" class="d-grid gap-6 w-100" :rules="rules">
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
    </PlForm>
</template>

<style scoped>
    .claimWorkForm__item.inline {
  display: grid;
  gap: 40px;
  grid-auto-flow: column;
}

.claimWorkForm__item.inline .inline__items {
  align-self: flex-end;
}
.claimWorkForm__item {
  margin-top: 20px;
}
</style>
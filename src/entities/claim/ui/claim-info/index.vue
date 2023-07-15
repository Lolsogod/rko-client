<script setup lang="ts">
import type { Claim } from 'interfaces/Claim';
import Cell from './info-cell.vue'
import { useClaimConfig } from 'entities/claim/const/claimConfig'

const props = defineProps<{
   claim: Claim
}>()
const conf = useClaimConfig(props.claim)
</script>

<template>
   <div class="container">
      <div class="d-grid mt-6 mb-10 gap-4" style="grid-template-columns: 1fr 1fr 1fr .75fr"> 
         <Cell title="Номер">SD-{{ claim.id }}</Cell>
         <Cell title="Дата создания">{{ conf.createdDate.value}}</Cell>
         <Cell title="Канал обращения">{{ conf.channelLine }}</Cell>
         <Cell title="Инициатор">{{conf.initiator}}</Cell>
      </div>
      <div  class="d-grid mt-6 mb-10 gap-12" style="grid-template-columns: 3fr .75fr">
         <Cell title="Клиент">ИНН {{claim.client?.inn}}, {{ claim.client?.full_name }}</Cell>
         <Cell title="Статус">{{conf.status}}</Cell>
      </div>
      <div  class="d-grid mt-6 mb-10 gap-4" style="grid-template-columns: 2fr 2fr">
         <Cell title="Тип обращения">{{ claim.claim_type }}</Cell>
         <Cell title="Тема">{{claim.claim_theme}}</Cell>
      </div>
      <div lass="d-grid mt-6 mb-10" style="grid-template-columns: 1fr">
         <Cell title="Описание обращения">
            {{ claim.description }}
         </Cell>
      </div>
      <div> -----------здесь будут доки--------------</div>
      <hr>
      <div class="d-grid mt-6 mb-10 gap-4" style="grid-template-columns: 1fr 1fr 1fr">
         <Cell title="Приоритет">{{ conf.priority }}</Cell>
         <Cell title="Обоснование">{{ claim.priority_reason }}</Cell>
         <Cell title="Исполнитель">{{ claim.assignee }}</Cell>
      </div>
      <hr>
      <!--пока непонял откуда брать-->
      <div class="d-grid mt-6 mb-10 gap-4" style="grid-template-columns: 1fr 1fr 1fr">
         <Cell title="Контрольная дата">22.09.23 10:00</Cell>
         <Cell title="Комментарий">Может быть достаточно много текста кого ждем и что </Cell>
         <Cell title="Участники">Кто зарегистрировал, Работал, Закрывал</Cell>
      </div>
      <hr>
      <div class="d-grid mt-6 mb-4 gap-4" style="grid-template-columns: 1fr 1fr 1fr">
         <Cell title="Дата закрытия">22.09.23 10:00</Cell>
         <Cell title="Комментарий">Поле свободного формата</Cell>
         <Cell title="Причина">Решено / Дубль / Отказ</Cell>
      </div>
   </div>
</template>

<style scoped>
   .container{
      width: 55rem;
   }
   hr{
      border-top: 1px solid #c0c0bd;
   }
</style>
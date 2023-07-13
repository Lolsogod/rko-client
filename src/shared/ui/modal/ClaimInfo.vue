<script setup lang="ts">
import type { Claim } from 'interfaces/Claim';
import TInfo from '../TInfo/TInfo.vue'
import { useClaimConfig } from 'entities/claimEntity/const/claimConfig'

const props = defineProps<{
   claim: Claim
}>()
const conf = useClaimConfig(props.claim)
</script>

<template>
   <div class="container">
      <div class="d-grid mt-6 mb-10 gap-4" style="grid-template-columns: 1fr 1fr 1fr .75fr"> 
         <TInfo title="Номер">SD-{{ claim.id }}</TInfo>
         <TInfo title="Дата создания">{{ conf.createdDate.value}}</TInfo>
         <TInfo title="Канал обращения">{{ conf.channelLine }}</TInfo>
         <TInfo title="Инициатор">{{conf.initiator}}</TInfo>
      </div>
      <div  class="d-grid mt-6 mb-10 gap-12" style="grid-template-columns: 3fr .75fr">
         <TInfo title="Клиент">ИНН {{claim.client?.inn}}, {{ claim.client?.full_name }}</TInfo>
         <TInfo title="Статус">{{conf.status}}</TInfo>
      </div>
      <div  class="d-grid mt-6 mb-10 gap-4" style="grid-template-columns: 2fr 2fr">
         <TInfo title="Тип обращения">{{ claim.claim_type }}</TInfo>
         <TInfo title="Тема">{{claim.claim_theme}}</TInfo>
      </div>
      <div lass="d-grid mt-6 mb-10" style="grid-template-columns: 1fr">
         <TInfo title="Описание обращения">
            {{ claim.description }}
         </TInfo>
      </div>
      <div> -----------здесь будут доки--------------</div>
      <hr>
      <div class="d-grid mt-6 mb-10 gap-4" style="grid-template-columns: 1fr 1fr 1fr">
         <TInfo title="Приоритет">{{ conf.priority }}</TInfo>
         <TInfo title="Обоснование">{{ claim.priority_reason }}</TInfo>
         <TInfo title="Исполнитель">{{ claim.assignee }}</TInfo>
      </div>
      <hr>
      <!--пока непонял откуда брать-->
      <div class="d-grid mt-6 mb-10 gap-4" style="grid-template-columns: 1fr 1fr 1fr">
         <TInfo title="Контрольная дата">22.09.23 10:00</TInfo>
         <TInfo title="Комментарий">Может быть достаточно много текста кого ждем и что </TInfo>
         <TInfo title="Участники">Кто зарегистрировал, Работал, Закрывал</TInfo>
      </div>
      <hr>
      <div class="d-grid mt-6 mb-4 gap-4" style="grid-template-columns: 1fr 1fr 1fr">
         <TInfo title="Дата закрытия">22.09.23 10:00</TInfo>
         <TInfo title="Комментарий">Поле свободного формата</TInfo>
         <TInfo title="Причина">Решено / Дубль / Отказ</TInfo>
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
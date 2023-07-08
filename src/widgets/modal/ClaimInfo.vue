<script setup lang="ts">
import type { Claim } from '@/interfaces/Claim';
import TInfo from '../TInfo/TInfo.vue'
//пока всё захардкожено, потом будет круто
defineProps<{
   claim: Claim
}>()
</script>

<template>
   <div class="container">
      <div class="d-grid mt-6 mb-10 gap-4" style="grid-template-columns: 1fr 1fr 1fr .75fr"> 
         <TInfo title="Номер">SD-{{ claim.id }}</TInfo>
         <TInfo title="Дата создания">06.07.23 14:29</TInfo>
         <TInfo title="Канал обращения">Телефон 1 линия</TInfo>
         <TInfo title="Инициатор">Верификатор</TInfo>
      </div>
      <div  class="d-grid mt-6 mb-10 gap-12" style="grid-template-columns: 3fr .75fr">
         <TInfo title="Клиент">ИНН 999999999999, ИП Александровский Александр Александрович</TInfo>
         <TInfo title="Статус">Закрыто</TInfo>
      </div>
      <div  class="d-grid mt-6 mb-10 gap-4" style="grid-template-columns: 2fr 2fr">
         <TInfo title="Тип обращения">Создание п\п с номинального счета</TInfo>
         <TInfo title="Тема">Не требуется юридическое сопровождение</TInfo>
      </div>
      <div lass="d-grid mt-6 mb-10" style="grid-template-columns: 1fr">
         <TInfo title="Описание обращения">
            И нет сомнений, что сделанные на базе интернет-аналитики выводы, вне зависимости от их уровня, должны быть призваны к ответу. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Имеется спорная точка зрения, гласящая примерно следующее: непосредственные участники технического прогресса представлены в исключительно положительном свете. Повседневная практика показывает, что дальнейшее развитие
         </TInfo>
      </div>
      <div> -----------здесь будут доки--------------</div>
      <hr>
      <div class="d-grid mt-6 mb-10 gap-4" style="grid-template-columns: 1fr 1fr 1fr">
         <TInfo title="Приоритет">Высокий</TInfo>
         <TInfo title="Обоснование">Дата сделки ХХ.ХХ.ХХ, потом клиент уезжает на 3 недели</TInfo>
         <TInfo title="Исполнитель">Александрова Александра</TInfo>
      </div>
      <hr>
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
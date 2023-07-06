<script setup lang="ts">
import TInfo from '../TInfo/TInfo.vue'
</script>

<template>
   <!--cюда грид надо, очень надо-->
   <div class="d-flex gap-6 info-cont b-flex mt-10">
        <TInfo title="Номер">SD-7802</TInfo>
        <TInfo title="Дата создания">06.07.23 14:29</TInfo>
        <TInfo title="Канал обращения">Телефон 1 линия</TInfo>
        <TInfo title="Инициатор">Верификатор</TInfo>
   </div> 
   <div class="d-flex gap-6 info-cont b-flex mt-10">
      <TInfo title="Клиент">ИНН 999999999999, ИП Александровский Александр Александрович</TInfo>
      <TInfo title="Статус">Закрыто</TInfo>
   </div>
   <div class="d-flex gap-6 info-cont b-flex mt-10">
      <TInfo title="Тип обращения">Создание п\п с номинального счета</TInfo>
      <TInfo title="Тема">Не требуется юридическое сопровождение</TInfo>
   </div>
   <div class="d-flex gap-6 info-cont b-flex mt-10">
      <TInfo title="Описание обращения">
         И нет сомнений, что сделанные на базе интернет-аналитики выводы, вне зависимости от их уровня, должны быть призваны к ответу. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Имеется спорная точка зрения, гласящая примерно следующее: непосредственные участники технического прогресса представлены в исключительно положительном свете. Повседневная практика показывает, что дальнейшее развитие
      </TInfo>
   </div>
   <div> -----------здесь будут доки--------------</div>
   <hr>
   <div class="d-flex gap-6 info-cont b-flex mt-10">
      <TInfo title="Приоритет">Высокий</TInfo>
      <TInfo title="Обоснование">Дата сделки ХХ.ХХ.ХХ, потом клиент уезжает на 3 недели</TInfo>
      <TInfo title="Исполнитель">Александрова Александра</TInfo>
   </div>
   <hr>
   <div class="d-flex gap-6 info-cont b-flex mt-10">
      <TInfo title="Контрольная дата">22.09.23 10:00</TInfo>
      <TInfo title="Комментарий">Может быть достаточно много текста кого ждем и что </TInfo>
      <TInfo title="Участники">Кто зарегистрировал, Работал, Закрывал</TInfo>
   </div>
   <hr>
   <div class="d-flex gap-6 info-cont b-flex mt-10">
      <TInfo title="Дата закрытия">22.09.23 10:00</TInfo>
      <TInfo title="Комментарий">Поле свободного формата</TInfo>
      <TInfo title="Причина">Решено / Дубль / Отказ</TInfo>
   </div>
</template>

<style scoped>
   hr{
      border-top: 1px solid #c0c0bd;
   }
</style>
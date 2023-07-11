<script setup lang="ts">

</script>

<template>
    <footer class="d-flex align-items-center justify-content-end">
        <div class="claimSoloPult d-flex gap-6">
        <PlButton type ="secondary">Отмена</PlButton>
        <PlButton type ="secondary">Зарегистрировать + Новое</PlButton>
        <PlButton @click="">Зарегистрировать</PlButton>
      </div>
    </footer>
</template>

<style scoped>
    footer{
        z-index: 2;
        padding: 10px;
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: white;
        width: 100%;
    }
</style>
<script setup lang="ts">

</script>

<template>
    <nav>
        <PlInputPlus class="search" placeholder="Поиск задачи" leftIcon="Search20" width="20rem"/>
        <div class="d-flex gap-4">
            <PlButton type="secondary" icon="Cube24"/>
            <PlButton type="secondary" icon="Cube24"/>
        </div>
    </nav>
</template>

<style scoped>
    nav{
        border-bottom: 1px solid #EFEFEB;
        height: 5rem;
        flex-shrink: 0;
        background: var(--background-surface-area, #FFF);
        display: flex;
        padding-left: 3rem;
        padding-right: 2.5rem;
        align-items: center;
        justify-content: space-between;
    }
</style>

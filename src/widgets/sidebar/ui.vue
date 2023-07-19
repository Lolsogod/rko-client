<script setup lang="ts">
//@ts-ignore
import Logo from '/logo.svg'
</script>

<template>
    <div class="sidebar">
        <div class="items">
            <img :src="Logo" alt="R" id="logo">
            <div class="top-items">
                <PlButton type="secondary" icon="Cube24"/>
                <PlButton type="secondary" icon="Cube24"/>
                <PlButton type="secondary" icon="Cube24"/>
            </div>
        </div>
        <div class="items">
            <PlButton type="secondary" icon="Cube24"/>
        </div>
    </div>
</template>

<style scoped>
    .sidebar{
        display: flex;
        width: 5rem;
        padding: 1.5rem 0;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
        border-right: 1px solid var(--surface-fill-2, #EFEFEB);
        background: var(--background-surface-area, #FFF);
    }
    .items{
        width: 3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .top-items{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-self: stretch;
    }
</style>
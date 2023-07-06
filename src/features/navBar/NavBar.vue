<script setup lang="ts">
import logo from "../../assets/logo-header.svg"
defineEmits(["openSide"])
</script>
<template>
    <nav class="d-flex justify-content-between ns">
        <div class="d-flex l-cont gap-4 ml-2">
            <PlIcon color="grey" name="Menu24"  @click="$emit('openSide')" /> 
            <img id="logo" :src="logo" alt="logo">
        </div>
        <!--сюда штуки в зависимости от роута добавить-->
        <div class="d-flex gap-10 mr-6">
            <PlButton size="medium" type="secondary" icon="Chat20">Чат с клиентми</PlButton>
            <PlButton size="medium" type="secondary" icon="Exit24"></PlButton>
        </div>
        
    </nav>
</template>
<style scoped>
    nav{
        padding: .75rem;
        background-color: white;
    }
    .l-cont{
        align-items: center;
    }
    #logo{
        height: 1.5rem;
    }
</style>

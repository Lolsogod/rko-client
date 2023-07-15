<script setup lang="ts">
import SideBar from "features/sidebar/SideBar.vue";
import NavBar from "features/navBar/NavBar.vue"
import { ref } from 'vue';

const sideOpen = ref(false)
const sideControl = () =>{
    sideOpen.value = !sideOpen.value
}

</script>
<template>
    <!--мб грид лучше?-->
    <div class="container d-flex">
        <NavBar @open-side="sideControl"/>
        <div class="d-flex m-cont">
            <SideBar :open="sideOpen"/>
            <main class="main-content additional-class">
                <slot></slot>
            </main>
        </div>
    </div>
</template>
<style scoped>
   .container{
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
   }
   .m-cont{
    flex-grow: 1
   }
</style>
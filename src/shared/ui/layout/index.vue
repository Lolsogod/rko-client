<script setup lang="ts">
import {SideBar} from "widgets/sidebar";
import NavBar from "features/navBar/NavBar.vue"
import { computed, ref } from 'vue';
import { router } from "app/providers";
import { CFooter } from "../footer";

const sideOpen = ref(false)
const sideControl = () =>{
    sideOpen.value = !sideOpen.value
}
const curRoute = computed(()=>router.currentRoute.value.name?.toString())
</script>

<template>
    <div class="container d-flex">
        <NavBar @open-side="sideControl"/>
        <div class="d-flex m-cont">
            <SideBar :open="sideOpen"/>
            <div class="fm-cont">
                <main class="main-content additional-class temp">
                    <slot></slot>
                </main>
                <CFooter :type="curRoute!"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .fm-cont{
        height: calc(100vh - 64px);
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
        flex: 1;
    }
   .container{
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
   }
   .m-cont{
    flex-grow: 1
   }
</style>
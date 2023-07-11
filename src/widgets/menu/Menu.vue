<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import type {IMenuItem} from '@/interfaces/IMenuItem'
defineProps<{
    items?: IMenuItem[]
}>()
</script>

<template>
    <div class="m-cont">
        <Menu >
            <MenuButton><PlIcon name="DotsVertical20"/></MenuButton>
            <transition
                enter-active-class="dur"
                enter-from-class="hide"
                enter-to-class="show"
                leave-active-class="dur"
                leave-from-class="show"
                leave-to-class="hide">
                <MenuItems class="m-items">
                    <MenuItem v-for="item in items">
                        <button @click="item.action">{{ item.text }}</button>
                    </MenuItem>
                </MenuItems>
            </transition>
        </Menu>
    </div>
  </template>

<style scoped>
    .dur{
        transition-duration: .1s; 
    }
    .hide{
        transform: scale(.95);
        opacity: 0; 
    }
    .show{
        opacity: 1; 
    }
    .m-cont{
        position: relative;
    }
    button {
        text-align: left;
        background: white;
        border: 1rem;
        border-radius: .5rem;
        padding: .5rem;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    button:hover{
        background-color: #f7f7f5;
    }
    .m-items{
        width: 15rem;
        top: 1.25rem;
        left: -13rem;
        padding: 10px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: white;
        border-radius: .75rem;
        -webkit-box-shadow: 3px 3px 21px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 3px 3px 21px 2px rgba(34, 60, 80, 0.2);
        box-shadow: 3px 3px 21px 2px rgba(34, 60, 80, 0.2);
    }
</style>
  

<script setup lang="ts">
defineEmits(['close'])
defineProps<{
  isOpen: boolean,
  title: string
}>()
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'



</script>
<template>
    <TransitionRoot appear :show="isOpen" as="div" class="no-d">
      <Dialog as="div" @close=" $emit('close')" class=" z-10">
        <TransitionChild as="div" 
            enter="dur" enter-from="hide" enter-to="show"
            leave="dur" leave-from="show" leave-to="hide">

          <div class="backdrop" ></div>
        </TransitionChild>

        <div class="container">
          <div class="cont-2">
            <TransitionChild as="div" 
            enter="dur" enter-from="hide" enter-to="show"
            leave="dur" leave-from="show" leave-to="hide">
              <DialogPanel class="panel">
                <DialogTitle as="h3" class="title d-flex c-flex b-flex gap-10">
                  <div>{{ title }} </div>
                  <PlButton type="secondary" icon="Close24"  @click="$emit('close')"></PlButton>
                </DialogTitle>
                <div class="mt-2">
                  <slot></slot>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
<style scoped>
.no-d{
  display: none;
}
.text-test{
    color: #6B7280; 
    font-size: 0.875rem;
    line-height: 1.25rem; 

}
.title{
    margin: 0;
    color: #111827; 
    font-size: 1.125rem;
    line-height: 1.75rem; 
    font-weight: 500; 
    line-height: 1.5rem; 
}
.panel{
    overflow: hidden; 
    padding: 1.5rem; 
    background-color: #ffffff; 
    transition-property: all; 
    text-align: left; 
    vertical-align: middle; 
    width: 50rem;  
    border-radius: 1rem; 
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); 
}
.z-10{
    z-index: 10; 
}
.dur{
    transition-duration: .2s; 
}
.hide{
    opacity: 0; 
}
.show{
    opacity: 1; 
}
.backdrop{
    position: fixed; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; 
    background-color: #0000008f; 
}
.container{
    overflow-y: auto; 
    position: fixed; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; 

}
.cont-2{
    display: flex; 
    padding: 1rem; 
    text-align: center; 
    justify-content: center; 
    align-items: center; 
    min-height: 100%; 
}
</style>

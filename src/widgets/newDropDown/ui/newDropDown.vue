<script setup lang="ts">
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import {defOptions} from "../const/defOptions"
import type {DropDownItem, IDropDownProps} from "@/widgets/newDropDown/model/types";
const props = defineProps({
  options: {
    type: Array<DropDownItem>,
    default: () => defOptions,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
});
//модель както сделать?

const selected = ref()
</script>
<template>
    <!--ревльно лейблом сделать както бы-->
    <div>
      <div class="label d-flex c-flex">
        {{ label }}
      </div>
      <div>
        <Listbox v-model="selected">
          <div class="rel">
            <ListboxButton class="list-btn">
              <span class="title" :class="selected?'':'grey'">{{ selected?selected.data:`Выберете ${label}`/*пока без склонений*/ }}</span>
              <span class="icon-cont">
                <PlIcon  color="#a6a6a8" name="ChevronDown24"/>
              </span>
            </ListboxButton>
    
            <transition
              enter-active-class="dur"
              enter-from-class="to"
              enter-to-class="from"
              leave-active-class="dur"
              leave-from-class="from"
              leave-to-class="to">
              <ListboxOptions class="options">
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="option in options"
                  :key="option.data"
                  :value="option"
                  as="template">
                  <li :class="[active ? 'active' : '', 'item',]">
                    <span :class="[selected ? 'bold' : '', 'turn',]">
                      {{ option.data }}
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
    </div>
  </template>
  
<style scoped>
.list-btn{

}
  .label{
    height: 28px;
    font-weight: 500;
    font-size: 14px;
    padding: 4px;
    padding-top: 0;
    color: var(--color-text-icons-secondary);
  }
  .list-btn{
    height: 46px;
    position: relative; 
    padding: .7rem 1rem;
    background-color: #ffffff; 
    text-align: left; 
    width: 100%; 
    border: 3px solid #eff0f5;
    border-radius: .5rem;
    cursor: pointer; 
  }
  .title{
    display: block; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
  }
  .icon-cont{
    transition: .2s all ease;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute; 
    top: 0;
    bottom: 0; 
    right: 0; 
    padding-right: 0.5rem; 
    pointer-events: none;
  }
button[aria-expanded="true"] .icon-cont{
  transition: .2s all ease;
  transform: rotate(90deg);
}
  .dur{
    transition-duration: .2s;
  }
  .from{
    opacity: 1; 
  }
  .to{
    opacity: 0;
  }
  .rel{
    position: relative;
  }
  .options{
    border-radius: .75rem;
    z-index: 5;
    overflow: auto; 
    position: absolute; 
    padding: .5rem 0;
    margin-top: .5rem; 
    background-color: #ffffff; 
    font-size: 1rem;
    line-height: 1.5rem; 
    width: 100%; 
    -webkit-box-shadow: 3px 3px 21px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 3px 3px 21px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 3px 3px 21px 2px rgba(34, 60, 80, 0.2);
    
  }
  .active{
    border-radius: .5rem;
    background-color: #f7f7f5;
  }
  .item{
    margin: 0 .5rem;
    list-style-type: none;
    position: relative; 
    padding: .5rem 1rem;
    cursor: pointer; 
    user-select: none; 
  }
  .bold{
    font-weight: 500; 
  }
  .turn{
    display: block; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
  }
  .grey{
    color: #c4c6c6
  }
</style>
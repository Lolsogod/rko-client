<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Call from './Call.vue'
const tabs = ["Звонки", "Письма"]
//это естествено будут запросы, но пока так
const getCalls = () =>{
    return [
        {
            id: 1,
            name: "Олег Олегович",
            date: '24.06.23 15:18', 
            duration:"50",
            type: "incoming",
            number: "89169999999"
        },
        {
            id: 2,
            name: "Анна (бух)",
            date: '24.06.23 17:08', 
            duration:"786",
            type: "outgoing",
            number: "89169999999"
        },
        {
            id: 3,
            name: "Олег Олегович",
            date: '24.06.23 16:11', 
            duration:"0",
            type: "canceled",
            number: "89169915949"
        }
    ]
}
const getLetters = () =>{
    return [
        {
            id: 1,
            name: "Олег олегович",
            date: '24.06.23 15:18', 
            type: "incoming",
            number: "89169992655"
        },
        {
            id: 2,
            name: "Анна (бух)",
            date: '24.06.23 17:08', 
            type: "outgoing",
            number: "89169999465"
        }
    ]
}
</script>
<template>
    <div class="container">
      <TabGroup>
        <TabList class="d-flex c-flex b-flex header">
            <div>
                <Tab v-for="tab in tabs" as="template"
                    :key="tab" v-slot="{ selected }">
                    <button :class="selected? 'active': ''">
                        {{ tab }}
                    </button>
                </Tab>
            </div>
            <div class="d-flex c-flex gap-6 pr-6">
                <PlIcon name="Search24"/>
                <PlIcon name="Minus24"/>
            </div>
        </TabList>
  
        <TabPanels class="p-6 ">
          <TabPanel  key="-1" class="d-grid gap-4">
              <Call v-for="call in getCalls()" :key="call.id" :call="call"/>
          </TabPanel>
          <TabPanel  key="0">
              <div v-for="letter in getLetters()" :key="letter.id">
                {{ letter.number }} - тут письма будут
              </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </template>
  
<style scoped>
    .container{
        background-color: white;
        height: 100%;
        border-radius: 1rem;
    }
    button{
        font-size: medium;
        transform: translateY(2px);
        border: 0;
        border-bottom: 2px solid #dadde7;
        background-color: transparent;
        padding: 1.4rem 1.7rem;
    }
    .active{
        border-bottom: 2px solid #4063eb;
    }
    .header{
        position: relative;
        border-bottom: 2px solid #dadde7;
    }
</style>

  
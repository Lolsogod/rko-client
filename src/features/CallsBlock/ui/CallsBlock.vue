
<script setup lang="ts">
import {ref} from 'vue'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/vue'
import CallBlockItem from "features/CallsBlock/ui/CallBlockItem.vue";
import {E_CALL_TYPE} from "features/CallsBlock/model/types";

const categories = ref({
  "calls": [
    {
      id: 1,
      name: 'Олег Юрьевич',
      date: '24.06.23 15:18',
      duration:"50",
      type:E_CALL_TYPE.incoming,
      document:"342543534543"
    },
    {
      id: 2,
      name: 'Олег Юрьевич2',
      date: '24.06.23 15:19',
      duration:"0",
      type:E_CALL_TYPE.canceled,
      document:"342543534543"
    },
  ],
  "latters": [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],

})
</script>

<template>
  <div class="w-full max-w-md px-2 sm:px-0 nc-container callsblock">
    <TabGroup>
      <TabList class="tablist flex space-x-1 rounded-xl py-16 bg-blue-900/20 p-1 el-date-picker__header--bordered">
        <Tab
            v-for="category in Object.keys(categories)"
            as="template"
            :key="category"
            v-slot="{ selected }"
        >

          <button
              :class="[
              'callstab',
              selected
                ? 'active'
                : null,

            ]"
          >
            {{ category==='calls'?'Звонки':'Письма' }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
            v-for="(posts, idx) in Object.values(categories)"
            :key="idx"
            :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          <div class="flex-column d-flex gap-3 callsblockCommonItem">
<!--            тут потом сделаю отрисовку писем по условию-->
            <CallBlockItem v-for="post in posts"
                :id="1"
                :type="post.type"
                :document="post.document"
                :date="post.date"
                :duration="post.duration"
                :name="post.name"/>
          </div>

        </TabPanel>
      </TabPanels>
      <footer class="callsFooter d-flex ">
          <PlButton  class="callBtn">
            <img class="callBtn__svg" src="../../../../public/call-out.svg" alt="call" width="20">
          </PlButton>

      </footer>
    </TabGroup>

  </div>
</template>

<style>
.d-flex.gap-6{
  margin-bottom: 5px;
}
.callsblock{

  padding: 0 !important;
}
.tablist{
  margin: 10px 0 10px 0;
}
.callBtn{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px !important;
  width: 50px !important;
}
button.callstab{
  margin-top: 4px;
  height: 100%;
  background-color: transparent;

  border: 0;
}
button.callstab.active{
  border-bottom: 1px solid var(--token-color-border-active);

}
footer.callsFooter{
  padding: 15px;
  justify-content: flex-end;
  align-items: flex-end;
  border-top: 2px solid #cccccc;
  margin-top: auto;
  flex: 0 0 auto;
}


</style>
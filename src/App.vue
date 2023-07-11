<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from '@/layouts/Layout.vue';
import { useReferenceStore } from './stores/references';

const rStore = useReferenceStore()
rStore.fetchReferences()
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<style scoped>
</style>

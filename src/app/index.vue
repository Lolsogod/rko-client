<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from '@/layouts/Layout.vue';
import { useReferenceStore } from '@/app/providers/stores';

const rStore = useReferenceStore()
rStore.fetchReferences()
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<style>
@import "./index.css";
</style>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Layout } from 'widgets/layout';
import { useReferenceStore } from 'entities/reference';

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
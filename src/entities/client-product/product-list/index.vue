<script setup lang="ts">
import { ProductCard } from 'entities/client-product';
import type { ProductData } from '../model';
defineProps<{
    data: ProductData[]
}>()
</script>

<template>
    <div class="d-grid gap-4">
        <div>Продукты клиента</div>
        <ProductCard v-for="product in data" :product="product"/>
    </div>
</template>

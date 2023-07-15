<script setup lang="ts">
import type {ProductData} from '../model'
defineProps<{
    product: ProductData
}>()
</script>

<template>
    <div class="d-flex b-flex c-flex container">
        <div>
            <div class="number">{{ product.number }}</div>
            <div class="info pt-1">
                {{product.type}} | {{product.name}}
            </div>
        </div>
        <PlIcon name="Download24"/>
    </div>
</template>

<style scoped>
    .container{
        border-radius: 1rem;
        background-color: #ededeb;
        padding: 1rem 1.5rem;
    }
    .number{
        font-size: .96rem;
    }
    .info{
        font-size: .75rem;
        color: #c0c1c2
    }
</style>
<script  lang="ts">
  import type {Product} from "@/entities/ClientProduct/model/types";
  import SecondaryCard from "@/shared/ui/SecondaryCard.vue";
  import ClientProductsListItem from "@/entities/ClientProduct/ui/ClientProductsListItem.vue";

  export default {
    components: {ClientProductsListItem, SecondaryCard},
    props:{
      clientDocsInfoArray:{
        type:Array<Product>
      }
    },
    data:() => {
      {}
    }
  }
</script>

<template>
  <div class="clientProductList d-flex flex-column gap-3">
    <ClientProductsListItem
        v-for="clientDoc in clientDocsInfoArray"
        :company="clientDoc.company"
        :document="clientDoc.document"
        :type="clientDoc.type"
    />
  </div>

</template>

<style scoped>
.clientProductList{
  height: 250px;
}
</style>
<script setup lang="ts">
//@ts-ignore
import logo from "/logo-header.svg"
import { Search } from "features/search";
import {useKeycloak} from "shared/lib/vue-keycloak/src/vue3-keycloak.js";
const {keycloak} = useKeycloak();

defineProps<{
    type?: String
}>()
defineEmits(["openSide"])

</script>
<template>
    <nav class="d-flex justify-content-between ns">
        <!--вернуть всё к медиумуму(красивее?)-->
        <div class="d-flex c-flex gap-4 ml-2">
            <PlIcon color="grey" name="Menu24"  @click="$emit('openSide')" /> 
            <img id="logo" :src="logo" alt="logo">
            <Search v-if="type=='claims-list'"/>
        </div>
        <div class="d-flex gap-6 mr-6">
            <PlButton  type="secondary">Календарь</PlButton>
            <PlButton  type="secondary">Эффективность</PlButton>
            <PlButton  type="secondary" icon="Exit24" 
                @click = "keycloak.logout()" class="ml-4" />
        </div>
    </nav>
</template>
<style scoped>
    nav{
        padding: .75rem;
        background-color: white;
    }
    #logo{
        height: 1.5rem;
    }
</style>

<script setup lang="ts">
import Menu from '@/widgets/menu/Menu.vue';
import { useMenuConfig} from '../const/menuConfig'
import type { ReferenceData } from '@/interfaces/References';
//временная штука наверное, когда будут клеймы с сервера отдута браться будет по айди
defineProps<{
    status: ReferenceData
}>()

const menuConf = useMenuConfig()
//чисто для теста (даже называние не те наверное)
const tempClaim = {
    id: "SD-7820",
    name: "ООО \"Экшен\"",
    jobType: "Консультация",
    date: "02.07.2023",
    time: "18.35",
    claimType: "Справка об оборотах",
    icon: "Chat24" //потом разберусь зачем это вобще
}
</script>

<template>
    <div class="c-card d-grid gap-4" :class="`${status.code}-card`">
        <div class="card-top d-flex b-flex c-flex">
            <div>{{ tempClaim.name }}</div>
            <div class="d-flex c-flex">
                <div class="claim-id">{{ tempClaim.id }}</div>
                <Menu :items="menuConf.getItems(status.code)"></Menu>
            </div>
        </div>
        <div class="card-mid d-flex c-flex b-flex">
            <div class="secondary-text">{{ tempClaim.jobType }}</div>
            <div class="secondary-text">{{ tempClaim.claimType }}</div>
        </div>
        <div class="d-flex c-flex b-flex">
            <div>
                <div class="secondary-text mb-2">Дата создания</div>
                <div class="date">{{ tempClaim.date }} в {{ tempClaim.time }}</div>
            </div>
            <div>
                <PlIcon color="#d5d8e1" :name="tempClaim.icon"/>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
    .date{
        font-size: smaller;
    }
  
    .c-card{
        border-radius: 1.5rem;
        background-color: white;
        /*временно потом адаптивные(наверное?) */
        width: 25rem;
        border-left: 5px solid;
        padding: 1rem;
    }
    .NEW-card{
        border-color: #d8dbe3;
    }

    .PENDING-card{
        border-color: #e5d7d5;
    }
    .IN_PROGRESS-card{
        border-color: #e6dcd3;
    }
    .DONE-card{
        border-color: #dcdcdb;
    }
</style>
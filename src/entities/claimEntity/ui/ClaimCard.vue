<script setup lang="ts">
import Menu from '@/widgets/menu/Menu.vue';
import { useMenuConfig} from '../const/menuConfig'
import type { Claim } from '@/interfaces/Claim';
import { computed } from 'vue';
//временная штука наверное, когда будут клеймы с сервера отдута браться будет по айди
const props = defineProps<{
    claim: Claim
}>()

const menuConf = useMenuConfig()
//чисто для теста (даже называние не те наверное)
const tempClaim = {
    icon: "Chat24" //потом разберусь зачем это вобще
}

const createdDate = computed(() => {
    console.log()
  const date = new Date(props.claim.createdDate);
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const formattedDate = `${day}.${month}.${year} в ${hours}.${minutes}`;

  return formattedDate;
})
</script>

<template>
    <div class="c-card d-grid gap-4" :class="`${claim.status}-card`">
        <div class="card-top d-flex b-flex c-flex">
            <div>{{ claim.client.shortName }}</div>
            <div class="d-flex c-flex">
                <div class="claim-id">SD-{{ claim.id }}</div>
                <Menu :items="menuConf.getItems(claim.status)"></Menu>
            </div>
        </div>
        <div class="card-mid d-flex c-flex b-flex">
            <div class="secondary-text">{{ claim.claimType }}</div>
            <div class="secondary-text">{{ claim.claimTheme }}</div>
        </div>
        <div class="d-flex c-flex b-flex">
            <div>
                <div class="secondary-text mb-2">Дата создания</div>
                <div class="date">{{ createdDate }}</div>
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
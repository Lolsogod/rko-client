<script setup lang="ts">
import { Menu } from 'shared/ui/menu';
import { useClaimConfig } from '../../const/claimConfig'
import type { Claim } from 'entities/claim/model';
const props = defineProps<{
    claim: Claim
}>()

const conf = useClaimConfig(props.claim)
</script>

<template>
    <div class="c-card d-grid gap-4" :class="`${claim.status}-card`">
        <div class="card-top d-flex b-flex c-flex">
            <div>{{ claim.client?.short_name }}</div>
            <div class="d-flex c-flex">
                <div class="claim-id">SD-{{ claim.id }}</div>
                <Menu :items="conf.menuItems.value"></Menu>
            </div>
        </div>
        <div class="card-mid d-flex c-flex b-flex">
            <div class="secondary-text">{{ claim.claim_type }}</div>
            <div class="secondary-text">{{ claim.claim_theme }}</div>
        </div>
        <div class="d-flex c-flex b-flex">
            <div>
                <div class="secondary-text mb-2">Дата создания</div>
                <div class="date">{{ conf.createdDate.value }}</div>
            </div>
            <div>
                <PlIcon color="#d5d8e1" :name="conf.channelIco.value"/>
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
</style>../const/claimConfig
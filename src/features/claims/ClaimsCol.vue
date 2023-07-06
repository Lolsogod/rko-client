<script setup lang="ts">
import ClaimCard from '../../entities/claimEntity/ui/ClaimCard.vue';
const props = defineProps<{
    claimStatus: string
}>()

//не особо красиво, мб переделать
const ruStatus = new Map([
  ['new', 'Новые'],
  ['wip', 'В работе'],
  ['queue', 'Очередь'],
  ['closed', 'Закрытые']
]);

</script>

<template>
    <div class="d-grid gap-4">
        <div class="type-badge" :class="`${props.claimStatus}-badge`">
            {{ruStatus.get(props.claimStatus)}}
        </div>
        <ClaimCard :claim-status="props.claimStatus"/>
        <ClaimCard :claim-status="props.claimStatus"/>
        <ClaimCard :claim-status="props.claimStatus"/>
    </div>
    
</template>

<style scoped>
    .type-badge{  
        font-weight: 500;
        border-radius: 1rem;
        background-color: #e8ebf4;
        padding: .4rem .6rem;
        width: 8rem;
    }
    .new-badge{
        background-color: #e8ebf4;
    }

    .wip-badge{
        background-color: #f6e7e5;
    }
    .queue-badge{
        background-color: #f7ede3;
    }
    .closed-badge{
        background-color: #ededeb;
    }
</style>
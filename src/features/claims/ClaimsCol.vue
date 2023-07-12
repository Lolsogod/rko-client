<script setup lang="ts">
import ClaimCard from '../../entities/claimEntity/ui/ClaimCard.vue';
import type { ReferenceData } from '@/interfaces/References';
import {useClaimStore} from '@/stores/claims'
import {useAuthStore} from "@/stores/auth"
defineProps<{
    status: ReferenceData
}>()

const store = useClaimStore()
const auth = useAuthStore()
auth.checkLoginStatus()
</script>

<template>
    <div class="d-grid gap-4">
        <div class="type-badge" :class="`${status.code}-badge`">
            {{status.text}}
        </div>
        <ClaimCard v-for="claim in store.getClaimsByStatus(status.code)" :key="claim.id" :claim="claim"/>
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
    .NEW-badge{
        background-color: #e8ebf4;
    }

    .PENDING-badge{
        background-color: #f6e7e5;
    }
    .IN_PROGRESS-badge{
        background-color: #f7ede3;
    }
    .DONE-badge{
        background-color: #ededeb;
    }
</style>
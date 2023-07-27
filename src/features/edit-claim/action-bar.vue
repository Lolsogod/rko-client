<script setup lang="ts">
import { useClaimConfig, type Claim } from 'entities/claim';
import { Badge } from 'shared/ui/badge';
const props = defineProps<{
    claim: Claim
}>()
const conf = useClaimConfig(props.claim)
console.log(props.claim)

</script>

<template>
    <div class="a-bar">
        <div class="content">
            <Badge color="rgba(12, 163, 27, 0.08)">🕐 В работе {{ conf.inWorkFor() }}</Badge>
            <div>
                <span class="id">RKO-{{ claim.id }} / </span>
                <span class="type">{{ conf.type }}</span>
            </div>
        </div>
        <div class="btns">
            <PlButton size="medium" type="alternative">Отложить</PlButton>
            <PlButton size="medium" type="alternative">Перевести</PlButton>
            <PlButton size="medium">Закрыть обращение</PlButton>
        </div>
    </div>
</template>

<style scoped>
    .a-bar{
        display: flex;
        width: 100%;
        padding: 1rem 3rem;
        justify-content: space-between;
        gap: 1rem;

        border-right: 1px solid var(--surface-fill-2, #EFEFEB);
        border-bottom: 1px solid var(--surface-fill-2, #EFEFEB);
        background: var(--background-surface-area, #FFF);
    }
    .content{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: start
    }
    .id{
        color: var(--text-icons-tertiary, #B5B5B5);

        /* Title/T1-Semi Bold */
        font-family: Inter;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2rem; /* 160% */
        letter-spacing: 0.01rem;
    }
    .type{
        color: var(--text-icons-primary, #19191A);

        /* Title/T1-Semi Bold */
        font-family: Inter;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2rem;
        letter-spacing: 0.01rem;
    }
    .btns{
        display: flex;
        gap: .75rem;
        align-items: flex-end;
    }
</style>
<script setup lang="ts">
import { Badge } from 'shared/ui/badge';
//import { useEditClaimStore } from '.';

//const conf = computed(() => useClaimConfig(props.claim))

//const {edit} = useEditClaimStore()

</script>

<template>
    <div class="a-bar">
        <div class="content">
            <div>
                <PlButton type="empty" icon="ArrowLeft24"  @click="$router.push('/')">Вернуться к обращениям</PlButton>
            </div>
        </div>
        <div class="btns">
            <PlButton size="medium" type="alternative">Отмена</PlButton>
            <PlButton size="medium" type="alternative">Зарегестрировать + Новое</PlButton>
            <PlButton size="medium">Зарегестрировать</PlButton>
        </div>
    </div>
</template>

<style scoped>
    .a-bar{
        display: flex;
        width: 100%;
        padding: 1rem 3rem;
        justify-content: space-between;
        align-items: center;
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
    }
    .type{
        color: var(--text-icons-primary, #19191A);
    }
    .btns{
        display: flex;
        gap: .75rem;
    }
</style>
<template>
    <div class="links">
        <LinkColumn v-for="item, index in list" :key="index" :item="item" />
    </div>
</template>
<script lang="ts" setup>
import LinkColumn from '@/components/atoms/Browser/Footer/LinkColumn.vue';
import { ref } from 'vue';

const list = ref([
    {
        list: [
            { id: 1, title: 'Audiodescrição' },
            { id: 2, title: 'Relações com investidores' },
            { id: 3, title: 'Avisos legais' },
        ]
    },
    {
        list: [
            { id: 4, title: 'Central de Ajuda' },
            { id: 5, title: 'Carreiras' },
            { id: 6, title: 'Preferências de cookies' },
        ]
    },
    {
        list: [
            { id: 7, title: 'Cartão pré-pago' },
            { id: 8, title: 'Termos de Uso' },
            { id: 9, title: 'Informações corporativas' },
        ]
    },
    {
        list: [
            { id: 10, title: 'Imprensa' },
            { id: 11, title: 'Privacidade' },
            { id: 12, title: 'Entre em contato' },
        ]
    }
])
</script>

<style lang="scss" scoped>
.links {
    display: flex;
    flex-direction: row;
    gap: 150px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
}


@media (max-width: 1000px) {
    .links {
        gap: 9vw;
    }
}

.column {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
}

.link-text {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}
</style>
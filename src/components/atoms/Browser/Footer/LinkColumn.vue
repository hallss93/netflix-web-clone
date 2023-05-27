<template>
    <div class="column">
        <Link v-for="i in props.item?.list" :key="i.id" :title="i.title" />
    </div>
</template>
<script lang="ts" setup>
import Link from './Link.vue';

const props = defineProps({
    item: Object,
})
</script>

<style lang="scss" scoped>
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
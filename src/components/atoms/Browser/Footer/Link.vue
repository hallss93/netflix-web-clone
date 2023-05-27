<template>
    <div class="link-text">{{ props.title }}</div>
</template>
<script lang="ts" setup>
const props = defineProps({
    title: String,
})
</script>

<style lang="scss" scoped>
.link-text {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
    cursor: pointer;

    &:hover {
        text-decoration: underline;

    }
}
</style>
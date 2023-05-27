

<template>
    <div class="buttons">
        <PlayButton />
        <MoreInfoButton />
    </div>
</template>
<script lang="ts" setup>
import PlayButton from '@/components/atoms/Browser/HighlightedMovie/Buttons/PlayButton.vue';
import MoreInfoButton from '@/components/atoms/Browser/HighlightedMovie/Buttons/MoreInfoButton.vue';
</script>
  
<style lang="scss" scoped>
.buttons {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
}
</style>
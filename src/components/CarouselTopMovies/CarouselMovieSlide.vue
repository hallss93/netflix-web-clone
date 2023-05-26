<template>
    <div class="movie-horizontal-card">
        <div class="movie-poster2">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>
  
<style lang="scss" scoped>
.movie-horizontal-card {
    flex-shrink: 0;
    width: 212px;
    height: 171px;
    position: relative;

    .movie-poster2 {
        width: 106px;
        height: 160px;
        display: flex;
        justify-content: flex-start;
    }
}
</style>
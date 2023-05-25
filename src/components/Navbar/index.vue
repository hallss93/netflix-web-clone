<script setup lang="ts">
import IconMain from './icons/IconMain.vue'
import MenuItems from './MenuItems.vue' 
</script>

<template>
    <div class="nav-container">
        <div class="nav-items-container">
            <IconMain />
            <MenuItems />
        </div>
    </div>
</template>
<style scoped lang="scss">
.nav-items-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    margin: 26px 60px;
    gap: 50px;
    height: 30px;
    flex: none;
    order: 0;
    flex-grow: 0;
}
</style>
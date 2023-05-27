<script setup lang="ts">
import IconMain from '@/components/atoms/Browser/Navbar/icons/IconMain.vue';
import MenuItems from '@/components/molecules/Browser/Navbar/MenuItems.vue';
import HeaderRight from '@/components/molecules/Browser/Navbar/HeaderRight.vue';
</script>

<template>
    <div class="header">
        <div class="header-left">
            <IconMain />
            <MenuItems />
        </div>

        <HeaderRight />

    </div>
</template>
<style  lang="scss" scoped>
.header,
.header * {
    box-sizing: border-box;
}

.header {
    background: var(--black, #141414);
    padding: 25px 60px 25px 60px;
    display: flex;
    flex-direction: row;
    gap: calc(100vw - 655px - 240px - 130px);
    align-items: center;
    justify-content: center;
    position: relative;
}

.header-left {
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
}

.netflix-logo-svg {
    flex-shrink: 0;
    position: relative;
    overflow: visible;
}

.menu-items {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
}

.ana-sayfa {
    color: var(--white, #ffffff);
    text-align: left;
    font: var(--netflix-sans-black-14-px, 900 14px "Netflix Sans", sans-serif);
    position: relative;
}

.diziler {
    color: var(--smoke-white, #e5e5e5);
    text-align: left;
    font: var(--netflix-sans-medium-14-px, 500 14px "Netflix Sans", sans-serif);
    position: relative;
}

.filmler {
    color: var(--smoke-white, #e5e5e5);
    text-align: left;
    font: var(--netflix-sans-medium-14-px, 500 14px "Netflix Sans", sans-serif);
    position: relative;
}

.yeni-ve-pop-ler {
    color: var(--smoke-white, #e5e5e5);
    text-align: left;
    font: var(--netflix-sans-medium-14-px, 500 14px "Netflix Sans", sans-serif);
    position: relative;
}

.listem {
    color: var(--smoke-white, #e5e5e5);
    text-align: left;
    font: var(--netflix-sans-medium-14-px, 500 14px "Netflix Sans", sans-serif);
    position: relative;
}

.header-right {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
}

.search {
    flex-shrink: 0;
    position: relative;
    overflow: visible;
}

.ocuk {
    color: var(--white, #ffffff);
    text-align: left;
    font: var(--netflix-sans-medium-14-px, 500 14px "Netflix Sans", sans-serif);
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
}

.gift-box {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    position: relative;
    overflow: hidden;
}

.group-3 {
    position: absolute;
    inset: 0;
}

.mask-2 {
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: visible;
}

.fill-1 {
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: visible;
}

.notification-bell {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    position: relative;
    overflow: hidden;
}

.group {
    position: absolute;
    left: 0.72px;
    top: 0px;
    overflow: visible;
}

.img-dropdown {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
}

.profile-img {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    position: relative;
}

.down-arrow {
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    position: relative;
}

.icon-down {
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: visible;
}
</style>
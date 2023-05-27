<script lang="ts" setup>
import Search from '@/components/atoms/Browser/Navbar/icons/Search.vue';
import GiftBox from '@/components/atoms/Browser/Navbar/icons/GiftBox.vue';
import NotificationBell from '@/components/atoms/Browser/Navbar/icons/NotificationBell.vue';
import ImgProfileDropDown from '@/components/atoms/Browser/Navbar/ImgProfileDropDown.vue';

</script>
<template>
  <div class="header-right">
    <Search />

    <div class="infantil">Infantil</div>

    <GiftBox />
    <NotificationBell />

    <ImgProfileDropDown />

  </div>
</template>

<style scoped lang="scss">
.header,
.header * {
  box-sizing: border-box;
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

.infantil {
  color: var(--white, #ffffff);
  text-align: left;
  font: var(--netflix-sans-medium-14-px, 500 14px "Netflix Sans", sans-serif);
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
</style>

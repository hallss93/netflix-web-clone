<template>
    <div class="header">
        <div class="header-left">
            <ProfileHeader />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProfileHeader from '@/components/molecules/ProfileManager/ProfileHeader.vue';
</script>
 

<style lang="scss" scoped>
.header {
    background: var(--black, #141414);
    padding: 25px 60px 25px 60px;
    display: flex;
    flex-direction: row;
    gap: 530px;
    align-items: center;
    justify-content: flex-start;
    width: 100vh;
    position: absolute;
    left: 0px;
    top: 0px;
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
</style>
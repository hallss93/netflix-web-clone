<template>
  <div class="profiles-page">
    <div class="content">
      <div class="profile-title">Quem está assistindo?</div>
      <ProfileCards @clicked="handleClickProfile" />

      <div class="profile-center">
        <div class="profile-container-manager">
          <div class="profile-container-manager-title">Gerenciar perfis</div>
        </div>
      </div>
    </div>
    <ProfileHeader />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'; 
import ProfileCards from '@/components/molecules/ProfileManager/ProfileCards.vue';
import ProfileHeader from './ProfileHeader.vue';

const router = useRouter();

const handleClickProfile = () => {
  router.push('/home')
}
</script>

<style lang="scss" scoped>
.profiles-page,
.profiles-page * {
  box-sizing: border-box;
}

.profiles-page {
  background: var(--black, #141414);
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 1260px;
  height: 478px;
}

.profile-center {
  display: flex;
  justify-content: center;
}

.profile-title {
  color: var(--white, #ffffff);
  text-align: center;
  font: var(--netflix-sans-regular-64-px, 400 64px 'Netflix Sans', sans-serif);
  display: flex;
  align-items: center;
  justify-content: center
}

.profile-container-manager {
  border-style: solid;
  border-color: var(--gray, #808080);
  border-width: 1px;
  padding: 10px 30px 10px 30px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
}

.profile-container-manager-title {
  color: var(--gray, #808080);
  text-align: left;
  font: var(--netflix-sans-regular-26-px, 400 26px 'Netflix Sans', sans-serif);
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start
}
</style>

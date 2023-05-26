<script setup lang="ts">
import Navbar from './Navbar/index.vue'
import HighlightedMovie from './HighlightedMovie/index.vue' 
</script>

<template>
  <div class="home-page">
    <Navbar></Navbar>
    <div class="content">
      <HighlightedMovie></HighlightedMovie>
    </div>
  </div>
</template>
<style lang="scss">
.home-page {
  background: var(--black, #141414);
  width: 100%;
  position: relative;
  overflow: hidden;

  .content {
    width: 100%;
  }
}
</style>

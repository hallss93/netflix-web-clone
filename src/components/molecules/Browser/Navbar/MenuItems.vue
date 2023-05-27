<script lang="ts" setup>
import MenuItem from '../../../atoms/Browser/Navbar/MenuItem.vue'

</script>
<template>
  <div class="menu-items">
    <MenuItem :active="true" title="Início" />
    <MenuItem :active="false" title="Séries" />
    <MenuItem :active="false" title="Filmes" />
    <MenuItem :active="false" title="bombando" />
    <MenuItem :active="false" title="Minha lista" />
    <MenuItem :active="false" title="Navegar por idiomas" />
  </div>
</template>

<style scoped lang="scss">
.menu-items {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}
</style>

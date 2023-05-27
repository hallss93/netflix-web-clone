<script lang="ts" setup>
import MenuItem from '../../../atoms/Browser/Navbar/MenuItem.vue'

</script>
<template>
  <div class="menu-container">
    <MenuItem :active="true" title="Início" />
    <MenuItem :active="false" title="Séries" />
    <MenuItem :active="false" title="Filmes" />
    <MenuItem :active="false" title="bombando" />
    <MenuItem :active="false" title="Minha lista" />
    <MenuItem :active="false" title="Navegar por idiomas" />
  </div>
</template>

<style scoped lang="scss">
.menu-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;

  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>

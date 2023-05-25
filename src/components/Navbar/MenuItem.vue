<script lang="ts" setup>
const props = defineProps({
  title: String,
  active: Boolean,
})


</script>
<template>
  <div class="item" :class="{ active: active }">
    <p>{{ props.title }}</p>
  </div>
</template>

<style scoped lang="scss">
.item {
  font-size: 14px;
  line-height: 18px;
  color: #E5E5E5;
  cursor: pointer;

  &:hover {
    color: #b3b3b3;
  }

  &.active * {
    font-weight: 900;
    cursor: default;

    &:hover {
      color: #E5E5E5;
    }
  }
}
</style>

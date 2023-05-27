<template>
    <div class="social">
        <Facebook />
        <Instagram />
        <Twitter />
        <Youtube />
    </div>
</template>
<script lang="ts" setup>
import Facebook from '@/components/atoms/Browser/Footer/Facebook.vue';
import Instagram from '@/components/atoms/Browser/Footer/Instagram.vue';
import Twitter from '@/components/atoms/Browser/Footer/Twitter.vue';
import Youtube from '@/components/atoms/Browser/Footer/Youtube.vue';

</script>
<style lang="scss" scoped>
.social {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
}
</style>
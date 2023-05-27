<template>
    <div class="carousel-container">
        <div class="title">{{ props.title }}</div>
        <carousel :items-to-show="itemsToShow / 2" :items-to-scroll="11" style="width: 100%;">
            <slide v-for="slide, index in props.list" :key="slide.id">
                <CarouselTopMovieSlide :item="slide">
                    <template v-slot:content>
                        <component :is="getComponet(index)" />
                        <img class="movie-poster3" :src="'https://image.tmdb.org/t/p/w300/' + slide.poster_path">
                    </template>
                </CarouselTopMovieSlide>
            </slide>
            <template #addons>
                <navigation />
            </template>
        </carousel>
    </div>
</template>

<script lang="ts" setup>
import {
    Carousel,
    Slide,
    Navigation
} from 'vue3-carousel'

import type IMovie from '@/interfaces/movie.interface';
import CarouselTopMovieSlide from '@/components/atoms/Browser/CarouselTopMovieSlide.vue';
import number1 from '@/components/atoms/Browser/TopNumbers/number1.vue';
import number2 from '@/components/atoms/Browser/TopNumbers/number2.vue'
import number3 from '@/components/atoms/Browser/TopNumbers/number3.vue'
import number4 from '@/components/atoms/Browser/TopNumbers/number4.vue'
import number5 from '@/components/atoms/Browser/TopNumbers/number5.vue'
import number6 from '@/components/atoms/Browser/TopNumbers/number6.vue'
import number7 from '@/components/atoms/Browser/TopNumbers/number7.vue'
import number8 from '@/components/atoms/Browser/TopNumbers/number8.vue'
import number9 from '@/components/atoms/Browser/TopNumbers/number9.vue'
import number10 from '@/components/atoms/Browser/TopNumbers/number10.vue'
import composableCarousel from '@/composables/Carousel'

const props = defineProps({
    list: Array<IMovie>,
    title: String,
})
const { itemsToShow } = composableCarousel()

const getComponet = (index: number) => {
    switch (index) {
        case 0: return number1;
        case 1: return number2;
        case 2: return number3;
        case 3: return number4;
        case 4: return number5;
        case 5: return number6;
        case 6: return number7;
        case 7: return number8;
        case 8: return number9;
        case 9: return number10
    }
    return number1
}
</script>
  
<style lang="scss" scoped>
.carousel-container~.carousel-container {
    margin-top: 3vw;
    margin-bottom: 3vw;
}

.carousel-container {

    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 61px;
    margin-top: -190px;


    .title {
        color: var(--smoke-white, #e5e5e5);
        text-align: left;
        font: var(--netflix-sans-medium-26-px, 500 26px 'Netflix Sans', sans-serif);
        position: relative;

    }
}

.movie-poster3 {
    border-radius: 2px;
    width: auto;
    height: 160px;
    position: absolute;
    left: 106px;
    top: 0px;
}
</style>
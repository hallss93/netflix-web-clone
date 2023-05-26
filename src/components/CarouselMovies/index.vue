<template>
    <div class="carousel-container">
        <div class="title">{{ props.title }}</div>
        <carousel :items-to-show="12" :items-to-scroll="12" style="width: 100%;">
            <slide v-for="slide in props.list" :key="slide.id">
                <div class="movie-horizontal-card">
                    <div class="progress-bar">
                        <div class="progress-bar2"></div>

                        <div class="progress"></div>
                    </div>

                    <div class="movie-poster2">
                        <img class="movie-poster3" :src="'https://image.tmdb.org/t/p/w300/' + slide.poster_path">
                    </div>
                </div>
            </slide>

            <template #addons>
                <navigation />
            </template>
        </carousel>
    </div>
</template>

<script lang="ts" setup>
import type IMovie from '@/interfaces/movie.interface';
import {
    Carousel,
    Slide,
    Navigation
} from 'vue3-carousel'
const props = defineProps({
    list: Array<IMovie>,
    title: String,
})
</script>
  
<style lang="scss" scoped>
.carousel-container~.carousel-container {
    margin-top: 30px;
}

.carousel-container {

    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 61px;
    margin-top: -230px;


    .title {
        color: var(--smoke-white, #e5e5e5);
        text-align: left;
        font: var(--netflix-sans-medium-26-px, 500 26px 'Netflix Sans', sans-serif);
        position: relative;

    }

    .movie-horizontal-card {
        flex-shrink: 0;
        width: 106px;
        height: 171px;
        position: relative;

        .progress-bar {
            width: 106px;
            height: 3px;
            position: absolute;
            left: 0px;
            top: 168px;
            overflow: hidden;

            .progress-bar2 {
                background: var(--mid-gray, rgba(109, 109, 110, 0.70));
                width: 106px;
                height: 3px;
                position: absolute;
                left: 0px;
                top: 0px;
            }

            .progress {
                background: var(--red, #b9090b);
                width: 20px;
                height: 3px;
                position: absolute;
                left: 0px;
                top: 0px;
            }
        }

        .movie-poster2 {
            left: 0px;
            top: 0px;
            overflow: hidden;

            .movie-poster3 {
                border-radius: 2px;
                width: auto;
                height: 160px;
                position: absolute;
                left: 0px;
                top: 0px;
            }
        }
    }
}
</style>
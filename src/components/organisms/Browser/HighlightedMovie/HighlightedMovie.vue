<template>
    <div class="highlighted-movie">

        <img alt="Movie Poster" class="movie-poster" src="@/assets/imgs/movie-poster.png" />
        <div class="highlighted-movie-info">
            <img class="movie-name" src="@/assets/imgs/movie-name.png">

            <RankIcon />

            <div class="movie-description">
                Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş
                dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir
                kızla karşılaşır ve hayatı değişir.
            </div>

            <Buttons />
        </div>
    </div>
</template>
<script lang="ts" setup>
import Buttons from '@/components/molecules/Browser/HighlightedMovie/Buttons/index.vue'
import RankIcon from '@/components/atoms/Browser/HighlightedMovie/RankIcon/index.vue'
</script>
  
<style lang="scss" scoped>
.highlighted-movie {
    width: 100%;

    .movie-poster {
        width: 100%;
        height: auto;
    }

    .highlighted-movie-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
        justify-content: flex-start;
        position: absolute;
        left: 60px;
        top: 22vw;

        .movie-name {
            flex-shrink: 0;
            position: relative;
        }

        .movie-description {
            color: var(--white, #ffffff);
            text-align: left;
            font: var(--netflix-sans-regular-26-px, 400 26px 'Netflix Sans', sans-serif);
            position: relative;
            width: 52%;
        }
    }

    @media (max-width: 1400px) {
        .highlighted-movie-info {
            top: 10vw;


            .movie-name {
                width: 45%;
            }
        }
    }

    @media (max-width: 1400px) {
        .highlighted-movie-info {


            .movie-description {
                font: var(--netflix-sans-regular-26-px, 400 18px 'Netflix Sans', sans-serif);
                width: 60%;
            }
        }
    }
}
</style>
<template>
    <div class="profile-cards">
        <div class="profile-card" v-for="prof in profiles" :key="prof.id" @click="handleClickProfile(prof.id)">
            <div class="profile-picture">
                <img class="profile-picture" :src="prof.img" />
            </div>

            <div class="profile-name">{{ prof.name }}</div>
        </div>

        <div class="profile-card" @click="handleClickProfile(0)">
            <div class="profile-picture">
                <svg class="add" width="120" height="120" viewBox="0 0 120 120" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_326_202)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M60 110.625C32.0856 110.625 9.375 87.9144 9.375 60C9.375 32.0856 32.0856 9.375 60 9.375C87.9144 9.375 110.625 32.0856 110.625 60C110.625 87.9144 87.9144 110.625 60 110.625ZM85.7812 55.3079H64.6875V34.2142H55.3125V55.3079H34.2188V64.6829H55.3125V85.7767H64.6875V64.6829H85.7812V55.3079Z"
                            fill="#6D6D6E" fill-opacity="0.7" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M60 0C76.0263 0 91.0941 6.24115 102.426 17.5735C113.759 28.9059 120 43.9737 120 60C120 76.0263 113.759 91.0941 102.426 102.426C91.0941 113.759 76.0263 120 60 120C43.9737 120 28.9059 113.759 17.5735 102.426C6.24115 91.0941 0 76.0263 0 60C0 43.9737 6.24115 28.9059 17.5735 17.5735C28.9059 6.24115 43.9737 0 60 0ZM9.375 60C9.375 87.9144 32.0856 110.625 60 110.625C87.9144 110.625 110.625 87.9144 110.625 60C110.625 32.0856 87.9144 9.375 60 9.375C32.0856 9.375 9.375 32.0856 9.375 60Z"
                            fill="#6D6D6E" fill-opacity="0.7" />
                    </g>
                    <defs>
                        <clipPath id="clip0_326_202">
                            <rect width="120" height="120" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div class="profile-name">Adicionar Perfil</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';


const emit = defineEmits<{
    (e: 'clicked', id: number): void;
}>();

const profiles = reactive([
    { id: 1, name: 'Maria', img: './../../src/assets/imgs/profile-picture.png' },
    { id: 2, name: 'João', img: './../../src/assets/imgs/profile-picture2.png' },
    { id: 3, name: 'Pedro', img: './../../src/assets/imgs/profile-picture3.png' },
    { id: 4, name: 'Francisco', img: './../../src/assets/imgs/profile-picture4.png' },
])

const handleClickProfile = (id: number) => {
    emit('clicked', id)
}
</script>

<style lang="scss" scoped>
.profile-cards {
    padding: 30px 30px 30px 30px;
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.profile-card {
    flex-shrink: 0;
    width: 200px;
    height: 253px;
    position: relative;

    &:hover {
        .profile-picture {
            transform: scale(1.1);
        }
    }
}

.profile-picture {
    transition: all .4s;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 200px;
    position: absolute;
    left: 0px;
    top: 0px;
}

.profile-name {
    color: var(--mid-gray, rgba(109, 109, 110, 0.70));
    text-align: center;
    font: var(--netflix-sans-regular-26-px, 400 26px 'Netflix Sans', sans-serif);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 220px;
}

.add {
    overflow: visible;
}
</style>
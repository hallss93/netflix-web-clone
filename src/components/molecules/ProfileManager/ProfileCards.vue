<template>
    <div class="profile-cards">
        <ProfileCard v-for="prof in profiles" :key="prof.id" :profile="prof" @clicked="handleClickProfile(prof.id)" />
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import ProfileCard from '../../atoms/ProfileManager/ProfileCard.vue';

const emit = defineEmits<{
    (e: 'clicked', id: number): void;
}>();

const profiles = reactive([
    { id: 1, name: 'Maria', img: 'http://occ-0-7266-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXuurmkiCsw7ucJzV1WgJMQz09Wo9RnX5NreritRygVutW0vVPZuUeENaLN_1hcjJrReDGOEVHPEZk9JWXqFK6sCyEPCgCR1j14z.png?r=eea' },
    { id: 2, name: 'João', img: 'http://occ-0-7266-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWw0vRAvv1VCQh43eIGGbOU9YGB0c_wGM1K8LDuUnYfB0jVIwRW1gTpYldIoy67LtH1Ky8cxhC_mjBb6C4qfcJWHzLAJasWAXuNR.png?r=ce4' },
    { id: 3, name: 'Pedro', img: 'http://occ-0-7266-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4' },
    { id: 4, name: 'Francisco', img: 'http://occ-0-7266-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e' },
    { id: 0 },
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
</style>
<script>
import AppH1 from '../components/AppH1.vue';

    export default {
        name: 'Home',
        components: { AppH1, },
    };
</script>

<template>
    <header class="bg-cover m-4 p-9 mb-8 rounded-xl text-white flex justify-between items-center bg-[url(../../public/header-image.png)] h-[30vw]">
        <div class="w-160 ml-5">
            <h1 class="font-bold text-5xl mb-3 text-(--color-dark-kalm)">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p class="mr-2 px-2 py-1 border-(--color-primary-kalm) rounded-xl bg-(--color-primary-kalm) text-white w-20 text-center"><router-link to="/signin">Unirse</router-link></p>
        </div>
    </header>
</template>
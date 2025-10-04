<script>
    import Home from './pages/Home.vue';

    export default {
        name: 'App',
        components: { Home },
    }
</script>

<template>
    <nav class="flex items-center p-4 justify-between rounded-b-2xl shadow-md">
        <div class="flex items-center">
            <img src="/public/k-dark.svg" alt="Kälm logo dark" class="h-8">
            <p class="text-lg font-bold ml-3 line-clamp-1 text-(--color-dark-kalm)">Kälm</p>
        </div>
        <ul class="flex">
            <li class="mr-2 px-2 py-1"><router-link to="/">Inicio</router-link></li>
            <li class="mr-2 px-2 py-1"><router-link to="/publicaciones">Publicaciones</router-link></li>
            <li class="mr-2 px-2 py-1 border rounded-md"><router-link to="/signin">Crear cuenta</router-link></li>
            <li class="mr-2 px-2 py-1 border-(--color-primary-kalm) rounded-md font-bold bg-(--color-primary-kalm) text-white"><router-link to="/login">Iniciar sesión</router-link></li>
        </ul>
    </nav>
    <main>
        <RouterView />
    </main>
    <footer class="flex items-end px-4 py-10 justify-between bg-(--color-dark-kalm) rounded-t-2xl text-white">
        <div>
                <ul>
                    <li><router-link to="/">Inicio</router-link></li>
                    <li><router-link to="/publicaciones">Publicaciones</router-link></li>
                    <li><router-link to="/login">Iniciar sesión</router-link></li>
                    <li><router-link to="/signin">Crear cuenta</router-link></li>
                </ul>
            <p class="mt-3">© 2025 Kälm. All rights reserved.</p>
        </div>
        <div class="text-end flex flex-col items-end flex-wrap">
                <img class="h-20" src="/public/K.svg" alt="Kälm logo">
            <p class="mt-3">Escuela Da Vinci - DWM4AP</p>
            <p>Clientes Web Mobile, Parcial 1. Alvarez, Barrientos, Giacomini</p>
        </div>
    </footer>
</template>
<script>
    import Home from './pages/Home.vue';

    export default {
        name: 'App',
        components: { Home },
    }
</script>

<template>
    <nav class="flex items-center p-4 justify-between rounded-b-lg shadow-lg">
        <p>Kälm</p>
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
    <footer class="flex items-end p-4 justify-between bg-(--color-primary-kalm) rounded-t-lg text-white">
        <div>
                <ul>
                    <li><router-link to="/">Inicio</router-link></li>
                    <li><router-link to="/publicaciones">Publicaciones</router-link></li>
                    <li><router-link to="/login">Iniciar sesión</router-link></li>
                    <li><router-link to="/signin">Crear cuenta</router-link></li>
                </ul>
            <p class="mt-3">© 2025 Kälm. All rights reserved.</p>
        </div>
        <div class="text-end">
            <picture>
                <img src="" alt="">
            </picture>
            <p class="mt-3">Escuela Da Vinci - DWM4AP</p>
            <p>Clientes Web Mobile, Parcial 1. Alvarez, Barrientos, Giacomini</p>
        </div>
    </footer>
</template>
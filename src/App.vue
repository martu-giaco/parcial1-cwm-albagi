<script>
    import Home from './pages/Home.vue';

    export default {
        name: 'App',
        components: { Home },
    };
</script>

<template>
    <nav>
        <p>RED SOCIAL hay q decidir el nombre</p>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/sign-in">Sign In</router-link></li>
            <li><router-link to="/publicaciones">Publicaciones</router-link></li>
        </ul>
    </nav>
    <main>
        <RouterView />
    </main>
    <footer>
        <p>Parcial 1 cwm Alvarez Barrientos Giacomini</p>
    </footer>
</template>
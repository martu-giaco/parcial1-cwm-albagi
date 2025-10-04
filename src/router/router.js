import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Publicaciones from '../pages/Publicaciones.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

const routes = [
    { path: '/',                component: Home, },
    { path: '/login',        component: Login, },
    { path: '/signin',    component: Register, },
    { path: '/publicaciones',   component: Publicaciones, }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
import { createApp } from 'vue';
import router from './router/router.js';
import App from './App.Vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
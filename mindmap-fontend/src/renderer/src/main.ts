import './assets/main.css'

import { createApp } from 'vue'
import App from '@renderer/App.vue'
import router from '@renderer/router'
import { setupStore } from './store'



const setupAll = async () => {
    const app = createApp(App);
    app.use(router);
    setupStore(app);
    app.mount('#app');
}

setupAll();


import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NewView from '../views/NewView.vue';
import SettingsView from '../views/SettingsView.vue'; // 新导入的设置视图

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/new', component: NewView },
	{ path: '/settings', component: SettingsView } // 添加设置路由
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [

];
const router = createRouter({
	history: createWebHistory(),
	routes
});


router.beforeEach((to, from) => {
	if (to == from) {
		console.log('pass');
	} else {
		return false;
	}
});
export default router;

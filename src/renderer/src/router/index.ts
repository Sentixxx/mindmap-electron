import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/new",
    name: "New",
    component: () => import("../views/NewView.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (to != from) {
    console.log("pass");
    return true;
  } else {
    return false;
  }
});
export default router;

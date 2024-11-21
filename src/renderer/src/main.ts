import "@renderer/styles/index.scss";
import { createApp } from "vue";
import App from "@renderer/App.vue";
import router from "@renderer/router";
import { setupStore } from "./store";
import "element-plus/theme-chalk/dark/css-vars.css";

const setupAll = async () => {
  const app = createApp(App);
  app.use(router);
  setupStore(app);
  app.mount("#app");
};

setupAll();

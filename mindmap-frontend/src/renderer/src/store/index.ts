import type { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();

export const setupStore = (app: App<Element>) => {
	app.use(store);
};

export * from './modules/app';
export { store };

import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import type { UserConfig } from 'electron-vite';
import type { ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
	let env = {} as any;
	const isBuild = command === 'build';
	if (!isBuild) {
		env = loadEnv(process.argv[3] === '--mode' ? process.argv[4] : process.argv[3], process.cwd());
	} else {
		env = loadEnv(mode, process.cwd());
	}
	return {
		main: {
			plugins: [externalizeDepsPlugin()]
		},
		preload: {
			plugins: [externalizeDepsPlugin()]
		},
		renderer: {
			base: env.VITE_BASE_PATH,
			resolve: {
				alias: {
					'@renderer': resolve('src/renderer/src')
				}
			},
			plugins: [
				vue(),
				AutoImport({
					resolvers: [
						ElementPlusResolver(),
						IconsResolver({
							prefix: 'Icon',
						}),
					],
				}),
				Components({
					resolvers:[
						IconsResolver({
							enabledCollections: ['ep'],
						}),
						ElementPlusResolver(),
					]
				}),
				Icons({
					autoInstall: true,
				}),
			],
			server: {
				fs: {
					cachedChecks: false
				},
				host: '0.0.0.0',
				port: 3000,
				proxy: {
					'/api': {
						target: 'https://localhost:3001/api',
						changeOrigin: true,
						rewrite: (path) => path.replace(/^\/api/, '')
					}
				},
				hmr: {
					overlay: false
				}
			},
		}
	};
});

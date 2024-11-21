import path from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import type { UserConfig } from "electron-vite";
import type { ConfigEnv } from "vite";
import { loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { fileURLToPath } from "url";

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  let env = {} as any;
  const isBuild = command === "build";
  if (!isBuild) {
    env = loadEnv(
      process.argv[3] === "--mode" ? process.argv[4] : process.argv[3],
      process.cwd(),
    );
  } else {
    env = loadEnv(mode, process.cwd());
  }
  return {
    main: {
      plugins: [externalizeDepsPlugin()],
    },
    preload: {
      plugins: [externalizeDepsPlugin()],
    },
    renderer: {
      base: env.VITE_BASE_PATH,
      resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".mjs", ".vue"],
        alias: {
          "@renderer": path.join(__dirname, "./src/renderer/src"),
        },
      },
      plugins: [
        vue(),
        AutoImport({
          imports: ["vue", "vue-router", "vuex", "@vueuse/core"],
          resolvers: [
            ElementPlusResolver(),
            IconsResolver({
              prefix: "Icon",
            }),
          ],
          dts: fileURLToPath(
            new URL("./types/auto-imports.d.ts", import.meta.url),
          ),
        }),
        Components({
          resolvers: [
            IconsResolver({
              enabledCollections: ["ep"],
            }),
            ElementPlusResolver(),
          ],
          dts: fileURLToPath(
            new URL("./types/components.d.ts", import.meta.url),
          ),
        }),
        Icons({
          autoInstall: true,
        }),
      ],
      server: {
        fs: {
          cachedChecks: false,
        },
        host: "0.0.0.0",
        port: 3000,
        proxy: {
          "/api": {
            target: "https://localhost:3001/api",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
        hmr: {
          overlay: false,
        },
      },
    },
  };
});

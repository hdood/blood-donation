import { fileURLToPath, URL } from "node:url";
import vueJSX from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base : "/donate/", 
	plugins: [vue(), vueJSX()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});

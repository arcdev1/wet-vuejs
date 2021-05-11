import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
// TODO: Investigate vite-plugin-vue-i18n
// import vueI18n from "@intlify/vite-plugin-vue-i18n";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "vue", replacement: "vue/dist/vue.esm-bundler.js" }],
  },
  plugins: [
    vue(),
    legacy({
      targets: ["defaults or IE > 10"],
    }),
  ],
});

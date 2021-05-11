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
      // targets must meet or exceed recommendation from Design Decision 2
      // see: https://wet-boew.github.io/wet-boew-documentation/decision/2.html
      targets: ["defaults"],
      // For what's included in "defaults", consult:
      // https://browserslist.dev/?q=ZGVmYXVsdHM%3D
    }),
  ],
});

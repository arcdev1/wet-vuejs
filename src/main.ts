import { createApp } from "vue";
import { i18n } from "./i18n/";
import { router } from "./router";

createApp({}).use(router).use(i18n).mount("#app");

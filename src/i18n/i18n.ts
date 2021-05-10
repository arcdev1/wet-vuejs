import { createI18n } from "vue-i18n";
import { labels } from "./labels";
import { getCurrentLanguage } from "./";

export const i18n = createI18n({
  locale: getCurrentLanguage(), // set locale
  fallbackLocale: "en", // set fallback locale
  messages: labels,
});

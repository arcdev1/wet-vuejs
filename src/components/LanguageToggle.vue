<template>
  <section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right">
    <h2 class="wb-inv">{{ labels.title }}</h2>
    <ul class="list-inline mrgn-bttm-0">
      <li>
        <a
          :lang="translatedPage.langCode"
          :hreflang="translatedPage.langCode"
          :href="translatedPage.href"
        >
          <span class="hidden-xs">{{ labels.languageName }}</span>
          <abbr
            :title="labels.languageName"
            class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase"
            >{{ labels.languageCode }}</abbr
          >
        </a>
      </li>
    </ul>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  getTranslatedPage,
  getCurrentLanguage,
  getOtherOfficialLanguage,
  languageCodePlacement,
} from "../i18n";

export default defineComponent({
  name: "LanguageToggle",
  computed: {
    labels() {
      return {
        title: this.$t("languageToggle.title"),
        languageName: this.$t("languageToggle.name"),
        languageCode: this.$t("languageToggle.code"),
      };
    },
    translatedPage() {
      const currentLanguage = getCurrentLanguage();
      return {
        href: getTranslatedPage({
          currentLanguage,
          placement: languageCodePlacement.QUERYSTRING,
        }),
        langCode: getOtherOfficialLanguage(currentLanguage),
      };
    },
  },
});
</script>

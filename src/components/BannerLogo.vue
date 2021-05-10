<template>
  <div
    class="brand col-xs-9 col-sm-5 col-md-4"
    property="publisher"
    resource="#wb-publisher"
    typeof="GovernmentOrganization"
  >
    <a :href="hrefs.homepage" property="url" id="logo-link"
      ><img
        :src="hrefs.image"
        :alt="labels.alt"
        property="logo"
        id="logo-image"
      /><span class="wb-inv">
        /
        <span :lang="labels.langCode">{{ labels.translation }}</span></span
      ></a
    >
    <meta property="name" :content="labels.alt" />
    <meta property="areaServed" typeof="Country" content="Canada" />
    <link property="logo" :href="hrefs.logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCurrentLanguage, getOtherOfficialLanguage } from "../i18n";

export default defineComponent({
  name: "BannerLogo",
  computed: {
    labels() {
      const currentLanguage = getCurrentLanguage();
      return {
        alt: this.$t("bannerLogo.alt"),
        translation: this.$t("bannerLogo.translation"),
        langCode: getOtherOfficialLanguage(currentLanguage),
      };
    },
    hrefs() {
      return {
        homepage: this.$t("bannerLogo.href"),
        image:
          "https://www.canada.ca/etc/designs/canada/wet-boew/assets/" +
          this.$t("bannerLogo.image"),
        logo:
          "https://www.canada.ca/etc/designs/canada/wet-boew/assets/" +
          this.$t("logo.image"),
      };
    },
  },
});
</script>

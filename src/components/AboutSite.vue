<template>
  <nav
    class="col-md-9 col-lg-10 ftr-urlt-lnk"
    aria-labelledby="title-about-site"
  >
    <h2 class="wb-inv" id="title-about-site">{{ labels.title }}</h2>
    <ul>
      <li>
        <a :href="hrefs.social">{{ labels.social }}</a>
      </li>
      <li>
        <a :href="hrefs.mobile">{{ labels.mobile }}</a>
      </li>
      <li>
        <a :href="hrefs.about">{{ labels.about }}</a>
      </li>
      <li>
        <a :href="hrefs.terms">{{ labels.terms }}</a>
      </li>
      <li>
        <a :href="hrefs.privacy">{{ labels.privacy }}</a>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutSite",
  computed: {
    labels() {
      return {
        title: this.$t("aboutSite.title"),
        social: this.$t("aboutSite.social.label"),
        mobile: this.$t("aboutSite.mobile.label"),
        about: this.$t("aboutSite.about.label"),
        terms: this.$t("aboutSite.terms.label"),
        privacy: this.$t("aboutSite.privacy.label"),
      };
    },
    hrefs() {
      return {
        social: this.$t("aboutSite.social.href"),
        mobile: this.$t("aboutSite.mobile.href"),
        about: this.$t("aboutSite.about.href"),
        terms: this.$t("aboutSite.terms.href"),
        privacy: this.$t("aboutSite.privacy.href"),
      };
    },
  },
});
</script>

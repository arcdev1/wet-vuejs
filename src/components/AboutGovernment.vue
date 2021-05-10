<template>
  <nav class="container wb-navcurr" aria-labelledby="title-about-gov">
    <h2 class="wb-inv" id="title-about-gov">
      {{ labels.title }}
    </h2>
    <ul class="list-unstyled colcount-sm-2 colcount-md-3">
      <li>
        <a :href="hrefs.contactUs">{{ labels.contactUs }}</a>
      </li>
      <li>
        <a :href="hrefs.depts">{{ labels.depts }}</a>
      </li>
      <li>
        <a :href="hrefs.pubMil">{{ labels.pubMil }}</a>
      </li>
      <li>
        <a :href="hrefs.news">{{ labels.news }}</a>
      </li>
      <li>
        <a :href="hrefs.treaties">{{ labels.treaties }}</a>
      </li>
      <li>
        <a :href="hrefs.reporting">{{ labels.reporting }}</a>
      </li>
      <li>
        <a :href="hrefs.pm">{{ labels.pm }}</a>
      </li>
      <li>
        <a :href="hrefs.howGovWorks">{{ labels.howGovWorks }}</a>
      </li>
      <li>
        <a :href="hrefs.openGov">{{ labels.openGov }}</a>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutGovernment",
  computed: {
    hrefs() {
      return {
        contactUs: this.$t("aboutGovernment.contactUs.href"),
        depts: this.$t("aboutGovernment.depts.href"),
        pubMil: this.$t("aboutGovernment.pubMil.href"),
        news: this.$t("aboutGovernment.news.href"),
        treaties: this.$t("aboutGovernment.treaties.href"),
        reporting: this.$t("aboutGovernment.reporting.href"),
        pm: this.$t("aboutGovernment.pm.href"),
        howGovWorks: this.$t("aboutGovernment.howGovWorks.href"),
        openGov: this.$t("aboutGovernment.openGov.href"),
      };
    },
    labels() {
      return {
        title: this.$t("aboutGovernment.title"),
        contactUs: this.$t("aboutGovernment.contactUs.label"),
        depts: this.$t("aboutGovernment.depts.label"),
        pubMil: this.$t("aboutGovernment.pubMil.label"),
        news: this.$t("aboutGovernment.news.label"),
        treaties: this.$t("aboutGovernment.treaties.label"),
        reporting: this.$t("aboutGovernment.reporting.label"),
        pm: this.$t("aboutGovernment.pm.label"),
        howGovWorks: this.$t("aboutGovernment.howGovWorks.label"),
        openGov: this.$t("aboutGovernment.openGov.label"),
      };
    },
  },
});
</script>

<template>
  <img :src="hrefs.image" :alt="labels.alt" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logo",
  computed: {
    labels() {
      return {
        alt: this.$t("logo.alt"),
      };
    },
    hrefs() {
      return {
        image: this.$t("logo.image"),
      };
    },
  },
});
</script>
<template>
  <nav>
    <ul id="wb-tphp">
      <li class="wb-slc">
        <a class="wb-sl" href="#wb-cont">{{ skipTo.main }}</a>
      </li>
      <li class="wb-slc">
        <a class="wb-sl" href="#wb-info">{{ skipTo.about }}</a>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SkipTo",
  computed: {
    labels() {
      return {
        skipToMain: this.$t("skipTo.main"),
        skipToAbout: this.$t("skipTo.about"),
      };
    },
  },
});
</script>
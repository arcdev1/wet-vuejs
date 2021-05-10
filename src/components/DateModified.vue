<template>
  <dl id="wb-dtmd">
    <dt>{{ labels.dateModified }}:&#32;</dt>
    <!-- TODO: Externalize date -->
    <dd><time property="dateModified">2021-05-10</time></dd>
  </dl>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DateModified",
  computed: {
    labels() {
      return { dateModified: this.$t("dateModified.label") };
    },
  },
});
</script>

<template>
  <nav id="wb-bc" property="breadcrumb">
    <h2>{{ $t("breadcrumb.title") }}:</h2>
    <Container>
      <ol class="breadcrumb">
        <li>
          <a :href="hrefs.canadaUrl">{{ labels.canadaweb }}</a>
        </li>
        <li>
          <a :href="hrefs.ecUrl">{{ labels.ecweb }}</a>
        </li>
      </ol>
    </Container>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Container from "../components/Container.vue";
export default defineComponent({
  name: "Breadcrumb",
  components: {
    Container,
  },
  computed: {
    hrefs() {
      return {
        canadaUrl: this.$t("breadcrumb.canada.url"),
        ecUrl: this.$t("breadcrumb.ecweb.url"),
      };
    },
    labels() {
      return {
        canadaweb: this.$t("breadcrumb.canada.label"),
        ecweb: this.$t("breadcrumb.ecweb.label"),
      };
    },
  },
});
</script>

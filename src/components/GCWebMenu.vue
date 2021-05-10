<template>
  <nav class="gcweb-menu" typeof="SiteNavigationElement">
    <Container>
      <h2 class="wb-inv">{{ labels.gcWebMenu }}</h2>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        :aria-label="labels.aria"
      >
        {{ labels.gcWebMenu }}
        <span class="expicon glyphicon glyphicon-chevron-down"></span>
      </button>
      <ul
        role="menu"
        aria-orientation="vertical"
        :data-ajax-replace="hrefs.gcWebMenu"
      />
    </Container>
  </nav>
</template>
<script>
import { defineComponent } from "vue";
import Container from "../components/Container.vue";
export default defineComponent({
  name: "GCWebMenu",
  components: {
    Container,
  },
  computed: {
    labels() {
      return {
        aria: this.$t("gcWebMenu.ariaLabel"),
        gcWebMenu: this.$t("gcWebMenu.label"),
      };
    },
    hrefs() {
      return { gcWebMenu: this.$t("gcWebMenu.url") };
    },
  },
});
</script>

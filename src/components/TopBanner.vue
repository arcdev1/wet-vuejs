<template>
  <Container id="wb-bnr">
    <Row>
      <slot></slot>
    </Row>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "../components/Container.vue";
import Row from "../components/Row.vue";

export default defineComponent({
  name: "TopBanner",
  components: {
    Container,
    Row,
  },
});
</script>

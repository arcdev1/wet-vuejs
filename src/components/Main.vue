<template>
  <main
    property="mainContentOfPage"
    resource="#wb-main"
    class="container"
    typeof="WebPageElement"
  >
    <slot></slot>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Main",
});
</script>

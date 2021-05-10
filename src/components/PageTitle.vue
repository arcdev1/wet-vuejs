<template>
  <h1 property="name" id="wb-cont">{{ title }}</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  created() {
    window.document.title = this.title;
  },
});
</script>

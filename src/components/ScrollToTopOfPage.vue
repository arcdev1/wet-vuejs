<template>
  <Column :xs="6" class="visible-sm visible-xs tofpg">
    <a href="#wb-cont"
      >Top of page <span class="glyphicon glyphicon-chevron-up"></span
    ></a>
  </Column>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Column from "../components/Column.vue";
export default defineComponent({
  name: "ScrollToTopOfPage",
  components: {
    Column,
  },
});
</script>
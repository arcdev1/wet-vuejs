<template>
  <div class="pagedetails"><slot /></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageDetails",
});
</script>
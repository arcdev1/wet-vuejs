<template>
  <div class="landscape"><slot /></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Landscape",
});
</script>
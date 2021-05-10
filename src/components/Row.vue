<template>
  <div class="row"><slot /></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Row",
});
</script>
<template>
  <div :class="computedClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Column",
  props: {
    xs: { type: Number, validator: isValidColumnWidth },
    sm: { type: Number, validator: isValidColumnWidth },
    md: { type: Number, validator: isValidColumnWidth },
    lg: { type: Number, validator: isValidColumnWidth },
    class: String,
  },
  computed: {
    computedClass(): string {
      return `${this.xs ? `col-xs-${this.xs} ` : ""}${
        this.sm ? `col-sm-${this.sm} ` : ""
      }${this.md ? `col-md-${this.md} ` : ""}${
        this.lg ? `col-lg-${this.lg} ` : ""
      }${this.class}`;
    },
  },
});

function isValidColumnWidth(width?: number | null) {
  return width != null && width % 1 === 0 && width > 0 && width <= 12;
}
</script>
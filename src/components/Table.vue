<template>
  <table :class="tableCssClass">
    <caption :class="captionCssClass">
      {{
        caption
      }}
    </caption>
    <slot></slot>
  </table>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useTableStyle } from "../tables/useTableStyle";

export default defineComponent({
  name: "Table",
  props: {
    bordered: { type: Boolean, default: false },
    caption: { type: String, required: true },
    condensed: { type: Boolean, default: false },
    hover: { type: Boolean, default: false },
    responsive: { type: Boolean, default: false },
    showCaption: { type: Boolean, default: false },
    striped: { type: Boolean, default: false },
  },
  setup(props, context) {
    const { tableCssClass, captionCssClass } = useTableStyle(props, context);
    onMounted(() => {
      if (typeof window !== "undefined" && window["wb"]) {
        window["wb"].selectors.push(`.wb-tables`);
        window["wb"].start();
      }
    });
    return { tableCssClass, captionCssClass };
  },
});
</script>
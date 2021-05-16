<template>
  <Table
    id="templates"
    :caption="$props.caption"
    :data-wb-tables="dataWbTables"
    :showCaption="true"
  >
    <slot></slot>
  </Table>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Table from "../components/Table.vue";
import { useTableOptions } from "../tables/useTableOptions";

export default defineComponent({
  name: "DataTable",
  props: {
    caption: { type: String, required: true },
    options: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const { dataWbTables } = useTableOptions(props, context);
    onMounted(() => {
      if (typeof window !== "undefined" && window["wb"]) {
        window["wb"].selectors.push(`.wb-tables .table`);
        window["wb"].start();
      }
    });
    return { dataWbTables };
  },
  components: {
    Table,
  },
});
</script>
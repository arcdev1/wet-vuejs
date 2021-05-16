<template>
  <AppLayout>
    <PageTitle :title="title" />
    <Row>
      <DataTable
        bordered
        condensed
        hover
        striped
        caption="Lorem"
        :options="{ ordering: true, paging: true }"
      >
        <thead>
          <tr>
            <th scope="col">Heading 1</th>
            <th scope="col">Heading 2</th>
            <th scope="col">Heading 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pellentesque lacinia, arcu.</td>
            <td>Fusce convallis rutrum.</td>
            <td>Curabitur malesuada augue.</td>
          </tr>
          <tr>
            <td>Donec ultrices est.</td>
            <td>Aenean vulputate purus.</td>
            <td>Sed malesuada dolor.</td>
          </tr>
          <tr>
            <td>Fusce vel bibendum.</td>
            <td>Mauris ipsum magna.</td>
            <td>Curabitur fermentum mauris.</td>
          </tr>
        </tbody>
      </DataTable>
    </Row>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "../layouts/AppLayout.vue";
import PageTitle from "../components/PageTitle.vue";
import Column from "../components/Column.vue";
import Row from "../components/Row.vue";
// import Table from "../components/Table.vue";
import DataTable from "../components/DataTable.vue";
import { getCurrentLanguage } from "../i18n";

export default defineComponent({
  name: "DataTableDemo",
  components: {
    Column,
    PageTitle,
    Row,
    // Table,
    DataTable,
    AppLayout,
  },
  computed: {
    title() {
      // TODO: Fetch this from your content management system.
      const currentLanguage = getCurrentLanguage();
      return currentLanguage === "en"
        ? "DataTable Demo"
        : "Demonstration de l'element <<DataTable>>";
    },
  },
});
</script>

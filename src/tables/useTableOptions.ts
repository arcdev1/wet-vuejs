import { SetupContext, EmitsOptions, ref, Ref } from "vue";

interface TableOptionProps {
  options: Record<
    string,
    string | number | Array<string | number | object> | object | null
  >;
  [key: string]: any;
}

interface TableOptions {
  dataWbTables: Ref<string>;
}

export function useTableOptions(
  props: Readonly<TableOptionProps>,
  _context: SetupContext<EmitsOptions>
): TableOptions {
  const dataWbTables = ref("");

  computeTableOptions();

  function computeTableOptions() {
    dataWbTables.value = JSON.stringify(props.options);
  }

  return {
    dataWbTables,
  };
}

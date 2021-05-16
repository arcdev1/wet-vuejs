import { SetupContext, EmitsOptions, ref, Ref, toRef, watchEffect } from "vue";

interface TableStyleProps {
  bordered?: boolean;
  condensed?: boolean;
  hover?: boolean;
  responsive?: boolean;
  showCaption?: boolean;
  striped?: boolean;
  [key: string]: any;
}

interface TableStyle {
  tableCssClass: Ref<string>;
  captionCssClass: Ref<string>;
}

export function useTableStyle(
  props: Readonly<TableStyleProps>,
  context: SetupContext<EmitsOptions>
): TableStyle {
  const tableCssClass = ref("");
  const captionCssClass = ref("wb-inv");

  // WARNING: Do not destructure optional props as they will not be ref'd
  // see: https://v3.vuejs.org/guide/composition-api-setup.html#props
  const bordered = ref(Boolean(props.bordered));
  const showCaption = ref(Boolean(props.showCaption));
  const condensed = ref(Boolean(props.condensed));
  const hover = ref(Boolean(props.hover));
  const responsive = ref(Boolean(props.responsive));
  const striped = ref(Boolean(props.striped));
  const cssClass = ref(context.attrs.class ?? "");

  computeTableStyle();

  watchEffect(() => {
    bordered.value = Boolean(props.bordered);
    condensed.value = Boolean(props.condensed);
    hover.value = Boolean(props.hover);
    responsive.value = Boolean(props.responsive);
    striped.value = Boolean(props.striped);
    cssClass.value = context.attrs.class ?? "";
    showCaption.value = Boolean(props.showCaption);
    captionCssClass.value = Boolean(props.showCaption) ? "" : "wb-inv";
  });

  function computeTableStyle() {
    const borderedCssClass = bordered?.value ? "table-bordered" : "";
    const originalCssClass = cssClass.value;
    const condensedCssClass = condensed?.value ? "table-condensed" : "";
    const hoverCssClass = hover?.value ? "table-hover" : "";
    const responsiveCssClass = responsive?.value ? "table-responsive" : "";
    const stripedCssClass = striped?.value ? "table-striped" : "";

    tableCssClass.value =
      `wb-tables table  ${borderedCssClass} ${condensedCssClass} ${hoverCssClass} ${responsiveCssClass} ${stripedCssClass} ${originalCssClass}`.trim();
  }

  return {
    tableCssClass,
    captionCssClass,
  };
}

<template>
  <nav>
    <ul id="wb-tphp">
      <li class="wb-slc">
        <a class="wb-sl" href="#wb-cont">{{ $t("skipTo.main") }}</a>
      </li>
      <li class="wb-slc">
        <a class="wb-sl" href="#wb-info">{{ $t("skipTo.main") }}</a>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SkipTo",
});
</script>
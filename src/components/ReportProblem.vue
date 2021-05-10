<template>
  <div class="col-sm-6 col-md-5 col-lg-4">
    <details class="brdr-0">
      <summary class="btn btn-default text-center">
        {{ $t("reportProblem.instructions") }}
      </summary>
      <div class="well row">
        <div class="gc-rprt-prblm">
          <div class="gc-rprt-prblm-frm gc-rprt-prblm-tggl">
            <form action="#">
              <fieldset>
                <legend>
                  <span class="field-name"
                    >{{ $t("reportProblem.selectAll") }}:
                  </span>
                </legend>
                <div class="checkbox">
                  <label for="gc-rprt-prblm-f1">
                    <input
                      type="checkbox"
                      name="problem1"
                      value="Yes"
                      id="gc-rprt-prblm-f1"
                    />{{ $t("reportProblem.brokenInteraction") }}
                  </label>
                  <input name="problem1" type="hidden" value="No" />
                </div>
                <div class="checkbox">
                  <label for="gc-rprt-prblm-f2">
                    <input
                      type="checkbox"
                      name="problem2"
                      value="Yes"
                      id="gc-rprt-prblm-f2"
                    />{{ $t("reportProblem.typo") }}
                  </label>
                  <input name="problem2" type="hidden" value="No" />
                </div>
                <div class="checkbox">
                  <label for="gc-rprt-prblm-f3">
                    <input
                      type="checkbox"
                      name="problem3"
                      value="Yes"
                      id="gc-rprt-prblm-f3"
                    />{{ $t("reportProblem.missingInfo") }}
                  </label>
                  <input name="problem3" type="hidden" value="No" />
                </div>
                <div class="checkbox">
                  <label for="gc-rprt-prblm-f4">
                    <input
                      type="checkbox"
                      name="problem4"
                      value="Yes"
                      id="gc-rprt-prblm-f4"
                    />{{ $t("reportProblem.outOfDate") }}
                  </label>
                  <input name="problem4" type="hidden" value="No" />
                </div>
                <div class="checkbox">
                  <label for="gc-rprt-prblm-f5">
                    <input
                      type="checkbox"
                      name="problem5"
                      value="Yes"
                      id="gc-rprt-prblm-f5"
                    />{{ $t("reportProblem.notFound") }}
                  </label>
                  <input name="problem5" type="hidden" value="No" />
                </div>
                <div class="checkbox">
                  <label for="gc-rprt-prblm-f6">
                    <input
                      type="checkbox"
                      name="problem6"
                      value="Yes"
                      id="gc-rprt-prblm-f6"
                    />{{ $t("reportProblem.other") }}
                  </label>
                  <input name="problem6" type="hidden" value="No" />
                </div>
              </fieldset>
              <button
                type="submit"
                class="btn btn-primary wb-toggle"
                data-toggle='{"stateOff": "hide", "stateOn": "show", "selector": ".gc-rprt-prblm-tggl"}'
              >
                {{ $t("reportProblem.submit") }}
              </button>
            </form>
          </div>
          <div class="gc-rprt-prblm-thnk gc-rprt-prblm-tggl hide">
            <h3>{{ $t("reportProblem.thankYouTitle") }}</h3>
            <p>
              {{ $t("reportProblem.thankYouMessage") }}
              <a :href="contactLink">{{
                $t("reportProblem.thankYouMessage")
              }}</a
              >.
            </p>
          </div>
        </div>
      </div>
    </details>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReportProblem",
  computed: {
    contactLink() {
      return this.$t("reportProblem.contactLink");
    },
  },
});
</script>

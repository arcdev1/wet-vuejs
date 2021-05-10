<template>
  <DefaultLayout>
    <PageTitle :title="title" />
    <Row>
      <Column :md="8">
        <h2>Lorem</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          auctor consequat vulputate. Suspendisse vel interdum erat. Suspendisse
          et nulla lectus. Sed cursus, orci eu placerat facilisis, leo quam
          faucibus metus, quis interdum sapien neque et nibh. Imperdiet eleifend
          laoreet nunc nisl dictum turpis.
        </p>
      </Column>
      <Column :md="4">
        <h2>Ipsum</h2>
        <img
          src="https://picsum.photos/300/200"
          alt=""
          aria-role="presentation"
        />
      </Column>
    </Row>
    &nbsp;
    <hr class="brdr-bttm" />
    <Row>
      <Column :md="4">
        <h3>Dolor</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          auctor consequat vulputate. Suspendisse vel interdum erat. Suspendisse
          et nulla lectus.
        </p>
      </Column>
      <Column :md="4">
        <h3>Sit</h3>
        <p>
          Quisque accumsan nunc nisl, ac tincidunt nibh vehicula quis. Donec
          imperdiet eleifend laoreet. Quisque dictum turpis dui, et ultrices
          libero lobortis sit amet.
        </p>
      </Column>
      <Column :md="4">
        <h3>Amet</h3>
        <p>
          Quisque accumsan nunc nisl, ac tincidunt nibh vehicula quis. Donec
          imperdiet eleifend laoreet. Quisque dictum turpis dui, et ultrices
          libero lobortis sit amet.
        </p>
      </Column>
    </Row>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import PageTitle from "../components/PageTitle.vue";
import Column from "../components/Column.vue";
import Row from "../components/Row.vue";
import { getCurrentLanguage } from "../i18n";

export default defineComponent({
  name: "HomePage",
  components: {
    Column,
    DefaultLayout,
    PageTitle,
    Row,
  },
  computed: {
    title() {
      // TODO: Fetch this from your content management system.
      const currentLanguage = getCurrentLanguage();
      return currentLanguage === "en"
        ? "Web Experience Toolkit (WET) for VueJS"
        : "Boîte à outils de l'expérience Web (BOEW) pour VueJS";
    },
  },
});
</script>

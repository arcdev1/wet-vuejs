<template>
  <div>
    <SkipTo />
    <Header>
      <TopBanner>
        <LanguageToggle />
        <BannerLogo />
        <Search />
      </TopBanner>
      <AppBar />
      <AppMenu />
      <Breadcrumb />
    </Header>
    <Main>
      <slot></slot>
      <PageDetails>
        <Row>
          <ReportProblem />
          <ShareThisPage />
        </Row>
        <DateModified />
      </PageDetails>
    </Main>
    <Footer>
      <Brand>
        <Container>
          <Row>
            <AboutSite />
            <ScrollToTopOfPage />
            <Column :xs="6" :md="3" :lg="2" class="text-right">
              <Logo />
            </Column>
          </Row>
        </Container>
      </Brand>
    </Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AboutSite from "../components/AboutSite.vue";
import AppMenu from "../components/AppMenu.vue";
import BannerLogo from "../components/BannerLogo.vue";
import Brand from "../components/Brand.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Column from "../components/Column.vue";
import Container from "../components/Container.vue";
import DateModified from "../components/DateModified.vue";
import Footer from "../components/Footer.vue";
import AppBar from "../components/AppBar.vue";
import Header from "../components/Header.vue";

import LanguageToggle from "../components/LanguageToggle.vue";
import Logo from "../components/Logo.vue";
import Main from "../components/Main.vue";
import PageDetails from "../components/PageDetails.vue";
import ReportProblem from "../components/ReportProblem.vue";
import Row from "../components/Row.vue";
import ScrollToTopOfPage from "../components/ScrollToTopOfPage.vue";
import Search from "../components/Search.vue";
import ShareThisPage from "../components/ShareThisPage.vue";
import SkipTo from "../components/SkipTo.vue";
import TopBanner from "../components/TopBanner.vue";

export default defineComponent({
  name: "AppLayout",
  components: {
    AboutSite,
    AppBar,
    AppMenu,
    BannerLogo,
    Brand,
    Breadcrumb,
    Column,
    Container,
    DateModified,
    Footer,
    Header,

    LanguageToggle,
    Logo,
    Main,
    PageDetails,
    ReportProblem,
    Row,
    ScrollToTopOfPage,
    Search,
    ShareThisPage,
    SkipTo,
    TopBanner,
  },
});
</script>

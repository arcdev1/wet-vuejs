<template>
  <SkipTo />
  <Header>
    <TopBanner>
      <LanguageToggle />
      <BannerLogo />
      <!-- // Add Search here when implemented.  -->
      <Search />
    </TopBanner>
    <GCWebMenu />
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
    <Landscape>
      <AboutGovernment />
    </Landscape>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutGovernment from "../components/AboutGovernment.vue";
import AboutSite from "../components/AboutSite.vue";
import BannerLogo from "../components/BannerLogo.vue";
import Brand from "../components/Brand.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Column from "../components/Column.vue";
import Container from "../components/Container.vue";
import DateModified from "../components/DateModified.vue";
import Footer from "../components/Footer.vue";
import GCWebMenu from "../components/GCWebMenu.vue";
import Header from "../components/Header.vue";
import Landscape from "../components/Landscape.vue";
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
  name: "DefaultLayout",
  components: {
    AboutGovernment,
    AboutSite,
    BannerLogo,
    Brand,
    Breadcrumb,
    Column,
    Container,
    DateModified,
    Footer,
    GCWebMenu,
    Header,
    Landscape,
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

<template>
  <nav
    id="wb-sm"
    data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/v4_0_28/cdts/ajax/appmenu-en.html"
    data-trgt="mb-pnl"
    class="wb-menu visible-md visible-lg wb-init wb-data-ajax-replace-inited wb-menu-inited wb-navcurr-inited"
    typeof="SiteNavigationElement"
  >
    <div class="pnl-strt container nvbar">
      <h2 class="wb-inv">Main navigation menu</h2>
      <div class="row">
        <ul class="list-inline menu" role="menubar">
          <li class="">
            <a
              href="#"
              class="item"
              tabindex="0"
              ::aria-posinset="1"
              ::aria-setsize="3"
              role="menuitem"
              >Overview</a
            >
          </li>
          <li class="">
            <a
              href="#"
              class="item"
              tabindex="-1"
              ::aria-posinset="2"
              ::aria-setsize="3"
              role="menuitem"
              >First section</a
            >
          </li>
          <li>
            <a
              href="#s2"
              class="item"
              tabindex="-1"
              ::aria-posinset="3"
              ::aria-setsize="3"
              role="menuitem"
              aria-haspopup="true"
              >Second section<span
                class="expicon glyphicon glyphicon-chevron-down"
              ></span
            ></a>
            <ul
              class="sm list-unstyled"
              id="s2"
              role="menu"
              aria-expanded="false"
              aria-hidden="true"
            >
              <li>
                <a
                  href="#"
                  tabindex="-1"
                  :aria-posinset="1"
                  :aria-setsize="5"
                  role="menuitem"
                  >Subsection 1</a
                >
              </li>
              <li>
                <a
                  href="#"
                  tabindex="-1"
                  :aria-posinset="2"
                  :aria-setsize="5"
                  role="menuitem"
                  >Subsection 2</a
                >
              </li>
              <li>
                <a
                  href="#"
                  tabindex="-1"
                  :aria-posinset="3"
                  :aria-setsize="5"
                  role="menuitem"
                  >Subsection 3</a
                >
              </li>
              <li>
                <a
                  href="#"
                  tabindex="-1"
                  :aria-posinset="4"
                  :aria-setsize="5"
                  role="menuitem"
                  >Subsection 4</a
                >
              </li>
              <li class="slflnk">
                <a
                  href="#"
                  tabindex="-1"
                  :aria-posinset="5"
                  :aria-setsize="5"
                  role="menuitem"
                  >Second section - More</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppMenu",
});
</script>

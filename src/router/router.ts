import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DataTableDemo from "../views/DataTableDemo.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/en",
    component: HomePage,
  },
  {
    path: "/fr",
    component: HomePage,
  },
  {
    path: "/dt",
    component: DataTableDemo,
  },
  // {
  //   path: "/data/:package",
  //   component: HomePage,
  // },
  // {
  //   path: "/data",
  //   component: HomePage,
  // },
  // {
  //   path: "/",
  //   redirect: (to: RouteLocation) => ({
  //     path: "/data",
  //     query: { q: to.params.searchText },
  //   }),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.afterEach((_to, _from) => {
//   console.log("router");
//   if (typeof window !== "undefined" && window.wb) {
//     console.log("wb start");
//     console.dir(window.wb);
//     window.wb.isReady = false;
//     window.wb.isStarted = false;
//     window.wb.start();
//   }
// });

export { router };

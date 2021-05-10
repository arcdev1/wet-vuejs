import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

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

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

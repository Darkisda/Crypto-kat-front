import { createRouter, createWebHistory } from "vue-router";

import Landing from "./pages/Landing.vue";
import Details from "./pages/Details.vue";

const Routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing,
    },
    {
      path: "/details/:abbreviation",
      name: "Details",
      component: Details,
    },
  ],
});

export default Routes;

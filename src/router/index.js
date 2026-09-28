import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import FolliaShip from "../views/FolliaShip.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/products/folliaship",
      name: "folliaship",
      component: FolliaShip,
    },

    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
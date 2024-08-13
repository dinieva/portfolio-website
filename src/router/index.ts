import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/cases",
      name: "cases",
      component: () => import("../views/PortfolioView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;

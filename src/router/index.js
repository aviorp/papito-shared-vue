import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainLayout",
      redirect: "dashboard",
      component: () => import("../layouts/MainLayout.vue"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("../pages/HomePage.vue"),
          meta: {
            title: "Dashboard",
          },
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../pages/AboutPage.vue"),
          meta: {
            title: "About",
          },
        },
      ],
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../pages/LoginPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../pages/NotFoundPage.vue"),
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "@/layout/Dashboard.vue";

const routes = [
  {
    path: "/dashboard",
    component: HomeLayout,
    children: [
      {
        name: "Home",
        path: "home",
        component: () =>
          import(
            /* webpackChunkName: Dashboard */ "@/views/dashboard/home.vue"
          ),
      },
      {
        // meta: { requiresAuth: true },
        name: "Reports",
        path: "reports",
        component: () =>
          import(/* webpackChunkName: Dashboard */ "@/views/reports.vue"),
      },
      {
        // meta: { requiresAuth: true },
        name: "Info",
        path: "info",
        component: () =>
          import(/* webpackChunkName: Dashboard */ "@/views/info.vue"),
      },
      {
        // meta: { requiresAuth: true },
        name: "Contact",
        path: "contact",
        component: () =>
          import(/* webpackChunkName: Dashboard */ "@/views/contact.vue"),
      },
      {
        // meta: { requiresAuth: true },
        name: "Response",
        path: "response",
        component: () =>
          import(/* webpackChunkName: Dashboard */ "@/views/response.vue"),
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import(/* webpackChunkName: "auth" */ "@/layout/Auth.vue"),
    redirect: () => {
      return "/auth/login";
    },
    children: [
      {
        name: "Login",
        path: "login",
        component: () =>
          import(/* webpackChunkName: "auth" */ "@/views/auth/login.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

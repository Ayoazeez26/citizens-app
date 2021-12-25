import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "@/layout/Dashboard.vue";

const routes = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        name: "Home",
        path: "",
        component: () =>
          import(
            /* webpackChunkName: Dashboard */ "@/views/dashboard/home.vue"
          ),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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

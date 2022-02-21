import HomeLayout from "@/layout/Dashboard.vue";

export default [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        name: "Home",
        path: "",
        component: () =>
          import(/* webpackChunkName: auth */ "@/views/dashboard/home.vue"),
      },
      {
        // meta: { requiresAuth: true },
        name: "Reports",
        path: "reports",
        component: () =>
          import(/* webpackChunkName: auth */ "@/views/reports/index.vue"),
      },
      // {
      //   // meta: { requiresAuth: true },
      //   name: "Info",
      //   path: "info",
      //   component: () =>
      //     import(/* webpackChunkName: auth */ "@/views/info.vue"),
      // },
      // {
      //   // meta: { requiresAuth: true },
      //   name: "Contact",
      //   path: "contact",
      //   component: () =>
      //     import(/* webpackChunkName: auth */ "@/views/contact.vue"),
      // },
      // {
      //   // meta: { requiresAuth: true },
      //   name: "Response",
      //   path: "response",
      //   component: () =>
      //     import(/* webpackChunkName: auth */ "@/views/response.vue"),
      // },
      // {
      //   // meta: { requiresAuth: true },
      //   name: "Settings",
      //   path: "settings",
      //   component: () =>
      //     import(/* webpackChunkName: auth */ "@/views/settings.vue"),
      // },
    ],
  },
  {
    path: "/",
    name: "Auth",
    component: () => import(/* webpackChunkName: "auth" */ "@/layout/Auth.vue"),
    redirect: () => {
      return "/login";
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

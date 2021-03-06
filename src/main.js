import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store";
import "./index.css";
import "./assets/tailwind.css";
import "./assets/fonts/fonts.scss";
import { VueToast, options } from '@/plugins/notify';
import { VueSvgIconPlugin } from "@yzfe/vue3-svgicon";
import "@yzfe/svgicon/lib/svgicon.css";
import middleware from "@grafikri/vue-middleware";
// import Loading from "vue-loading-overlay";
// import "vue-loading-overlay/dist/vue-loading.css";

export default ({ next }) => {
  // Your custom if statement
  const tokenObject = localStorage.getItem("auth-token");
  if (!tokenObject) {
    next("/login");
    return false;
  }
  next();
};
router.beforeEach(middleware());

const kadcityApp = createApp(App);

kadcityApp.use(VueSvgIconPlugin, { tagName: "svg-icon" });
kadcityApp.use(store);
kadcityApp.use(router);
kadcityApp.use(VueToast, options);
kadcityApp.mount("#app");

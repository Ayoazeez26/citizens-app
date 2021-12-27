import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import "./assets/tailwind.css";
import "./assets/fonts/fonts.scss";
import { VueSvgIconPlugin } from "@yzfe/vue3-svgicon";
import "@yzfe/svgicon/lib/svgicon.css";

createApp(App)
  .use(VueSvgIconPlugin, { tagName: "svg-icon" })
  .use(store)
  .use(router)
  .mount("#app");

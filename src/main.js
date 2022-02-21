import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store";
import "./index.css";
import "./assets/tailwind.css";
import "./assets/fonts/fonts.scss";
import { VueSvgIconPlugin } from "@yzfe/vue3-svgicon";
import "@yzfe/svgicon/lib/svgicon.css";

const kadcityApp = createApp(App);

kadcityApp.use(VueSvgIconPlugin, { tagName: "svg-icon" });
kadcityApp.use(store);
kadcityApp.use(router);
kadcityApp.mount("#app");

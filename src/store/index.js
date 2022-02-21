import { createStore } from "vuex";
import report from "./report";

export const store = createStore({
  modules: {
    report,
  },
});

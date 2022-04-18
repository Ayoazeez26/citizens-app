import VueToast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
  position: "bottom-center",
  timeout: 8000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  maxToasts: 10,
  rtl: false,
  // toastDefaults: {
  //   [TYPE.SUCCESS]: {
  //     icon: checkmark
  //   },
  //   [TYPE.WARNING]: {
  //     icon: alert
  //   },
  //   [TYPE.ERROR]: {
  //     icon: alert
  //   }
  // }
};

import { useToast } from "vue-toastification";

const toast = useToast();

export const successToast = (message) => {
  toast.clear();
  toast.success(message);
};

export const warningToast = (message) => {
  toast.clear();
  toast.warning(message);
};

export const errorToast = (message) => {
  toast.clear();
  toast.error(message);
};

export { VueToast, options };

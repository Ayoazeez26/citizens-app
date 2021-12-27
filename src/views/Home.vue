<script>
export default {
  name: "Home",
  component: {
    EyeOutlineIcon,
    EyeOffOutlineIcon,
  },
};
</script>
<script setup>
import EyeOutlineIcon from "vue-material-design-icons/EyeOutline.vue";
import EyeOffOutlineIcon from "vue-material-design-icons/EyeOffOutline.vue";
import { ref } from "vue";

const adminId = ref("");
const password = ref("");
const rememberAdmin = ref(null);
const togglePasswordVisibility = (e) => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
const isPasswordVisible = ref(true);
</script>
<template>
  <div class="home flex items-center justify-center">
    <form class="login-form">
      <div class="userId flex flex-col items-start mb-4">
        <label
          class="text-primary text-opacity-60 text-sm font-semibold"
          for="userEmail"
          >Admin ID</label
        >
        <input
          id="userEmail"
          v-model="adminId"
          class="email p-3 border mt-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          type="email"
          name="username"
          placeholder="example@example.com"
        />
      </div>
      <div class="userId flex flex-col items-start relative">
        <label
          class="text-primary text-opacity-60 text-sm font-semibold"
          for="userPassword"
          >Admin Password</label
        >
        <input
          id="userPassword"
          v-model="password"
          class="email p-3 border mt-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          :type="isPasswordVisible ? 'text' : 'password'"
          name="username"
          placeholder="example@example.com"
        />
        <div class="absolute bottom-1.5 right-2">
          <button
            type="button"
            v-if="isPasswordVisible"
            @click.stop="togglePasswordVisibility"
            class="show-icon"
          >
            <eye-outline-icon />
          </button>
          <button
            type="button"
            v-if="!isPasswordVisible"
            @click.stop="togglePasswordVisibility"
          >
            <eye-off-outline-icon />
          </button>
        </div>
      </div>
      <div class="details flex mt-3 items-center justify-between">
        <div class="flex items-center">
          <label
            class="checkbox flex items-center text-sm text-primary text-opacity-60"
          >
            <input type="checkbox" checked="checked" v-model="rememberAdmin" />
            <span class="checkmark"></span>
            Remember Me
          </label>
        </div>
        <a href="#" class="text-primary text-underline text-opacity-60"
          >Forgot Password?</a
        >
      </div>
    </form>
  </div>
</template>

<style lang="scss">
input {
  border: 1px solid rgba($primary, 0.32);
  border-radius: 4px;
}
.material-design-icon > .material-design-icon__svg {
  fill: rgba($primary, 0.6);
}
.checkbox {
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: white;
  border-radius: 2px;
  border: 1px solid rgba($primary, 0.6);
}

/* On mouse-over, add a grey background color */
.checkbox:hover input ~ .checkmark {
  background-color: white;
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
  background-color: rgba($primary, 0.6);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox .checkmark:after {
  left: 5px;
  top: 1px;
  width: 6px;
  height: 11px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>

<script>
export default {
  name: "Home",
  // component: {
  //   EyeOutlineIcon,
  //   EyeOffOutlineIcon,
  // },
};
</script>

<script setup>
import EyeOutlineIcon from "vue-material-design-icons/EyeOutline.vue";
import EyeOffOutlineIcon from "vue-material-design-icons/EyeOffOutline.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const adminId = ref("");
const password = ref("");
const rememberAdmin = ref(true);
const togglePasswordVisibility = (e) => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
const isPasswordVisible = ref(false);
const containsItem = computed(() => {
  if (adminId.value.length > 0 && password.value.length > 0) {
    return false;
  } else {
    return true;
  }
});
const handleLogin = () => {
  console.log("User is logged in");
};
</script>

<template>
  <div
    class="home w-screen h-screen bg-yellow-2 flex flex-col items-center justify-center relative"
  >
    <div class="home-card p-10 rounded-lg">
      <div class="home-card__title flex justify-between items-end">
        <p class="text-3xl">Log In</p>
        <img src="../../assets/images/form-logo.png" alt="Logo " />
      </div>
      <form class="login-form mt-10" @submit.prevent="handleLogin">
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
        <div class="userId flex flex-col items-start relative mb-6">
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
            placeholder="z$!a.*gt#@7&g%"
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
        <div class="details flex mt-3 items-center justify-between mb-10">
          <div class="flex items-center">
            <label
              class="checkbox flex items-center text-sm text-primary text-opacity-60"
            >
              <input
                type="checkbox"
                checked="checked"
                v-model="rememberAdmin"
              />
              <span class="checkmark"></span>
              Remember Me
            </label>
          </div>
          <a
            href="#"
            class="text-primary text-sm text-underline text-opacity-60"
            >Forgot Password?</a
          >
        </div>
        <button
          type="submit"
          :disabled="containsItem"
          class="w-full py-4 bg-primary text-yellow-1 font-medium rounded-lg disabled:bg-opacity-60"
          @click="router.to('/')"
        >
          Login
        </button>
      </form>
    </div>
    <div
      class="copy absolute bottom-0 bg-white w-full flex items-center justify-center py-8"
    >
      <p class="text-sm">
        Copyright © 2021
        <span class="text-green-1 font-medium"
          >Kaduna Capital Territory Authority of Kaduna State.</span
        >
        All rights reserved
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  background-image: url("../../assets/images/home-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  &-card {
    background-color: white;
    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.1),
      0px 0px 1px rgba(0, 0, 0, 0.31);

    .button:disabled {
      background-color: $purple-2;
    }
    .button[disabled] {
      background-color: $purple-2;
    }
  }
}
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
  padding-left: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background-color: white;
  }

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    /* When the checkbox is checked, add a blue background */
    &:checked {
      ~ .checkmark {
        background-color: rgba($primary, 0.6);

        /* Show the checkmark when checked */
        &:after {
          display: block;
        }
      }
    }
  }
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 5px;
    left: 0;
    height: 12px;
    width: 12px;
    background-color: white;
    border-radius: 2px;
    border: 1px solid rgba($primary, 0.6);

    /* Create the checkmark/indicator (hidden when not checked) */
    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }
}

/* Style the checkmark/indicator */
.checkbox .checkmark:after {
  left: 3.5px;
  top: 0;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>

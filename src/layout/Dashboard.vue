<script>
export default {};
</script>
<script setup>
import { ref } from "vue";
import dashicon from "../assets/dashicons/dashboard.svg";
import reporticon from "../assets/dashicons/record.svg";
// import infoicon from "../assets/dashicons/info.svg";
// import contacticon from "../assets/dashicons/contact.svg";
// import responseicon from "../assets/dashicons/response.svg";
// import settingsicon from "../assets/dashicons/settings.svg";
import logouticon from "../assets/dashicons/logout.svg";
const showDialog = ref(false);
import { useRouter } from "vue-router";

const router = useRouter();
const showProfile = ref(false);

const toggleDialog = () => {
  showDialog.value = !showDialog.value;
};

const handleLogout = () => {
  localStorage.removeItem("auth-token");

  router.push({ name: "Login" });
};
</script>
<template>
  <div class="min-w-screen min-h-screen flex">
    <div class="sidebar pt-24">
      <div class="sidebar-links px-4">
        <router-link
          to="/"
          class="item flex items-center space-x-2 px-4 cursor-pointer py-3"
        >
          <svg-icon :data="dashicon" />
          <p class="item__text text-white">Dashboard</p>
        </router-link>
        <router-link
          to="/reports"
          class="item flex items-center space-x-2 px-4 cursor-pointer py-3"
        >
          <svg-icon :data="reporticon" />
          <p class="item__text text-white">Reports</p>
        </router-link>
        <!-- <router-link
          to="/dashboard/info"
          class="item flex items-center space-x-2 px-4 cursor-pointer py-3"
        >
          <svg-icon :data="infoicon" />
          <p class="item__text text-white">Information</p>
        </router-link>
        <router-link
          to="/dashboard/contact"
          class="item flex items-center space-x-2 px-4 cursor-pointer py-3"
        >
          <svg-icon :data="contacticon" />
          <p class="item__text text-white">Contact</p>
        </router-link>
        <router-link
          to="/dashboard/response"
          class="item flex items-center space-x-2 px-4 cursor-pointer py-3 mb-7"
        >
          <svg-icon :data="responseicon" />
          <p class="item__text text-white">Emergency Response</p>
        </router-link> -->
        <div class="line w-full h-px bg-grey-1 my-8"></div>
        <!-- <router-link
          to="/dashboard/settings"
          class="item flex items-center space-x-2 px-4 cursor-pointer py-3 mt-10"
        >
          <svg-icon :data="settingsicon" />
          <p class="item__text text-white">Settings</p>
        </router-link> -->
        <div
          @click="toggleDialog"
          class="item flex items-center space-x-2 px-4 cursor-pointer py-3"
        >
          <svg-icon :data="logouticon" />
          <p class="item__text text-white">Logout</p>
        </div>
      </div>
    </div>
    <div class="main bg-yellow-2 w-full min-h-screen">
      <div
        class="top-nav bg-white w-full h-20 flex items-center justify-between z-10 sticky top-0"
      >
        <img
          class="w-32 h-auto ml-4"
          src="../assets/images/dashboard_logo.png"
          alt="logo"
        />

        <div class="relative flex items-center mr-16">
          <img
            class="mr-6"
            src="../assets/icons/notifications.svg"
            alt="notification"
          />
          <div
            @click="showProfile = !showProfile"
            class="top-nav__desc cursor-pointer flex items-center pl-6"
          >
            <img src="../assets/icons/pfp.svg" alt="profile picture" />
            <div class="flex flex-col pl-4">
              <span class="text-sm">Aaron John</span>
              <span class="green font-medium text-left text-green-1"
                >Super Admin</span
              >
            </div>
          </div>
        </div>
        <div
          v-if="showProfile"
          class="profile-info absolute top-20 right-0 w-80 h-32 bg-white"
        >
          <div
            class="bg-yellow-2 w-full h-12 flex items-center font-semibold pl-4 text-xs justify-start"
          >
            <h6 class="text-primary">USER PROFILE</h6>
          </div>
          <div class="flex mt-4">
            <img
              class="w-12 mx-4"
              src="../assets/icons/pfp.svg"
              alt="profile picture"
            />
            <div class="desc flex flex-col justify-start text-left">
              <p class="text-xs leading-none font-medium">Super Admin</p>
              <p class="text-sm mt-1 leading-none font-semibold">Aaron John</p>
              <div class="flex items-center mt-1">
                <img
                  class=""
                  src="../assets/icons/work.svg"
                  alt="profile picture"
                />
                <span class="font-semibold small-text ml-2"
                  ><span class="title font-medium">Job Role:</span> PA to the Administrator
                  KCTA</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-section flex items-start">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <div class="popup" v-if="showDialog">
    <div class="popup-container">
      <div
        class="popup-container__content flex flex-col justify-start text-left items-left"
      >
        <p class="text-lg mb-6 text-primary font-bold raleway">Logout</p>
        <p class="text-grey-1 font-medium text-base text-left mb-10">
          Confirm if you really want to logout. Select cancel to go back.
        </p>
        <div class="buttons flex items-center self-end justify-center">
          <button
            @click="toggleDialog"
            type="button"
            class="text-primary text-sm font-semibold"
          >
            CANCEL
          </button>
          <div
            @click="handleLogout"
            class="logout-btn text-primary text-opacity-40 text-sm font-semibold cursor-pointer"
          >
            I WANT TO LOGOUT
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.sidebar {
  width: 272px;
  height: 100vh;
  background-color: $primary;
  position: fixed;

  &-links div:nth-child(5) {
    padding-bottom: 40px;
    border-bottom: 1px solid $grey-1;
  }
  // &-links div:nth-child(6) {
  //   padding-top: 20px;
  // }
  .item {
    border-radius: 10px;
    fill: $yellow-1;
    & .svg-fill {
      fill: $yellow-1;
    }
    &.router-link-exact-active {
      background-color: $yellow-1;
      color: $primary;
      & .svg-fill {
        fill: $primary;
      }
      .item__text {
        color: $primary;
      }
    }
  }
}
.main {
  .top-nav {
    box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.25);
    &__desc {
      border-left: 1px solid rgba($primary, 0.32);

      .green {
        font-size: 10px;
      }
    }
  }
  &-section {
    padding-left: 272px;
    .home-section {
      margin: 56px 64px 72px 72px;
      .card {
        width: 184px;
        min-height: 180px;
        padding: 30px;
        background-color: white;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        margin-right: 28px;
        margin-bottom: 28px;
        img {
          margin-top: 10px;
        }
      }
      .shadow-section {
        margin-top: 20px;
      }
      .card-container div:nth-child(4) a {
        padding-left: 20px;
        padding-right: 20px;
      }
      @media screen and (max-width: 1294px) {
        margin: 56px 24px 72px 24px;
      }
    }
  }
}
.popup {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(black, 0.3);
  z-index: 50;

  &-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
      width: 470px;
      background-color: white;
      border-radius: 8px;
      padding: 38px 32px;

      .logout-btn {
        margin-left: 57px;
      }
    }
  }
}
.profile-info {
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
}
.small-text {
  font-size: 10px;
  color: #838383;
  .title {
    color: #bcbcc4;
  }
}
</style>

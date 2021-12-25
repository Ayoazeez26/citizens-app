<script>
export default {};
</script>
<script setup>
import { ref } from "vue";

const links = ref([
  {
    name: "Dashboard",
    to: "/",
    icon: "dashboard",
  },
  {
    name: "Reports",
    to: "/dashboard/reports",
    icon: "record",
  },
  {
    name: "Get Info",
    to: "/dashboard/info",
    icon: "info",
  },
  {
    name: "Contact Us",
    to: "/dashboard/contact",
    icon: "contact",
  },
  {
    name: "Emergency Response",
    to: "/dashboard/response",
    icon: "response",
  },
  {
    name: "Settings",
    to: "/dashboard/settings",
    icon: "settings",
  },
]);
</script>
<template>
  <div class="min-w-screen min-h-screen flex">
    <div class="sidebar pt-16">
      <div class="sidebar-links px-4">
        <div
          v-for="(item, index) in links"
          :key="index"
          class="sidebar-links__link my-8"
        >
          <router-link
            :to="item.to"
            class="item flex items-center space-x-2 px-4 cursor-pointer"
          >
            <img
              :src="require(`../assets/icons/${item.icon}.svg`)"
              :alt="`${item.name}-image`"
              class="item__icon"
            />
            <p class="item__text text-white">{{ item.name }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="main bg-yellow-2 w-full min-h-screen">
      <div
        class="top-nav bg-white w-full h-20 flex items-center justify-between z-10 sticky top-0"
      >
        <img
          class="w-32 h-auto ml-4"
          src="../assets/images/dashboard-logo.png"
          alt="logo"
        />
        <div class="flex items-center mr-16">
          <img
            class="mr-6"
            src="../assets/icons/notifications.svg"
            alt="notification"
          />
          <div class="top-nav__desc flex items-center pl-6">
            <img src="../assets/icons/pfp.svg" alt="profile picture" />
            <div class="flex flex-col pl-4">
              <span class="text-sm">Aaron John</span>
              <span class="green font-medium text-left text-green-1"
                >Super Admin</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="main-section flex items-start">
        <router-view></router-view>
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
  &-links div:nth-child(6) {
    padding-top: 20px;
  }
  .item {
    border-radius: 10px;
    &.router-link-exact-active {
      background-color: $yellow-1;
      color: $primary;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
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
  }
}
</style>

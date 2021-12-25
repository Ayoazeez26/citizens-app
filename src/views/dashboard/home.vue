<script>
export default {};
</script>
<script setup>
import { ref } from "vue";

const userDemo = ref([
  {
    name: "Chikun",
    amount: "123,456",
    desc: "Registered",
  },
  {
    name: "Igabi",
    amount: "85,546",
    desc: "Registered",
  },
  {
    name: "Kaduna North",
    amount: "754,654",
    desc: "Registered",
  },
  {
    name: "Kaduna South",
    amount: "999,989",
    desc: "Registered",
  },
  {
    name: "Non Resident",
    amount: "3,456",
    desc: "Registered",
  },
]);

const shadowButtons = ref([
  {
    name: "Reports",
    amount: "3,123,456",
    desc: "Total Clicks",
    icon: "dash-record",
    to: "/dashboard/reports",
  },
  {
    name: "Get Info",
    amount: "3,123,456",
    desc: "Total Clicks",
    icon: "dash-info",
    to: "/dashboard/info",
  },
  {
    name: "Contact Us",
    amount: "3,123,456",
    desc: "Total Clicks",
    icon: "dash-contact",
    to: "/dashboard/contact",
  },
  {
    name: "Emergency Response",
    amount: "3,123,456",
    desc: "Total Clicks",
    icon: "dash-response",
    to: "/dashboard/response",
  },
]);
</script>
<template lang="">
  <div class="home-section">
    <div class="demo flex flex-col justify-start items-start">
      <h2 class="font-medium raleway text-2xl">User Demographics</h2>
      <div class="mt-6 flex flex-wrap">
        <div
          v-for="(item, index) in userDemo"
          :key="index"
          class="card rounded-lg flex flex-col items-center justify-center"
        >
          <span class="text-sm">{{ item.name }}</span>
          <span class="text-gold-1 text-2xl font-semibold mt-6">
            {{ item.amount }}
          </span>
          <span class="text-xs text-primary text-opacity-40">
            {{ item.desc }}
          </span>
        </div>
      </div>
    </div>
    <div class="shadow-section flex flex-col justify-start items-start">
      <h2 class="font-medium raleway text-2xl">Shadow Buttons</h2>
      <div class="mt-6 flex flex-wrap">
        <div v-for="(item, index) in shadowButtons" :key="index">
          <router-link
            :to="item.to"
            class="card rounded-lg flex flex-col items-center justify-center"
          >
            <img
              :src="require(`../../assets/icons/${item.icon}.svg`)"
              :alt="`${item.name}-image`"
            />
            <span class="text-sm mt-2">{{ item.name }}</span>
            <span class="text-gold-1 text-2xl font-semibold mt-6">
              {{ item.amount }}
            </span>
            <span class="text-xs text-primary text-opacity-40">
              {{ item.desc }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home-section {
  margin: 56px 64px 72px 72px;
  .card {
    width: 184px;
    padding-top: 30px;
    padding-bottom: 30px;
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
}
</style>

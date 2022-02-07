<script>
// import "../../../sprite/svg-icons.svg";
export default {};
</script>
<script setup>
import { ref } from "vue";
import smsicon from "../../assets/dashicons/sms.svg";
// eslint-disable-next-line no-unused-vars
import phoneicon from "../../assets/dashicons/phone.svg";

const waste = ref([
  {
    name: "Messages",
    icon: "smsicon",
    count: "658",
  },
  {
    name: "Calls",
    icon: "phoneicon",
    count: "148",
  },
]);

const shadowButtons = ref([
  {
    name: "Reports",
    amount: "3,123,456",
    desc: "Total Clicks",
    icon: "dash-record",
    to: "/reports",
  },
  {
    name: "Get Info",
    amount: "3,123,456",
    desc: "Total Clicks",
    icon: "dash-info",
    to: "/info",
  },
  {
    name: "Contact Us",
    amount: "3,123,456",
    desc: "Total Clicks",
    icon: "dash-contact",
    to: "/contact",
  },
  {
    name: "Emergency Response",
    amount: "3,123,456",
    desc: "Total Clicks",
    icon: "dash-response",
    to: "/response",
  },
]);
</script>
<template lang="">
  <div class="home-section">
    <div class="demo flex flex-col justify-start items-start">
      <h2 class="font-medium raleway text-2xl">
        Total Report Counts - Waste Management
      </h2>
      <div class="mt-6 flex flex-wrap">
        <div
          v-for="(item, index) in waste"
          :key="index"
          class="card rounded-lg flex flex-col items-center justify-center"
        >
          <svg-icon :data="smsicon" />
          <span class="text-sm">{{ item.name }}</span>
          <span class="text-gold-1 text-2xl font-semibold mt-8">
            {{ item.count }}
          </span>
          <span class="text-xs text-primary text-opacity-40">
            nothing to see here
          </span>
        </div>
      </div>
    </div>
    <div class="shadow-section flex flex-col justify-start items-start">
      <h2 class="font-medium raleway text-2xl">Shadow Buttons</h2>
      <div class="card-container mt-6 flex flex-wrap">
        <div v-for="(item, index) in shadowButtons" :key="index">
          <router-link
            :to="item.to"
            class="card rounded-lg flex flex-col items-center justify-center cursor-pointer"
          >
            <img
              :src="require(`../../assets/icons/${item.icon}.svg`)"
              :alt="`${item.name}-image`"
            />
            <span class="text-sm mt-2">{{ item.name }}</span>
            <span class="text-gold-1 text-2xl font-semibold mt-8">
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
<style lang="scss" scoped></style>

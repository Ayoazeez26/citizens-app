<script>
export default {};
</script>
<script setup>
import { ref } from "vue";

const getInfo = ref([
  {
    name: "News Update within K.C.T.A",
    amount: "3,123,456",
    desc: "Total Clicks",
  },
  {
    name: "Road Constructions within K.C.T.A",
    amount: "3,123,456",
    desc: "Total Clicks",
  },
  {
    name: "Affiliated Agencies",
    amount: "3,123,456",
    desc: "Total Clicks",
  },
  {
    name: "Government Policies",
    amount: "3,123,456",
    desc: "Total Clicks",
  },
  {
    name: "Budget and Expenditure",
    amount: "3,123,456",
    desc: "Total Clicks",
  },
]);
</script>
<template lang="">
  <div class="home-section">
    <div class="demo flex flex-col justify-start items-start">
      <h2 class="font-medium raleway text-2xl">Get Info</h2>
      <div class="card-container mt-6 flex flex-wrap">
        <div
          v-for="(item, index) in getInfo"
          :key="index"
          class="card rounded-lg flex flex-col items-center justify-center"
        >
          <span class="text-sm">{{ item.name }}</span>
          <span class="text-gold-1 text-2xl font-semibold mt-8">
            {{ item.amount }}
          </span>
          <span class="text-xs text-primary text-opacity-40">
            {{ item.desc }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home-section .card-container div {
  &:nth-child(1) {
    padding-left: 20px;
    padding-right: 20px;
  }
  &:nth-child(2) {
    padding-left: 20px;
    padding-right: 20px;
  }
  &:nth-child(4) {
    padding-left: 20px;
    padding-right: 20px;
  }
  &:nth-child(5) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>

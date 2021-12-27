<script>
export default {};
</script>
<script setup>
import { ref } from "vue";

const userDemo = ref([
  {
    name: "Road Construction & Maintenance",
    amount: "3,123,456",
    desc: "Total Clicks",
  },
  {
    name: "Pollution and Noise Control",
    amount: "3,123,456",
    desc: "Total Clicks",
  },
  {
    name: "Waste Management",
    amount: "3,123,456",
    desc: "Total Clicks",
  },
  {
    name: "Emergencies",
    amount: "3,123,456",
    desc: "Total Clicks",
  },
]);
</script>
<template lang="">
  <div class="home-section">
    <div class="demo flex flex-col justify-start items-start">
      <h2 class="font-medium raleway text-2xl">Reports</h2>
      <div class="mt-6 flex flex-wrap">
        <div
          v-for="(item, index) in userDemo"
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
<style lang="scss" scoped></style>

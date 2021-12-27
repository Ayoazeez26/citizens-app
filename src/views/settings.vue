<script>
export default {};
</script>
<script setup>
// import { ref } from "vue";

// const response = ref([
//   {
//     name: "Fire Service Hotline",
//     amount: "3,123,456",
//     desc: "Total Clicks",
//   },
//   {
//     name: "Police Emergencies",
//     amount: "3,123,456",
//     desc: "Total Clicks",
//   },
//   {
//     name: "Building Collapse",
//     amount: "3,123,456",
//     desc: "Total Clicks",
//   },
//   {
//     name: "Kidnapping Hotline",
//     amount: "3,123,456",
//     desc: "Total Clicks",
//   },
// ]);
</script>
<template lang="">
  <div class="home-section">
    <div class="demo flex flex-col justify-start items-start">
      <h2 class="font-medium raleway text-2xl">Settings</h2>
      <!-- <div class="card-container mt-6 flex flex-wrap">
        <div
          v-for="(item, index) in response"
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
      </div> -->
    </div>
  </div>
</template>
<style lang="scss">
.home-section .card-container div {
  &:nth-child(1) {
    padding-left: 10px;
    padding-right: 10px;
  }
  &:nth-child(2) {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>

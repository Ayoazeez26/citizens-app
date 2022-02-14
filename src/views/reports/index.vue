<script>
export default {};
</script>
<script setup>
import arrowDown from "../../assets/dashicons/arrow-down.svg";
import search from "../../assets/dashicons/search.svg";
import { ref, computed } from "vue";

const searchInput = ref("");
const filterBody = computed(() => {
  let tempReports = reports.value;
  if (searchInput.value !== '' && searchInput.value) {
    tempReports = tempReports.filter((item) => {
      return item.title.toUpperCase().includes(searchInput.value.toUpperCase())
    })
  }
  return tempReports
})
const statuses = ref(["Pending", "In Progress", "Resolved"]);
const reports = ref([
  {
    name: "Umar Salihu",
    img: "https://source.unsplash.com/random/56x56",
    status: "Pending",
    time: "12:25pm",
    title: "Indiscriminate Dumping of Waste",
    shortDesc:
      "Unlawful disposal of waste in undesignated spaces such as open...",
  },
  {
    name: "Umar Salihu",
    img: "https://source.unsplash.com/random/56x56",
    status: "In Progress",
    time: "12:25pm",
    title: "Littering",
    shortDesc:
      "Littering is the unlawful deposit of any type of waste material that...",
  },
  {
    name: "Umar Salihu",
    img: "https://source.unsplash.com/random/56x56",
    status: "Resolved",
    time: "12:25pm",
    title: "Roro Bins/Container Not Covered",
    shortDesc:
      "Waste bin container not covered thereby exposing waste causing...",
  },
  {
    name: "Umar Salihu",
    img: "https://source.unsplash.com/random/56x56",
    status: "Pending",
    time: "12:25pm",
    title: "Illegal Hawking of Waste Residue",
    shortDesc:
      "Waste residue sold by the road side like metals, aluminum, plastics...",
  },
  {
    name: "Umar Salihu",
    img: "https://source.unsplash.com/random/56x56",
    status: "In Progress",
    time: "12:25pm",
    title: "Drainage Waste Unattended to",
    shortDesc: "Heap of drainage waste on culvert without proper disposal...",
  },
  {
    name: "Umar Salihu",
    img: "https://source.unsplash.com/random/56x56",
    status: "Pending",
    time: "12:25pm",
    title: "Indiscriminate Dumping of Waste",
    shortDesc:
      "Unlawful disposal of waste in undesignated spaces such as open...",
  },
  {
    name: "Umar Salihu",
    img: "https://source.unsplash.com/random/56x56",
    status: "Resolved",
    time: "12:25pm",
    title: "Wrong Placement of Roro Bins",
    shortDesc:
      "Keeping of Roro bins in unauthorized locations or moving them from...",
  },
  {
    name: "Umar Salihu",
    img: "https://source.unsplash.com/random/56x56",
    status: "Pending",
    time: "12:25pm",
    title: "Burning of Waste in Unauthorized Locations",
    shortDesc:
      "Involves burning of refuse or any material in unauthorized locations...",
  },
  {
    name: "Umar Salihu",
    img: "https://source.unsplash.com/random/56x56",
    status: "In Progress",
    time: "12:25pm",
    title: "Indiscriminate Dumping of Waste",
    shortDesc:
      "Unlawful disposal of waste in undesignated spaces such as open...",
  },
]);
const displayData = ref({});
const selectedIndex = ref(null);
const checkStatus = (status) => {
  if (status === "Pending") {
    return "status__pending";
  } else if (status === "In Progress") {
    return "status__progress";
  } else {
    return "status__resolved";
  }
};
const setValue = (index) => {
  selectedIndex.value = index;
  displayData.value = reports.value[index];
};
const btnClicked = ref(false);
const filterClicked = ref(false);
</script>
<template lang="">
  <div class="home-section w-full">
    <div class="demo flex flex-col justify-start items-start">
      <div class="flex justify-between items-center mb-8 w-full">
        <h2 class="font-medium raleway text-2xl">Reports</h2>
        <div class="flex items-center relative">
          <input
            type="text"
            v-model="searchInput"
            @input="filterBody"
            class="border border-primary rounded-xl pl-6 text-xs bg-transparent h-10 mr-2 w-60 2xl:w-80"
            placeholder="Search by Name or Resolution Status"
          />
          <svg-icon class="absolute top-3 mt-px left-2" :data="search" />
          <button
            class="bg-yellow-1 cursor-pointer h-10 flex items-center justify-center rounded-xl px-4 py-3 ml-2 text-xs text-white"
            :class="filterClicked ? 'bg-primary' : 'bg-yellow-1'"
            @click="filterClicked = !filterClicked"
          >
            <span>Filter by Tags</span>
            <svg-icon
              class="ml-2"
              :data="arrowDown"
              :class="filterClicked ? 'transform rotate-180' : ''" />
          </button>
        </div>
      </div>
      <div class="report w-full">
        <div
          v-for="(report, index) in filterBody"
          :key="index"
          :class="index === selectedIndex ? 'active' : ''"
          @click="setValue(index)"
          class="report-card bg-white flex items-start rounded-2xl p-6 mb-4 cursor-pointer"
        >
          <div class="pfp w-14 h-14 rounded-full">
            <img class="w-full rounded-full" :src="report.img" alt="" />
          </div>
          <div class="flex flex-col ml-6 w-5/6">
            <div class="flex items-center mb-3">
              <p class="font-medium text-black flex-grow text-left text-sm">
                {{ report.name }}
              </p>
              <p
                class="status status__pending flex items-center justify-center text-xs text-white px-2"
                :class="checkStatus(report.status)"
              >
                {{ report.status }}
              </p>
              <p class="time text-sm ml-10 text-grey-3">{{ report.time }}</p>
            </div>
            <h2 class="text-yellow-1 font-medium mb-4 text-left text-lg">
              {{ report.title }}
            </h2>
            <p class="text-sm text-left text-grey-3">
              {{ report.shortDesc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="info h-full">
    <template v-if="Object.keys(displayData).length">
      <div class="py-16 px-8 d-flex flex-col items-start w-full text-left">
        <div class="flex justify-between text-sm items-center text-grey-3 mb-8">
          <p class="">Feb 08</p>
          <p class="">{{ displayData.time }}</p>
        </div>
        <div class="flex items-center mb-3">
          <div class="pfp w-8 h-8 rounded-full">
            <img class="w-full rounded-full" :src="displayData.img" alt="" />
          </div>
          <p class="font-medium text-black flex-grow ml-4 text-sm">
            {{ displayData.name }}
          </p>
        </div>
        <h4 class="mt-1 text-yellow-1 font-medium">{{ displayData.title }}</h4>
        <p class="mt-8 text-primary text-opacity-40 text-xs">Location</p>
        <p class="mt-2 text-sm font-medium">No. 4 Ahmadu Bello Way</p>
        <p class="mt-4 text-primary text-opacity-40 text-xs">Nearest Landmark</p>
        <p class="mt-2 text-sm font-medium">Makarfi Plaza</p>
        <p class="mt-4 text-primary text-opacity-40 text-xs">Resolution Status</p>
        <p
          class="mt-2 status text-white flex justify-center items-center px-3 max-w-max leading-none text-sm font-medium"
          :class="checkStatus(displayData.status)"
        >
          {{ displayData.status }}
        </p>
        <p class="mt-4 text-primary text-opacity-40 text-xs">Report Description</p>
        <p class="mt-2 text-base font-medium">Unlawful disposal of waste in undesignated spaces such as open or vacant land, sources of water, and other areas.</p>
        <button
          class="border cursor-pointer rounded-lg h-14 w-full flex items-center justify-center text-base font-medium mt-12"
          :class="btnClicked ? 'bg-primary text-white' : 'border-yellow-1 text-yellow-1'"
          @click="btnClicked = !btnClicked"
        >
          <span class="mr-2">Update Status</span>
          <svg-icon
            class="ml-2"
            :data="arrowDown"
            :class="btnClicked ? 'transform rotate-180' : ''"
          />
        </button>
        <div v-if="btnClicked" class="mt-4 flex justify-evenly items-center">
          <p
            v-for="(status, index) in statuses"
            :key="index"
            class="mt-2 cursor-pointer status text-white flex justify-center items-center px-3 max-w-max leading-none text-sm font-medium"
            :class="checkStatus(status)"
            @click="reports[selectedIndex].status = status"
          >
            {{ status }}
          </p>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-col h-full items-center justify-center">
        <img src="../../assets/icons/empty-info.svg" width="204" height="227" />
        <p
          class="text-sm font-medium mt-6 mb-20 text-primary text-center text-opacity-40"
        >
          No reports selected yet
        </p>
      </div>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.home-section {
  padding-right: 416px;

  .report-card {
    height: 142px;
    width: 100%;

    &.active {
      border: 1px solid rgba($yellow-1, 0.6);
      box-shadow: 0px 1px 32px rgba(134, 134, 134, 0.25);
    }
  }
}
    .status {
      height: 22px;
      &__pending {
        background-color: $red;
      }
      &__progress {
        background-color: $yellow-1;
      }
      &__resolved {
        background-color: $green-1;
      }
    }
.info {
  width: 416px;
  height: calc(100vh - 80px);
  background-color: white;
  position: fixed;
  right: 0;
  .status {
    height: 29px;
    border-radius: 3px;
  }
}
</style>

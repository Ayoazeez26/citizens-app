<script>
export default {};
</script>
<script setup>
import arrowDown from "../../assets/dashicons/arrow-down.svg";
import search from "../../assets/dashicons/search.svg";
import { watch, ref, computed } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { getAllReports, updateReportStatus } from "@/services/ReportService";
// import { useStore } from "vuex";

// const store = useStore();
const router = useRouter();
const route = useRoute();
const reportData = ref([]);
const getReports = () => {
  getAllReports().then((res) => {
    const data = res.data;
    console.log(data);
    reportData.value = data.data.singleReport;
    // filterData();
  });
};
getReports();

const updateStatus = (status) => {
  displayData.value.status = status
  // filterBody[selectedIndex].status = status
  const id = displayData.value._id;
  const data = displayData.value;
  updateReportStatus(id, data).then((res) => {
    console.log(data)
    filterBody.value[selectedIndex].status = status
  })
}

watch(route, (value) => {
  console.log(value);
  checkHash();
})
// const reportData = computed(() => store.state.report.allReports);
const statusFilter = ref('');
const checkHash = () => {
  if (route.hash) {
    let statusVal = route.hash.split('');
    statusVal.shift();
    let finalStatus = statusVal.join('');
    statusFilter.value = finalStatus;
  }
}
checkHash();
const searchInput = ref("");
const filterBody = computed(() => {
  let tempReports = reportData.value;
  if (searchInput.value !== '' && searchInput.value) {
    tempReports = tempReports.filter((item) => {
      return item.title.toUpperCase().includes(searchInput.value.toUpperCase())
    })
  }
  if (statusFilter.value) {
    tempReports = tempReports.filter(item => {
      return (item.status.toUpperCase().includes(statusFilter.value.toUpperCase()))
    })
  }
  return tempReports
})
const description = ref([
  {
    tag: "Indiscriminate dumping of waste",
    shortDesc: "unlawful disposal of waste in undesignated spaces...",
    longDesc: "unlawful disposal of waste in undesignated spaces such as open or vacant land, sources of water, and other areas."
  },
  {
    tag: "Littering",
    shortDesc: "Littering is the unlawful deposit of any type of waste material...",
    longDesc: "Littering is the unlawful deposit of any type of waste material that is less than 200 litres in volume. This includes;cigarette butts, drinks bottles, fast food packaging, food scraps, green waste such as palm fronds and grass clippings, fishing tackle, balloons, leaving items beside an overflowing bin, leaving items under your seat at a sports stadium, leaving a newspaper on public transport, throwing of items from moving vehicles."
  },
  {
    tag: "Roro Bins/Container not covered",
    shortDesc: "waste bin container not covered thereby exposing waste causing air pollution...",
    longDesc: "waste bin container not covered thereby exposing waste causing air pollution (toxic materials) in the environment."
  },
  {
    tag: "Illegal hawking of waste residue",
    shortDesc: "waste residue sold by the road side like metals, aluminum, plastics and other waste residue.",
    longDesc: "waste residue sold by the road side like metals, aluminum, plastics and other waste residue."
  },
  {
    tag: "Drainage Waste unattended to",
    shortDesc: "Heap of drainage waste on culvert without proper disposal.",
    longDesc: "Heap of drainage waste on culvert without proper disposal."
  },
  {
    tag: "Wrong Placement of Roro Bins",
    shortDesc: "Keeping of Roro bins in unauthorized locations or...",
    longDesc: "Keeping of Roro bins in unauthorized locations or moving them from proscribed point to another."
  },
  {
    tag: "Burning of waste in unauthorized locations",
    shortDesc: "Involves burning of refuse or any material in unauthorized locations...",
    longDesc: "Involves burning of refuse or any material in unauthorized locations like road sides, drainages, open/vacant land, and public spaces."
  },
])
console.log(description.value);
const getShortText = (tag) => {
  const finalVal = description.value.find((report) => {
    if (tag) {
      return tag.toUpperCase() == report.tag.toUpperCase();
    }
  })
  if (finalVal) {
    return finalVal.shortDesc
  } else {
    return "There is presently no description for this"
  }
}
const getLongText = (tag) => {
  const finalVal = description.value.find((report) => {
    return tag.toUpperCase() == report.tag.toUpperCase()
  })
  if (finalVal) {
    return finalVal.longDesc
  } else {
    return "There is presently no description for this"
  }
}
const formatTime = (time) => {
  const dateTime = new Date(time)
  let hours = dateTime.getHours();
  var ampm = "AM";
  if( hours > 12 ) {
    hours -= 12;
    ampm = "PM";
  }
  if (hours == 12) {
    ampm = "PM";
  }
  let minutes = dateTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${hours} ${minutes} ${ampm}`;

}
const statuses = ref([
  {
    name: "Pending",
    id: "pending",
  },
  {
    name: "In Progress",
    id: "progress",
  },
  {
    name: "Resolved",
    id: "resolved"
  }
]);

const displayData = ref({});
const selectedIndex = ref(null);
const checkStatus = (status) => {
  if (status === "pending") {
    return "status__pending";
  } else if (status === "progress") {
    return "status__progress";
  } else {
    return "status__resolved";
  }
};
const setValue = (index) => {
  selectedIndex.value = index;
  displayData.value = filterBody.value[index];
};
const btnClicked = ref(false);
const filterClicked = ref(false);
const showFiltered = (status) => {
  if (status === "Pending") {
    router.push('/reports#pending');
  } else if (status === "In Progress") {
    router.push('/reports#progress');
  } else {
    router.push('/reports#resolved');
  }
}
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
            placeholder="Search"
          />
          <svg-icon class="absolute top-3 mt-px left-2" :data="search" />
          <button
            class="cursor-pointer h-10 flex items-center justify-center rounded-xl px-4 py-3 ml-2 text-xs text-white"
            :class="filterClicked ? 'bg-primary' : 'bg-yellow-1'"
            @click="filterClicked = !filterClicked"
          >
            <span>Filter by Status</span>
            <svg-icon
              class="ml-2"
              :data="arrowDown"
              :class="filterClicked ? 'transform rotate-180' : ''" />
          </button>
          <div v-if="filterClicked" class="absolute right-0 top-10 flex flex-col items-center">
            <p
              v-for="(status, index) in statuses"
              :key="index"
              class="cursor-pointer status border-b py-4 text-primary bg-white flex justify-start pl-4 items-center text-left w-36 leading-none text-base font-medium"
              @click="showFiltered(status.name)"
            >
              {{ status.name }}
            </p>
          </div>
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
            <img class="w-full rounded-full" src="https://source.unsplash.com/random/56x56" alt="" />
          </div>
          <div class="flex flex-col ml-6 w-5/6">
            <div class="flex items-center mb-3">
              <p v-if="report.user" class="font-medium text-black flex-grow text-left text-sm">
                {{ report.user.name }}
              </p>
              <p v-else class="text-white flex-grow">.</p>
              <p
                class="status status__pending flex items-center justify-center text-xs text-white px-2"
                :class="checkStatus(report.status)"
              >
                {{ report.status }}
              </p>
              <p class="time text-sm ml-10 text-grey-3">{{ report.time }}</p>
            </div>
            <h2 class="text-yellow-1 font-medium mb-4 text-left text-lg">
              {{ report.tag }}
            </h2>
            <p class="text-sm text-left text-grey-3">
              {{ getShortText(report.tag) }}
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
          <p class="">{{ new Date(displayData.createdAt).toLocaleDateString('en-us', {month:"short", day:"numeric"})  }}</p>
          <p class="">{{ formatTime(displayData.createdAt) }}</p>
        </div>
        <div class="flex items-center mb-3">
          <div class="pfp w-8 h-8 rounded-full">
            <img class="w-full rounded-full" :src="displayData.img" alt="" />
          </div>
          <p class="font-medium text-black flex-grow ml-4 text-sm">
            {{ displayData.name }}
          </p>
        </div>
        <h4 class="mt-1 text-yellow-1 font-medium">{{ displayData.tag }}</h4>
        <p class="mt-8 text-primary text-opacity-40 text-xs">Location</p>
        <p class="mt-2 text-sm font-medium">{{ displayData.location }}</p>
        <p class="mt-4 text-primary text-opacity-40 text-xs">Nearest Landmark</p>
        <p class="mt-2 text-sm font-medium">{{ displayData.landmark }}</p>
        <p class="mt-4 text-primary text-opacity-40 text-xs">Resolution Status</p>
        <p
          class="mt-2 status text-white flex justify-center items-center px-3 max-w-max leading-none text-sm font-medium"
          :class="checkStatus(displayData.status)"
        >
          {{ displayData.status }}
        </p>
        <p class="mt-4 text-primary text-opacity-40 text-xs">Report Description</p>
        <p class="mt-2 text-base font-medium">{{ getLongText(displayData.tag) }}</p>
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
            :class="checkStatus(status.id)"
            @click="updateStatus(status.id)"
          >
            {{ status.name }}
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

<script>
// import "../../../sprite/svg-icons.svg";
export default {};
</script>
<script setup>
import { ref } from "vue";
import { getAllReports } from "@/services/ReportService";
import { useLoading } from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
// import { useStore } from "vuex";

// const store = useStore();

const shadowButtons = ref([
  {
    name: "Pending",
    class: "red",
    amount: "0",
    to: "/reports#pending",
  },
  {
    name: "In progress",
    amount: "0",
    class: "yellow",
    to: "/reports#progress",
  },
  {
    name: "Resolved",
    class: "green",
    amount: "0",
    to: "/reports#resolved",
  },
]);
const resultLength = ref(0);
const reportData = ref([]);
const pendingData = ref([]);
const progressData = ref([]);
const resolvedData = ref([]);
const getReports = () => {
  let loader = useLoading();
  loader.show({
    color: "#2F3F4C",
    backgroundColor: "#ffffff",
    opacity: 0.5,
    zIndex: 999,
    width: 64,
    height: 64,
  });
  getAllReports()
    .then((res) => {
      const data = res.data;
      console.log(data);
      loader.hide();
      resultLength.value = data.results;
      reportData.value = data.data.singleReport;
      filterData();
      // store.dispatch("report/setReports", data.data.singleReport);
    })
    .catch((err) => {
      console.log(err);
      loader.hide();
      // isLoading.value = false;
    });
};
getReports();

const filterData = () => {
  pendingData.value = reportData.value.filter(
    (report) => report.status === "pending",
  );
  progressData.value = reportData.value.filter(
    (report) => report.status === "progress",
  );
  resolvedData.value = reportData.value.filter(
    (report) => report.status === "resolved",
  );
  console.log(pendingData.value);
  shadowButtons.value[0].amount = pendingData.value.length;
  shadowButtons.value[1].amount = progressData.value.length;
  shadowButtons.value[2].amount = resolvedData.value.length;
};
</script>
<template lang="">
  <div class="home-section">
    <div class="demo flex flex-col justify-start items-start">
      <h2 class="font-medium raleway text-2xl">
        Total Report Counts - Waste Management
      </h2>
      <div class="mt-6 flex flex-wrap">
        <router-link to="/reports">
          <div
            class="waste-card rounded-lg flex items-center justify-start py-4"
          >
            <img src="../../assets/images/mic.png" alt="mic" />
            <div class="line h-full w-px bg-grey-2 mx-12"></div>
            <span class="text-primary text-5xl"> {{ resultLength }} </span>
            <span
              class="text-xs text-primary text-opacity-40 self-start mt-5 ml-2"
              >Reported</span
            >
          </div>
        </router-link>
      </div>
    </div>
    <div class="shadow-section flex flex-col justify-start items-start">
      <h2 class="font-medium raleway text-2xl">Resolution Status</h2>
      <div class="card-container mt-6 flex flex-wrap">
        <div v-for="(item, index) in shadowButtons" :key="index">
          <router-link
            :to="item.to"
            class="status-card rounded-lg flex items-center justify-start cursor-pointer"
          >
            <div
              class="left mr-8 rounded-tl-lg rounded-bl-lg"
              :class="`left--${item.class}`"
            ></div>
            <span class="text-primary font-bold text-2xl">
              {{ item.amount }}
            </span>
            <span
              class="text-xs text-primary text-opacity-40 self-start mt-5 ml-2"
              :class="item.class"
              >{{ item.name }}</span
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.waste-card {
  width: 502px;
  height: 130px;
  padding-left: 48px;
  background-color: white;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
}
.status-card {
  width: 250px;
  height: 80px;
  background-color: white;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
  margin-right: 28px;
  margin-bottom: 28px;
  &:hover {
    box-shadow: 0px 5px 26px rgba(0, 0, 0, 0.1);
  }
  .red {
    color: $red;
  }
  .yellow {
    color: $yellow-1;
  }
  .green {
    color: $green-1;
  }
  .left {
    width: 64px;
    height: 100%;

    &--red {
      background-color: $red;
    }
    &--yellow {
      background-color: $yellow-1;
    }
    &--green {
      background-color: $green-1;
    }
  }
}
</style>

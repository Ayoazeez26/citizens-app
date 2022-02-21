import axios from "axios";
import { router } from "@/router";

const axiosClient = axios.create({
  baseURL: "https://kadcityappapi.azurewebsites.net/api/v1/kadcityapp/admin",
});

axiosClient.interceptors.request.use((config) => {
  const tokenObject = localStorage.getItem("auth-token");
  if (tokenObject) {
    const token = JSON.parse(tokenObject);
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;
    if (status === 401 || status === 403) {
      router.to("/login");
    }
    return Promise.reject(error);
  },
);

export default axiosClient;

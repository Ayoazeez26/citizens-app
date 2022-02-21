import axios from "@/plugins/axios";

export const getAllReports = async () => {
  try {
    const response = await axios.get("/reports");
    if (response) {
      return Promise.resolve(response);
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getSingleReport = async (id) => {
  try {
    const response = await axios.get(`/reports/${id}`);
    if (response) {
      return Promise.resolve(response);
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

export const updateReportStatus = async (id, data) => {
  try {
    const response = await axios.patch(`/reports/${id}`, data);
    if (response) {
      return Promise.resolve(response);
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

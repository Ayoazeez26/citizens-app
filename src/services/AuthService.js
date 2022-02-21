import axios from "@/plugins/axios";

export const login = async (data) => {
  try {
    const response = await axios.post("/login", data);
    if (response) {
      return Promise.resolve(response);
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

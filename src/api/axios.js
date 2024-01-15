import axios from "axios";
import baseURL from "@/api/baseURL";

const apiService = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["x-access-token"] = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error", error);
    if (error.code === "ERR_NETWORK") console.log("error");
    if (error.response && error.response.status === 401) {
      return window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default apiService;

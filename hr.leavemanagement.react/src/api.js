// src/api.js
// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://localhost:7273/api/account", // change to your API base URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default api;



// src/api.js (add interceptor)
import axios from "axios";
import { isTokenValid } from "./utils/tokenHelper";

const api = axios.create({
  baseURL: "https://localhost:7273/api/account",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && isTokenValid(token)) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or unauthorized
      localStorage.removeItem("token");
      window.location.href = "/login"; // Auto-redirect to login
    }
    return Promise.reject(error);
  }
);

export default api;

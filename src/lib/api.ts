import axios from "axios";

// PRODUCTION: Railway backend - DO NOT CHANGE
const api = axios.create({
  baseURL: "https://eduecosystem-backend-production.up.railway.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

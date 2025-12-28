import axios from "axios";

// PRODUCTION: Using Railway backend directly
const RAILWAY_BACKEND = "https://eduecosystem-backend-production.up.railway.app/api/v1";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || RAILWAY_BACKEND,
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

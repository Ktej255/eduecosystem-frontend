import axios from "axios";

// CRITICAL: Hardcoded to AWS App Runner backend 
// Vercel env variable was pointing to old Railway backend
// CACHE BUST: 2024-12-31T00:05:00 - Force rebuild
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";

const api = axios.create({
  baseURL: API_BASE,
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

import axios from "axios";

// API Base URL - ensure /api/v1 suffix is always present
let baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com";
baseUrl = baseUrl.replace(/\/$/, ""); // Remove trailing slash
const API_BASE = baseUrl.endsWith("/api/v1") ? baseUrl : `${baseUrl}/api/v1`;

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

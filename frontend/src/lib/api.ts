import axios from "axios";
import { getCookie, removeCookie } from "./cookies";

// API Base URL - ensure /api/v1 suffix is always present
const baseUrl = (process.env.NEXT_PUBLIC_API_URL || "https://eduecosystem-backend-503001969959.us-central1.run.app").replace(/\/$/, "");
export const API_BASE = baseUrl.endsWith("/api/v1") ? baseUrl : `${baseUrl}/api/v1`;

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // Required for cookies
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  // Use cookies exclusively for authentication tokens
  const token = getCookie("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear auth data on unauthorized
      removeCookie("token");

      // Redirect to login if not already there
      if (typeof window !== "undefined" && !window.location.pathname.includes("/login")) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export const uploadBulkQuestions = async (payload: any) => {
  const response = await api.post("/teacher/lms/questions/bulk", payload);
  return response.data;
};

export { api };
export default api;

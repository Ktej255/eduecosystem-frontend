import axios from "axios";

// API Base URL - ensure /api/v1 suffix is always present
let baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://eduecosystem-backend-503001969959.us-central1.run.app";
baseUrl = baseUrl.replace(/\/$/, ""); // Remove trailing slash
const API_BASE = baseUrl.endsWith("/api/v1") ? baseUrl : `${baseUrl}/api/v1`;

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // Required for cookies
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

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear local storage on unauthorized
      localStorage.removeItem("token");
      localStorage.removeItem("user");

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

export default api;

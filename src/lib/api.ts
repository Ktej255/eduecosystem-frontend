import axios from "axios";

// Uses relative /api path for browser client to utilize Next.js rewrites (fixing TestSprite).
// Falls back to direct internal URL for SSR, or Railway for remote production.
const isBrowser = typeof window !== 'undefined';
const INTERNAL_API_URL = process.env.NEXT_PUBLIC_API_URL || "https://eduecosystem-backend-production.up.railway.app";
const baseURL = isBrowser ? '/api' : `${INTERNAL_API_URL}/api/v1`;

const api = axios.create({
  baseURL,
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

"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  email: string;
  full_name: string | null;
  bio?: string;
  coins: number;
  streak_days: number;
  role: string;
  is_ras_authorized?: boolean;
  is_batch1_authorized?: boolean;
  is_batch2_authorized?: boolean;
  is_premium?: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (
    email: string,
    password: string,
  ) => Promise<{
    access_token: string;
    token_type: string;
    require_2fa?: boolean;
  } | void>;
  register: (
    email: string,
    password: string,
    fullName: string,
    role?: string,
  ) => Promise<{ pending_approval: boolean; message?: string } | void>;
  logout: () => void;
  isAuthenticated: boolean;
  token: string | null;
  branding: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [branding, setBranding] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check for existing token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      // Fetch current user
      fetchCurrentUser();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchBranding = async () => {
      try {
        const response = await fetch('https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1/public/branding');
        const data = await response.json();
        setBranding(data);
      } catch (error) {
        console.error('Error fetching branding:', error);
      }
    };
    fetchBranding();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const response = await api.get("/users/me");
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user:", error);
      localStorage.removeItem("token");
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const normalizedEmail = email.toLowerCase().trim();
    // CRITICAL FIX: Ensure API URL always includes /api/v1 suffix
    let baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://eduecosystem-backend-503001969959.us-central1.run.app";
    // Remove trailing slash if present
    baseUrl = baseUrl.replace(/\/$/, "");
    // Add /api/v1 if not already present
    const AWS_API_URL = baseUrl.endsWith("/api/v1") ? baseUrl : `${baseUrl}/api/v1`;

    // FastAPI OAuth2 expects form data
    const formData = new URLSearchParams();
    formData.append("username", normalizedEmail); // FastAPI uses 'username' field
    formData.append("password", password);

    // Use direct fetch instead of api module to ensure correct URL
    const response = await fetch(`${AWS_API_URL}/login/access-token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || "Invalid email or password");
    }

    const data = await response.json();

    const { access_token, require_2fa } = data;

    // If 2FA is required, return the response data for handling
    if (require_2fa) {
      return data;
    }

    // Standard login flow
    localStorage.setItem("token", access_token);
    setToken(access_token);

    // Fetch user data
    const userData = await fetchCurrentUser();

    if (userData?.is_graphotherapy_exclusive) {
      router.push("/graphotherapy-dashboard");
    } else {
      router.push("/student/dashboard");
    }
  };

  const register = async (
    email: string,
    password: string,
    fullName: string,
    role: string = "student",
  ) => {
    const normalizedEmail = email.toLowerCase().trim();
    const response = await api.post("/login/register", {
      email: normalizedEmail,
      password,
      full_name: fullName,
      role,
    });

    const data = response.data;

    // If pending approval (teacher/admin), return the response without auto-login
    if (data.pending_approval) {
      return {
        pending_approval: true,
        message: data.message,
      };
    }

    // Auto-login after registration for students
    await login(email, password);
    return { pending_approval: false };
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        token,
        branding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}


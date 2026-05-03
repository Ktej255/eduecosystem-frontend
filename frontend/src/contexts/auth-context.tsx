"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import api, { API_BASE } from "@/lib/api";
import { useRouter } from "next/navigation";
import { setCookie, removeCookie, getCookie } from "@/lib/cookies";

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
  is_focused_portal_user?: boolean;
  is_graphotherapy_exclusive?: boolean;
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

  // Check for existing session on mount
  useEffect(() => {
    // We rely on the HttpOnly cookie being sent by the browser.
    // Calling fetchCurrentUser will succeed if the session is valid.
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const fetchBranding = async () => {
      try {
        const response = await api.get("/public/branding");
        setBranding(response.data);
      } catch (error) {
        console.error('Error fetching branding:', error);
      }
    };
    fetchBranding();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const response = await api.get("/users/me");
      // Handle standardized response wrapper { success, data, message }
      const userData = response.data.success ? response.data.data : response.data;
      setUser(userData);
      return userData;
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const normalizedEmail = email.toLowerCase().trim();

    // FastAPI OAuth2 expects form data
    const formData = new URLSearchParams();
    formData.append("username", normalizedEmail);
    formData.append("password", password);

    // Use centralized api instance
    const response = await api.post("/login/access-token", formData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const { data } = response.data; // Response is wrapped in { success, data, message }
    const { access_token, require_2fa } = data;

    if (require_2fa) {
      return data;
    }

    // Backend sets the HttpOnly cookie automatically.
    // We update local state and non-HttpOnly cookie for middleware/API layer.
    setToken(access_token);
    setCookie("token", access_token);

    // Fetch user data
    const userData = await fetchCurrentUser();

    if (userData?.is_focused_portal_user) {
      router.push("/student/focused");
    } else if (userData?.is_graphotherapy_exclusive) {
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
    removeCookie("token");
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


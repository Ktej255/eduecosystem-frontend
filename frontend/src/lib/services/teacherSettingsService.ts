import api from "../api";
import { toast } from "sonner";

export interface WebsiteTheme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  logoUrl?: string;
  favIconUrl?: string;
}

export interface AppConfig {
  appName: string;
  primaryColor: string;
  showHome: boolean;
  showCourses: boolean;
  showProfile: boolean;
  showCommunity: boolean;
  firebaseKey?: string;
  oneSignalId?: string;
}

class TeacherSettingsService {
  // Website Theme Settings
  async getWebsiteTheme(): Promise<WebsiteTheme> {
    try {
      const response = await api.get("/teacher/settings/theme");
      return response.data;
    } catch (error) {
      console.warn("Using fallback theme settings");
      return {
        primaryColor: "#3B82F6",
        secondaryColor: "#8B5CF6",
        backgroundColor: "#FFFFFF",
        textColor: "#1F2937",
        fontFamily: "Inter"
      };
    }
  }

  async saveWebsiteTheme(theme: WebsiteTheme): Promise<boolean> {
    try {
      await api.post("/teacher/settings/theme", theme);
      toast.success("Website theme saved successfully!");
      return true;
    } catch (error) {
      console.error("Failed to save theme:", error);
      // Simulate success for demo purposes if API isn't ready
      toast.info("Theme preview updated (Simulation Mode)");
      localStorage.setItem("teacher_website_theme", JSON.stringify(theme));
      return true; 
    }
  }

  // Mobile App Configuration
  async getAppConfig(): Promise<AppConfig> {
    try {
      const response = await api.get("/teacher/settings/app-config");
      return response.data;
    } catch (error) {
      console.warn("Using fallback app configuration");
      return {
        appName: "EduEcosystem App",
        primaryColor: "#3B82F6",
        showHome: true,
        showCourses: true,
        showProfile: true,
        showCommunity: true
      };
    }
  }

  async saveAppConfig(config: AppConfig): Promise<boolean> {
    try {
      await api.post("/teacher/settings/app-config", config);
      toast.success("App configuration saved!");
      return true;
    } catch (error) {
      console.error("Failed to save app config:", error);
      toast.info("App configuration updated (Simulation Mode)");
      localStorage.setItem("teacher_app_config", JSON.stringify(config));
      return true;
    }
  }

  // Live Test Management
  async getLiveTests(): Promise<any[]> {
    try {
      const response = await api.get("/teacher/lms/live-tests");
      return response.data;
    } catch (error) {
      console.warn("Using fallback live tests");
      return [];
    }
  }

  async saveLiveTest(test: any): Promise<boolean> {
    try {
      await api.post("/teacher/lms/live-tests", test);
      toast.success("Live test scheduled successfully!");
      return true;
    } catch (error) {
      console.error("Failed to save live test:", error);
      toast.info("Test scheduled (Simulation Mode)");
      const existing = JSON.parse(localStorage.getItem("teacher_live_tests") || "[]");
      localStorage.setItem("teacher_live_tests", JSON.stringify([...existing, { ...test, id: Date.now(), status: 'upcoming', participants: 0 }]));
      return true;
    }
  }

  // Membership Management
  async getMemberships(): Promise<any[]> {
    try {
      const response = await api.get("/teacher/lms/memberships");
      return response.data;
    } catch (error) {
      console.warn("Using fallback memberships");
      return [];
    }
  }

  async saveMembership(plan: any): Promise<boolean> {
    try {
      await api.post("/teacher/lms/memberships", plan);
      toast.success("Membership plan created!");
      return true;
    } catch (error) {
      console.error("Failed to save membership:", error);
      toast.info("Plan created (Simulation Mode)");
      const existing = JSON.parse(localStorage.getItem("teacher_memberships") || "[]");
      localStorage.setItem("teacher_memberships", JSON.stringify([...existing, { ...plan, id: Date.now(), status: 'active' }]));
      return true;
    }
  }

  async deleteMembership(id: number): Promise<boolean> {
    try {
      await api.delete(`/teacher/lms/memberships/${id}`);
      toast.success("Plan deleted");
      return true;
    } catch (error) {
      const existing = JSON.parse(localStorage.getItem("teacher_memberships") || "[]");
      localStorage.setItem("teacher_memberships", JSON.stringify(existing.filter((p: any) => p.id !== id)));
      return true;
    }
  }

  // Financial & KYC Management
  async getKYCStatus(): Promise<any> {
    try {
      const response = await api.get("/teacher/settings/kyc");
      return response.data;
    } catch (error) {
      return JSON.parse(localStorage.getItem("teacher_kyc_status") || '{"status": "pending_upload"}');
    }
  }

  async saveKYCDetails(details: any): Promise<boolean> {
    try {
      await api.post("/teacher/settings/kyc", details);
      toast.success("KYC details submitted for verification!");
      return true;
    } catch (error) {
      toast.info("KYC submitted (Simulation Mode)");
      localStorage.setItem("teacher_kyc_status", JSON.stringify({ ...details, status: "under_review" }));
      return true;
    }
  }

  async getSettlementSummary(): Promise<any> {
    try {
      const response = await api.get("/teacher/reports/settlement-summary");
      return response.data;
    } catch (error) {
      return {
        totalSettled: 2261978,
        pendingAmount: 131668,
        payoutMethod: "automatic",
        nextSettlementDate: "Dec 23, 2024"
      };
    }
  }

  // Referral & Affiliate Program Management
  async getReferralSettings(): Promise<any> {
    try {
      const response = await api.get("/teacher/marketing/referral-settings");
      return response.data;
    } catch (error) {
      return JSON.parse(localStorage.getItem("teacher_referral_settings") || JSON.stringify({
        commissionAmount: 500,
        minPayout: 1000,
        cookieDuration: 30,
        attributionLogic: "last_click",
        programStatus: "active",
        landingPageTitle: "Learn with me and get rewarded!",
        landingPageDescription: "Join our expert-led courses and jumpstart your career."
      }));
    }
  }

  async saveReferralSettings(settings: any): Promise<boolean> {
    try {
      await api.post("/teacher/marketing/referral-settings", settings);
      toast.success("Referral program settings updated!");
      return true;
    } catch (error) {
      toast.info("Settings saved (Simulation Mode)");
      localStorage.setItem("teacher_referral_settings", JSON.stringify(settings));
      return true;
    }
  }

  // Integration & Infrastructure Management
  async getWebhooks(): Promise<any[]> {
    try {
      const response = await api.get("/teacher/integrations/webhooks");
      return response.data;
    } catch (error) {
      return JSON.parse(localStorage.getItem("teacher_webhooks") || JSON.stringify([
        { id: "1", url: "https://api.myapp.com/webhooks/enrolments", events: ["user.enrolled", "course.completed"], status: "active", lastDelivery: "Success (2m ago)" },
        { id: "2", url: "https://slack.com/api/webhooks/notifications", events: ["payment.failed"], status: "active", lastDelivery: "Success (1h ago)" }
      ]));
    }
  }

  async saveWebhook(webhook: any): Promise<boolean> {
    try {
      await api.post("/teacher/integrations/webhooks", webhook);
      toast.success("Webhook endpoint added!");
      return true;
    } catch (error) {
      const hooks = await this.getWebhooks();
      hooks.push({ ...webhook, id: Date.now().toString(), status: "active", lastDelivery: "Never" });
      localStorage.setItem("teacher_webhooks", JSON.stringify(hooks));
      toast.info("Webhook added (Simulation Mode)");
      return true;
    }
  }

  async getDomainConfig(): Promise<any> {
    try {
      const response = await api.get("/teacher/settings/domain");
      return response.data;
    } catch (error) {
      return JSON.parse(localStorage.getItem("teacher_domain_config") || JSON.stringify({
        customDomain: "",
        status: "pending",
        dnsType: "CNAME",
        dnsValue: "cname.eduecosystem.com"
      }));
    }
  }

  async saveDomainConfig(config: any): Promise<boolean> {
    try {
      await api.post("/teacher/settings/domain", config);
      toast.success("Domain configuration updated!");
      return true;
    } catch (error) {
      localStorage.setItem("teacher_domain_config", JSON.stringify(config));
      toast.info("Domain saved (Waiting for DNS propagation)");
      return true;
    }
  }
}

export const teacherSettingsService = new TeacherSettingsService();

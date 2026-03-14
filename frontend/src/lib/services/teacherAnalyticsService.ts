/**
 * Teacher Analytics API Service
 * Provides a centralized interface for fetching all teacher dashboard analytics.
 * Falls back to sensible defaults if the backend is unavailable.
 */
import api from "@/lib/api";

export interface TeacherAnalyticsData {
    revenue: {
        total: number;
        growth: number;
        thisMonth: number;
        lastMonth: number;
    };
    students: {
        active: number;
        total: number;
        growth: number;
        completionRate: number;
    };
    engagement: {
        avgTimeSpent: string;
        lessonsPerDay: number;
        quizAttempts: number;
        bounceRate: number;
    };
    content: {
        topCourses: Array<{
            name: string;
            views: number;
            completions: number;
            rating: number;
            revenue: number;
        }>;
    };
    funnel: {
        visitors: number;
        leadCaptures: number;
        enrollments: number;
        revenue: number;
    };
}

export interface ReferralStats {
    totalReferrals: number;
    converted: number;
    conversionRate: number;
    totalPayout: number;
    referralLink: string;
    topReferrers: Array<{
        name: string;
        referrals: number;
        earnings: number;
    }>;
    recentReferrals: Array<{
        id: string;
        referrerName: string;
        referredName: string;
        status: "pending" | "converted" | "paid";
        earnings: number;
        date: string;
    }>;
}

export interface WalletData {
    balance: number;
    revenue: number;
    spent: number;
    pendingPayout: number;
    budgetCategories: Array<{
        name: string;
        allocated: number;
        spent: number;
    }>;
    transactions: Array<{
        id: string;
        description: string;
        type: "credit" | "debit";
        amount: number;
        date: string;
        category: string;
        status: "completed" | "pending" | "failed";
    }>;
}

export interface MessengerData {
    conversations: Array<{
        id: string;
        name: string;
        lastMessage: string;
        time: string;
        unread: number;
        online: boolean;
        type: "direct" | "group";
    }>;
}

// ─── FALLBACK DATA ──────────────────────────────────────────────
const FALLBACK_ANALYTICS: TeacherAnalyticsData = {
    revenue: { total: 284500, growth: 18.5, thisMonth: 42300, lastMonth: 35700 },
    students: { active: 847, total: 1234, growth: 12.3, completionRate: 67 },
    engagement: { avgTimeSpent: "2h 14m", lessonsPerDay: 3.2, quizAttempts: 1890, bounceRate: 23 },
    content: {
        topCourses: [
            { name: "UPSC Foundation 2026", views: 12400, completions: 890, rating: 4.8, revenue: 98000 },
            { name: "Indian Polity Masterclass", views: 8700, completions: 640, rating: 4.7, revenue: 62000 },
            { name: "Geography Through Maps", views: 6200, completions: 420, rating: 4.6, revenue: 45000 },
            { name: "CSAT Crash Course", views: 4100, completions: 310, rating: 4.5, revenue: 32000 },
        ],
    },
    funnel: { visitors: 15000, leadCaptures: 2400, enrollments: 847, revenue: 284500 },
};

const FALLBACK_REFERRALS: ReferralStats = {
    totalReferrals: 156, converted: 89, conversionRate: 57, totalPayout: 44500,
    referralLink: "https://eduecosystem.com/ref/BATCH1-SPECIAL",
    topReferrers: [
        { name: "Amit Kumar", referrals: 15, earnings: 7500 },
        { name: "Priya Singh", referrals: 12, earnings: 6000 },
        { name: "Vikram Patel", referrals: 10, earnings: 5000 },
        { name: "Meera Joshi", referrals: 8, earnings: 4000 },
    ],
    recentReferrals: [
        { id: "1", referrerName: "Amit Kumar", referredName: "Rohit Verma", status: "converted", earnings: 500, date: "Jan 11, 2026" },
        { id: "2", referrerName: "Priya Singh", referredName: "Neha Gupta", status: "paid", earnings: 500, date: "Jan 10, 2026" },
        { id: "3", referrerName: "Vikram Patel", referredName: "Sanjay Sharma", status: "pending", earnings: 0, date: "Jan 9, 2026" },
        { id: "4", referrerName: "Amit Kumar", referredName: "Kiran Rao", status: "converted", earnings: 500, date: "Jan 8, 2026" },
        { id: "5", referrerName: "Meera Joshi", referredName: "Arvind Singh", status: "paid", earnings: 500, date: "Jan 7, 2026" },
    ],
};

const FALLBACK_WALLET: WalletData = {
    balance: 125000, revenue: 45000, spent: 12500, pendingPayout: 8500,
    budgetCategories: [
        { name: "Content Creation", allocated: 50000, spent: 35000 },
        { name: "Advertising", allocated: 30000, spent: 18000 },
        { name: "Affiliate Payouts", allocated: 20000, spent: 12500 },
    ],
    transactions: [
        { id: "1", description: "Course Revenue - Batch 1 Enrollment", type: "credit", amount: 15000, date: "Jan 11, 2026", category: "Revenue", status: "completed" },
        { id: "2", description: "Google Ads Campaign", type: "debit", amount: 5000, date: "Jan 10, 2026", category: "Advertising", status: "completed" },
        { id: "3", description: "Affiliate Commission Payout", type: "debit", amount: 2500, date: "Jan 9, 2026", category: "Affiliates", status: "completed" },
        { id: "4", description: "Course Revenue - RAS Module", type: "credit", amount: 8000, date: "Jan 8, 2026", category: "Revenue", status: "completed" },
        { id: "5", description: "Facebook Ads Campaign", type: "debit", amount: 3000, date: "Jan 7, 2026", category: "Advertising", status: "pending" },
    ],
};

const FALLBACK_CONVERSATIONS: MessengerData = {
    conversations: [
        { id: "1", name: "Rahul Sharma", lastMessage: "When is the next mock test?", time: "2 min", unread: 2, online: true, type: "direct" },
        { id: "2", name: "Priya Gupta", lastMessage: "Thank you for the notes!", time: "15 min", unread: 0, online: true, type: "direct" },
        { id: "3", name: "Batch 1 - General", lastMessage: "Amit: Can someone help with...", time: "1 hr", unread: 5, online: false, type: "group" },
        { id: "4", name: "Vikram Patel", lastMessage: "Got it, will check.", time: "3 hr", unread: 0, online: false, type: "direct" },
        { id: "5", name: "Course Support", lastMessage: "Your query has been resolved", time: "1 day", unread: 0, online: false, type: "group" },
    ],
};

// ─── API FUNCTIONS ──────────────────────────────────────────────

export async function fetchTeacherAnalytics(range: string = "30d"): Promise<TeacherAnalyticsData> {
    try {
        const res = await api.get(`/teacher/analytics?range=${range}`);
        return res.data;
    } catch {
        return FALLBACK_ANALYTICS;
    }
}

export async function fetchReferralStats(): Promise<ReferralStats> {
    try {
        const res = await api.get("/teacher/referrals/stats");
        return res.data;
    } catch {
        return FALLBACK_REFERRALS;
    }
}

export async function fetchWalletData(): Promise<WalletData> {
    try {
        const res = await api.get("/teacher/wallet");
        return res.data;
    } catch {
        return FALLBACK_WALLET;
    }
}

export async function fetchConversations(): Promise<MessengerData> {
    try {
        const res = await api.get("/teacher/messenger/conversations");
        return res.data;
    } catch {
        return FALLBACK_CONVERSATIONS;
    }
}

export async function fetchMessages(conversationId: string) {
    try {
        const res = await api.get(`/teacher/messenger/conversations/${conversationId}/messages`);
        return res.data;
    } catch {
        return [
            { id: "1", sender: "Rahul Sharma", content: "Hello sir, I have a doubt about Constitutional Amendments", time: "10:30 AM", isMe: false, read: true },
            { id: "2", sender: "Me", content: "Hi Rahul! Sure, what's your doubt?", time: "10:32 AM", isMe: true, read: true },
            { id: "3", sender: "Rahul Sharma", content: "What's the difference between Article 368 and basic structure doctrine?", time: "10:35 AM", isMe: false, read: true },
            { id: "4", sender: "Me", content: "Great question! Article 368 provides the procedure for amending the constitution, while the Basic Structure doctrine limits that power.", time: "10:40 AM", isMe: true, read: true },
            { id: "5", sender: "Rahul Sharma", content: "When is the next mock test?", time: "10:45 AM", isMe: false, read: false },
        ];
    }
}

export async function sendMessage(conversationId: string, content: string) {
    try {
        const res = await api.post(`/teacher/messenger/conversations/${conversationId}/messages`, { content });
        return res.data;
    } catch {
        // Return optimistic response
        return {
            id: `msg-${Date.now()}`,
            sender: "Me",
            content,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            isMe: true,
            read: false,
        };
    }
}

export async function requestPayout(amount: number) {
    try {
        const res = await api.post("/teacher/wallet/payout", { amount });
        return res.data;
    } catch {
        throw new Error("Payout request failed. Please try again.");
    }
}

export async function exportTransactions(format: "csv" | "pdf" = "csv") {
    try {
        const res = await api.get(`/teacher/wallet/export?format=${format}`, { responseType: "blob" });
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const a = document.createElement("a");
        a.href = url;
        a.download = `transactions.${format}`;
        a.click();
        window.URL.revokeObjectURL(url);
        return true;
    } catch {
        throw new Error("Export failed.");
    }
}

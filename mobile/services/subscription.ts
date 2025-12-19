import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// Use localhost for Android emulator (10.0.2.2) or standard localhost for iOS/web
const API_URL = 'http://10.0.2.2:8000/api/v1';

// Helper to get token
const getAuthHeader = async () => {
    const token = await SecureStore.getItemAsync('token');
    return { Authorization: `Bearer ${token}` };
};

export interface SubscriptionPlan {
    id: string;
    name: string;
    description: string;
    price: number;
    interval: 'month' | 'year';
    features: string[];
}

export interface UserSubscription {
    id: number;
    plan_id: string;
    status: string;
    current_period_end: string;
    cancel_at_period_end: boolean;
}

export const SubscriptionService = {
    /**
     * Get available subscription plans
     */
    getPlans: async (): Promise<SubscriptionPlan[]> => {
        // Mock plans since backend endpoint might not be public or requires auth
        // In production, fetch from API
        return [
            {
                id: 'price_basic_monthly',
                name: 'Basic Plan',
                description: 'Perfect for starters',
                price: 9.99,
                interval: 'month',
                features: ['Access to basic courses', 'Community support', 'Certificate of completion']
            },
            {
                id: 'price_pro_monthly',
                name: 'Pro Plan',
                description: 'For serious learners',
                price: 19.99,
                interval: 'month',
                features: ['Access to all courses', 'Priority support', 'Downloadable resources', 'Mentorship']
            },
            {
                id: 'price_pro_yearly',
                name: 'Pro Yearly',
                description: 'Best value',
                price: 199.99,
                interval: 'year',
                features: ['Access to all courses', 'Priority support', 'Downloadable resources', 'Mentorship', '2 months free']
            }
        ];
    },

    /**
     * Get current user subscription
     */
    getCurrentSubscription: async (): Promise<UserSubscription | null> => {
        const headers = await getAuthHeader();
        try {
            const response = await axios.get(`${API_URL}/subscriptions/me`, { headers });
            return response.data;
        } catch (error) {
            return null;
        }
    },

    /**
     * Create checkout session for subscription
     */
    createCheckoutSession: async (priceId: string): Promise<{ url: string }> => {
        const headers = await getAuthHeader();
        const response = await axios.post(
            `${API_URL}/subscriptions/create-checkout-session`,
            { price_id: priceId },
            { headers }
        );
        return response.data;
    },

    /**
     * Cancel subscription
     */
    cancelSubscription: async (): Promise<boolean> => {
        const headers = await getAuthHeader();
        const response = await axios.post(
            `${API_URL}/subscriptions/cancel`,
            {},
            { headers }
        );
        return response.data.status === 'cancelled';
    },

    /**
     * Resume subscription
     */
    resumeSubscription: async (): Promise<boolean> => {
        const headers = await getAuthHeader();
        const response = await axios.post(
            `${API_URL}/subscriptions/resume`,
            {},
            { headers }
        );
        return response.data.status === 'active';
    }
};

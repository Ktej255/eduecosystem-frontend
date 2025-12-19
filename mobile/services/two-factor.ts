import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

// Use localhost for Android emulator (10.0.2.2) or standard localhost for iOS/web
const API_URL = 'http://10.0.2.2:8000/api/v1';

// Helper to get token
const getAuthHeader = async () => {
    const token = await SecureStore.getItemAsync('token');
    return { Authorization: `Bearer ${token}` };
};

export interface TwoFactorSetupResponse {
    secret: string;
    provisioning_uri: string;
    backup_codes: string[];
}

export interface TwoFactorStatusResponse {
    is_enabled: boolean;
    is_setup: boolean;
    method: string;
}

export const TwoFactorService = {
    /**
     * Get 2FA status for current user
     */
    getStatus: async (): Promise<TwoFactorStatusResponse> => {
        const headers = await getAuthHeader();
        const response = await axios.get(`${API_URL}/auth/2fa/status`, { headers });
        return response.data;
    },

    /**
     * Initiate 2FA setup
     */
    setup: async (): Promise<TwoFactorSetupResponse> => {
        const headers = await getAuthHeader();
        const response = await axios.post(`${API_URL}/auth/2fa/setup`, {}, { headers });
        return response.data;
    },

    /**
     * Verify 2FA setup with code
     */
    verifySetup: async (code: string): Promise<boolean> => {
        const headers = await getAuthHeader();
        const response = await axios.post(
            `${API_URL}/auth/2fa/verify`,
            { code },
            { headers }
        );
        return response.data.verified;
    },

    /**
     * Verify 2FA during login
     */
    verifyLogin: async (code: string, tempToken: string): Promise<{ access_token: string; token_type: string }> => {
        const response = await axios.post(
            `${API_URL}/auth/2fa/login-verify`,
            { code },
            {
                headers: { Authorization: `Bearer ${tempToken}` }
            }
        );
        return response.data;
    },

    /**
     * Disable 2FA
     */
    disable: async (password: string): Promise<boolean> => {
        const headers = await getAuthHeader();
        const response = await axios.post(
            `${API_URL}/auth/2fa/disable`,
            { password },
            { headers }
        );
        return response.data.disabled;
    },

    /**
     * Get backup codes (requires password)
     */
    getBackupCodes: async (password: string): Promise<string[]> => {
        const headers = await getAuthHeader();
        const response = await axios.post(
            `${API_URL}/auth/2fa/backup-codes`,
            { password },
            { headers }
        );
        return response.data.backup_codes;
    },

    /**
     * Regenerate backup codes
     */
    regenerateBackupCodes: async (): Promise<string[]> => {
        const headers = await getAuthHeader();
        const response = await axios.post(
            `${API_URL}/auth/2fa/regenerate-codes`,
            {},
            { headers }
        );
        return response.data.backup_codes;
    }
};

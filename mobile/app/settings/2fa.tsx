import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shield, ChevronRight, Lock, Key, Copy, CheckCircle, AlertTriangle } from 'lucide-react-native';
import * as Clipboard from 'expo-clipboard';
import { TwoFactorService, TwoFactorStatusResponse } from '../../services/two-factor';

export default function TwoFactorSettings() {
    const router = useRouter();
    const [status, setStatus] = useState<TwoFactorStatusResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [disabling, setDisabling] = useState(false);

    useEffect(() => {
        fetchStatus();
    }, []);

    const fetchStatus = async () => {
        try {
            const data = await TwoFactorService.getStatus();
            setStatus(data);
        } catch (error) {
            console.error('Failed to fetch 2FA status:', error);
            Alert.alert('Error', 'Failed to load 2FA status');
        } finally {
            setLoading(false);
        }
    };

    const handleDisable = () => {
        Alert.prompt(
            'Disable 2FA',
            'Enter your password to disable Two-Factor Authentication',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Disable',
                    style: 'destructive',
                    onPress: async (password) => {
                        if (!password) return;
                        setDisabling(true);
                        try {
                            await TwoFactorService.disable(password);
                            setStatus({ ...status!, is_enabled: false });
                            Alert.alert('Success', 'Two-Factor Authentication has been disabled');
                        } catch (error) {
                            Alert.alert('Error', 'Failed to disable 2FA. Check your password.');
                        } finally {
                            setDisabling(false);
                        }
                    },
                },
            ],
            'secure-text'
        );
    };

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-50 dark:bg-gray-900">
                <ActivityIndicator size="large" color="#3b82f6" />
            </View>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
            <ScrollView className="flex-1 p-4">
                <View className="mb-6">
                    <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Two-Factor Authentication
                    </Text>
                    <Text className="text-gray-500 dark:text-gray-400">
                        Add an extra layer of security to your account by requiring a code when logging in.
                    </Text>
                </View>

                {/* Status Card */}
                <View className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-sm">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-row items-center">
                            <View className={`p-3 rounded-full ${status?.is_enabled ? 'bg-green-100' : 'bg-gray-100'}`}>
                                <Shield size={24} color={status?.is_enabled ? '#16a34a' : '#6b7280'} />
                            </View>
                            <View className="ml-4">
                                <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {status?.is_enabled ? 'Enabled' : 'Disabled'}
                                </Text>
                                <Text className="text-sm text-gray-500 dark:text-gray-400">
                                    {status?.is_enabled ? 'Your account is secure' : 'Enable to protect your account'}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {status?.is_enabled ? (
                        <TouchableOpacity
                            onPress={handleDisable}
                            disabled={disabling}
                            className="bg-red-50 dark:bg-red-900/20 py-3 px-4 rounded-lg border border-red-100 dark:border-red-900/50"
                        >
                            <Text className="text-center text-red-600 dark:text-red-400 font-medium">
                                {disabling ? 'Disabling...' : 'Disable 2FA'}
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={() => router.push('/settings/2fa-setup')}
                            className="bg-blue-600 py-3 px-4 rounded-lg"
                        >
                            <Text className="text-center text-white font-medium">
                                Setup 2FA
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>

                {status?.is_enabled && (
                    <>
                        <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Recovery Methods
                        </Text>

                        <TouchableOpacity
                            onPress={() => router.push('/settings/backup-codes')}
                            className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm flex-row items-center justify-between"
                        >
                            <View className="flex-row items-center">
                                <View className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <Key size={20} color="#3b82f6" />
                                </View>
                                <View className="ml-3">
                                    <Text className="font-medium text-gray-900 dark:text-white">Backup Codes</Text>
                                    <Text className="text-sm text-gray-500 dark:text-gray-400">
                                        View or regenerate recovery codes
                                    </Text>
                                </View>
                            </View>
                            <ChevronRight size={20} color="#9ca3af" />
                        </TouchableOpacity>
                    </>
                )}

                <View className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl mt-4">
                    <View className="flex-row items-start">
                        <AlertTriangle size={20} color="#3b82f6" className="mt-1" />
                        <View className="ml-3 flex-1">
                            <Text className="font-medium text-blue-800 dark:text-blue-300 mb-1">
                                Why use 2FA?
                            </Text>
                            <Text className="text-sm text-blue-600 dark:text-blue-400 leading-5">
                                Two-factor authentication adds an extra layer of security to your account. In addition to your password, you'll need to provide a code from your authenticator app to log in.
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

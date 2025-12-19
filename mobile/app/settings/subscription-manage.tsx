import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreditCard, Calendar, AlertCircle, ArrowLeft } from 'lucide-react-native';
import { SubscriptionService, UserSubscription } from '../../services/subscription';

export default function ManageSubscription() {
    const router = useRouter();
    const [subscription, setSubscription] = useState<UserSubscription | null>(null);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        fetchSubscription();
    }, []);

    const fetchSubscription = async () => {
        try {
            const data = await SubscriptionService.getCurrentSubscription();
            setSubscription(data);
        } catch (error) {
            console.error('Failed to fetch subscription:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        Alert.alert(
            'Cancel Subscription',
            'Are you sure you want to cancel? You will lose access to premium features at the end of your current billing period.',
            [
                { text: 'Keep Subscription', style: 'cancel' },
                {
                    text: 'Cancel Subscription',
                    style: 'destructive',
                    onPress: async () => {
                        setProcessing(true);
                        try {
                            await SubscriptionService.cancelSubscription();
                            fetchSubscription(); // Refresh
                            Alert.alert('Success', 'Subscription cancelled successfully');
                        } catch (error) {
                            Alert.alert('Error', 'Failed to cancel subscription');
                        } finally {
                            setProcessing(false);
                        }
                    },
                },
            ]
        );
    };

    const handleResume = async () => {
        setProcessing(true);
        try {
            await SubscriptionService.resumeSubscription();
            fetchSubscription(); // Refresh
            Alert.alert('Success', 'Subscription resumed successfully');
        } catch (error) {
            Alert.alert('Error', 'Failed to resume subscription');
        } finally {
            setProcessing(false);
        }
    };

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-50 dark:bg-gray-900">
                <ActivityIndicator size="large" color="#3b82f6" />
            </View>
        );
    }

    if (!subscription) {
        return (
            <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
                <View className="flex-row items-center p-4">
                    <TouchableOpacity onPress={() => router.back()} className="mr-4">
                        <ArrowLeft size={24} color="#374151" />
                    </TouchableOpacity>
                    <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                        Manage Subscription
                    </Text>
                </View>
                <View className="flex-1 justify-center items-center p-6">
                    <Text className="text-gray-500 text-center mb-4">No active subscription found.</Text>
                    <TouchableOpacity
                        onPress={() => router.push('/settings/plans')}
                        className="bg-blue-600 py-3 px-6 rounded-lg"
                    >
                        <Text className="text-white font-bold">View Plans</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
            <View className="flex-row items-center p-4 border-b border-gray-200 dark:border-gray-800">
                <TouchableOpacity onPress={() => router.back()} className="mr-4">
                    <ArrowLeft size={24} color="#374151" />
                </TouchableOpacity>
                <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                    Manage Subscription
                </Text>
            </View>

            <ScrollView className="flex-1 p-6">
                <View className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-6">
                    <View className="flex-row items-center mb-4">
                        <View className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full mr-4">
                            <CreditCard size={24} color="#3b82f6" />
                        </View>
                        <View>
                            <Text className="text-lg font-bold text-gray-900 dark:text-white">
                                {subscription.plan_id.includes('pro') ? 'Pro Plan' : 'Basic Plan'}
                            </Text>
                            <Text className={`text-sm font-medium ${subscription.status === 'active' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                {subscription.status.toUpperCase()}
                            </Text>
                        </View>
                    </View>

                    <View className="border-t border-gray-100 dark:border-gray-700 pt-4 space-y-3">
                        <View className="flex-row justify-between">
                            <Text className="text-gray-500 dark:text-gray-400">Billing Period</Text>
                            <Text className="text-gray-900 dark:text-white font-medium">
                                {subscription.plan_id.includes('year') ? 'Yearly' : 'Monthly'}
                            </Text>
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="text-gray-500 dark:text-gray-400">Next Billing Date</Text>
                            <Text className="text-gray-900 dark:text-white font-medium">
                                {new Date(subscription.current_period_end).toLocaleDateString()}
                            </Text>
                        </View>
                    </View>
                </View>

                {subscription.cancel_at_period_end ? (
                    <View className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl mb-6">
                        <View className="flex-row items-start">
                            <AlertCircle size={20} color="#eab308" className="mt-1 mr-3" />
                            <View className="flex-1">
                                <Text className="font-bold text-yellow-800 dark:text-yellow-500 mb-1">
                                    Cancellation Scheduled
                                </Text>
                                <Text className="text-sm text-yellow-700 dark:text-yellow-400 mb-4">
                                    Your subscription will end on {new Date(subscription.current_period_end).toLocaleDateString()}. You can resume it before then to keep your access.
                                </Text>
                                <TouchableOpacity
                                    onPress={handleResume}
                                    disabled={processing}
                                    className="bg-yellow-600 py-2 px-4 rounded-lg self-start"
                                >
                                    {processing ? (
                                        <ActivityIndicator color="white" size="small" />
                                    ) : (
                                        <Text className="text-white font-medium">Resume Subscription</Text>
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ) : (
                    <TouchableOpacity
                        onPress={handleCancel}
                        disabled={processing}
                        className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-900/50 items-center"
                    >
                        {processing ? (
                            <ActivityIndicator color="#dc2626" />
                        ) : (
                            <Text className="text-red-600 dark:text-red-400 font-medium">
                                Cancel Subscription
                            </Text>
                        )}
                    </TouchableOpacity>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

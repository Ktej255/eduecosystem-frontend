import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreditCard, Check, Star, ArrowLeft } from 'lucide-react-native';
import { SubscriptionService, SubscriptionPlan, UserSubscription } from '../../services/subscription';

export default function SubscriptionPlans() {
    const router = useRouter();
    const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
    const [currentSub, setCurrentSub] = useState<UserSubscription | null>(null);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [plansData, subData] = await Promise.all([
                SubscriptionService.getPlans(),
                SubscriptionService.getCurrentSubscription()
            ]);
            setPlans(plansData);
            setCurrentSub(subData);
        } catch (error) {
            console.error('Failed to fetch subscription data:', error);
            Alert.alert('Error', 'Failed to load subscription plans');
        } finally {
            setLoading(false);
        }
    };

    const handleSubscribe = async (plan: SubscriptionPlan) => {
        setProcessing(plan.id);
        try {
            const { url } = await SubscriptionService.createCheckoutSession(plan.id);
            // Open Stripe Checkout in browser
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert('Error', 'Cannot open payment page');
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to start checkout');
        } finally {
            setProcessing(null);
        }
    };

    const handleManage = () => {
        router.push('/settings/subscription-manage');
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
            <View className="flex-row items-center p-4 border-b border-gray-200 dark:border-gray-800">
                <TouchableOpacity onPress={() => router.back()} className="mr-4">
                    <ArrowLeft size={24} color="#374151" />
                </TouchableOpacity>
                <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                    Subscription Plans
                </Text>
            </View>

            <ScrollView className="flex-1 p-4">
                <View className="mb-6">
                    <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                        Upgrade Your Learning
                    </Text>
                    <Text className="text-gray-500 dark:text-gray-400 text-center">
                        Unlock premium features and unlimited access to all courses.
                    </Text>
                </View>

                {currentSub && currentSub.status === 'active' && (
                    <View className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl mb-6 border border-green-100 dark:border-green-900/50">
                        <Text className="font-bold text-green-800 dark:text-green-400 mb-2">
                            Active Subscription
                        </Text>
                        <Text className="text-green-700 dark:text-green-300 mb-4">
                            You are currently subscribed to a plan.
                        </Text>
                        <TouchableOpacity
                            onPress={handleManage}
                            className="bg-green-600 py-2 px-4 rounded-lg self-start"
                        >
                            <Text className="text-white font-medium">Manage Subscription</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <View className="space-y-6 pb-8">
                    {plans.map((plan) => (
                        <View
                            key={plan.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
                        >
                            {plan.name.includes('Pro') && (
                                <View className="absolute top-0 right-0 bg-blue-600 px-3 py-1 rounded-bl-xl rounded-tr-xl">
                                    <Text className="text-white text-xs font-bold">POPULAR</Text>
                                </View>
                            )}

                            <Text className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {plan.name}
                            </Text>
                            <Text className="text-gray-500 dark:text-gray-400 mb-4">
                                {plan.description}
                            </Text>

                            <View className="flex-row items-baseline mb-6">
                                <Text className="text-3xl font-bold text-gray-900 dark:text-white">
                                    ${plan.price}
                                </Text>
                                <Text className="text-gray-500 dark:text-gray-400 ml-1">
                                    /{plan.interval}
                                </Text>
                            </View>

                            <View className="space-y-3 mb-6">
                                {plan.features.map((feature, index) => (
                                    <View key={index} className="flex-row items-center">
                                        <Check size={18} color="#16a34a" className="mr-2" />
                                        <Text className="text-gray-700 dark:text-gray-300">
                                            {feature}
                                        </Text>
                                    </View>
                                ))}
                            </View>

                            <TouchableOpacity
                                onPress={() => handleSubscribe(plan)}
                                disabled={processing === plan.id || (currentSub?.status === 'active')}
                                className={`py-4 rounded-xl flex-row justify-center items-center ${currentSub?.status === 'active'
                                        ? 'bg-gray-200 dark:bg-gray-700'
                                        : 'bg-blue-600'
                                    }`}
                            >
                                {processing === plan.id ? (
                                    <ActivityIndicator color="white" />
                                ) : (
                                    <Text className={`font-bold text-lg ${currentSub?.status === 'active' ? 'text-gray-500' : 'text-white'
                                        }`}>
                                        {currentSub?.status === 'active' ? 'Current Plan' : 'Subscribe Now'}
                                    </Text>
                                )}
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Copy, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react-native';
import * as Clipboard from 'expo-clipboard';
import { TwoFactorService, TwoFactorSetupResponse } from '../../services/two-factor';

export default function TwoFactorSetup() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [setupData, setSetupData] = useState<TwoFactorSetupResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [verifying, setVerifying] = useState(false);
    const [code, setCode] = useState('');

    useEffect(() => {
        initSetup();
    }, []);

    const initSetup = async () => {
        try {
            const data = await TwoFactorService.setup();
            setSetupData(data);
        } catch (error) {
            console.error('Failed to init 2FA setup:', error);
            Alert.alert('Error', 'Failed to initialize 2FA setup');
            router.back();
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = async () => {
        if (setupData?.secret) {
            await Clipboard.setStringAsync(setupData.secret);
            Alert.alert('Copied', 'Secret key copied to clipboard');
        }
    };

    const handleVerify = async () => {
        if (code.length !== 6) {
            Alert.alert('Invalid Code', 'Please enter a 6-digit code');
            return;
        }

        setVerifying(true);
        try {
            const verified = await TwoFactorService.verifySetup(code);
            if (verified) {
                setStep(3); // Success step
            } else {
                Alert.alert('Verification Failed', 'Invalid code. Please try again.');
            }
        } catch (error) {
            Alert.alert('Error', 'Verification failed. Please try again.');
        } finally {
            setVerifying(false);
        }
    };

    const handleFinish = () => {
        router.replace('/settings/2fa');
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
                    Setup 2FA
                </Text>
            </View>

            <ScrollView className="flex-1 p-6">
                {/* Step Indicator */}
                <View className="flex-row justify-center mb-8">
                    <View className={`h-2 w-16 rounded-full mx-1 ${step >= 1 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                    <View className={`h-2 w-16 rounded-full mx-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                    <View className={`h-2 w-16 rounded-full mx-1 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                </View>

                {step === 1 && (
                    <View>
                        <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                            Link Authenticator App
                        </Text>
                        <Text className="text-gray-500 dark:text-gray-400 mb-6 text-center">
                            Open your authenticator app (like Google Authenticator) and enter the key below.
                        </Text>

                        <View className="bg-white dark:bg-gray-800 p-6 rounded-xl items-center mb-6 shadow-sm">
                            <Text className="text-sm text-gray-500 mb-2">Secret Key</Text>
                            <Text className="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-4 tracking-widest text-center">
                                {setupData?.secret}
                            </Text>
                            <TouchableOpacity
                                onPress={copyToClipboard}
                                className="flex-row items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg"
                            >
                                <Copy size={16} color="#4b5563" />
                                <Text className="ml-2 text-gray-700 dark:text-gray-300 font-medium">Copy Key</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            onPress={() => setStep(2)}
                            className="bg-blue-600 py-4 rounded-xl flex-row justify-center items-center"
                        >
                            <Text className="text-white font-bold text-lg mr-2">Next Step</Text>
                            <ArrowRight size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                )}

                {step === 2 && (
                    <View>
                        <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                            Verify Setup
                        </Text>
                        <Text className="text-gray-500 dark:text-gray-400 mb-6 text-center">
                            Enter the 6-digit code from your authenticator app to verify the setup.
                        </Text>

                        <View className="mb-8">
                            <TextInput
                                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center text-3xl font-mono tracking-[8px]"
                                placeholder="000000"
                                keyboardType="number-pad"
                                maxLength={6}
                                value={code}
                                onChangeText={setCode}
                                autoFocus
                            />
                        </View>

                        <TouchableOpacity
                            onPress={handleVerify}
                            disabled={verifying || code.length !== 6}
                            className={`py-4 rounded-xl flex-row justify-center items-center ${code.length === 6 ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'
                                }`}
                        >
                            {verifying ? (
                                <ActivityIndicator color="white" />
                            ) : (
                                <Text className="text-white font-bold text-lg">Verify Code</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                )}

                {step === 3 && (
                    <View className="items-center py-8">
                        <View className="bg-green-100 p-6 rounded-full mb-6">
                            <CheckCircle size={48} color="#16a34a" />
                        </View>
                        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                            2FA Enabled!
                        </Text>
                        <Text className="text-gray-500 dark:text-gray-400 mb-8 text-center">
                            Your account is now secured with two-factor authentication.
                        </Text>

                        <TouchableOpacity
                            onPress={handleFinish}
                            className="bg-blue-600 w-full py-4 rounded-xl"
                        >
                            <Text className="text-white font-bold text-lg text-center">Done</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

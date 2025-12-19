import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Copy, ArrowLeft, RefreshCw, AlertTriangle } from 'lucide-react-native';
import * as Clipboard from 'expo-clipboard';
import { TwoFactorService } from '../../services/two-factor';

export default function BackupCodes() {
    const router = useRouter();
    const [codes, setCodes] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [verifying, setVerifying] = useState(false);

    const handleAuth = async () => {
        if (!password) return;
        setVerifying(true);
        try {
            const backupCodes = await TwoFactorService.getBackupCodes(password);
            setCodes(backupCodes);
            setAuthenticated(true);
        } catch (error) {
            Alert.alert('Error', 'Incorrect password');
        } finally {
            setVerifying(false);
        }
    };

    const handleRegenerate = () => {
        Alert.alert(
            'Regenerate Codes',
            'This will invalidate your current backup codes. Are you sure?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Regenerate',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            const newCodes = await TwoFactorService.regenerateBackupCodes();
                            setCodes(newCodes);
                            Alert.alert('Success', 'New backup codes generated');
                        } catch (error) {
                            Alert.alert('Error', 'Failed to regenerate codes');
                        }
                    },
                },
            ]
        );
    };

    const copyAll = async () => {
        await Clipboard.setStringAsync(codes.join('\n'));
        Alert.alert('Copied', 'All codes copied to clipboard');
    };

    if (!authenticated) {
        return (
            <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900 p-6">
                <View className="flex-row items-center mb-8">
                    <TouchableOpacity onPress={() => router.back()} className="mr-4">
                        <ArrowLeft size={24} color="#374151" />
                    </TouchableOpacity>
                    <Text className="text-xl font-bold text-gray-900 dark:text-white">
                        View Backup Codes
                    </Text>
                </View>

                <View className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <Text className="text-gray-900 dark:text-white font-semibold mb-2">
                        Enter Password
                    </Text>
                    <Text className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
                        Please enter your password to view your backup codes.
                    </Text>

                    <TextInput
                        className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 mb-4"
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity
                        onPress={handleAuth}
                        disabled={verifying || !password}
                        className="bg-blue-600 py-3 rounded-lg"
                    >
                        {verifying ? (
                            <ActivityIndicator color="white" />
                        ) : (
                            <Text className="text-white text-center font-bold">View Codes</Text>
                        )}
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
                    Backup Codes
                </Text>
            </View>

            <ScrollView className="flex-1 p-6">
                <View className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl mb-6 flex-row">
                    <AlertTriangle size={24} color="#eab308" className="mr-3" />
                    <View className="flex-1">
                        <Text className="font-bold text-yellow-800 dark:text-yellow-500 mb-1">
                            Save these codes!
                        </Text>
                        <Text className="text-sm text-yellow-700 dark:text-yellow-400">
                            If you lose access to your authenticator app, these codes are the only way to access your account. Each code can only be used once.
                        </Text>
                    </View>
                </View>

                <View className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-6">
                    <View className="flex-row flex-wrap justify-between">
                        {codes.map((code, index) => (
                            <View key={index} className="w-[48%] mb-4 p-2 bg-gray-50 dark:bg-gray-700 rounded border border-gray-100 dark:border-gray-600">
                                <Text className="text-center font-mono font-medium text-gray-800 dark:text-gray-200 tracking-wider">
                                    {code}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View className="flex-row gap-4">
                    <TouchableOpacity
                        onPress={copyAll}
                        className="flex-1 bg-gray-200 dark:bg-gray-700 py-3 rounded-xl flex-row justify-center items-center"
                    >
                        <Copy size={20} color="#374151" className="mr-2" />
                        <Text className="font-semibold text-gray-700 dark:text-gray-200">Copy All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleRegenerate}
                        className="flex-1 bg-gray-200 dark:bg-gray-700 py-3 rounded-xl flex-row justify-center items-center"
                    >
                        <RefreshCw size={20} color="#374151" className="mr-2" />
                        <Text className="font-semibold text-gray-700 dark:text-gray-200">Regenerate</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

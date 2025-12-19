import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { styled } from 'nativewind';
import { TwoFactorService } from '../../services/two-factor';
import { useAuth } from '../../context/auth';
import api from '../../utils/api';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function VerifyTwoFactor() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const { temp_token } = params;
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();

    const handleVerify = async () => {
        if (code.length !== 6) {
            Alert.alert('Error', 'Please enter a 6-digit code');
            return;
        }

        try {
            setLoading(true);

            // Verify code using temp token
            const response = await TwoFactorService.verifyLogin(code, temp_token as string);
            const { access_token } = response;

            // Get user details with full token
            const userResponse = await api.get('/users/me', {
                headers: { Authorization: `Bearer ${access_token}` }
            });

            // Complete sign in
            await signIn(access_token, userResponse.data);

            // Router will auto-redirect to tabs via AuthContext
        } catch (error: any) {
            console.error(error);
            Alert.alert('Verification Failed', 'Invalid code or expired session');
        } finally {
            setLoading(false);
        }
    };

    return (
        <StyledView className="flex-1 bg-gray-900 justify-center p-6">
            <StyledView className="mb-10">
                <StyledText className="text-3xl font-bold text-white mb-2">Two-Factor Auth</StyledText>
                <StyledText className="text-gray-400">Enter the code from your authenticator app</StyledText>
            </StyledView>

            <StyledView className="space-y-6">
                <StyledTextInput
                    className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700 text-center text-3xl font-mono tracking-[8px]"
                    placeholder="000000"
                    placeholderTextColor="#6b7280"
                    value={code}
                    onChangeText={setCode}
                    keyboardType="number-pad"
                    maxLength={6}
                    autoFocus
                />

                <StyledTouchableOpacity
                    className="bg-blue-600 p-4 rounded-lg items-center"
                    onPress={handleVerify}
                    disabled={loading || code.length !== 6}
                >
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <StyledText className="text-white font-bold text-lg">Verify</StyledText>
                    )}
                </StyledTouchableOpacity>

                <StyledTouchableOpacity
                    onPress={() => router.back()}
                    className="items-center"
                >
                    <StyledText className="text-gray-400">Back to Login</StyledText>
                </StyledTouchableOpacity>
            </StyledView>
        </StyledView>
    );
}

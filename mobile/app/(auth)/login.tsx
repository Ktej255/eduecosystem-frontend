import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useAuth } from '../../context/auth';
import api from '../../utils/api';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

import { useTranslation } from 'react-i18next';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();
    const router = useRouter();
    const { t } = useTranslation();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('username', email);
            formData.append('password', password);

            const response = await api.post('/login/access-token', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // Check for 2FA requirement
            if (response.data.require_2fa) {
                // Redirect to 2FA verification with temp token
                router.push({
                    pathname: '/(auth)/verify-2fa',
                    params: { temp_token: response.data.access_token }
                });
                return;
            }

            const { access_token } = response.data;

            // Get user details
            const userResponse = await api.get('/users/me', {
                headers: { Authorization: `Bearer ${access_token}` }
            });

            await signIn(access_token, userResponse.data);
        } catch (error: any) {
            console.error(error);
            Alert.alert('Login Failed', error.response?.data?.detail || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <StyledView className="flex-1 bg-gray-900 justify-center p-6">
            <StyledView className="mb-10">
                <StyledText className="text-3xl font-bold text-white mb-2">{t('common.welcome')}</StyledText>
                <StyledText className="text-gray-400">Sign in to continue learning</StyledText>
            </StyledView>

            <StyledView className="space-y-4">
                <StyledView>
                    <StyledText className="text-gray-300 mb-1 ml-1">Email</StyledText>
                    <StyledTextInput
                        className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700"
                        placeholder="Enter your email"
                        placeholderTextColor="#6b7280"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                </StyledView>

                <StyledView>
                    <StyledText className="text-gray-300 mb-1 ml-1">Password</StyledText>
                    <StyledTextInput
                        className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700"
                        placeholder="Enter your password"
                        placeholderTextColor="#6b7280"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </StyledView>

                <StyledTouchableOpacity
                    className="bg-blue-600 p-4 rounded-lg items-center mt-4"
                    onPress={handleLogin}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <StyledText className="text-white font-bold text-lg">{t('common.login')}</StyledText>
                    )}
                </StyledTouchableOpacity>

                <StyledView className="flex-row justify-center mt-4">
                    <StyledText className="text-gray-400">Don't have an account? </StyledText>
                    <Link href="/register" asChild>
                        <StyledTouchableOpacity>
                            <StyledText className="text-blue-400 font-bold">{t('common.register')}</StyledText>
                        </StyledTouchableOpacity>
                    </Link>
                </StyledView>
            </StyledView>
        </StyledView>
    );
}

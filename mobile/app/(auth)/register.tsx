import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import api from '../../utils/api';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async () => {
        if (!fullName || !email || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        try {
            setLoading(true);
            await api.post('/users/open', {
                email,
                password,
                full_name: fullName,
            });

            Alert.alert('Success', 'Account created successfully. Please login.', [
                { text: 'OK', onPress: () => router.replace('/login') }
            ]);
        } catch (error: any) {
            console.error(error);
            Alert.alert('Registration Failed', error.response?.data?.detail || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <StyledScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} className="bg-gray-900 p-6">
            <StyledView className="mb-10">
                <StyledText className="text-3xl font-bold text-white mb-2">Create Account</StyledText>
                <StyledText className="text-gray-400">Join the Eduecosystem today</StyledText>
            </StyledView>

            <StyledView className="space-y-4">
                <StyledView>
                    <StyledText className="text-gray-300 mb-1 ml-1">Full Name</StyledText>
                    <StyledTextInput
                        className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700"
                        placeholder="Enter your full name"
                        placeholderTextColor="#6b7280"
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </StyledView>

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
                        placeholder="Create a password"
                        placeholderTextColor="#6b7280"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </StyledView>

                <StyledView>
                    <StyledText className="text-gray-300 mb-1 ml-1">Confirm Password</StyledText>
                    <StyledTextInput
                        className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700"
                        placeholder="Confirm your password"
                        placeholderTextColor="#6b7280"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                </StyledView>

                <StyledTouchableOpacity
                    className="bg-blue-600 p-4 rounded-lg items-center mt-4"
                    onPress={handleRegister}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <StyledText className="text-white font-bold text-lg">Sign Up</StyledText>
                    )}
                </StyledTouchableOpacity>

                <StyledView className="flex-row justify-center mt-4 pb-10">
                    <StyledText className="text-gray-400">Already have an account? </StyledText>
                    <Link href="/login" asChild>
                        <StyledTouchableOpacity>
                            <StyledText className="text-blue-400 font-bold">Sign In</StyledText>
                        </StyledTouchableOpacity>
                    </Link>
                </StyledView>
            </StyledView>
        </StyledScrollView>
    );
}

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '../context/auth';
import '../utils/i18n';

export default function RootLayout() {
    return (
        <AuthProvider>
            <SafeAreaProvider>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack>
                <StatusBar style="auto" />
            </SafeAreaProvider>
        </AuthProvider>
    );
}

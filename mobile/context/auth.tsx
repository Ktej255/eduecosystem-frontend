import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useRouter, useSegments } from 'expo-router';

type User = {
    id: number;
    email: string;
    full_name: string;
};

type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    signIn: (token: string, user: User) => Promise<void>;
    signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: true,
    signIn: async () => { },
    signOut: async () => { },
});

export function useAuth() {
    return useContext(AuthContext);
}

function useProtectedRoute(user: User | null) {
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        const inAuthGroup = segments[0] === '(auth)';

        if (
            // If the user is not signed in and the initial segment is not anything in the auth group.
            !user &&
            !inAuthGroup
        ) {
            // Redirect to the sign-in page.
            router.replace('/(auth)/login');
        } else if (user && inAuthGroup) {
            // Redirect away from the sign-in page.
            router.replace('/(tabs)');
        }
    }, [user, segments]);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check for stored token and user data
        const loadUser = async () => {
            try {
                const token = await SecureStore.getItemAsync('token');
                const userData = await SecureStore.getItemAsync('user');

                if (token && userData) {
                    setUser(JSON.parse(userData));
                }
            } catch (e) {
                console.error('Failed to load user', e);
            } finally {
                setIsLoading(false);
            }
        };

        loadUser();
    }, []);

    useProtectedRoute(user);

    const signIn = async (token: string, userData: User) => {
        await SecureStore.setItemAsync('token', token);
        await SecureStore.setItemAsync('user', JSON.stringify(userData));
        setUser(userData);
    };

    const signOut = async () => {
        await SecureStore.deleteItemAsync('token');
        await SecureStore.deleteItemAsync('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

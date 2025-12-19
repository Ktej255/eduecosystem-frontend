import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LiveClassVideoPlayer } from '../../components/live-class/LiveClassVideoPlayer';
import axios from 'axios';

// Mock API client - replace with your actual API client
const API_URL = 'http://localhost:8000/api/v1';

export default function LiveClassScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [tokenData, setTokenData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchToken();
    }, [id]);

    const fetchToken = async () => {
        try {
            // In a real app, use your authenticated API client
            // const response = await api.get(`/live-classes/${id}/agora-token`);

            // Mock response for now since we can't easily auth in this snippet
            console.log(`Fetching token for class ${id}`);

            // Simulate API call
            setTimeout(() => {
                setTokenData({
                    token: "mock-token",
                    channelName: `class-1-${id}`,
                    appId: "mock-app-id",
                    uid: Math.floor(Math.random() * 10000)
                });
                setLoading(false);
            }, 1000);

        } catch (err) {
            console.error(err);
            setError("Failed to join live class");
            setLoading(false);
            Alert.alert("Error", "Could not join live class session");
        }
    };

    const handleLeave = () => {
        router.back();
    };

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={styles.text}>Connecting to classroom...</Text>
            </View>
        );
    }

    if (error || !tokenData) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>{error || "Failed to load"}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <LiveClassVideoPlayer
                channelName={tokenData.channelName}
                token={tokenData.token}
                appId={tokenData.appId}
                uid={tokenData.uid}
                onLeave={handleLeave}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
    },
    text: {
        color: '#fff',
        marginTop: 10,
    },
    errorText: {
        color: '#ff4444',
        fontSize: 16,
    },
});

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { MessageCircle } from 'lucide-react-native';
import { discussionsAPI } from '../../../utils/api';
import { DiscussionThreadCard } from '../../../components/DiscussionThreadCard';

export default function DiscussionListScreen() {
    const router = useRouter();
    const { courseId } = useLocalSearchParams<{ courseId: string }>();
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [threads, setThreads] = useState<any[]>([]);

    const fetchThreads = async () => {
        try {
            const res = await discussionsAPI.getThreads(parseInt(courseId));
            setThreads(res.data);
        } catch (error) {
            console.error('Failed to fetch threads', error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchThreads();
    }, [courseId]);

    const onRefresh = () => {
        setRefreshing(true);
        fetchThreads();
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));

        if (hours < 24) return `${hours}h ago`;
        const days = Math.floor(hours / 24);
        if (days < 7) return `${days}d ago`;
        return date.toLocaleDateString();
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#3B82F6" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Discussions',
                    headerStyle: { backgroundColor: '#111827' },
                    headerTintColor: '#fff',
                }}
            />

            <FlatList
                data={threads}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <DiscussionThreadCard
                        title={item.title}
                        content={item.content}
                        authorName={item.author?.full_name || 'Unknown'}
                        createdAt={formatDate(item.created_at)}
                        replyCount={item.post_count || 0}
                        upvotes={item.upvotes || 0}
                        isPinned={item.is_pinned || false}
                        isLocked={item.is_locked || false}
                        isResolved={item.is_resolved || false}
                        onPress={() => router.push(`/course/${courseId}/discussions/${item.id}`)}
                    />
                )}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <MessageCircle size={48} color="#6B7280" />
                        <Text style={styles.emptyText}>No discussions yet</Text>
                    </View>
                }
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#3B82F6" />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    listContent: {
        padding: 16,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
    },
    emptyText: {
        color: '#6B7280',
        fontSize: 16,
        marginTop: 12,
    },
});

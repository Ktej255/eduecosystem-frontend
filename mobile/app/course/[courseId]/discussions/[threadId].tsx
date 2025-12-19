import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Send } from 'lucide-react-native';
import { discussionsAPI } from '../../../../utils/api';
import { DiscussionPostCard } from '../../../../components/DiscussionPostCard';

export default function ThreadDetailScreen() {
    const { courseId, threadId } = useLocalSearchParams<{ courseId: string; threadId: string }>();
    const [loading, setLoading] = useState(true);
    const [thread, setThread] = useState<any>(null);
    const [posts, setPosts] = useState<any[]>([]);
    const [replyText, setReplyText] = useState('');
    const [sending, setSending] = useState(false);

    const fetchThread = async () => {
        try {
            const [threadRes, postsRes] = await Promise.all([
                discussionsAPI.getThread(parseInt(threadId)),
                discussionsAPI.getPosts(parseInt(threadId))
            ]);
            setThread(threadRes.data);
            setPosts(postsRes.data);
        } catch (error) {
            console.error('Failed to fetch thread', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchThread();
    }, [threadId]);

    const handleSendReply = async () => {
        if (!replyText.trim()) return;

        setSending(true);
        try {
            await discussionsAPI.createPost(parseInt(threadId), replyText);
            setReplyText('');
            fetchThread(); // Refresh posts
        } catch (error) {
            console.error('Failed to send reply', error);
        } finally {
            setSending(false);
        }
    };

    const handleVote = async (postId: number, voteType: 'upvote' | 'downvote') => {
        try {
            await discussionsAPI.votePost(postId, voteType);
            fetchThread(); // Refresh to show updated votes
        } catch (error) {
            console.error('Failed to vote', error);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));

        if (hours < 1) return 'just now';
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
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}
        >
            <Stack.Screen
                options={{
                    title: thread?.title || 'Discussion',
                    headerStyle: { backgroundColor: '#111827' },
                    headerTintColor: '#fff',
                }}
            />

            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <DiscussionPostCard
                        content={item.content}
                        authorName={item.author?.full_name || 'Unknown'}
                        createdAt={formatDate(item.created_at)}
                        upvotes={item.upvotes || 0}
                        downvotes={item.downvotes || 0}
                        isAnswer={item.is_answer || false}
                        hasUpvoted={item.user_has_upvoted || false}
                        hasDownvoted={item.user_has_downvoted || false}
                        onUpvote={() => handleVote(item.id, 'upvote')}
                        onDownvote={() => handleVote(item.id, 'downvote')}
                    />
                )}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No replies yet. Be the first!</Text>
                    </View>
                }
            />

            <View style={styles.replyContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Write a reply..."
                    placeholderTextColor="#6B7280"
                    value={replyText}
                    onChangeText={setReplyText}
                    multiline
                    maxLength={500}
                />
                <TouchableOpacity
                    style={[styles.sendButton, (!replyText.trim() || sending) && styles.sendButtonDisabled]}
                    onPress={handleSendReply}
                    disabled={!replyText.trim() || sending}
                >
                    {sending ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                    ) : (
                        <Send size={20} color="#FFFFFF" />
                    )}
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
        paddingBottom: 16,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
    },
    emptyText: {
        color: '#6B7280',
        fontSize: 14,
    },
    replyContainer: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#111827',
        borderTopWidth: 1,
        borderTopColor: '#374151',
        gap: 12,
    },
    input: {
        flex: 1,
        backgroundColor: '#1F2937',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        color: '#FFFFFF',
        maxHeight: 100,
    },
    sendButton: {
        backgroundColor: '#3B82F6',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendButtonDisabled: {
        opacity: 0.5,
    },
});

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MessageCircle, ThumbsUp, Lock, Pin } from 'lucide-react-native';

interface DiscussionThreadCardProps {
    title: string;
    content: string;
    authorName: string;
    createdAt: string;
    replyCount: number;
    upvotes: number;
    isPinned: boolean;
    isLocked: boolean;
    isResolved: boolean;
    onPress: () => void;
}

export const DiscussionThreadCard = ({
    title,
    content,
    authorName,
    createdAt,
    replyCount,
    upvotes,
    isPinned,
    isLocked,
    isResolved,
    onPress,
}: DiscussionThreadCardProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.header}>
                <View style={styles.titleRow}>
                    {isPinned && <Pin size={16} color="#EAB308" />}
                    {isLocked && <Lock size={16} color="#EF4444" />}
                    <Text style={styles.title} numberOfLines={2}>{title}</Text>
                </View>
                {isResolved && (
                    <View style={styles.resolvedBadge}>
                        <Text style={styles.resolvedText}>✓ Solved</Text>
                    </View>
                )}
            </View>

            <Text style={styles.content} numberOfLines={2}>{content}</Text>

            <View style={styles.footer}>
                <Text style={styles.author}>{authorName}</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.timestamp}>{createdAt}</Text>
            </View>

            <View style={styles.stats}>
                <View style={styles.statItem}>
                    <MessageCircle size={16} color="#9CA3AF" />
                    <Text style={styles.statText}>{replyCount}</Text>
                </View>
                <View style={styles.statItem}>
                    <ThumbsUp size={16} color="#9CA3AF" />
                    <Text style={styles.statText}>{upvotes}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F2937',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#374151',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flex: 1,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    resolvedBadge: {
        backgroundColor: '#065F46',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    resolvedText: {
        color: '#10B981',
        fontSize: 12,
        fontWeight: 'bold',
    },
    content: {
        color: '#9CA3AF',
        fontSize: 14,
        marginBottom: 12,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    author: {
        color: '#60A5FA',
        fontSize: 12,
        fontWeight: '600',
    },
    dot: {
        color: '#6B7280',
        marginHorizontal: 6,
    },
    timestamp: {
        color: '#6B7280',
        fontSize: 12,
    },
    stats: {
        flexDirection: 'row',
        gap: 16,
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    statText: {
        color: '#9CA3AF',
        fontSize: 12,
        fontWeight: '600',
    },
});

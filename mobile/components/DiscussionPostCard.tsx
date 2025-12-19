import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react-native';

interface DiscussionPostCardProps {
    content: string;
    authorName: string;
    createdAt: string;
    upvotes: number;
    downvotes: number;
    isAnswer: boolean;
    hasUpvoted: boolean;
    hasDownvoted: boolean;
    onUpvote: () => void;
    onDownvote: () => void;
}

export const DiscussionPostCard = ({
    content,
    authorName,
    createdAt,
    upvotes,
    downvotes,
    isAnswer,
    hasUpvoted,
    hasDownvoted,
    onUpvote,
    onDownvote,
}: DiscussionPostCardProps) => {
    return (
        <View style={[styles.container, isAnswer && styles.answerContainer]}>
            {isAnswer && (
                <View style={styles.answerBadge}>
                    <CheckCircle size={16} color="#10B981" />
                    <Text style={styles.answerText}>Accepted Answer</Text>
                </View>
            )}

            <Text style={styles.content}>{content}</Text>

            <View style={styles.footer}>
                <View style={styles.authorInfo}>
                    <Text style={styles.author}>{authorName}</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.timestamp}>{createdAt}</Text>
                </View>

                <View style={styles.voteContainer}>
                    <TouchableOpacity
                        style={[styles.voteButton, hasUpvoted && styles.upvoted]}
                        onPress={onUpvote}
                    >
                        <ThumbsUp size={16} color={hasUpvoted ? '#3B82F6' : '#9CA3AF'} />
                        <Text style={[styles.voteText, hasUpvoted && styles.upvotedText]}>
                            {upvotes}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.voteButton, hasDownvoted && styles.downvoted]}
                        onPress={onDownvote}
                    >
                        <ThumbsDown size={16} color={hasDownvoted ? '#EF4444' : '#9CA3AF'} />
                        <Text style={[styles.voteText, hasDownvoted && styles.downvotedText]}>
                            {downvotes}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111827',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#374151',
    },
    answerContainer: {
        backgroundColor: 'rgba(16, 185, 129, 0.05)',
        borderLeftWidth: 3,
        borderLeftColor: '#10B981',
    },
    answerBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 8,
    },
    answerText: {
        color: '#10B981',
        fontSize: 12,
        fontWeight: 'bold',
    },
    content: {
        color: '#FFFFFF',
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    authorInfo: {
        flexDirection: 'row',
        alignItems: 'center',
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
    voteContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    voteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        backgroundColor: '#1F2937',
    },
    upvoted: {
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
    },
    downvoted: {
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
    },
    voteText: {
        color: '#9CA3AF',
        fontSize: 12,
        fontWeight: '600',
    },
    upvotedText: {
        color: '#3B82F6',
    },
    downvotedText: {
        color: '#EF4444',
    },
});

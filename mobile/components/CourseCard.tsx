import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface CourseCardProps {
    id: number;
    title: string;
    description: string;
    thumbnailUrl?: string;
    instructorName: string;
    price: number;
    rating?: number;
    enrolledCount?: number;
}

export function CourseCard({
    id,
    title,
    description,
    thumbnailUrl,
    instructorName,
    price,
    rating,
    enrolledCount,
}: CourseCardProps) {
    const router = useRouter();

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/course/${id}`)}
            activeOpacity={0.7}
        >
            <Image
                source={{ uri: thumbnailUrl || 'https://via.placeholder.com/300x150' }}
                style={styles.thumbnail}
                resizeMode="cover"
            />

            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={2}>
                    {title}
                </Text>

                <Text style={styles.description} numberOfLines={2}>
                    {description}
                </Text>

                <Text style={styles.instructor}>By {instructorName}</Text>

                <View style={styles.footer}>
                    <View style={styles.stats}>
                        {rating && (
                            <View style={styles.statItem}>
                                <Ionicons name="star" size={14} color="#F59E0B" />
                                <Text style={styles.statText}>{rating.toFixed(1)}</Text>
                            </View>
                        )}

                        {enrolledCount && (
                            <View style={styles.statItem}>
                                <Ionicons name="people" size={14} color="#6B7280" />
                                <Text style={styles.statText}>{enrolledCount}</Text>
                            </View>
                        )}
                    </View>

                    <Text style={styles.price}>
                        {price === 0 ? 'Free' : `$${price}`}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    thumbnail: {
        width: '100%',
        height: 150,
        backgroundColor: '#E5E7EB',
    },
    content: {
        padding: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 8,
    },
    instructor: {
        fontSize: 12,
        color: '#9CA3AF',
        marginBottom: 12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    stats: {
        flexDirection: 'row',
        gap: 12,
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    statText: {
        fontSize: 12,
        color: '#6B7280',
    },
    price: {
        fontSize: 18,
        fontWeight: '700',
        color: '#4F46E5',
    },
});

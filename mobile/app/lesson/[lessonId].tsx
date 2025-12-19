import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { coursesAPI, lessonsAPI } from '../../utils/api';
import { VideoPlayer } from '../../components/VideoPlayer';
import { Ionicons } from '@expo/vector-icons';

export default function LessonScreen() {
    const { lessonId } = useLocalSearchParams();
    const router = useRouter();
    const [lesson, setLesson] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadLesson();
    }, [lessonId]);

    const loadLesson = async () => {
        try {
            setLoading(true);
            const response = await lessonsAPI.getById(Number(lessonId));
            setLesson(response.data);
        } catch (error) {
            Alert.alert('Error', 'Failed to load lesson');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleVideoComplete = async () => {
        try {
            await lessonsAPI.markComplete(Number(lessonId));
            Alert.alert('Success', 'Lesson marked as complete!');
        } catch (error) {
            console.error('Failed to mark lesson complete:', error);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#4F46E5" />
            </View>
        );
    }

    if (!lesson) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Lesson not found</Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <VideoPlayer
                videoUri={lesson.videoUrl}
                onComplete={handleVideoComplete}
            />

            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
                        <Ionicons name="arrow-back" size={24} color="#111827" />
                    </TouchableOpacity>

                    <Text style={styles.title}>{lesson.title}</Text>
                </View>

                {lesson.description && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Description</Text>
                        <Text style={styles.description}>{lesson.description}</Text>
                    </View>
                )}

                {lesson.content && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Lesson Content</Text>
                        <Text style={styles.contentText}>{lesson.content}</Text>
                    </View>
                )}

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Duration</Text>
                    <Text style={styles.description}>
                        {lesson.duration || 'Not specified'}
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.completeButton}
                    onPress={handleVideoComplete}
                >
                    <Ionicons name="checkmark-circle" size={20} color="white" />
                    <Text style={styles.completeButtonText}>Mark as Complete</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        fontSize: 16,
        color: '#6B7280',
        marginBottom: 20,
    },
    backButton: {
        fontSize: 16,
        color: '#4F46E5',
        fontWeight: '600',
    },
    content: {
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    backIcon: {
        marginRight: 12,
    },
    title: {
        flex: 1,
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
    },
    contentText: {
        fontSize: 14,
        color: '#374151',
        lineHeight: 22,
    },
    completeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4F46E5',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
        gap: 8,
    },
    completeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

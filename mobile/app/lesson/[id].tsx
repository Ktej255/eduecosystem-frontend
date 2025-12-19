import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions,
    Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { styled } from 'nativewind';
import { Video, ResizeMode } from 'expo-av';
import { Play, Pause, SkipBack, SkipForward, CheckCircle } from 'lucide-react-native';
import { lessonsAPI, progressAPI } from '../../utils/api';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);

const { width } = Dimensions.get('window');
const videoHeight = (width * 9) / 16; // 16:9 aspect ratio

type Lesson = {
    id: number;
    title: string;
    description?: string;
    video_url?: string;
    duration_minutes?: number;
    order_index: number;
    module_id: number;
    is_completed?: boolean;
};

export default function LessonPlayer() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const videoRef = useRef<Video>(null);

    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [loading, setLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoStatus, setVideoStatus] = useState<any>(null);

    useEffect(() => {
        fetchLesson();
    }, [id]);

    const fetchLesson = async () => {
        try {
            const response = await lessonsAPI.getById(Number(id));
            setLesson(response.data);
        } catch (error) {
            console.error('Error fetching lesson:', error);
            Alert.alert('Error', 'Failed to load lesson');
        } finally {
            setLoading(false);
        }
    };

    const handlePlayPause = async () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            await videoRef.current.pauseAsync();
        } else {
            await videoRef.current.playAsync();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSkipBackward = async () => {
        if (!videoRef.current || !videoStatus) return;
        const newPosition = Math.max(0, videoStatus.positionMillis - 10000);
        await videoRef.current.setPositionAsync(newPosition);
    };

    const handleSkipForward = async () => {
        if (!videoRef.current || !videoStatus) return;
        const newPosition = Math.min(
            videoStatus.durationMillis,
            videoStatus.positionMillis + 10000
        );
        await videoRef.current.setPositionAsync(newPosition);
    };

    const handleMarkComplete = async () => {
        if (!lesson) return;

        try {
            await lessonsAPI.markComplete(lesson.id);
            setLesson({ ...lesson, is_completed: true });
            Alert.alert('Success', 'Lesson marked as complete!');
        } catch (error) {
            console.error('Error marking complete:', error);
            Alert.alert('Error', 'Failed to mark lesson as complete');
        }
    };

    const formatTime = (millis: number) => {
        const totalSeconds = Math.floor(millis / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    if (loading) {
        return (
            <StyledView className="flex-1 bg-gray-900 items-center justify-center">
                <ActivityIndicator size="large" color="#3B82F6" />
            </StyledView>
        );
    }

    if (!lesson) {
        return (
            <StyledView className="flex-1 bg-gray-900 items-center justify-center px-6">
                <StyledText className="text-gray-400 text-lg">Lesson not found</StyledText>
            </StyledView>
        );
    }

    return (
        <StyledView className="flex-1 bg-gray-900">
            <StyledScrollView showsVerticalScrollIndicator={false}>
                {/* Video Player */}
                {lesson.video_url ? (
                    <StyledView>
                        <Video
                            ref={videoRef}
                            source={{ uri: lesson.video_url }}
                            style={{ width, height: videoHeight }}
                            resizeMode={ResizeMode.CONTAIN}
                            shouldPlay={false}
                            onPlaybackStatusUpdate={(status) => {
                                setVideoStatus(status);
                                if (status.isLoaded) {
                                    setIsPlaying(status.isPlaying);
                                }
                            }}
                        />

                        {/* Video Controls */}
                        <StyledView className="bg-gray-800 px-4 py-3">
                            {/* Progress Bar */}
                            {videoStatus?.isLoaded && (
                                <StyledView className="mb-3">
                                    <StyledView className="h-1 bg-gray-700 rounded-full overflow-hidden">
                                        <StyledView
                                            className="h-full bg-blue-500"
                                            style={{
                                                width: `${(videoStatus.positionMillis /
                                                        videoStatus.durationMillis) *
                                                    100
                                                    }%`,
                                            }}
                                        />
                                    </StyledView>
                                    <StyledView className="flex-row justify-between mt-1">
                                        <StyledText className="text-gray-400 text-xs">
                                            {formatTime(videoStatus.positionMillis)}
                                        </StyledText>
                                        <StyledText className="text-gray-400 text-xs">
                                            {formatTime(videoStatus.durationMillis)}
                                        </StyledText>
                                    </StyledView>
                                </StyledView>
                            )}

                            {/* Control Buttons */}
                            <StyledView className="flex-row justify-center items-center gap-6">
                                <StyledTouchableOpacity
                                    onPress={handleSkipBackward}
                                    className="p-2"
                                >
                                    <SkipBack size={24} color="#FFFFFF" />
                                </StyledTouchableOpacity>

                                <StyledTouchableOpacity
                                    onPress={handlePlayPause}
                                    className="bg-blue-500 rounded-full p-4"
                                >
                                    {isPlaying ? (
                                        <Pause size={32} color="#FFFFFF" fill="#FFFFFF" />
                                    ) : (
                                        <Play size={32} color="#FFFFFF" fill="#FFFFFF" />
                                    )}
                                </StyledTouchableOpacity>

                                <StyledTouchableOpacity
                                    onPress={handleSkipForward}
                                    className="p-2"
                                >
                                    <SkipForward size={24} color="#FFFFFF" />
                                </StyledTouchableOpacity>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                ) : (
                    <StyledView
                        className="bg-gray-800 items-center justify-center"
                        style={{ height: videoHeight }}
                    >
                        <StyledText className="text-gray-400">No video available</StyledText>
                    </StyledView>
                )}

                {/* Lesson Info */}
                <StyledView className="p-4">
                    {/* Title */}
                    <StyledText className="text-white text-xl font-bold mb-2">
                        {lesson.title}
                    </StyledText>

                    {/* Duration & Status */}
                    <StyledView className="flex-row items-center gap-4 mb-4">
                        {lesson.duration_minutes && (
                            <StyledText className="text-gray-400 text-sm">
                                {lesson.duration_minutes} min
                            </StyledText>
                        )}
                        {lesson.is_completed && (
                            <StyledView className="flex-row items-center gap-1">
                                <CheckCircle size={16} color="#10B981" />
                                <StyledText className="text-green-500 text-sm">
                                    Completed
                                </StyledText>
                            </StyledView>
                        )}
                    </StyledView>

                    {/* Description */}
                    {lesson.description && (
                        <StyledView className="mb-4">
                            <StyledText className="text-white font-semibold mb-2">
                                About this lesson
                            </StyledText>
                            <StyledText className="text-gray-300 leading-6">
                                {lesson.description}
                            </StyledText>
                        </StyledView>
                    )}

                    {/* Mark Complete Button */}
                    {!lesson.is_completed && (
                        <StyledTouchableOpacity
                            className="bg-green-600 py-3 rounded-lg items-center mt-4"
                            onPress={handleMarkComplete}
                        >
                            <StyledText className="text-white font-bold">
                                Mark as Complete
                            </StyledText>
                        </StyledTouchableOpacity>
                    )}
                </StyledView>
            </StyledScrollView>
        </StyledView>
    );
}

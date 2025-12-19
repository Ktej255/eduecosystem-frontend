import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    RefreshControl,
} from 'react-native';
import { styled } from 'nativewind';
import { Link } from 'expo-router';
import { BookOpen, Clock, CheckCircle } from 'lucide-react-native';
import { coursesAPI, progressAPI } from '../../utils/api';
import { CourseCard } from '../../components/CourseCard';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

type EnrolledCourse = {
    id: number;
    title: string;
    description: string;
    thumbnail_url?: string;
    instructor_name?: string;
    price: number;
    progress?: number;
    total_lessons?: number;
    completed_lessons?: number;
};

export default function MyCourses() {
    const [courses, setCourses] = useState<EnrolledCourse[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchMyCourses();
    }, []);

    const fetchMyCourses = async () => {
        try {
            setError(null);
            const response = await coursesAPI.getMyCourses();
            setCourses(response.data);
        } catch (err: any) {
            setError(err.response?.data?.detail || 'Failed to load your courses');
            console.error('Error fetching my courses:', err);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchMyCourses();
    };

    const renderCourseItem = ({ item }: { item: EnrolledCourse }) => (
        <Link href={`/course/${item.id}`} asChild>
            <StyledTouchableOpacity className="mb-4">
                <StyledView className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                    <CourseCard
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        thumbnailUrl={item.thumbnail_url}
                        instructorName={item.instructor_name || 'Eduecosystem'}
                        price={item.price}
                        enrolledCount={0}
                    />

                    {/* Progress Bar */}
                    {item.progress !== undefined && (
                        <StyledView className="px-4 pb-4">
                            <StyledView className="flex-row justify-between items-center mb-2">
                                <StyledText className="text-gray-400 text-xs">
                                    Progress
                                </StyledText>
                                <StyledText className="text-blue-400 text-xs font-semibold">
                                    {Math.round(item.progress)}%
                                </StyledText>
                            </StyledView>
                            <StyledView className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <StyledView
                                    className="h-full bg-blue-500"
                                    style={{ width: `${item.progress}%` }}
                                />
                            </StyledView>
                            {item.completed_lessons !== undefined && item.total_lessons && (
                                <StyledText className="text-gray-500 text-xs mt-1">
                                    {item.completed_lessons} of {item.total_lessons} lessons completed
                                </StyledText>
                            )}
                        </StyledView>
                    )}
                </StyledView>
            </StyledTouchableOpacity>
        </Link>
    );

    const renderEmptyState = () => (
        <StyledView className="flex-1 items-center justify-center py-12">
            <BookOpen size={64} color="#4B5563" />
            <StyledText className="text-gray-400 text-lg mb-2 mt-4">
                No enrolled courses yet
            </StyledText>
            <StyledText className="text-gray-500 text-sm text-center px-8 mb-6">
                Browse courses and start learning today!
            </StyledText>
            <Link href="/courses" asChild>
                <StyledTouchableOpacity className="bg-blue-500 px-6 py-3 rounded-lg">
                    <StyledText className="text-white font-semibold">
                        Browse Courses
                    </StyledText>
                </StyledTouchableOpacity>
            </Link>
        </StyledView>
    );

    if (loading) {
        return (
            <StyledView className="flex-1 bg-gray-900 items-center justify-center">
                <ActivityIndicator size="large" color="#3B82F6" />
                <StyledText className="text-gray-400 mt-4">Loading your courses...</StyledText>
            </StyledView>
        );
    }

    if (error) {
        return (
            <StyledView className="flex-1 bg-gray-900 items-center justify-center px-6">
                <StyledText className="text-red-400 text-lg mb-4">
                    {error}
                </StyledText>
                <StyledTouchableOpacity
                    className="bg-blue-500 px-6 py-3 rounded-lg"
                    onPress={fetchMyCourses}
                >
                    <StyledText className="text-white font-semibold">Retry</StyledText>
                </StyledTouchableOpacity>
            </StyledView>
        );
    }

    return (
        <StyledView className="flex-1 bg-gray-900 pt-12 px-4">
            {/* Header */}
            <StyledView className="mb-6">
                <StyledText className="text-white text-2xl font-bold mb-2">
                    My Learning
                </StyledText>
                <StyledText className="text-gray-400">
                    {courses.length} course{courses.length !== 1 ? 's' : ''} in progress
                </StyledText>
            </StyledView>

            <FlatList
                data={courses}
                renderItem={renderCourseItem}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={renderEmptyState}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor="#3B82F6"
                    />
                }
            />
        </StyledView>
    );
}

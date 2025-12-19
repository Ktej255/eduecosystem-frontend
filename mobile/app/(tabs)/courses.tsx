import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    TextInput,
    TouchableOpacity,
    RefreshControl,
} from 'react-native';
import { styled } from 'nativewind';
import { Link } from 'expo-router';
import { Search, X } from 'lucide-react-native';
import { coursesAPI } from '../../utils/api';
import { CourseCard } from '../../components/CourseCard';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

type Course = {
    id: number;
    title: string;
    description: string;
    thumbnail_url?: string;
    instructor_name?: string;
    price?: number;
    level?: string;
    category_id?: number;
    rating?: number;
};

const CATEGORIES = [
    { id: 'all', name: 'All' },
    { id: '1', name: 'Technology' },
    { id: '2', name: 'Business' },
    { id: '3', name: 'Design' },
    { id: '4', name: 'Marketing' },
];

export default function Courses() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        fetchCourses();
    }, []);

    useEffect(() => {
        filterCourses();
    }, [courses, searchQuery, selectedCategory]);

    const fetchCourses = async () => {
        try {
            setError(null);
            const response = await coursesAPI.getAll();
            setCourses(response.data);
        } catch (err: any) {
            setError(err.response?.data?.detail || 'Failed to load courses');
            console.error('Error fetching courses:', err);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    const filterCourses = () => {
        let filtered = [...courses];

        // Filter by search query
        if (searchQuery.trim()) {
            filtered = filtered.filter((course) =>
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(
                (course) => course.category_id?.toString() === selectedCategory
            );
        }

        setFilteredCourses(filtered);
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchCourses();
    };

    const clearSearch = () => {
        setSearchQuery('');
    };

    const renderCategoryChip = ({ item }: { item: typeof CATEGORIES[0] }) => (
        <StyledTouchableOpacity
            className={`px-4 py-2 rounded-full mr-2 ${selectedCategory === item.id
                    ? 'bg-blue-500'
                    : 'bg-gray-800 border border-gray-700'
                }`}
            onPress={() => setSelectedCategory(item.id)}
        >
            <StyledText
                className={`text-sm font-medium ${selectedCategory === item.id ? 'text-white' : 'text-gray-300'
                    }`}
            >
                {item.name}
            </StyledText>
        </StyledTouchableOpacity>
    );

    const renderCourseItem = ({ item }: { item: Course }) => (
        <Link href={`/course/${item.id}`} asChild>
            <StyledTouchableOpacity className="mb-4">
                <CourseCard
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    thumbnailUrl={item.thumbnail_url}
                    instructorName={item.instructor_name || 'Eduecosystem'}
                    price={item.price || 0}
                    rating={item.rating}
                    enrolledCount={0}
                />
            </StyledTouchableOpacity>
        </Link>
    );

    const renderEmptyState = () => (
        <StyledView className="flex-1 items-center justify-center py-12">
            <StyledText className="text-gray-400 text-lg mb-2">
                No courses found
            </StyledText>
            <StyledText className="text-gray-500 text-sm text-center px-8">
                {searchQuery
                    ? 'Try adjusting your search or filters'
                    : 'Check back later for new courses'}
            </StyledText>
        </StyledView>
    );

    const renderHeader = () => (
        <StyledView>
            {/* Title */}
            <StyledText className="text-white text-2xl font-bold mb-4">
                Browse Courses
            </StyledText>

            {/* Search Bar */}
            <StyledView className="mb-4 bg-gray-800 rounded-lg flex-row items-center px-3 py-2 border border-gray-700">
                <Search size={20} color="#9CA3AF" />
                <StyledTextInput
                    className="flex-1 ml-2 text-white text-base"
                    placeholder="Search courses..."
                    placeholderTextColor="#6B7280"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                {searchQuery ? (
                    <StyledTouchableOpacity onPress={clearSearch}>
                        <X size={20} color="#9CA3AF" />
                    </StyledTouchableOpacity>
                ) : null}
            </StyledView>

            {/* Category Filters */}
            <FlatList
                data={CATEGORIES}
                renderItem={renderCategoryChip}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mb-4"
            />

            {/* Results Count */}
            <StyledText className="text-gray-400 text-sm mb-4">
                {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
            </StyledText>
        </StyledView>
    );

    if (loading) {
        return (
            <StyledView className="flex-1 bg-gray-900 items-center justify-center">
                <ActivityIndicator size="large" color="#3B82F6" />
                <StyledText className="text-gray-400 mt-4">Loading courses...</StyledText>
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
                    onPress={fetchCourses}
                >
                    <StyledText className="text-white font-semibold">Retry</StyledText>
                </StyledTouchableOpacity>
            </StyledView>
        );
    }

    return (
        <StyledView className="flex-1 bg-gray-900 pt-12 px-4">
            <FlatList
                data={filteredCourses}
                renderItem={renderCourseItem}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={renderHeader}
                ListEmptyComponent={renderEmptyState}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
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

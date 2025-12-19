import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { styled } from 'nativewind';
import { Clock, Users, Award, Star, BookOpen } from 'lucide-react-native';
import { coursesAPI } from '../../utils/api';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

type CourseDetails = {
  id: number;
  title: string;
  description: string;
  thumbnail_url?: string;
  instructor_name?: string;
  instructor_id?: number;
  price: number;
  level?: string;
  duration_hours?: number;
  rating?: number;
  enrolled_count?: number;
  modules?: Module[];
  is_enrolled?: boolean;
};

type Module = {
  id: number;
  title: string;
  order_index: number;
  lessons_count?: number;
};

export default function CourseDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [course, setCourse] = useState<CourseDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    fetchCourseDetails();
  }, [id]);

  const fetchCourseDetails = async () => {
    try {
      const response = await coursesAPI.getById(Number(id));
      setCourse(response.data);
    } catch (error: any) {
      console.error('Error fetching course:', error);
      Alert.alert('Error', 'Failed to load course details');
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async () => {
    if (!course) return;

    setEnrolling(true);
    try {
      await coursesAPI.enroll(course.id);
      Alert.alert('Success', 'Successfully enrolled in course!', [
        {
          text: 'OK',
          onPress: () => {
            setCourse({ ...course, is_enrolled: true });
          },
        },
      ]);
    } catch (error: any) {
      Alert.alert(
        'Enrollment Failed',
        error.response?.data?.detail || 'Unable to enroll in this course'
      );
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <StyledView className="flex-1 bg-gray-900 items-center justify-center">
        <ActivityIndicator size="large" color="#3B82F6" />
      </StyledView>
    );
  }

  if (!course) {
    return (
      <StyledView className="flex-1 bg-gray-900 items-center justify-center px-6">
        <StyledText className="text-gray-400 text-lg">Course not found</StyledText>
      </StyledView>
    );
  }

  return (
    <StyledView className="flex-1 bg-gray-900">
      <StyledScrollView showsVerticalScrollIndicator={false}>
        {/* Course Thumbnail */}
        <StyledView className="h-56 bg-gray-800">
          {course.thumbnail_url ? (
            <StyledImage
              source={{ uri: course.thumbnail_url }}
              className="w-full h-full"
              resizeMode="cover"
            />
          ) : (
            <StyledView className="w-full h-full items-center justify-center bg-blue-900/20">
              <BookOpen size={64} color="#3B82F6" />
            </StyledView>
          )}
        </StyledView>

        {/* Course Info */}
        <StyledView className="p-4">
          {/* Title */}
          <StyledText className="text-white text-2xl font-bold mb-2">
            {course.title}
          </StyledText>

          {/* Instructor */}
          <StyledText className="text-blue-400 text-base mb-4">
            By {course.instructor_name || 'Eduecosystem'}
          </StyledText>

          {/* Stats Row */}
          <StyledView className="flex-row mb-6 gap-4">
            {course.rating && (
              <StyledView className="flex-row items-center gap-1">
                <Star size={16} color="#F59E0B" fill="#F59E0B" />
                <StyledText className="text-gray-300 text-sm">
                  {course.rating.toFixed(1)}
                </StyledText>
              </StyledView>
            )}

            {course.enrolled_count !== undefined && (
              <StyledView className="flex-row items-center gap-1">
                <Users size={16} color="#9CA3AF" />
                <StyledText className="text-gray-300 text-sm">
                  {course.enrolled_count} enrolled
                </StyledText>
              </StyledView>
            )}

            {course.duration_hours && (
              <StyledView className="flex-row items-center gap-1">
                <Clock size={16} color="#9CA3AF" />
                <StyledText className="text-gray-300 text-sm">
                  {course.duration_hours}h
                </StyledText>
              </StyledView>
            )}

            {course.level && (
              <StyledView className="flex-row items-center gap-1">
                <Award size={16} color="#9CA3AF" />
                <StyledText className="text-gray-300 text-sm capitalize">
                  {course.level}
                </StyledText>
              </StyledView>
            )}
          </StyledView>

          {/* Description */}
          <StyledView className="mb-6">
            <StyledText className="text-white text-lg font-semibold mb-2">
              About this course
            </StyledText>
            <StyledText className="text-gray-300 leading-6">
              {course.description}
            </StyledText>
          </StyledView>

          {/* Modules */}
          {course.modules && course.modules.length > 0 && (
            <StyledView className="mb-6">
              <StyledText className="text-white text-lg font-semibold mb-3">
                Course Content
              </StyledText>
              {course.modules.map((module) => (
                <StyledView
                  key={module.id}
                  className="bg-gray-800 p-4 rounded-lg mb-2 border border-gray-700"
                >
                  <StyledText className="text-white font-semibold">
                    {module.title}
                  </StyledText>
                  {module.lessons_count && (
                    <StyledText className="text-gray-400 text-sm mt-1">
                      {module.lessons_count} lesson{module.lessons_count !== 1 ? 's' : ''}
                    </StyledText>
                  )}
                </StyledView>
              ))}
            </StyledView>
          )}
        </StyledView>
      </StyledScrollView>

      {/* Enroll Button */}
      <StyledView className="p-4 bg-gray-800 border-t border-gray-700">
        <StyledView className="flex-row items-center justify-between mb-3">
          <StyledText className="text-white text-2xl font-bold">
            {course.price === 0 ? 'Free' : `$${course.price}`}
          </StyledText>
        </StyledView>

        <StyledTouchableOpacity
          className={`py-4 rounded-lg items-center ${course.is_enrolled
              ? 'bg-green-600'
              : enrolling
                ? 'bg-gray-600'
                : 'bg-blue-500'
            }`}
          onPress={handleEnroll}
          disabled={enrolling || course.is_enrolled}
        >
          {enrolling ? (
            <ActivityIndicator color="white" />
          ) : (
            <StyledText className="text-white font-bold text-lg">
              {course.is_enrolled ? 'Already Enrolled' : 'Enroll Now'}
            </StyledText>
          )}
        </StyledTouchableOpacity>
      </StyledView>
    </StyledView>
  );
}

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { useRouter } from 'expo-router';
import { Clock, Award, CheckCircle } from 'lucide-react-native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

type QuizCardProps = {
    id: number;
    title: string;
    description?: string;
    questionCount: number;
    timeLimit?: number;
    passingScore?: number;
    isCompleted?: boolean;
    lastScore?: number;
};

export function QuizCard({
    id,
    title,
    description,
    questionCount,
    timeLimit,
    passingScore,
    isCompleted,
    lastScore,
}: QuizCardProps) {
    const router = useRouter();

    return (
        <StyledTouchableOpacity
            className="bg-gray-800 rounded-xl p-4 mb-3 border border-gray-700"
            onPress={() => router.push(`/quiz/${id}`)}
            activeOpacity={0.7}
        >
            <StyledView className="flex-row justify-between items-start mb-2">
                <StyledView className="flex-1">
                    <StyledText className="text-white font-bold text-lg mb-1">
                        {title}
                    </StyledText>
                    {description && (
                        <StyledText className="text-gray-400 text-sm" numberOfLines={2}>
                            {description}
                        </StyledText>
                    )}
                </StyledView>

                {isCompleted && (
                    <StyledView className="ml-2">
                        <CheckCircle size={24} color="#10B981" />
                    </StyledView>
                )}
            </StyledView>

            <StyledView className="flex-row gap-4 mt-3">
                <StyledView className="flex-row items-center gap-1">
                    <StyledText className="text-gray-400 text-sm">
                        {questionCount} questions
                    </StyledText>
                </StyledView>

                {timeLimit && (
                    <StyledView className="flex-row items-center gap-1">
                        <Clock size={14} color="#9CA3AF" />
                        <StyledText className="text-gray-400 text-sm">
                            {timeLimit} min
                        </StyledText>
                    </StyledView>
                )}

                {passingScore && (
                    <StyledView className="flex-row items-center gap-1">
                        <Award size={14} color="#9CA3AF" />
                        <StyledText className="text-gray-400 text-sm">
                            {passingScore}% to pass
                        </StyledText>
                    </StyledView>
                )}
            </StyledView>

            {lastScore !== undefined && (
                <StyledView className="mt-3 pt-3 border-t border-gray-700">
                    <StyledText className={`text-sm font-semibold ${lastScore >= (passingScore || 70) ? 'text-green-400' : 'text-yellow-400'
                        }`}>
                        Last Score: {lastScore}%
                    </StyledText>
                </StyledView>
            )}
        </StyledTouchableOpacity>
    );
}

import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { styled } from 'nativewind';
import { Clock, CheckCircle, XCircle, Trophy } from 'lucide-react-native';
import { quizzesAPI } from '../../utils/api';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);

type Question = {
    id: number;
    question_text: string;
    question_type: string;
    options?: string[];
    correct_answer?: string;
    points: number;
};

type Quiz = {
    id: number;
    title: string;
    description?: string;
    time_limit_minutes?: number;
    passing_score?: number;
    questions: Question[];
};

type QuizResult = {
    score: number;
    total_points: number;
    percentage: number;
    passed: boolean;
    answers: Record<number, string>;
    correct_answers: Record<number, string>;
};

export default function QuizScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<QuizResult | null>(null);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        fetchQuiz();
    }, [id]);

    useEffect(() => {
        if (timeRemaining === null || timeRemaining <= 0 || showResults) return;

        const timer = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev === null || prev <= 1) {
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeRemaining, showResults]);

    const fetchQuiz = async () => {
        try {
            const response = await quizzesAPI.getById(Number(id));
            const quizData = response.data;
            setQuiz(quizData);
            
            if (quizData.time_limit_minutes) {
                setTimeRemaining(quizData.time_limit_minutes * 60);
            }
        } catch (error) {
            console.error('Error fetching quiz:', error);
            Alert.alert('Error', 'Failed to load quiz');
        } finally {
            setLoading(false);
        }
    };

    const handleAnswerSelect = (questionId: number, answer: string) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const handleNext = () => {
        if (quiz && currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = async () => {
        if (!quiz) return;

        // Check if all questions are answered
        const unanswered = quiz.questions.filter((q) => !answers[q.id]);
        if (unanswered.length > 0 && timeRemaining !== 0) {
            Alert.alert(
                'Incomplete Quiz',
                `You have ${unanswered.length} unanswered question(s). Submit anyway?`,
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Submit', onPress: submitQuiz },
                ]
            );
            return;
        }

        submitQuiz();
    };

    const submitQuiz = async () => {
        if (!quiz) return;

        setIsSubmitting(true);
        try {
            const response = await quizzesAPI.submit(quiz.id, answers);
            setResult(response.data);
            setShowResults(true);
        } catch (error) {
            console.error('Error submitting quiz:', error);
            Alert.alert('Error', 'Failed to submit quiz');
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    if (loading) {
        return (
            <StyledView className="flex-1 bg-gray-900 items-center justify-center">
                <ActivityIndicator size="large" color="#3B82F6" />
            </StyledView>
        );
    }

    if (!quiz) {
        return (
            <StyledView className="flex-1 bg-gray-900 items-center justify-center px-6">
                <StyledText className="text-gray-400 text-lg">Quiz not found</StyledText>
            </StyledView>
        );
    }

    if (showResults && result) {
        return (
            <StyledView className="flex-1 bg-gray-900">
                <StyledScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
                    {/* Results Header */}
                    <StyledView className="items-center py-8">
                        <StyledView className={`w-24 h-24 rounded-full items-center justify-center mb-4 ${
                            result.passed ? 'bg-green-500/20' : 'bg-red-500/20'
                        }`}>
                            {result.passed ? (
                                <Trophy size={48} color="#10B981" />
                            ) : (
                                <XCircle size={48} color="#EF4444" />
                            )}
                        </StyledView>
                        
                        <StyledText className="text-white text-2xl font-bold mb-2">
                            {result.passed ? 'Congratulations!' : 'Keep Practicing!'}
                        </StyledText>
                        
                        <StyledText className="text-gray-400 text-center mb-6">
                            You scored {result.score} out of {result.total_points} points
                        </StyledText>

                        <StyledView className="bg-gray-800 rounded-full px-6 py-3">
                            <StyledText className={`text-2xl font-bold ${
                                result.passed ? 'text-green-400' : 'text-red-400'
                            }`}>
                                {Math.round(result.percentage)}%
                            </StyledText>
                        </StyledView>
                    </StyledView>

                    {/* Question Review */}
                    <StyledView className="mb-6">
                        <StyledText className="text-white text-lg font-semibold mb-4">
                            Review Answers
                        </StyledText>
                        
                        {quiz.questions.map((question, index) => {
                            const userAnswer = result.answers[question.id];
                            const correctAnswer = result.correct_answers[question.id];
                            const isCorrect = userAnswer === correctAnswer;

                            return (
                                <StyledView
                                    key={question.id}
                                    className="bg-gray-800 rounded-lg p-4 mb-3 border border-gray-700"
                                >
                                    <StyledView className="flex-row items-start mb-2">
                                        {isCorrect ? (
                                            <CheckCircle size={20} color="#10B981" />
                                        ) : (
                                            <XCircle size={20} color="#EF4444" />
                                        )}
                                        <StyledText className="text-white font-semibold ml-2 flex-1">
                                            {index + 1}. {question.question_text}
                                        </StyledText>
                                    </StyledView>

                                    {userAnswer && (
                                        <StyledText className={`ml-7 ${
                                            isCorrect ? 'text-green-400' : 'text-red-400'
                                        }`}>
                                            Your answer: {userAnswer}
                                        </StyledText>
                                    )}

                                    {!isCorrect && correctAnswer && (
                                        <StyledText className="text-green-400 ml-7 mt-1">
                                            Correct answer: {correctAnswer}
                                        </StyledText>
                                    )}
                                </StyledView>
                            );
                        })}
                    </StyledView>
                </StyledScrollView>

                {/* Done Button */}
                <StyledView className="p-4 bg-gray-800 border-t border-gray-700">
                    <StyledTouchableOpacity
                        className="bg-blue-500 py-4 rounded-lg items-center"
                        onPress={() => router.back()}
                    >
                        <StyledText className="text-white font-bold text-lg">
                            Done
                        </StyledText>
                    </StyledTouchableOpacity>
                </StyledView>
            </StyledView>
        );
    }

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

    return (
        <StyledView className="flex-1 bg-gray-900">
            {/* Header with Timer */}
            <StyledView className="bg-gray-800 px-4 py-3 border-b border-gray-700">
                <StyledView className="flex-row justify-between items-center">
                    <StyledText className="text-white font-semibold">
                        Question {currentQuestionIndex + 1} of {quiz.questions.length}
                    </StyledText>
                    
                    {timeRemaining !== null && (
                        <StyledView className="flex-row items-center gap-2">
                            <Clock size={16} color={timeRemaining < 60 ? '#EF4444' : '#9CA3AF'} />
                            <StyledText className={`font-mono font-bold ${
                                timeRemaining < 60 ? 'text-red-400' : 'text-gray-300'
                            }`}>
                                {formatTime(timeRemaining)}
                            </StyledText>
                        </StyledView>
                    )}
                </StyledView>

                {/* Progress Bar */}
                <StyledView className="h-1 bg-gray-700 rounded-full mt-3">
                    <StyledView
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </StyledView>
            </StyledView>

            <StyledScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
                {/* Question */}
                <StyledView className="mb-6">
                    <StyledText className="text-white text-xl font-semibold mb-2">
                        {currentQuestion.question_text}
                    </StyledText>
                    <StyledText className="text-gray-400 text-sm">
                        {currentQuestion.points} point{currentQuestion.points !== 1 ? 's' : ''}
                    </StyledText>
                </StyledView>

                {/* Answer Options */}
                {currentQuestion.options && (
                    <StyledView className="gap-3">
                        {currentQuestion.options.map((option, index) => {
                            const isSelected = answers[currentQuestion.id] === option;
                            
                            return (
                                <StyledTouchableOpacity
                                    key={index}
                                    className={`p-4 rounded-lg border-2 ${
                                        isSelected
                                            ? 'bg-blue-500/20 border-blue-500'
                                            : 'bg-gray-800 border-gray-700'
                                    }`}
                                    onPress={() => handleAnswerSelect(currentQuestion.id, option)}
                                >
                                    <StyledText className={`${
                                        isSelected ? 'text-white font-semibold' : 'text-gray-300'
                                    }`}>
                                        {option}
                                    </StyledText>
                                </StyledTouchableOpacity>
                            );
                        })}
                    </StyledView>
                )}
            </StyledScrollView>

            {/* Navigation Buttons */}
            <StyledView className="p-4 bg-gray-800 border-t border-gray-700">
                <StyledView className="flex-row gap-3">
                    <StyledTouchableOpacity
                        className={`flex-1 py-3 rounded-lg items-center ${
                            currentQuestionIndex === 0
                                ? 'bg-gray-700'
                                : 'bg-gray-600'
                        }`}
                        onPress={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                    >
                        <StyledText className={`font-semibold ${
                            currentQuestionIndex === 0 ? 'text-gray-500' : 'text-white'
                        }`}>
                            Previous
                        </StyledText>
                    </StyledTouchableOpacity>

                    {currentQuestionIndex === quiz.questions.length - 1 ? (
                        <StyledTouchableOpacity
                            className="flex-1 bg-green-600 py-3 rounded-lg items-center"
                            onPress={handleSubmit}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <ActivityIndicator color="white" />
                            ) : (
                                <StyledText className="text-white font-bold">
                                    Submit Quiz
                                </StyledText>
                            )}
                        </StyledTouchableOpacity>
                    ) : (
                        <StyledTouchableOpacity
                            className="flex-1 bg-blue-500 py-3 rounded-lg items-center"
                            onPress={handleNext}
                        >
                            <StyledText className="text-white font-semibold">
                                Next
                            </StyledText>
                        </StyledTouchableOpacity>
                    )}
                </StyledView>
            </StyledView>
        </StyledView>
    );
}

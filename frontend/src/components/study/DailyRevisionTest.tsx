"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    CheckCircle,
    XCircle,
    Clock,
    Trophy,
    ChevronRight,
    ChevronLeft,
    RotateCcw,
    FileQuestion,
    BookOpen,
    Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Question interface
export interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number; // Index of correct option
    explanation?: string;
    topicId?: string;
    isPYQ?: boolean; // Previous Year Question
    year?: number;
}

// Test result interface
export interface TestResult {
    totalQuestions: number;
    correctAnswers: number;
    incorrectAnswers: number;
    skipped: number;
    timeTaken: number;
    score: number; // Percentage
    questionResults: {
        questionId: string;
        selectedAnswer: number | null;
        isCorrect: boolean;
    }[];
}

interface DailyRevisionTestProps {
    topics?: string[];
    questions?: Question[];
    onComplete?: (result: TestResult) => void;
    className?: string;
}

// Sample questions (would be fetched from backend in production)
const SAMPLE_QUESTIONS: Question[] = [
    {
        id: "q1",
        question: "Which of the following is NOT a feature of the Aravalli Range?",
        options: [
            "One of the oldest fold mountains in the world",
            "Runs from Delhi to Gujarat",
            "Highest peak is Guru Shikhar",
            "Was formed during the Himalayan orogeny",
        ],
        correctAnswer: 3,
        explanation: "The Aravalli Range was formed in the Pre-Cambrian era, not during the Himalayan orogeny which occurred much later.",
        topicId: "geo-6",
        isPYQ: true,
        year: 2022,
    },
    {
        id: "q2",
        question: "The Thar Desert receives an average annual rainfall of:",
        options: ["Less than 100 mm", "100-250 mm", "250-500 mm", "More than 500 mm"],
        correctAnswer: 1,
        explanation: "The Thar Desert receives an average annual rainfall of 100-250 mm, making it one of the driest regions in India.",
        topicId: "geo-5",
    },
    {
        id: "q3",
        question: "Which river forms the boundary between India and Pakistan in Rajasthan?",
        options: ["Luni", "Banas", "Chambal", "Sutlej"],
        correctAnswer: 0,
        explanation: "The Luni River and its tributaries form part of the India-Pakistan boundary in the western part of Rajasthan.",
        topicId: "geo-3",
        isPYQ: true,
        year: 2021,
    },
    {
        id: "q4",
        question: "The 'Preamble' of the Indian Constitution was amended by which Constitutional Amendment?",
        options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
        correctAnswer: 0,
        explanation: "The 42nd Constitutional Amendment (1976) added the words 'Socialist', 'Secular', and 'Integrity' to the Preamble.",
        topicId: "pol-1",
        isPYQ: true,
        year: 2023,
    },
    {
        id: "q5",
        question: "Which of the following is the correct chronological order of Rajput kingdoms?",
        options: [
            "Chauhans → Rathores → Sisodias → Kachhwahas",
            "Rathores → Chauhans → Kachhwahas → Sisodias",
            "Sisodias → Chauhans → Rathores → Kachhwahas",
            "Chauhans → Sisodias → Rathores → Kachhwahas",
        ],
        correctAnswer: 0,
        explanation: "The Chauhan dynasty rose to power first, followed by the Rathores, Sisodias, and Kachhwahas in that historical sequence.",
        topicId: "his-3",
    },
];

type TestState = "intro" | "testing" | "review" | "result";

export default function DailyRevisionTest({
    topics = [],
    questions = SAMPLE_QUESTIONS,
    onComplete,
    className,
}: DailyRevisionTestProps) {
    const [testState, setTestState] = useState<TestState>("intro");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>(
        new Array(questions.length).fill(null)
    );
    const [startTime, setStartTime] = useState<number>(0);
    const [testResult, setTestResult] = useState<TestResult | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const pyqCount = questions.filter((q) => q.isPYQ).length;

    // Start test
    const handleStartTest = () => {
        setTestState("testing");
        setStartTime(Date.now());
        setCurrentQuestionIndex(0);
        setAnswers(new Array(questions.length).fill(null));
    };

    // Handle answer selection
    const handleSelectAnswer = (answerIndex: number) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = answerIndex;
        setAnswers(newAnswers);
    };

    // Navigate questions
    const goToNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setShowExplanation(false);
        }
    };

    const goToPrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
            setShowExplanation(false);
        }
    };

    // Submit test
    const handleSubmitTest = () => {
        const timeTaken = Math.floor((Date.now() - startTime) / 1000);
        let correct = 0;
        let incorrect = 0;
        let skipped = 0;

        const questionResults = questions.map((q, index) => {
            const selectedAnswer = answers[index];
            const isCorrect = selectedAnswer === q.correctAnswer;

            if (selectedAnswer === null) {
                skipped++;
            } else if (isCorrect) {
                correct++;
            } else {
                incorrect++;
            }

            return {
                questionId: q.id,
                selectedAnswer,
                isCorrect,
            };
        });

        const result: TestResult = {
            totalQuestions: questions.length,
            correctAnswers: correct,
            incorrectAnswers: incorrect,
            skipped,
            timeTaken,
            score: Math.round((correct / questions.length) * 100),
            questionResults,
        };

        setTestResult(result);
        setTestState("result");
        onComplete?.(result);
    };

    // Format time
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    // Render based on state
    const renderContent = () => {
        switch (testState) {
            case "intro":
                return (
                    <div className="text-center py-8 space-y-6">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                            <FileQuestion className="w-10 h-10 text-white" />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold">Daily Revision Test</h2>
                            <p className="text-muted-foreground mt-1">
                                Test your knowledge of today&apos;s topics
                            </p>
                        </div>

                        <div className="flex justify-center gap-4 flex-wrap">
                            <Badge variant="outline" className="px-4 py-2">
                                <BookOpen className="w-4 h-4 mr-2" />
                                {questions.length} Questions
                            </Badge>
                            {pyqCount > 0 && (
                                <Badge variant="outline" className="px-4 py-2 text-amber-600 border-amber-500">
                                    <Award className="w-4 h-4 mr-2" />
                                    {pyqCount} PYQs
                                </Badge>
                            )}
                        </div>

                        {topics.length > 0 && (
                            <div className="text-left p-4 bg-muted rounded-lg">
                                <p className="text-sm font-medium text-muted-foreground mb-2">
                                    Topics Covered:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {topics.map((topic, index) => (
                                        <Badge key={index} variant="secondary">
                                            {topic}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}

                        <Button
                            size="lg"
                            className="px-8 py-6 text-lg gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                            onClick={handleStartTest}
                        >
                            Start Test
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                );

            case "testing":
                return (
                    <div className="space-y-6">
                        {/* Progress Header */}
                        <div className="flex items-center justify-between">
                            <Badge variant="outline">
                                Question {currentQuestionIndex + 1} of {questions.length}
                            </Badge>
                            {currentQuestion.isPYQ && (
                                <Badge className="bg-amber-500/10 text-amber-600 border-amber-500">
                                    <Award className="w-3 h-3 mr-1" />
                                    PYQ {currentQuestion.year}
                                </Badge>
                            )}
                        </div>

                        <Progress
                            value={((currentQuestionIndex + 1) / questions.length) * 100}
                            className="h-2"
                        />

                        {/* Question */}
                        <Card className="border-2">
                            <CardContent className="p-6 space-y-6">
                                <h3 className="text-lg font-medium leading-relaxed">
                                    {currentQuestion.question}
                                </h3>

                                <RadioGroup
                                    value={answers[currentQuestionIndex]?.toString() ?? ""}
                                    onValueChange={(value) => handleSelectAnswer(parseInt(value))}
                                >
                                    {currentQuestion.options.map((option, index) => (
                                        <div
                                            key={index}
                                            className={cn(
                                                "flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all",
                                                answers[currentQuestionIndex] === index
                                                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                                    : "border-border hover:border-border"
                                            )}
                                            onClick={() => handleSelectAnswer(index)}
                                        >
                                            <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                                            <Label
                                                htmlFor={`option-${index}`}
                                                className="flex-1 cursor-pointer"
                                            >
                                                {option}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </CardContent>
                        </Card>

                        {/* Navigation */}
                        <div className="flex justify-between">
                            <Button
                                variant="outline"
                                onClick={goToPrevious}
                                disabled={currentQuestionIndex === 0}
                            >
                                <ChevronLeft className="w-4 h-4 mr-2" />
                                Previous
                            </Button>

                            {currentQuestionIndex === questions.length - 1 ? (
                                <Button onClick={handleSubmitTest}>
                                    Submit Test
                                    <CheckCircle className="w-4 h-4 ml-2" />
                                </Button>
                            ) : (
                                <Button onClick={goToNext}>
                                    Next
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            )}
                        </div>

                        {/* Question Navigator */}
                        <div className="flex flex-wrap gap-2 justify-center pt-4 border-t">
                            {questions.map((_, index) => (
                                <Button
                                    key={index}
                                    variant={answers[index] !== null ? "default" : "outline"}
                                    size="sm"
                                    className={cn(
                                        "w-10 h-10 p-0",
                                        currentQuestionIndex === index && "ring-2 ring-blue-500"
                                    )}
                                    onClick={() => setCurrentQuestionIndex(index)}
                                >
                                    {index + 1}
                                </Button>
                            ))}
                        </div>
                    </div>
                );

            case "result":
                return (
                    <div className="space-y-6">
                        {/* Score Card */}
                        <div className="text-center py-6 space-y-4">
                            <div
                                className={cn(
                                    "w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-bold",
                                    testResult && testResult.score >= 70
                                        ? "bg-green-100 text-green-600"
                                        : testResult && testResult.score >= 40
                                            ? "bg-amber-100 text-amber-600"
                                            : "bg-red-100 text-red-600"
                                )}
                            >
                                {testResult?.score}%
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">
                                    {testResult && testResult.score >= 70
                                        ? "Excellent! 🎉"
                                        : testResult && testResult.score >= 40
                                            ? "Good Effort! 💪"
                                            : "Keep Practicing! 📚"}
                                </h2>
                                <p className="text-muted-foreground mt-1">
                                    Time taken: {testResult && formatTime(testResult.timeTaken)}
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <CheckCircle className="w-6 h-6 mx-auto text-green-500 mb-2" />
                                <p className="text-2xl font-bold text-green-600">
                                    {testResult?.correctAnswers}
                                </p>
                                <p className="text-sm text-muted-foreground">Correct</p>
                            </div>
                            <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                <XCircle className="w-6 h-6 mx-auto text-red-500 mb-2" />
                                <p className="text-2xl font-bold text-red-600">
                                    {testResult?.incorrectAnswers}
                                </p>
                                <p className="text-sm text-muted-foreground">Wrong</p>
                            </div>
                            <div className="text-center p-4 bg-muted rounded-lg">
                                <Clock className="w-6 h-6 mx-auto text-muted-foreground mb-2" />
                                <p className="text-2xl font-bold text-muted-foreground">
                                    {testResult?.skipped}
                                </p>
                                <p className="text-sm text-muted-foreground">Skipped</p>
                            </div>
                        </div>

                        {/* Review Button */}
                        <div className="flex justify-center gap-4">
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setTestState("review");
                                    setCurrentQuestionIndex(0);
                                }}
                            >
                                <BookOpen className="w-4 h-4 mr-2" />
                                Review Answers
                            </Button>
                            <Button onClick={handleStartTest}>
                                <RotateCcw className="w-4 h-4 mr-2" />
                                Retry Test
                            </Button>
                        </div>
                    </div>
                );

            case "review":
                return (
                    <div className="space-y-6">
                        {/* Navigation */}
                        <div className="flex items-center justify-between">
                            <Badge variant="outline">
                                Reviewing {currentQuestionIndex + 1} of {questions.length}
                            </Badge>
                            <Button variant="ghost" onClick={() => setTestState("result")}>
                                Back to Results
                            </Button>
                        </div>

                        {/* Question Review */}
                        <Card
                            className={cn(
                                "border-2",
                                testResult?.questionResults[currentQuestionIndex].isCorrect
                                    ? "border-green-500"
                                    : "border-red-500"
                            )}
                        >
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-lg font-medium">{currentQuestion.question}</h3>

                                <div className="space-y-2">
                                    {currentQuestion.options.map((option, index) => {
                                        const isSelected =
                                            testResult?.questionResults[currentQuestionIndex]
                                                .selectedAnswer === index;
                                        const isCorrect = currentQuestion.correctAnswer === index;

                                        return (
                                            <div
                                                key={index}
                                                className={cn(
                                                    "p-4 rounded-lg border-2 flex items-center gap-3",
                                                    isCorrect
                                                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                                                        : isSelected
                                                            ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                                            : "border-border"
                                                )}
                                            >
                                                {isCorrect ? (
                                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                                ) : isSelected ? (
                                                    <XCircle className="w-5 h-5 text-red-500" />
                                                ) : (
                                                    <div className="w-5 h-5" />
                                                )}
                                                <span>{option}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Explanation */}
                                {currentQuestion.explanation && (
                                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                        <p className="text-sm font-medium text-blue-600 mb-1">
                                            Explanation:
                                        </p>
                                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                                            {currentQuestion.explanation}
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Navigation */}
                        <div className="flex justify-between">
                            <Button
                                variant="outline"
                                onClick={goToPrevious}
                                disabled={currentQuestionIndex === 0}
                            >
                                <ChevronLeft className="w-4 h-4 mr-2" />
                                Previous
                            </Button>
                            <Button
                                onClick={goToNext}
                                disabled={currentQuestionIndex === questions.length - 1}
                            >
                                Next
                                <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <Card className={cn("overflow-hidden", className)}>
            <CardHeader className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-b">
                <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-blue-500" />
                    Daily Revision Test
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">{renderContent()}</CardContent>
        </Card>
    );
}

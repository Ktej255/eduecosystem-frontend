"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    CheckCircle2,
    XCircle,
    Timer,
    FileQuestion,
    Trophy,
    Play,
    Clock,
    AlertTriangle,
    ChevronDown,
    ChevronUp
} from "lucide-react";
import Link from "next/link";
import { getCSATSessionByDay, getAvailableCSATDays, POMODORO_CSAT_OVERVIEW } from "./data";

type ViewMode = 'days' | 'reading' | 'practice' | 'results';

export default function PomodoroCSATSession({ day }: { day: number }) {
    const [viewMode, setViewMode] = useState<ViewMode>('days');
    const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
    const [expandedPassage, setExpandedPassage] = useState<number | null>(null);

    // Timer state
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [timerActive, setTimerActive] = useState(false);

    const sessionData = getCSATSessionByDay(day);
    const availableDays = getAvailableCSATDays();

    // Timer effect
    useEffect(() => {
        if (timerActive && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setTimerActive(false);
                        if (viewMode === 'practice') {
                            setViewMode('results');
                        }
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timerActive, timeLeft, viewMode]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleAnswerSelect = (questionId: number, answerIndex: number) => {
        setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    };

    const calculateScore = () => {
        if (!sessionData) return 0;
        let correct = 0;
        sessionData.questions.forEach(q => {
            if (selectedAnswers[q.id] === q.correctAnswer) correct++;
        });
        return correct;
    };

    if (!sessionData) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Day {day} Content Coming Soon
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Available days: {availableDays.join(', ')}
                </p>
                <Link href="/student/batch1">
                    <Button className="mt-4">Back to Batch 1</Button>
                </Link>
            </div>
        );
    }

    const { session, passages, questions } = sessionData;
    const currentPassage = passages[currentPassageIndex];
    const currentQuestion = questions[currentQuestionIndex];
    const isTimeWarning = timeLeft <= 300;

    // Day Selection View
    if (viewMode === 'days') {
        return (
            <div className="space-y-6 max-w-4xl mx-auto p-4 md:p-6">
                <Link href="/student/batch1">
                    <Button variant="ghost">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Batch 1
                    </Button>
                </Link>

                <Card className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-bold">CSAT Practice - Day {session.day}</h2>
                        <p className="text-amber-100">{session.title}</p>
                        <div className="flex gap-4 mt-4 text-sm">
                            <span className="flex items-center gap-1">
                                <BookOpen className="h-4 w-4" /> {session.passageCount} Passages
                            </span>
                            <span className="flex items-center gap-1">
                                <FileQuestion className="h-4 w-4" /> {session.questionCount} Questions
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" /> {session.duration} min
                            </span>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid gap-4">
                    <Card className="border-2 border-amber-200 dark:border-amber-800">
                        <CardHeader>
                            <CardTitle className="text-lg">Session Topics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {session.topics.map((topic, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 h-20 text-lg"
                            onClick={() => {
                                setViewMode('reading');
                                setTimeLeft(25 * 60);
                                setTimerActive(true);
                            }}
                        >
                            <BookOpen className="mr-3 h-6 w-6" />
                            Start Reading (25 min)
                        </Button>
                        <Button
                            size="lg"
                            className="bg-amber-600 hover:bg-amber-700 h-20 text-lg"
                            onClick={() => {
                                setViewMode('practice');
                                setTimeLeft(25 * 60);
                                setTimerActive(true);
                            }}
                        >
                            <Play className="mr-3 h-6 w-6" />
                            Start Practice (25 min)
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // Reading View
    if (viewMode === 'reading') {
        return (
            <div className="space-y-4 max-w-4xl mx-auto p-4 md:p-6">
                <div className="flex items-center justify-between">
                    <Button variant="ghost" onClick={() => { setViewMode('days'); setTimerActive(false); }}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <span className={`px-3 py-1 rounded-full text-sm font-mono ${isTimeWarning ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-amber-100 text-amber-600'}`}>
                        <Timer className="inline h-4 w-4 mr-1" />
                        {formatTime(timeLeft)}
                    </span>
                </div>

                <Progress value={((currentPassageIndex + 1) / passages.length) * 100} className="h-2" />

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">
                                Passage {currentPassageIndex + 1} of {passages.length}
                            </CardTitle>
                            <span className="text-sm text-gray-500">{currentPassage.title}</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                {currentPassage.content}
                            </p>
                        </div>

                        <div className="flex justify-between mt-6 pt-4 border-t">
                            <Button
                                variant="outline"
                                onClick={() => setCurrentPassageIndex(prev => Math.max(0, prev - 1))}
                                disabled={currentPassageIndex === 0}
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                            </Button>
                            {currentPassageIndex === passages.length - 1 ? (
                                <Button
                                    className="bg-amber-600 hover:bg-amber-700"
                                    onClick={() => {
                                        setViewMode('practice');
                                        setTimeLeft(25 * 60);
                                    }}
                                >
                                    Start Practice <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            ) : (
                                <Button
                                    className="bg-amber-600 hover:bg-amber-700"
                                    onClick={() => setCurrentPassageIndex(prev => prev + 1)}
                                >
                                    Next Passage <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Practice View
    if (viewMode === 'practice') {
        const passageForQuestion = passages.find(p => p.id === currentQuestion.passageId);

        return (
            <div className="space-y-4 max-w-4xl mx-auto p-4 md:p-6">
                <div className="flex items-center justify-between">
                    <Button variant="ghost" onClick={() => { setViewMode('days'); setTimerActive(false); }}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Exit
                    </Button>
                    <span className={`px-3 py-1 rounded-full text-sm font-mono ${isTimeWarning ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-amber-100 text-amber-600'}`}>
                        {isTimeWarning && <AlertTriangle className="inline h-4 w-4 mr-1" />}
                        <Timer className="inline h-4 w-4 mr-1" />
                        {formatTime(timeLeft)}
                    </span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span>{passageForQuestion?.title}</span>
                </div>
                <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="h-2" />

                {/* Collapsible Passage Reference */}
                <Card className="border border-gray-200 dark:border-gray-700">
                    <button
                        className="w-full p-4 flex items-center justify-between text-left"
                        onClick={() => setExpandedPassage(expandedPassage === currentQuestion.passageId ? null : currentQuestion.passageId)}
                    >
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                            📖 View Passage: {passageForQuestion?.title}
                        </span>
                        {expandedPassage === currentQuestion.passageId ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                    {expandedPassage === currentQuestion.passageId && (
                        <CardContent className="pt-0 max-h-60 overflow-y-auto">
                            <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                                {passageForQuestion?.content}
                            </p>
                        </CardContent>
                    )}
                </Card>

                {/* Question */}
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>

                        <div className="space-y-3">
                            {currentQuestion.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswerSelect(currentQuestion.id, idx)}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition ${selectedAnswers[currentQuestion.id] === idx
                                            ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20'
                                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedAnswers[currentQuestion.id] === idx
                                                ? 'bg-amber-500 text-white'
                                                : 'bg-gray-200 dark:bg-gray-700'
                                            }`}>
                                            {String.fromCharCode(97 + idx)}
                                        </span>
                                        <span>{option}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between mt-6 pt-4 border-t">
                            <Button
                                variant="outline"
                                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                                disabled={currentQuestionIndex === 0}
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                            </Button>
                            {currentQuestionIndex === questions.length - 1 ? (
                                <Button
                                    className="bg-green-600 hover:bg-green-700"
                                    onClick={() => { setViewMode('results'); setTimerActive(false); }}
                                >
                                    Submit <CheckCircle2 className="ml-2 h-4 w-4" />
                                </Button>
                            ) : (
                                <Button
                                    className="bg-amber-600 hover:bg-amber-700"
                                    onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                                >
                                    Next <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Question Navigator */}
                <Card>
                    <CardContent className="p-4">
                        <p className="text-sm text-gray-500 mb-3">Question Navigator</p>
                        <div className="flex gap-2 flex-wrap">
                            {questions.map((q, idx) => (
                                <button
                                    key={q.id}
                                    onClick={() => setCurrentQuestionIndex(idx)}
                                    className={`w-10 h-10 rounded flex items-center justify-center text-sm font-medium ${selectedAnswers[q.id] !== undefined
                                            ? 'bg-amber-500 text-white'
                                            : idx === currentQuestionIndex
                                                ? 'bg-gray-200 border-2 border-amber-500'
                                                : 'bg-gray-100 dark:bg-gray-800'
                                        }`}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Results View
    if (viewMode === 'results') {
        const score = calculateScore();
        const percentage = Math.round((score / questions.length) * 100);

        return (
            <div className="space-y-6 max-w-4xl mx-auto p-4 md:p-6">
                <Card className="text-center">
                    <CardContent className="p-8">
                        <Trophy className={`h-16 w-16 mx-auto mb-4 ${percentage >= 70 ? 'text-amber-500' : percentage >= 50 ? 'text-blue-500' : 'text-gray-400'}`} />
                        <h2 className="text-2xl font-bold mb-2">Practice Complete! 🎉</h2>
                        <div className="text-5xl font-bold text-amber-600 my-4">
                            {score}/{questions.length}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            {percentage >= 80 ? "Excellent! Outstanding performance!" :
                                percentage >= 60 ? "Good job! Keep practicing!" :
                                    percentage >= 40 ? "Fair attempt. Review the explanations." :
                                        "Keep studying. Review passages carefully."}
                        </p>
                        <Progress value={percentage} className="h-3 mt-4" />
                    </CardContent>
                </Card>

                {/* Answer Review */}
                <Card>
                    <CardHeader>
                        <CardTitle>Answer Review</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 max-h-[60vh] overflow-y-auto">
                        {questions.map((q, idx) => {
                            const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
                            const passage = passages.find(p => p.id === q.passageId);

                            return (
                                <div key={q.id} className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                                    <div className="flex items-start gap-2">
                                        {isCorrect ? (
                                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        ) : (
                                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                        )}
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500 mb-1">{passage?.title} • Q{idx + 1}</p>
                                            <p className="font-medium text-sm">{q.question}</p>
                                            <p className="text-xs text-gray-600 mt-1">
                                                <span className="font-medium">Correct:</span> ({String.fromCharCode(97 + q.correctAnswer)}) {q.options[q.correctAnswer]}
                                            </p>
                                            {!isCorrect && selectedAnswers[q.id] !== undefined && (
                                                <p className="text-xs text-red-600 mt-1">
                                                    <span className="font-medium">Your answer:</span> ({String.fromCharCode(97 + selectedAnswers[q.id])}) {q.options[selectedAnswers[q.id]]}
                                                </p>
                                            )}
                                            <p className="text-xs text-gray-500 mt-2 italic">{q.explanation}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </CardContent>
                </Card>

                <div className="flex gap-4 justify-center">
                    <Button
                        variant="outline"
                        onClick={() => {
                            setViewMode('days');
                            setSelectedAnswers({});
                            setCurrentQuestionIndex(0);
                        }}
                    >
                        Try Again
                    </Button>
                    <Link href="/student/batch1">
                        <Button className="bg-amber-600 hover:bg-amber-700">
                            Back to Dashboard
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return null;
}

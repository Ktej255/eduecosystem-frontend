"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    ArrowLeft,
    TrendingUp,
    TrendingDown,
    Clock,
    Target,
    CheckCircle2,
    XCircle,
    AlertTriangle,
    Trophy,
    Brain,
    Timer,
    BarChart3,
    BookOpen,
} from "lucide-react";

interface TestAnswer {
    qId: number;
    answer: number;
    isCorrect: boolean;
    confidence: number | null; // 1=100% Sure, 2=50-50, 3=One Known, 4=Blind Guess
    timeSpentSeconds?: number;
}

interface MCQWithMeta {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
    level?: string;
    topic?: string;
    chapter?: string;
    subtopic?: string;
}

interface DetailedTestReportProps {
    testResult: {
        id: number;
        cycle_id: number;
        day_number: number;
        score: number;
        total_questions: number;
        correct_count: number;
        incorrect_count: number;
        unanswered_count: number;
        answers: TestAnswer[];
        timestamp: string;
    };
    mcqs: MCQWithMeta[];
    onClose: () => void;
}

const CONFIDENCE_LABELS: Record<number, { label: string; emoji: string; color: string }> = {
    1: { label: "100% Sure", emoji: "✅", color: "text-green-600" },
    2: { label: "50-50", emoji: "🤔", color: "text-yellow-600" },
    3: { label: "One Known", emoji: "💡", color: "text-orange-600" },
    4: { label: "Blind Guess", emoji: "🎲", color: "text-red-600" },
};

export default function DetailedTestReport({ testResult, mcqs, onClose }: DetailedTestReportProps) {
    // Compute topic-wise breakdown
    const topicAnalysis = useMemo(() => {
        const topicMap: Record<string, {
            total: number;
            correct: number;
            incorrect: number;
            unanswered: number;
            avgTime: number;
            questions: { qId: number; isCorrect: boolean; confidence: number | null }[];
        }> = {};

        testResult.answers.forEach(ans => {
            const mcq = mcqs.find(m => m.id === ans.qId);
            const topic = mcq?.subtopic || mcq?.chapter || mcq?.topic || "General";

            if (!topicMap[topic]) {
                topicMap[topic] = { total: 0, correct: 0, incorrect: 0, unanswered: 0, avgTime: 0, questions: [] };
            }

            topicMap[topic].total++;
            if (ans.answer === -1) {
                topicMap[topic].unanswered++;
            } else if (ans.isCorrect) {
                topicMap[topic].correct++;
            } else {
                topicMap[topic].incorrect++;
            }
            topicMap[topic].questions.push({ qId: ans.qId, isCorrect: ans.isCorrect, confidence: ans.confidence });
        });

        return Object.entries(topicMap)
            .map(([name, data]) => ({
                name,
                ...data,
                accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
            }))
            .sort((a, b) => b.total - a.total);
    }, [testResult.answers, mcqs]);

    // Compute confidence analysis
    const confidenceAnalysis = useMemo(() => {
        const results: Record<number, { total: number; correct: number; accuracy: number }> = {
            1: { total: 0, correct: 0, accuracy: 0 },
            2: { total: 0, correct: 0, accuracy: 0 },
            3: { total: 0, correct: 0, accuracy: 0 },
            4: { total: 0, correct: 0, accuracy: 0 },
        };

        testResult.answers.forEach(ans => {
            if (ans.confidence && ans.answer !== -1) {
                results[ans.confidence].total++;
                if (ans.isCorrect) {
                    results[ans.confidence].correct++;
                }
            }
        });

        Object.keys(results).forEach(key => {
            const k = parseInt(key);
            if (results[k].total > 0) {
                results[k].accuracy = Math.round((results[k].correct / results[k].total) * 100);
            }
        });

        return results;
    }, [testResult.answers]);

    // Compute time analysis (if available)
    const timeAnalysis = useMemo(() => {
        const answersWithTime = testResult.answers.filter(a => a.timeSpentSeconds !== undefined && a.timeSpentSeconds > 0);
        if (answersWithTime.length === 0) return null;

        const totalTime = answersWithTime.reduce((sum, a) => sum + (a.timeSpentSeconds || 0), 0);
        const avgTime = totalTime / answersWithTime.length;

        const slowQuestions = answersWithTime.filter(a => (a.timeSpentSeconds || 0) > avgTime * 1.5);
        const fastQuestions = answersWithTime.filter(a => (a.timeSpentSeconds || 0) < avgTime * 0.5);

        return {
            totalTime,
            avgTime,
            slowCount: slowQuestions.length,
            fastCount: fastQuestions.length,
            answersWithTime,
        };
    }, [testResult.answers]);

    // Get weak topics (accuracy < 50%)
    const weakTopics = topicAnalysis.filter(t => t.accuracy < 50 && t.total >= 2);

    // Get strong topics (accuracy >= 80%)
    const strongTopics = topicAnalysis.filter(t => t.accuracy >= 80 && t.total >= 2);

    const scorePercent = Math.round((testResult.correct_count / testResult.total_questions) * 100);

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={onClose}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    📊 Detailed Test Report
                </h2>
                <div className="text-sm text-gray-500">
                    {new Date(testResult.timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                </div>
            </div>

            {/* Score Overview */}
            <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                            <p className="text-3xl font-bold">{testResult.score}</p>
                            <p className="text-xs text-white/80">Total Score</p>
                        </div>
                        <div>
                            <CheckCircle2 className="h-8 w-8 mx-auto mb-2 text-green-300" />
                            <p className="text-3xl font-bold">{testResult.correct_count}</p>
                            <p className="text-xs text-white/80">Correct</p>
                        </div>
                        <div>
                            <XCircle className="h-8 w-8 mx-auto mb-2 text-red-300" />
                            <p className="text-3xl font-bold">{testResult.incorrect_count}</p>
                            <p className="text-xs text-white/80">Incorrect</p>
                        </div>
                        <div>
                            <Target className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                            <p className="text-3xl font-bold">{scorePercent}%</p>
                            <p className="text-xs text-white/80">Accuracy</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Confidence Analysis */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <Brain className="h-5 w-5 text-purple-600" />
                        Confidence vs Accuracy Analysis
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(conf => {
                            const data = confidenceAnalysis[conf];
                            const meta = CONFIDENCE_LABELS[conf];
                            const expectedAccuracy = conf === 1 ? 90 : conf === 2 ? 50 : conf === 3 ? 35 : 25;
                            const isGood = data.accuracy >= expectedAccuracy;

                            return (
                                <div key={conf} className="p-4 rounded-lg border bg-gray-50 dark:bg-gray-800">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-lg">{meta.emoji}</span>
                                        <span className={`text-xs font-medium ${meta.color}`}>{meta.label}</span>
                                    </div>
                                    <p className="text-2xl font-bold">{data.accuracy}%</p>
                                    <p className="text-xs text-gray-500">{data.correct}/{data.total} correct</p>
                                    <div className="mt-2 flex items-center gap-1 text-xs">
                                        {isGood ? (
                                            <><TrendingUp className="h-3 w-3 text-green-500" /> <span className="text-green-600">Good judgment</span></>
                                        ) : (
                                            <><TrendingDown className="h-3 w-3 text-red-500" /> <span className="text-red-600">Overconfident</span></>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm">
                        <p className="font-medium text-blue-800 dark:text-blue-300 mb-1">💡 Insight:</p>
                        <p className="text-blue-700 dark:text-blue-400">
                            {confidenceAnalysis[4].accuracy > 30
                                ? "Your blind guesses are doing well! Your intuition is strong."
                                : confidenceAnalysis[1].accuracy < 80
                                    ? "When you're 100% sure, you should aim for 90%+ accuracy. Review your 'sure' answers more carefully."
                                    : "Good confidence calibration! Your judgment aligns well with your actual knowledge."}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Topic-wise Breakdown */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <BookOpen className="h-5 w-5 text-green-600" />
                        Topic-wise Performance
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {topicAnalysis.map((topic, idx) => (
                            <div key={idx} className="p-3 rounded-lg border bg-gray-50 dark:bg-gray-800">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium">{topic.name}</span>
                                    <span className={`text-sm font-bold ${topic.accuracy >= 60 ? 'text-green-600' : topic.accuracy >= 40 ? 'text-yellow-600' : 'text-red-600'}`}>
                                        {topic.accuracy}%
                                    </span>
                                </div>
                                <Progress value={topic.accuracy} className="h-2 mb-2" />
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>{topic.total} questions</span>
                                    <span className="text-green-600">{topic.correct} ✓</span>
                                    <span className="text-red-600">{topic.incorrect} ✗</span>
                                    {topic.unanswered > 0 && <span className="text-gray-400">{topic.unanswered} skipped</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Time Analysis (if available) */}
            {timeAnalysis && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Timer className="h-5 w-5 text-orange-600" />
                            Time Analysis
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                                <Clock className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                                <p className="text-xl font-bold">{Math.round(timeAnalysis.totalTime / 60)}m</p>
                                <p className="text-xs text-gray-500">Total Time</p>
                            </div>
                            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                                <Timer className="h-6 w-6 mx-auto mb-2 text-green-600" />
                                <p className="text-xl font-bold">{Math.round(timeAnalysis.avgTime)}s</p>
                                <p className="text-xs text-gray-500">Avg per Question</p>
                            </div>
                            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20">
                                <AlertTriangle className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                                <p className="text-xl font-bold">{timeAnalysis.slowCount}</p>
                                <p className="text-xs text-gray-500">Slow Questions</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Recommendations */}
            <Card className="border-2 border-purple-200 dark:border-purple-800">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-purple-700 dark:text-purple-300">
                        <Target className="h-5 w-5" />
                        Revision Recommendations
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {weakTopics.length > 0 ? (
                        <div className="space-y-3">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Focus on these topics for improvement:
                            </p>
                            {weakTopics.map((topic, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-red-700 dark:text-red-300">{topic.name}</p>
                                        <p className="text-xs text-red-600 dark:text-red-400">
                                            {topic.accuracy}% accuracy ({topic.correct}/{topic.total}) - Needs revision
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                            <div className="flex items-center gap-3">
                                <Trophy className="h-6 w-6 text-green-500" />
                                <div>
                                    <p className="font-medium text-green-700 dark:text-green-300">Great job!</p>
                                    <p className="text-sm text-green-600 dark:text-green-400">
                                        No major weak areas detected. Keep up the good work!
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {strongTopics.length > 0 && (
                        <div className="mt-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Your strong areas:</p>
                            <div className="flex flex-wrap gap-2">
                                {strongTopics.map((topic, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                                        ✓ {topic.name} ({topic.accuracy}%)
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

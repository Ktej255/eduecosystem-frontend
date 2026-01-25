"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, AlertTriangle, Target, Home, RefreshCw, BarChart2 } from 'lucide-react';
import { MCQResult } from '@/types/mcq';
import { useRouter } from 'next/navigation';

interface MCQResultDashboardProps {
    results: MCQResult;
    questions: any[];
    chapterTitle: string;
    onRetry: () => void;
}

export default function MCQResultDashboard({ results, questions, chapterTitle, onRetry }: MCQResultDashboardProps) {
    const router = useRouter();
    const percentage = Math.round((results.score / results.totalQuestions) * 100);

    // Confidence Analysis
    let sureShotCorrect = 0;
    let sureShotWrong = 0;
    let blindGuessCorrect = 0;
    let blindGuessWrong = 0;

    Object.values(results.answers).forEach(ans => {
        if (ans.confidence === 'sure-shot') {
            ans.isCorrect ? sureShotCorrect++ : sureShotWrong++;
        }
        if (ans.confidence === 'blind-guess') {
            ans.isCorrect ? blindGuessCorrect++ : blindGuessWrong++;
        }
    });

    const reasoningGap = sureShotWrong; // Dangerous!
    const luckFactor = blindGuessCorrect; // Don't rely on this!

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Test Results: {chapterTitle}</h2>
                <p className="text-gray-600 dark:text-gray-400">Here is your performance report</p>
            </div>

            {/* Score Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="md:col-span-1 border-t-4 border-t-blue-500">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Overall Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold mb-2">{percentage}%</div>
                        <Progress value={percentage} className="h-2 mb-2" />
                        <p className="text-xs text-gray-500">{results.score} out of {results.totalQuestions} correct</p>
                    </CardContent>
                </Card>

                <Card className="md:col-span-1 border-t-4 border-t-red-500">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Reasoning Gap</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-3xl font-bold text-red-600">{reasoningGap}</span>
                            {reasoningGap > 0 && <AlertTriangle className="w-6 h-6 text-red-500" />}
                        </div>
                        <p className="text-sm font-medium">Overconfident Answers</p>
                        <p className="text-xs text-gray-500 mt-1">
                            You marked these as "Sure Shot" but got them wrong. Review these concepts urgently!
                        </p>
                    </CardContent>
                </Card>

                <Card className="md:col-span-1 border-t-4 border-t-yellow-500">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Luck Factor</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-3xl font-bold text-yellow-600">{luckFactor}</span>
                            <Target className="w-6 h-6 text-yellow-500" />
                        </div>
                        <p className="text-sm font-medium">Blind Guesses Correct</p>
                        <p className="text-xs text-gray-500 mt-1">
                            Don't rely on these. You guessed blindly and got lucky.
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Detailed Review */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart2 className="w-5 h-5" /> Question Analysis
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {questions.map((q, idx) => {
                            const userAnswer = results.answers[idx];
                            const isCorrect = userAnswer?.isCorrect;
                            const optionLabel = (i: number) => String.fromCharCode(65 + i);

                            return (
                                <div key={idx} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'}`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-start gap-3">
                                            {isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" /> : <XCircle className="w-5 h-5 text-red-600 mt-0.5" />}
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white">Q{idx + 1}: {q.question}</p>
                                                <div className="flex items-center gap-2 mt-2 text-xs">
                                                    <span className={`px-2 py-0.5 rounded border ${userAnswer?.confidence === 'sure-shot' ? 'bg-green-100 text-green-700 border-green-200' :
                                                            userAnswer?.confidence === 'blind-guess' ? 'bg-red-100 text-red-700 border-red-200' :
                                                                'bg-gray-100 text-gray-700 border-gray-200'
                                                        }`}>
                                                        {userAnswer?.confidence?.replace('-', ' ').toUpperCase() || 'SKIPPED'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ml-8 mt-2 text-sm text-gray-600 space-y-1">
                                        <p>Your Answer: <span className="font-bold">{optionLabel(userAnswer?.selectedOption)}</span></p>
                                        <p>Correct Answer: <span className="font-bold text-green-700">{optionLabel(q.correctAnswer)}</span></p>
                                        <div className="mt-2 p-3 bg-white dark:bg-black/20 rounded border border-gray-200 dark:border-gray-800">
                                            <span className="font-bold text-xs text-gray-500 uppercase">Explanation</span>
                                            <p className="mt-1">{q.explanation}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            <div className="flex gap-4 justify-center py-8">
                <Button variant="outline" onClick={() => router.back()}>
                    <Home className="w-4 h-4 mr-2" /> Back to Chapter
                </Button>
                <Button onClick={onRetry}>
                    <RefreshCw className="w-4 h-4 mr-2" /> Retake Test
                </Button>
            </div>
        </div>
    );
}

/* eslint-disable react-hooks/purity */
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
    TrendingUp,
    TrendingDown,
    Calendar,
    Clock,
    Brain,
    Target,
    ChevronLeft,
    ChevronRight,
    BookOpen,
    CheckCircle2,
    Sparkles,
    Smile,
    Zap,
    AlertCircle
} from 'lucide-react';
import { generateWeeklyReport, WeeklyReportData, getWeeklySummaryText } from '@/lib/reports/WeeklyReportGenerator';

interface WeeklyProgressReportProps {
    onBack?: () => void;
}

export default function WeeklyProgressReport({ onBack }: WeeklyProgressReportProps) {
    const [weekOffset, setWeekOffset] = useState(0);
    const [report, setReport] = useState<WeeklyReportData | null>(null);

    useEffect(() => {
        setTimeout(() => {
            const data = generateWeeklyReport(weekOffset);
            setReport(data);
        }, 0);
    }, [weekOffset]);

    if (!report) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="animate-pulse space-y-4">
                    <div className="h-8 bg-muted rounded w-1/3"></div>
                    <div className="h-48 bg-muted rounded"></div>
                </div>
            </div>
        );
    }

    const hasData = report.pomodorosCompleted > 0 || report.flashcardsReviewed > 0 || report.mcqsAttempted > 0;

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Calendar className="h-6 w-6 text-indigo-600" />
                        Weekly Progress Report
                    </h1>
                    <p className="text-muted-foreground dark:text-muted-foreground">
                        Week {report.weekNumber} • {report.dateRange.start} to {report.dateRange.end}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setWeekOffset(prev => prev - 1)}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setWeekOffset(0)}
                        disabled={weekOffset === 0}
                    >
                        This Week
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setWeekOffset(prev => prev + 1)}
                        disabled={weekOffset >= 0}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* No Data State */}
            {!hasData && (
                <Card className="bg-muted border-border">
                    <CardContent className="p-8 text-center">
                        <AlertCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="text-lg font-semibold text-muted-foreground mb-2">No Data Yet</h3>
                        <p className="text-muted-foreground">
                            Complete some Pomodoro sessions, flashcard reviews, or MCQs to see your progress!
                        </p>
                    </CardContent>
                </Card>
            )}

            {hasData && (
                <>
                    {/* Summary Card */}
                    <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 shadow-xl">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold">Week Summary</h2>
                                <Badge className="bg-card/20 text-white border-0">
                                    {report.daysActive}/7 days active
                                </Badge>
                            </div>
                            <p className="text-indigo-100 mb-6">
                                {getWeeklySummaryText(report)}
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-card/10 rounded-xl p-4 text-center">
                                    <Clock className="h-6 w-6 mx-auto mb-2 text-indigo-200" />
                                    <div className="text-2xl font-bold">{Math.round(report.totalStudyMinutes / 60)}h</div>
                                    <div className="text-sm text-indigo-200">Study Time</div>
                                </div>
                                <div className="bg-card/10 rounded-xl p-4 text-center">
                                    <Target className="h-6 w-6 mx-auto mb-2 text-indigo-200" />
                                    <div className="text-2xl font-bold">{report.pomodorosCompleted}</div>
                                    <div className="text-sm text-indigo-200">Pomodoros</div>
                                </div>
                                <div className="bg-card/10 rounded-xl p-4 text-center">
                                    <Brain className="h-6 w-6 mx-auto mb-2 text-indigo-200" />
                                    <div className="text-2xl font-bold">{report.flashcardsReviewed}</div>
                                    <div className="text-sm text-indigo-200">Flashcards</div>
                                </div>
                                <div className="bg-card/10 rounded-xl p-4 text-center">
                                    <CheckCircle2 className="h-6 w-6 mx-auto mb-2 text-indigo-200" />
                                    <div className="text-2xl font-bold">{report.mcqAccuracy}%</div>
                                    <div className="text-sm text-indigo-200">MCQ Accuracy</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Performance Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Flashcard Performance */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <BookOpen className="h-5 w-5 text-blue-600" />
                                    Flashcard Performance
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>Retention Rate</span>
                                            <span className="font-bold text-blue-600">{report.flashcardRetention}%</span>
                                        </div>
                                        <Progress value={report.flashcardRetention} className="h-2" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-center">
                                            <div className="text-2xl font-bold text-blue-600">{report.flashcardsReviewed}</div>
                                            <div className="text-xs text-muted-foreground">Cards Reviewed</div>
                                        </div>
                                        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center">
                                            <div className="text-2xl font-bold text-green-600">{report.newCardsLearned}</div>
                                            <div className="text-xs text-muted-foreground">New Learned</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* MCQ Performance */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Target className="h-5 w-5 text-green-600" />
                                    MCQ Performance
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>Accuracy</span>
                                            <span className="font-bold text-green-600">{report.mcqAccuracy}%</span>
                                        </div>
                                        <Progress value={report.mcqAccuracy} className="h-2" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center">
                                            <div className="text-2xl font-bold text-green-600">{report.mcqsCorrect}</div>
                                            <div className="text-xs text-muted-foreground">Correct</div>
                                        </div>
                                        <div className="bg-muted rounded-lg p-3 text-center">
                                            <div className="text-2xl font-bold text-muted-foreground">{report.mcqsAttempted}</div>
                                            <div className="text-xs text-muted-foreground">Total Attempted</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Topic Insights */}
                    {(report.strongestTopic || report.weakestTopic) && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Sparkles className="h-5 w-5 text-amber-500" />
                                    Topic Insights
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {report.strongestTopic && (
                                        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 flex items-center gap-3">
                                            <TrendingUp className="h-8 w-8 text-green-600" />
                                            <div>
                                                <div className="text-sm text-green-600 font-medium">Strongest Topic</div>
                                                <div className="font-bold text-foreground">{report.strongestTopic}</div>
                                            </div>
                                        </div>
                                    )}
                                    {report.weakestTopic && (
                                        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 flex items-center gap-3">
                                            <TrendingDown className="h-8 w-8 text-orange-600" />
                                            <div>
                                                <div className="text-sm text-orange-600 font-medium">Needs Attention</div>
                                                <div className="font-bold text-foreground">{report.weakestTopic}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Mood & Energy (if available) */}
                    {(report.averageMood || report.averageEnergy) && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Smile className="h-5 w-5 text-pink-500" />
                                    Wellbeing
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    {report.averageMood && (
                                        <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4 text-center">
                                            <Smile className="h-8 w-8 mx-auto mb-2 text-pink-600" />
                                            <div className="text-2xl font-bold text-pink-600">{report.averageMood}/5</div>
                                            <div className="text-sm text-muted-foreground">Avg. Mood</div>
                                        </div>
                                    )}
                                    {report.averageEnergy && (
                                        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 text-center">
                                            <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                                            <div className="text-2xl font-bold text-yellow-600">{report.averageEnergy}/10</div>
                                            <div className="text-sm text-muted-foreground">Avg. Energy</div>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </>
            )}

            {/* Back Button */}
            {onBack && (
                <div className="flex justify-center pt-4">
                    <Button variant="outline" onClick={onBack}>
                        Back to Dashboard
                    </Button>
                </div>
            )}
        </div>
    );
}

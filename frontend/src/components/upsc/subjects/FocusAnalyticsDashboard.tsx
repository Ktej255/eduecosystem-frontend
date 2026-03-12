"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    BarChart3,
    Clock,
    BookOpen,
    Mic,
    Calendar,
    ChevronRight,
    Trophy,
    TrendingUp,
    FileText
} from "lucide-react";
import DetailedTestReport from "@/components/upsc/infrastructure/qa/DetailedTestReport";
import { FocusAnalyticsService, DashboardStats, TestHistoryItem } from "../infrastructure/analytics/FocusAnalyticsService";

export default function FocusAnalyticsDashboard() {
    const [selectedTestId, setSelectedTestId] = useState<number | null>(null);
    const [stats, setStats] = useState<DashboardStats>({
        flashcardsMastered: 0,
        flashcardsGrowth: 0,
        focusHours: 0,
        audioNotesRecorded: 0
    });
    const [recentTests, setRecentTests] = useState<TestHistoryItem[]>([]);

    useEffect(() => {
        // Load real stats
        const dashboardStats = FocusAnalyticsService.getDashboardStats();
        setStats(dashboardStats);

        const tests = FocusAnalyticsService.getRecentTests();
        setRecentTests(tests);
    }, []);

    // If a specific test is selected, show the detailed report
    if (selectedTestId) {
        // Fetch detailed result from service
        const detailedResult = FocusAnalyticsService.getTestDetails(selectedTestId);

        if (detailedResult) {
            return (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <DetailedTestReport
                        testResult={detailedResult}
                        mcqs={[]} // Question data is now embedded in detailedResult answers
                        onClose={() => setSelectedTestId(null)}
                    />
                </div>
            );
        } else {
            // Fallback if details not found (shouldn't happen if list is fresh)
            return (
                <div className="p-6 text-center">
                    <p className="text-red-500 mb-4">Error loading test details. Data might be missing.</p>
                    <Button onClick={() => setSelectedTestId(null)}>Go Back</Button>
                </div>
            );
        }
    }


    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 dark:border-blue-800 dark:bg-blue-900/10">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2 text-blue-600 dark:text-blue-400">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-sm">Flashcards Mastered</span>
                        </div>
                        <div className="flex items-end gap-2">
                            <div className="text-4xl font-bold text-foreground">{stats.flashcardsMastered}</div>
                            <div className="text-sm font-medium text-green-600 mb-1 flex items-center">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                +{stats.flashcardsGrowth}
                            </div>
                        </div>
                        <p className="text-xs text-blue-600/70 mt-2">Consistent daily growth</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 dark:border-purple-800 dark:bg-purple-900/10">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2 text-purple-600 dark:text-purple-400">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                <Clock className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-sm">Focus Hours</span>
                        </div>
                        <div className="text-4xl font-bold text-foreground">{stats.focusHours}h</div>
                        <p className="text-xs text-purple-600/70 mt-2">Across Pomodoro sessions</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 dark:border-amber-800 dark:bg-amber-900/10">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2 text-amber-600 dark:text-amber-400">
                            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                                <Mic className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-sm">Voice Notes</span>
                        </div>
                        <div className="text-4xl font-bold text-foreground">{stats.audioNotesRecorded}</div>
                        <p className="text-xs text-amber-600/70 mt-2">Recall practice sessions</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Tests List */}
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="w-5 h-5 text-muted-foreground" />
                            Recent Test Reports
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentTests.length === 0 && (
                                <div className="text-center text-muted-foreground py-8">
                                    No completed tests found via Pomodoro sessions yet.
                                </div>
                            )}
                            {recentTests.map((test) => (
                                <button
                                    key={test.id}
                                    onClick={() => setSelectedTestId(test.id)}
                                    className="w-full text-left bg-muted/50 hover:bg-muted dark:hover:bg-gray-800 p-4 rounded-xl border border-border transition-all flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${test.score >= 80 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {test.score}%
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">{test.title}</h4>
                                            <div className="text-xs text-muted-foreground flex items-center gap-2">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(test.date).toLocaleDateString()}
                                                <span>•</span>
                                                {test.totalQuestions} Questions
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Activity Feed / Insights */}
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-yellow-500" />
                            Learning Insights
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-0.5 h-full bg-muted" />
                                    <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0" />
                                </div>
                                <div className="pb-6">
                                    <p className="text-sm font-bold text-foreground">Polity Module Strength</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Your accuracy has improved by 15% this week.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-0.5 h-full bg-muted" />
                                    <div className="w-3 h-3 rounded-full bg-purple-500 flex-shrink-0" />
                                </div>
                                <div className="pb-6">
                                    <p className="text-sm font-bold text-foreground">Consistent Recall</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        You've completed Audio Recall for 5 consecutive days. Streak: 5 🔥
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-foreground">Areas to Improve</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Focus on logic-based questions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

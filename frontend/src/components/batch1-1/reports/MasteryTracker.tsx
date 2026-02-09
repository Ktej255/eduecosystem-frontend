import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getSubjectStats, SubjectStats } from '@/lib/report-persistence';
import { Trophy, AlertTriangle, Target, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface MasteryTrackerProps {
    subject: 'polity' | 'history' | 'geography' | 'economy' | 'environment' | 'science';
}

export default function MasteryTracker({ subject }: MasteryTrackerProps) {
    const [stats, setStats] = useState<SubjectStats | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                const data = getSubjectStats(subject);
                setStats(data);
            }, 0);
        }
    }, [subject]);

    if (!stats || stats.totalAttempts === 0) {
        return (
            <Card className="border-dashed border-2">
                <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                    <Target className="w-12 h-12 text-gray-300 mb-4" />
                    <p className="text-gray-500 font-medium">No data available yet</p>
                    <p className="text-sm text-gray-400">Complete tests to unlock mastery insights</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Overall Mastery Card */}
                <Card className="bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/20 dark:to-gray-950">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-indigo-500" />
                            Overall Mastery
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white">{stats.averageAccuracy}%</span>
                            <span className="text-sm text-gray-500 mb-1">avg. score</span>
                        </div>
                        <Progress value={stats.averageAccuracy} className="mt-4 h-2" />
                    </CardContent>
                </Card>

                {/* Questions Solved Card */}
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-emerald-500" />
                            Questions Solved
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white">{stats.totalQuestions}</span>
                            <span className="text-sm text-gray-500 mb-1">questions</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-4">{stats.totalAttempts} tests completed</p>
                    </CardContent>
                </Card>

                {/* Weak Areas Card */}
                <Card className="border-red-100 dark:border-red-900/20 bg-red-50/10">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-red-500 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" />
                            Areas for Improvement
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {stats.weakAreas.length > 0 ? (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {stats.weakAreas.slice(0, 3).map(chapterId => (
                                    <Badge key={chapterId} variant="outline" className="text-red-600 border-red-200 bg-red-50">
                                        Chapter {chapterId}
                                    </Badge>
                                ))}
                                {stats.weakAreas.length > 3 && (
                                    <span className="text-xs text-red-500 flex items-center">+{stats.weakAreas.length - 3} more</span>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 mt-2 text-green-600">
                                <Trophy className="w-4 h-4" />
                                <span className="text-sm font-medium">All clear! Good job.</span>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Detailed Breakdown */}
            <Card>
                <CardHeader>
                    <CardTitle>Chapter Breakdown</CardTitle>
                    <CardDescription>Your highest accuracy per chapter</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                        {Object.entries(stats.masteryByChapter).map(([chapterId, accuracy]) => (
                            <div key={chapterId} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium">Chapter {chapterId}</span>
                                    <span className={`font-bold ${accuracy >= 70 ? 'text-green-600' :
                                        accuracy >= 50 ? 'text-amber-600' : 'text-red-600'
                                        }`}>{accuracy}%</span>
                                </div>
                                <Progress
                                    value={accuracy}
                                    className={`h-2 ${accuracy >= 70 ? 'bg-green-100' :
                                        accuracy >= 50 ? 'bg-amber-100' : 'bg-red-100'
                                        }`}
                                />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

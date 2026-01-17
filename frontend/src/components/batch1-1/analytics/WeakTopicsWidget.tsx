"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
    AlertTriangle,
    TrendingUp,
    TrendingDown,
    Target,
    ChevronRight,
    BookOpen,
    RefreshCw
} from 'lucide-react';
import {
    analyzeWeakTopics,
    TopicPerformance,
    WeakTopicAnalysis,
    getPriorityColor,
    getRecommendationLabel
} from '@/lib/analytics/WeakTopicAnalyzer';
import Link from 'next/link';

interface WeakTopicsWidgetProps {
    compact?: boolean;
    onTopicClick?: (topicId: string) => void;
}

export default function WeakTopicsWidget({ compact = false, onTopicClick }: WeakTopicsWidgetProps) {
    const [analysis, setAnalysis] = useState<WeakTopicAnalysis | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const loadAnalysis = () => {
        setIsLoading(true);
        const data = analyzeWeakTopics();
        setAnalysis(data);
        setIsLoading(false);
    };

    useEffect(() => {
        loadAnalysis();
    }, []);

    if (isLoading) {
        return (
            <Card className="animate-pulse">
                <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                </CardContent>
            </Card>
        );
    }

    if (!analysis || analysis.totalTopicsAnalyzed === 0) {
        return (
            <Card className="bg-gray-50 dark:bg-gray-900">
                <CardContent className="p-6 text-center">
                    <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <h3 className="font-semibold text-gray-600 mb-2">No Data Yet</h3>
                    <p className="text-sm text-gray-500">
                        Complete some MCQs to see your weak topics analysis
                    </p>
                </CardContent>
            </Card>
        );
    }

    if (compact) {
        // Compact version for sidebar
        return (
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Weak Topics
                    </span>
                    <Badge variant="outline" className="text-xs">
                        {analysis.weakTopics.length} areas
                    </Badge>
                </div>
                {analysis.weakTopics.slice(0, 3).map(topic => (
                    <div
                        key={topic.topicId}
                        className="flex items-center justify-between p-2 bg-red-50 dark:bg-red-900/20 rounded-lg cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                        onClick={() => onTopicClick?.(topic.topicId)}
                    >
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate flex-1">
                            {topic.topicName}
                        </span>
                        <span className="text-xs font-bold text-red-600 ml-2">
                            {topic.accuracy}%
                        </span>
                    </div>
                ))}
            </div>
        );
    }

    // Full version
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="h-5 w-5 text-orange-500" />
                    Topic Analysis
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={loadAnalysis}>
                    <RefreshCw className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                {/* Overall Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{analysis.overallAccuracy}%</div>
                        <div className="text-xs text-gray-500">Overall Accuracy</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">{analysis.weakTopics.length}</div>
                        <div className="text-xs text-gray-500">Weak Topics</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{analysis.strongTopics.length}</div>
                        <div className="text-xs text-gray-500">Mastered</div>
                    </div>
                </div>

                {/* Weak Topics List */}
                {analysis.weakTopics.length > 0 && (
                    <div className="mb-6">
                        <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <TrendingDown className="h-4 w-4 text-red-500" />
                            Needs Improvement
                        </h4>
                        <div className="space-y-3">
                            {analysis.weakTopics.slice(0, 5).map(topic => (
                                <div
                                    key={topic.topicId}
                                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                                    onClick={() => onTopicClick?.(topic.topicId)}
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-medium text-sm text-gray-800 dark:text-gray-200">
                                                {topic.topicName}
                                            </span>
                                            <Badge className={`text-xs ${getPriorityColor(topic.practiceRecommendation)}`}>
                                                {topic.accuracy}%
                                            </Badge>
                                        </div>
                                        <Progress value={topic.accuracy} className="h-2" />
                                        <div className="flex items-center justify-between mt-1">
                                            <span className="text-[10px] text-gray-500">
                                                {topic.totalAttempts} attempts
                                            </span>
                                            <span className="text-[10px] text-orange-600 font-medium">
                                                {getRecommendationLabel(topic.practiceRecommendation)}
                                            </span>
                                        </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Strong Topics Preview */}
                {analysis.strongTopics.length > 0 && (
                    <div>
                        <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            Strong Areas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {analysis.strongTopics.slice(0, 5).map(topic => (
                                <Badge
                                    key={topic.topicId}
                                    className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                >
                                    {topic.topicName} ({topic.accuracy}%)
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Button */}
                {analysis.weakTopics.length > 0 && (
                    <div className="mt-6">
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                            <Target className="h-4 w-4 mr-2" />
                            Practice Weak Topics
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

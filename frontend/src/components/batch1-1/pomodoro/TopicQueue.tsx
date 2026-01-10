"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, ChevronDown, BookOpen } from "lucide-react";

export interface Topic {
    id: string;
    name: string;
    chapter: string;
    estimatedMinutes: number;
    isCompleted: boolean;
    polityTopicId?: number;  // Link to polity_95_progress for auto-tick
}

interface TopicQueueProps {
    topics: Topic[];
    onTopicComplete: (topicId: string) => void;
    visibleCount?: number;
}

export default function TopicQueue({
    topics,
    onTopicComplete,
    visibleCount = 3
}: TopicQueueProps) {
    const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

    // Filter remaining topics
    const remainingTopics = topics.filter(t => !completedIds.has(t.id) && !t.isCompleted);
    const visibleTopics = remainingTopics.slice(0, visibleCount);
    const hiddenCount = remainingTopics.length - visibleCount;

    const handleComplete = (topicId: string) => {
        setCompletedIds(prev => new Set(prev).add(topicId));
        onTopicComplete(topicId);
    };

    const completedCount = topics.filter(t => t.isCompleted || completedIds.has(t.id)).length;
    const progress = (completedCount / topics.length) * 100;

    return (
        <Card className="border-orange-200 dark:border-orange-800 bg-white dark:bg-gray-900">
            <CardContent className="p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-orange-500" />
                        Topics to Cover
                    </h3>
                    <span className="text-sm text-gray-500">
                        {completedCount}/{topics.length} done
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-4 overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Topic List */}
                <div className="space-y-2">
                    {visibleTopics.map((topic, index) => (
                        <div
                            key={topic.id}
                            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${index === 0
                                ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-300 dark:border-orange-700'
                                : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {index === 0 ? (
                                    <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold animate-pulse">
                                        1
                                    </div>
                                ) : (
                                    <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 flex items-center justify-center text-xs font-bold">
                                        {index + 1}
                                    </div>
                                )}
                                <div>
                                    <div className={`font-medium ${index === 0 ? 'text-orange-700 dark:text-orange-300' : 'text-gray-700 dark:text-gray-300'}`}>
                                        {topic.name}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {topic.chapter} • ~{topic.estimatedMinutes} min
                                    </div>
                                </div>
                            </div>

                            <Button
                                size="sm"
                                onClick={() => handleComplete(topic.id)}
                                className={`${index === 0
                                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                                    }`}
                            >
                                <CheckCircle2 className="h-4 w-4 mr-1" />
                                Done
                            </Button>
                        </div>
                    ))}

                    {/* Hidden Topics Indicator */}
                    {hiddenCount > 0 && (
                        <div className="flex items-center justify-center gap-2 py-2 text-sm text-gray-500">
                            <ChevronDown className="h-4 w-4" />
                            {hiddenCount} more topic{hiddenCount > 1 ? 's' : ''} below
                        </div>
                    )}

                    {/* All Done */}
                    {remainingTopics.length === 0 && (
                        <div className="text-center py-6">
                            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <CheckCircle2 className="h-8 w-8 text-green-500" />
                            </div>
                            <p className="font-semibold text-green-600 dark:text-green-400">
                                All topics completed! 🎉
                            </p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

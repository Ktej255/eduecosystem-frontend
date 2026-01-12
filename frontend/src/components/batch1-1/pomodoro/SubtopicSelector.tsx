"use client";

import React, { useState, useMemo } from 'react';
import { CheckCircle2, ChevronRight, BookOpen, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CHAPTER_SUBTOPICS, SubTopic } from '@/components/batch1/polity/data/polity-subtopics';

interface SubtopicSelectorProps {
    chapterIds: number[]; // Chapters to show subtopics for
    onSubmit: (selectedSubtopics: SubTopic[]) => void;
    cycleNumber: number;
    isConsolidation?: boolean; // Cycle 4 - show all previously completed
    previouslyCompleted?: SubTopic[];
}

export default function SubtopicSelector({
    chapterIds,
    onSubmit,
    cycleNumber,
    isConsolidation = false,
    previouslyCompleted = []
}: SubtopicSelectorProps) {
    const [selectedSubtopics, setSelectedSubtopics] = useState<SubTopic[]>([]);

    // Get all subtopics for the given chapters
    const availableSubtopics = useMemo(() => {
        if (isConsolidation) {
            // Cycle 4: Show all previously completed subtopics for review
            return previouslyCompleted;
        }

        const subtopics: SubTopic[] = [];
        chapterIds.forEach(chapterId => {
            const chapterSubtopics = CHAPTER_SUBTOPICS[chapterId] || [];
            subtopics.push(...chapterSubtopics);
        });
        return subtopics;
    }, [chapterIds, isConsolidation, previouslyCompleted]);

    // Group by chapter for display
    const groupedSubtopics = useMemo(() => {
        const groups: Record<number, { chapter: number; subtopics: SubTopic[] }> = {};

        availableSubtopics.forEach(subtopic => {
            const chapterId = parseInt(subtopic.id.split('.')[0]);
            if (!groups[chapterId]) {
                groups[chapterId] = { chapter: chapterId, subtopics: [] };
            }
            groups[chapterId].subtopics.push(subtopic);
        });

        return Object.values(groups);
    }, [availableSubtopics]);

    const toggleSubtopic = (subtopic: SubTopic) => {
        setSelectedSubtopics(prev => {
            const exists = prev.find(s => s.id === subtopic.id);
            if (exists) {
                return prev.filter(s => s.id !== subtopic.id);
            }
            return [...prev, subtopic];
        });
    };

    const selectAll = () => {
        setSelectedSubtopics(availableSubtopics);
    };

    const handleSubmit = () => {
        if (selectedSubtopics.length > 0) {
            onSubmit(selectedSubtopics);
        }
    };

    return (
        <div className="animate-in fade-in duration-300">
            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-200 dark:border-indigo-800">
                <CardContent className="p-6">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                            <Layers className="h-8 w-8 text-indigo-500" />
                        </div>
                        <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">
                            {isConsolidation
                                ? '🎯 Consolidation Review'
                                : `Cycle ${cycleNumber}: What did you cover?`}
                        </h2>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                            {isConsolidation
                                ? 'Review all subtopics from your last 3 cycles'
                                : 'Select the subtopics you studied in this 25-minute session'}
                        </p>
                    </div>

                    {/* Selection Stats */}
                    <div className="flex items-center justify-between mb-4 px-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {selectedSubtopics.length} of {availableSubtopics.length} selected
                        </span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={selectAll}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            Select All
                        </Button>
                    </div>

                    {/* Subtopics by Chapter */}
                    <div className="max-h-[400px] overflow-y-auto space-y-4 pr-2">
                        {groupedSubtopics.map(group => (
                            <div key={group.chapter} className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-2 mb-3 border-b pb-2 border-gray-100 dark:border-gray-800">
                                    <BookOpen className="h-4 w-4 text-indigo-500" />
                                    <span className="font-bold text-sm text-gray-800 dark:text-gray-200">
                                        Chapter {group.chapter}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {group.subtopics.map(subtopic => {
                                        const isSelected = selectedSubtopics.find(s => s.id === subtopic.id);
                                        return (
                                            <button
                                                key={subtopic.id}
                                                onClick={() => toggleSubtopic(subtopic)}
                                                className={`flex items-center gap-2 p-2 rounded-lg text-left text-sm transition-all ${isSelected
                                                        ? 'bg-indigo-100 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700 border-2'
                                                        : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                                                    }`}
                                            >
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isSelected
                                                        ? 'bg-indigo-500 text-white'
                                                        : 'bg-gray-200 dark:bg-gray-700'
                                                    }`}>
                                                    {isSelected && <CheckCircle2 className="h-3 w-3" />}
                                                </div>
                                                <span className={`flex-1 ${isSelected ? 'text-indigo-700 dark:text-indigo-300 font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
                                                    {subtopic.label}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 pt-4 border-t border-indigo-100 dark:border-indigo-800">
                        <Button
                            onClick={handleSubmit}
                            disabled={selectedSubtopics.length === 0}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg font-semibold"
                        >
                            Continue to Flashcards
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                        {selectedSubtopics.length === 0 && (
                            <p className="text-center text-xs text-amber-600 mt-2">
                                Please select at least one subtopic to continue
                            </p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

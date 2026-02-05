"use client";

import React, { useState, useMemo } from 'react';
import { CheckCircle2, ChevronRight, ChevronDown, BookOpen, Layers, Folder, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CHAPTER_SUBTOPICS, SubTopic } from '@/components/batch1/polity/data/polity-subtopics';
import { HISTORY_CHAPTER_SUBTOPICS } from '@/components/batch1/history/data/history-subtopics';
interface SubtopicSelectorProps {
    chapterIds: number[]; // Chapters to show subtopics for
    onSubmit: (selectedSubtopics: SubTopic[]) => void;
    cycleNumber: number;
    isConsolidation?: boolean;
    previouslyCompleted?: SubTopic[];
    subject?: 'polity' | 'history';
}

// Recursive component for rendering subtopics
const RecursiveSubtopicItem = ({
    subtopic,
    selectedIds,
    completedIds, // Receive completedIds
    onToggle,
    level = 0
}: {
    subtopic: SubTopic;
    selectedIds: Set<string>;
    completedIds?: Set<string>;
    onToggle: (subtopic: SubTopic) => void;
    level?: number;
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = subtopic.children && subtopic.children.length > 0;
    const isSelected = selectedIds.has(subtopic.id);
    const isCompleted = completedIds?.has(subtopic.id); // Check if completed

    const handleMainClick = () => {
        if (hasChildren) {
            setIsExpanded(!isExpanded);
        } else {
            onToggle(subtopic);
        }
    };

    return (
        <div className="select-none">
            <div
                className={`flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer ${isSelected
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700 border-2'
                    : 'bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-indigo-300'
                    }`}
                style={{ marginLeft: `${level * 16}px` }}
            >
                {/* Expand/Collapse Toggle for Parents */}
                {hasChildren && (
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsExpanded(!isExpanded);
                        }}
                        className="p-1 hover:bg-black/5 rounded-full"
                    >
                        {isExpanded ? <ChevronDown className="h-4 w-4 text-gray-500" /> : <ChevronRight className="h-4 w-4 text-gray-500" />}
                    </div>
                )}

                {/* Selection Checkbox (Always visible to allow selecting parent topics directly) */}
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggle(subtopic);
                    }}
                    className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${isSelected
                        ? 'bg-indigo-500 border-indigo-500 text-white'
                        : isCompleted
                            ? 'bg-green-100 border-green-500 text-green-600' // Green tick style
                            : 'bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-600'
                        }`}
                >
                    {isSelected && <CheckCircle2 className="h-3 w-3" />}
                    {isCompleted && !isSelected && <CheckCircle2 className="h-3 w-3" />}
                </div>

                {/* Label Area */}
                <div className="flex-1 flex items-center gap-2" onClick={handleMainClick}>
                    {hasChildren ? (
                        <Folder className={`h-4 w-4 ${isExpanded ? 'text-indigo-500' : 'text-gray-400'}`} />
                    ) : (
                        <FileText className="h-4 w-4 text-gray-400" />
                    )}
                    <span className={`text-sm ${isSelected ? 'text-indigo-700 dark:text-indigo-300 font-bold' : isCompleted ? 'text-green-700 line-through decoration-green-500/50' : 'text-gray-700 dark:text-gray-300'}`}>
                        {subtopic.label}
                    </span>
                    {isCompleted && <span className="text-[10px] bg-green-100 text-green-700 px-1.5 rounded-full font-bold">DONE</span>}
                </div>
            </div>

            {/* Render Children */}
            {hasChildren && isExpanded && (
                <div className="mt-1 space-y-1 border-l-2 border-indigo-100 dark:border-indigo-900/30 ml-[12px]">
                    {subtopic.children!.map(child => (
                        <RecursiveSubtopicItem
                            key={child.id}
                            subtopic={child}
                            selectedIds={selectedIds}
                            completedIds={completedIds}
                            onToggle={onToggle}
                            level={level + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default function SubtopicSelector({
    chapterIds,
    onSubmit,
    cycleNumber,
    isConsolidation = false,
    previouslyCompleted = [],
    subject = 'polity'
}: SubtopicSelectorProps) {
    const [selectedSubtopics, setSelectedSubtopics] = useState<SubTopic[]>([]);

    // Get all top-level subtopics for the given chapters
    const availableSubtopics = useMemo(() => {
        if (isConsolidation) return previouslyCompleted;

        const subtopics: SubTopic[] = [];
        const registry = subject === 'history' ? HISTORY_CHAPTER_SUBTOPICS : CHAPTER_SUBTOPICS;
        chapterIds.forEach(chapterId => {
            const chapterSubtopics = registry[chapterId] || [];
            subtopics.push(...chapterSubtopics);
        });
        return subtopics;
    }, [chapterIds, isConsolidation, previouslyCompleted]);

    // Derived Set for O(1) lookups
    const selectedIds = useMemo(() => new Set(selectedSubtopics.map(s => s.id)), [selectedSubtopics]);
    const completedIds = useMemo(() => new Set(previouslyCompleted.map(s => s.id)), [previouslyCompleted]);

    // Group by chapter for display header
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

    // Flatten all available subtopics recursively
    const allFlatSubtopics = useMemo(() => {
        const flatten = (items: SubTopic[]): SubTopic[] => {
            let result: SubTopic[] = [];
            items.forEach(item => {
                result.push(item);
                if (item.children) {
                    result = [...result, ...flatten(item.children)];
                }
            });
            return result;
        };
        return flatten(availableSubtopics);
    }, [availableSubtopics]);

    const isAllSelected = selectedSubtopics.length === allFlatSubtopics.length && allFlatSubtopics.length > 0;

    const toggleSubtopic = (subtopic: SubTopic) => {
        setSelectedSubtopics(prev => {
            const exists = prev.find(s => s.id === subtopic.id);
            if (exists) {
                return prev.filter(s => s.id !== subtopic.id);
            }
            return [...prev, subtopic];
        });
    };

    const handleToggleAll = () => {
        if (isAllSelected) {
            setSelectedSubtopics([]);
        } else {
            setSelectedSubtopics(allFlatSubtopics);
        }
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
                                : `Cycle ${cycleNumber}: What topics will you explore?`}
                        </h2>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                            {isConsolidation
                                ? 'Review all subtopics from your last 3 cycles'
                                : 'Select topics. Click folders to reveal deeper sub-topics.'}
                        </p>
                    </div>

                    {/* Selection Stats */}
                    <div className="flex items-center justify-between mb-4 px-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {selectedSubtopics.length} items selected
                        </span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleToggleAll}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            {isAllSelected ? "Deselect All" : "Select All Nested"}
                        </Button>
                    </div>

                    {/* Subtopics by Chapter */}
                    <div className="max-h-[500px] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                        {groupedSubtopics.map(group => (
                            <div key={group.chapter} className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm">
                                <div className="flex items-center gap-2 mb-3 border-b pb-2 border-gray-100 dark:border-gray-800">
                                    <BookOpen className="h-4 w-4 text-indigo-500" />
                                    <span className="font-bold text-sm text-gray-800 dark:text-gray-200">
                                        Chapter {group.chapter}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    {group.subtopics.map(subtopic => (
                                        <RecursiveSubtopicItem
                                            key={subtopic.id}
                                            subtopic={subtopic}
                                            selectedIds={selectedIds}
                                            completedIds={completedIds}
                                            onToggle={toggleSubtopic}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 pt-4 border-t border-indigo-100 dark:border-indigo-800">
                        <Button
                            onClick={handleSubmit}
                            disabled={selectedSubtopics.length === 0}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg font-semibold shadow-lg shadow-indigo-200"
                        >
                            Start Learning Session
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                        {selectedSubtopics.length === 0 && (
                            <p className="text-center text-xs text-amber-600 mt-2">
                                Please select at least one topic to continue
                            </p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

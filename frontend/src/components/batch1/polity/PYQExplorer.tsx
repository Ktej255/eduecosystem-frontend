"use client";

import React, { useState, useMemo } from 'react';
import { Filter, CheckCircle, XCircle, BookOpen, Calendar, Target, ChevronRight, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AnimatePresence, motion } from 'framer-motion';
import { recordMCQAttempt } from '@/lib/analytics/WeakTopicAnalyzer';
import { POLITY_PYQS } from './data/polity-pyqs';

export default function PYQExplorer() {
    const [selectedYears, setSelectedYears] = useState<number[]>([]);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

    const allYears = useMemo(() => [...new Set(POLITY_PYQS.map(q => q.year))].sort((a, b) => b - a), []);
    const allTopics = useMemo(() => [...new Set(POLITY_PYQS.map(q => q.topic))].sort(), []);

    const toggleYear = (year: number) => {
        setSelectedYears(prev => prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]);
    };

    const toggleTopic = (topic: string) => {
        setSelectedTopics(prev => prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]);
    };


    const handleAnswer = (pyqId: string | number, optionIndex: number) => {
        if (userAnswers[String(pyqId)] !== undefined) return; // Already answered

        setUserAnswers(prev => ({ ...prev, [String(pyqId)]: optionIndex }));

        // Track Performance
        const question = POLITY_PYQS.find(q => q.id === pyqId);
        if (question) {
            recordMCQAttempt(question.topic, question.topic, optionIndex === question.correctIndex);
        }
    };

    const filteredPYQs = POLITY_PYQS.filter(q => {
        const yearMatch = selectedYears.length === 0 || selectedYears.includes(q.year);
        const topicMatch = selectedTopics.length === 0 || selectedTopics.includes(q.topic);
        return yearMatch && topicMatch;
    });

    return (
        <div className="space-y-6">
            {/* Filters */}
            <div className="space-y-4">
                <div className="flex flex-wrap gap-2 items-center">
                    <Filter className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Years:</span>
                    {allYears.map(year => (
                        <Badge
                            key={year}
                            variant={selectedYears.includes(year) ? "default" : "outline"}
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => toggleYear(year)}
                        >
                            {year}
                        </Badge>
                    ))}
                    {selectedYears.length > 0 && (
                        <Button variant="ghost" size="sm" onClick={() => setSelectedYears([])} className="h-6 px-2 text-xs">
                            Clear
                        </Button>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-6">Topics:</span>
                    {allTopics.map(topic => (
                        <Badge
                            key={topic}
                            variant={selectedTopics.includes(topic) ? "secondary" : "outline"}
                            className={`cursor-pointer transition-colors ${selectedTopics.includes(topic) ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' : ''}`}
                            onClick={() => toggleTopic(topic)}
                        >
                            {topic}
                        </Badge>
                    ))}
                    {selectedTopics.length > 0 && (
                        <Button variant="ghost" size="sm" onClick={() => setSelectedTopics([])} className="h-6 px-2 text-xs">
                            Clear
                        </Button>
                    )}
                </div>
            </div>

            {/* Results */}
            <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                    {filteredPYQs.length === 0 ? (
                        <div className="text-center py-10 text-gray-500">
                            No questions found for the selected filters.
                        </div>
                    ) : (
                        filteredPYQs.map((pyq) => (
                            <PYQCard
                                key={pyq.id}
                                pyq={pyq}
                                userAnswer={userAnswers[String(pyq.id)]}
                                onAnswer={(idx) => handleAnswer(pyq.id, idx)}
                            />
                        ))
                    )}
                </div>
            </ScrollArea>
        </div>
    );
}

// Separate Component for Performance
function PYQCard({ pyq, userAnswer, onAnswer }: {
    pyq: PYQQuestion,
    userAnswer: number | undefined,
    onAnswer: (idx: number) => void
}) {
    const isAnswered = userAnswer !== undefined;
    const isCorrect = isAnswered && userAnswer === pyq.correctIndex;

    return (
        <Card className="border-l-4 border-l-indigo-500 dark:border-l-indigo-400">
            <CardContent className="p-4">
                {/* Meta */}
                <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-2">
                        <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800">
                            {pyq.year}
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-blue-200">
                            {pyq.topic}
                        </Badge>
                    </div>
                    {isAnswered && (
                        <Badge variant={isCorrect ? "default" : "destructive"} className={isCorrect ? "bg-green-600" : ""}>
                            {isCorrect ? "Correct" : "Incorrect"}
                        </Badge>
                    )}
                </div>

                {/* Question */}
                <p className="text-gray-800 dark:text-gray-100 font-medium mb-4 whitespace-pre-line">
                    {pyq.question}
                </p>

                {/* Options */}
                <div className="space-y-2">
                    {pyq.options.map((option, idx) => {
                        let btnClass = "justify-start h-auto py-3 px-4 w-full text-left whitespace-normal hover:bg-gray-100 dark:hover:bg-gray-800";

                        if (isAnswered) {
                            if (idx === pyq.correctIndex) {
                                btnClass = "justify-start h-auto w-full text-left whitespace-normal bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800 border";
                            } else if (idx === userAnswer && idx !== pyq.correctIndex) {
                                btnClass = "justify-start h-auto w-full text-left whitespace-normal bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800 border";
                            } else {
                                btnClass = "justify-start h-auto w-full text-left whitespace-normal opacity-50";
                            }
                        }

                        return (
                            <Button
                                key={idx}
                                variant="ghost"
                                className={btnClass}
                                onClick={() => !isAnswered && onAnswer(idx)}
                                disabled={isAnswered}
                            >
                                <span className="mr-3 font-mono text-gray-500 dark:text-gray-400">
                                    {String.fromCharCode(65 + idx)}.
                                </span>
                                {option}
                                {isAnswered && idx === pyq.correctIndex && (
                                    <CheckCircle2 className="ml-auto h-4 w-4 text-green-600" />
                                )}
                                {isAnswered && idx === userAnswer && idx !== pyq.correctIndex && (
                                    <XCircle className="ml-auto h-4 w-4 text-red-600" />
                                )}
                            </Button>
                        );
                    })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                    {isAnswered && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="overflow-hidden"
                        >
                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                                    <HelpCircle className="h-4 w-4" />
                                    Explanation
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {pyq.explanation}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}

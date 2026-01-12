"use client";

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubTopic } from '@/components/batch1/polity/data/polity-subtopics';

// Sample flashcard data structure - will be populated from actual data
interface Flashcard {
    id: string;
    subtopicId: string;
    question: string;
    answer: string;
}

// Temporary flashcard generator - in production, fetch from actual data files
function generateFlashcardsForSubtopics(subtopics: SubTopic[]): Flashcard[] {
    // This generates placeholder flashcards - will be replaced with actual content
    const flashcards: Flashcard[] = [];

    subtopics.forEach((subtopic, index) => {
        flashcards.push({
            id: `fc_${subtopic.id}_1`,
            subtopicId: subtopic.id,
            question: `What are the key points of "${subtopic.label}"?`,
            answer: `Key aspects of ${subtopic.label} include constitutional provisions, historical context, and practical applications. [Content to be added]`
        });

        // Add a second flashcard for each subtopic (for variety)
        if (index < 5) { // Limit total flashcards
            flashcards.push({
                id: `fc_${subtopic.id}_2`,
                subtopicId: subtopic.id,
                question: `Explain the significance of "${subtopic.label}" in Indian Polity.`,
                answer: `The significance of ${subtopic.label} lies in its constitutional importance and relevance to UPSC. [Content to be added]`
            });
        }
    });

    return flashcards.slice(0, 10); // Max 10 flashcards per cycle
}

interface CycleFlashcardsProps {
    selectedSubtopics: SubTopic[];
    onComplete: (viewedCount: number) => void;
    cycleNumber: number;
}

export default function CycleFlashcards({
    selectedSubtopics,
    onComplete,
    cycleNumber
}: CycleFlashcardsProps) {
    const flashcards = useMemo(() => generateFlashcardsForSubtopics(selectedSubtopics), [selectedSubtopics]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [viewedCards, setViewedCards] = useState<Set<string>>(new Set());

    const currentCard = flashcards[currentIndex];
    const progress = ((currentIndex + 1) / flashcards.length) * 100;

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        if (!viewedCards.has(currentCard.id)) {
            setViewedCards(prev => new Set([...prev, currentCard.id]));
        }
    };

    const handleNext = () => {
        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsFlipped(false);
        } else {
            // Complete flashcard session
            onComplete(viewedCards.size);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setIsFlipped(false);
        }
    };

    if (flashcards.length === 0) {
        return (
            <Card className="p-8 text-center">
                <p className="text-gray-500">No flashcards available for selected subtopics.</p>
                <Button onClick={() => onComplete(0)} className="mt-4">Continue</Button>
            </Card>
        );
    }

    return (
        <div className="animate-in fade-in duration-300">
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
                <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-amber-500" />
                            <span className="font-bold text-amber-700 dark:text-amber-300">
                                Cycle {cycleNumber} Flashcards
                            </span>
                        </div>
                        <span className="text-sm text-amber-600 dark:text-amber-400">
                            {currentIndex + 1} / {flashcards.length}
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-6 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Flashcard */}
                    <div
                        onClick={handleFlip}
                        className="cursor-pointer perspective-1000"
                    >
                        <div className={`relative min-h-[250px] transition-transform duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                            {/* Front (Question) */}
                            <div className={`absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl border-2 border-amber-200 dark:border-amber-800 p-6 shadow-lg backface-hidden ${isFlipped ? 'invisible' : ''}`}>
                                <div className="flex flex-col h-full">
                                    <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
                                        Question
                                    </span>
                                    <p className="flex-1 text-lg font-medium text-gray-800 dark:text-gray-200 flex items-center justify-center text-center">
                                        {currentCard.question}
                                    </p>
                                    <p className="text-xs text-amber-500 text-center mt-4">
                                        Tap to reveal answer
                                    </p>
                                </div>
                            </div>

                            {/* Back (Answer) */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl border-2 border-amber-300 dark:border-amber-700 p-6 shadow-lg backface-hidden rotate-y-180 ${!isFlipped ? 'invisible' : ''}`}>
                                <div className="flex flex-col h-full">
                                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
                                        Answer
                                    </span>
                                    <p className="flex-1 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {currentCard.answer}
                                    </p>
                                    <p className="text-xs text-amber-500 text-center mt-4">
                                        Tap to see question
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-amber-100 dark:border-amber-800">
                        <Button
                            variant="outline"
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className="border-amber-300"
                        >
                            <ChevronLeft className="h-4 w-4 mr-1" />
                            Previous
                        </Button>

                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                {viewedCards.size} reviewed
                            </span>
                        </div>

                        <Button
                            onClick={handleNext}
                            className="bg-amber-600 hover:bg-amber-700 text-white"
                        >
                            {currentIndex === flashcards.length - 1 ? 'Complete' : 'Next'}
                            {currentIndex < flashcards.length - 1 && <ChevronRight className="h-4 w-4 ml-1" />}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

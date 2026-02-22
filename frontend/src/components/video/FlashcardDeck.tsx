"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Flashcard {
    id: number;
    question: string;
    answer: string;
    explanation?: string;
}

interface FlashcardDeckProps {
    cards: Flashcard[];
    onReview: (cardId: number, grade: number) => void;
}

export function FlashcardDeck({ cards, onReview }: FlashcardDeckProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    if (cards.length === 0) {
        return (
            <div className="text-center py-12 text-muted-foreground bg-gray-900/50 rounded-xl border border-dashed border-gray-800">
                <RotateCcw className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>No cards due for review today!</p>
            </div>
        );
    }

    const currentCard = cards[currentIndex];

    const handleGrade = (grade: number) => {
        onReview(currentCard.id, grade);
        setIsFlipped(false);
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // Completed the deck
            setCurrentIndex(-1);
        }
    };

    if (currentIndex === -1) {
        return (
            <div className="text-center py-12 bg-gray-900/50 rounded-xl border border-gray-800">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Deck Completed!</h3>
                <p className="text-muted-foreground">Great job! You've reviewed all your cards.</p>
                <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setCurrentIndex(0)}
                >
                    Review Again
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-8 max-w-2xl mx-auto">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Card {currentIndex + 1} of {cards.length}</span>
                <div className="h-1 w-32 bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-cyan-500 transition-all duration-300"
                        style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* The Card */}
            <div
                className="relative h-80 perspective-1000 cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <motion.div
                    className="w-full h-full preserve-3d"
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                >
                    {/* Front */}
                    <Card className="absolute inset-0 w-full h-full backface-hidden bg-gray-900 border-gray-800 flex items-center justify-center p-8 text-center shadow-2xl">
                        <CardContent>
                            <h3 className="text-2xl font-medium text-white">{currentCard.question}</h3>
                            <p className="absolute bottom-4 left-0 right-0 text-xs text-muted-foreground uppercase tracking-widest">Click to flip</p>
                        </CardContent>
                    </Card>

                    {/* Back */}
                    <Card
                        className="absolute inset-0 w-full h-full backface-hidden bg-cyan-950/20 border-cyan-500/50 flex flex-col items-center justify-center p-8 text-center shadow-2xl overflow-y-auto"
                        style={{ transform: "rotateY(180deg)" }}
                    >
                        <CardContent className="w-full">
                            <h4 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-4">Answer</h4>
                            <p className="text-xl text-gray-100 mb-6">{currentCard.answer}</p>
                            {currentCard.explanation && (
                                <div className="text-sm text-muted-foreground bg-black/40 p-4 rounded-lg border border-gray-800">
                                    {currentCard.explanation}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            {/* Controls */}
            <AnimatePresence>
                {isFlipped && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="grid grid-cols-4 gap-4"
                    >
                        <Button
                            variant="outline"
                            className="group border-red-900/50 hover:bg-red-900/20 h-16 flex flex-col"
                            onClick={(e) => { e.stopPropagation(); handleGrade(1); }}
                        >
                            <span className="text-red-500 font-bold">Again</span>
                            <span className="text-[10px] text-muted-foreground group-hover:text-red-400">Mistake</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="group border-amber-900/50 hover:bg-amber-900/20 h-16 flex flex-col"
                            onClick={(e) => { e.stopPropagation(); handleGrade(2); }}
                        >
                            <span className="text-amber-500 font-bold">Hard</span>
                            <span className="text-[10px] text-muted-foreground group-hover:text-amber-400">Vague</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="group border-green-900/50 hover:bg-green-900/20 h-16 flex flex-col"
                            onClick={(e) => { e.stopPropagation(); handleGrade(3); }}
                        >
                            <span className="text-green-500 font-bold">Good</span>
                            <span className="text-[10px] text-muted-foreground group-hover:text-green-400">Recall</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="group border-cyan-900/50 hover:bg-cyan-900/20 h-16 flex flex-col"
                            onClick={(e) => { e.stopPropagation(); handleGrade(4); }}
                        >
                            <span className="text-cyan-400 font-bold">Easy</span>
                            <span className="text-[10px] text-muted-foreground group-hover:text-cyan-200">Instant</span>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

import { CheckCircle } from "lucide-react";

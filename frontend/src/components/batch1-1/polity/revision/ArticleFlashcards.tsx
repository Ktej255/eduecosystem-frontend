"use client";

import React, { useState } from 'react';
import { ARTICLE_MEMORY_DATA } from '../data/article-memory-data';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCw, CheckCircle2, XCircle, Brain, Lightbulb, RefreshCw } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

export default function ArticleFlashcards() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [masteredDetails, setMasteredDetails] = useState<number[]>([]);

    const currentCard = ARTICLE_MEMORY_DATA[currentIndex];
    const isMastered = masteredDetails.includes(currentIndex);
    const progress = Math.round((masteredDetails.length / ARTICLE_MEMORY_DATA.length) * 100);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNext = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % ARTICLE_MEMORY_DATA.length);
        }, 300);
    };

    const handleMarkMastered = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isMastered) {
            setMasteredDetails([...masteredDetails, currentIndex]);
        }
        handleNext();
    };

    const handleReset = () => {
        setMasteredDetails([]);
        setCurrentIndex(0);
        setIsFlipped(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 font-['Calibri'] flex flex-col items-center">
            {/* Header / Progress */}
            <div className="w-full mb-8 space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-600">
                    <span>Mastery Progress</span>
                    <span>{masteredDetails.length} / {ARTICLE_MEMORY_DATA.length} Articles</span>
                </div>
                <Progress value={progress} className="h-3 bg-slate-200" indicatorClassName="bg-green-500" />
            </div>

            {/* Flashcard Area */}
            <div className="relative w-full max-w-lg aspect-[4/3] perspective-1000 cursor-pointer group" onClick={handleFlip}>
                <motion.div
                    className="w-full h-full relative preserve-3d transition-transform duration-500 shadow-xl rounded-3xl"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                >
                    {/* FRONT SIDE */}
                    <div className="absolute w-full h-full backface-hidden bg-white border-2 border-slate-200 rounded-3xl flex flex-col items-center justify-center p-8 text-center shadow-sm group-hover:border-blue-300 group-hover:shadow-md transition-all">
                        <div className="absolute top-6 right-6 text-slate-400">
                            <RotateCw size={24} />
                        </div>
                        <span className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">
                            {currentCard.group}
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black text-slate-800 mb-2">
                            Art. {currentCard.articleNumber}
                        </h2>
                        <p className="text-slate-400 text-sm mt-4">Click to Flip</p>
                    </div>

                    {/* BACK SIDE */}
                    <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl flex flex-col items-center justify-center p-8 text-center rotate-y-180 shadow-lg">
                        <div className="absolute top-6 right-6 text-white/50">
                            <Brain size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                            {currentCard.provision}
                        </h3>
                        <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                            <div className="flex items-center justify-center gap-2 text-yellow-300 font-bold mb-1 text-sm uppercase">
                                <Lightbulb size={16} /> Mnemonic Hint
                            </div>
                            <p className="text-white/90 italic">"{currentCard.mnemonic}"</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Controls */}
            <div className="mt-10 flex gap-4">
                <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 border-red-200 text-red-600 hover:bg-red-50 font-bold"
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                >
                    <XCircle className="mr-2" /> Still Learning
                </Button>

                <Button
                    size="lg"
                    className="rounded-full px-8 bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg shadow-green-200"
                    onClick={handleMarkMastered}
                >
                    <CheckCircle2 className="mr-2" /> Got It!
                </Button>
            </div>

            {/* Reset */}
            {progress === 100 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-6 bg-green-50 rounded-2xl text-center border border-green-200"
                >
                    <h3 className="text-2xl font-bold text-green-800 mb-2">🎉 Memory Master!</h3>
                    <p className="text-green-600 mb-4">You have mastered all {ARTICLE_MEMORY_DATA.length} high-yield articles.</p>
                    <Button onClick={handleReset} variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
                        <RefreshCw className="mr-2 w-4 h-4" /> Reset Progress
                    </Button>
                </motion.div>
            )}

            <style jsx global>{`
                .perspective-1000 { perspective: 1000px; }
                .preserve-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(180deg); }
            `}</style>
        </div>
    );
}

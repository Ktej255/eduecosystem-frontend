"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    BookOpen, 
    ChevronLeft, 
    ChevronRight, 
    RotateCcw, 
    Lightbulb, 
    ArrowLeft,
    Layers
} from 'lucide-react';
import { environmentFlashcards } from '@/components/upsc/subjects/environment/data/flashcards/environment-flashcards';
import { ENVIRONMENT_MODULES } from '@/components/upsc/subjects/environment/data/environment-config';

function FlashcardContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const moduleParam = searchParams.get('module');
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [showHint, setShowHint] = useState(false);
    
    const filteredCards = moduleParam 
        ? environmentFlashcards.filter(c => c.moduleId === moduleParam)
        : environmentFlashcards;

    const currentCard = filteredCards[currentIndex];
    const totalCards = filteredCards.length;
    const progress = totalCards > 0 ? ((currentIndex + 1) / totalCards) * 100 : 0;

    const nextCard = () => {
        setIsFlipped(false);
        setShowHint(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % totalCards);
        }, 150);
    };

    const prevCard = () => {
        setIsFlipped(false);
        setShowHint(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
        }, 150);
    };

    const toggleFlip = () => setIsFlipped(!isFlipped);

    if (totalCards === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400">
                <Layers className="w-16 h-16 mb-4 opacity-20" />
                <p className="text-xl">No flashcards found for this module.</p>
                <button 
                    onClick={() => router.push('/student/upsc/environment')}
                    className="mt-4 text-emerald-400 hover:underline"
                >
                    Return to Course Overview
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <button 
                    onClick={() => router.back()}
                    className="flex items-center text-slate-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                </button>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-1">Interactive Flashcards</h1>
                    <p className="text-slate-400 text-sm">
                        {moduleParam ? `Module ${moduleParam}` : 'All Environment Modules'}
                    </p>
                </div>
                <div className="text-emerald-400 font-mono font-bold">
                    {currentIndex + 1} / {totalCards}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-slate-800 rounded-full mb-12 overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                />
            </div>

            {/* Card Container */}
            <div className="relative h-[400px] w-full perspective-1000 mb-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentCard.id + (isFlipped ? '-back' : '-front')}
                        initial={{ opacity: 0, rotateY: isFlipped ? -180 : 0, scale: 0.95 }}
                        animate={{ opacity: 1, rotateY: isFlipped ? -180 : 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
                        onClick={toggleFlip}
                        className={`absolute inset-0 w-full h-full cursor-pointer rounded-2xl border ${
                            isFlipped 
                                ? 'bg-slate-900 border-emerald-500/30' 
                                : 'bg-[#0f172a] border-slate-700/50 hover:border-emerald-500/50'
                        } shadow-2xl flex flex-col items-center justify-center p-8 text-center transition-shadow duration-300 hover:shadow-emerald-900/10`}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {isFlipped ? (
                            <div className="transform rotate-y-180 w-full">
                                <div className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 opacity-50">Answer</div>
                                <h2 className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                                    {currentCard.answer}
                                </h2>
                            </div>
                        ) : (
                            <div className="w-full">
                                <div className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-4">Question</div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    {currentCard.question}
                                </h2>
                                <p className="mt-8 text-slate-500 text-sm italic">Click to flip</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Hint Section */}
            <div className="min-h-[100px] mb-12 text-center">
                <AnimatePresence>
                    {showHint ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-xl flex items-start text-left max-w-2xl mx-auto"
                        >
                            <Lightbulb className="w-6 h-6 text-emerald-400 mr-4 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2">UPSC Hint</h4>
                                <p className="text-slate-300 leading-relaxed italic">
                                    {currentCard.hint}
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <button 
                            onClick={() => setShowHint(true)}
                            className="flex items-center justify-center mx-auto space-x-2 text-slate-400 hover:text-emerald-400 transition-colors group"
                        >
                            <Lightbulb className="w-5 h-5 group-hover:fill-emerald-400/20" />
                            <span>Show UPSC Hint</span>
                        </button>
                    )}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-6">
                <button 
                    onClick={prevCard}
                    className="p-4 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all transform active:scale-95"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button 
                    onClick={() => {
                        setIsFlipped(false);
                        setShowHint(false);
                    }}
                    className="flex items-center space-x-2 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset Card</span>
                </button>

                <button 
                    onClick={nextCard}
                    className="p-4 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-400 transition-all transform active:scale-95"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Footer Stats/Info */}
            <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2" />
                        <span>High-Yield</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-cyan-500 mr-2" />
                        <span>Recent Trends</span>
                    </div>
                </div>
                <p>© 2026 EduEcosystem • UPSC Environment Series</p>
            </div>

            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
}

export default function EnvironmentFlashcardsPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-slate-200">
            <Suspense fallback={
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full mb-4"
                    />
                    <p className="text-slate-400">Loading your knowledge deck...</p>
                </div>
            }>
                <FlashcardContent />
            </Suspense>
        </main>
    );
}

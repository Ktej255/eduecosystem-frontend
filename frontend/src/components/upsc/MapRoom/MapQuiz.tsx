"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Target, CheckCircle2, XCircle, RefreshCcw, Info, ChevronRight, Trophy, BookOpen, Clock } from 'lucide-react';
import { MAP_QUIZ_QUESTIONS, MapQuestion } from './data/map-quiz-data';

// Reuse the map point logic from IndiaMap but for quiz markers
interface QuizPoint {
    id: string;
    coordinates: { x: number; y: number };
}

const QUIZ_POINTS: QuizPoint[] = [
    { id: 'corbett', coordinates: { x: 38, y: 24 } },
    { id: 'kaziranga', coordinates: { x: 82, y: 34 } },
    { id: 'ranthambore', coordinates: { x: 28, y: 38 } },
    { id: 'gir', coordinates: { x: 14, y: 52 } },
    { id: 'silent-valley', coordinates: { x: 32, y: 88 } },
    { id: 'sunderbans', coordinates: { x: 70, y: 52 } },
    { id: 'kanha', coordinates: { x: 48, y: 52 } },
    { id: 'chilika', coordinates: { x: 65, y: 62 } },
    { id: 'loktak', coordinates: { x: 88, y: 40 } },
    { id: 'chota-nagpur', coordinates: { x: 58, y: 50 } }
];

export default function MapQuiz() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'feedback' | 'finished'>('idle');
    const [lastResult, setLastResult] = useState<{ isCorrect: boolean; explanation: string } | null>(null);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [timer, setTimer] = useState(0);

    const currentQuestion = MAP_QUIZ_QUESTIONS[currentIndex];

    useEffect(() => {
        let interval: any;
        if (gameState === 'playing') {
            interval = setInterval(() => setTimer(prev => prev + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [gameState]);

    const startQuiz = () => {
        setCurrentIndex(0);
        setScore(0);
        setTimer(0);
        setGameState('playing');
        setLastResult(null);
        setSelectedId(null);
    };

    const handleAnswer = (pointId: string) => {
        if (gameState !== 'playing') return;

        setSelectedId(pointId);
        const isCorrect = pointId === currentQuestion.correctPointId;
        
        if (isCorrect) setScore(prev => prev + 1);
        
        setLastResult({
            isCorrect,
            explanation: currentQuestion.explanation
        });
        setGameState('feedback');
    };

    const nextQuestion = () => {
        if (currentIndex < MAP_QUIZ_QUESTIONS.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setGameState('playing');
            setLastResult(null);
            setSelectedId(null);
        } else {
            setGameState('finished');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 h-full min-h-[600px] animate-in fade-in duration-700">
            {/* Map Interaction Area */}
            <div className="flex-1 bg-white dark:bg-[#050505] rounded-3xl border border-border overflow-hidden relative shadow-inner group">
                {/* Progress Overlay */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-4">
                    <div className="bg-card/80 dark:bg-[#111]/80 backdrop-blur-md border border-border px-4 py-2 rounded-2xl flex items-center gap-3">
                        <Target className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-black uppercase tracking-widest text-foreground">
                            Question {currentIndex + 1} / {MAP_QUIZ_QUESTIONS.length}
                        </span>
                    </div>
                    <div className="bg-card/80 dark:bg-[#111]/80 backdrop-blur-md border border-border px-4 py-2 rounded-2xl flex items-center gap-3">
                        <Clock className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-mono font-bold text-foreground">
                            {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
                        </span>
                    </div>
                </div>

                {/* India Outline SVG (Reused) */}
                <div className="absolute inset-0 flex items-center justify-center p-12 select-none pointer-events-none">
                    <svg 
                        viewBox="0 0 100 100" 
                        className="w-full h-full max-w-[500px] opacity-20 dark:opacity-30 text-gray-400 dark:text-orange-950/20"
                        fill="currentColor"
                    >
                        <path d="M 32,5 L 35,6 L 38,8 L 42,9 L 45,8 L 48,12 L 50,15 L 55,18 L 60,22 L 65,22 L 70,24 L 75,25 L 78,28 L 82,30 L 85,32 L 88,32 L 92,35 L 90,38 L 85,42 L 82,45 L 80,48 L 78,52 L 75,55 L 72,55 L 68,58 L 65,62 L 62,65 L 60,70 L 58,75 L 55,80 L 52,85 L 50,90 L 48,95 L 45,98 L 42,95 L 40,90 L 38,85 L 35,80 L 33,75 L 31,70 L 29,65 L 26,60 L 24,56 L 20,52 L 15,50 L 12,48 L 10,44 L 8,40 L 10,35 L 14,32 L 18,30 L 22,28 L 26,22 L 28,15 L 30,10 Z" />
                    </svg>
                </div>

                {/* Interactive Quiz Markers */}
                <div className="absolute inset-0 p-12">
                    <div className="relative w-full h-full">
                        {QUIZ_POINTS.map((point) => (
                            <motion.button
                                key={point.id}
                                disabled={gameState !== 'playing'}
                                className="absolute z-10 p-2 group/marker"
                                style={{ left: `${point.coordinates.x}%`, top: `${point.coordinates.y}%` }}
                                whileHover={{ scale: 1.3 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleAnswer(point.id)}
                            >
                                <div className={`w-4 h-4 rounded-full border-2 border-white dark:border-zinc-800 shadow-xl transition-all duration-300
                                    ${gameState === 'idle' ? 'bg-zinc-400 scale-50 opacity-20' : 
                                      gameState === 'playing' ? 'bg-blue-600 hover:bg-blue-400 animate-pulse' : 
                                      selectedId === point.id ? (lastResult?.isCorrect ? 'bg-emerald-500 scale-150' : 'bg-red-500 scale-150') :
                                      point.id === currentQuestion?.correctPointId && gameState === 'feedback' ? 'bg-emerald-500 scale-125 ring-4 ring-emerald-500/20' :
                                      'bg-muted opacity-40 scale-75'}`}
                                />
                                {gameState === 'playing' && (
                                    <div className="absolute inset-0 rounded-full animate-ping bg-blue-500/30" />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Final Score Overlay */}
                <AnimatePresence>
                    {gameState === 'finished' && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 z-50 bg-blue-600 flex flex-col items-center justify-center p-12 text-white text-center"
                        >
                            <Trophy className="w-24 h-24 mb-6 animate-bounce" />
                            <h2 className="text-5xl font-black font-serif mb-2 text-amber-300">Mission Accomplished</h2>
                            <p className="text-xl font-bold opacity-90 mb-8">You achieved a retention score of {score}/{MAP_QUIZ_QUESTIONS.length}</p>
                            <div className="flex gap-4">
                                <button 
                                    onClick={startQuiz}
                                    className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all"
                                >
                                    RETRY CHALLENGE
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Sidebar Details Area */}
            <div className="w-full lg:w-96 flex flex-col gap-6">
                <AnimatePresence mode="wait">
                    {gameState === 'idle' ? (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-card dark:bg-[#111] rounded-3xl border border-border p-8 text-center flex flex-col items-center justify-center h-full shadow-lg"
                        >
                            <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-500/20">
                                <Target className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-black text-foreground font-serif mb-4">India Map Challenge</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                                Test your spatial memory. Locate National Parks, Rivers, and Minerals on the map to defeat "Map Blindness."
                            </p>
                            <button 
                                onClick={startQuiz}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg border-b-4 border-blue-900 active:border-b-0 active:translate-y-1"
                            >
                                BEGIN SESSION
                            </button>
                        </motion.div>
                    ) : (gameState === 'playing' || gameState === 'feedback') ? (
                        <motion.div 
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-card dark:bg-[#111] rounded-3xl border border-border p-8 flex flex-col h-full shadow-xl"
                        >
                            <div className="mb-8">
                                <span className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em] mb-2 block">{currentQuestion.category}</span>
                                <h2 className="text-xl font-bold text-foreground font-serif leading-snug">
                                    {currentQuestion.question}
                                </h2>
                            </div>

                            <div className="flex-1">
                                {gameState === 'feedback' && (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className={`p-6 rounded-2xl border ${lastResult?.isCorrect ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-red-500/5 border-red-500/20'}`}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            {lastResult?.isCorrect ? (
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                            ) : (
                                                <XCircle className="w-5 h-5 text-red-500" />
                                            )}
                                            <span className={`text-xs font-black uppercase ${lastResult?.isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                                                {lastResult?.isCorrect ? 'Perfect Location' : 'Coordinates Mismatch'}
                                            </span>
                                        </div>
                                        <div className="text-[11px] text-muted-foreground leading-relaxed italic border-t border-border pt-4 mt-2">
                                            <Info className="w-3 h-3 inline mr-1 mb-0.5" />
                                            {lastResult?.explanation}
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {gameState === 'feedback' ? (
                                <button 
                                    onClick={nextQuestion}
                                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    NEXT TARGET <ChevronRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <div className="p-4 bg-muted/5 rounded-2xl border border-dashed border-border text-center">
                                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">
                                        Click on the map marker to answer
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-6 rounded-3xl text-white">
                    <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-blue-400" />
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-400">Preparation Tip</h4>
                    </div>
                    <p className="text-[11px] text-zinc-300 leading-relaxed">
                        Visual association helps in answering **Environment MCQs** faster. If you miss a location, try to remember its state neighbors.
                    </p>
                </div>
            </div>
        </div>
    );
}

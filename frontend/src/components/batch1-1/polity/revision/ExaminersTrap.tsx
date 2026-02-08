"use client";

import React, { useState } from 'react';
import { TRAP_DATA, TrapScenario } from '../data/trap-data';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, XCircle, ArrowRight, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExaminersTrap() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedSegment, setSelectedSegment] = useState<number | null>(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [feedback, setFeedback] = useState<'idle' | 'success' | 'error'>('idle');
    const [shake, setShake] = useState(false);

    const currentScenario = TRAP_DATA[currentIndex];

    const handleSegmentClick = (index: number) => {
        if (isRevealed) return;
        setSelectedSegment(index);

        if (index === currentScenario.trapIndex) {
            setFeedback('success');
            setIsRevealed(true);
        } else {
            setFeedback('error');
            setShake(true);
            setTimeout(() => {
                setFeedback('idle');
                setSelectedSegment(null);
                setShake(false);
            }, 800);
        }
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % TRAP_DATA.length);
        setIsRevealed(false);
        setSelectedSegment(null);
        setFeedback('idle');
    };

    return (
        <Card className="max-w-4xl mx-auto border-4 border-stone-800 bg-[#fffbeb] shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] overflow-hidden font-['Kalam']">
            <CardContent className="p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-stone-200">
                    <div className="flex items-center gap-3">
                        <div className="bg-stone-800 text-white p-2 rounded-lg">
                            <AlertCircle size={28} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-stone-800">The Examiner's Trap</h2>
                            <p className="text-stone-500 font-bold text-sm">Spot the subtle error in the statement</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <Badge className={`
                            text-sm px-3 py-1 font-black
                            ${currentScenario.severity === 'High' ? 'bg-red-100 text-red-800 border-red-200' :
                                currentScenario.severity === 'Medium' ? 'bg-orange-100 text-orange-800 border-orange-200' :
                                    'bg-blue-100 text-blue-800 border-blue-200'}
                        `}>
                            Level: {currentScenario.severity}
                        </Badge>
                        <span className="text-xs font-bold text-stone-400">
                            Trap {currentIndex + 1} of {TRAP_DATA.length}
                        </span>
                    </div>
                </div>

                {/* Main Interaction Area */}
                <div className="min-h-[200px] flex flex-col justify-center mb-8">
                    <div className="flex flex-wrap gap-3 text-xl md:text-2xl leading-relaxed justify-center">
                        {currentScenario.sentenceSegments.map((segment, index) => (
                            <motion.button
                                key={index}
                                onClick={() => handleSegmentClick(index)}
                                animate={shake && selectedSegment === index ? { x: [-5, 5, -5, 5, 0] } : {}}
                                transition={{ duration: 0.4 }}
                                className={`
                                    px-3 py-2 rounded-xl border-b-4 transition-all duration-200 font-serif
                                    ${selectedSegment === index && feedback === 'error'
                                        ? 'bg-red-100 border-red-500 text-red-900'
                                        : isRevealed && index === currentScenario.trapIndex
                                            ? 'bg-green-100 border-green-500 text-green-900 scale-105 font-bold shadow-sm'
                                            : isRevealed
                                                ? 'opacity-40 border-transparent cursor-default'
                                                : 'hover:bg-white hover:border-stone-400 border-transparent hover:shadow-sm active:scale-95'
                                    }
                                `}
                            >
                                {segment}
                            </motion.button>
                        ))}
                    </div>

                    {/* Error Feedback Message */}
                    {feedback === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 text-center text-red-600 font-black text-lg flex items-center justify-center gap-2"
                        >
                            <XCircle size={20} />
                            <span>That part is correct. Look closer!</span>
                        </motion.div>
                    )}
                </div>

                {/* Explanation Card (Revealed on Success) */}
                <AnimatePresence>
                    {isRevealed && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, scale: 0.95 }}
                            animate={{ opacity: 1, height: 'auto', scale: 1 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-white rounded-2xl border-2 border-stone-200 shadow-inner overflow-hidden"
                        >
                            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                                <div className="shrink-0 flex items-start justify-center">
                                    <div className="bg-green-100 text-green-700 p-4 rounded-full">
                                        <CheckCircle2 size={40} />
                                    </div>
                                </div>
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-black text-stone-400 uppercase tracking-widest">The Trap</span>
                                            <div className="h-[1px] bg-stone-100 flex-1"></div>
                                        </div>
                                        <p className="text-red-500 line-through text-lg font-serif opacity-70">
                                            "{currentScenario.sentenceSegments[currentScenario.trapIndex]}"
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-black text-stone-400 uppercase tracking-widest">The Reality</span>
                                            <div className="h-[1px] bg-stone-100 flex-1"></div>
                                        </div>
                                        <p className="text-green-700 text-2xl font-bold">
                                            "{currentScenario.correction}"
                                        </p>
                                    </div>

                                    <div className="bg-stone-50 p-4 rounded-xl border-l-4 border-stone-800 text-stone-700 italic">
                                        "{currentScenario.explanation}"
                                    </div>

                                    <div className="pt-4 flex justify-end">
                                        <Button
                                            onClick={handleNext}
                                            className="bg-stone-900 hover:bg-black text-white px-8 py-6 text-xl rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                                        >
                                            Next Trap <ArrowRight className="ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Instructions (Hidden when revealed) */}
                {!isRevealed && feedback === 'idle' && (
                    <div className="mt-12 text-center text-stone-400 font-bold text-sm animate-pulse">
                        Tap the suspicious phrase to catch the examiner!
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

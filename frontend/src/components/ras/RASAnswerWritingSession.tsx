"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, PenTool, CheckCircle, HelpCircle, FileText, ChevronRight, ChevronLeft, Eye, EyeOff, Globe } from "lucide-react";
import { RAS_MAINS_QUESTIONS, MainsQuestion } from "./data/ras-mains-questions";

export default function RASAnswerWritingSession({ onClose }: { onClose: () => void }) {
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState<"writing" | "review">("writing");

    const currentQ = RAS_MAINS_QUESTIONS[currentQIndex];

    // Reset on Question Change
    useEffect(() => {
        setAnswer("");
        setMode("writing");
        setIsActive(false);
        // Estimate time: 0.6 mins per mark roughly, or manual
        // 10 marks -> 7-8 mins. 5 marks -> 3-4 mins. 2 marks -> 1-2 mins.
        // Let's set a standard 10s per word speed approx? 
        // 100 words -> 1000s is too long.
        // Standard Estimate:
        // 10 Marks (100 words) -> 7 mins (420s)
        // 5 Marks (50 words) -> 4 mins (240s)
        // 2 Marks (15 words) -> 2 mins (120s)
        let duration = 300;
        if (currentQ.marks === 10) duration = 420;
        if (currentQ.marks === 5) duration = 240;
        if (currentQ.marks === 2) duration = 120;

        setTimeLeft(duration);
    }, [currentQIndex]);

    // Timer Logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isActive && timeLeft > 0 && mode === "writing") {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft, mode]);

    const formatTime = (s: number) => {
        const mins = Math.floor(s / 60);
        const secs = s % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const handleNext = () => {
        if (currentQIndex < RAS_MAINS_QUESTIONS.length - 1) {
            setCurrentQIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentQIndex > 0) {
            setCurrentQIndex(prev => prev - 1);
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col md:flex-row">
            {/* Left Panel: Question & Context */}
            <div className="w-full md:w-1/3 bg-slate-900 border-r border-white/10 p-6 md:p-8 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                    <button onClick={onClose} className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
                        <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                        onClick={() => setLang(lang === "en" ? "hi" : "en")}
                        className="flex items-center gap-2 px-3 py-1 rounded-full bg-card/5 border border-white/10 text-xs font-bold text-amber-500 hover:bg-card/10"
                    >
                        <Globe className="w-3 h-3" /> {lang === "en" ? "EN" : "HI"}
                    </button>
                </div>

                <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
                                {currentQ.paper}
                            </span>
                            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase tracking-widest border border-emerald-500/30">
                                {currentQ.marks} Marks
                            </span>
                            <span className="px-2 py-1 rounded bg-slate-700 text-slate-300 text-[10px] font-black uppercase tracking-widest border border-slate-600">
                                {currentQ.wordLimit} Words
                            </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-serif text-white leading-relaxed">
                            {lang === "en" ? currentQ.question.en : currentQ.question.hi}
                        </h2>
                    </div>

                    {/* Timer Card */}
                    <div className={`p-6 rounded-2xl border transition-all ${isActive ? "bg-amber-500/10 border-amber-500/50" : "bg-slate-800 border-white/5"
                        }`}>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Time Remaining</span>
                            <Timer className={`w-4 h-4 ${isActive ? "text-amber-500 animate-pulse" : "text-muted-foreground"}`} />
                        </div>
                        <div className="text-4xl font-black text-white tabular-nums">
                            {formatTime(timeLeft)}
                        </div>
                        <div className="mt-4 flex gap-2">
                            {!isActive ? (
                                <button
                                    onClick={() => setIsActive(true)}
                                    className="px-4 py-2 rounded-lg bg-amber-500 text-foreground text-sm font-bold w-full hover:bg-amber-400 transition-colors"
                                >
                                    Start Timer
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsActive(false)}
                                    className="px-4 py-2 rounded-lg bg-slate-700 text-white text-sm font-bold w-full hover:bg-slate-600 transition-colors"
                                >
                                    Pause
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mode Specific: Key Points */}
                    <AnimatePresence>
                        {mode === "review" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30"
                            >
                                <div className="flex items-center gap-2 mb-4 text-emerald-400">
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="font-bold text-sm uppercase tracking-widest">Model Key Points</span>
                                </div>
                                <ul className="space-y-2">
                                    {(lang === "en" ? currentQ.keyPoints.en : currentQ.keyPoints.hi).map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-emerald-100/80 leading-relaxed">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Navigation (Bottom Left) */}
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                    <button onClick={handlePrev} disabled={currentQIndex === 0} className="p-2 rounded-lg hover:bg-card/5 disabled:opacity-0">
                        <ChevronLeft className="w-6 h-6 text-muted-foreground" />
                    </button>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        Q{currentQIndex + 1} of {RAS_MAINS_QUESTIONS.length}
                    </span>
                    <button onClick={handleNext} disabled={currentQIndex === RAS_MAINS_QUESTIONS.length - 1} className="p-2 rounded-lg hover:bg-card/5 disabled:opacity-0">
                        <ChevronRight className="w-6 h-6 text-muted-foreground" />
                    </button>
                </div>
            </div>

            {/* Right Panel: Workspace */}
            <div className="w-full md:w-2/3 bg-slate-950 p-6 md:p-8 flex flex-col relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-500 opacity-20" />

                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <FileText className="w-5 h-5 text-indigo-400" />
                        Answer Sheet
                    </h3>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setMode(mode === "writing" ? "review" : "writing")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${mode === "review"
                                    ? "bg-emerald-500 text-foreground shadow-lg shadow-emerald-500/20"
                                    : "bg-card/5 text-muted-foreground border border-white/10 hover:text-white"
                                }`}
                        >
                            {mode === "writing" ? (
                                <>
                                    <Eye className="w-4 h-4" /> Compare Model Answer
                                </>
                            ) : (
                                <>
                                    <EyeOff className="w-4 h-4" /> Hide Model Answer
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <textarea
                        className="w-full h-full bg-slate-900/50 border border-white/10 rounded-xl p-6 text-lg text-slate-200 leading-8 resize-none focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-muted-foreground font-serif"
                        placeholder="Start typing your answer here..."
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        onFocus={() => !isActive && setIsActive(true)} // Auto-start timer on focus
                    />

                    {/* Word Count Indicator */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-bold text-muted-foreground">
                        {answer.split(/\s+/).filter(w => w.length > 0).length} Words
                    </div>
                </div>
            </div>
        </div>
    );
}

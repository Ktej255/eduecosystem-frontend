"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
    ScrollText, AlertTriangle, Clock, Target, ShieldAlert,
    Brain, ThumbsUp, ThumbsDown, ArrowRight, Gavel, FileSignature
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Simulation Logic Types ---
type TimelineEvent = {
    id: string;
    actor: 'Speaker' | 'Opposition' | 'President' | 'RajyaSabha' | 'FinanceMinister';
    message: string;
    isCritical?: boolean;
};

type ActionChoice = {
    id: string;
    text: string;
    isProcedurallyCorrect: 'yes' | 'no' | 'conditional';
    articleReference: string;
    feedback: string;
    consequenceEvent?: TimelineEvent;
};

// --- Core Scenario Data ---
const MONEY_BILL_CRISIS = {
    title: "The Financial Brink: Money Bill Crisis",
    context: "The Government has introduced the Finance Bill. The Opposition claims it contains non-financial provisions and challenges its classification as a Money Bill to force a Rajya Sabha blockade.",
    role: "Speaker of the Lok Sabha",
    objective: "Safeguard Article 110 procedures while preventing a constitutional deadlock.",
    timeLimitSeconds: 180, // 3 minutes pressure
    phases: [
        {
            id: "p1",
            situation: "The Finance Minister introduces the Bill. The Leader of Opposition instantly raises a Point of Order, declaring: 'This includes a tribunal setup mechanism! It violates Article 110. You cannot certify this as a Money Bill!'",
            choices: [
                {
                    id: "c1_wrong",
                    text: "Suspend the Opposition Leader for disrupting the house.",
                    isProcedurallyCorrect: "no" as const,
                    articleReference: "Article 110(3)",
                    feedback: "Dr. Ambedkar AI: Incorrect reflex. While you have disciplinary powers, you must first address the constitutional challenge regarding the Bill's classification."
                },
                {
                    id: "c1_right",
                    text: "Examine the Bill. If it contains ONLY matters in Art 110(1), certify it.",
                    isProcedurallyCorrect: "yes" as const,
                    articleReference: "Article 110(3)",
                    feedback: "Dr. Ambedkar AI: Excellent. Under Article 110(3), the decision of the Speaker as to whether a Bill is a Money Bill is final.",
                    consequenceEvent: {
                        id: "e1", actor: "Speaker" as const, message: "After review, the Speaker officially endorses the certificate."
                    }
                },
                {
                    id: "c1_trap",
                    text: "Send it to a Joint Committee for consensus.",
                    isProcedurallyCorrect: "no" as const,
                    articleReference: "Article 108",
                    feedback: "Dr. Ambedkar AI: Fatal Error! Article 108 explicitly states there can be NO Joint Sitting for a Money Bill."
                }
            ]
        },
        {
            id: "p2",
            situation: "You certified it. It passes the Lok Sabha and goes to the Rajya Sabha. 14 days pass, and the Rajya Sabha returns it with 3 major 'recommendations' to alter the tax brackets.",
            choices: [
                {
                    id: "c2_wrong",
                    text: "The Bill must go back to the President for a tie-breaker.",
                    isProcedurallyCorrect: "no" as const,
                    articleReference: "Article 109",
                    feedback: "Dr. Ambedkar AI: No. The President does not resolve deadlocks for Money Bills."
                },
                {
                    id: "c2_right",
                    text: "Ignore the recommendations and declare the Bill passed by both Houses.",
                    isProcedurallyCorrect: "yes" as const,
                    articleReference: "Article 109(4)",
                    feedback: "Dr. Ambedkar AI: Correct. If Lok Sabha doesn't accept Rajya Sabha's recommendations, it's deemed passed in its original form.",
                    consequenceEvent: {
                        id: "e2", actor: "RajyaSabha" as const, message: "Rajya Sabha recommendations rejected. Bill deemed passed."
                    }
                }
            ]
        },
        {
            id: "p3",
            situation: "The Bill reaches the President for Assent. The President feels the tax burden is too high on the middle class.",
            choices: [
                {
                    id: "c3_trap",
                    text: "The President uses Suspensive Veto and returns it to Parliament.",
                    isProcedurallyCorrect: "no" as const,
                    articleReference: "Article 111",
                    feedback: "Dr. Ambedkar AI: Procedural Failure! The President CANNOT return a Money Bill for reconsideration under Article 111."
                },
                {
                    id: "c3_right",
                    text: "Inform the President they must either give or withhold assent, but cannot return it.",
                    isProcedurallyCorrect: "yes" as const,
                    articleReference: "Article 111",
                    feedback: "Dr. Ambedkar AI: Flawless execution. A Money Bill is introduced with the President's prior recommendation, hence they cannot return it.",
                    consequenceEvent: {
                        id: "e3", actor: "President" as const, message: "President grants Assent. The Financial Crisis is averted."
                    }
                }
            ]
        }
    ]
};

export default function ConstitutionalSimulationEngine() {
    const [isStarted, setIsStarted] = useState(false);
    const [activePhaseIndex, setActivePhaseIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(MONEY_BILL_CRISIS.timeLimitSeconds);
    const [timeline, setTimeline] = useState<TimelineEvent[]>([]);
    const [aiFeedback, setAiFeedback] = useState<{ text: string, type: 'success' | 'error' | null }>({ text: '', type: null });
    const [gameOver, setGameOver] = useState<'won' | 'lost' | 'timeout' | null>(null);

    // Timer Logic
    useEffect(() => {
        if (isStarted && !gameOver && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0 && !gameOver) {
            setGameOver('timeout');
        }
    }, [isStarted, timeLeft, gameOver]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const startGame = () => {
        setIsStarted(true);
        setTimeline([{
            id: 'init',
            actor: 'Speaker',
            message: "Simulation Initiated: You have assumed the Chair."
        }]);
    };

    const handleChoice = (choice: ActionChoice) => {
        // Record action to timeline
        const actionEvent: TimelineEvent = {
            id: Date.now().toString(),
            actor: 'Speaker',
            message: `Decision: ${choice.text}`
        };

        setTimeline(prev => [...prev, actionEvent]);

        // Evaluate
        if (choice.isProcedurallyCorrect === 'yes') {
            setAiFeedback({ text: choice.feedback, type: 'success' });

            if (choice.consequenceEvent) {
                setTimeout(() => {
                    setTimeline(prev => [...prev, choice.consequenceEvent!]);
                }, 1000);
            }

            // Progress Phase
            setTimeout(() => {
                if (activePhaseIndex < MONEY_BILL_CRISIS.phases.length - 1) {
                    setActivePhaseIndex(prev => prev + 1);
                    setAiFeedback({ text: '', type: null });
                } else {
                    setGameOver('won');
                }
            }, 3000);

        } else {
            setAiFeedback({ text: choice.feedback, type: 'error' });
            setGameOver('lost');
        }
    };

    const resetSimulation = () => {
        setIsStarted(false);
        setActivePhaseIndex(0);
        setTimeLeft(MONEY_BILL_CRISIS.timeLimitSeconds);
        setTimeline([]);
        setAiFeedback({ text: '', type: null });
        setGameOver(null);
    };

    if (!isStarted) {
        return (
            <div className="max-w-4xl mx-auto p-8 font-['Calibri'] relative overflow-hidden bg-slate-950 rounded-3xl border border-slate-800 text-slate-100">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 opacity-20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-600 opacity-10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                    <div className="w-20 h-20 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                        <Gavel className="w-10 h-10 text-indigo-400" />
                    </div>

                    <div>
                        <Badge variant="outline" className="text-indigo-400 border-indigo-400/30 bg-indigo-400/10 mb-4 px-3 py-1 text-xs">
                            IMMERSIVE SIMULATION
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                            {MONEY_BILL_CRISIS.title}
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            {MONEY_BILL_CRISIS.context}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg mt-8 text-left">
                        <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl">
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Your Role</p>
                            <p className="text-indigo-300 font-semibold">{MONEY_BILL_CRISIS.role}</p>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl flex justify-between items-center">
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Time Limit</p>
                                <p className="text-rose-400 font-semibold font-mono">3:00 Minutes</p>
                            </div>
                            <Clock className="w-6 h-6 text-rose-400/50" />
                        </div>
                    </div>

                    <Button
                        onClick={startGame}
                        size="lg"
                        className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-6 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all hover:scale-105"
                    >
                        Assume the Chair <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        );
    }

    const currentPhase = MONEY_BILL_CRISIS.phases[activePhaseIndex];

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 font-['Calibri'] relative h-[800px]">
            {/* Left Column: AI & Timber */}
            <div className="lg:col-span-1 flex flex-col gap-6">
                {/* Timer Board */}
                <div className="bg-slate-950 border border-rose-900/50 rounded-3xl p-6 shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(225,29,72,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[pulse_4s_linear_infinite]"></div>
                    <div className="flex justify-between items-center relative z-10">
                        <div className="flex bg-rose-950/40 text-rose-400 px-3 py-1 rounded-full border border-rose-900/50 items-center gap-2">
                            <Clock className="w-4 h-4 animate-pulse" />
                            <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
                        </div>
                        <Badge variant="outline" className="border-indigo-500/30 text-indigo-400 bg-indigo-950/30">
                            Phase {activePhaseIndex + 1}/{MONEY_BILL_CRISIS.phases.length}
                        </Badge>
                    </div>
                    <Progress value={(timeLeft / MONEY_BILL_CRISIS.timeLimitSeconds) * 100} className="h-1.5 mt-4 bg-slate-800" indicatorClassName="bg-rose-500" />
                </div>

                {/* AI Dr Ambedkar Terminal */}
                <div className="flex-1 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                        <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center">
                            <Brain className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-slate-200 font-bold leading-none">Dr. Ambedkar AI</h3>
                            <span className="text-xs text-cyan-600 font-mono tracking-wider uppercase">Constitutional Override Active</span>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                        <AnimatePresence>
                            {aiFeedback.text ? (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`p-4 rounded-xl border ${aiFeedback.type === 'error'
                                            ? 'bg-rose-950/20 border-rose-900 text-rose-300'
                                            : 'bg-emerald-950/20 border-emerald-900 text-emerald-300'
                                        }`}
                                >
                                    <p className="text-sm leading-relaxed font-mono">
                                        {'>'} {aiFeedback.text}
                                    </p>
                                </motion.div>
                            ) : (
                                <div className="text-slate-600 font-mono text-sm">
                                    {'>'} Monitoring procedural compliance...
                                    <br />
                                    {'>'} Awaiting Speaker's decision...
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Right Column: Main Play Area */}
            <div className="lg:col-span-2 flex flex-col gap-6">

                {/* Situation Board */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl relative overflow-hidden min-h-[200px]">
                    <ShieldAlert className="absolute -bottom-10 -right-10 w-48 h-48 text-slate-800/30 pointer-events-none" />

                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Current Situation</h2>
                    <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium relative z-10">
                        {currentPhase.situation}
                    </p>
                </div>

                {/* Interaction Terminal */}
                <div className="flex-1 bg-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col">
                    <h3 className="text-sm font-bold text-indigo-400 mb-6 flex items-center gap-2 uppercase tracking-wide">
                        <FileSignature className="w-4 h-4" /> Procedural Action Required
                    </h3>

                    {gameOver ? (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
                        >
                            {gameOver === 'won' && (
                                <>
                                    <div className="w-24 h-24 bg-emerald-950 rounded-full flex items-center justify-center border-4 border-emerald-900">
                                        <ThumbsUp className="w-12 h-12 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black text-emerald-400 mb-2">Crisis Averted</h2>
                                        <p className="text-slate-400">You successfully defended the constitutional procedure.</p>
                                    </div>
                                </>
                            )}

                            {(gameOver === 'lost' || gameOver === 'timeout') && (
                                <>
                                    <div className="w-24 h-24 bg-rose-950 rounded-full flex items-center justify-center border-4 border-rose-900">
                                        {gameOver === 'timeout' ? <Clock className="w-12 h-12 text-rose-400" /> : <ThumbsDown className="w-12 h-12 text-rose-400" />}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black text-rose-400 mb-2">
                                            {gameOver === 'timeout' ? 'Time Expired' : 'Constitutional Violation'}
                                        </h2>
                                        <p className="text-slate-400">Your ruling was challenged in the Supreme Court and struck down.</p>
                                    </div>
                                </>
                            )}

                            <Button
                                onClick={resetSimulation}
                                variant="outline"
                                className="border-slate-700 text-slate-300 hover:bg-slate-800"
                            >
                                Re-simulate Scenario
                            </Button>
                        </motion.div>
                    ) : (
                        <div className="space-y-4 flex-1">
                            {currentPhase.choices.map((choice, idx) => (
                                <button
                                    key={choice.id}
                                    onClick={() => handleChoice(choice)}
                                    // Disable other buttons if feedback is currently showing (processing)
                                    disabled={aiFeedback.type !== null}
                                    className="w-full text-left p-5 rounded-2xl bg-slate-900 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-500/50 transition-all group flex items-start gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        {String.fromCharCode(65 + idx)}
                                    </div>
                                    <div>
                                        <p className="text-slate-200 font-medium group-hover:text-indigo-200 transition-colors">
                                            {choice.text}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Lock, CheckCircle, Clock, Share2, Zap, Play, Pause, ChevronDown, ChevronUp, AlertCircle, RefreshCw, Music, Volume2, Wind, CloudRain, Star } from "lucide-react";
import { QuickRecallModal } from "./QuickRecallModal";
import { AnimatePresence } from "framer-motion";
import { calculateAdaptiveXP } from "@/lib/gamification/xp-engine";

interface SlotTask {
    slot_id: string;
    time_label: string;
    subject: string;
    topic: string;
    description: string;
    duration_minutes: number;
    is_locked: boolean;
    is_completed: boolean;
    required_slot_id?: string;
    action_type: string;
    srs_stability?: number; // 0-30+
    srs_due_count?: number; // 0+
    suggestion?: {
        type: string;
        reason: string;
        suggested_topic: string;
    };
}

interface GlassCardProps {
    task: SlotTask;
    onStartFocus: (slotId: string) => void;
    onComplete: (slotId: string) => void;
    isActive: boolean;
}



export function GlassCard({ task, onStartFocus, onComplete, isActive }: GlassCardProps) {
    const totalSeconds = task.duration_minutes * 60;
    const [timeLeft, setTimeLeft] = useState(totalSeconds);
    const [timerRunning, setTimerRunning] = useState(false);
    const [showMicroPlan, setShowMicroPlan] = useState(false);
    const [showRecall, setShowRecall] = useState(false);
    const [localTask, setLocalTask] = useState(task);
    const [ambience, setAmbience] = useState<"off" | "lofi" | "noise" | "rain">("off");
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const AMBIENCE_URLS = {
        lofi: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Mock Lofi
        noise: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Mock White Noise
        rain: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", // Mock Rain
    };
    const [showExtensions, setShowExtensions] = useState(false);

    // Show extensions when time is less than 2 minutes
    useEffect(() => {
        if (timeLeft > 0 && timeLeft <= 120) {
            setShowExtensions(true);
        } else {
            setShowExtensions(false);
        }
    }, [timeLeft]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timerRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setTimerRunning(false);
            onComplete(task.slot_id);
        }
        return () => clearInterval(interval);
    }, [timerRunning, timeLeft, onComplete, task.slot_id]);

    useEffect(() => {
        if (timerRunning && ambience !== "off") {
            if (!audioRef.current) {
                audioRef.current = new Audio(AMBIENCE_URLS[ambience as keyof typeof AMBIENCE_URLS]);
                audioRef.current.loop = true;
                audioRef.current.volume = 0.3;
            } else {
                audioRef.current.src = AMBIENCE_URLS[ambience as keyof typeof AMBIENCE_URLS];
            }
            audioRef.current.play().catch(e => console.log("Audio play blocked", e));
        } else {
            audioRef.current?.pause();
        }
    }, [timerRunning, ambience]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    const progress = (timeLeft / totalSeconds) * 100;

    const extendTimer = (minutes: number) => {
        setTimeLeft(prev => prev + minutes * 60);
        setShowExtensions(false);
    };

    const getCardStyle = () => {
        if (task.is_locked) return "opacity-40 pointer-events-none grayscale blur-[1px]";
        if (isActive) return "border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.15)] bg-blue-500/[0.03]";
        return "border-white/10 hover:border-blue-400/30 hover:bg-card/[0.02]";
    };

    const getBadgeStyle = () => {
        switch (task.action_type) {
            case "revision": return "from-yellow-400 to-orange-500 text-yellow-950";
            case "reading": return "from-green-400 to-emerald-600 text-green-950";
            case "practice": return "from-purple-400 to-indigo-600 text-purple-950 text-white";
            default: return "from-gray-400 to-gray-600 text-white";
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`relative p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500 overflow-hidden group ${getCardStyle()}`}
        >
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-[5rem] -mr-4 -mt-4" />

            {/* Badge */}
            <div className={`absolute top-6 right-8 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg bg-gradient-to-r ${getBadgeStyle()}`}>
                {task.action_type}
            </div>

            {/* Predictive Suggestion Badge - Relative Flow */}
            {localTask.suggestion && (
                <div className="relative mt-8 mb-6 bg-blue-500/10 border border-blue-500/30 p-3 rounded-2xl flex items-center justify-between gap-3 animate-pulse group/suggest">
                    <div className="flex items-center gap-3">
                        <AlertCircle size={16} className="text-blue-400 shrink-0" />
                        <div>
                            <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Predictive Suggestion</p>
                            <p className="text-[10px] font-bold text-white leading-tight">Swap for: {localTask.suggestion.suggested_topic}</p>
                        </div>
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLocalTask(prev => ({
                                ...prev,
                                topic: prev.suggestion?.suggested_topic || prev.topic,
                                description: `Tactical Pivot: Focusing on ${prev.suggestion?.suggested_topic} based on vulnerability analysis.`,
                                suggestion: undefined
                            }));
                        }}
                        className="px-3 py-1 bg-blue-500 hover:bg-blue-400 text-white text-[9px] font-black uppercase rounded-lg transition-all opacity-0 group-hover/suggest:opacity-100"
                    >
                        Accept Swap
                    </button>
                </div>
            )}

            {/* Due Badge */}
            {localTask.srs_due_count && localTask.srs_due_count > 0 ? (
                <div className="absolute top-14 right-8 bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-md animate-bounce shadow-lg shadow-red-500/20">
                    {localTask.srs_due_count} Cards Due
                </div>
            ) : null}

            <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                    <Clock size={14} className="text-muted-foreground" />
                    <span className="text-muted-foreground text-[10px] font-black tracking-widest uppercase">{localTask.time_label}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">{localTask.subject}</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <p className="text-blue-200/60 text-sm font-bold tracking-tight">{localTask.topic}</p>

                    {/* XP Boost Indicator (Moved Here) */}
                    {!localTask.is_completed && !localTask.is_locked && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 shadow-sm transition-all hover:bg-yellow-500/20 cursor-help group/xp">
                            <Star size={10} className="text-yellow-400 fill-yellow-400 animate-pulse" />
                            <span className="text-[9px] font-black text-yellow-400 uppercase tracking-tighter">
                                +{calculateAdaptiveXP(25, localTask.srs_stability, !!localTask.suggestion)} XP
                            </span>
                            {localTask.srs_stability && localTask.srs_stability < 3 && (
                                <span className="text-[8px] font-bold text-yellow-500/60 ml-0.5">(2x)</span>
                            )}
                        </div>
                    )}

                    {/* Retention Bar Indicator */}
                    {localTask.srs_stability !== undefined && (
                        <div className="flex flex-col gap-1 w-20">
                            <div className="flex justify-between items-center px-0.5">
                                <Zap size={8} className={localTask.srs_stability > 20 ? "text-yellow-400" : "text-blue-400"} />
                                <span className="text-[8px] font-black text-blue-300 uppercase tracking-tighter">{localTask.srs_stability.toFixed(1)}d</span>
                            </div>
                            <div className="h-1 w-full bg-card/5 rounded-full overflow-hidden border border-white/5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min(100, (localTask.srs_stability / 30) * 100)}%` }}
                                    className={`h-full ${localTask.srs_stability > 20 ? 'bg-yellow-400/50' : 'bg-blue-400/50'}`}
                                />
                            </div>
                        </div>
                    )}

                    {/* Recall Trigger */}
                    {!localTask.is_completed && !localTask.is_locked && (
                        <button
                            onClick={() => setShowRecall(true)}
                            className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition-all text-[9px] font-black uppercase tracking-tighter"
                        >
                            <RefreshCw size={10} /> Recall
                        </button>
                    )}
                </div>
            </div>

            <p className="text-muted-foreground text-xs font-medium leading-relaxed mb-8 h-10 overflow-hidden line-clamp-2 italic">
                "{localTask.description}"
            </p>

            {/* Timer Section */}
            <div className="flex items-center justify-between relative">
                <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="28" cy="28" r="24"
                                stroke="currentColor" strokeWidth="3"
                                fill="transparent" className="text-white/5"
                            />
                            <motion.circle
                                cx="28" cy="28" r="24"
                                stroke="currentColor" strokeWidth="3"
                                fill="transparent"
                                className={`${timerRunning ? 'text-blue-400' : 'text-muted-foreground'} transition-all duration-1000 ease-linear`}
                                strokeDasharray={2 * Math.PI * 24}
                                strokeDashoffset={2 * Math.PI * 24 * (1 - progress / 100)}
                                strokeLinecap="round"
                                animate={timerRunning ? {
                                    strokeWidth: [3, 4, 3],
                                    opacity: [0.8, 1, 0.8]
                                } : {}}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className={`text-[10px] font-black ${timerRunning ? 'text-blue-400' : 'text-muted-foreground'}`}>
                                {Math.floor(progress)}%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-tighter">Time Remaining</span>
                        <span className={`text-lg font-mono font-black ${timerRunning ? 'text-blue-400' : 'text-white'}`}>
                            {formatTime(timeLeft)}
                        </span>
                    </div>
                </div>

                <AnimatePresence>
                    {showExtensions && !localTask.is_completed && timerRunning && (
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 20, opacity: 0 }}
                            className="absolute right-20 flex gap-2 items-center"
                        >
                            {[5, 10, 15].map(min => (
                                <button
                                    key={min}
                                    onClick={() => extendTimer(min)}
                                    className="px-2 py-1 rounded-lg bg-blue-500/20 border border-blue-500/30 text-[9px] font-black text-blue-400 hover:bg-blue-500 hover:text-white transition-all whitespace-nowrap"
                                >
                                    +{min}m
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {localTask.is_completed ? (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="p-3 rounded-2xl bg-green-500/20 text-green-400 border border-green-500/30"
                    >
                        <CheckCircle size={24} />
                    </motion.div>
                ) : (
                    <div className="flex items-center gap-6">
                        {isActive && timerRunning && (
                            <div className="flex gap-2 p-1.5 bg-card/5 rounded-2xl border border-white/10">
                                {[
                                    { id: 'off', icon: <Volume2 size={12} />, label: "Silence" },
                                    { id: 'lofi', icon: <Music size={12} />, label: "Lofi Beats" },
                                    { id: 'noise', icon: <Wind size={12} />, label: "Brown Noise" },
                                    { id: 'rain', icon: <CloudRain size={12} />, label: "Rainfall" }
                                ].map(mode => (
                                    <button
                                        key={mode.id}
                                        onClick={() => setAmbience(mode.id as any)}
                                        title={mode.label}
                                        className={`p-2 rounded-xl transition-all ${ambience === mode.id ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-muted-foreground hover:text-white hover:bg-card/5'}`}
                                    >
                                        {mode.icon}
                                    </button>
                                ))}
                            </div>
                        )}
                        <button
                            onClick={() => {
                                if (!isActive) onStartFocus(localTask.slot_id);
                                setTimerRunning(!timerRunning);
                            }}
                            className={`p-4 rounded-3xl transition-all shadow-xl active:scale-90 ${timerRunning
                                ? "bg-red-500/20 text-red-500 border border-red-500/50 shadow-red-500/10"
                                : "bg-card text-black hover:shadow-white/20"
                                }`}
                        >
                            {timerRunning ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                        </button>
                    </div>
                )}
            </div>

            {/* Micro-Plan Toggle */}
            {!localTask.is_locked && !localTask.is_completed && (
                <div className="mt-8 pt-6 border-t border-white/5">
                    <button
                        onClick={() => setShowMicroPlan(!showMicroPlan)}
                        className="w-full flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-blue-400/60 hover:text-blue-400 transition-colors"
                    >
                        <span>Strategic Micro-Plan</span>
                        {showMicroPlan ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <AnimatePresence>
                        {showMicroPlan && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="mt-4 space-y-3 overflow-hidden"
                            >
                                <div className="flex gap-4">
                                    <div className="w-1 bg-blue-500/20 rounded-full" />
                                    <div className="flex-1 space-y-3 pb-2">
                                        {[
                                            { label: "Deep Work (Pomodoro 1)", time: "45 min", type: "focus" },
                                            { label: "Neural Recovery (Break)", time: "10 min", type: "break" },
                                            { label: "Assimilation (Pomodoro 2)", time: "Remaining", type: "focus" }
                                        ].map((step, idx) => (
                                            <div key={idx} className="flex justify-between items-center bg-card/5 p-3 rounded-2xl border border-white/5">
                                                <span className={`font-bold ${step.type === 'break' ? 'text-yellow-500/80' : 'text-muted-foreground'}`}>{step.label}</span>
                                                <span className="text-[10px] font-black text-muted-foreground">{step.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* Active Glow Effect */}
            {isActive && timerRunning && (
                <>
                    <motion.div
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.02, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -inset-[2px] rounded-[2.5rem] bg-gradient-to-r from-blue-500/30 to-purple-500/30 -z-10"
                    />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/30 blur-[100px] -z-20" />
                </>
            )}

            <QuickRecallModal
                isOpen={showRecall}
                onClose={() => setShowRecall(false)}
                topic={localTask.topic}
                topicId={localTask.slot_id}
                onResult={(score, xp) => {
                    // Handled internally or could trigger UI update
                    if (score >= 80) onComplete(localTask.slot_id);
                }}
            />
        </motion.div>
    );
}


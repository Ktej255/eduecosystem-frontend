"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Target, CalendarDays, TreePine, Headphones, Music, Wind, Waves } from "lucide-react";
import { useState } from "react";

interface PhaseInfo {
    phase_id: number;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    is_active: boolean;
    status_message: string;
}

interface DashboardHeaderProps {
    phase: PhaseInfo;
    dailyProgress: number; // 0 to 100
    mode: "prelims" | "mains";
    onToggleMode: (mode: "prelims" | "mains") => void;
    onStartTest?: () => void;
    onOpenReports?: () => void;
    selectedDate: string;
    onPrevDay: () => void;
    onNextDay: () => void;
    onOpenMasteryMap?: () => void;
}

export function DashboardHeader({ phase, dailyProgress, mode, onToggleMode, onStartTest, onOpenReports, selectedDate, onPrevDay, onNextDay, onOpenMasteryMap }: DashboardHeaderProps) {
    const isToday = selectedDate === new Date().toISOString().split('T')[0];
    const [activeSound, setActiveSound] = useState<string | null>(null);
    const [showSoundMenu, setShowSoundMenu] = useState(false);

    const soundscapes = [
        { id: 'piano', name: 'Lofi Piano', icon: <Music size={14} /> },
        { id: 'focus', name: 'Deep Focus', icon: <Target size={14} /> },
        { id: 'rain', name: 'Rainfall', icon: <Waves size={14} /> },
        { id: 'zen', name: 'Zen Garden', icon: <Wind size={14} /> }
    ];

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 w-full max-w-6xl mx-auto mb-10 p-8 rounded-[2rem] border border-white/10 bg-[#1a1b23]/40 backdrop-blur-2xl flex flex-col lg:flex-row justify-between items-center shadow-2xl"
        >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-10">
                {/* Date Navigator */}
                <div className="flex flex-col items-center p-2 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center space-x-4 mb-1">
                        <button onClick={onPrevDay} className="p-2 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-all active:scale-90">
                            <ChevronLeft size={20} />
                        </button>
                        <div className="flex flex-col items-center min-w-[100px]">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400/80 mb-0.5">
                                {isToday ? "Current Mission" : "Mission Log"}
                            </span>
                            <span className="text-sm font-mono text-white font-bold">
                                {isToday ? "TODAY" : selectedDate}
                            </span>
                        </div>
                        <button onClick={onNextDay} className="p-2 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-all active:scale-90">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                        <h1 className="text-2xl font-black text-white tracking-tight uppercase italic">{phase.name}</h1>
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                    </div>
                    <p className="text-gray-400 text-sm font-medium mb-3">
                        {phase.description} • <span className="text-blue-400/80">{phase.status_message}</span>
                    </p>

                    <div className="flex items-center gap-4">
                        {onStartTest && (
                            <button
                                onClick={onStartTest}
                                className="group flex items-center gap-2 text-xs font-bold text-yellow-400 hover:text-white bg-yellow-400/10 hover:bg-yellow-400 px-3 py-1.5 rounded-full transition-all border border-yellow-400/20"
                            >
                                <span className="animate-bounce">⚡</span> Sunday Test
                            </button>
                        )}
                        {onOpenReports && (
                            <button
                                onClick={onOpenReports}
                                className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white bg-blue-400/10 hover:bg-blue-400 px-3 py-1.5 rounded-full transition-all border border-blue-400/20"
                            >
                                <Target size={14} /> Analytics
                            </button>
                        )}
                        {onOpenMasteryMap && (
                            <button
                                onClick={onOpenMasteryMap}
                                className="flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-white bg-purple-400/10 hover:bg-purple-400 px-3 py-1.5 rounded-full transition-all border border-purple-400/20"
                            >
                                <TreePine size={14} /> Mastery Map
                            </button>
                        )}

                        {/* Soundscape Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setShowSoundMenu(!showSoundMenu)}
                                className={`flex items-center gap-2 text-xs font-bold ${activeSound ? 'text-green-400' : 'text-gray-400'} hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-all border border-white/10`}
                            >
                                <Headphones size={14} />
                                {activeSound ? (
                                    <div className="flex gap-0.5 items-end h-3">
                                        {[1, 2, 3].map(i => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: ["40%", "100%", "40%"] }}
                                                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                                                className="w-0.5 bg-green-400"
                                            />
                                        ))}
                                    </div>
                                ) : "Focus Audio"}
                            </button>

                            <AnimatePresence>
                                {showSoundMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                        className="absolute top-10 left-0 bg-[#1a1b23] border border-white/10 p-2 rounded-2xl shadow-2xl min-w-[150px] overflow-hidden"
                                    >
                                        <div className="grid gap-1">
                                            {soundscapes.map(s => (
                                                <button
                                                    key={s.id}
                                                    onClick={() => {
                                                        setActiveSound(activeSound === s.id ? null : s.id);
                                                        setShowSoundMenu(false);
                                                    }}
                                                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-tight transition-all ${activeSound === s.id ? 'bg-blue-500 text-white' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}
                                                >
                                                    {s.icon} {s.name}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 mt-6 lg:mt-0">
                {/* Progress Circle Visual */}
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/10">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="24" cy="24" r="20"
                                stroke="currentColor" strokeWidth="4"
                                fill="transparent" className="text-gray-700"
                            />
                            <circle
                                cx="24" cy="24" r="20"
                                stroke="currentColor" strokeWidth="4"
                                fill="transparent" className="text-blue-500"
                                strokeDasharray={2 * Math.PI * 20}
                                strokeDashoffset={2 * Math.PI * 20 * (1 - dailyProgress / 100)}
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute text-[10px] font-bold">{Math.round(dailyProgress)}%</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-black text-gray-500 tracking-tighter">Daily Momentum</span>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className={`h-1 w-4 rounded-full ${dailyProgress >= i * 20 ? 'bg-blue-500' : 'bg-gray-800'}`} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mode Toggles */}
                <div className="flex p-1.5 bg-black/40 rounded-2xl border border-white/10 shadow-inner">
                    <button
                        onClick={() => onToggleMode("prelims")}
                        className={`px-5 py-2 rounded-xl text-xs font-black uppercase transition-all ${mode === "prelims" ? "bg-white text-black shadow-[0_5px_15px_rgba(255,255,255,0.2)]" : "text-gray-500 hover:text-white"}`}
                    >
                        Prelims
                    </button>
                    <button
                        onClick={() => onToggleMode("mains")}
                        className={`px-5 py-2 rounded-xl text-xs font-black uppercase transition-all ${mode === "mains" ? "bg-[#ff4b2b] text-white shadow-[0_5px_15px_rgba(255,75,43,0.3)]" : "text-gray-500 hover:text-white"}`}
                    >
                        Mains
                    </button>
                </div>
            </div>
        </motion.header>
    );
}

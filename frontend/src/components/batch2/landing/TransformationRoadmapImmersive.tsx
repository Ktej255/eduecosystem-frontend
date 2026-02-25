"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Brain, Eye, Sun, UserCheck, Sparkles, ChevronRight, Activity } from "lucide-react";
import Link from "next/link";
import { useBatch2Events } from "@/components/batch2/hooks/useBatch2Events";

const PHASES = [
    // ... (I need the rest of the array unchanged, wait, I can just replace lines 61 to 74)
    {
        id: 1,
        title: "Vitality (Prana)",
        desc: "Restore energy, sleep, and physical discipline.",
        icon: <Zap className="w-8 h-8" />,
        color: "from-emerald-900 to-emerald-600",
        shadow: "rgba(16, 185, 129, 0.4)",
        path: "/student/batch2/upanishads/kena",
        label: "Kena Ascent",
        upanishadKey: "kena"
    },
    {
        id: 2,
        title: "Clarity (Manas)",
        desc: "Emotional intelligence and unwavering focus.",
        icon: <Brain className="w-8 h-8" />,
        color: "from-blue-900 to-blue-600",
        shadow: "rgba(59, 130, 246, 0.4)",
        path: "/student/batch2/upanishads/isa",
        label: "Isha Insight",
        upanishadKey: "isa"
    },
    {
        id: 3,
        title: "Wisdom (Buddhi)",
        desc: "Understanding Cause & Effect and Dharma.",
        icon: <Eye className="w-8 h-8" />,
        color: "from-amber-900 to-amber-600",
        shadow: "rgba(245, 158, 11, 0.4)",
        path: "/student/batch2/upanishads/katha",
        label: "Katha Fire",
        upanishadKey: "katha"
    },
    {
        id: 4,
        title: "Integration (Yoga)",
        desc: "Unifying the internal and external worlds.",
        icon: <UserCheck className="w-8 h-8" />,
        color: "from-purple-900 to-purple-600",
        shadow: "rgba(168, 85, 247, 0.4)",
        path: "/student/batch2/upanishads/mandukya",
        label: "Mandukya State",
        upanishadKey: "mandukya"
    },
    {
        id: 5,
        title: "Liberation (Moksha)",
        desc: "Realizing the ultimate nature of Reality.",
        icon: <Sun className="w-8 h-8" />,
        color: "from-rose-900 to-rose-600",
        shadow: "rgba(244, 63, 94, 0.4)",
        path: "/student/batch2/upanishads/mundaka",
        label: "Mundaka Peak",
        upanishadKey: "mundaka"
    },
];

export function TransformationRoadmapImmersive({ suggestedPhaseId = 1 }: { suggestedPhaseId?: number }) {
    const { getEventsByType } = useBatch2Events();
    const [focusedPhase, setFocusedPhase] = useState<number>(suggestedPhaseId);

    const { completedPhases } = useMemo(() => {
        const completed: number[] = [];
        const sessions = getEventsByType('upanishad_session_completed');
        const completedKeys = sessions.map(e => e.data?.upanishadKey);

        PHASES.forEach(p => {
            if (p.upanishadKey && completedKeys.includes(p.upanishadKey)) {
                completed.push(p.id);
            }
        });

        return { completedPhases: completed };
    }, [getEventsByType]);

    // Get active phase data
    const activeData = PHASES.find(p => p.id === focusedPhase) || PHASES[0];

    return (
        <div className="fixed inset-0 bg-black text-white font-sans overflow-hidden z-[100] flex select-none">

            {/* Dynamic Biosphere Background */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={`bg-${focusedPhase}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className={`absolute inset-0 bg-gradient-to-br ${activeData.color} opacity-20`}
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

            {/* Top Atmospheric Header */}
            <div className="absolute top-0 left-0 w-full p-12 z-20 flex justify-between items-start pointer-events-none">
                <div>
                    <h1 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50 mb-2">The Ascent</h1>
                    <h2 className="text-3xl font-serif tracking-widest uppercase">Systemic Evolution</h2>
                </div>
                {suggestedPhaseId === focusedPhase && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-md"
                    >
                        <Activity className="w-4 h-4 text-emerald-400" />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Optimal Path Detected</span>
                    </motion.div>
                )}
            </div>

            {/* 3D Path Visualization */}
            <div className="flex-1 relative flex items-center justify-center perspective-[1000px]">

                <motion.div
                    animate={{ rotateX: 60, rotateZ: -20, translateY: 100 }}
                    transition={{ duration: 1 }}
                    className="relative w-[800px] h-[800px] transform-style-preserve-3d"
                >
                    {/* The Orbital Rings */}
                    <div className="absolute inset-0 border border-white/5 rounded-full" />
                    <div className="absolute inset-16 border border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
                    <div className="absolute inset-32 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                    {PHASES.map((phase, idx) => {
                        const isCompleted = completedPhases.includes(phase.id);
                        const isFocused = focusedPhase === phase.id;

                        // Calculate orbital position
                        const angle = (idx / (PHASES.length)) * Math.PI * 2;
                        const radius = 250;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <motion.div
                                key={phase.id}
                                animate={{
                                    x: x + 400, // Center offset
                                    y: y + 400,
                                    scale: isFocused ? 1.5 : 1,
                                    opacity: isFocused ? 1 : 0.4,
                                    z: isFocused ? 100 : 0
                                }}
                                transition={{ type: "spring", bounce: 0.2, duration: 1 }}
                                className="absolute w-24 h-24 -ml-12 -mt-12 group cursor-pointer"
                                onClick={() => setFocusedPhase(phase.id)}
                            >
                                {/* Reverse the 3D rotation so the icons stand up straight */}
                                <motion.div
                                    animate={{ rotateX: -60, rotateZ: 20 }}
                                    className="w-full h-full relative"
                                >
                                    {/* Connectivity Beam to Center if Focused */}
                                    {isFocused && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 200 }}
                                            className="absolute bottom-1/2 left-1/2 w-0.5 bg-gradient-to-t from-white/0 via-white/50 to-white origin-bottom -translate-x-1/2 z-0"
                                            style={{ boxShadow: `0 0 20px ${phase.shadow}` }}
                                        />
                                    )}

                                    {/* The Node */}
                                    <div className={`relative z-10 w-full h-full rounded-2xl border flex items-center justify-center transition-colors duration-500 bg-black/80 backdrop-blur-xl ${isFocused ? 'border-white' : 'border-white/20'}`}
                                        style={{ boxShadow: isFocused ? `0 0 30px ${phase.shadow}` : 'none' }}
                                    >
                                        <div className={isCompleted || isFocused ? 'text-white' : 'text-white/40'}>
                                            {phase.icon}
                                        </div>
                                    </div>

                                    {/* Floating Label */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center w-32">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-white/50">{phase.label}</div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}

                    {/* The Center Core */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform-style-preserve-3d">
                        <motion.div animate={{ rotateX: -60, rotateZ: 20 }}>
                            <div className="w-8 h-8 bg-white rounded-full blur-md opacity-50 shadow-[0_0_50px_rgba(255,255,255,0.8)]" />
                        </motion.div>
                    </div>

                </motion.div>
            </div>

            {/* Side Information Panel */}
            <div className="w-[400px] h-full border-l border-white/10 bg-black/60 backdrop-blur-3xl flex flex-col p-12 z-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeData.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 flex flex-col justify-center"
                    >
                        <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-2xl inline-block w-max">
                            {activeData.icon}
                        </div>

                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-2">Phase 0{activeData.id}</h3>
                        <h2 className="text-4xl font-serif text-white mb-6 uppercase tracking-widest leading-none bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">{activeData.title}</h2>

                        <p className="text-white/60 font-light leading-relaxed tracking-wide mb-12 text-sm">
                            {activeData.desc}
                        </p>

                        <Link href={activeData.path}>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full relative overflow-hidden group bg-white/5 border border-white/20 p-6 flex justify-between items-center"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${activeData.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Initiate Sequence</span>
                                <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                            </motion.button>
                        </Link>

                        {completedPhases.includes(activeData.id) && (
                            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase font-bold tracking-widest text-emerald-500">
                                <Sparkles className="w-3 h-3" /> Assimilated
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
    );
}

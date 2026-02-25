"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Brain, Eye, Sun, UserCheck, Sparkles } from "lucide-react";

const PHASES = [
    {
        id: 1,
        title: "Vitality (Prana)",
        desc: "Restore energy, sleep, and physical discipline.",
        icon: <Zap className="w-5 h-5" />,
        color: "emerald",
        path: "/student/batch2/upanishads/kena",
        upanishadKey: "kena",
    },
    {
        id: 2,
        title: "Clarity (Manas)",
        desc: "Emotional intelligence and unwavering focus.",
        icon: <Brain className="w-5 h-5" />,
        color: "blue",
        path: "/student/batch2/upanishads/isa",
        upanishadKey: "isa",
    },
    {
        id: 3,
        title: "Wisdom (Buddhi)",
        desc: "Understanding Cause & Effect (Karma) and Dharma.",
        icon: <Eye className="w-5 h-5" />,
        color: "amber",
        path: "/student/batch2/upanishads/katha",
        upanishadKey: "katha",
    },
    {
        id: 4,
        title: "Integration (Yoga)",
        desc: "Unifying the internal and external worlds.",
        icon: <UserCheck className="w-5 h-5" />,
        color: "purple",
        path: "/student/batch2/upanishads/mandukya",
        upanishadKey: "mandukya",
    },
    {
        id: 5,
        title: "Liberation (Moksha)",
        desc: "Realizing the ultimate nature of Reality.",
        icon: <Sun className="w-5 h-5" />,
        color: "rose",
        path: "/student/batch2/upanishads/mundaka",
        upanishadKey: "mundaka",
    },
];

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { TransformationRoadmapImmersive } from "./TransformationRoadmapImmersive";
import { useBatch2Events } from "@/components/batch2/hooks/useBatch2Events";
import { useMemo } from "react";

export default function TransformationRoadmap({ suggestedPhaseId }: { suggestedPhaseId?: number }) {
    const { mode } = useBatch2UI();
    const { getEventsByType } = useBatch2Events();

    const { completedPhases } = useMemo(() => {
        const completed: number[] = [];
        const sessions = getEventsByType('upanishad_session_completed');
        const completedKeys = sessions.map(e => e.data?.upanishadKey);

        PHASES.forEach(p => {
            if (completedKeys.includes(p.upanishadKey)) {
                completed.push(p.id);
            }
        });

        return { completedPhases: completed };
    }, [getEventsByType]);

    if (mode === 'immersive') {
        return (
            <div className="relative w-full h-[800px] overflow-hidden bg-black shadow-2xl">
                <TransformationRoadmapImmersive suggestedPhaseId={suggestedPhaseId} />
                <div className="absolute top-6 right-6 z-50">
                    <TranceToggle />
                </div>
            </div>
        );
    }

    return (
        <div className="w-full py-12 relative" id="roadmap">
            <h2 className="text-3xl font-bold text-center text-white mb-16 font-serif">The Path of Ascent</h2>

            <div className="max-w-4xl mx-auto relative px-4">
                {/* Central Line */}
                <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/50 to-transparent md:-translate-x-1/2" />

                <div className="space-y-12">
                    {PHASES.map((phase, index) => {
                        const isLeft = index % 2 === 0;
                        const isSuggested = suggestedPhaseId === phase.id;

                        return (
                            <motion.div
                                key={phase.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 relative group/item cursor-pointer ${isLeft ? "md:flex-row-reverse" : ""
                                    } ${isSuggested ? "z-20 scale-105" : "z-10"}`}
                            >
                                {/* Text Side */}
                                <div className={`flex-1 md:w-1/2 ${isLeft ? "md:pl-12 text-left" : "md:pr-12 md:text-right"} pl-16 md:pl-0`}>
                                    <Link href={phase.path} className="flex flex-col group">
                                        {isSuggested && (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className={`text-[10px] font-black uppercase tracking-widest text-amber-400 mb-1 flex items-center gap-1 ${!isLeft ? "md:justify-end" : ""}`}
                                            >
                                                <Sparkles className="w-3 h-3" /> Recommended for You
                                            </motion.span>
                                        )}
                                        <div className={`flex items-center gap-2 mb-1 ${!isLeft ? "md:justify-end" : ""}`}>
                                            <h3 className={`text-xl font-bold text-${phase.color}-400 group-hover:text-white transition-colors`}>{phase.title}</h3>
                                            {completedPhases.includes(phase.id) && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                                        </div>
                                        <p className="text-muted-foreground font-light group-hover:text-slate-200 transition-colors">{phase.desc}</p>
                                    </Link>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 transform translate-y-2 md:translate-y-0 z-10">
                                    <div className={`w-14 h-14 rounded-full bg-slate-900 border-2 flex items-center justify-center transition-all duration-500 ${isSuggested
                                        ? `border-amber-400 scale-125 shadow-[0_0_30px_rgba(251,191,36,0.6)] ring-4 ring-amber-500/20`
                                        : `border-${phase.color}-500/50`
                                        } text-${isSuggested ? "amber" : phase.color}-400`}>
                                        {phase.icon}
                                    </div>
                                </div>

                                {/* Empty Side for layout balance */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, CheckCircle2, Circle } from "lucide-react";
import { useBatch2Events } from "@/components/batch2/hooks/useBatch2Events";
import ExperienceReport from "@/components/batch2/shared/ExperienceReport";

interface ShiftGoal {
    id: number;
    label: string;
    completed: boolean;
    phase: string;
}

export default function InternalShiftTracker() {
    const { events } = useBatch2Events();
    const [reportActive, setReportActive] = useState(false);

    // Dynamic Goals Calculation
    const goals: ShiftGoal[] = useMemo(() => {
        const hasHighPrana = events.some(e => e.type === "dinacharya_step_done" && e.module?.includes("Wake up"));
        const hasDeepFocus = events.some(e => e.type === "sadhana_session_done" && (e.duration || 0) >= 30);
        const hasStressAwareness = events.some(e => e.type === "journal_entry_saved" || e.type === "mudra_practiced");
        const hasUpanishadicGlimpse = events.some(e => e.type === "upanishad_session_completed");

        return [
            { id: 1, label: "Wake up with high Prana (Energy)", completed: hasHighPrana, phase: "Vitality" },
            { id: 2, label: "Single-pointed focus (30 mins)", completed: hasDeepFocus, phase: "Clarity" },
            { id: 3, label: "Detached observation of stress", completed: hasStressAwareness, phase: "Wisdom" },
            { id: 4, label: "Recognizing the 'Watcher' behind thoughts", completed: hasUpanishadicGlimpse, phase: "Liberation" },
        ];
    }, [events]);

    const completedCount = goals.filter(g => g.completed).length;
    const progress = (completedCount / goals.length) * 100;

    return (
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Target className="w-5 h-5 text-amber-500" />
                        Internal Shift Tracker
                    </h3>
                    <p className="text-sm text-muted-foreground">Tracking your journey of transformation.</p>
                </div>
                <div className="text-right">
                    <span className="text-2xl font-bold text-amber-500">{Math.round(progress)}%</span>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Alignment</p>
                </div>
            </div>

            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-8">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-amber-600 to-orange-500"
                />
            </div>

            <div className="space-y-4">
                {goals.map((goal) => (
                    <div key={goal.id} className="flex items-start gap-4 p-3 rounded-xl hover:bg-card/5 transition-colors group">
                        <div className={`mt-0.5 ${goal.completed ? "text-emerald-500" : "text-muted-foreground"}`}>
                            {goal.completed ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                        </div>
                        <div>
                            <p className={`text-sm font-medium ${goal.completed ? "text-slate-200" : "text-muted-foreground"}`}>
                                {goal.label}
                            </p>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-muted-foreground border border-slate-700 mt-1 inline-block">
                                {goal.phase}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
                <button
                    onClick={() => setReportActive(true)}
                    className="w-full py-3 bg-card/5 hover:bg-card/10 text-white rounded-xl text-sm font-medium transition-all"
                >
                    Log Today's Experience
                </button>
            </div>

            <AnimatePresence>
                {reportActive && (
                    <ExperienceReport
                        isOpen={reportActive}
                        onClose={() => setReportActive(false)}
                        onSubmit={(data) => {
                            console.log("Internal Shift Logged:", data);
                            setReportActive(false);
                        }}
                        title="Daily Internal Shift Log"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

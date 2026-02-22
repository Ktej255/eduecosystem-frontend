"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Clock, Sparkles, Scroll, ArrowRight } from "lucide-react";
import Link from "next/link";

interface SessionData {
    upanishadKey: string;
    upanishadName: string;
    mantra: string;
    completedAt: string;
    duration: number;  // in minutes
    reflections?: string;
}

export default function JourneyRecap({ onClose }: { onClose?: () => void }) {
    const [sessions, setSessions] = useState<SessionData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load session history from localStorage
        const loadSessions = () => {
            try {
                const stored = localStorage.getItem("ancientWisdomSessions");
                if (stored) {
                    setSessions(JSON.parse(stored));
                } else {
                    // Demo data if no sessions found
                    setSessions([
                        {
                            upanishadKey: "kena",
                            upanishadName: "Kena Upanishad",
                            mantra: "Mantra 1",
                            completedAt: new Date().toISOString(),
                            duration: 15,
                            reflections: "Experienced stillness in the gap between thoughts."
                        }
                    ]);
                }
            } catch (e) {
                console.error("Failed to load sessions", e);
            }
            setLoading(false);
        };

        loadSessions();
    }, []);

    const formatDate = (isoString: string) => {
        return new Date(isoString).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    };

    const totalMinutes = sessions.reduce((sum, s) => sum + s.duration, 0);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-amber-500 border-t-transparent" />
            </div>
        );
    }

    return (
        <div className="w-full py-12 px-4" id="journey-recap">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4 font-serif flex items-center justify-center gap-3">
                        <Scroll className="w-8 h-8 text-amber-500" />
                        Journey Recap
                    </h2>
                    <p className="text-muted-foreground">Your path through the wisdom texts</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                    <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6 text-center">
                        <div className="text-3xl font-black text-amber-500">{sessions.length}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-widest">Sessions</div>
                    </div>
                    <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6 text-center">
                        <div className="text-3xl font-black text-emerald-500">{totalMinutes}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-widest">Minutes</div>
                    </div>
                    <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6 text-center col-span-2 md:col-span-1">
                        <div className="text-3xl font-black text-indigo-400">{new Set(sessions.map(s => s.upanishadKey)).size}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-widest">Texts Explored</div>
                    </div>
                </div>

                {/* Session List */}
                {sessions.length === 0 ? (
                    <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-white/5">
                        <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">No Sessions Yet</h3>
                        <p className="text-muted-foreground mb-6">Begin your transformative journey</p>
                        <Link
                            href="/student/batch2/upanishads/kena"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-foreground font-bold hover:bg-amber-400 transition-colors"
                        >
                            Start with Kena Upanishad <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {sessions.map((session, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-900/50 border border-white/5 rounded-xl p-6 hover:border-amber-500/30 transition-all"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{session.upanishadName}</h4>
                                            <p className="text-sm text-muted-foreground">{session.mantra}</p>
                                            {session.reflections && (
                                                <p className="text-xs text-muted-foreground mt-2 italic">"{session.reflections}"</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="flex items-center gap-1 text-emerald-500 text-sm font-bold">
                                            <CheckCircle className="w-4 h-4" />
                                            Completed
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                                            <Clock className="w-3 h-3" />
                                            {session.duration} min
                                        </div>
                                        <div className="text-xs text-muted-foreground mt-1">
                                            {formatDate(session.completedAt)}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Continue Button */}
                {sessions.length > 0 && (
                    <div className="text-center mt-10">
                        <Link
                            href="/student/batch2/upanishads/kena"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-foreground font-bold text-lg hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/20"
                        >
                            Continue Your Journey <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

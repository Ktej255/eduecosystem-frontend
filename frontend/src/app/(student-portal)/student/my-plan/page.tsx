"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Target, Clock, Zap, Award, BookOpen, ChevronRight, Play, Star, TrendingUp, AlertCircle, BrainCircuit, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { RAS_REVISION_PLAN, RASDayPlan, RASSession } from "@/data/ras-revision-plan";
import RASPomodoroSession from "@/components/ras/RASPomodoroSession";
import { getPomodoroTimerService } from "@/services/PomodoroTimerService";

// Organic Futurism Utilities
const glassCard = "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-white/20 dark:border-neutral-800 shadow-xl";
const gradientText = "bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent";

export default function RASRevisionPortal() {
    const [currentDay, setCurrentDay] = useState<number>(1);
    const [plan, setPlan] = useState<RASDayPlan[]>(RAS_REVISION_PLAN);
    const [activePomodoroSession, setActivePomodoroSession] = useState<RASSession | null>(null);
    const [stats, setStats] = useState({
        completedSessions: 0,
        totalHours: 0,
        streak: 5
    });
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);
    const [today, setToday] = useState(1);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const start = new Date("2026-01-15");
        const now = new Date();
        const diffTime = now.getTime() - start.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
        const day = Math.max(1, Math.min(75, diffDays));
        setToday(day);
        setCurrentDay(day);
    }, []);

    // Scroll active day into view
    useEffect(() => {
        if (scrollContainerRef.current) {
            const activeButton = scrollContainerRef.current.querySelector('[data-active="true"]');
            if (activeButton) {
                activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }, [currentDay]);

    // Check for existing session on mount
    useEffect(() => {
        const timerService = getPomodoroTimerService();
        const timerState = timerService.getState();
        if (timerState.sessionType === 'ras_revision' && timerState.isRunning && timerState.topicName) {
            // Find session in plan
            let foundSession: RASSession | undefined;
            plan.forEach(day => {
                const s = day.sessions.find(ses => ses.topic === timerState.topicName);
                if (s) foundSession = s;
            });

            if (foundSession) {
                setActivePomodoroSession(foundSession);
            } else {
                setActivePomodoroSession({
                    topic: timerState.topicName,
                    durationMinutes: timerState.duration / 60000,
                    type: "Deep Work"
                });
            }
        }
    }, []);

    // Ensure selectedDayData is defined before usage
    const selectedDayData = plan.find(d => d.day === currentDay) || plan[0];

    // Derived stats
    const missedDays = plan.filter(d => d.day < today && d.sessions.some(s => !s.completed));
    const firstIncompleteSession = selectedDayData.sessions.find(s => !s.completed) || selectedDayData.sessions[0];

    // Derived progress for the current day
    const dayProgress = selectedDayData.sessions.length > 0
        ? Math.round((selectedDayData.sessions.filter(s => s.completed).length / selectedDayData.sessions.length) * 100)
        : 0;

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-neutral-100 p-4 md:p-8 font-sans selection:bg-amber-500/30">

            {/* 0. Catch Up Alert */}
            <AnimatePresence>
                {missedDays.length > 0 && currentDay === today && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="max-w-7xl mx-auto mb-6 px-6 py-3 bg-rose-500/10 border border-rose-500/30 rounded-2xl flex items-center justify-between text-rose-500 text-sm font-bold backdrop-blur-md"
                    >
                        <div className="flex items-center gap-3">
                            <AlertCircle className="w-5 h-5" />
                            <span>You have {missedDays.length} days with incomplete sessions. Recommendation: Catch up on Day {missedDays[0].day}.</span>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-rose-500 hover:bg-rose-500/20 font-black h-8 px-4"
                            onClick={() => setCurrentDay(missedDays[0].day)}
                        >
                            GO TO DAY {missedDays[0].day}
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 1. Neuro-Canvas Hero */}
            <section className="relative w-full max-w-7xl mx-auto mb-12 rounded-[2.5rem] overflow-hidden min-h-[400px] flex items-center shadow-2xl">
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-neutral-900">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590053932223-3806a6c4b27a?q=80&w=2070')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent" />

                    {/* Animated Orbs */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute bottom-0 left-20 w-[300px] h-[300px] bg-rose-600/20 rounded-full blur-[80px]"
                    />
                </div>

                <div className="relative z-10 p-12 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            Target: May 3rd, 2026
                        </span>
                        <span className="flex items-center gap-1 text-neutral-400 text-sm font-medium">
                            <Clock className="w-4 h-4" /> 75 Days Remaining
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-200 to-neutral-500 mb-6 leading-tight"
                    >
                        RAS Prelims <br />
                        <span className="text-amber-500">Mastery Protocol</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-neutral-300 max-w-xl mb-8 leading-relaxed"
                    >
                        Welcome to your AI-calibrated revision engine. Today's focus is on <span className="text-white font-semibold">{selectedDayData.title}</span>.
                        {firstIncompleteSession && (
                            <span className="block mt-2 text-amber-500/80 text-sm font-medium">Next: {firstIncompleteSession.topic}</span>
                        )}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button
                            size="lg"
                            className="h-14 px-8 rounded-full bg-amber-500 text-black hover:bg-amber-400 font-bold text-lg shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
                            onClick={() => {
                                if (firstIncompleteSession) setActivePomodoroSession(firstIncompleteSession);
                            }}
                        >
                            <Play className="w-5 h-5 mr-2 fill-current" /> {firstIncompleteSession?.completed ? `Review Day ${currentDay}` : `Resume Day ${currentDay}`}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 rounded-full border-neutral-700 hover:bg-white/5 text-white backdrop-blur-md"
                            onClick={() => setIsScheduleOpen(true)}
                        >
                            View Full Schedule
                        </Button>
                    </motion.div>
                </div>

                {/* Micro-Stats Card floating */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute right-12 bottom-12 hidden md:block"
                >
                    <div className={`${glassCard} p-6 rounded-2xl w-64`}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-neutral-400 text-xs font-bold uppercase tracking-wider">Current Streak</h3>
                            <Zap className="w-4 h-4 text-amber-500" />
                        </div>
                        <div className="text-4xl font-black text-white mb-1">{stats.streak} Days</div>
                        <div className="text-xs text-green-400 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> Top 5% of candidates
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 2. Main Dashboard Layout - Flow Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: Timeline Navigation (3 cols) */}
                <div className="lg:col-span-3 space-y-6">
                    <div className={`${glassCard} rounded-3xl p-6 sticky top-8`}>
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-amber-500" /> Journey Map
                        </h3>
                        <div
                            ref={scrollContainerRef}
                            className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar"
                        >
                            {plan.map(p => (
                                <button
                                    key={p.day}
                                    data-active={currentDay === p.day}
                                    onClick={() => setCurrentDay(p.day)}
                                    className={`w-full text-left p-4 rounded-xl transition-all border-l-4 group ${currentDay === p.day
                                        ? "bg-amber-500/10 border-amber-500"
                                        : "hover:bg-neutral-100 dark:hover:bg-neutral-800 border-transparent"
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className={`text-xs font-bold uppercase tracking-wider ${currentDay === p.day ? "text-amber-500" : "text-neutral-500"}`}>
                                            Day {p.day}
                                        </span>
                                        {currentDay === p.day && <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />}
                                    </div>
                                    <div className={`font-medium text-sm line-clamp-1 ${currentDay === p.day ? "text-amber-500" : "text-neutral-700 dark:text-neutral-300"}`}>
                                        {p.title}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Day Plan & Actions (9 cols) */}
                <div className="lg:col-span-9 space-y-8">

                    {/* Day Header */}
                    <div className="flex items-end justify-between border-b border-neutral-200 dark:border-neutral-800 pb-6">
                        <div>
                            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
                                Day {currentDay}: {selectedDayData.title}
                            </h2>
                            <p className="text-neutral-500 mt-2 flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> {selectedDayData.date}
                                <span className="w-1 h-1 rounded-full bg-neutral-400" />
                                <Clock className="w-4 h-4" /> {selectedDayData.targetHours} Hours Target
                            </p>
                        </div>
                        <div className="text-right hidden md:block">
                            <div className="text-sm font-medium text-neutral-500 mb-1">Daily Progress</div>
                            <div className="flex items-center gap-3">
                                <Progress value={dayProgress} className="w-32 h-2 bg-neutral-200 dark:bg-neutral-800" />
                                <span className="font-bold text-lg">{dayProgress}%</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <StatCard label="Topics" value={selectedDayData.sessions.length} icon={<BookOpen className="w-5 h-5 text-blue-500" />} />
                        <StatCard label="Deep Work" value="3 hrs" icon={<BrainCircuit className="w-5 h-5 text-purple-500" />} />
                        <StatCard label="MCQs" value="45" icon={<Target className="w-5 h-5 text-rose-500" />} />
                        <StatCard label="Recall Score" value="A+" icon={<Award className="w-5 h-5 text-amber-500" />} />
                    </div>

                    {/* Sessions List */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                            <Star className="w-5 h-5 text-amber-500 fill-current" /> Priority Sessions
                        </h3>

                        <AnimatePresence>
                            {selectedDayData.sessions.map((session, idx) => (
                                <SessionCard
                                    key={idx}
                                    session={session}
                                    onStart={() => setActivePomodoroSession(session)}
                                />
                            ))}
                        </AnimatePresence>

                        {selectedDayData.sessions.length === 0 && (
                            <div className="p-12 text-center border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl text-neutral-400">
                                <AlertCircle className="w-10 h-10 mx-auto mb-4 opacity-50" />
                                <p>No sessions scheduled for this day yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Pomodoro Overlay */}
            <AnimatePresence>
                {activePomodoroSession && (
                    <RASPomodoroSession
                        topic={activePomodoroSession.topic}
                        initialDurationMinutes={activePomodoroSession.durationMinutes}
                        onExit={() => setActivePomodoroSession(null)}
                        onComplete={() => {
                            // Update local stats logic
                            setStats(prev => ({ ...prev, completedSessions: prev.completedSessions + 1 }));
                            setPlan(prev => prev.map(d => {
                                if (d.day === currentDay) {
                                    return {
                                        ...d,
                                        sessions: d.sessions.map(s =>
                                            s.topic === activePomodoroSession.topic ? { ...s, completed: true } : s
                                        )
                                    };
                                }
                                return d;
                            }));
                            setActivePomodoroSession(null);
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Full Schedule Modal */}
            <AnimatePresence>
                {isScheduleOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className={`${glassCard} w-full max-w-4xl max-h-[90vh] rounded-[2rem] overflow-hidden flex flex-col`}
                        >
                            <div className="p-8 border-b border-neutral-800 flex justify-between items-center bg-neutral-900/50">
                                <div>
                                    <h2 className="text-3xl font-bold text-white">RAS Master Plan</h2>
                                    <p className="text-neutral-400">75-Day Systematic Revision Journey</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsScheduleOpen(false)}
                                    className="rounded-full hover:bg-white/10"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </Button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8 space-y-4 custom-scrollbar">
                                {plan.map(p => (
                                    <div
                                        key={p.day}
                                        className={`flex items-start gap-6 p-6 rounded-2xl border transition-all ${p.day === currentDay
                                            ? "border-amber-500 bg-amber-500/5"
                                            : "border-neutral-800 hover:border-neutral-700"
                                            }`}
                                    >
                                        <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center font-bold ${p.day <= currentDay ? "bg-amber-500 text-black" : "bg-neutral-800 text-neutral-500"
                                            }`}>
                                            <div className="text-[10px] uppercase">Day</div>
                                            <div className="text-xl">{p.day}</div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-xl font-bold text-white">{p.title}</h4>
                                                <span className="text-sm text-neutral-500 font-medium">{p.date}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {p.sessions.map((s, idx) => (
                                                    <span key={idx} className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 text-[10px] uppercase font-bold tracking-wider">
                                                        {s.type}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            className="text-amber-500 font-bold"
                                            onClick={() => {
                                                setCurrentDay(p.day);
                                                setIsScheduleOpen(false);
                                            }}
                                        >
                                            Go to Day
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Sub-components

function StatCard({ label, value, icon }: any) {
    return (
        <div className={`${glassCard} p-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform`}>
            <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                {icon}
            </div>
            <div>
                <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider">{label}</div>
                <div className="text-xl font-bold">{value}</div>
            </div>
        </div>
    );
}

function SessionCard({ session, onStart }: { session: RASSession, onStart: () => void }) {
    const typeColors: Record<string, string> = {
        "Deep Work": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800",
        "Quick Review": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800",
        "Test": "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 border-rose-200 dark:border-rose-800",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${glassCard} p-6 rounded-2xl group hover:border-amber-500/50 transition-all`}
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border ${typeColors[session.type] || "bg-gray-100 text-gray-700"}`}>
                            {session.type}
                        </span>
                        <span className="text-xs text-neutral-400 font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {session.durationMinutes} min
                        </span>
                    </div>
                    <h4 className="text-xl font-bold group-hover:text-amber-500 transition-colors">{session.topic}</h4>
                    {session.description && (
                        <p className="text-neutral-500 mt-1 text-sm leading-relaxed">{session.description}</p>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    {session.completed ? (
                        <div className="flex items-center gap-2 text-green-500 font-bold px-6">
                            <CheckCircle2 className="w-5 h-5" /> Completed
                        </div>
                    ) : (
                        <Button
                            size="lg"
                            className="rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-amber-500 dark:hover:bg-amber-500 font-bold shadow-lg transition-all"
                            onClick={onStart}
                        >
                            <Play className="w-4 h-4 mr-2 fill-current" /> Start
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}




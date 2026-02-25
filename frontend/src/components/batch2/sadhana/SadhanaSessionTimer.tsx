"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Square, Clock, Flame, BookOpen, CheckCircle2, ChevronRight, RotateCcw, Zap } from 'lucide-react';
import { useBatch2Events } from '../hooks/useBatch2Events';
import ExperienceReport from '@/components/batch2/shared/ExperienceReport';

type SessionPhase = 'pre' | 'purification' | 'invocation' | 'core' | 'closing' | 'complete';

const PHASE_CONFIG: { id: SessionPhase; name: string; nameSanskrit: string; color: string; icon: React.FC<any>; description: string }[] = [
    { id: 'pre', name: 'Preparation', nameSanskrit: 'तैयारी', color: 'bg-stone-500', icon: CheckCircle2, description: 'Complete the 9-step daily checklist before beginning.' },
    { id: 'purification', name: 'Purification', nameSanskrit: 'शोधन', color: 'bg-blue-500', icon: Zap, description: 'Achamana, Pranayama, Sankalpa — purifying body and mind.' },
    { id: 'invocation', name: 'Invocation', nameSanskrit: 'आवाहन', color: 'bg-violet-500', icon: BookOpen, description: 'Dhyana, Nyasa, Mudras — invoking the deity into the mantra.' },
    { id: 'core', name: 'Core Japa', nameSanskrit: 'मुख्य जप', color: 'bg-amber-500', icon: Flame, description: 'The heart of practice — chanting your rounds with focus.' },
    { id: 'closing', name: 'Closing', nameSanskrit: 'समापन', color: 'bg-emerald-500', icon: RotateCcw, description: 'Visarjana, forgiveness prayer, and dedication of merit.' },
    { id: 'complete', name: 'Session Complete', nameSanskrit: 'पूर्ण', color: 'bg-green-600', icon: CheckCircle2, description: 'Your daily sadhana is recorded.' },
];

const PRE_SESSION_CHECKLIST = [
    'Bathed / Fresh clothes',
    'Sacred space prepared',
    'Lamp lit (ghee/oil)',
    'Asana laid (wool/kusha)',
    'Beads ready (Rudraksha/Sandalwood)',
    'Facing correct direction',
    'Water vessel prepared (Achamana)',
    'Mind calm, phone silenced',
    'Sankalpa intention clear',
];

interface SessionLog {
    date: string;
    totalSeconds: number;
    phasesCompleted: SessionPhase[];
    japaRounds: number;
}

export default function SadhanaSessionTimer() {
    const { getEventsByType, logEvent } = useBatch2Events();
    const [isRunning, setIsRunning] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const [currentPhase, setCurrentPhase] = useState<SessionPhase>('pre');
    const [phaseStartTime, setPhaseStartTime] = useState(0);
    const [completedPhases, setCompletedPhases] = useState<Set<SessionPhase>>(new Set());
    const [checklist, setChecklist] = useState<Set<number>>(new Set());
    const [japaRounds, setJapaRounds] = useState(0);
    const [showReport, setShowReport] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Get session logs from central events
    const sessionEvents = useMemo(() => getEventsByType("sadhana_session_done"), [getEventsByType]);

    // Timer logic
    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setElapsed(prev => prev + 1);
            }, 1000);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [isRunning]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const startSession = () => {
        setIsRunning(true);
        setCurrentPhase('purification');
        setPhaseStartTime(elapsed);
        setCompletedPhases(new Set(['pre']));
    };

    const advancePhase = () => {
        const phases: SessionPhase[] = ['pre', 'purification', 'invocation', 'core', 'closing', 'complete'];
        const currentIdx = phases.indexOf(currentPhase);
        if (currentIdx < phases.length - 1) {
            setCompletedPhases(prev => new Set([...prev, currentPhase]));
            const nextPhase = phases[currentIdx + 1];
            setCurrentPhase(nextPhase);
            setPhaseStartTime(elapsed);

            if (nextPhase === 'complete') {
                setIsRunning(false);
                // Save session log centrally
                logEvent("sadhana_session_done", {
                    module: "Sadhana Session",
                    duration: Math.ceil(elapsed / 60),
                    data: {
                        totalSeconds: elapsed,
                        phasesCompleted: [...completedPhases, currentPhase],
                        japaRounds,
                    }
                });
            }
        }
    };

    const resetSession = () => {
        setIsRunning(false);
        setElapsed(0);
        setCurrentPhase('pre');
        setPhaseStartTime(0);
        setCompletedPhases(new Set());
        setChecklist(new Set());
        setJapaRounds(0);
    };

    const toggleCheck = (idx: number) => {
        setChecklist(prev => {
            const next = new Set(prev);
            next.has(idx) ? next.delete(idx) : next.add(idx);
            return next;
        });
    };

    const currentPhaseConfig = PHASE_CONFIG.find(p => p.id === currentPhase)!;
    const phaseElapsed = elapsed - phaseStartTime;

    // Streak calculation
    const today = new Date().toDateString();
    const uniqueDays = new Set(sessionEvents.map(l => new Date(l.timestamp).toDateString()));
    const hasToday = uniqueDays.has(today);

    // Last 7 days heatmap
    const last7Days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (6 - i));
        const dateStr = d.toDateString();
        const dayLogs = sessionEvents.filter(l => new Date(l.timestamp).toDateString() === dateStr);
        return {
            day: d.toLocaleDateString('en-IN', { weekday: 'short' }),
            date: d.getDate(),
            count: dayLogs.length,
            totalMinutes: Math.round(dayLogs.reduce((sum, l) => sum + (l.data?.totalSeconds || 0), 0) / 60),
        };
    });

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-200 shadow-sm">
                    <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <h1 className="text-4xl font-serif font-bold text-amber-950 mb-2">Sadhana Session</h1>
                <p className="text-amber-800/80 text-lg">Guided ritual timer — Purification → Invocation → Core → Closing</p>
            </div>

            {/* Main Timer Display */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-200 shadow-lg mb-8 text-center">
                {/* Phase Indicator */}
                <div className="flex items-center justify-center gap-2 mb-6">
                    {PHASE_CONFIG.filter(p => p.id !== 'complete').map((phase, idx) => (
                        <React.Fragment key={phase.id}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all ${completedPhases.has(phase.id) ? 'bg-emerald-500' :
                                currentPhase === phase.id ? `${phase.color} ring-4 ring-offset-2 ring-amber-300` :
                                    'bg-stone-200'
                                }`}>
                                {completedPhases.has(phase.id) ? '✓' : idx + 1}
                            </div>
                            {idx < PHASE_CONFIG.length - 2 && (
                                <div className={`w-6 h-0.5 ${completedPhases.has(phase.id) ? 'bg-emerald-400' : 'bg-stone-200'}`} />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Current Phase Label */}
                <div className="mb-4">
                    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-sm font-bold ${currentPhaseConfig.color}`}>
                        <currentPhaseConfig.icon className="w-4 h-4" />
                        {currentPhaseConfig.name} — {currentPhaseConfig.nameSanskrit}
                    </span>
                </div>
                <p className="text-sm text-stone-600 mb-6">{currentPhaseConfig.description}</p>

                {/* Timer */}
                <div className="mb-6">
                    <div className="text-7xl font-mono font-bold text-amber-950 tracking-wider">
                        {formatTime(elapsed)}
                    </div>
                    {isRunning && (
                        <div className="text-sm text-amber-700 mt-2">
                            Phase time: {formatTime(phaseElapsed)}
                        </div>
                    )}
                </div>

                {/* Japa Counter (during Core phase) */}
                {currentPhase === 'core' && (
                    <div className="mb-6 flex items-center justify-center gap-4">
                        <span className="text-sm font-bold text-amber-800">Rounds completed:</span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setJapaRounds(Math.max(0, japaRounds - 1))}
                                className="w-10 h-10 rounded-xl bg-white border border-amber-200 text-amber-700 font-bold hover:bg-amber-50"
                            >−</button>
                            <span className="text-3xl font-bold text-amber-950 w-16 text-center">{japaRounds}</span>
                            <button
                                onClick={() => setJapaRounds(japaRounds + 1)}
                                className="w-10 h-10 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600"
                            >+</button>
                        </div>
                    </div>
                )}

                {/* Controls */}
                <div className="flex items-center justify-center gap-4">
                    {currentPhase === 'pre' ? (
                        <button
                            onClick={startSession}
                            disabled={checklist.size < 5}
                            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg flex items-center gap-2 ${checklist.size >= 5 ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                                }`}
                        >
                            <Play className="w-5 h-5" /> Begin Session
                        </button>
                    ) : currentPhase === 'complete' ? (
                        <button onClick={resetSession} className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 flex items-center gap-2">
                            <RotateCcw className="w-5 h-5" /> New Session
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={() => setIsRunning(!isRunning)}
                                className="w-14 h-14 rounded-2xl bg-white border-2 border-amber-200 flex items-center justify-center text-amber-700 hover:bg-amber-50"
                            >
                                {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                            </button>
                            <button
                                onClick={advancePhase}
                                className="px-6 py-3 bg-amber-600 text-white rounded-2xl font-bold hover:bg-amber-700 flex items-center gap-2"
                            >
                                Next Phase <ChevronRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={resetSession}
                                className="w-14 h-14 rounded-2xl bg-white border-2 border-red-200 flex items-center justify-center text-red-500 hover:bg-red-50"
                            >
                                <Square className="w-5 h-5" />
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Pre-Session Checklist */}
            {currentPhase === 'pre' && (
                <div className="bg-card rounded-2xl p-6 border border-amber-100 shadow-sm mb-8">
                    <h2 className="text-lg font-serif font-bold text-amber-950 mb-4">Pre-Session Checklist (complete at least 5)</h2>
                    <div className="space-y-2">
                        {PRE_SESSION_CHECKLIST.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => toggleCheck(idx)}
                                className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${checklist.has(idx) ? 'bg-emerald-50 border border-emerald-200' : 'bg-white border border-stone-100 hover:bg-amber-50'
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${checklist.has(idx) ? 'bg-emerald-500 text-white' : 'border-2 border-stone-300'}`}>
                                    {checklist.has(idx) && <CheckCircle2 className="w-4 h-4" />}
                                </div>
                                <span className={`text-sm font-medium ${checklist.has(idx) ? 'text-emerald-800' : 'text-stone-700'}`}>{item}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Session Complete Summary */}
            {currentPhase === 'complete' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-emerald-50 rounded-3xl p-8 border-2 border-emerald-200 shadow-lg mb-8 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Session Complete — शुभम्</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl p-4 border border-emerald-200">
                            <div className="text-2xl font-bold text-emerald-700">{formatTime(elapsed)}</div>
                            <div className="text-xs text-stone-500 uppercase tracking-wider">Total Time</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-emerald-200">
                            <div className="text-2xl font-bold text-emerald-700">{japaRounds}</div>
                            <div className="text-xs text-stone-500 uppercase tracking-wider">Rounds</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-emerald-200">
                            <div className="text-2xl font-bold text-emerald-700">{completedPhases.size}</div>
                            <div className="text-xs text-stone-500 uppercase tracking-wider">Phases</div>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowReport(true)}
                        className="mt-6 px-6 py-3 bg-amber-100 text-amber-800 rounded-2xl font-bold hover:bg-amber-200 flex items-center justify-center gap-2 mx-auto w-full md:w-auto transition-colors"
                    >
                        <BookOpen className="w-5 h-5" /> Log Experience
                    </button>
                </motion.div>
            )}

            {/* 7-Day Heatmap */}
            <div className="bg-card rounded-2xl p-6 border border-amber-100 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-widest text-amber-800/60 mb-4">Last 7 Days</h3>
                <div className="grid grid-cols-7 gap-2">
                    {last7Days.map((day, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-[10px] text-stone-400 uppercase mb-1">{day.day}</div>
                            <div className={`w-full aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all ${day.count > 0
                                ? day.totalMinutes >= 30 ? 'bg-emerald-500 text-white' : 'bg-emerald-200 text-emerald-800'
                                : 'bg-stone-100 text-stone-300'
                                }`}>
                                {day.count > 0 ? `${day.totalMinutes}m` : '—'}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between mt-4 text-xs text-stone-500">
                    <span>Streak: <strong className="text-amber-800">{uniqueDays.size} days</strong></span>
                    <span>{hasToday ? '✅ Today completed' : '⏳ Pending today'}</span>
                </div>
            </div>

            <AnimatePresence>
                {showReport && (
                    <ExperienceReport
                        isOpen={showReport}
                        onClose={() => setShowReport(false)}
                        onSubmit={(data) => {
                            logEvent("journal_entry_saved", {
                                module: "Sadhana Session",
                                text: data.text,
                                gunas: data.gunas,
                            });
                            setShowReport(false);
                        }}
                        title="Sadhana Session Reflection"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

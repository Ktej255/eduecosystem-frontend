"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
    ArrowLeft, Calendar, CheckCircle2, Clock, Star,
    Brain, Trophy, PlayCircle, Sun, Moon, Sunrise, RotateCcw,
    ChevronDown, ChevronUp
} from "lucide-react";
import { TOPIC_TITLES } from "@/components/batch1-1/polity/data/polity-types-95";
import { CHAPTER_PRIORITY } from "@/components/batch1/polity/data/chapter-priority";
import { POLITY_PYQS } from "@/components/batch1/polity/data/polity-pyqs";

// ─── Types ────────────────────────────────────────────────────────────────────

type Slot = 'morning' | 'afternoon' | 'evening';
interface DayTask {
    topicId: number;
    title: string;
    slot: Slot;
    activity: 'Read' | 'MCQ' | 'Flash' | 'Revision';
    durationMin: number;
    priority: string;
    pyqCount: number;
    mastery: string;
}
interface StudyDay {
    day: number;
    date: string;
    tasks: DayTask[];
    totalMin: number;
    isToday: boolean;
    isPast: boolean;
}

// ─── Slot config ────────────────────────────────────────────────────────────

const SLOT_CONFIG: Record<Slot, { label: string; icon: React.ElementType; color: string; bg: string; border: string }> = {
    morning:   { label: 'Morning',   icon: Sun,    color: '#FCD34D', bg: '#241407', border: '#B45309' },
    afternoon: { label: 'Afternoon', icon: Sunrise, color: '#60A5FA', bg: '#0B1629', border: '#1E40AF' },
    evening:   { label: 'Evening',   icon: Moon,   color: '#A78BFA', bg: '#12062A', border: '#5B21B6' },
};

const ACTIVITY_LABEL = { Read: '📖 Read', MCQ: '🎯 MCQ', Flash: '⚡ Flash', Revision: '🔄 Revision' };
const ACTIVITY_COLOR: Record<string, string> = {
    Read: '#60A5FA', MCQ: '#4ADE80', Flash: '#FCD34D', Revision: '#F87171'
};

// ─── Plan Generator ───────────────────────────────────────────────────────────

function buildPYQFreq() {
    const freq: Record<number, number> = {};
    for (const q of POLITY_PYQS) {
        const match = TOPIC_TITLES.find(t =>
            t.title.toLowerCase().split(' ').some(w => w.length > 4 && q.topic.toLowerCase().includes(w))
        );
        if (match) freq[match.id] = (freq[match.id] || 0) + 1;
    }
    return freq;
}

function generatePlan(
    progress: Record<string, any>,
    durationDays: number,
    dailyMinutes: number
): StudyDay[] {
    const pyqFreq = buildPYQFreq();
    const today = new Date();

    // Score each topic: priority + pyq + pending mastery
    const scored = TOPIC_TITLES.map(t => {
        const prog = progress[t.id];
        let masteryScore = 3; // untouched = highest need
        if (prog) {
            const vals = Object.values(prog) as string[];
            const done = vals.filter(v => v === 'completed' || v === 'platinum').length;
            const total = vals.length;
            if (done >= total * 0.8) masteryScore = 0; // mastered
            else if (done >= total * 0.3) masteryScore = 1;
            else masteryScore = 2; // weak
        }
        const priScore = { MUST_KNOW: 10, IMPORTANT: 6, OPTIONAL: 2 }[CHAPTER_PRIORITY[t.id] || 'OPTIONAL'] ?? 2;
        const pyqScore = Math.min(pyqFreq[t.id] || 0, 10);
        const total = priScore + pyqScore + masteryScore;
        return { ...t, score: total, masteryScore, pyqCount: pyqFreq[t.id] || 0 };
    }).sort((a, b) => b.score - a.score);

    const days: StudyDay[] = [];
    let topicIdx = 0;
    const SLOTS: Slot[] = ['morning', 'afternoon', 'evening'];

    for (let d = 0; d < durationDays; d++) {
        const date = new Date(today);
        date.setDate(today.getDate() + d);
        const dateStr = date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });

        const tasks: DayTask[] = [];
        let minLeft = dailyMinutes;

        // 3 topics per day: morning Read (20min), afternoon MCQ (15min), evening Flash (10min)
        const dayTopics = scored.slice(topicIdx, topicIdx + 3);
        topicIdx += 3;
        if (topicIdx >= scored.length) topicIdx = 0; // cycle

        const slotsActivities: { slot: Slot; activity: DayTask['activity']; min: number }[] = [
            { slot: 'morning', activity: 'Read', min: 20 },
            { slot: 'afternoon', activity: 'MCQ', min: 15 },
            { slot: 'evening', activity: 'Flash', min: 10 },
        ];

        dayTopics.forEach((topic, i) => {
            const sa = slotsActivities[i % 3];
            if (minLeft >= sa.min) {
                tasks.push({
                    topicId: topic.id,
                    title: topic.title,
                    slot: sa.slot,
                    activity: sa.activity,
                    durationMin: sa.min,
                    priority: CHAPTER_PRIORITY[topic.id] || 'OPTIONAL',
                    pyqCount: topic.pyqCount,
                    mastery: ['mastered', 'weak', 'in-progress', 'untouched'][topic.masteryScore] ?? 'untouched',
                });
                minLeft -= sa.min;
            }
        });

        // Add revision slot every 7th day
        if (d > 0 && d % 7 === 0) {
            tasks.push({
                topicId: 0,
                title: 'Weekly Revision — All Weak Topics',
                slot: 'evening',
                activity: 'Revision',
                durationMin: 30,
                priority: 'MUST_KNOW',
                pyqCount: 0,
                mastery: 'untouched',
            });
        }

        days.push({
            day: d + 1,
            date: dateStr,
            tasks,
            totalMin: tasks.reduce((s, t) => s + t.durationMin, 0),
            isToday: d === 0,
            isPast: d < 0,
        });
    }

    return days;
}

// ─── Day Card ────────────────────────────────────────────────────────────────

function DayCard({ day, defaultOpen }: { day: StudyDay; defaultOpen?: boolean }) {
    const [open, setOpen] = useState(defaultOpen ?? false);
    const [done, setDone] = useState<Set<number>>(new Set());

    const doneCount = done.size;
    const pct = Math.round((doneCount / (day.tasks.length || 1)) * 100);

    return (
        <div className="rounded-2xl border overflow-hidden transition-all"
            style={{
                backgroundColor: day.isToday ? '#0E1420' : '#0A0C10',
                borderColor: day.isToday ? '#2563EB' : '#1F2937',
                boxShadow: day.isToday ? '0 0 20px rgba(37,99,235,0.15)' : 'none',
            }}>
            {/* Header */}
            <button
                className="w-full flex items-center gap-4 px-5 py-4 hover:bg-white/[0.02] transition-colors"
                onClick={() => setOpen(p => !p)}>
                {/* Day number */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0"
                    style={{
                        backgroundColor: day.isToday ? '#1D4ED8' : '#111',
                        color: day.isToday ? '#fff' : '#4B5563',
                    }}>
                    {day.day}
                </div>

                <div className="flex-1 text-left min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-sm" style={{ color: day.isToday ? '#F9FAFB' : '#6B7280' }}>
                            {day.date}
                        </span>
                        {day.isToday && (
                            <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded"
                                style={{ backgroundColor: '#1D4ED8', color: '#BFDBFE' }}>TODAY</span>
                        )}
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-mono" style={{ color: '#374151' }}>
                        <span><Clock className="w-3 h-3 inline mr-1" />{day.totalMin} min</span>
                        <span>{day.tasks.length} tasks</span>
                        {doneCount > 0 && <span style={{ color: '#4ADE80' }}>{pct}% done</span>}
                    </div>
                </div>

                {/* Mini progress */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    {day.tasks.map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: done.has(i) ? '#4ADE80' : '#1F2937' }} />
                    ))}
                    {open ? <ChevronUp className="w-4 h-4 ml-1" style={{ color: '#374151' }} />
                        : <ChevronDown className="w-4 h-4 ml-1" style={{ color: '#374151' }} />}
                </div>
            </button>

            {/* Tasks */}
            {open && (
                <div className="border-t px-5 py-4 space-y-3" style={{ borderColor: '#1F2937' }}>
                    {day.tasks.map((task, i) => {
                        const slotCfg = SLOT_CONFIG[task.slot];
                        const SlotIcon = slotCfg.icon;
                        const isDone = done.has(i);
                        return (
                            <div key={i}
                                className="flex items-start gap-3 p-3 rounded-xl border transition-all"
                                style={{
                                    backgroundColor: isDone ? '#041A0C' : slotCfg.bg,
                                    borderColor: isDone ? '#16A34A' : slotCfg.border,
                                    opacity: isDone ? 0.7 : 1,
                                }}>
                                <button
                                    onClick={() => setDone(p => { const n = new Set(p); n.has(i) ? n.delete(i) : n.add(i); return n; })}
                                    className="mt-0.5 flex-shrink-0">
                                    {isDone
                                        ? <CheckCircle2 className="w-5 h-5 text-green-400" />
                                        : <div className="w-5 h-5 rounded-full border-2" style={{ borderColor: (slotCfg as {border?: string})?.border }} />
                                    }
                                </button>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                                        {React.createElement(SlotIcon as React.ElementType, { className: "w-3 h-3 flex-shrink-0", style: { color: (slotCfg as {color?: string})?.color } })}
                                        <span className="text-[10px] font-mono" style={{ color: (slotCfg as {color?: string})?.color }}>
                                            {slotCfg.label}
                                        </span>
                                        <span className="text-[10px] font-mono font-bold px-1.5 rounded"
                                            style={{ backgroundColor: '#0A0C10', color: ACTIVITY_COLOR[(task as {activity: keyof typeof ACTIVITY_COLOR}).activity] }}>
                                            {ACTIVITY_LABEL[(task as {activity: keyof typeof ACTIVITY_LABEL}).activity]}
                                        </span>
                                        <span className="text-[10px] font-mono" style={{ color: '#374151' }}>
                                            {task.durationMin}min
                                        </span>
                                        {task.priority === 'MUST_KNOW' && (
                                            <span className="text-[10px] text-red-400">★</span>
                                        )}
                                        {task.pyqCount > 0 && (
                                            <span className="text-[10px] font-mono px-1 rounded"
                                                style={{ backgroundColor: '#241407', color: '#D97706' }}>
                                                {task.pyqCount}Q
                                            </span>
                                        )}
                                    </div>
                                    <div className="font-bold text-sm" style={{ color: isDone ? '#6B7280' : '#E5E7EB' }}>
                                        {task.topicId > 0 ? `${task.topicId}. ` : ''}{task.title}
                                    </div>
                                </div>

                                {task.topicId > 0 && (
                                    <Link href={`/student/batch1/polity/chapter/${task.topicId}`}
                                        className="flex-shrink-0 p-1.5 rounded-lg border transition-all hover:scale-110"
                                        style={{ borderColor: slotCfg.border, color: slotCfg.color }}>
                                        <PlayCircle className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function LearningPath() {
    const [progress, setProgress] = useState<Record<string, any>>({});
    const [durationDays, setDurationDays] = useState(30);
    const [dailyMinutes, setDailyMinutes] = useState(45);
    const [generated, setGenerated] = useState(false);
    const [plan, setPlan] = useState<StudyDay[]>([]);
    const [expandedWeek, setExpandedWeek] = useState(0);

    useEffect(() => {
        try {
            const raw = localStorage.getItem('polity_95_progress');
            if (raw) setProgress(JSON.parse(raw));
        } catch { }
    }, []);

    const masteryStats = useMemo(() => {
        let mastered = 0, inProgress = 0, weak = 0, untouched = 0;
        for (const t of TOPIC_TITLES) {
            const prog = progress[t.id];
            if (!prog) { untouched++; continue; }
            const vals = Object.values(prog) as string[];
            const done = vals.filter(v => v === 'completed' || v === 'platinum').length;
            const total = vals.length;
            if (done >= total * 0.8) mastered++;
            else if (done >= total * 0.3) inProgress++;
            else weak++;
        }
        return { mastered, inProgress, weak, untouched };
    }, [progress]);

    const handleGenerate = () => {
        const p = generatePlan(progress, durationDays, dailyMinutes);
        setPlan(p);
        setGenerated(true);
    };

    const weeks = useMemo(() => {
        const w: StudyDay[][] = [];
        for (let i = 0; i < plan.length; i += 7) w.push(plan.slice(i, i + 7));
        return w;
    }, [plan]);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#070809', fontFamily: "'Inter', system-ui, sans-serif" }}>
            {/* Top Bar */}
            <div className="sticky top-0 z-40 flex items-center border-b"
                style={{ backgroundColor: '#0D0F12', borderColor: '#1F2937', height: '48px' }}>
                <Link href="/student/batch1/polity"
                    className="flex items-center gap-2 px-4 h-full border-r text-xs font-mono hover:bg-[#1A1C20] transition-colors"
                    style={{ borderColor: '#1F2937', color: '#6B7280' }}>
                    <ArrowLeft className="w-3 h-3" /> POLITY
                </Link>
                <div className="px-4 h-full flex items-center gap-2 text-xs font-mono font-bold" style={{ color: '#A78BFA' }}>
                    <Calendar className="w-3 h-3" /> AI LEARNING PATH
                </div>
                {generated && (
                    <button onClick={() => { setGenerated(false); setPlan([]); }}
                        className="flex items-center gap-1.5 px-4 h-full border-l text-xs font-mono hover:bg-[#1A1C20] transition-colors"
                        style={{ borderColor: '#1F2937', color: '#6B7280', marginLeft: 'auto' }}>
                        <RotateCcw className="w-3 h-3" /> Reconfigure
                    </button>
                )}
            </div>

            {!generated ? (
                /* ─── Config Screen ─────────────────────────────────────── */
                <div className="max-w-2xl mx-auto px-4 md:px-6 py-10">
                    <div className="mb-8">
                        <div className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: '#374151' }}>
                            PERSONALISED STUDY PLAN
                        </div>
                        <h1 className="font-black text-2xl md:text-3xl mb-2" style={{ color: '#F9FAFB', letterSpacing: '-0.02em' }}>
                            AI Learning Path
                        </h1>
                        <p className="text-sm" style={{ color: '#6B7280' }}>
                            We'll analyse your current progress and generate a prioritised daily schedule — MUST KNOW topics first, PYQ hotspots mapped in.
                        </p>
                    </div>

                    {/* Current State Summary */}
                    <div className="p-5 rounded-2xl border mb-6" style={{ backgroundColor: '#0D0F12', borderColor: '#1F2937' }}>
                        <div className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: '#374151' }}>
                            YOUR CURRENT STATE
                        </div>
                        <div className="grid grid-cols-4 gap-3 text-center">
                            {[
                                { label: 'Mastered', n: masteryStats.mastered, color: '#4ADE80' },
                                { label: 'In Prog.', n: masteryStats.inProgress, color: '#FCD34D' },
                                { label: 'Weak', n: masteryStats.weak, color: '#F87171' },
                                { label: 'Untouched', n: masteryStats.untouched, color: '#4B5563' },
                            ].map(s => (
                                <div key={s.label}>
                                    <div className="text-xl font-black" style={{ color: s.color }}>{s.n}</div>
                                    <div className="text-[10px] font-mono" style={{ color: '#374151' }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#111' }}>
                            <div className="h-full rounded-full bg-gradient-to-r from-green-500 via-amber-400 to-red-500"
                                style={{ width: `${((masteryStats.mastered + masteryStats.inProgress) / 95) * 100}%` }} />
                        </div>
                    </div>

                    {/* Config Options */}
                    <div className="space-y-4 mb-8">
                        <div className="p-5 rounded-2xl border" style={{ backgroundColor: '#0D0F12', borderColor: '#1F2937' }}>
                            <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: '#D1D5DB' }}>
                                <Calendar className="w-4 h-4 text-purple-400" /> Duration
                            </h3>
                            <div className="flex gap-2">
                                {[7, 14, 30, 60].map(d => (
                                    <button key={d} onClick={() => setDurationDays(d)}
                                        className="flex-1 py-2 rounded-lg font-mono font-bold text-sm border transition-all"
                                        style={{
                                            backgroundColor: durationDays === d ? '#12062A' : 'transparent',
                                            borderColor: durationDays === d ? '#7C3AED' : '#1F2937',
                                            color: durationDays === d ? '#C4B5FD' : '#4B5563',
                                        }}>
                                        {d}d
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-5 rounded-2xl border" style={{ backgroundColor: '#0D0F12', borderColor: '#1F2937' }}>
                            <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: '#D1D5DB' }}>
                                <Clock className="w-4 h-4 text-sky-400" /> Daily Study Target
                            </h3>
                            <div className="flex gap-2">
                                {[30, 45, 60, 90].map(m => (
                                    <button key={m} onClick={() => setDailyMinutes(m)}
                                        className="flex-1 py-2 rounded-lg font-mono font-bold text-sm border transition-all"
                                        style={{
                                            backgroundColor: dailyMinutes === m ? '#0B1629' : 'transparent',
                                            borderColor: dailyMinutes === m ? '#2563EB' : '#1F2937',
                                            color: dailyMinutes === m ? '#93C5FD' : '#4B5563',
                                        }}>
                                        {m}m
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button onClick={handleGenerate}
                        className="w-full py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all"
                        style={{ backgroundColor: '#7C3AED', color: '#fff' }}>
                        <Brain className="w-5 h-5" />
                        Generate My {durationDays}-Day Learning Path
                    </button>
                    <p className="text-center text-xs mt-3" style={{ color: '#374151' }}>
                        Adapts to your mastery · MUST KNOW topics first · PYQ hotspots included
                    </p>
                </div>

            ) : (
                /* ─── Plan View ─────────────────────────────────────────── */
                <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
                    {/* Summary Banner */}
                    <div className="flex items-center justify-between p-5 rounded-2xl border mb-8"
                        style={{ backgroundColor: '#12062A', borderColor: '#5B21B6' }}>
                        <div>
                            <div className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: '#7C3AED' }}>
                                YOUR PLAN IS READY
                            </div>
                            <h2 className="font-black text-xl" style={{ color: '#F9FAFB' }}>
                                {durationDays}-Day Study Roadmap
                            </h2>
                            <p className="text-sm mt-1" style={{ color: '#7C3AED' }}>
                                {dailyMinutes} min/day · {plan.reduce((s, d) => s + d.tasks.length, 0)} total tasks
                            </p>
                        </div>
                        <Trophy className="w-12 h-12" style={{ color: '#A78BFA', opacity: 0.4 }} />
                    </div>

                    {/* Milestones */}
                    <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                        {[
                            { day: 7, label: 'Week 1 ✓', color: '#4ADE80' },
                            { day: 14, label: 'Midpoint 🔥', color: '#FCD34D' },
                            { day: durationDays, label: 'UPSC Ready 🏆', color: '#F87171' },
                        ].map(m => (
                            <div key={m.day} className="flex-shrink-0 px-3 py-2 rounded-xl border text-center"
                                style={{ backgroundColor: '#0A0C10', borderColor: '#1F2937', minWidth: '90px' }}>
                                <div className="font-black text-sm" style={{ color: m.color }}>Day {m.day}</div>
                                <div className="text-[10px] font-mono" style={{ color: '#4B5563' }}>{m.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Weekly accordions */}
                    <div className="space-y-4">
                        {weeks.map((week, wi) => (
                            <div key={wi}>
                                <button
                                    onClick={() => setExpandedWeek(prev => prev === wi ? -1 : wi)}
                                    className="w-full flex items-center gap-3 mb-2 px-2">
                                    <span className="text-[10px] font-mono font-black uppercase tracking-widest"
                                        style={{ color: '#374151' }}>
                                        Week {wi + 1}
                                    </span>
                                    <div className="flex-1 h-px" style={{ backgroundColor: '#1F2937' }} />
                                    {expandedWeek === wi
                                        ? <ChevronUp className="w-3 h-3" style={{ color: '#374151' }} />
                                        : <ChevronDown className="w-3 h-3" style={{ color: '#374151' }} />}
                                </button>
                                {expandedWeek === wi && (
                                    <div className="space-y-3">
                                        {week.map(day => (
                                            <DayCard key={day.day} day={day} defaultOpen={day.isToday} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

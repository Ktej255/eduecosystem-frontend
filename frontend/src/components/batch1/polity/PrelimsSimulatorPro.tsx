"use client";

import React, { useState, useMemo, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import {
    ArrowLeft, Play, Settings, Filter, Timer, Trophy, XCircle,
    CheckCircle, ChevronLeft, ChevronRight, RotateCcw, FlameIcon,
    BookmarkPlus, AlertTriangle, ListFilter, Target, Clock
} from "lucide-react";
import { POLITY_PYQS } from "@/components/batch1/polity/data/polity-pyqs";
import type { PYQQuestion } from "@/lib/pyq/pyq-types";

// ─── Config Types ──────────────────────────────────────────────────────────────

interface SimConfig {
    years: number[];
    topics: string[];
    count: number;
    negativeMarking: boolean;
    timeLimit: number; // minutes, 0 = unlimited
    difficulty: 'all' | 'Easy' | 'Moderate' | 'Tough';
}

// ─── Topic Normalizer (mirrors PYQYearHeatmap) ─────────────────────────────────

const TOPIC_MAP: Record<string, string> = {
    "Emergency/Misc": "Emergency",
    "Emergency": "Emergency",
    "Constitutional Bodies": "Const. Bodies",
    "Constitutional Framework": "Const. Framework",
    "Making of Constitution": "Making of Const.",
    "Scheduled Areas": "Sched. Areas",
    "Scheduled Tribes": "ST / SC",
    "State Government": "State Govt",
    "Local Government": "Local Govt",
    "Parties / Elections": "Elections",
};
function normalizeTopic(t: string) { return TOPIC_MAP[t] ?? t; }

const YEARS = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];

// ─── Score helpers ──────────────────────────────────────────────────────────────

function calcScore(questions: PYQQuestion[], answers: (number | undefined)[], neg: boolean) {
    let score = 0, correct = 0, wrong = 0, skipped = 0;
    questions.forEach((q, i) => {
        const a = answers[i];
        if (a === undefined) { skipped++; return; }
        if (a === q.correctIndex) { score += 2; correct++; }
        else { if (neg) score -= 0.67; wrong++; }
    });
    return { score: parseFloat(score.toFixed(2)), correct, wrong, skipped };
}

// ─── Config Screen ──────────────────────────────────────────────────────────────

function ConfigScreen({ onStart }: { onStart: (c: SimConfig) => void }) {
    const allTopics = useMemo(() => {
        const s = new Set(POLITY_PYQS.map(q => normalizeTopic(q.topic)));
        return Array.from(s).sort();
    }, []);

    const [years, setYears] = useState<number[]>([...YEARS]);
    const [topics, setTopics] = useState<string[]>([...allTopics]);
    const [count, setCount] = useState(25);
    const [neg, setNeg] = useState(true);
    const [timeLimit, setTimeLimit] = useState(30);
    const [difficulty, setDifficulty] = useState<SimConfig['difficulty']>('all');

    const availableCount = useMemo(() => {
        return POLITY_PYQS.filter(q => {
            const yearOk = years.includes(q.year);
            const topicOk = topics.includes(normalizeTopic(q.topic));
            const diffOk = difficulty === 'all' || q.difficulty === difficulty;
            return yearOk && topicOk && diffOk;
        }).length;
    }, [years, topics, difficulty]);

    const toggleYear = (y: number) =>
        setYears(p => p.includes(y) ? p.filter(x => x !== y) : [...p, y]);

    const toggleTopic = (t: string) =>
        setTopics(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);

    return (
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
            <div className="mb-8">
                <div className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: "#374151" }}>
                    UPSC POLITY / PRELIMS SIMULATOR
                </div>
                <h1 className="font-black text-2xl md:text-3xl mb-1" style={{ color: "#F9FAFB", letterSpacing: "-0.02em" }}>
                    Configure Your Test
                </h1>
                <p className="text-sm" style={{ color: "#6B7280" }}>
                    {availableCount} questions match your filters
                </p>
            </div>

            <div className="space-y-6">
                {/* Year Selection */}
                <div className="p-5 rounded-xl border" style={{ backgroundColor: "#0D0F12", borderColor: "#1F2937" }}>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-sm flex items-center gap-2" style={{ color: "#D1D5DB" }}>
                            <Calendar className="w-4 h-4 text-amber-400" /> Years
                        </h3>
                        <div className="flex gap-2">
                            <button onClick={() => setYears([...YEARS])} className="text-[10px] font-mono text-amber-400 hover:underline">All</button>
                            <button onClick={() => setYears([2024, 2023, 2022, 2021, 2020])} className="text-[10px] font-mono text-sky-400 hover:underline">Last 5</button>
                            <button onClick={() => setYears([])} className="text-[10px] font-mono text-red-400 hover:underline">None</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {YEARS.map(y => (
                            <button key={y} onClick={() => toggleYear(y)}
                                className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold border transition-all"
                                style={{
                                    backgroundColor: years.includes(y) ? '#F59E0B22' : 'transparent',
                                    borderColor: years.includes(y) ? '#F59E0B' : '#1F2937',
                                    color: years.includes(y) ? '#F59E0B' : '#4B5563',
                                }}>
                                {y}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Topics */}
                <div className="p-5 rounded-xl border" style={{ backgroundColor: "#0D0F12", borderColor: "#1F2937" }}>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-sm flex items-center gap-2" style={{ color: "#D1D5DB" }}>
                            <ListFilter className="w-4 h-4 text-emerald-400" /> Topics
                        </h3>
                        <div className="flex gap-2">
                            <button onClick={() => setTopics([...allTopics])} className="text-[10px] font-mono text-emerald-400 hover:underline">All</button>
                            <button onClick={() => setTopics([])} className="text-[10px] font-mono text-red-400 hover:underline">None</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {allTopics.map(t => (
                            <button key={t} onClick={() => toggleTopic(t)}
                                className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold border transition-all"
                                style={{
                                    backgroundColor: topics.includes(t) ? '#05472A' : 'transparent',
                                    borderColor: topics.includes(t) ? '#16A34A' : '#1F2937',
                                    color: topics.includes(t) ? '#4ADE80' : '#4B5563',
                                }}>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Settings Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Question Count */}
                    <div className="p-5 rounded-xl border" style={{ backgroundColor: "#0D0F12", borderColor: "#1F2937" }}>
                        <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "#D1D5DB" }}>
                            <Target className="w-4 h-4 text-sky-400" /> Questions
                        </h3>
                        <div className="flex gap-2">
                            {[10, 25, 50, 100].map(n => (
                                <button key={n} onClick={() => setCount(n)}
                                    className="flex-1 py-2 rounded-lg text-xs font-mono font-bold border transition-all"
                                    style={{
                                        backgroundColor: count === n ? '#1D4ED8' : 'transparent',
                                        borderColor: count === n ? '#3B82F6' : '#1F2937',
                                        color: count === n ? '#BFDBFE' : '#4B5563',
                                    }}>
                                    {n}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Time Limit */}
                    <div className="p-5 rounded-xl border" style={{ backgroundColor: "#0D0F12", borderColor: "#1F2937" }}>
                        <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "#D1D5DB" }}>
                            <Clock className="w-4 h-4 text-rose-400" /> Time (mins)
                        </h3>
                        <div className="flex gap-2">
                            {[0, 15, 30, 60].map(t => (
                                <button key={t} onClick={() => setTimeLimit(t)}
                                    className="flex-1 py-2 rounded-lg text-xs font-mono font-bold border transition-all"
                                    style={{
                                        backgroundColor: timeLimit === t ? '#7F1D1D' : 'transparent',
                                        borderColor: timeLimit === t ? '#DC2626' : '#1F2937',
                                        color: timeLimit === t ? '#FCA5A5' : '#4B5563',
                                    }}>
                                    {t === 0 ? '∞' : t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Difficulty */}
                    <div className="p-5 rounded-xl border" style={{ backgroundColor: "#0D0F12", borderColor: "#1F2937" }}>
                        <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "#D1D5DB" }}>
                            <FlameIcon className="w-4 h-4 text-orange-400" /> Difficulty
                        </h3>
                        <div className="flex gap-2">
                            {(['all', 'Easy', 'Moderate', 'Tough'] as const).map(d => (
                                <button key={d} onClick={() => setDifficulty(d)}
                                    className="flex-1 py-2 rounded-lg text-[10px] font-mono font-bold border transition-all"
                                    style={{
                                        backgroundColor: difficulty === d ? '#3B2507' : 'transparent',
                                        borderColor: difficulty === d ? '#D97706' : '#1F2937',
                                        color: difficulty === d ? '#FCD34D' : '#4B5563',
                                    }}>
                                    {d === 'all' ? 'All' : d}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Negative Marking */}
                    <div className="p-5 rounded-xl border" style={{ backgroundColor: "#0D0F12", borderColor: "#1F2937" }}>
                        <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "#D1D5DB" }}>
                            <AlertTriangle className="w-4 h-4 text-rose-400" /> Negative Marking
                        </h3>
                        <button onClick={() => setNeg(p => !p)}
                            className="w-full py-2 rounded-lg text-sm font-bold border transition-all"
                            style={{
                                backgroundColor: neg ? '#450A0A' : '#0A2010',
                                borderColor: neg ? '#DC2626' : '#16A34A',
                                color: neg ? '#FCA5A5' : '#4ADE80',
                            }}>
                            {neg ? '⚠️ -0.67 per wrong' : '✅ No penalty'}
                        </button>
                    </div>
                </div>

                {/* Start Button */}
                <button
                    disabled={availableCount === 0 || years.length === 0 || topics.length === 0}
                    onClick={() => onStart({ years, topics, count: Math.min(count, availableCount), negativeMarking: neg, timeLimit, difficulty })}
                    className="w-full py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#F59E0B', color: '#000' }}
                >
                    <Play className="w-5 h-5 fill-current" />
                    Start Simulator · {Math.min(count, availableCount)} Questions
                </button>
            </div>
        </div>
    );
}

// Temporary: missing Calendar import fix
const Calendar = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

// ─── Exam Screen ────────────────────────────────────────────────────────────────

function ExamScreen({
    questions,
    config,
    onFinish,
    onReset,
}: {
    questions: PYQQuestion[];
    config: SimConfig;
    onFinish: (answers: (number | undefined)[]) => void;
    onReset: () => void;
}) {
    const [idx, setIdx] = useState(0);
    const [answers, setAnswers] = useState<(number | undefined)[]>(new Array(questions.length).fill(undefined));
    const [flagged, setFlagged] = useState<Set<number>>(new Set());
    const [submitted, setSubmitted] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (submitted) return;
        timerRef.current = setInterval(() => {
            setElapsed(p => {
                if (config.timeLimit > 0 && p >= config.timeLimit * 60) {
                    clearInterval(timerRef.current!);
                    setSubmitted(true);
                    onFinish(answers);
                    return p;
                }
                return p + 1;
            });
        }, 1000);
        return () => clearInterval(timerRef.current!);
    }, [submitted]);

    const q = questions[idx];
    const timeLeft = config.timeLimit > 0 ? config.timeLimit * 60 - elapsed : null;
    const isTimeCritical = timeLeft !== null && timeLeft < 120;

    const handleAnswer = (opt: number) => {
        if (submitted) return;
        setAnswers(prev => { const n = [...prev]; n[idx] = opt; return n; });
    };

    const handleSubmit = () => {
        setSubmitted(true);
        clearInterval(timerRef.current!);
        onFinish(answers);
    };

    const { score, correct, wrong, skipped } = calcScore(questions, answers, config.negativeMarking);
    const isAnswered = answers[idx] !== undefined;
    const isCorrect = submitted && answers[idx] === q.correctIndex;
    const isWrong = submitted && answers[idx] !== undefined && answers[idx] !== q.correctIndex;

    return (
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-6">
            {/* ─── Sticky Header ─── */}
            <div className="sticky top-0 z-30 flex items-center gap-3 mb-6 py-3 px-4 rounded-xl border"
                style={{ backgroundColor: '#0D0F12CC', borderColor: '#1F2937', backdropFilter: 'blur(8px)' }}>
                <span className="text-xs font-mono font-bold" style={{ color: '#6B7280' }}>
                    {idx + 1} / {questions.length}
                </span>
                {/* Progress */}
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
                    <div className="h-full bg-amber-400 transition-all rounded-full"
                        style={{ width: `${((idx + 1) / questions.length) * 100}%` }} />
                </div>
                {/* Timer */}
                <div className={`font-mono text-sm font-bold flex items-center gap-1 ${isTimeCritical ? 'text-red-400' : 'text-muted-foreground'}`}>
                    <Timer className="w-4 h-4" />
                    {timeLeft !== null
                        ? `${String(Math.floor(timeLeft / 60)).padStart(2, '0')}:${String(timeLeft % 60).padStart(2, '0')}`
                        : `${String(Math.floor(elapsed / 60)).padStart(2, '0')}:${String(elapsed % 60).padStart(2, '0')}`
                    }
                </div>
                {/* Answered ratio */}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border"
                    style={{ color: '#4ADE80', borderColor: '#16A34A', backgroundColor: '#052E16' }}>
                    {answers.filter(a => a !== undefined).length} / {questions.length}
                </span>
            </div>

            {/* ─── Question Card ─── */}
            <div className="rounded-2xl border p-6 md:p-8 mb-6"
                style={{ backgroundColor: '#0D0F12', borderColor: isCorrect ? '#16A34A' : isWrong ? '#DC2626' : '#1F2937' }}>

                {/* Meta row */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border text-amber-400 border-amber-700/50 bg-amber-900/20">
                        {q.year}
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: '#374151' }}>CSE Prelims</span>
                    <span style={{ color: '#374151' }}>·</span>
                    <span className="text-[10px] font-mono" style={{
                        color: q.difficulty === 'Easy' ? '#4ADE80' : q.difficulty === 'Tough' ? '#F87171' : '#FCD34D'
                    }}>{q.difficulty}</span>
                    <button onClick={() => setFlagged(p => { const n = new Set(p); n.has(idx) ? n.delete(idx) : n.add(idx); return n; })}
                        className="ml-auto flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded border transition-all"
                        style={{
                            color: flagged.has(idx) ? '#60A5FA' : '#374151',
                            borderColor: flagged.has(idx) ? '#3B82F6' : '#1F2937',
                        }}>
                        <BookmarkPlus className="w-3 h-3" /> {flagged.has(idx) ? 'Flagged' : 'Flag'}
                    </button>
                </div>

                <p className="text-base md:text-lg font-medium leading-relaxed mb-6"
                    style={{ color: '#F9FAFB', whiteSpace: 'pre-wrap' }}>
                    {q.question}
                </p>

                {/* Options */}
                <div className="space-y-3">
                    {q.options.map((opt, oi) => {
                        const isSelected = answers[idx] === oi;
                        const isCorrectOpt = submitted && oi === q.correctIndex;
                        const isWrongOpt = submitted && isSelected && !isCorrectOpt;
                        return (
                            <button key={oi} onClick={() => handleAnswer(oi)} disabled={submitted}
                                className="w-full text-left flex items-start gap-3 px-4 py-3 rounded-xl border transition-all text-sm leading-relaxed"
                                style={{
                                    backgroundColor: isCorrectOpt ? '#052E16' : isWrongOpt ? '#450A0A' : isSelected ? '#1E3A5F' : '#0A0C10',
                                    borderColor: isCorrectOpt ? '#16A34A' : isWrongOpt ? '#DC2626' : isSelected ? '#3B82F6' : '#1F2937',
                                    color: isCorrectOpt ? '#4ADE80' : isWrongOpt ? '#FCA5A5' : isSelected ? '#93C5FD' : '#9CA3AF',
                                    cursor: submitted ? 'default' : 'pointer',
                                }}>
                                <span className="font-mono font-black flex-shrink-0 mt-0.5"
                                    style={{ color: isCorrectOpt ? '#4ADE80' : isWrongOpt ? '#FCA5A5' : isSelected ? '#93C5FD' : '#374151' }}>
                                    {String.fromCharCode(65 + oi)}.
                                </span>
                                <span className="flex-1">{opt}</span>
                                {isCorrectOpt && <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-400" />}
                                {isWrongOpt && <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" />}
                            </button>
                        );
                    })}
                </div>

                {/* Explanation */}
                {submitted && q.explanation && (
                    <div className="mt-5 px-4 py-3 rounded-xl border-l-4 text-sm leading-relaxed"
                        style={{ backgroundColor: '#0A0C10', borderLeftColor: '#2563EB', color: '#9CA3AF' }}>
                        <span className="font-bold text-sky-400">Explanation: </span>{q.explanation}
                    </div>
                )}
            </div>

            {/* ─── Navigation ─── */}
            <div className="flex items-center gap-3">
                <button onClick={() => setIdx(p => Math.max(0, p - 1))} disabled={idx === 0}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg border text-sm font-bold transition-all disabled:opacity-30"
                    style={{ borderColor: '#1F2937', color: '#6B7280' }}>
                    <ChevronLeft className="w-4 h-4" /> Prev
                </button>

                <div className="flex-1 flex justify-center">
                    {!submitted ? (
                        idx < questions.length - 1 ? (
                            <button onClick={() => setIdx(p => p + 1)}
                                className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold border transition-all"
                                style={{ borderColor: '#1F2937', backgroundColor: '#111', color: '#D1D5DB' }}>
                                Next <ChevronRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button onClick={handleSubmit}
                                className="flex items-center gap-2 px-8 py-2 rounded-lg text-sm font-black transition-all"
                                style={{ backgroundColor: '#16A34A', color: '#fff' }}>
                                Submit <CheckCircle className="w-4 h-4" />
                            </button>
                        )
                    ) : (
                        <button onClick={() => setIdx(p => Math.min(p + 1, questions.length - 1))}
                            disabled={idx === questions.length - 1}
                            className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold border transition-all disabled:opacity-30"
                            style={{ borderColor: '#1F2937', color: '#D1D5DB' }}>
                            Next <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>

                <button onClick={() => setIdx(p => Math.min(questions.length - 1, p + 1))} disabled={idx === questions.length - 1}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg border text-sm font-bold transition-all disabled:opacity-30"
                    style={{ borderColor: '#1F2937', color: '#6B7280' }}>
                    Next <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* ─── Question Navigator ─── */}
            <div className="mt-6 p-4 rounded-xl border" style={{ backgroundColor: '#0A0C10', borderColor: '#1F2937' }}>
                <div className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: '#374151' }}>
                    Question Navigator
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {questions.map((_, i) => {
                        const answered = answers[i] !== undefined;
                        const correct = submitted && answers[i] === questions[i].correctIndex;
                        const wrong = submitted && answers[i] !== undefined && answers[i] !== questions[i].correctIndex;
                        return (
                            <button key={i} onClick={() => setIdx(i)}
                                className="w-7 h-7 rounded text-[10px] font-mono font-bold border transition-all"
                                style={{
                                    backgroundColor: i === idx ? '#F59E0B22' : correct ? '#052E16' : wrong ? '#450A0A' : answered ? '#1E3A5F' : '#111',
                                    borderColor: i === idx ? '#F59E0B' : correct ? '#16A34A' : wrong ? '#DC2626' : answered ? '#3B82F6' : '#1F2937',
                                    color: i === idx ? '#F59E0B' : correct ? '#4ADE80' : wrong ? '#F87171' : answered ? '#93C5FD' : '#374151',
                                }}>
                                {i + 1}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Score footer when submitted */}
            {submitted && (
                <div className="mt-6 p-5 rounded-xl border flex flex-col sm:flex-row gap-4 items-center justify-between"
                    style={{ backgroundColor: '#0D0F12', borderColor: '#1F2937' }}>
                    <div className="flex gap-6 text-center">
                        <div>
                            <div className="text-2xl font-black" style={{ color: '#F59E0B' }}>{score}</div>
                            <div className="text-[10px] font-mono text-muted-foreground">SCORE</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-green-400">{correct}</div>
                            <div className="text-[10px] font-mono text-muted-foreground">CORRECT</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-red-400">{wrong}</div>
                            <div className="text-[10px] font-mono text-muted-foreground">WRONG</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black" style={{ color: '#4B5563' }}>{skipped}</div>
                            <div className="text-[10px] font-mono text-muted-foreground">SKIPPED</div>
                        </div>
                    </div>
                    <button onClick={onReset}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm border transition-all"
                        style={{ borderColor: '#F59E0B', color: '#F59E0B' }}>
                        <RotateCcw className="w-4 h-4" /> New Test
                    </button>
                </div>
            )}
        </div>
    );
}

// ─── Main Component ─────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default function PrelimsSimulatorPro() {
    const [config, setConfig] = useState<SimConfig | null>(null);
    const [questions, setQuestions] = useState<PYQQuestion[]>([]);
    const [finished, setFinished] = useState(false);
    const [answers, setAnswers] = useState<(number | undefined)[]>([]);

    const handleStart = useCallback((c: SimConfig) => {
        const pool = POLITY_PYQS.filter(q => {
            const yearOk = c.years.includes(q.year);
            const topicOk = c.topics.includes(normalizeTopic(q.topic));
            const diffOk = c.difficulty === 'all' || q.difficulty === c.difficulty;
            return yearOk && topicOk && diffOk;
        });
        const selected = shuffle(pool).slice(0, c.count);
        setQuestions(selected);
        setConfig(c);
        setFinished(false);
        setAnswers([]);
    }, []);

    const handleFinish = useCallback((ans: (number | undefined)[]) => {
        setAnswers(ans);
        setFinished(true);
    }, []);

    const handleReset = useCallback(() => {
        setConfig(null);
        setQuestions([]);
        setFinished(false);
    }, []);

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#070809", fontFamily: "'Inter', system-ui, sans-serif" }}>
            {/* Top Bar */}
            <div className="sticky top-0 z-40 flex items-center border-b"
                style={{ backgroundColor: "#0D0F12", borderColor: "#1F2937", height: "48px" }}>
                <Link href="/student/batch1/polity"
                    className="flex items-center gap-2 px-4 h-full border-r text-xs font-mono transition-colors hover:bg-[#1A1C20]"
                    style={{ borderColor: "#1F2937", color: "#6B7280" }}>
                    <ArrowLeft className="w-3 h-3" /> POLITY
                </Link>
                <div className="px-4 h-full flex items-center gap-2 text-xs font-mono font-bold" style={{ color: "#F59E0B" }}>
                    <Target className="w-3 h-3" /> PRELIMS SIMULATOR PRO
                </div>
                <div className="flex-1" />
                {config && (
                    <button onClick={handleReset}
                        className="flex items-center gap-1.5 px-4 h-full border-l text-xs font-mono transition-colors hover:bg-[#1A1C20]"
                        style={{ borderColor: "#1F2937", color: "#6B7280" }}>
                        <Settings className="w-3 h-3" /> Reconfigure
                    </button>
                )}
            </div>

            {!config
                ? <ConfigScreen onStart={handleStart} />
                : <ExamScreen
                    questions={questions}
                    config={config}
                    onFinish={handleFinish}
                    onReset={handleReset}
                />
            }
        </div>
    );
}

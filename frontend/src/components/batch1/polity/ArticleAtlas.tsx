"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
    ArrowLeft, BookOpen, CheckCircle2, Circle, TrendingUp, Zap,
    GraduationCap, Star, ChevronRight, MapPin, Layers, X
} from "lucide-react";
import { POLITY_PARTS, TOPIC_TITLES } from "@/components/batch1-1/polity/data/polity-types-95";
import { CHAPTER_PRIORITY } from "@/components/batch1/polity/data/chapter-priority";
import { POLITY_PYQS } from "@/components/batch1/polity/data/polity-pyqs";

// ─── Types ────────────────────────────────────────────────────────────────────

type MasteryLevel = 'mastered' | 'in-progress' | 'weak' | 'untouched';

interface TopicState {
    id: number;
    title: string;
    part: string;
    mastery: MasteryLevel;
    priority: 'MUST_KNOW' | 'IMPORTANT' | 'OPTIONAL';
    pyqCount: number;
}

// ─── Part colour palette (dark-mode safe) ─────────────────────────────────────

const PART_PALETTE: Record<string, { bar: string; chipBase: string; chipBorder: string; label: string }> = {
    blue:    { bar: '#1D4ED8', chipBase: '#0B1629', chipBorder: '#1E40AF', label: '#93C5FD' },
    indigo:  { bar: '#4338CA', chipBase: '#0B0F24', chipBorder: '#3730A3', label: '#A5B4FC' },
    purple:  { bar: '#7C3AED', chipBase: '#120A26', chipBorder: '#6D28D9', label: '#C4B5FD' },
    violet:  { bar: '#7C3AED', chipBase: '#120A26', chipBorder: '#5B21B6', label: '#C4B5FD' },
    green:   { bar: '#16A34A', chipBase: '#052E16', chipBorder: '#15803D', label: '#86EFAC' },
    teal:    { bar: '#0D9488', chipBase: '#04231F', chipBorder: '#0F766E', label: '#99F6E4' },
    amber:   { bar: '#D97706', chipBase: '#241407', chipBorder: '#B45309', label: '#FCD34D' },
    orange:  { bar: '#EA580C', chipBase: '#280E05', chipBorder: '#C2410C', label: '#FDBA74' },
    rose:    { bar: '#E11D48', chipBase: '#240512', chipBorder: '#BE123C', label: '#FDA4AF' },
    cyan:    { bar: '#0891B2', chipBase: '#041B24', chipBorder: '#0E7490', label: '#67E8F9' },
    emerald: { bar: '#059669', chipBase: '#02231A', chipBorder: '#047857', label: '#6EE7B7' },
};

// ─── Mastery colours ──────────────────────────────────────────────────────────

const MASTERY_STYLE: Record<MasteryLevel, { ring: string; dot: string; bg: string }> = {
    mastered:    { ring: '#16A34A', dot: '#4ADE80', bg: '#052E16' },
    'in-progress': { ring: '#D97706', dot: '#FCD34D', bg: '#241407' },
    weak:        { ring: '#DC2626', dot: '#F87171', bg: '#450A0A' },
    untouched:   { ring: '#374151', dot: '#6B7280', bg: '#0A0C10' },
};

// ─── Key articles per topic (UPSC-curated) ─────────────────────────────────────

const TOPIC_ARTICLES: Record<number, string[]> = {
    1: ['Art 1', 'Art 2', 'Art 3', 'Art 4'],
    2: ['Art 393-395', 'Government of India Act 1935'],
    3: ['Preamble', 'Art 368', 'Constituent Assembly'],
    4: ['Art 12-35', 'Art 36-51', 'Art 51A'],
    5: ['Preamble', 'Kesavananda Bharati Case'],
    6: ['Art 1-4', 'Art 239A', 'Art 370'],
    7: ['Art 5-11', 'Citizenship Act 1955'],
    8: ['Art 12-35', 'Art 13', 'Art 32'],
    9: ['Art 36-51', 'Art 37', 'Art 44'],
    10: ['Art 51A (a)-(k)', '86th Amendment 2002'],
    11: ['Art 368', '24th-42nd-44th Amendment'],
    12: ['Kesavananda Bharati 1973', 'Minerva Mills 1980'],
    13: ['Art 74', 'Art 75', 'Art 85', 'Art 108'],
    14: ['Art 1', 'Art 245-255', '7th Schedule'],
    15: ['Art 256-263', 'Art 131', 'Inter-State Council'],
    16: ['Art 263', 'Art 262', 'Art 261'],
    17: ['Art 352', 'Art 356', 'Art 360', '44th Amendment'],
    18: ['Art 52-62', 'Art 72', 'Art 123'],
    19: ['Art 63-71', 'Art 67', '14th VP'],
    20: ['Art 74-75', 'Art 78', 'Art 80'],
    21: ['Art 74-75', 'Art 77', 'Art 164'],
    22: ['Cabinet Secretariat', 'Allocation of Business Rules'],
    23: ['Art 79-122', 'Art 100', 'Art 110'],
    24: ['Art 105', 'Speaker', 'PAC', 'Estimates Committee'],
    25: ['Art 105', 'Constitution 1949'],
    26: ['Art 124-147', 'Art 137', 'Art 141'],
    27: ['Art 13', 'Art 32', 'Art 226', 'Marbury v Madison'],
    28: ['Art 21', 'Art 32', 'Art 142', 'PIL'],
    29: ['Art 32', 'Art 226', 'S.P. Gupta Case 1981'],
    30: ['Art 153-162', 'Art 163', 'Art 200'],
    31: ['Art 163-164', 'Art 167'],
    32: ['Art 163-164', 'Art 167'],
    33: ['Art 168-212', 'Art 200', 'Art 202'],
    34: ['Art 214-231', 'Art 226', 'Art 227'],
    35: ['Art 233-237', 'Art 227'],
    36: ['Art 323A', 'Art 323B', '42nd Amendment'],
    37: ['Consumer Protection Act 2019'],
    38: ['Legal Services Authorities Act 1987', 'Art 39A'],
    39: ['Art 243-243O', '73rd Amendment 1992'],
    40: ['Art 243P-243ZG', '74th Amendment 1992'],
    41: ['Art 239-239AA', 'Art 239AB', 'Art 240'],
    42: ['5th Schedule', '6th Schedule', 'Art 244'],
    43: ['Art 324-329', 'RPA 1950', 'RPA 1951'],
    44: ['Art 315-323', 'UPSC Act'],
    45: ['Art 315', 'Art 316-323'],
    46: ['Art 280-281', 'Finance Commission Act'],
    47: ['Art 279A', '101st Amendment 2016'],
    48: ['Art 338', '65th Amendment 1990'],
    49: ['Art 338A', '89th Amendment 2003'],
    50: ['Art 338B', '102nd Amendment 2018'],
    51: ['Art 350B', '7th Amendment 1956'],
    52: ['Art 148-151', 'CAG (DPC) Act 1971'],
    53: ['Art 76', 'Government of India Act 1935'],
    54: ['Art 165'],
    56: ['NITI Aayog O.M. 2015'],
    57: ['Protection of Human Rights Act 1993', 'Art 21'],
    58: ['PHR Act 1993'],
    59: ['National Commission for Women Act 1990'],
    60: ['PCPNDT Act', 'JJAct 2015'],
    61: ['National Commission for Minorities Act 1992', 'Art 29-30'],
    62: ['RTI Act 2005', 'Art 19(1)(a)'],
    63: ['RTI Act 2005'],
    64: ['CVC Act 2003'],
    65: ['DSPE Act 1946', 'Vineet Narain Case'],
    66: ['Lokpal and Lokayuktas Act 2013', 'Art 253'],
    67: ['NIA Act 2008', 'UAPA'],
    68: ['DM Act 2005', 'Art 21'],
    69: ['Advocates Act 1961'],
    70: ['Law Commissions Act', '22 LCs so far'],
    71: ['Delimitation Act 2002', 'Art 82', 'Art 170'],
    72: ['NEC Act 1971', '6th Schedule'],
    73: ['Art 43B', '97th Amendment 2011'],
    74: ['Art 343-351', '8th Schedule (22 languages)'],
    75: ['Art 308-323', 'Art 310', 'Art 311'],
    76: ['Art 294-300', 'Contract Act 1872'],
    77: ['Art 15(4)', 'Art 16(4)', 'Art 46', '93rd Amendment'],
    78: ['Art 370', 'Art 371A-J'],
    79: ['Art 19(1)(c)', '10th Schedule', 'RPA 1951 S.29A'],
    80: ['Art 19(1)(c)', 'Art 102', 'RPA 1951'],
    81: ['Art 324-329', 'RPA 1950 & 1951'],
    82: ['RPA 1951', 'Art 173', 'Art 84'],
    83: ['Electoral Reforms Committees', 'NOTA 2013'],
    84: ['Voting theories', 'RPA 1951'],
    85: ['Art 74', 'Art 75', 'Hung Parliament'],
    86: ['10th Schedule', '52nd Amendment 1985', 'Nabam Rebia Case'],
    87: ['Art 19(1)(c)', 'Pressure Groups'],
    88: ['Art 1', 'National Integration Council'],
    89: ['Art 253', 'ITBP', 'MEA'],
    90: ['Art 368', 'NCRWC 2002'],
    91: ['Kesavananda 1973', 'SR Bommai 1994', 'Maneka Gandhi 1978'],
    92: ['Art 21', 'Olga Tellis 1985', 'Sunil Batra 1978'],
    93: ['Art 13', 'Art 368', 'Golak Nath 1967'],
    94: ['Eclipse', 'Severability', 'Pith & Substance'],
    95: ['USA Constitution', 'UK Constitution', 'Irish', 'French'],
};

// ─── PYQ frequency map (topic title → count) ─────────────────────────────────

function buildPYQFreq() {
    const freq: Record<string, number> = {};
    for (const q of POLITY_PYQS) {
        freq[q.topic] = (freq[q.topic] || 0) + 1;
    }
    return freq;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ArticleAtlas() {
    const [progress, setProgress] = useState<Record<string, any>>({});
    const [selectedTopic, setSelectedTopic] = useState<TopicState | null>(null);
    const [filterMastery, setFilterMastery] = useState<MasteryLevel | 'all'>('all');

    useEffect(() => {
        try {
            const raw = localStorage.getItem('polity_95_progress');
            if (raw) setProgress(JSON.parse(raw));
        } catch { }
    }, []);

    const pyqFreq = useMemo(() => buildPYQFreq(), []);

    const topicStates = useMemo<TopicState[]>(() =>
        TOPIC_TITLES.map(t => {
            const prog = progress[t.id];
            let mastery: MasteryLevel = 'untouched';
            if (prog) {
                const vals = Object.values(prog);
                const done = vals.filter(v => v === 'completed' || v === 'platinum').length;
                const total = vals.length;
                if (done >= total * 0.8) mastery = 'mastered';
                else if (done >= total * 0.3) mastery = 'in-progress';
                else mastery = 'weak';
            }
            const priority = CHAPTER_PRIORITY[t.id] || 'OPTIONAL';
            // Try to match PYQ frequency by topic title approximation
            const pyqCount = Object.entries(pyqFreq)
                .filter(([k]) => t.title.toLowerCase().split(' ').some(w => w.length > 4 && k.toLowerCase().includes(w)))
                .reduce((s, [, v]) => s + v, 0);
            return { ...t, mastery, priority, pyqCount };
        }), [progress, pyqFreq]);

    const stats = useMemo(() => ({
        mastered: topicStates.filter(t => t.mastery === 'mastered').length,
        inProgress: topicStates.filter(t => t.mastery === 'in-progress').length,
        weak: topicStates.filter(t => t.mastery === 'weak').length,
        untouched: topicStates.filter(t => t.mastery === 'untouched').length,
    }), [topicStates]);

    const filtered = useMemo(() =>
        filterMastery === 'all' ? topicStates : topicStates.filter(t => t.mastery === filterMastery),
        [topicStates, filterMastery]);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#070809', fontFamily: "'Inter', system-ui, sans-serif" }}>
            {/* ─── Top Bar ──────────────────────────────────────────────────── */}
            <div className="sticky top-0 z-40 flex items-center border-b"
                style={{ backgroundColor: '#0D0F12', borderColor: '#1F2937', height: '48px' }}>
                <Link href="/student/batch1/polity"
                    className="flex items-center gap-2 px-4 h-full border-r text-xs font-mono hover:bg-[#1A1C20] transition-colors"
                    style={{ borderColor: '#1F2937', color: '#6B7280' }}>
                    <ArrowLeft className="w-3 h-3" /> POLITY
                </Link>
                <div className="px-4 h-full flex items-center gap-2 text-xs font-mono font-bold" style={{ color: '#60A5FA' }}>
                    <Layers className="w-3 h-3" /> ARTICLE ATLAS
                </div>
                <div className="flex-1" />
                <div className="px-4 h-full flex items-center gap-2 text-xs font-mono" style={{ color: '#374151' }}>
                    {TOPIC_TITLES.length} topics · {POLITY_PARTS.length} parts
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                {/* ─── Header ─────────────────────────────────────────────── */}
                <div className="mb-8">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] mb-2" style={{ color: '#374151' }}>
                        CONSTITUTION OF INDIA / 11 PARTS / 95 TOPICS
                    </div>
                    <h1 className="font-black leading-none mb-3"
                        style={{ color: '#F9FAFB', fontSize: 'clamp(22px,4vw,34px)', letterSpacing: '-0.02em' }}>
                        Article Atlas
                    </h1>
                    <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
                        Interactive constitutional map — colour-coded by your mastery. Click any topic to explore its key articles.
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-4 gap-3 mb-6">
                        {([
                            { label: 'Mastered', count: stats.mastered, color: '#4ADE80', bg: '#052E16', border: '#16A34A', key: 'mastered' },
                            { label: 'In Progress', count: stats.inProgress, color: '#FCD34D', bg: '#241407', border: '#D97706', key: 'in-progress' },
                            { label: 'Weak', count: stats.weak, color: '#F87171', bg: '#450A0A', border: '#DC2626', key: 'weak' },
                            { label: 'Untouched', count: stats.untouched, color: '#4B5563', bg: '#0A0C10', border: '#1F2937', key: 'untouched' },
                        ] as const).map(s => (
                            <button key={s.key}
                                onClick={() => setFilterMastery(prev => prev === s.key ? 'all' : s.key)}
                                className="p-3 rounded-xl border transition-all text-left"
                                style={{
                                    backgroundColor: filterMastery === s.key ? s.bg : '#0A0C10',
                                    borderColor: filterMastery === s.key ? s.border : '#1F2937',
                                }}>
                                <div className="text-xl font-black" style={{ color: s.color }}>{s.count}</div>
                                <div className="text-[10px] font-mono" style={{ color: '#4B5563' }}>{s.label}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ─── Atlas Grid ───────────────────────────────────────────── */}
                <div className="space-y-5">
                    {POLITY_PARTS.map(part => {
                        const palette = PART_PALETTE[part.color] || PART_PALETTE.blue;
                        const partTopics = filtered.filter(t => t.part === part.id);
                        if (partTopics.length === 0) return null;

                        return (
                            <div key={part.id} className="rounded-2xl border overflow-hidden"
                                style={{ borderColor: '#1F2937', backgroundColor: '#0A0C10' }}>
                                {/* Part Header */}
                                <div className="flex items-center gap-3 px-5 py-3 border-b"
                                    style={{ backgroundColor: '#0D0F12', borderBottomColor: '#1F2937' }}>
                                    <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ backgroundColor: palette.bar }} />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono font-black" style={{ color: palette.label }}>
                                                PART {part.number} · {part.id}
                                            </span>
                                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                                                style={{ backgroundColor: palette.chipBase, color: palette.label, border: `1px solid ${palette.chipBorder}` }}>
                                                {partTopics.length} topics
                                            </span>
                                        </div>
                                        <div className="font-bold text-sm" style={{ color: '#E5E7EB' }}>{part.title}</div>
                                    </div>
                                    <div className="ml-auto text-xs" style={{ color: '#374151' }}>{part.icon}</div>
                                </div>

                                {/* Topics Grid */}
                                <div className="p-4 flex flex-wrap gap-2">
                                    {partTopics.map(topic => {
                                        const ms = MASTERY_STYLE[topic.mastery];
                                        const priorityColor = topic.priority === 'MUST_KNOW' ? '#F87171'
                                            : topic.priority === 'IMPORTANT' ? '#FCD34D' : '#4B5563';
                                        return (
                                            <button key={topic.id}
                                                onClick={() => setSelectedTopic(prev => prev?.id === topic.id ? null : topic)}
                                                className="flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all hover:scale-105"
                                                style={{
                                                    backgroundColor: selectedTopic?.id === topic.id ? ms.bg : '#111',
                                                    borderColor: selectedTopic?.id === topic.id ? ms.ring : '#1F2937',
                                                    color: selectedTopic?.id === topic.id ? ms.dot : '#9CA3AF',
                                                    outline: selectedTopic?.id === topic.id ? `1px solid ${ms.ring}40` : 'none',
                                                }}>
                                                {/* Mastery dot */}
                                                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: ms.dot }} />
                                                <span>{topic.id}. {topic.title}</span>
                                                {/* Priority badge */}
                                                {topic.priority !== 'OPTIONAL' && (
                                                    <span style={{ color: priorityColor, fontSize: '9px' }}>
                                                        {topic.priority === 'MUST_KNOW' ? '★' : '◆'}
                                                    </span>
                                                )}
                                                {/* PYQ count badge */}
                                                {topic.pyqCount > 0 && (
                                                    <span className="px-1 rounded text-[9px] font-mono"
                                                        style={{ backgroundColor: '#241407', color: '#D97706' }}>
                                                        {topic.pyqCount}Q
                                                    </span>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ─── Side Panel ────────────────────────────────────────────────── */}
            {selectedTopic && (
                <div
                    className="fixed right-0 top-12 bottom-0 z-30 overflow-y-auto border-l"
                    style={{
                        width: 'min(380px, 90vw)',
                        backgroundColor: '#0D0F12',
                        borderColor: '#1F2937',
                        boxShadow: '-8px 0 32px rgba(0,0,0,0.8)',
                    }}>
                    <div className="sticky top-0 flex items-center justify-between px-5 py-4 border-b"
                        style={{ backgroundColor: '#0D0F12', borderColor: '#1F2937', zIndex: 10 }}>
                        <span className="font-bold text-sm" style={{ color: '#F9FAFB' }}>
                            Topic {selectedTopic.id}
                        </span>
                        <button onClick={() => setSelectedTopic(null)}>
                            <X className="w-4 h-4" style={{ color: '#6B7280' }} />
                        </button>
                    </div>

                    <div className="p-5 space-y-5">
                        {/* Title + Mastery */}
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: MASTERY_STYLE[selectedTopic.mastery].dot }} />
                                <span className="text-[10px] font-mono capitalize" style={{ color: MASTERY_STYLE[selectedTopic.mastery].dot }}>
                                    {selectedTopic.mastery.replace('-', ' ')}
                                </span>
                                {selectedTopic.priority !== 'OPTIONAL' && (
                                    <span className="ml-auto text-[10px] font-mono font-bold px-2 py-0.5 rounded border"
                                        style={{
                                            color: selectedTopic.priority === 'MUST_KNOW' ? '#F87171' : '#FCD34D',
                                            borderColor: selectedTopic.priority === 'MUST_KNOW' ? '#7F1D1D' : '#78350F',
                                            backgroundColor: selectedTopic.priority === 'MUST_KNOW' ? '#450A0A' : '#241407',
                                        }}>
                                        {selectedTopic.priority === 'MUST_KNOW' ? '★ MUST KNOW' : '◆ IMPORTANT'}
                                    </span>
                                )}
                            </div>
                            <h2 className="font-black text-lg leading-snug" style={{ color: '#F9FAFB' }}>
                                {selectedTopic.title}
                            </h2>
                        </div>

                        {/* Articles */}
                        <div>
                            <div className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: '#374151' }}>
                                KEY ARTICLES & REFERENCES
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {(TOPIC_ARTICLES[selectedTopic.id] || ['No articles mapped yet']).map((a, i) => (
                                    <span key={i}
                                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold border"
                                        style={{ backgroundColor: '#0A0C10', borderColor: '#1D4ED8', color: '#93C5FD' }}>
                                        {a}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* PYQ Frequency */}
                        {selectedTopic.pyqCount > 0 && (
                            <div className="px-4 py-3 rounded-xl border"
                                style={{ backgroundColor: '#241407', borderColor: '#B45309' }}>
                                <div className="flex items-center gap-2 text-sm font-bold" style={{ color: '#FCD34D' }}>
                                    <TrendingUp className="w-4 h-4" />
                                    {selectedTopic.pyqCount} PYQ Questions (2011–2024)
                                </div>
                                <p className="text-xs mt-1" style={{ color: '#92400E' }}>
                                    High exam frequency — prioritise this topic
                                </p>
                            </div>
                        )}

                        {/* Priority meaning */}
                        <div className="px-4 py-3 rounded-xl border" style={{ backgroundColor: '#0A0C10', borderColor: '#1F2937' }}>
                            <div className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: '#374151' }}>UPSC PRIORITY</div>
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4" style={{
                                    color: selectedTopic.priority === 'MUST_KNOW' ? '#F87171'
                                        : selectedTopic.priority === 'IMPORTANT' ? '#FCD34D' : '#4B5563'
                                }} />
                                <span className="text-sm font-bold" style={{ color: '#D1D5DB' }}>
                                    {selectedTopic.priority === 'MUST_KNOW' ? 'Must Know — appears every year'
                                        : selectedTopic.priority === 'IMPORTANT' ? 'Important — 2-3 year cycle'
                                            : 'Optional — occasional questions'}
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-2">
                            <Link
                                href={`/student/batch1/polity/chapter/${selectedTopic.id}`}
                                className="flex items-center justify-between w-full px-4 py-3 rounded-xl border text-sm font-bold transition-all hover:border-blue-500/50"
                                style={{ backgroundColor: '#0B1629', borderColor: '#1E40AF', color: '#93C5FD' }}>
                                <span className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" /> Study Chapter
                                </span>
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href={`/student/batch1-1/polity/pyq-heatmap`}
                                className="flex items-center justify-between w-full px-4 py-3 rounded-xl border text-sm font-bold transition-all hover:border-amber-500/50"
                                style={{ backgroundColor: '#1A1000', borderColor: '#92400E', color: '#FCD34D' }}>
                                <span className="flex items-center gap-2">
                                    <Zap className="w-4 h-4" /> See PYQ Heatmap
                                </span>
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href={`/student/batch1-1/polity/simulator`}
                                className="flex items-center justify-between w-full px-4 py-3 rounded-xl border text-sm font-bold transition-all hover:border-green-500/50"
                                style={{ backgroundColor: '#020E06', borderColor: '#14532D', color: '#86EFAC' }}>
                                <span className="flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4" /> Practice MCQs
                                </span>
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, TrendingUp, Zap, BookOpen } from "lucide-react";
import { POLITY_PYQS } from "@/components/batch1/polity/data/polity-pyqs";

// ─── Constants ────────────────────────────────────────────────────────────────

const YEARS = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];

// Normalize/consolidate raw topic strings into broader buckets
const TOPIC_MAP: Record<string, string> = {
    "Fundamental Rights": "Fundamental Rights",
    "DPSP": "DPSP",
    "Preamble": "Preamble",
    "Parliament": "Parliament",
    "Executive": "Executive",
    "Judiciary": "Judiciary",
    "Federalism": "Federalism",
    "Emergency/Misc": "Emergency",
    "Emergency": "Emergency",
    "Amendments": "Amendments",
    "Constitutional Bodies": "Const. Bodies",
    "Constitutional Framework": "Const. Framework",
    "Elections": "Elections",
    "Making of Constitution": "Making of Const.",
    "Scheduled Areas": "Sched. Areas",
    "Scheduled Tribes": "ST / SC",
    "State Government": "State Govt",
    "Local Government": "Local Govt",
    "Anti-Defection": "Anti-Defection",
    "National Symbols": "National Symbols",
    "Citizenship": "Citizenship",
    "Misc": "Misc",
    "Laws": "Laws",
    "Parties / Elections": "Elections",
};

function normalizeTopic(raw: string): string {
    return TOPIC_MAP[raw] ?? raw;
}

// Build unique sorted topic list from the actual data
function getTopics(data: typeof POLITY_PYQS): string[] {
    const set = new Set(data.map(q => normalizeTopic(q.topic)));
    return Array.from(set).sort();
}

// Build map: year -> topic -> count
function buildMatrix(data: typeof POLITY_PYQS) {
    const matrix: Record<number, Record<string, number>> = {};
    for (const q of data) {
        if (!matrix[q.year]) matrix[q.year] = {};
        const t = normalizeTopic(q.topic);
        matrix[q.year][t] = (matrix[q.year][t] || 0) + 1;
    }
    return matrix;
}

// Color scale: 0 → dark, 1 → low, 2 → medium, 3+ → high
function heatColor(count: number): { bg: string; text: string; border: string } {
    if (count === 0) return { bg: '#0A0C10', text: '#1F2937', border: '#111827' };
    if (count === 1) return { bg: '#1C3A2B', text: '#4ADE80', border: '#166534' };
    if (count === 2) return { bg: '#1E3A5F', text: '#60A5FA', border: '#1E40AF' };
    if (count === 3) return { bg: '#3B1F07', text: '#FB923C', border: '#9A3412' };
    return { bg: '#450A0A', text: '#F87171', border: '#7F1D1D' }; // 4+
};

// ─── Component ─────────────────────────────────────────────────────────────────

interface PYQHeatmapProps {
    compact?: boolean;
}

export default function PYQYearHeatmap({ compact = false }: PYQHeatmapProps) {
    const [hoveredCell, setHoveredCell] = useState<{ year: number; topic: string; count: number } | null>(null);
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    const matrix = useMemo(() => buildMatrix(POLITY_PYQS), []);
    const topics = useMemo(() => getTopics(POLITY_PYQS), []);

    const totalByYear = useMemo(() =>
        YEARS.reduce((acc, y) => {
            acc[y] = Object.values(matrix[y] ?? {}).reduce((s, c) => s + c, 0);
            return acc;
        }, {} as Record<number, number>), [matrix]);

    const totalByTopic = useMemo(() =>
        topics.reduce((acc, t) => {
            acc[t] = YEARS.reduce((s, y) => s + (matrix[y]?.[t] ?? 0), 0);
            return acc;
        }, {} as Record<string, number>), [matrix, topics]);

    // Filtered questions for selected cell
    const filteredQs = useMemo(() => {
        if (!selectedYear && !selectedTopic) return [];
        return POLITY_PYQS.filter(q => {
            const topicMatch = selectedTopic ? normalizeTopic(q.topic) === selectedTopic : true;
            const yearMatch = selectedYear ? q.year === selectedYear : true;
            return topicMatch && yearMatch;
        });
    }, [selectedYear, selectedTopic]);

    const maxCount = useMemo(() =>
        Math.max(...YEARS.flatMap(y => topics.map(t => matrix[y]?.[t] ?? 0))), [matrix, topics]);

    return (
        <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            {!compact && (
                <>
                    {/* Top Bar */}
                    <div
                        className="sticky top-0 z-40 flex items-center border-b"
                        style={{ backgroundColor: "#0D0F12", borderColor: "#1F2937", height: "48px" }}
                    >
                        <Link
                            href="/student/batch1/polity"
                            className="flex items-center gap-2 px-4 h-full border-r text-xs font-mono transition-colors hover:bg-[#1A1C20]"
                            style={{ borderColor: "#1F2937", color: "#6B7280" }}
                        >
                            <ArrowLeft className="w-3 h-3" /> POLITY
                        </Link>
                        <div className="px-4 h-full flex items-center gap-2 text-xs font-mono font-bold" style={{ color: "#F59E0B" }}>
                            <Calendar className="w-3 h-3" /> PYQ YEAR HEATMAP
                        </div>
                        <div className="flex-1" />
                        <div className="px-4 h-full flex items-center gap-2 border-l text-xs font-mono" style={{ borderColor: "#1F2937", color: "#4B5563" }}>
                            {POLITY_PYQS.length} Questions · {YEARS.length} Years
                        </div>
                    </div>

                    {/* Header */}
                    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-4">
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] mb-3" style={{ color: "#374151" }}>
                            UPSC CSE PRELIMS / POLITY / 2011–2024
                        </div>
                        <h1 className="font-black mb-2 leading-none" style={{ color: "#F9FAFB", fontSize: "clamp(22px,4vw,34px)", letterSpacing: "-0.02em" }}>
                            PYQ Frequency Heatmap
                        </h1>
                        <p className="text-sm mb-6" style={{ color: "#6B7280" }}>
                            Question counts per topic per year. Click any cell to see the actual questions.
                        </p>

                        {/* Legend */}
                        <div className="flex items-center gap-4 mb-6 flex-wrap">
                            <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "#4B5563" }}>FREQUENCY:</span>
                            {[0, 1, 2, 3, 4].map(n => {
                                const c = heatColor(n);
                                return (
                                    <div key={n} className="flex items-center gap-1.5">
                                        <div className="w-4 h-4 rounded border" style={{ backgroundColor: c.bg, borderColor: c.border }} />
                                        <span className="text-[10px] font-mono" style={{ color: "#6B7280" }}>
                                            {n === 0 ? 'None' : n === 4 ? '4+' : `${n}Q`}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}

            <div className={compact ? '' : 'max-w-7xl mx-auto px-4 md:px-8 pb-8'}>
                {/* Year summary chips */}
                {!compact && (
                    <div className="flex flex-wrap gap-2 mb-5">
                        <button
                            onClick={() => setSelectedYear(null)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all"
                            style={{
                                backgroundColor: selectedYear === null ? '#F59E0B' : 'transparent',
                                borderColor: selectedYear === null ? '#F59E0B' : '#374151',
                                color: selectedYear === null ? '#000' : '#6B7280',
                            }}
                        >
                            All Years
                        </button>
                        {YEARS.map(y => (
                            <button
                                key={y}
                                onClick={() => setSelectedYear(prev => prev === y ? null : y)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all"
                                style={{
                                    backgroundColor: selectedYear === y ? '#F59E0B22' : 'transparent',
                                    borderColor: selectedYear === y ? '#F59E0B' : '#1F2937',
                                    color: selectedYear === y ? '#F59E0B' : '#6B7280',
                                }}
                            >
                                {y}
                                <span className="font-mono text-[9px]" style={{ color: selectedYear === y ? '#F59E0B' : '#374151' }}>
                                    {totalByYear[y] || 0}
                                </span>
                            </button>
                        ))}
                    </div>
                )}

                {/* ─── HEATMAP GRID ─────────────────────────────────────────── */}
                <div className="overflow-x-auto rounded-lg border" style={{ borderColor: '#1F2937' }}>
                    <table className="text-[10px]" style={{ borderCollapse: 'separate', borderSpacing: 0, minWidth: '100%' }}>
                        {/* Header row: Years */}
                        <thead>
                            <tr style={{ backgroundColor: '#0A0C10' }}>
                                <th className="px-3 py-2 text-left sticky left-0 z-10 font-bold border-b border-r min-w-[110px]"
                                    style={{ color: '#6B7280', borderColor: '#1F2937', backgroundColor: '#0A0C10' }}>
                                    TOPIC
                                </th>
                                {(selectedYear ? [selectedYear] : YEARS).map(y => (
                                    <th key={y}
                                        className="px-2 py-2 text-center font-mono font-bold border-b border-r cursor-pointer transition-colors hover:bg-amber-500/10 min-w-[40px]"
                                        style={{
                                            color: selectedYear === y ? '#F59E0B' : '#4B5563',
                                            borderColor: '#1F2937',
                                        }}
                                        onClick={() => setSelectedYear(prev => prev === y ? null : y)}
                                    >
                                        {y}<br />
                                        <span style={{ color: '#374151', fontSize: '9px' }}>{totalByYear[y] || 0}</span>
                                    </th>
                                ))}
                                <th className="px-3 py-2 text-center font-mono font-bold border-b"
                                    style={{ color: '#F59E0B', borderColor: '#1F2937', minWidth: '50px' }}>
                                    TOTAL
                                </th>
                            </tr>
                        </thead>

                        {/* Body rows: Topics */}
                        <tbody>
                            {topics.map(topic => {
                                const rowTotal = totalByTopic[topic] ?? 0;
                                if (rowTotal === 0 && !compact) return null; // hide empty topics in full view
                                return (
                                    <tr
                                        key={topic}
                                        className="hover:bg-white/[0.01] transition-colors"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setSelectedTopic(prev => prev === topic ? null : topic)}
                                    >
                                        {/* Topic label */}
                                        <td
                                            className="px-3 py-1.5 sticky left-0 z-10 font-bold border-b border-r whitespace-nowrap text-[10px]"
                                            style={{
                                                color: selectedTopic === topic ? '#F59E0B' : '#9CA3AF',
                                                borderColor: '#1F2937',
                                                backgroundColor: selectedTopic === topic ? '#1A160B' : '#0A0C10',
                                            }}
                                        >
                                            {topic}
                                        </td>

                                        {/* Year cells */}
                                        {(selectedYear ? [selectedYear] : YEARS).map(y => {
                                            const count = matrix[y]?.[topic] ?? 0;
                                            const { bg, text, border } = heatColor(count);
                                            const isActive = count > 0;
                                            return (
                                                <td key={y}
                                                    className="border-b border-r p-0"
                                                    style={{ borderColor: '#1F2937' }}
                                                    onMouseEnter={() => setHoveredCell({ year: y, topic, count })}
                                                    onMouseLeave={() => setHoveredCell(null)}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (isActive) {
                                                            setSelectedYear(prev => prev === y ? null : y);
                                                            setSelectedTopic(prev => prev === topic ? null : topic);
                                                        }
                                                    }}
                                                >
                                                    <div
                                                        className="flex items-center justify-center font-mono font-bold transition-all hover:scale-110"
                                                        style={{
                                                            backgroundColor: bg,
                                                            borderColor: border,
                                                            color: text,
                                                            height: '28px',
                                                            fontSize: '10px',
                                                            cursor: isActive ? 'pointer' : 'default',
                                                        }}
                                                    >
                                                        {count > 0 ? count : '·'}
                                                    </div>
                                                </td>
                                            );
                                        })}

                                        {/* Row total */}
                                        <td className="border-b px-2 py-1 text-center font-mono font-black text-[10px]"
                                            style={{
                                                borderColor: '#1F2937',
                                                color: rowTotal >= 10 ? '#F87171' : rowTotal >= 5 ? '#F59E0B' : '#4ADE80',
                                                backgroundColor: '#0A0C10',
                                            }}>
                                            {rowTotal}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                        {/* Footer: Year totals */}
                        <tfoot>
                            <tr style={{ backgroundColor: '#0A0C10' }}>
                                <td className="px-3 py-2 sticky left-0 z-10 font-black text-[10px] border-t border-r"
                                    style={{ color: '#F59E0B', borderColor: '#1F2937', backgroundColor: '#0A0C10' }}>
                                    TOTAL / YEAR
                                </td>
                                {(selectedYear ? [selectedYear] : YEARS).map(y => (
                                    <td key={y} className="py-2 text-center font-mono font-black text-[10px] border-t border-r"
                                        style={{ color: '#F59E0B', borderColor: '#1F2937' }}>
                                        {totalByYear[y] || 0}
                                    </td>
                                ))}
                                <td className="py-2 text-center font-mono font-black text-[10px] border-t"
                                    style={{ color: '#F87171', borderColor: '#1F2937' }}>
                                    {POLITY_PYQS.length}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* ─── Hover Tooltip ───────────────────────────────────────── */}
                {hoveredCell && hoveredCell.count > 0 && (
                    <div className="mt-2 px-3 py-2 rounded-lg border text-xs font-mono flex items-center gap-3"
                        style={{ backgroundColor: '#0D0F12', borderColor: '#374151', color: '#9CA3AF' }}>
                        <Zap className="w-3 h-3" style={{ color: '#F59E0B' }} />
                        <strong style={{ color: '#F9FAFB' }}>{hoveredCell.topic}</strong>
                        <span>·</span>
                        <span>{hoveredCell.year}</span>
                        <span>·</span>
                        <strong style={{ color: heatColor(hoveredCell.count).text }}>
                            {hoveredCell.count} question{hoveredCell.count !== 1 ? 's' : ''}
                        </strong>
                        <span style={{ color: '#375151' }}>Click to drill down →</span>
                    </div>
                )}

                {/* ─── Drill-down: Question List ────────────────────────────── */}
                {filteredQs.length > 0 && !compact && (
                    <div className="mt-6">
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpen className="w-4 h-4" style={{ color: '#F59E0B' }} />
                            <h3 className="font-bold text-sm" style={{ color: '#F9FAFB' }}>
                                {filteredQs.length} question{filteredQs.length !== 1 ? 's' : ''} —
                                {selectedTopic && <> {selectedTopic}</>}
                                {selectedYear && <> · {selectedYear}</>}
                            </h3>
                            <button
                                onClick={() => { setSelectedYear(null); setSelectedTopic(null); }}
                                className="ml-auto text-[10px] font-mono px-2 py-1 rounded border hover:bg-red-500/10 transition-colors"
                                style={{ borderColor: '#374151', color: '#6B7280' }}
                            >
                                Clear ✕
                            </button>
                        </div>

                        <div className="space-y-3">
                            {filteredQs.map((q, i) => (
                                <div key={q.id}
                                    className="p-4 rounded-lg border"
                                    style={{ backgroundColor: '#0D0F12', borderColor: '#1F2937' }}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-amber-700/50 bg-amber-900/20 text-amber-400">
                                            {q.year}
                                        </span>
                                        <span className="text-[10px] font-mono" style={{ color: '#374151' }}>
                                            {q.difficulty}
                                        </span>
                                        <span className="text-[10px] font-mono" style={{ color: '#374151' }}>·</span>
                                        <span className="text-[10px] font-mono" style={{ color: '#4B5563' }}>
                                            {normalizeTopic(q.topic)}
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#D1D5DB', whiteSpace: 'pre-wrap' }}>
                                        {q.question}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-2">
                                        {q.options.map((opt, oi) => (
                                            <div key={oi}
                                                className="flex items-start gap-2 px-3 py-2 rounded text-xs"
                                                style={{
                                                    backgroundColor: oi === q.correctIndex ? '#052E16' : '#0A0C10',
                                                    border: `1px solid ${oi === q.correctIndex ? '#16A34A' : '#1F2937'}`,
                                                    color: oi === q.correctIndex ? '#4ADE80' : '#6B7280',
                                                }}>
                                                <span className="font-mono font-bold flex-shrink-0">
                                                    {String.fromCharCode(65 + oi)}.
                                                </span>
                                                {opt}
                                            </div>
                                        ))}
                                    </div>
                                    {q.explanation && (
                                        <p className="text-xs leading-relaxed px-3 py-2 rounded" style={{ backgroundColor: '#0A0C10', color: '#6B7280', borderLeft: '3px solid #1D4ED8' }}>
                                            💡 {q.explanation}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ─── Hot Topics ──────────────────────────────────────────── */}
                {!compact && !filteredQs.length && (
                    <div className="mt-8">
                        <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="w-4 h-4" style={{ color: '#F59E0B' }} />
                            <h3 className="font-bold text-sm" style={{ color: '#F9FAFB' }}>Most Tested Topics (2011–2024)</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {Object.entries(totalByTopic)
                                .sort(([, a], [, b]) => b - a)
                                .slice(0, 12)
                                .map(([topic, count]) => (
                                    <button
                                        key={topic}
                                        onClick={() => setSelectedTopic(topic)}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-bold transition-all hover:border-amber-500/50"
                                        style={{ backgroundColor: '#0A0C10', borderColor: '#1F2937', color: '#9CA3AF' }}
                                    >
                                        {topic}
                                        <span className="font-mono px-1.5 rounded" style={{ backgroundColor: '#1F2937', color: '#F59E0B' }}>
                                            {count}Q
                                        </span>
                                    </button>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

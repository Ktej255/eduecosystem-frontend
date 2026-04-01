"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { TOPIC_TITLES } from "@/components/batch1-1/polity/data/polity-types-95";
import { CHAPTER_PRIORITY } from "@/components/batch1-1/polity/data/chapter-priority";

// ─── Types ─────────────────────────────────────────────────────────────────────

type ReadinessLevel = 'mastered' | 'in-progress' | 'weak' | 'untouched';

interface TopicReadiness {
    id: number;
    title: string;
    level: ReadinessLevel;
    completed: boolean;
    flashcardsDone: boolean;
    mcqsDone: boolean;
    score?: number;
}

// ─── Helpers ────────────────────────────────────────────────────────────────────

function getReadiness(data: Record<string, any> | undefined): ReadinessLevel {
    if (!data) return 'untouched';
    if (data.completed && data.flashcardsDone && data.mcqsDone) return 'mastered';
    if (data.completed || data.flashcardsDone || data.mcqsDone || data.score) return 'in-progress';
    if (data.score !== undefined && data.score < 50) return 'weak';
    return 'untouched';
}

function getColor(level: ReadinessLevel): { bg: string; border: string; text: string } {
    switch (level) {
        case 'mastered':
            return { bg: '#052E16', border: '#16A34A', text: '#4ADE80' };
        case 'in-progress':
            return { bg: '#451A03', border: '#D97706', text: '#FCD34D' };
        case 'weak':
            return { bg: '#450A0A', border: '#DC2626', text: '#FCA5A5' };
        default:
            return { bg: '#0F1117', border: '#1F2937', text: '#374151' };
    }
}

function getLevelLabel(level: ReadinessLevel) {
    switch (level) {
        case 'mastered': return '✅ Mastered';
        case 'in-progress': return '🟡 In Progress';
        case 'weak': return '🔴 Needs Work';
        default: return '⬜ Not Started';
    }
}

// ─── Component ─────────────────────────────────────────────────────────────────

interface RetentionRadarProps {
    compact?: boolean;
}

export default function RetentionRadar({ compact = false }: RetentionRadarProps) {
    const router = useRouter();
    const [selectedTopic, setSelectedTopic] = useState<TopicReadiness | null>(null);
    const [filterLevel, setFilterLevel] = useState<ReadinessLevel | 'all'>('all');

    const topicReadiness: TopicReadiness[] = useMemo(() => {
        let progressData: Record<string, any> = {};
        if (typeof window !== 'undefined') {
            try {
                const saved = localStorage.getItem('polity_95_progress');
                if (saved) progressData = JSON.parse(saved);
            } catch (_) { /* ignore */ }
        }

        return TOPIC_TITLES.map(topic => {
            const data = progressData[topic.id];
            return {
                id: topic.id,
                title: topic.title,
                level: getReadiness(data),
                completed: data?.completed || false,
                flashcardsDone: data?.flashcardsDone || false,
                mcqsDone: data?.mcqsDone || false,
                score: data?.score,
            };
        });
    }, []);

    const stats = useMemo(() => ({
        mastered: topicReadiness.filter(t => t.level === 'mastered').length,
        inProgress: topicReadiness.filter(t => t.level === 'in-progress').length,
        weak: topicReadiness.filter(t => t.level === 'weak').length,
        untouched: topicReadiness.filter(t => t.level === 'untouched').length,
    }), [topicReadiness]);

    const filtered = filterLevel === 'all' ? topicReadiness : topicReadiness.filter(t => t.level === filterLevel);

    const handleCellClick = (topic: TopicReadiness) => {
        setSelectedTopic(prev => prev?.id === topic.id ? null : topic);
    };

    return (
        <div className={compact ? '' : 'p-4 md:p-6'}>
            {/* ─── Stats Bar ─────────────────────────────────────────────── */}
            {!compact && (
                <div className="mb-6">
                    <h2 className="text-xl font-black mb-1" style={{ color: '#F9FAFB' }}>
                        Retention Radar
                    </h2>
                    <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
                        Your 95-chapter readiness heatmap. Click any cell to drill down.
                    </p>
                </div>
            )}

            {/* Stats Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
                {[
                    { label: 'All', key: 'all' as const, count: 95, color: '#6B7280', border: '#374151', bg: '#111' },
                    { label: 'Mastered', key: 'mastered' as const, count: stats.mastered, color: '#4ADE80', border: '#16A34A', bg: '#052E16' },
                    { label: 'In Progress', key: 'in-progress' as const, count: stats.inProgress, color: '#FCD34D', border: '#D97706', bg: '#451A03' },
                    { label: 'Weak', key: 'weak' as const, count: stats.weak, color: '#FCA5A5', border: '#DC2626', bg: '#450A0A' },
                    { label: 'Untouched', key: 'untouched' as const, count: stats.untouched, color: '#374151', border: '#1F2937', bg: '#0F1117' },
                ].map(chip => (
                    <button
                        key={chip.key}
                        onClick={() => setFilterLevel(chip.key)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all"
                        style={{
                            backgroundColor: filterLevel === chip.key ? chip.bg : 'transparent',
                            borderColor: filterLevel === chip.key ? chip.border : '#1F2937',
                            color: filterLevel === chip.key ? chip.color : '#4B5563',
                            boxShadow: filterLevel === chip.key ? `0 0 8px ${chip.border}44` : 'none',
                        }}
                    >
                        {chip.label}
                        <span
                            className="px-1.5 py-0 rounded font-mono"
                            style={{ backgroundColor: chip.bg, color: chip.color, border: `1px solid ${chip.border}` }}
                        >
                            {chip.count}
                        </span>
                    </button>
                ))}
            </div>

            {/* ─── Heatmap Grid ──────────────────────────────────────────────── */}
            <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(36px, 1fr))' }}>
                {filtered.map(topic => {
                    const { bg, border, text } = getColor(topic.level);
                    const priority = CHAPTER_PRIORITY[topic.id];
                    const isSelected = selectedTopic?.id === topic.id;

                    return (
                        <button
                            key={topic.id}
                            onClick={() => handleCellClick(topic)}
                            title={`${topic.id}. ${topic.title} — ${getLevelLabel(topic.level)}`}
                            className="aspect-square rounded flex items-center justify-center text-[9px] font-mono font-bold border transition-all hover:scale-110"
                            style={{
                                backgroundColor: bg,
                                borderColor: isSelected ? '#F59E0B' : border,
                                color: text,
                                boxShadow: isSelected
                                    ? '0 0 0 2px #F59E0B'
                                    : priority === 'MUST_KNOW' && topic.level === 'untouched'
                                        ? '0 0 6px rgba(239,68,68,0.4)'
                                        : 'none',
                            }}
                        >
                            {topic.id}
                        </button>
                    );
                })}
            </div>

            {/* ─── Detail Panel ──────────────────────────────────────────────── */}
            {selectedTopic && (
                <div
                    className="mt-4 p-4 rounded-lg border animate-in slide-in-from-bottom-2 duration-200"
                    style={{ backgroundColor: '#0D0F12', borderColor: getColor(selectedTopic.level).border }}
                >
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="text-[10px] font-mono mb-1" style={{ color: '#6B7280' }}>
                                CHAPTER {selectedTopic.id}
                            </div>
                            <h3 className="font-bold text-sm mb-2" style={{ color: '#F9FAFB' }}>
                                {selectedTopic.title}
                            </h3>

                            {/* Badges row */}
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                <span
                                    className="text-[10px] font-bold px-2 py-0.5 rounded border uppercase"
                                    style={{ color: getColor(selectedTopic.level).text, borderColor: getColor(selectedTopic.level).border, backgroundColor: getColor(selectedTopic.level).bg }}
                                >
                                    {getLevelLabel(selectedTopic.level)}
                                </span>
                                {CHAPTER_PRIORITY[selectedTopic.id] && (
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded border uppercase text-red-400 bg-red-900/30 border-red-700/50">
                                        {CHAPTER_PRIORITY[selectedTopic.id]?.replace('_', ' ')}
                                    </span>
                                )}
                            </div>

                            {/* Progress checklist */}
                            <div className="flex gap-3 text-[11px]">
                                <span style={{ color: selectedTopic.completed ? '#4ADE80' : '#374151' }}>
                                    {selectedTopic.completed ? '✅' : '⬜'} Read
                                </span>
                                <span style={{ color: selectedTopic.flashcardsDone ? '#4ADE80' : '#374151' }}>
                                    {selectedTopic.flashcardsDone ? '✅' : '⬜'} Flashcards
                                </span>
                                <span style={{ color: selectedTopic.mcqsDone ? '#4ADE80' : '#374151' }}>
                                    {selectedTopic.mcqsDone ? '✅' : '⬜'} MCQs
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => router.push(`/student/batch1/polity/topic/${selectedTopic.id}`)}
                                className="px-3 py-1.5 rounded text-xs font-bold border transition-all hover:bg-amber-500/10"
                                style={{ borderColor: '#F59E0B', color: '#F59E0B' }}
                            >
                                📖 Read
                            </button>
                            <button
                                onClick={() => router.push(`/student/batch1-1/polity/${selectedTopic.id}/mcq?level=1`)}
                                className="px-3 py-1.5 rounded text-xs font-bold border transition-all hover:bg-blue-500/10"
                                style={{ borderColor: '#60A5FA', color: '#60A5FA' }}
                            >
                                📝 MCQ
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

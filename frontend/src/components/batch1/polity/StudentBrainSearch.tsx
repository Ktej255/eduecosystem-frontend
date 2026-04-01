"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X, BookOpen, Zap, ChevronRight, Loader2, Brain, Star } from "lucide-react";
import { TOPIC_TITLES } from "@/components/batch1-1/polity/data/polity-types-95";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BrainResult {
    topicId: number;
    topicTitle: string;
    answer: string;
    keyArticles: string[];
    upscTip: string;
    relatedTopicIds: number[];
}

// ─── Quick local search (instant, before AI) ─────────────────────────────────

function localSearch(q: string) {
    if (!q.trim()) return [];
    const lower = q.toLowerCase();
    return TOPIC_TITLES.filter(t =>
        t.title.toLowerCase().includes(lower)
    ).slice(0, 5);
}

// ─── Component ────────────────────────────────────────────────────────────────

interface StudentBrainSearchProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function StudentBrainSearch({ isOpen, onClose }: StudentBrainSearchProps) {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState('');
    const [localResults, setLocalResults] = useState<typeof TOPIC_TITLES>([]);
    const [aiResult, setAiResult] = useState<BrainResult | null>(null);
    const [aiRaw, setAiRaw] = useState('');
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState<'search' | 'ask'>('search');
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    // Focus on open
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
            setQuery('');
            setAiResult(null);
            setAiRaw('');
            setLocalResults([]);
        }
    }, [isOpen]);

    // Escape to close
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    // Local search on keystroke
    useEffect(() => {
        setLocalResults(localSearch(query));
    }, [query]);

    // AI search with debounce
    const triggerAISearch = useCallback(async (q: string, m: typeof mode) => {
        if (!q.trim() || q.length < 3) return;
        setLoading(true);
        setAiResult(null);
        setAiRaw('');
        try {
            const res = await fetch('/api/student-brain', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: q, mode: m }),
            });
            const data = await res.json();
            if (data.result) setAiResult(data.result);
            if (data.raw) setAiRaw(data.raw);
        } catch { }
        setLoading(false);
    }, []);

    const handleSearch = () => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        triggerAISearch(query, mode);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSearch();
    };

    const navigate = (topicId: number) => {
        onClose();
        router.push(`/student/batch1/polity/chapter/${topicId}`);
    };

    if (!isOpen) return null;

    return (
        /* Backdrop */
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}>
            {/* Panel */}
            <div
                className="w-full max-w-2xl rounded-2xl border overflow-hidden"
                style={{ backgroundColor: '#0D0F12', borderColor: '#1F2937', boxShadow: '0 24px 64px rgba(0,0,0,0.9)' }}
                onClick={e => e.stopPropagation()}>

                {/* ─── Search Input ─────────────────────────────────────── */}
                <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ borderColor: '#1F2937' }}>
                    <Search className="w-5 h-5 flex-shrink-0" style={{ color: '#6B7280' }} />
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={mode === 'search' ? 'Search any Polity topic...' : 'Ask Dr. Ambedkar anything...'}
                        className="flex-1 bg-transparent outline-none text-base"
                        style={{ color: '#F9FAFB' }}
                    />
                    {loading && <Loader2 className="w-4 h-4 animate-spin" style={{ color: '#7C3AED' }} />}
                    {!loading && query && (
                        <button onClick={() => { setQuery(''); setAiResult(null); setLocalResults([]); }}>
                            <X className="w-4 h-4" style={{ color: '#6B7280' }} />
                        </button>
                    )}
                </div>

                {/* ─── Mode Toggle ─────────────────────────────────────── */}
                <div className="flex border-b" style={{ borderColor: '#1F2937' }}>
                    {(['search', 'ask'] as const).map(m => (
                        <button key={m}
                            onClick={() => { setMode(m); setAiResult(null); setAiRaw(''); }}
                            className="flex-1 py-2.5 text-xs font-mono font-bold uppercase tracking-widest transition-all"
                            style={{
                                backgroundColor: mode === m ? '#12062A' : 'transparent',
                                color: mode === m ? '#A78BFA' : '#374151',
                                borderBottom: mode === m ? '2px solid #7C3AED' : '2px solid transparent',
                            }}>
                            {m === 'search' ? '🔍 Smart Search' : '🤖 Ask AI'}
                        </button>
                    ))}
                </div>

                {/* ─── Results Area ────────────────────────────────────── */}
                <div className="max-h-[60vh] overflow-y-auto">
                    {/* Local instant results */}
                    {localResults.length > 0 && !aiResult && (
                        <div className="px-5 pt-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: '#374151' }}>
                                TOPICS MATCHING "{query}"
                            </div>
                            <div className="space-y-1">
                                {localResults.map(t => (
                                    <button key={t.id} onClick={() => navigate(t.id)}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-all hover:border-purple-600/50 group"
                                        style={{ backgroundColor: '#0A0C10', borderColor: '#1F2937' }}>
                                        <span className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-mono font-black flex-shrink-0"
                                            style={{ backgroundColor: '#12062A', color: '#A78BFA' }}>
                                            {t.id}
                                        </span>
                                        <span className="text-sm font-medium flex-1" style={{ color: '#D1D5DB' }}>{t.title}</span>
                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#7C3AED' }} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* AI Search button prompt */}
                    {query.length >= 3 && !loading && !aiResult && (
                        <div className="px-5 py-3">
                            <button onClick={handleSearch}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all hover:border-purple-500/50"
                                style={{ backgroundColor: '#12062A', borderColor: '#5B21B6', color: '#C4B5FD' }}>
                                <Brain className="w-4 h-4 flex-shrink-0" />
                                <span className="text-sm font-bold flex-1 text-left">
                                    {mode === 'search' ? `AI Search: "${query}"` : `Ask Dr. Ambedkar: "${query}"`}
                                </span>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded"
                                    style={{ backgroundColor: '#7C3AED', color: '#fff' }}>Enter</span>
                            </button>
                        </div>
                    )}

                    {/* AI Result — structured */}
                    {aiResult && (
                        <div className="px-5 py-4 space-y-4">
                            {/* Topic match */}
                            <div className="flex items-start gap-3 p-4 rounded-xl border"
                                style={{ backgroundColor: '#0B1629', borderColor: '#1E40AF' }}>
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0"
                                    style={{ backgroundColor: '#1D4ED8', color: '#fff' }}>
                                    {aiResult.topicId}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-bold text-sm mb-1" style={{ color: '#93C5FD' }}>
                                        {aiResult.topicTitle}
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                                        {aiResult.answer}
                                    </p>
                                </div>
                            </div>

                            {/* Key Articles */}
                            {aiResult.keyArticles?.length > 0 && (
                                <div>
                                    <div className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: '#374151' }}>
                                        KEY ARTICLES
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {aiResult.keyArticles.map((a, i) => (
                                            <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold border"
                                                style={{ backgroundColor: '#0A0C10', borderColor: '#1D4ED8', color: '#93C5FD' }}>
                                                {a}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* UPSC Tip */}
                            {aiResult.upscTip && (
                                <div className="flex items-start gap-2 px-3 py-2 rounded-xl"
                                    style={{ backgroundColor: '#241407', borderLeft: '3px solid #D97706' }}>
                                    <Star className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: '#D97706' }} />
                                    <p className="text-xs" style={{ color: '#FCD34D' }}>{aiResult.upscTip}</p>
                                </div>
                            )}

                            {/* CTA */}
                            <button onClick={() => navigate(aiResult.topicId)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-bold transition-all hover:border-blue-500/50"
                                style={{ backgroundColor: '#0B1629', borderColor: '#1E40AF', color: '#93C5FD' }}>
                                <span className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" /> Study Topic {aiResult.topicId}: {aiResult.topicTitle}
                                </span>
                                <ChevronRight className="w-4 h-4" />
                            </button>

                            {/* Related */}
                            {aiResult.relatedTopicIds?.length > 0 && (
                                <div>
                                    <div className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: '#374151' }}>
                                        RELATED TOPICS
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {aiResult.relatedTopicIds.map(id => {
                                            const t = TOPIC_TITLES.find(x => x.id === id);
                                            return t ? (
                                                <button key={id} onClick={() => navigate(id)}
                                                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold border transition-all hover:border-purple-500/50"
                                                    style={{ backgroundColor: '#12062A', borderColor: '#374151', color: '#A78BFA' }}>
                                                    {id}. {t.title}
                                                </button>
                                            ) : null;
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Ask AI raw text */}
                    {aiRaw && !aiResult && mode === 'ask' && (
                        <div className="px-5 py-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Brain className="w-4 h-4" style={{ color: '#7C3AED' }} />
                                <span className="text-xs font-mono font-bold" style={{ color: '#7C3AED' }}>DR. AMBEDKAR</span>
                            </div>
                            <p className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: '#D1D5DB' }}>
                                {aiRaw}
                            </p>
                        </div>
                    )}

                    {/* Empty state */}
                    {!query && !loading && (
                        <div className="px-5 py-8 text-center">
                            <Brain className="w-10 h-10 mx-auto mb-3" style={{ color: '#1F2937' }} />
                            <p className="text-sm font-mono" style={{ color: '#374151' }}>
                                Search any Polity topic · Press Enter for AI
                            </p>
                            <p className="text-[10px] font-mono mt-1" style={{ color: '#1F2937' }}>
                                Try: "President powers", "emergency provisions", "writ jurisdiction"
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-5 py-2.5 border-t"
                    style={{ borderColor: '#1F2937', backgroundColor: '#0A0C10' }}>
                    <span className="text-[10px] font-mono" style={{ color: '#1F2937' }}>
                        POLITY STUDENT BRAIN · Gemini 1.5 Flash
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: '#1F2937' }}>ESC to close</span>
                </div>
            </div>
        </div>
    );
}

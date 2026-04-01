"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, ArrowRight, ChevronRight, Clock, Zap,
    BookOpen, CheckCircle, Target, Hash, Eye, EyeOff
} from 'lucide-react';
import { isChapterComplete, markChapterComplete } from '@/lib/polity-progress-store';
import { toast } from 'sonner';

// ─── Types ────────────────────────────────────────────────────────────────────

interface SubSection {
    title: string;
    content?: string;
    features?: string[];
}

interface Section {
    title: string;
    content?: string;
    features?: string[];
    subsections?: SubSection[];
}

interface ChapterContent {
    id: number;
    title: string;
    introduction?: string;
    sections: Section[];
}

interface ChapterRevisionV2Props {
    chapterId: number;
    chapter: ChapterContent;
    totalChapters: number;
}

// ─── SVG Connector ────────────────────────────────────────────────────────────

function FlowConnector({ active }: { active: boolean }) {
    return (
        <div className="flex flex-col items-center" style={{ height: '32px', width: '24px' }}>
            <div
                className="w-0.5 flex-1 transition-colors duration-500"
                style={{ backgroundColor: active ? '#F59E0B' : '#1F2937' }}
            />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                    d="M6 0 L6 8 M2 4 L6 8 L10 4"
                    stroke={active ? '#F59E0B' : '#374151'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}

// ─── Section Node ─────────────────────────────────────────────────────────────

function SectionNode({
    section,
    index,
    isActive,
    onActivate,
    isFlashMode,
}: {
    section: Section;
    index: number;
    isActive: boolean;
    onActivate: () => void;
    isFlashMode: boolean;
}) {
    const nodeRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (nodeRef.current) observer.observe(nodeRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={nodeRef}
            id={`section-${index}`}
            className="transition-all duration-500"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 60}ms`,
            }}
        >
            {/* Node Header */}
            <button
                onClick={onActivate}
                className="w-full text-left group"
            >
                <div
                    className="border transition-all duration-300 cursor-pointer"
                    style={{
                        borderColor: isActive ? '#F59E0B' : '#1F2937',
                        backgroundColor: isActive ? '#111827' : '#0D0F12',
                        borderRadius: '2px',
                        boxShadow: isActive ? '0 0 0 1px #F59E0B22, 4px 0 0 0 #F59E0B' : 'none',
                    }}
                >
                    {/* Header Bar */}
                    <div className="flex items-center gap-3 px-5 py-4">
                        {/* Index Badge */}
                        <div
                            className="flex-shrink-0 text-xs font-mono font-bold flex items-center justify-center"
                            style={{
                                width: '32px',
                                height: '32px',
                                backgroundColor: isActive ? '#F59E0B' : '#1A1C20',
                                color: isActive ? '#000' : '#4B5563',
                                borderRadius: '2px',
                                border: `1px solid ${isActive ? '#F59E0B' : '#374151'}`,
                            }}
                        >
                            {String(index + 1).padStart(2, '0')}
                        </div>

                        {/* Title */}
                        <h3
                            className="font-bold text-sm tracking-wider uppercase flex-1"
                            style={{
                                color: isActive ? '#F59E0B' : '#9CA3AF',
                                letterSpacing: '0.08em',
                            }}
                        >
                            {section.title}
                        </h3>

                        {/* Stats */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                            {section.features && (
                                <span className="text-xs font-mono" style={{ color: '#4B5563' }}>
                                    {section.features.length} facts
                                </span>
                            )}
                            {section.subsections && (
                                <span className="text-xs font-mono" style={{ color: '#4B5563' }}>
                                    {section.subsections.length} parts
                                </span>
                            )}
                            <ChevronRight
                                className="w-4 h-4 transition-transform duration-300"
                                style={{
                                    color: isActive ? '#F59E0B' : '#374151',
                                    transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </button>

            {/* Node Body (Expanded) */}
            {isActive && (
                <div
                    className="border-l border-r border-b animate-in fade-in duration-300"
                    style={{
                        borderColor: '#F59E0B33',
                        backgroundColor: '#080A0D',
                        borderRadius: '0 0 2px 2px',
                    }}
                >
                    {/* Intro Content */}
                    {!isFlashMode && section.content && (
                        <div
                            className="px-5 pt-5 pb-3 border-l-2 ml-5 mr-5 mt-4 mb-2"
                            style={{ borderColor: '#F59E0B', backgroundColor: '#0D0F12' }}
                        >
                            <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                                {section.content}
                            </p>
                        </div>
                    )}

                    {/* Top-level features (bullet facts) */}
                    {section.features && section.features.length > 0 && (
                        <FactList facts={section.features} />
                    )}

                    {/* Subsections as nested flowchart */}
                    {section.subsections && section.subsections.length > 0 && (
                        <div className="px-5 pb-5">
                            {section.subsections.map((sub, si) => (
                                <React.Fragment key={si}>
                                    <SubNode sub={sub} index={si} isFlashMode={isFlashMode} />
                                    {si < section.subsections!.length - 1 && (
                                        <FlowConnector active={true} />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

// ─── Fact List ─────────────────────────────────────────────────────────────────

function FactList({ facts }: { facts: string[] }) {
    return (
        <div className="px-5 py-4 space-y-2">
            {facts.map((fact, i) => (
                <div
                    key={i}
                    className="flex items-start gap-3 group"
                    style={{
                        animation: `fadeSlideIn 0.3s ease forwards`,
                        animationDelay: `${i * 40}ms`,
                        opacity: 0,
                    }}
                >
                    <div
                        className="flex-shrink-0 mt-0.5 font-mono text-xs flex items-center justify-center"
                        style={{
                            width: '20px',
                            height: '20px',
                            color: '#F59E0B',
                            fontSize: '10px',
                        }}
                    >
                        ▸
                    </div>
                    <p
                        className="text-sm leading-relaxed"
                        style={{ color: '#9CA3AF' }}
                    >
                        {/* Highlight bracketed content */}
                        {highlightKeyTerms(fact)}
                    </p>
                </div>
            ))}
        </div>
    );
}

// ─── Sub Node ─────────────────────────────────────────────────────────────────

function SubNode({ sub, index: _index, isFlashMode }: { sub: SubSection; index: number, isFlashMode: boolean }) {
    return (
        <div
            className="border mt-0"
            style={{
                borderColor: '#1F2937',
                backgroundColor: '#0A0C10',
                borderRadius: '2px',
                borderLeft: '2px solid #10B981',
            }}
        >
            <div className="px-4 py-3">
                <div
                    className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: '#10B981' }}
                >
                    {sub.title}
                </div>
                {!isFlashMode && sub.content && (
                    <p className="text-sm leading-relaxed mb-2" style={{ color: '#D1D5DB' }}>
                        {sub.content}
                    </p>
                )}
                {sub.features && <FactList facts={sub.features} />}
            </div>
        </div>
    );
}

// ─── Highlight Key Terms ───────────────────────────────────────────────────────

function highlightKeyTerms(text: string): React.ReactNode {
    // Highlight: Art XXX, Amendment years, key abbreviations in parentheses
    const parts = text.split(/(\b(?:Art(?:icle)?\.?\s*\d+(?:\([a-z]\))?|Amendment \d+|\d{4})\b|\([^)]+\))/g);
    return parts.map((part, i) => {
        if (/^(\b(?:Art(?:icle)?\.?\s*\d+(?:\([a-z]\))?|Amendment \d+|\d{4})\b)/.test(part)) {
            return (
                <span key={i} className="font-mono font-bold" style={{ color: '#F59E0B', fontSize: '0.8em' }}>
                    {part}
                </span>
            );
        }
        if (/^\(/.test(part) && part.length < 80) {
            return (
                <span key={i} style={{ color: '#6B7280', fontStyle: 'italic' }}>{part}</span>
            );
        }
        return <span key={i}>{part}</span>;
    });
}

// ─── Progress Indicator ────────────────────────────────────────────────────────

function ProgressRing({ value, max, label }: { value: number; max: number; label: string }) {
    const pct = max > 0 ? (value / max) * 100 : 0;
    const r = 16;
    const circ = 2 * Math.PI * r;
    const dash = circ * (pct / 100);

    return (
        <div className="flex flex-col items-center gap-1">
            <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r={r} fill="none" stroke="#1F2937" strokeWidth="2.5" />
                <circle
                    cx="20" cy="20" r={r} fill="none"
                    stroke="#F59E0B" strokeWidth="2.5"
                    strokeDasharray={`${dash} ${circ}`}
                    strokeDashoffset={circ * 0.25}
                    strokeLinecap="square"
                    style={{ transition: 'stroke-dasharray 0.6s ease' }}
                />
                <text x="20" y="24" textAnchor="middle" fill="#F59E0B" fontSize="9" fontWeight="700" fontFamily="monospace">
                    {Math.round(pct)}%
                </text>
            </svg>
            <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: '#4B5563' }}>
                {label}
            </span>
        </div>
    );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function ChapterRevisionV2({ chapterId, chapter, totalChapters }: ChapterRevisionV2Props) {
    const [activeSection, setActiveSection] = useState<number>(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [readSections, setReadSections] = useState<Set<number>>(new Set());
    const [showIndex, setShowIndex] = useState(true);
    const [isFlashMode, setIsFlashMode] = useState(false);
    const [startTime] = useState(Date.now());
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        setIsCompleted(isChapterComplete(chapterId));
        if (typeof window !== 'undefined') {
            localStorage.setItem('polity_last_visited', JSON.stringify({
                topicId: chapterId,
                timestamp: Date.now()
            }));
        }
    }, [chapterId]);

    // Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setElapsed(Math.floor((Date.now() - startTime) / 1000));
        }, 1000);
        return () => clearInterval(timer);
    }, [startTime]);

    const handleSectionClick = useCallback((idx: number) => {
        setActiveSection(prev => prev === idx ? -1 : idx);
        setReadSections(prev => new Set([...prev, idx]));
    }, []);

    const handleMarkComplete = () => {
        markChapterComplete(chapterId);
        setIsCompleted(true);
        toast.success('Chapter mastered! Moving to next.', {
            style: { background: '#0D0F12', border: '1px solid #F59E0B', color: '#F59E0B' }
        });
    };

    const formatTime = (s: number) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${String(sec).padStart(2, '0')}`;
    };

    const sections = chapter.sections || [];
    const readCount = readSections.size;

    return (
        <>
            {/* Keyframe Injection */}
            <style>{`
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateX(-8px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes pulseAmber {
                    0%, 100% { box-shadow: 0 0 0 0 #F59E0B33; }
                    50% { box-shadow: 0 0 0 6px #F59E0B00; }
                }
            `}</style>

            <div
                className="min-h-screen"
                style={{ backgroundColor: '#070809', fontFamily: "'Inter', 'Geist', system-ui, sans-serif" }}
            >
                {/* ─── Top Bar ─────────────────────────────────────────────── */}
                <div
                    className="sticky top-0 z-40 flex items-center gap-0 border-b"
                    style={{ backgroundColor: '#0D0F12', borderColor: '#1F2937', height: '48px' }}
                >
                    <Link
                        href="/student/batch1/polity"
                        className="flex items-center gap-2 px-4 h-full border-r text-xs font-mono transition-colors hover:bg-[#1A1C20]"
                        style={{ borderColor: '#1F2937', color: '#6B7280' }}
                    >
                        <ArrowLeft className="w-3 h-3" />
                        POLITY
                    </Link>

                    {/* Chapter ID - truncated on mobile */}
                    <div
                        className="px-4 h-full flex items-center border-r text-xs font-mono font-bold min-w-0 overflow-hidden"
                        style={{ borderColor: '#1F2937', color: '#F59E0B', maxWidth: 'calc(100vw - 200px)' }}
                    >
                        <span className="truncate">
                            CH{String(chapterId).padStart(2, '0')} — {chapter.title.toUpperCase()}
                        </span>
                    </div>

                    <div className="flex-1" />

                    {/* Timer */}
                    <div
                        className="px-4 h-full flex items-center gap-2 border-l text-xs font-mono"
                        style={{ borderColor: '#1F2937', color: '#4B5563' }}
                    >
                        <Clock className="w-3 h-3" />
                        {formatTime(elapsed)}
                    </div>

                    <button
                        onClick={() => setShowIndex(p => !p)}
                        className={`px-4 h-full flex items-center gap-2 border-l text-xs font-mono transition-colors hover:bg-[#1A1C20] ${showIndex ? 'text-amber-500' : 'text-gray-500'}`}
                        style={{ borderColor: '#1F2937' }}
                    >
                        {showIndex ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                        INDEX
                    </button>

                    {/* Flash Mode Toggle */}
                    <button
                        onClick={() => setIsFlashMode(p => !p)}
                        className={`px-4 h-full flex items-center gap-2 border-l text-xs font-mono transition-colors hover:bg-[#1A1C20] ${isFlashMode ? 'text-purple-400 bg-purple-900/20' : 'text-gray-500'}`}
                        style={{ borderColor: '#1F2937' }}
                        title="Flash Mode hides paragraph text and shows only bullet points for fast revision."
                    >
                        <Zap className="w-3 h-3" />
                        FLASH
                    </button>

                    {/* Progress */}
                    <div
                        className="px-4 h-full flex items-center gap-2 border-l text-xs font-mono"
                        style={{ borderColor: '#1F2937', color: '#10B981' }}
                    >
                        <Zap className="w-3 h-3" />
                        {readCount}/{sections.length}
                    </div>
                </div>

                {/* ─── Layout ──────────────────────────────────────────────── */}
                <div className="flex">

                    {/* ─── Index Panel (Left) ──────────────────────────────── */}
                    {showIndex && (
                        <aside
                            className="sticky top-[48px] h-[calc(100vh-48px)] overflow-y-auto border-r flex-shrink-0 hidden lg:flex flex-col"
                            style={{ width: '220px', borderColor: '#1F2937', backgroundColor: '#0A0C10' }}
                        >
                            <div
                                className="px-4 py-3 text-[10px] font-mono uppercase tracking-widest border-b"
                                style={{ color: '#374151', borderColor: '#1F2937' }}
                            >
                                Sections
                            </div>
                            <div className="flex-1 py-2">
                                {sections.map((sec, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            handleSectionClick(i);
                                            document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        }}
                                        className="w-full text-left px-4 py-2 flex items-center gap-2 transition-colors text-[11px] font-mono hover:bg-[#111318]"
                                        style={{ color: activeSection === i ? '#F59E0B' : readSections.has(i) ? '#6B7280' : '#374151' }}
                                    >
                                        <span
                                            className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                                            style={{ backgroundColor: activeSection === i ? '#F59E0B' : readSections.has(i) ? '#10B981' : '#1F2937' }}
                                        />
                                        <span className="truncate">{sec.title}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Stats Ring */}
                            <div
                                className="border-t p-4 flex justify-around"
                                style={{ borderColor: '#1F2937' }}
                            >
                                <ProgressRing value={readCount} max={sections.length} label="READ" />
                                <ProgressRing value={isCompleted ? 1 : 0} max={1} label="DONE" />
                            </div>
                        </aside>
                    )}

                    {/* ─── Main Content ─────────────────────────────────────── */}
                    <main className="flex-1 min-w-0 w-full">
                        <div className="max-w-3xl mx-auto px-4 md:px-8 py-6 md:py-8">

                            {/* Chapter Header */}
                            <div className="mb-8">
                                <div
                                    className="text-[10px] font-mono uppercase tracking-[0.2em] mb-4"
                                    style={{ color: '#374151' }}
                                >
                                    CHAPTER {chapterId} / LAXMIKANTH POLITY / 2-MIN REVISION
                                </div>
                                <h1
                                    className="font-black mb-4 leading-none"
                                    style={{
                                        color: '#F9FAFB',
                                        fontSize: 'clamp(24px, 4vw, 40px)',
                                        letterSpacing: '-0.02em',
                                    }}
                                >
                                    {chapter.title}
                                </h1>

                                {/* Introduction */}
                                {chapter.introduction && (
                                    <div
                                        className="border-l-2 pl-4 py-1"
                                        style={{ borderColor: '#F59E0B' }}
                                    >
                                        <p
                                            className="text-sm leading-relaxed"
                                            style={{ color: '#6B7280' }}
                                        >
                                            {chapter.introduction}
                                        </p>
                                    </div>
                                )}

                                {/* Meta Badges */}
                                <div className="flex items-center gap-3 mt-4 flex-wrap">
                                    <div
                                        className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1"
                                        style={{ backgroundColor: '#0D0F12', border: '1px solid #1F2937', color: '#4B5563', borderRadius: '2px' }}
                                    >
                                        <Hash className="w-3 h-3" />
                                        {sections.length} SECTIONS
                                    </div>
                                    <div
                                        className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1"
                                        style={{ backgroundColor: '#0D0F12', border: '1px solid #1F2937', color: '#4B5563', borderRadius: '2px' }}
                                    >
                                        <Target className="w-3 h-3" />
                                        UPSC PRELIMS
                                    </div>
                                    <div
                                        className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1"
                                        style={{ backgroundColor: '#0D0F12', border: '1px solid #1F2937', color: '#4B5563', borderRadius: '2px' }}
                                    >
                                        <BookOpen className="w-3 h-3" />
                                        LAXMIKANTH
                                    </div>
                                    {isCompleted && (
                                        <div
                                            className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1"
                                            style={{ backgroundColor: '#052E16', border: '1px solid #10B981', color: '#10B981', borderRadius: '2px' }}
                                        >
                                            <CheckCircle className="w-3 h-3" />
                                            MASTERED
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* ─── Flowchart Sections ─────────────────────── */}
                            <div className="mb-8">
                                {sections.map((section, i) => (
                                    <React.Fragment key={i}>
                                        <SectionNode
                                            section={section}
                                            index={i}
                                            isActive={activeSection === i}
                                            onActivate={() => handleSectionClick(i)}
                                            isFlashMode={isFlashMode}
                                        />
                                        {i < sections.length - 1 && (
                                            <div className="flex justify-start pl-4">
                                                <FlowConnector active={readSections.has(i)} />
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* ─── Completion Block ───────────────────────── */}
                            <div
                                className="border p-6"
                                style={{ borderColor: isCompleted ? '#10B981' : '#1F2937', borderRadius: '2px', backgroundColor: '#0A0C10' }}
                            >
                                {isCompleted ? (
                                    <div className="flex items-center gap-4">
                                        <CheckCircle className="w-8 h-8 flex-shrink-0" style={{ color: '#10B981' }} />
                                        <div>
                                            <div className="font-bold text-sm" style={{ color: '#10B981' }}>
                                                CHAPTER MASTERED
                                            </div>
                                            <div className="text-xs font-mono mt-1" style={{ color: '#374151' }}>
                                                Completed in {formatTime(elapsed)} — proceed to MCQs or next chapter
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between gap-4 flex-wrap">
                                        <div>
                                            <div className="font-bold text-sm mb-1" style={{ color: '#9CA3AF' }}>
                                                Read all {sections.length} sections before marking complete
                                            </div>
                                            <div className="text-xs font-mono" style={{ color: '#374151' }}>
                                                {readCount} of {sections.length} sections opened
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleMarkComplete}
                                            className="flex items-center gap-2 px-5 py-2.5 font-bold text-sm font-mono transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                                            style={{
                                                backgroundColor: '#F59E0B',
                                                color: '#000',
                                                borderRadius: '2px',
                                                border: 'none',
                                                boxShadow: '0 0 20px #F59E0B44',
                                                animation: 'pulseAmber 3s ease-in-out infinite',
                                            }}
                                        >
                                            <CheckCircle className="w-4 h-4" />
                                            MARK COMPLETE
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* ─── Navigation ─────────────────────────────── */}
                            <div
                                className="flex justify-between mt-6 border-t pt-6"
                                style={{ borderColor: '#1F2937' }}
                            >
                                {chapterId > 1 ? (
                                    <Link
                                        href={`/student/batch1/polity/topic/${chapterId - 1}`}
                                        className="flex items-center gap-2 text-xs font-mono transition-colors hover:opacity-80"
                                        style={{ color: '#6B7280' }}
                                    >
                                        <ArrowLeft className="w-3 h-3" />
                                        CH{String(chapterId - 1).padStart(2, '0')}
                                    </Link>
                                ) : <div />}

                                <div
                                    className="text-xs font-mono"
                                    style={{ color: '#374151' }}
                                >
                                    {chapterId} / {totalChapters}
                                </div>

                                {chapterId < totalChapters && (
                                    <Link
                                        href={`/student/batch1/polity/topic/${chapterId + 1}`}
                                        className="flex items-center gap-2 text-xs font-mono transition-colors hover:opacity-80"
                                        style={{ color: '#F59E0B' }}
                                    >
                                        CH{String(chapterId + 1).padStart(2, '0')}
                                        <ArrowRight className="w-3 h-3" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

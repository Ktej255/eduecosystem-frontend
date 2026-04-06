"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, BookOpen, Zap, CheckCircle2, RotateCcw, ChevronLeft, ChevronRight, Newspaper } from "lucide-react";
import { SPECTRUM_MODERN_HISTORY } from "@/components/batch1/history/data/spectrum-modern-history";
import { MODERN_HISTORY_CONTENT } from "@/components/batch1/history/data/modern/content-registry";
import { HISTORY_CA_REGISTRY } from "@/components/batch1/history/data/history-ca-registry";
import { updateEraChapterSection, getEraChapterProgress } from "@/lib/history-era-store";

type SectionStatus = 'not-started' | 'in-progress' | 'completed';
interface Progress { readSection: SectionStatus; flashcards: SectionStatus; drill: SectionStatus; }
const DEFAULT_PROGRESS: Progress = { readSection: 'not-started', flashcards: 'not-started', drill: 'not-started' };

export default function ModernChapterPage() {
    const router = useRouter();
    const params = useParams();
    const chapterId = Number(params.chapterId);

    const chapter = SPECTRUM_MODERN_HISTORY.find(c => c.id === chapterId);
    const content = MODERN_HISTORY_CONTENT[String(chapterId)];
    const linkedCA = HISTORY_CA_REGISTRY.filter(ca => ca.era === 'Modern' && ca.chapterIds?.includes(chapterId));

    const [tab, setTab] = useState<'read' | 'ca'>('read');
    const [progress, setProgress] = useState<Progress>(DEFAULT_PROGRESS);

    useEffect(() => {
        const saved = getEraChapterProgress('modern', chapterId);
        if (saved) setProgress({
            readSection: (saved.readSection as SectionStatus) ?? 'not-started',
            flashcards: (saved.flashcards as SectionStatus) ?? 'not-started',
            drill: (saved.drill as SectionStatus) ?? 'not-started',
        });
    }, [chapterId]);

    const updateSection = useCallback((section: keyof Progress, status: SectionStatus) => {
        setProgress(prev => ({ ...prev, [section]: status }));
        updateEraChapterSection('modern', chapterId, section as any, status as any);
        if (status === 'completed' && typeof window !== 'undefined') {
            const xpMap: Record<string, number> = { readSection: 10, flashcards: 15, drill: 25 };
            window.dispatchEvent(new CustomEvent('xp-gained', {
                detail: { xp: xpMap[section] ?? 10, source: `history-modern-ch${chapterId}-${section}` }
            }));
        }
    }, [chapterId]);

    useEffect(() => {
        if (tab === 'read' && progress.readSection === 'not-started') updateSection('readSection', 'in-progress');
    }, [tab]);

    const completedCount = Object.values(progress).filter(s => s === 'completed').length;
    const pct = Math.round((completedCount / 3) * 100);

    if (!chapter) return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0D0F12' }}>
            <div className="text-center space-y-3">
                <h2 className="font-bold text-lg" style={{ color: '#EF4444' }}>Chapter not found</h2>
                <button onClick={() => router.push('/student/batch1-1/modern-history')}
                    className="px-4 py-2 rounded-xl font-bold text-sm"
                    style={{ backgroundColor: '#DC2626', color: '#fff' }}>Back to Dashboard</button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0D0F12' }}>
            {/* Nav */}
            <div className="border-b sticky top-0 z-20" style={{ backgroundColor: '#0D0F12', borderColor: '#1F2937' }}>
                <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <button onClick={() => router.push('/student/batch1-1/modern-history')}
                            className="p-2 rounded-lg" style={{ color: '#6B7280' }}>
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded"
                                    style={{ backgroundColor: '#DC2626', color: '#fff' }}>
                                    {chapter.unit}
                                </span>
                                {chapter.period && (
                                    <span className="text-[10px] font-mono" style={{ color: '#6B7280' }}>{chapter.period}</span>
                                )}
                            </div>
                            <h1 className="text-sm font-black mt-0.5 line-clamp-1" style={{ color: '#F9FAFB' }}>
                                Ch. {chapter.id}: {chapter.title}
                            </h1>
                        </div>
                    </div>
                    {/* Progress ring */}
                    <div className="flex items-center gap-2">
                        <div className="text-right">
                            <div className="text-xs font-mono font-black" style={{ color: '#F87171' }}>{pct}%</div>
                            <div className="text-[10px] font-mono" style={{ color: '#4B5563' }}>Done</div>
                        </div>
                        <div className="relative w-10 h-10">
                            <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                                <circle cx="18" cy="18" r="15" fill="none" strokeWidth="3" stroke="#1F2937" />
                                <circle cx="18" cy="18" r="15" fill="none" strokeWidth="3" stroke="#DC2626"
                                    strokeDasharray={`${(pct / 100) * 94} 94`} strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="max-w-4xl mx-auto px-4 pb-3 flex gap-2">
                    {(['read', 'ca'] as const).map(t => {
                        const labels = { read: '📖 Read', ca: '📰 Current Affairs' };
                        return (
                            <button key={t} onClick={() => setTab(t)}
                                className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
                                style={{
                                    backgroundColor: tab === t ? '#450A0A' : '#111827',
                                    color: tab === t ? '#F87171' : '#6B7280',
                                    border: `1px solid ${tab === t ? '#DC2626' : '#1F2937'}`
                                }}>
                                {labels[t]}
                                {t === 'read' && progress.readSection === 'completed' && <CheckCircle2 className="w-3 h-3" style={{ color: '#10B981' }} />}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-6">
                {/* READ TAB */}
                {tab === 'read' && (
                    <div className="space-y-6">
                        {/* Overview */}
                        <div className="p-5 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                            <div className="flex items-center gap-2 mb-3">
                                <BookOpen className="w-4 h-4" style={{ color: '#F87171' }} />
                                <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#F87171' }}>Spectrum — {chapter.unit}</span>
                            </div>
                            <h2 className="font-black text-xl mb-2" style={{ color: '#F9FAFB' }}>{chapter.title}</h2>
                            {chapter.subtopics && chapter.subtopics.length > 0 && (
                                <div>
                                    <div className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: '#4B5563' }}>Sub-topics covered</div>
                                    <ul className="space-y-1">
                                        {chapter.subtopics.map((s, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#D1D5DB' }}>
                                                <span style={{ color: '#DC2626' }} className="flex-shrink-0">▸</span> {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Detailed content if available */}
                        {content && (
                            <div className="space-y-3">
                                {content.overview && (
                                    <div className="p-4 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                                        <div className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: '#F87171' }}>Overview</div>
                                        <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{content.overview}</p>
                                    </div>
                                )}
                                {content.keyPoints && (
                                    <div className="p-4 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                                        <div className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: '#F87171' }}>Key Points</div>
                                        <ul className="space-y-2">
                                            {content.keyPoints.map((kp: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#D1D5DB' }}>
                                                    <span style={{ color: '#DC2626' }} className="flex-shrink-0">•</span> {kp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {content.upscAngle && (
                                    <div className="p-4 rounded-xl border-l-2" style={{ borderLeftColor: '#DC2626', backgroundColor: '#1A0A0A' }}>
                                        <div className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: '#F87171' }}>UPSC Exam Angle</div>
                                        <p className="text-sm" style={{ color: '#FECACA' }}>{content.upscAngle}</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Mark Read Button */}
                        {progress.readSection !== 'completed' ? (
                            <button onClick={() => updateSection('readSection', 'completed')}
                                className="w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                                style={{ backgroundColor: '#DC2626', color: '#fff' }}>
                                <CheckCircle2 className="w-4 h-4" /> Mark Chapter as Read (+10 XP)
                            </button>
                        ) : (
                            <div className="w-full py-3 rounded-xl text-center font-mono text-sm"
                                style={{ backgroundColor: '#064E3B', color: '#6EE7B7', border: '1px solid #047857' }}>
                                ✓ Chapter Read — 10 XP Earned
                            </div>
                        )}
                    </div>
                )}

                {/* CURRENT AFFAIRS TAB */}
                {tab === 'ca' && (
                    <div className="space-y-4">
                        <div className="text-[10px] font-mono uppercase tracking-widest mb-2 flex items-center gap-2" style={{ color: '#F87171' }}>
                            <Newspaper className="w-3 h-3" /> Current Affairs Bridge
                            <span className="ml-auto">{linkedCA.length} items linked</span>
                        </div>
                        {linkedCA.length === 0 ? (
                            <div className="text-center py-12">
                                <Newspaper className="w-8 h-8 mx-auto mb-2" style={{ color: '#1F2937' }} />
                                <p className="text-sm font-mono" style={{ color: '#374151' }}>No CA directly linked to this chapter.</p>
                                <button onClick={() => router.push(`/student/batch1-1/modern-history/${chapterId}/current-affairs`)}
                                    className="mt-3 text-xs underline" style={{ color: '#F87171' }}>
                                    Browse all Modern CA →
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {linkedCA.map(ca => (
                                    <div key={ca.id} className="p-4 rounded-xl border space-y-2" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                                        <div className="text-[10px] font-mono" style={{ color: '#4B5563' }}>{ca.date} · {ca.source}</div>
                                        <h4 className="font-bold text-sm" style={{ color: '#F9FAFB' }}>{ca.headline}</h4>
                                        <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{ca.summary}</p>
                                        <div className="p-2 rounded-lg border-l-2 text-xs" style={{ borderLeftColor: '#DC2626', backgroundColor: '#1A0A0A', color: '#FECACA' }}>
                                            <span className="font-bold block mb-0.5" style={{ color: '#F87171' }}>UPSC Angle:</span>
                                            {ca.upscAngle}
                                        </div>
                                    </div>
                                ))}
                                <button onClick={() => router.push(`/student/batch1-1/modern-history/${chapterId}/current-affairs`)}
                                    className="w-full py-2.5 rounded-xl text-xs font-bold border"
                                    style={{ borderColor: '#374151', color: '#6B7280' }}>
                                    View All Modern CA →
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Navigation */}
                <div className="flex gap-3 mt-8 pt-6" style={{ borderTop: '1px solid #1F2937' }}>
                    {chapterId > 1 && (
                        <button onClick={() => router.push(`/student/batch1-1/modern-history/${chapterId - 1}`)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm border"
                            style={{ borderColor: '#374151', color: '#9CA3AF' }}>
                            <ChevronLeft className="w-4 h-4" /> Ch. {chapterId - 1}
                        </button>
                    )}
                    <div className="flex-1" />
                    {chapterId < 39 && (
                        <button onClick={() => router.push(`/student/batch1-1/modern-history/${chapterId + 1}`)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm"
                            style={{ backgroundColor: '#DC2626', color: '#fff' }}>
                            Ch. {chapterId + 1} <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

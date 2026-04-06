"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, BookOpen, Zap, CheckCircle2, RotateCcw, ChevronLeft, ChevronRight, Newspaper, Brain, Target } from "lucide-react";
import { MEDIEVAL_CHAPTERS } from "@/components/batch1/history/data/medieval-chapters";
import { MEDIEVAL_CONTENT_MAP } from "@/components/batch1/history/data/medieval/content-registry";
import { HISTORY_CA_REGISTRY } from "@/components/batch1/history/data/history-ca-registry";
import { updateEraChapterSection, getEraChapterProgress } from "@/lib/history-era-store";

type SectionStatus = 'not-started' | 'in-progress' | 'completed';
interface Progress { readSection: SectionStatus; flashcards: SectionStatus; drill: SectionStatus; }
const DEFAULT_PROGRESS: Progress = { readSection: 'not-started', flashcards: 'not-started', drill: 'not-started' };

const PHASE_LABELS: Record<number, string> = { 1: 'Early Medieval', 2: 'Delhi Sultanate', 3: 'Vijayanagara', 4: 'Mughal Empire', 5: 'Decline & 18th C' };
const PRIORITY_COLORS: Record<string, string> = { High: '#DC2626', Medium: '#D97706', Low: '#6B7280' };

// ─── Simple MCQ engine ───────────────────────────────────────────────────────
function MCQEngine({ questions, onComplete }: { questions: any[], onComplete: () => void }) {
    const [idx, setIdx] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [done, setDone] = useState(false);

    if (!questions?.length) return (
        <div className="text-center py-12" style={{ color: '#4B5563' }}>
            <Brain className="w-8 h-8 mx-auto mb-2" style={{ color: '#1F2937' }} />
            <p className="font-mono text-sm">MCQ bank loading soon for this chapter.</p>
        </div>
    );

    const q = questions[idx];
    const isLast = idx === questions.length - 1;

    const handleSelect = (i: number) => {
        if (selected !== null) return;
        setSelected(i);
        if (i === (q.correctIndex ?? q.correctAnswer)) setScore(s => s + 1);
    };

    const next = () => {
        if (isLast) { setDone(true); onComplete(); return; }
        setIdx(i => i + 1);
        setSelected(null);
    };

    if (done) return (
        <div className="text-center py-12 space-y-3">
            <CheckCircle2 className="w-12 h-12 mx-auto" style={{ color: '#10B981' }} />
            <h3 className="font-black text-xl" style={{ color: '#F9FAFB' }}>Drill Complete!</h3>
            <p style={{ color: '#9CA3AF' }}>Score: <span style={{ color: '#10B981' }} className="font-bold">{score}/{questions.length}</span> ({Math.round((score / questions.length) * 100)}%)</p>
            <button onClick={() => { setIdx(0); setSelected(null); setScore(0); setDone(false); }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm border"
                style={{ borderColor: '#374151', color: '#9CA3AF' }}>
                <RotateCcw className="w-3 h-3" /> Retry
            </button>
        </div>
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono" style={{ color: '#4B5563' }}>
                <span>Q {idx + 1} / {questions.length}</span>
                <span style={{ color: '#10B981' }}>Score: {score}</span>
            </div>
            <div className="p-4 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                <p className="font-medium leading-relaxed" style={{ color: '#F9FAFB' }}>{q.question}</p>
            </div>
            <div className="space-y-2">
                {(q.options || q.choices || []).map((opt: string, i: number) => {
                    const correct = q.correctIndex ?? q.correctAnswer;
                    let bg = '#111827', border = '#1F2937', color = '#9CA3AF';
                    if (selected !== null) {
                        if (i === correct) { bg = '#064E3B'; border = '#10B981'; color = '#6EE7B7'; }
                        else if (i === selected) { bg = '#450A0A'; border = '#DC2626'; color = '#FCA5A5'; }
                    }
                    return (
                        <button key={i} onClick={() => handleSelect(i)} disabled={selected !== null}
                            className="w-full text-left px-4 py-3 rounded-xl border font-medium text-sm transition-all disabled:cursor-default"
                            style={{ backgroundColor: bg, borderColor: border, color }}>
                            <span style={{ color: '#4B5563' }} className="mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
                        </button>
                    );
                })}
            </div>
            {selected !== null && (
                <div className="p-3 rounded-xl border-l-2 text-xs" style={{ backgroundColor: '#0F172A', borderLeftColor: '#A78BFA', color: '#C4B5FD' }}>
                    {q.explanation || q.hint || 'Review the chapter notes for this answer.'}
                </div>
            )}
            {selected !== null && (
                <button onClick={next} className="w-full py-2.5 rounded-xl font-bold text-sm"
                    style={{ backgroundColor: '#7C3AED', color: '#fff' }}>
                    {isLast ? 'Finish Drill' : 'Next Question →'}
                </button>
            )}
        </div>
    );
}

// ─── Main page ───────────────────────────────────────────────────────────────
export default function MedievalChapterPage() {
    const router = useRouter();
    const params = useParams();
    const chapterId = Number(params.chapterId);

    const chapter = MEDIEVAL_CHAPTERS.find(c => c.id === chapterId);
    const content = MEDIEVAL_CONTENT_MAP[chapterId];
    const linkedCA = HISTORY_CA_REGISTRY.filter(ca => ca.era === 'Medieval' && ca.chapterIds?.includes(chapterId));

    const [tab, setTab] = useState<'read' | 'mcq' | 'ca'>('read');
    const [progress, setProgress] = useState<Progress>(DEFAULT_PROGRESS);

    // Load from era-store on mount
    useEffect(() => {
        const saved = getEraChapterProgress('medieval', chapterId);
        if (saved) setProgress({
            readSection: (saved.readSection as SectionStatus) ?? 'not-started',
            flashcards: (saved.flashcards as SectionStatus) ?? 'not-started',
            drill: (saved.drill as SectionStatus) ?? 'not-started',
        });
    }, [chapterId]);

    const updateSection = useCallback((section: keyof Progress, status: SectionStatus) => {
        setProgress(prev => ({ ...prev, [section]: status }));
        updateEraChapterSection('medieval', chapterId, section as any, status as any);
        if (status === 'completed' && typeof window !== 'undefined') {
            const xpMap: Record<string, number> = { readSection: 10, flashcards: 15, drill: 25 };
            window.dispatchEvent(new CustomEvent('xp-gained', {
                detail: { xp: xpMap[section] ?? 10, source: `history-medieval-ch${chapterId}-${section}` }
            }));
        }
    }, [chapterId]);

    // Mark read as in-progress when tab opened
    useEffect(() => {
        if (tab === 'read' && progress.readSection === 'not-started') updateSection('readSection', 'in-progress');
        if (tab === 'mcq' && progress.drill === 'not-started') updateSection('drill', 'in-progress');
    }, [tab]);

    const completedCount = Object.values(progress).filter(s => s === 'completed').length;
    const pct = Math.round((completedCount / 3) * 100);

    if (!chapter) return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0D0F12' }}>
            <div className="text-center space-y-3">
                <h2 className="font-bold text-lg" style={{ color: '#EF4444' }}>Chapter not found</h2>
                <button onClick={() => router.push('/student/batch1-1/medieval-history')}
                    className="px-4 py-2 rounded-xl font-bold text-sm"
                    style={{ backgroundColor: '#7C3AED', color: '#fff' }}>Back to Dashboard</button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0D0F12' }}>
            {/* Nav */}
            <div className="border-b sticky top-0 z-20" style={{ backgroundColor: '#0D0F12', borderColor: '#1F2937' }}>
                <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <button onClick={() => router.push('/student/batch1-1/medieval-history')}
                            className="p-2 rounded-lg transition-colors"
                            style={{ color: '#6B7280' }}>
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded"
                                    style={{ backgroundColor: '#7C3AED', color: '#fff' }}>
                                    {PHASE_LABELS[chapter.phase]}
                                </span>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                                    style={{ color: PRIORITY_COLORS[chapter.priority], backgroundColor: '#1F2937' }}>
                                    ● {chapter.priority} Priority
                                </span>
                            </div>
                            <h1 className="text-sm font-black mt-0.5 line-clamp-1" style={{ color: '#F9FAFB' }}>
                                Ch. {chapter.id}: {chapter.title}
                            </h1>
                        </div>
                    </div>
                    {/* Progress ring */}
                    <div className="flex items-center gap-2">
                        <div className="text-right">
                            <div className="text-xs font-mono font-black" style={{ color: '#A78BFA' }}>{pct}%</div>
                            <div className="text-[10px] font-mono" style={{ color: '#4B5563' }}>Complete</div>
                        </div>
                        <div className="relative w-10 h-10">
                            <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                                <circle cx="18" cy="18" r="15" fill="none" strokeWidth="3" stroke="#1F2937" />
                                <circle cx="18" cy="18" r="15" fill="none" strokeWidth="3" stroke="#7C3AED"
                                    strokeDasharray={`${(pct / 100) * 94} 94`} strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="max-w-4xl mx-auto px-4 pb-3 flex gap-2">
                    {(['read', 'mcq', 'ca'] as const).map(t => {
                        const labels = { read: '📖 Read', mcq: '⚡ MCQs', ca: '📰 Current Affairs' };
                        const statusKey = t === 'read' ? 'readSection' : t === 'mcq' ? 'drill' : null;
                        const status = statusKey ? progress[statusKey as keyof Progress] : null;
                        return (
                            <button key={t} onClick={() => setTab(t)}
                                className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
                                style={{
                                    backgroundColor: tab === t ? '#4C1D95' : '#111827',
                                    color: tab === t ? '#A78BFA' : '#6B7280',
                                    border: `1px solid ${tab === t ? '#7C3AED' : '#1F2937'}`
                                }}>
                                {labels[t]}
                                {status === 'completed' && <CheckCircle2 className="w-3 h-3" style={{ color: '#10B981' }} />}
                                {status === 'in-progress' && <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#D97706' }} />}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-6">
                {/* READ TAB */}
                {tab === 'read' && (
                    <div className="space-y-6">
                        {content?.content ? (
                            <div className="space-y-4">
                                {/* Chapter meta */}
                                <div className="p-4 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <BookOpen className="w-4 h-4" style={{ color: '#A78BFA' }} />
                                        <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#A78BFA' }}>Chapter Overview</span>
                                        <span className="ml-auto text-[10px] font-mono" style={{ color: '#4B5563' }}>{chapter.pyqCount} PYQs</span>
                                    </div>
                                    <h2 className="font-black text-lg mb-1" style={{ color: '#F9FAFB' }}>{chapter.title}</h2>
                                    {content.content.overview && <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{content.content.overview}</p>}
                                </div>

                                {/* Key themes */}
                                {content.content.keyThemes && (
                                    <div className="p-4 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                                        <div className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: '#A78BFA' }}>Key Themes</div>
                                        <ul className="space-y-2">
                                            {content.content.keyThemes.map((theme: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#D1D5DB' }}>
                                                    <span style={{ color: '#7C3AED' }} className="mt-0.5 flex-shrink-0">▸</span>
                                                    {theme}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Subtopics */}
                                {content.subtopics && content.subtopics.length > 0 && (
                                    <div className="space-y-3">
                                        <div className="text-[10px] font-mono uppercase tracking-widest" style={{ color: '#4B5563' }}>Sub-topics</div>
                                        {content.subtopics.map((s: any, i: number) => (
                                            <div key={i} className="p-4 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                                                <h4 className="font-bold text-sm mb-1" style={{ color: '#F9FAFB' }}>{s.title || s.name}</h4>
                                                {s.content && <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{s.content}</p>}
                                                {s.keyPoints && (
                                                    <ul className="mt-2 space-y-1">
                                                        {s.keyPoints.map((kp: string, j: number) => (
                                                            <li key={j} className="text-xs flex items-start gap-2" style={{ color: '#6B7280' }}>
                                                                <span style={{ color: '#7C3AED' }}>•</span> {kp}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <BookOpen className="w-12 h-12 mx-auto mb-3" style={{ color: '#1F2937' }} />
                                <p className="font-mono text-sm" style={{ color: '#374151' }}>Detailed notes for Ch. {chapterId} are being prepared.</p>
                            </div>
                        )}
                        {progress.readSection !== 'completed' && (
                            <button onClick={() => updateSection('readSection', 'completed')}
                                className="w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                                style={{ backgroundColor: '#7C3AED', color: '#fff' }}>
                                <CheckCircle2 className="w-4 h-4" /> Mark Chapter as Read (+10 XP)
                            </button>
                        )}
                        {progress.readSection === 'completed' && (
                            <div className="w-full py-3 rounded-xl text-center font-mono text-sm"
                                style={{ backgroundColor: '#064E3B', color: '#6EE7B7', border: '1px solid #047857' }}>
                                ✓ Chapter Read — 10 XP Earned
                            </div>
                        )}
                    </div>
                )}

                {/* MCQ TAB */}
                {tab === 'mcq' && (
                    <div className="space-y-4">
                        <div className="text-[10px] font-mono uppercase tracking-widest mb-2 flex items-center gap-2" style={{ color: '#A78BFA' }}>
                            <Zap className="w-3 h-3" /> UPSC Practice MCQs — Ch. {chapterId}
                            <span className="ml-auto">{content?.mcqs?.length ?? 0} questions</span>
                        </div>
                        <MCQEngine
                            questions={content?.mcqs ?? []}
                            onComplete={() => updateSection('drill', 'completed')}
                        />
                    </div>
                )}

                {/* CURRENT AFFAIRS TAB */}
                {tab === 'ca' && (
                    <div className="space-y-4">
                        <div className="text-[10px] font-mono uppercase tracking-widest mb-2 flex items-center gap-2" style={{ color: '#A78BFA' }}>
                            <Newspaper className="w-3 h-3" /> Current Affairs Bridge
                            <span className="ml-auto">{linkedCA.length} items</span>
                        </div>
                        {linkedCA.length === 0 ? (
                            <div className="text-center py-12">
                                <Newspaper className="w-8 h-8 mx-auto mb-2" style={{ color: '#1F2937' }} />
                                <p className="text-sm font-mono" style={{ color: '#374151' }}>No CA directly linked to this chapter.</p>
                                <button onClick={() => router.push(`/student/batch1-1/medieval-history/${chapterId}/current-affairs`)}
                                    className="mt-3 text-xs underline" style={{ color: '#A78BFA' }}>
                                    Browse all Medieval CA →
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {linkedCA.map(ca => (
                                    <div key={ca.id} className="p-4 rounded-xl border space-y-2" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                                        <div className="text-[10px] font-mono" style={{ color: '#4B5563' }}>{ca.date} · {ca.source}</div>
                                        <h4 className="font-bold text-sm" style={{ color: '#F9FAFB' }}>{ca.headline}</h4>
                                        <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{ca.summary}</p>
                                        <div className="p-2 rounded-lg border-l-2 text-xs" style={{ borderLeftColor: '#7C3AED', backgroundColor: '#160D2D', color: '#DDD6FE' }}>
                                            <span className="font-bold block mb-0.5" style={{ color: '#A78BFA' }}>UPSC Angle:</span>
                                            {ca.upscAngle}
                                        </div>
                                    </div>
                                ))}
                                <button onClick={() => router.push(`/student/batch1-1/medieval-history/${chapterId}/current-affairs`)}
                                    className="w-full py-2.5 rounded-xl text-xs font-bold border"
                                    style={{ borderColor: '#374151', color: '#6B7280' }}>
                                    View All Medieval CA →
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Navigation arrows */}
                <div className="flex gap-3 mt-8 pt-6" style={{ borderTop: '1px solid #1F2937' }}>
                    {chapterId > 1 && (
                        <button onClick={() => router.push(`/student/batch1-1/medieval-history/${chapterId - 1}`)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm border"
                            style={{ borderColor: '#374151', color: '#9CA3AF' }}>
                            <ChevronLeft className="w-4 h-4" /> Ch. {chapterId - 1}
                        </button>
                    )}
                    <div className="flex-1" />
                    {chapterId < 20 && (
                        <button onClick={() => router.push(`/student/batch1-1/medieval-history/${chapterId + 1}`)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm"
                            style={{ backgroundColor: '#7C3AED', color: '#fff' }}>
                            Ch. {chapterId + 1} <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

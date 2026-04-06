"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { HISTORY_CA_REGISTRY } from "@/components/batch1/history/data/history-ca-registry";
import { MEDIEVAL_CHAPTERS } from "@/components/batch1/history/data/medieval-chapters";
import { ArrowLeft, ExternalLink, BookOpen, Zap, CalendarDays } from "lucide-react";

export default function MedievalHistoryCAPage() {
    const router = useRouter();
    const params = useParams();
    const chapterId = Number(params.chapterId);

    const chapter = MEDIEVAL_CHAPTERS.find(c => c.id === chapterId);

    const allMedievalCA = HISTORY_CA_REGISTRY.filter(ca => ca.era === 'Medieval');
    const linkedCA = chapterId
        ? allMedievalCA.filter(ca => ca.chapterIds?.includes(chapterId))
        : allMedievalCA;
    const otherCA = chapterId
        ? allMedievalCA.filter(ca => !ca.chapterIds?.includes(chapterId))
        : [];

    const [openExternal, setOpenExternal] = useState<string | null>(null);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0D0F12' }}>
            {/* Header */}
            <div className="border-b" style={{ borderColor: '#1F2937' }}>
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <button onClick={() => router.back()}
                        className="flex items-center gap-2 text-sm font-semibold transition-colors"
                        style={{ color: '#6B7280' }}>
                        <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded"
                                style={{ backgroundColor: '#7C3AED', color: '#fff' }}>
                                Medieval History
                            </span>
                            {chapter && (
                                <span className="text-xs font-mono" style={{ color: '#6B7280' }}>
                                    Ch. {chapterId}: {chapter.title}
                                </span>
                            )}
                        </div>
                        <h1 className="text-xl font-black mt-1" style={{ color: '#F9FAFB' }}>
                            Current Affairs Bridge
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
                {linkedCA.length > 0 && (
                    <section>
                        <div className="text-[10px] font-mono uppercase tracking-widest mb-4 flex items-center gap-2"
                            style={{ color: '#A78BFA' }}>
                            <Zap className="w-3 h-3" />
                            {chapterId ? `DIRECT LINKS TO CHAPTER ${chapterId}` : 'ALL MEDIEVAL HISTORY CURRENT AFFAIRS'}
                            <span className="ml-auto font-bold">{linkedCA.length} items</span>
                        </div>
                        <div className="space-y-4">
                            {linkedCA.map(ca => (
                                <MedievalCACard key={ca.id} ca={ca} onExternal={setOpenExternal} />
                            ))}
                        </div>
                    </section>
                )}

                {chapterId && otherCA.length > 0 && (
                    <section>
                        <div className="text-[10px] font-mono uppercase tracking-widest mb-4 flex items-center gap-2"
                            style={{ color: '#4B5563' }}>
                            <BookOpen className="w-3 h-3" /> OTHER MEDIEVAL CA
                            <span className="ml-auto">{otherCA.length} items</span>
                        </div>
                        <div className="space-y-3">
                            {otherCA.map(ca => (
                                <MedievalCACard key={ca.id} ca={ca} onExternal={setOpenExternal} compact />
                            ))}
                        </div>
                    </section>
                )}

                {linkedCA.length === 0 && (
                    <div className="text-center py-20">
                        <BookOpen className="w-12 h-12 mx-auto mb-3" style={{ color: '#1F2937' }} />
                        <p className="font-mono" style={{ color: '#374151' }}>No current affairs linked to this chapter yet.</p>
                    </div>
                )}
            </div>

            {openExternal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
                    onClick={() => setOpenExternal(null)}>
                    <div className="w-full max-w-sm rounded-2xl p-6 border"
                        style={{ backgroundColor: '#111827', borderColor: '#374151' }}
                        onClick={e => e.stopPropagation()}>
                        <h3 className="font-bold text-lg mb-2" style={{ color: '#F9FAFB' }}>External Link</h3>
                        <p className="text-sm mb-6" style={{ color: '#9CA3AF' }}>You're leaving EduEcosystem to visit a source. Continue?</p>
                        <div className="flex gap-3">
                            <button onClick={() => { window.open(openExternal, '_blank'); setOpenExternal(null); }}
                                className="flex-1 py-2.5 rounded-xl font-bold text-sm"
                                style={{ backgroundColor: '#7C3AED', color: '#fff' }}>Open Source</button>
                            <button onClick={() => setOpenExternal(null)}
                                className="flex-1 py-2.5 rounded-xl font-bold text-sm border"
                                style={{ borderColor: '#374151', color: '#9CA3AF' }}>Stay Here</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function MedievalCACard({ ca, onExternal, compact = false }: { ca: ReturnType<typeof HISTORY_CA_REGISTRY['filter']>[0], onExternal: (url: string) => void, compact?: boolean }) {
    return (
        <div className={`rounded-xl border p-${compact ? '4' : '5'} space-y-3`}
            style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
            <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <CalendarDays className="w-3 h-3 flex-shrink-0" style={{ color: '#4B5563' }} />
                        <span className="text-[10px] font-mono" style={{ color: '#4B5563' }}>{ca.date}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: '#1F2937', color: '#9CA3AF' }}>{ca.source}</span>
                    </div>
                    <h3 className={`font-bold ${compact ? 'text-sm' : 'text-base'}`} style={{ color: '#F9FAFB' }}>{ca.headline}</h3>
                </div>
                {ca.link && (
                    <button onClick={() => onExternal(ca.link!)} className="p-1.5 rounded-lg hover:bg-violet-900/30">
                        <ExternalLink className="w-4 h-4" style={{ color: '#A78BFA' }} />
                    </button>
                )}
            </div>
            {!compact && (
                <>
                    <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{ca.summary}</p>
                    <div className="p-3 rounded-lg border-l-2" style={{ backgroundColor: '#160D2D', borderLeftColor: '#7C3AED' }}>
                        <span className="text-[10px] font-mono uppercase tracking-widest block mb-1" style={{ color: '#A78BFA' }}>UPSC Angle</span>
                        <p className="text-xs" style={{ color: '#DDD6FE' }}>{ca.upscAngle}</p>
                    </div>
                </>
            )}
            {compact && <p className="text-xs line-clamp-2" style={{ color: '#6B7280' }}>{ca.summary}</p>}
        </div>
    );
}

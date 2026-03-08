"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft, ArrowRight, BookOpen, CheckCircle2, ChevronRight, ChevronLeft,
    FileText, Brain, Target, Compass, Zap, Layers,
    GraduationCap, RotateCcw, Clock, Lightbulb, AlertTriangle, Newspaper, Swords, History, MapPin, Map
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ANCIENT_TOPICS, getAncientPartById,
    SECTION_STATUS_COLORS, SectionStatus, ChapterProgress, MCQ, Flashcard, SequenceQuestion, SpacedRepetitionData
} from "@/components/batch1/history/data/ancient-types-27";
import { useLanguageStore } from "@/lib/language-store";
import { ancientChapterData } from "@/components/batch1/history/data/mcqs/ancient/registry";
import AncientHistoryTimeline from "@/components/batch1/history/AncientHistoryTimeline";
import { ANCIENT_COMPARISONS } from "@/components/batch1/history/data/mcqs/ancient/comparisons";
import { ANCIENT_TRENDS } from "@/components/batch1/history/data/mcqs/ancient/trends";
import { ANCIENT_TRAVELERS } from "@/components/batch1/history/data/mcqs/ancient/travelers";
import { ANCIENT_ARTIFACTS } from "@/components/batch1/history/data/mcqs/ancient/artifacts";
import { ANCIENT_MAINS_ANGLES } from "@/components/batch1/history/data/mcqs/ancient/mains";

// Helper color mapper
const getPartColors = (colorStr: string) => {
    switch (colorStr) {
        case 'stone': return { gradient: 'from-stone-600 to-stone-500', glow: 'shadow-stone-500/20' };
        case 'amber': return { gradient: 'from-amber-600 to-amber-500', glow: 'shadow-amber-500/20' };
        case 'emerald': return { gradient: 'from-emerald-600 to-emerald-500', glow: 'shadow-emerald-500/20' };
        case 'purple': return { gradient: 'from-purple-600 to-purple-500', glow: 'shadow-purple-500/20' };
        default: return { gradient: 'from-blue-600 to-blue-500', glow: 'shadow-blue-500/20' };
    }
};

const DEFAULT_PROGRESS: ChapterProgress = {
    readSection: 'not-started', flashcards: 'not-started', drill: 'not-started',
    l1: 'not-started', l2: 'not-started', l3: 'not-started',
};

const TAB_META: { key: keyof ChapterProgress; label: string; icon: React.ElementType; description: string }[] = [
    { key: 'readSection', label: '📖 Read', icon: FileText, description: '2-3 min revision' },
    { key: 'flashcards', label: '🃏 Cards', icon: RotateCcw, description: 'UPSC flashcards' },
    { key: 'drill', label: '⚡ Drill', icon: Zap, description: '60-Q drill' },
    { key: 'l1', label: 'L1', icon: BookOpen, description: 'Book recall' },
    { key: 'l2', label: 'L2', icon: GraduationCap, description: 'UPSC moderate' },
    { key: 'l3', label: 'L3', icon: Target, description: 'Tough + CA' },
    { key: 'vsMode', label: '⚔️ VS', icon: Swords, description: 'Dynasty Battle' } as any,
];

// ============= Status/Progress Badge =============
function StatusDot({ status }: { status: SectionStatus }) {
    return (
        <span className={`inline-block w-2.5 h-2.5 rounded-full ${status === 'not-started' ? 'bg-zinc-500' :
            status === 'in-progress' ? 'bg-amber-400 animate-pulse' :
                status === 'platinum' ? 'bg-zinc-100 shadow-[0_0_8px_rgba(255,255,255,0.5)]' :
                    'bg-emerald-400'
            }`} />
    );
}

// ============= UPSC Trend Badge =============
function TrendBadge({ chapterId }: { chapterId: number }) {
    const trend = ANCIENT_TRENDS[chapterId];
    if (!trend) return null;

    const colors = {
        High: 'bg-red-500/10 text-red-400 border-red-500/20',
        Medium: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
        Low: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
    };

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${colors[trend.yield]} text-[10px] font-black uppercase tracking-tighter`}>
            {trend.yield === 'High' && <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
            </span>}
            {trend.yield} Yield Chapter
            <span className="opacity-40">|</span>
            Last Seen: {trend.lastSeen}
        </div>
    );
}

// ============= Active Recall (Cloze) Wrapper =============
function RecallText({ text, active }: { text: string; active: boolean }) {
    if (!active) return <span>{text}</span>;

    // Pattern for years (BC/AD), Capitalized Proper Nouns, 
    // and specific historical terms
    const pattern = /\b(\d{1,4}\s?(BC|AD|B\.C\.|A\.D\.)|circa\.?\s?\d{1,4}|[A-Z][a-z]{3,}(?:\s[A-Z][a-z]{3,})*|Dhamma|Sangha|Arthasastra|Bherighosha|Dhammaghosha|Kalinga|Pataliputra)\b/g;

    const parts = text.split(pattern);

    return (
        <span>
            {parts.map((part, i) => {
                // If the part matches our pattern
                if (part && part.match(pattern)) {
                    return (
                        <span
                            key={i}
                            className="inline-block relative group mx-0.5"
                        >
                            <span className="bg-zinc-700/50 text-transparent rounded px-1 transition-all duration-300 blur-[4px] group-hover:blur-0 group-hover:bg-zinc-700/20 group-hover:text-amber-400 cursor-help select-none group-hover:select-text">
                                {part}
                            </span>
                        </span>
                    );
                }
                return <span key={i}>{part}</span>;
            })}
        </span>
    );
}

// ============= MCQ Engine Component =============
function MCQEngine({ questions, title }: { questions: MCQ[]; title: string }) {
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(0);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);

    const q = questions[currentQ];
    if (!q) return <div className="text-zinc-400 p-8 text-center">No questions available.</div>;

    const handleSelect = (idx: number) => {
        if (selected !== null) return;
        setSelected(idx);
        setShowExplanation(true);
        setAnswered(prev => prev + 1);

        if (idx === q.correctIndex) {
            setScore(prev => prev + 1);
            const newStreak = streak + 1;
            setStreak(newStreak);
            if (newStreak > bestStreak) setBestStreak(newStreak);
        } else {
            setStreak(0);
        }
    };

    const nextQ = () => {
        setSelected(null);
        setShowExplanation(false);
        if (currentQ < questions.length - 1) setCurrentQ(prev => prev + 1);
    };

    return (
        <div className="space-y-6">
            {/* Score & Streak Bar */}
            <div className="flex items-center justify-between bg-zinc-800/60 rounded-xl px-5 py-3 border border-zinc-700/30">
                <div className="flex items-center gap-4">
                    <div className="text-sm font-medium text-zinc-400">
                        Q {currentQ + 1} of {questions.length}
                    </div>
                    {streak > 1 && (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 animate-bounce shadow-lg shadow-orange-500/10">
                            <Zap className="h-3.5 w-3.5 fill-orange-400" />
                            <span className="text-xs font-black italic">{streak} STREAK</span>
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-4 text-sm font-bold">
                    <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">✓ {score}</span>
                    <span className="text-red-400 font-bold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">✗ {answered - score}</span>
                    <Badge className={`${q.difficulty === 'easy' ? 'bg-emerald-600' :
                        q.difficulty === 'moderate' ? 'bg-amber-600' : 'bg-rose-600'
                        } text-white border-0 px-3 py-0.5 rounded-full text-[10px]`}>
                        {q.difficulty.toUpperCase()}
                    </Badge>
                </div>
            </div>

            {/* Question */}
            <div className="bg-zinc-800/40 rounded-xl p-6 border border-zinc-700/50">
                <p className="text-zinc-100 font-medium text-lg leading-relaxed whitespace-pre-line">{q.question}</p>
            </div>

            {/* Options */}
            <div className="grid gap-3">
                {q.options.map((opt, idx) => {
                    let borderColor = 'border-zinc-700 hover:border-zinc-500';
                    let bgColor = 'bg-zinc-800/30';
                    if (selected !== null) {
                        if (idx === q.correctIndex) { borderColor = 'border-emerald-500'; bgColor = 'bg-emerald-900/30'; }
                        else if (idx === selected) { borderColor = 'border-red-500'; bgColor = 'bg-red-900/20'; }
                    }
                    return (
                        <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            disabled={selected !== null}
                            className={`w-full text-left px-5 py-4 rounded-xl border ${borderColor} ${bgColor} transition-all ${selected === null ? 'cursor-pointer hover:bg-zinc-800/60' : 'cursor-default'
                                }`}
                        >
                            <span className="text-zinc-300 font-medium">
                                <span className="text-zinc-500 mr-3">{String.fromCharCode(65 + idx)}.</span>
                                {opt}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Explanation */}
            {showExplanation && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-blue-950/40 border border-blue-800/50 rounded-xl p-5 space-y-2">
                        <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                            <Lightbulb className="h-4 w-4" /> Explanation
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed">{q.explanation}</p>
                    </div>

                    {/* Current Affair Linkage (if exists) */}
                    {q.currentAffair && (
                        <div className="bg-rose-950/30 border border-rose-800/40 rounded-xl p-5 space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                                    <Newspaper className="h-4 w-4" /> Linked Current Affair
                                </div>
                                <span className="text-[10px] text-rose-500/70 font-mono">{q.currentAffair.date}</span>
                            </div>
                            <div>
                                <h4 className="text-zinc-100 font-bold text-sm mb-1">{q.currentAffair.headline}</h4>
                                <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">{q.currentAffair.summary}</p>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full text-rose-400 hover:text-rose-300 hover:bg-rose-900/20 text-xs h-8 border border-rose-800/30"
                                onClick={() => window.location.href = `/student/batch1/current-affairs?subject=History&id=${q.id}`}
                            >
                                Read Full Analysis <ArrowRight className="h-3 w-3 ml-1" />
                            </Button>
                        </div>
                    )}
                </div>
            )}

            {/* Next Button */}
            {selected !== null && currentQ < questions.length - 1 && (
                <div className="flex justify-end">
                    <Button onClick={nextQ} className="bg-amber-600 hover:bg-amber-700 font-semibold px-8">
                        Next Question <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                </div>
            )}

            {/* Completion */}
            {selected !== null && currentQ === questions.length - 1 && (
                <div className="bg-emerald-950/40 border border-emerald-700/50 rounded-xl p-6 text-center space-y-3">
                    <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
                    <h3 className="text-xl font-bold text-emerald-300">Drill Complete!</h3>
                    <p className="text-zinc-400">Score: <span className="text-emerald-400 font-bold text-lg">{score}/{questions.length}</span> ({Math.round((score / questions.length) * 100)}%)</p>
                    <Button onClick={() => { setCurrentQ(0); setSelected(null); setShowExplanation(false); setScore(0); setAnswered(0); }} variant="outline" className="border-zinc-600 text-zinc-300 mt-2">
                        <RotateCcw className="h-4 w-4 mr-2" /> Retry
                    </Button>
                </div>
            )}
        </div>
    );
}

// ============= AI Artifact Gallery Component =============
function ArtifactGallery({ artifacts }: { artifacts: any[] }) {
    const [selected, setSelected] = useState<any | null>(null);

    return (
        <div className="mt-12 space-y-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-indigo-900/30 rounded-lg border border-indigo-500/20">
                    <Layers className="h-4 w-4 text-indigo-400" />
                </div>
                <h3 className="text-lg font-black text-zinc-100 uppercase tracking-tighter">AI Artifact Gallery</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {artifacts.map((art, idx) => (
                    <div
                        key={idx}
                        className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 transition-all cursor-pointer"
                        onClick={() => setSelected(art)}
                    >
                        {art.imagePath ? (
                            <img src={art.imagePath} alt={art.name} className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-all group-hover:scale-105 duration-700" />
                        ) : (
                            <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
                                <FileText className="h-8 w-8 text-zinc-700" />
                            </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent">
                            <h4 className="text-sm font-black text-zinc-100">{art.name}</h4>
                            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Click to Inspect</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Inspect Modal Overlay */}
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
                        {selected.imagePath && (
                            <img src={selected.imagePath} alt={selected.name} className="w-full h-80 object-cover" />
                        )}
                        <div className="p-8 space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-black text-white leading-tight">{selected.name}</h2>
                                <Button size="sm" variant="ghost" onClick={() => setSelected(null)} className="rounded-full h-8 w-8 p-0 hover:bg-zinc-800">
                                    <RotateCcw className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Description</span>
                                    <p className="text-zinc-300 text-sm leading-relaxed">{selected.description}</p>
                                </div>
                                <div className="p-4 bg-indigo-900/20 border border-indigo-500/20 rounded-2xl">
                                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-1">UPSC Significance</span>
                                    <p className="text-indigo-100 text-sm leading-relaxed italic font-medium">&quot;{selected.upscSignificance}&quot;</p>
                                </div>
                                {selected.relatedPyqIds && (
                                    <div className="p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-2xl">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Target className="h-3 w-3 text-orange-400" />
                                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Related Past Years Questions</span>
                                        </div>
                                        <div className="space-y-2">
                                            {selected.relatedPyqIds.map((pyq: string, pIdx: number) => (
                                                <div key={pIdx} className="text-[10px] py-1 px-3 bg-zinc-800 rounded-lg text-zinc-300 font-bold border border-zinc-700/50">
                                                    {pyq}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Button className="w-full mt-6 bg-zinc-100 text-zinc-900 font-black hover:bg-white" onClick={() => setSelected(null)}>
                                Close Inspection
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ============= In the News: Current Affairs Bridge =============
function AncientHistoryNews({ news }: { news: any[] }) {
    if (!news || news.length === 0) return null;

    return (
        <div className="mt-12 p-8 bg-zinc-950/40 border border-zinc-800/60 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-all pointer-events-none">
                <Newspaper className="h-32 w-32 rotate-12" />
            </div>

            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-rose-950/30 rounded-lg border border-rose-500/20">
                        <Newspaper className="h-4 w-4 text-rose-400" />
                    </div>
                    <h3 className="text-lg font-black text-zinc-100 uppercase tracking-tighter">In the News: Current Affairs Bridge</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map((item, i) => (
                        <div key={i} className="flex flex-col gap-3 p-5 rounded-2xl bg-zinc-900 border border-zinc-800/80 hover:border-rose-500/30 transition-all">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2 py-0.5 rounded-full">{item.date}</span>
                                {item.link && (
                                    <Badge variant="outline" className="text-[8px] border-zinc-700 text-zinc-500">Official Link</Badge>
                                )}
                            </div>
                            <h4 className="text-sm font-bold text-zinc-100 group-hover:text-rose-200 transition-colors leading-tight">{item.title}</h4>
                            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">{item.summary}</p>
                            <Button variant="ghost" size="sm" className="mt-auto h-8 text-[10px] uppercase font-black tracking-widest text-zinc-500 hover:text-rose-400 hover:bg-rose-500/5 justify-start p-0">
                                View Full Context <ArrowRight className="h-3 w-3 ml-1.5" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ============= Chronological Drill Component =============
function ChronologicalDrill({ drills }: { drills: SequenceQuestion[] }) {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [userOrder, setUserOrder] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const drill = drills[currentIdx];

    const handleItemClick = (id: string) => {
        if (userOrder.includes(id)) {
            setUserOrder(userOrder.filter(i => i !== id));
        } else if (userOrder.length < drill.items.length) {
            setUserOrder([...userOrder, id]);
        }
    };

    const checkOrder = () => {
        const correct = JSON.stringify(userOrder) === JSON.stringify(drill.correctOrder);
        setIsCorrect(correct);
        setShowResult(true);
    };

    const nextDrill = () => {
        setShowResult(false);
        setUserOrder([]);
        setCurrentIdx((currentIdx + 1) % drills.length);
    };

    return (
        <div className="p-6 bg-zinc-900/80 border border-zinc-800 rounded-3xl space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-purple-900/30 rounded-lg border border-purple-500/20">
                        <History className="h-4 w-4 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-black text-zinc-100 uppercase tracking-tighter">Chronological Drill</h3>
                </div>
                <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-[10px] px-3">
                    {currentIdx + 1} / {drills.length}
                </Badge>
            </div>

            <p className="text-zinc-100 font-bold leading-relaxed">{drill.question}</p>

            <div className="space-y-3">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block mb-2">Select items in correct chronological order:</span>
                <div className="grid grid-cols-1 gap-2">
                    {drill.items.map((item) => {
                        const orderIdx = userOrder.indexOf(item.id);
                        return (
                            <div
                                key={item.id}
                                onClick={() => !showResult && handleItemClick(item.id)}
                                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group
                                    ${orderIdx !== -1
                                        ? 'bg-purple-900/20 border-purple-500'
                                        : 'bg-zinc-800/50 border-zinc-700 hover:border-zinc-500'}`}
                            >
                                <span className={`text-sm font-medium ${orderIdx !== -1 ? 'text-white' : 'text-zinc-400'}`}>
                                    {item.content}
                                </span>
                                {orderIdx !== -1 && (
                                    <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-black text-white">
                                        {orderIdx + 1}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {showResult ? (
                <div className={`p-6 rounded-2xl border animate-in slide-in-from-top-2 duration-300 ${isCorrect ? 'bg-emerald-900/20 border-emerald-500/50' : 'bg-red-900/20 border-red-500/50'}`}>
                    <div className="flex items-center gap-3 mb-3">
                        {isCorrect ? <CheckCircle2 className="h-5 w-5 text-emerald-400" /> : <AlertTriangle className="h-5 w-5 text-red-400" />}
                        <h4 className={`font-black ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                            {isCorrect ? 'EXCELLENT!' : 'NOT QUITE...'}
                        </h4>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed mb-4">{drill.explanation}</p>
                    <Button onClick={nextDrill} className="w-full bg-zinc-100 text-zinc-900 hover:bg-white font-black">
                        Next Sequence
                    </Button>
                </div>
            ) : (
                <Button
                    disabled={userOrder.length !== drill.items.length}
                    onClick={checkOrder}
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-black"
                >
                    Lock Sequence
                </Button>
            )}
        </div>
    );
}

// ============= Traveler's Log Component =============
function TravelerLog({ traveler }: { traveler: any }) {
    return (
        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 mt-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-900/30 rounded-lg">
                    <Map className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                    <h3 className="text-lg font-black text-zinc-100">{traveler.name}&apos;s Traveler Log</h3>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{traveler.title} • {traveler.period}</p>
                </div>
            </div>

            <div className="relative pl-8 space-y-8 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-purple-500/50 before:via-blue-500/50 before:to-transparent">
                {traveler.route.map((stop: any, idx: number) => (
                    <div key={idx} className="relative group">
                        <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-purple-500 z-10 group-hover:scale-125 transition-transform" />
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-black text-purple-400">{stop.city}</span>
                                <span className="text-[10px] text-zinc-600 font-bold tracking-tighter">— {stop.description}</span>
                            </div>
                            <div className="bg-zinc-800/30 rounded-lg p-3 border border-zinc-700/30 group-hover:border-purple-500/30 transition-colors">
                                <p className="text-xs text-zinc-400 italic leading-relaxed">
                                    &quot;{stop.observation}&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Primary Observation Bank */}
            {traveler.primaryObservations && traveler.primaryObservations.length > 0 && (
                <div className="pt-6 border-t border-zinc-800/50 space-y-4">
                    <div className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                        <History className="h-3 w-3" /> Verbatim Observation Bank
                    </div>
                    <div className="space-y-3">
                        {traveler.primaryObservations.map((obs: string, i: number) => (
                            <div key={i} className="bg-purple-950/10 border-l-2 border-purple-500/50 p-3 rounded-r-xl">
                                <p className="text-xs text-zinc-300 leading-relaxed font-serif italic">
                                    {obs}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// ============= Dynasty Comparison Engine =============
function DynastyCompare({ currentCh, compareCh }: { currentCh: number; compareCh: number }) {
    const currentData = ANCIENT_COMPARISONS[currentCh];
    const compareData = ANCIENT_COMPARISONS[compareCh];

    if (!currentData) return <div className="text-zinc-500 p-12 text-center">Comparative data for this chapter is coming soon. Select a chapter like 14 (Maurya) or 20 (Gupta) to see the engine in action.</div>;

    const categories = ["Administration", "Economy", "Religion", "Military", "Architecture"];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-950/20 border border-amber-800/40 rounded-2xl p-6 text-center">
                    <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-1">Current Period</div>
                    <h3 className="text-xl font-black text-zinc-100">{currentData.name}</h3>
                </div>
                <div className="bg-blue-950/20 border border-blue-800/40 rounded-2xl p-6 text-center">
                    <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Comparing Against</div>
                    <h3 className="text-xl font-black text-zinc-100">{compareData?.name || `Chapter ${compareCh}`}</h3>
                </div>
            </div>

            <div className="space-y-4">
                {categories.map((cat, idx) => {
                    const currentPt = currentData.points.find(p => p.category === cat);
                    const comparePt = compareData?.points.find(p => p.category === cat);

                    return (
                        <div key={idx} className="group transition-all duration-300">
                            <div className="flex items-center justify-center mb-2">
                                <span className="px-3 py-1 rounded-full bg-zinc-800 text-[10px] font-black text-zinc-500 border border-zinc-700 uppercase tracking-widest group-hover:border-amber-500/50 group-hover:text-amber-400 transition-colors">
                                    {cat}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-0 border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/50">
                                <div className="p-5 border-r border-zinc-800">
                                    <p className="text-sm text-zinc-300 leading-relaxed italic">{currentPt?.description || "Data being compiled..."}</p>
                                </div>
                                <div className="p-5 bg-blue-950/10">
                                    <p className="text-sm text-zinc-300 leading-relaxed italic">{comparePt?.description || "Select a valid comparative chapter (14, 20, 23)."}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ============= Revision Engine: Platinum Mastery =============
function PlatinumMastery({ spacing }: { spacing?: SpacedRepetitionData }) {
    if (!spacing) return null;

    return (
        <div className="mt-12 p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-500/30 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-all">
                <Zap className="h-32 w-32 text-zinc-400 blur-sm" />
            </div>

            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-zinc-100 rounded-xl shadow-lg shadow-white/5">
                        <Zap className="h-5 w-5 text-zinc-900" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">Platinum Mastery Status</h3>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Advanced Spaced Repetition Active</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-2xl bg-zinc-800/40 border border-zinc-700/50">
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Last Revised</span>
                        <p className="text-white font-bold">{new Date(spacing.lastRevised).toLocaleDateString()}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-800/40 border border-zinc-700/50">
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Next Revision Peak</span>
                        <p className="text-amber-400 font-bold">{new Date(spacing.nextRevision).toLocaleDateString()}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-100 border-0">
                        <span className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">Revision Streak</span>
                        <p className="text-zinc-900 font-black text-lg">{spacing.streak} Cycles</p>
                    </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                    You have reached <strong className="text-white">Platinum Mastery</strong>. This chapter is now in your long-term memory. The next revision is scheduled for the optimal decay point to ensure zero-loss retention.
                </p>
            </div>
        </div>
    );
}

// ============= Flashcard Deck Component =============
function FlashcardDeck({ cards }: { cards: Flashcard[] }) {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const card = cards[currentIdx];
    if (!card) return null;

    return (
        <div className="space-y-6">
            <div className="text-center text-sm text-zinc-500 font-medium">
                Card {currentIdx + 1} of {cards.length}
            </div>
            <div
                onClick={() => setFlipped(f => !f)}
                className="min-h-[280px] rounded-2xl border-2 border-zinc-700 cursor-pointer transition-all duration-300 hover:border-amber-600 flex items-center justify-center p-8"
                style={{ perspective: '1000px' }}
            >
                {!flipped ? (
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center p-3 bg-amber-900/30 rounded-full mb-2">
                            <Brain className="h-6 w-6 text-amber-400" />
                        </div>
                        <p className="text-xl font-semibold text-zinc-100 leading-relaxed max-w-2xl">{card.front}</p>
                        <p className="text-xs text-zinc-500 mt-4">Tap to reveal answer</p>
                    </div>
                ) : (
                    <div className="text-center space-y-4 bg-emerald-950/20 p-6 rounded-xl w-full">
                        <div className="inline-flex items-center justify-center p-3 bg-emerald-900/30 rounded-full mb-2">
                            <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                        </div>
                        <p className="text-zinc-200 leading-relaxed whitespace-pre-line max-w-2xl mx-auto">{card.back}</p>
                        <div className="flex gap-1 justify-center mt-3 flex-wrap">
                            {card.tags.map(t => <Badge key={t} className="bg-zinc-700 text-zinc-300 text-[10px] border-0">{t}</Badge>)}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex justify-center gap-3">
                <Button
                    variant="outline" size="sm"
                    disabled={currentIdx === 0}
                    onClick={() => { setCurrentIdx(i => i - 1); setFlipped(false); }}
                    className="border-zinc-700 text-zinc-400"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" /> Prev
                </Button>
                <Button
                    variant="outline" size="sm"
                    disabled={currentIdx === cards.length - 1}
                    onClick={() => { setCurrentIdx(i => i + 1); setFlipped(false); }}
                    className="border-zinc-700 text-zinc-400"
                >
                    Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
            </div>
        </div>
    );
}

// ============= MAIN PAGE =============
export default function AncientHistoryChapterPage() {
    const params = useParams();
    const router = useRouter();
    const chapterId = parseInt(params.chapterId as string);

    const [activeTab, setActiveTab] = useState('readSection');
    const [progress, setProgress] = useState<ChapterProgress>(DEFAULT_PROGRESS);
    const [language, setLanguage] = useState<'en' | 'hi'>('en');
    const [isMegaDrill, setIsMegaDrill] = useState(false);
    const [megaQuestions, setMegaQuestions] = useState<MCQ[]>([]);
    const [isRecallMode, setIsRecallMode] = useState(false);
    const [compareId, setCompareId] = useState<number>(20); // Default to comparing with Gupta (Ch 20)

    const topic = ANCIENT_TOPICS.find(t => t.id === chapterId);
    const part = topic ? getAncientPartById(topic.part) : null;
    const colors = part ? getPartColors(part.color) : getPartColors('stone');

    useEffect(() => {
        const saved = localStorage.getItem('ancient_27_progress');
        if (saved) {
            const all = JSON.parse(saved);
            if (all[chapterId]) setProgress(prev => ({ ...prev, ...all[chapterId] }));
        }
    }, [chapterId]);

    const updateSectionStatus = useCallback((section: keyof ChapterProgress, status: SectionStatus) => {
        setProgress(prev => {
            const updated = { ...prev, [section]: status };
            const saved = localStorage.getItem('ancient_27_progress');
            const all = saved ? JSON.parse(saved) : {};
            all[chapterId] = updated;
            localStorage.setItem('ancient_27_progress', JSON.stringify(all));
            return updated;
        });
    }, [chapterId]);

    useEffect(() => {
        const sectionKey = activeTab as keyof ChapterProgress;
        if (progress[sectionKey] === 'not-started') {
            updateSectionStatus(sectionKey, 'in-progress');
        }
    }, [activeTab, progress, updateSectionStatus]);

    const goToTopic = (id: number) => {
        if (id >= 1 && id <= 27) router.push(`/student/batch1-1/ancient-history/${id}`);
    };

    const completedCount = Object.values(progress).filter(s => s === 'completed').length;
    const progressPercent = Math.round((completedCount / 6) * 100);

    const mastery = useMemo(() => {
        if (progressPercent >= 100) return { label: 'GOLD', icon: '🏆', color: 'text-amber-400' };
        if (progressPercent >= 60) return { label: 'SILVER', icon: '🥈', color: 'text-zinc-300' };
        if (progressPercent > 0) return { label: 'BRONZE', icon: '🥉', color: 'text-orange-500' };
        return null;
    }, [progressPercent]);

    // Get MCQs for the current chapter
    const getChapterMCQs = (level: string): MCQ[] => {
        const data = ancientChapterData[chapterId];
        if (!data) return [];
        switch (level) {
            case 'drill': return data[`CH${chapterId}_DRILL`] || data[`CH${chapterId}_L1_MCQS`]?.slice(0, 30) || [];
            case 'l1': return data[`CH${chapterId}_L1_MCQS`] || [];
            case 'l2': return data[`CH${chapterId}_L2_MCQS`] || [];
            case 'l3': return data[`CH${chapterId}_L3_MCQS`] || [];
            default: return [];
        }
    };

    const getSequenceDrills = (): SequenceQuestion[] => {
        const data = ancientChapterData[chapterId];
        if (!data) return [];
        return data[`CH${chapterId}_SEQUENCE_DRILLS`] || [];
    };

    const startMegaDrill = () => {
        const all: MCQ[] = [];
        for (let i = 1; i <= 27; i++) {
            const data = ancientChapterData[i];
            if (data) {
                const pool = data[`CH${i}_L1_MCQS`] || [];
                // Pick 3 random from each chapter
                const shuffled = [...pool].sort(() => 0.5 - Math.random());
                all.push(...shuffled.slice(0, 3));
            }
        }
        setMegaQuestions(all.sort(() => 0.5 - Math.random()));
        setIsMegaDrill(true);
    };

    if (!topic || !part) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
                <Card className="bg-zinc-900 border-red-800/50 max-w-md">
                    <CardContent className="p-8 text-center space-y-4">
                        <h2 className="text-xl font-bold text-red-400">Chapter not found</h2>
                        <Button onClick={() => router.push('/student/batch1-1/ancient-history')} className="mt-4">Back to Dashboard</Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <Button variant="ghost" onClick={() => router.push('/student/batch1-1/ancient-history')} className="text-zinc-400 hover:text-white hover:bg-zinc-800">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Dashboard
                    </Button>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => goToTopic(chapterId - 1)} disabled={chapterId <= 1} className="border-zinc-700 text-zinc-400 hover:text-white">
                            <ChevronLeft className="h-4 w-4" /> Prev
                        </Button>
                        <span className="text-sm font-medium text-zinc-500 px-2">{chapterId}/27</span>
                        <Button variant="outline" size="sm" onClick={() => goToTopic(chapterId + 1)} disabled={chapterId >= 27} className="border-zinc-700 text-zinc-400 hover:text-white">
                            Next <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Language Toggle */}
                    <div className="flex items-center bg-zinc-800 rounded-full p-1 border border-zinc-700">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-zinc-700 shadow-sm text-blue-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                        > En </button>
                        <button
                            onClick={() => setLanguage('hi')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'hi' ? 'bg-zinc-700 shadow-sm text-orange-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                        > हिंदी </button>
                    </div>
                </div>

                {/* Banner */}
                <Card className={`bg-gradient-to-br ${colors.gradient} text-white border-0 shadow-2xl ${colors.glow} overflow-hidden relative`}>
                    <div className="absolute right-0 top-0 opacity-10 w-64 h-64 pointer-events-none"><Compass className="w-full h-full" /></div>
                    <CardContent className="p-8 relative z-10">
                        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <Badge className="bg-white/20 text-white border-0">Part {part.id}: {part.title}</Badge>
                                    <Badge className="bg-white/90 text-stone-800 font-bold border-0">Ch {chapterId}</Badge>
                                    {mastery && (
                                        <Badge className="bg-black/30 text-white border border-white/20 backdrop-blur-md flex items-center gap-1.5">
                                            <span className="text-sm">{mastery.icon}</span>
                                            <span className={`text-[10px] font-black ${mastery.color}`}>{mastery.label} MASTERY</span>
                                        </Badge>
                                    )}
                                </div>
                                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{topic.title}</h1>
                                <p className="text-white/70 font-medium">RS Sharma — India&apos;s Ancient Past</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                                <div className="text-3xl font-black">{progressPercent}%</div>
                                <div className="text-xs text-white/70">{completedCount}/6 Sections</div>
                                <div className="flex gap-1 mt-1">
                                    {TAB_META.map(tab => <StatusDot key={tab.key} status={progress[tab.key]} />)}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Tab Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {TAB_META.map(tab => {
                        const status = progress[tab.key];
                        const sc = SECTION_STATUS_COLORS[status];
                        const Icon = tab.icon;
                        return (
                            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                                className={`rounded-xl p-4 border transition-all duration-200 text-left ${sc.bg} ${sc.border} ${activeTab === tab.key ? 'ring-2 ring-offset-2 ring-offset-zinc-950 ring-amber-500 scale-[1.02]' : 'hover:scale-[1.01]'
                                    }`}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Icon className={`h-4 w-4 ${sc.text}`} />
                                    <StatusDot status={status} />
                                </div>
                                <div className={`text-sm font-bold ${sc.text}`}>{tab.label}</div>
                                <div className="text-[10px] text-zinc-500 mt-1">{tab.description}</div>
                            </button>
                        );
                    })}
                </div>

                {/* Active Content */}
                <Card className="bg-zinc-900/80 border-zinc-800 shadow-xl">
                    <CardContent className="p-6 md:p-8">
                        {/* ===== READ SECTION ===== */}
                        {activeTab === 'readSection' && (
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-amber-400" /> Read & Retain
                                    </h2>
                                    <div className="flex items-center gap-3">
                                        <TrendBadge chapterId={chapterId} />
                                        <Button
                                            size="sm"
                                            variant={isRecallMode ? "default" : "outline"}
                                            onClick={() => setIsRecallMode(!isRecallMode)}
                                            className={`transition-all duration-300 ${isRecallMode ? 'bg-amber-600 hover:bg-amber-700 border-amber-500 shadow-lg shadow-amber-500/20' : 'border-zinc-700 text-zinc-400 hover:text-white'}`}
                                        >
                                            <Brain className={`h-4 w-4 mr-2 ${isRecallMode ? 'animate-pulse' : ''}`} />
                                            Active Recall {isRecallMode ? 'ON' : 'OFF'}
                                        </Button>

                                        {progress.readSection !== 'completed' && (
                                            <Button size="sm" onClick={() => updateSectionStatus('readSection', 'completed')} className="bg-emerald-600 hover:bg-emerald-700">
                                                <CheckCircle2 className="h-4 w-4 mr-1" /> Mark Complete
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                {language === 'hi' && (
                                    <div className="bg-orange-900/20 border border-orange-800/50 rounded-xl p-4 flex items-center gap-3 text-orange-400 text-sm italic">
                                        <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                                        <span>Hindi translations for Ancient History are coming soon. Showing English version for now.</span>
                                    </div>
                                )}

                                {/* UPSC Strategy Insight */}
                                {ANCIENT_TRENDS[chapterId] && (
                                    <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-4 space-y-2">
                                        <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest">
                                            <Lightbulb className="h-4 w-4" /> UPSC Strategy Insight
                                        </div>
                                        <p className="text-sm text-zinc-400 leading-relaxed italic">
                                            <span className="text-zinc-200">Focus:</span> {ANCIENT_TRENDS[chapterId].focus}. {ANCIENT_TRENDS[chapterId].insight}
                                        </p>
                                    </div>
                                )}

                                {ancientChapterData[chapterId] ? (
                                    <>
                                        {/* Summary */}
                                        <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                                            <h3 className="text-lg font-semibold text-amber-400 mb-3 flex items-center gap-2">
                                                <Brain className="h-5 w-5" /> Core Summary
                                            </h3>
                                            <p className="text-zinc-300 leading-relaxed">
                                                <RecallText
                                                    text={ancientChapterData[chapterId][`CH${chapterId}_SUMMARY`]}
                                                    active={isRecallMode}
                                                />
                                            </p>
                                        </div>

                                        {/* Key Points */}
                                        <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                                            <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                                                <Target className="h-5 w-5" /> Key UPSC Points
                                            </h3>
                                            <ul className="space-y-3">
                                                {(ancientChapterData[chapterId][`CH${chapterId}_KEY_POINTS`] || []).map((pt: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-900/50 text-emerald-400 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                                                        <span className="text-zinc-300 text-sm leading-relaxed">
                                                            <RecallText text={pt} active={isRecallMode} />
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Handwritten Notes */}
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {(ancientChapterData[chapterId][`CH${chapterId}_HANDWRITTEN_NOTES`] || []).map((note: any, i: number) => (
                                                <div key={i} className={`rounded-xl p-5 border ${note.style === 'cursive' ? 'bg-amber-950/30 border-amber-800/40' :
                                                    note.style === 'marker' ? 'bg-red-950/30 border-red-800/40' :
                                                        'bg-blue-950/30 border-blue-800/40'
                                                    }`}>
                                                    <h4 className={`font-bold text-sm mb-3 ${note.style === 'cursive' ? 'text-amber-400' :
                                                        note.style === 'marker' ? 'text-red-400' : 'text-blue-400'
                                                        }`}>{note.title}</h4>
                                                    <p className="text-zinc-400 text-xs leading-relaxed whitespace-pre-line" style={{
                                                        fontFamily: note.style === 'cursive' ? "'Caveat', cursive" : 'inherit'
                                                    }}>{note.content}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Timeline */}
                                        <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50 overflow-hidden">
                                            <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                                                <History className="h-5 w-5" /> Chronological Visualizer
                                            </h3>
                                            <AncientHistoryTimeline
                                                events={ancientChapterData[chapterId][`CH${chapterId}_TIMELINE`] || []}
                                                chapterId={chapterId}
                                            />
                                        </div>

                                        {/* Traveler's Log (Conditional) */}
                                        {ANCIENT_TRAVELERS[chapterId] && (
                                            <TravelerLog traveler={ANCIENT_TRAVELERS[chapterId]} />
                                        )}

                                        {/* AI Artifact Gallery (Conditional) */}
                                        {ANCIENT_ARTIFACTS[chapterId] && (
                                            <ArtifactGallery artifacts={ANCIENT_ARTIFACTS[chapterId]} />
                                        )}

                                        {/* UPSC MAINS ANGLE (Conditional) */}
                                        {ANCIENT_MAINS_ANGLES[chapterId] && (
                                            <div className="mt-12 p-8 bg-zinc-950/50 border border-zinc-800 rounded-3xl relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all">
                                                    <BookOpen className="h-32 w-32 -rotate-12" />
                                                </div>
                                                <div className="relative z-10 space-y-6">
                                                    <div className="flex items-center gap-2">
                                                        <div className="p-2 bg-orange-950/30 rounded-lg border border-orange-500/20">
                                                            <Target className="h-4 w-4 text-orange-400" />
                                                        </div>
                                                        <h3 className="text-lg font-black text-zinc-100 uppercase tracking-tighter">Mains Mastery Angle</h3>
                                                    </div>

                                                    <div className="space-y-4">
                                                        <div className="space-y-2">
                                                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Probable Question</span>
                                                            <p className="text-zinc-100 font-bold leading-relaxed">{ANCIENT_MAINS_ANGLES[chapterId].likelyQuestion}</p>
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            <div className="space-y-3">
                                                                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Strategic Points</span>
                                                                <ul className="space-y-2">
                                                                    {ANCIENT_MAINS_ANGLES[chapterId].keyPoints.map((pt, i) => (
                                                                        <li key={i} className="flex gap-2 text-sm text-zinc-400">
                                                                            <ChevronRight className="h-4 w-4 text-orange-500/50 shrink-0 mt-0.5" />
                                                                            {pt}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className="space-y-3">
                                                                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Killer Vocabulary</span>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {ANCIENT_MAINS_ANGLES[chapterId].vocabulary.map((voc, i) => (
                                                                        <Badge key={i} variant="outline" className="bg-orange-500/5 border-orange-500/20 text-orange-200 text-[10px] font-black uppercase tracking-widest py-1">
                                                                            {voc}
                                                                        </Badge>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {/* IN THE NEWS: Current Affairs Bridge (Conditional) */}
                                        {ancientChapterData[chapterId][`CH${chapterId}_CURRENT_AFFAIRS`] && (
                                            <AncientHistoryNews news={ancientChapterData[chapterId][`CH${chapterId}_CURRENT_AFFAIRS`]} />
                                        )}

                                        {/* PLATINUM MASTERY: Spaced Repetition (Conditional) */}
                                        {part.readSection === 'platinum' && (
                                            <PlatinumMastery spacing={part.spacing} />
                                        )}
                                    </>
                                ) : (
                                    <div className="text-center py-16 space-y-4">
                                        <div className="inline-flex items-center justify-center p-4 bg-amber-900/30 rounded-full mb-4">
                                            <FileText className="h-10 w-10 text-amber-400" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-zinc-200">Content Pipeline Active</h3>
                                        <p className="text-zinc-500 max-w-md mx-auto">
                                            The revision data for <strong className="text-zinc-300">{topic.title}</strong> is being compiled.
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* ===== FLASHCARDS ===== */}
                        {activeTab === 'flashcards' && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                                        <RotateCcw className="h-5 w-5 text-blue-400" /> UPSC Flashcards
                                    </h2>
                                    {progress.flashcards !== 'completed' && (
                                        <Button size="sm" onClick={() => updateSectionStatus('flashcards', 'completed')} className="bg-emerald-600 hover:bg-emerald-700">
                                            <CheckCircle2 className="h-4 w-4 mr-1" /> Mark Complete
                                        </Button>
                                    )}
                                </div>
                                {ancientChapterData[chapterId] ? (
                                    <FlashcardDeck cards={ancientChapterData[chapterId][`CH${chapterId}_FLASHCARDS`] || []} />
                                ) : (
                                    <div className="text-center py-16 text-zinc-500">Flashcards for this chapter are being generated.</div>
                                )}
                            </div>
                        )}

                        {/* ===== DRILL ===== */}
                        {activeTab === 'drill' && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                                        <Zap className="h-5 w-5 text-yellow-400" /> {isMegaDrill ? 'Global Practice Hub — All Chapters' : '60-Question Drill'}
                                    </h2>
                                    <div className="flex gap-2">
                                        {!isMegaDrill && (
                                            <Button size="sm" variant="outline" onClick={startMegaDrill} className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10">
                                                <Compass className="h-4 w-4 mr-1" /> Practice All Chapters
                                            </Button>
                                        )}
                                        {isMegaDrill && (
                                            <Button size="sm" variant="ghost" onClick={() => setIsMegaDrill(false)} className="text-zinc-400">
                                                Exit Global Mode
                                            </Button>
                                        )}
                                        {progress.drill !== 'completed' && (
                                            <Button size="sm" onClick={() => updateSectionStatus('drill', 'completed')} className="bg-emerald-600 hover:bg-emerald-700">
                                                <CheckCircle2 className="h-4 w-4 mr-1" /> Mark Complete
                                            </Button>
                                        )}
                                    </div>
                                </div>
                                {isMegaDrill ? (
                                    <MCQEngine questions={megaQuestions} title="Global Mega Practice" />
                                ) : ancientChapterData[chapterId] ? (
                                    <MCQEngine questions={getChapterMCQs('drill')} title="60-Q Drill" />
                                ) : (
                                    <div className="text-center py-16 text-zinc-500">Drill questions for this chapter are being compiled.</div>
                                )}
                            </div>
                        )}

                        {/* ===== L1 / L2 / L3 MCQs ===== */}
                        {(activeTab === 'l1' || activeTab === 'l2' || activeTab === 'l3') && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                                        <Target className={`h-5 w-5 ${activeTab === 'l1' ? 'text-green-400' : activeTab === 'l2' ? 'text-orange-400' : 'text-red-400'}`} />
                                        {activeTab === 'l1' ? 'Level 1 — Foundation (Book Recall)' :
                                            activeTab === 'l2' ? 'Level 2 — UPSC Moderate' :
                                                'Level 3 — UPSC Tough + Current Affairs'}
                                    </h2>
                                    {progress[activeTab as keyof ChapterProgress] !== 'completed' && (
                                        <Button size="sm" onClick={() => updateSectionStatus(activeTab as keyof ChapterProgress, 'completed')} className="bg-emerald-600 hover:bg-emerald-700">
                                            <CheckCircle2 className="h-4 w-4 mr-1" /> Mark Complete
                                        </Button>
                                    )}
                                </div>
                                {(() => {
                                    const drills = getSequenceDrills();
                                    const mcqs = getChapterMCQs(activeTab);

                                    return (
                                        <div className="space-y-12">
                                            {/* Priority Drill: Chronological Ordering */}
                                            {drills.length > 0 && activeTab === 'l1' && (
                                                <ChronologicalDrill drills={drills} />
                                            )}

                                            {mcqs.length > 0 ? (
                                                <MCQEngine questions={mcqs} title={activeTab.toUpperCase()} />
                                            ) : (
                                                <div className="text-center py-16 space-y-4">
                                                    <div className={`inline-flex items-center justify-center p-4 rounded-full mb-4 ${activeTab === 'l1' ? 'bg-green-900/30' : activeTab === 'l2' ? 'bg-orange-900/30' : 'bg-red-900/30'
                                                        }`}>
                                                        <Target className={`h-10 w-10 ${activeTab === 'l1' ? 'text-green-400' : activeTab === 'l2' ? 'text-orange-400' : 'text-red-400'}`} />
                                                    </div>
                                                    <h3 className="text-2xl font-semibold text-zinc-200">MCQs Loading</h3>
                                                    <p className="text-zinc-500 max-w-md mx-auto">Questions for this chapter are being forged.</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })()}
                            </div>
                        )}

                        {/* ===== VS BATTLE ===== */}
                        {activeTab === 'vsMode' && (
                            <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-500">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-black text-zinc-100 flex items-center gap-2">
                                        <Swords className="h-5 w-5 text-blue-400" /> Dynasty Battle Engine
                                    </h2>
                                    <div className="flex gap-1.5 bg-zinc-800/80 p-1 rounded-xl border border-zinc-700/50">
                                        {[14, 20, 23].map(id => (
                                            <Button
                                                key={id}
                                                size="sm"
                                                variant={compareId === id ? "default" : "ghost"}
                                                onClick={() => setCompareId(id)}
                                                className={`text-[10px] font-black h-7 rounded-lg transition-all ${compareId === id ? 'bg-blue-600 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-200'}`}
                                            >
                                                VS {id === 14 ? 'Maurya' : id === 20 ? 'Gupta' : 'Harsha'}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <DynastyCompare currentCh={chapterId} compareCh={compareId} />
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

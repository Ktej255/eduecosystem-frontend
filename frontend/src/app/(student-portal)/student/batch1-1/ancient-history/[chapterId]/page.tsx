"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft, BookOpen, CheckCircle2, ChevronRight, ChevronLeft,
    FileText, Brain, Target, Compass, Zap, Layers,
    GraduationCap, RotateCcw, Clock, Lightbulb, AlertTriangle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ANCIENT_TOPICS, getAncientPartById,
    SECTION_STATUS_COLORS, SectionStatus, ChapterProgress, MCQ, Flashcard
} from "@/components/batch1/history/data/ancient-types-27";
import {
    CH1_SUMMARY, CH1_KEY_POINTS, CH1_HANDWRITTEN_NOTES, CH1_TIMELINE,
    CH1_FLASHCARDS, CH1_DRILL, CH1_L1_MCQS, CH1_L2_MCQS, CH1_L3_MCQS
} from "@/components/batch1/history/data/mcqs/ancient/chapter1-data";

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
];

function StatusDot({ status }: { status: SectionStatus }) {
    return (
        <span className={`inline-block w-2.5 h-2.5 rounded-full ${status === 'not-started' ? 'bg-zinc-500' :
                status === 'in-progress' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'
            }`} />
    );
}

// ============= MCQ Engine Component =============
function MCQEngine({ questions, title }: { questions: MCQ[]; title: string }) {
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(0);

    const q = questions[currentQ];
    if (!q) return <div className="text-zinc-400 p-8 text-center">No questions available.</div>;

    const handleSelect = (idx: number) => {
        if (selected !== null) return;
        setSelected(idx);
        setShowExplanation(true);
        setAnswered(prev => prev + 1);
        if (idx === q.correctIndex) setScore(prev => prev + 1);
    };

    const nextQ = () => {
        setSelected(null);
        setShowExplanation(false);
        if (currentQ < questions.length - 1) setCurrentQ(prev => prev + 1);
    };

    return (
        <div className="space-y-6">
            {/* Score Bar */}
            <div className="flex items-center justify-between bg-zinc-800/60 rounded-xl px-5 py-3">
                <div className="text-sm font-medium text-zinc-400">
                    Q {currentQ + 1} of {questions.length}
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <span className="text-emerald-400 font-bold">✓ {score}</span>
                    <span className="text-red-400 font-bold">✗ {answered - score}</span>
                    <Badge className={`${q.difficulty === 'easy' ? 'bg-green-600' :
                            q.difficulty === 'moderate' ? 'bg-orange-600' : 'bg-red-600'
                        } text-white border-0`}>
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
                <div className="bg-blue-950/40 border border-blue-800/50 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                        <Lightbulb className="h-4 w-4" /> Explanation
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed">{q.explanation}</p>
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

    const [activeTab, setActiveTab] = useState<string>('readSection');
    const [progress, setProgress] = useState<ChapterProgress>(DEFAULT_PROGRESS);

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

    // Get MCQs for the current chapter (only Ch1 has data so far)
    const getChapterMCQs = (level: string): MCQ[] => {
        if (chapterId !== 1) return [];
        switch (level) {
            case 'drill': return CH1_DRILL;
            case 'l1': return CH1_L1_MCQS;
            case 'l2': return CH1_L2_MCQS;
            case 'l3': return CH1_L3_MCQS;
            default: return [];
        }
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
                {/* Header */}
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
                                    {progress.readSection !== 'completed' && (
                                        <Button size="sm" onClick={() => updateSectionStatus('readSection', 'completed')} className="bg-emerald-600 hover:bg-emerald-700">
                                            <CheckCircle2 className="h-4 w-4 mr-1" /> Mark Complete
                                        </Button>
                                    )}
                                </div>

                                {chapterId === 1 ? (
                                    <>
                                        {/* Summary */}
                                        <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                                            <h3 className="text-lg font-semibold text-amber-400 mb-3 flex items-center gap-2">
                                                <Brain className="h-5 w-5" /> Core Summary
                                            </h3>
                                            <p className="text-zinc-300 leading-relaxed">{CH1_SUMMARY}</p>
                                        </div>

                                        {/* Key Points */}
                                        <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                                            <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                                                <Target className="h-5 w-5" /> Key UPSC Points
                                            </h3>
                                            <ul className="space-y-3">
                                                {CH1_KEY_POINTS.map((pt, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-900/50 text-emerald-400 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                                                        <span className="text-zinc-300 text-sm leading-relaxed">{pt}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Handwritten Notes */}
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {CH1_HANDWRITTEN_NOTES.map((note, i) => (
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
                                        <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                                            <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                                                <Clock className="h-5 w-5" /> Chronology
                                            </h3>
                                            <div className="space-y-4">
                                                {CH1_TIMELINE.map((evt, i) => (
                                                    <div key={i} className="flex gap-4 items-start">
                                                        <div className="flex-shrink-0 text-right w-36">
                                                            <span className="text-purple-400 font-mono text-sm font-bold">{evt.year}</span>
                                                        </div>
                                                        <div className="relative">
                                                            <div className="w-3 h-3 rounded-full bg-purple-500 mt-1.5" />
                                                            {i < CH1_TIMELINE.length - 1 && <div className="absolute top-4 left-1.5 w-px h-8 bg-purple-800" />}
                                                        </div>
                                                        <div className="flex-1 pb-4">
                                                            <div className="text-zinc-200 font-semibold text-sm">{evt.event}</div>
                                                            <div className="text-zinc-500 text-xs mt-0.5">{evt.description}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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
                                {chapterId === 1 ? (
                                    <FlashcardDeck cards={CH1_FLASHCARDS} />
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
                                        <Zap className="h-5 w-5 text-yellow-400" /> 60-Question Drill
                                    </h2>
                                    {progress.drill !== 'completed' && (
                                        <Button size="sm" onClick={() => updateSectionStatus('drill', 'completed')} className="bg-emerald-600 hover:bg-emerald-700">
                                            <CheckCircle2 className="h-4 w-4 mr-1" /> Mark Complete
                                        </Button>
                                    )}
                                </div>
                                {chapterId === 1 ? (
                                    <MCQEngine questions={CH1_DRILL} title="60-Q Drill" />
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
                                    const mcqs = getChapterMCQs(activeTab);
                                    if (mcqs.length > 0) {
                                        return <MCQEngine questions={mcqs} title={activeTab.toUpperCase()} />;
                                    }
                                    return (
                                        <div className="text-center py-16 space-y-4">
                                            <div className={`inline-flex items-center justify-center p-4 rounded-full mb-4 ${activeTab === 'l1' ? 'bg-green-900/30' : activeTab === 'l2' ? 'bg-orange-900/30' : 'bg-red-900/30'
                                                }`}>
                                                <Target className={`h-10 w-10 ${activeTab === 'l1' ? 'text-green-400' : activeTab === 'l2' ? 'text-orange-400' : 'text-red-400'}`} />
                                            </div>
                                            <h3 className="text-2xl font-semibold text-zinc-200">MCQs Loading</h3>
                                            <p className="text-zinc-500 max-w-md mx-auto">Questions for this chapter are being forged.</p>
                                        </div>
                                    );
                                })()}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

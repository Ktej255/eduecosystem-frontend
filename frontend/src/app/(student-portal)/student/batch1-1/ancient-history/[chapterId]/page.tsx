"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft, BookOpen, CheckCircle2, ChevronRight, ChevronLeft,
    FileText, Brain, Target, Compass, Zap, Layers, Newspaper,
    GraduationCap, RotateCcw
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ANCIENT_TOPICS, getAncientPartById,
    SECTION_STATUS_COLORS, SectionStatus, ChapterProgress
} from "@/components/batch1/history/data/ancient-types-27";

// Helper color mapper
const getPartColors = (colorStr: string) => {
    switch (colorStr) {
        case 'stone':
            return { gradient: 'from-stone-600 to-stone-500', bg: 'bg-stone-900/60', text: 'text-stone-300', glow: 'shadow-stone-500/20' };
        case 'amber':
            return { gradient: 'from-amber-600 to-amber-500', bg: 'bg-amber-900/60', text: 'text-amber-300', glow: 'shadow-amber-500/20' };
        case 'emerald':
            return { gradient: 'from-emerald-600 to-emerald-500', bg: 'bg-emerald-900/60', text: 'text-emerald-300', glow: 'shadow-emerald-500/20' };
        case 'purple':
            return { gradient: 'from-purple-600 to-purple-500', bg: 'bg-purple-900/60', text: 'text-purple-300', glow: 'shadow-purple-500/20' };
        default:
            return { gradient: 'from-blue-600 to-blue-500', bg: 'bg-blue-900/60', text: 'text-blue-300', glow: 'shadow-blue-500/20' };
    }
};

const DEFAULT_PROGRESS: ChapterProgress = {
    readSection: 'not-started',
    flashcards: 'not-started',
    drill: 'not-started',
    l1: 'not-started',
    l2: 'not-started',
    l3: 'not-started',
};

const TAB_META: { key: keyof ChapterProgress; label: string; icon: React.ElementType; description: string }[] = [
    { key: 'readSection', label: '📖 Read', icon: FileText, description: '2-3 minute rapid revision' },
    { key: 'flashcards', label: '🃏 Flashcards', icon: RotateCcw, description: 'UPSC Prelims-level revision cards' },
    { key: 'drill', label: '⚡ Drill', icon: Zap, description: '60-question composite drill' },
    { key: 'l1', label: 'L1', icon: BookOpen, description: 'Foundation – Book Recall' },
    { key: 'l2', label: 'L2', icon: GraduationCap, description: 'UPSC Moderate' },
    { key: 'l3', label: 'L3', icon: Target, description: 'UPSC Tough + Current Affairs' },
];

function StatusDot({ status }: { status: SectionStatus }) {
    const c = SECTION_STATUS_COLORS[status];
    return (
        <span className={`inline-block w-2.5 h-2.5 rounded-full ${status === 'not-started' ? 'bg-zinc-500' :
            status === 'in-progress' ? 'bg-amber-400 animate-pulse' :
                'bg-emerald-400'
            }`} />
    );
}

export default function AncientHistoryChapterPage() {
    const params = useParams();
    const router = useRouter();
    const chapterId = parseInt(params.chapterId as string);

    const [activeTab, setActiveTab] = useState<string>('readSection');
    const [progress, setProgress] = useState<ChapterProgress>(DEFAULT_PROGRESS);

    const topic = ANCIENT_TOPICS.find(t => t.id === chapterId);
    const part = topic ? getAncientPartById(topic.part) : null;
    const colors = part ? getPartColors(part.color) : getPartColors('stone');

    // Load progress from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('ancient_27_progress');
        if (saved) {
            const all = JSON.parse(saved);
            if (all[chapterId]) {
                setProgress(prev => ({ ...prev, ...all[chapterId] }));
            }
        }
    }, [chapterId]);

    // Save progress helper
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

    // Auto-mark section as in-progress when tab is selected
    useEffect(() => {
        const sectionKey = activeTab as keyof ChapterProgress;
        if (progress[sectionKey] === 'not-started') {
            updateSectionStatus(sectionKey, 'in-progress');
        }
    }, [activeTab, progress, updateSectionStatus]);

    const goToTopic = (id: number) => {
        if (id >= 1 && id <= 27) {
            router.push(`/student/batch1-1/ancient-history/${id}`);
        }
    };

    const completedCount = Object.values(progress).filter(s => s === 'completed').length;
    const progressPercent = Math.round((completedCount / 6) * 100);

    if (!topic || !part) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
                <Card className="bg-zinc-900 border-red-800/50 max-w-md">
                    <CardContent className="p-8 text-center space-y-4">
                        <h2 className="text-xl font-bold text-red-400">Chapter not found</h2>
                        <p className="text-zinc-400">This chapter ID does not exist in the RS Sharma index.</p>
                        <Button onClick={() => router.push('/student/batch1-1/ancient-history')} className="mt-4">
                            Back to Dashboard
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
                {/* Header / Nav */}
                <div className="flex items-center justify-between">
                    <Button
                        variant="ghost"
                        onClick={() => router.push('/student/batch1-1/ancient-history')}
                        className="text-zinc-400 hover:text-white hover:bg-zinc-800"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Dashboard
                    </Button>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => goToTopic(chapterId - 1)}
                            disabled={chapterId <= 1}
                            className="border-zinc-700 text-zinc-400 hover:text-white"
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Prev
                        </Button>
                        <span className="text-sm font-medium text-zinc-500 px-2">{chapterId} / 27</span>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => goToTopic(chapterId + 1)}
                            disabled={chapterId >= 27}
                            className="border-zinc-700 text-zinc-400 hover:text-white"
                        >
                            Next
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Banner Card */}
                <Card className={`bg-gradient-to-br ${colors.gradient} text-white border-0 shadow-2xl ${colors.glow} overflow-hidden relative`}>
                    <div className="absolute right-0 top-0 opacity-10 mix-blend-overlay w-64 h-64 pointer-events-none">
                        <Compass className="w-full h-full text-white" />
                    </div>

                    <CardContent className="p-8 relative z-10">
                        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                    <Badge variant="secondary" className="bg-white/20 text-white font-semibold border-0">
                                        Part {part.id}: {part.title}
                                    </Badge>
                                    <Badge variant="secondary" className="bg-white/90 text-stone-800 font-bold border-0">
                                        Chapter {chapterId}
                                    </Badge>
                                </div>
                                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                                    {topic.title}
                                </h1>
                                <p className="text-white/70 font-medium">
                                    RS Sharma — India&apos;s Ancient Past
                                </p>
                            </div>

                            {/* Mini Progress Ring */}
                            <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                                <div className="text-3xl font-black">{progressPercent}%</div>
                                <div className="text-xs text-white/70 font-medium">{completedCount}/6 Sections</div>
                                <div className="flex gap-1 mt-1">
                                    {TAB_META.map(tab => (
                                        <StatusDot key={tab.key} status={progress[tab.key]} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Study Section Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {TAB_META.map(tab => {
                        const status = progress[tab.key];
                        const sc = SECTION_STATUS_COLORS[status];
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`rounded-xl p-4 border transition-all duration-200 text-left ${sc.bg} ${sc.border} ${activeTab === tab.key
                                    ? 'ring-2 ring-offset-2 ring-offset-zinc-950 ring-amber-500 scale-[1.02]'
                                    : 'hover:scale-[1.01]'
                                    }`}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    {<Icon className={`h-4 w-4 ${sc.text}` as string} />}
                                    <StatusDot status={status} />
                                </div>
                                <div className={`text-sm font-bold ${sc.text}`}>{tab.label}</div>
                                <div className="text-[10px] text-zinc-500 mt-1 leading-tight">{tab.description}</div>
                            </button>
                        );
                    })}
                </div>

                {/* Active Section Content */}
                <Card className="bg-zinc-900/80 border-zinc-800 shadow-xl">
                    <CardContent className="p-6 md:p-8">
                        {activeTab === 'readSection' && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-amber-400" />
                                        Read & Retain — 3 Minute Revision
                                    </h2>
                                    {progress.readSection !== 'completed' && (
                                        <Button
                                            size="sm"
                                            onClick={() => updateSectionStatus('readSection', 'completed')}
                                            className="bg-emerald-600 hover:bg-emerald-700"
                                        >
                                            <CheckCircle2 className="h-4 w-4 mr-1" /> Mark Complete
                                        </Button>
                                    )}
                                </div>
                                <div className="text-center py-16 space-y-4">
                                    <div className="inline-flex items-center justify-center p-4 bg-amber-900/30 rounded-full mb-4">
                                        <FileText className="h-10 w-10 text-amber-400" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-zinc-200">Content Pipeline Active</h3>
                                    <p className="text-zinc-500 max-w-md mx-auto">
                                        The 3-minute rapid revision data for <strong className="text-zinc-300">{topic.title}</strong> is being compiled.
                                        Handwritten notes, visual timelines, and maps will appear here.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'flashcards' && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                                        <RotateCcw className="h-5 w-5 text-blue-400" />
                                        UPSC Flashcards
                                    </h2>
                                    {progress.flashcards !== 'completed' && (
                                        <Button
                                            size="sm"
                                            onClick={() => updateSectionStatus('flashcards', 'completed')}
                                            className="bg-emerald-600 hover:bg-emerald-700"
                                        >
                                            <CheckCircle2 className="h-4 w-4 mr-1" /> Mark Complete
                                        </Button>
                                    )}
                                </div>
                                <div className="text-center py-16 space-y-4">
                                    <div className="inline-flex items-center justify-center p-4 bg-blue-900/30 rounded-full mb-4">
                                        <Layers className="h-10 w-10 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-zinc-200">Flashcards Loading</h3>
                                    <p className="text-zinc-500 max-w-md mx-auto">
                                        Deep UPSC prelims-level flashcards for <strong className="text-zinc-300">{topic.title}</strong> are being generated.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'drill' && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                                        <Zap className="h-5 w-5 text-yellow-400" />
                                        60-Question Drill
                                    </h2>
                                    {progress.drill !== 'completed' && (
                                        <Button
                                            size="sm"
                                            onClick={() => updateSectionStatus('drill', 'completed')}
                                            className="bg-emerald-600 hover:bg-emerald-700"
                                        >
                                            <CheckCircle2 className="h-4 w-4 mr-1" /> Mark Complete
                                        </Button>
                                    )}
                                </div>
                                <div className="text-center py-16 space-y-4">
                                    <div className="inline-flex items-center justify-center p-4 bg-yellow-900/30 rounded-full mb-4">
                                        <Zap className="h-10 w-10 text-yellow-400" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-zinc-200">Drill Arena</h3>
                                    <p className="text-zinc-500 max-w-md mx-auto">
                                        60 MCQs (Easy + Moderate + Tough) for <strong className="text-zinc-300">{topic.title}</strong> are being compiled.
                                    </p>
                                </div>
                            </div>
                        )}

                        {(activeTab === 'l1' || activeTab === 'l2' || activeTab === 'l3') && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                                        <Target className={`h-5 w-5 ${activeTab === 'l1' ? 'text-green-400' :
                                            activeTab === 'l2' ? 'text-orange-400' :
                                                'text-red-400'
                                            }`} />
                                        {activeTab === 'l1' ? 'Level 1 — Foundation (Book Recall)' :
                                            activeTab === 'l2' ? 'Level 2 — UPSC Moderate' :
                                                'Level 3 — UPSC Tough + Current Affairs'}
                                    </h2>
                                    {progress[activeTab as keyof ChapterProgress] !== 'completed' && (
                                        <Button
                                            size="sm"
                                            onClick={() => updateSectionStatus(activeTab as keyof ChapterProgress, 'completed')}
                                            className="bg-emerald-600 hover:bg-emerald-700"
                                        >
                                            <CheckCircle2 className="h-4 w-4 mr-1" /> Mark Complete
                                        </Button>
                                    )}
                                </div>
                                <div className="text-center py-16 space-y-4">
                                    <div className={`inline-flex items-center justify-center p-4 rounded-full mb-4 ${activeTab === 'l1' ? 'bg-green-900/30' :
                                        activeTab === 'l2' ? 'bg-orange-900/30' :
                                            'bg-red-900/30'
                                        }`}>
                                        <Target className={`h-10 w-10 ${activeTab === 'l1' ? 'text-green-400' :
                                            activeTab === 'l2' ? 'text-orange-400' :
                                                'text-red-400'
                                            }`} />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-zinc-200">
                                        {activeTab === 'l1' ? 'Level 1 MCQs' :
                                            activeTab === 'l2' ? 'Level 2 MCQs' :
                                                'Level 3 MCQs + Current Affairs'}
                                    </h3>
                                    <p className="text-zinc-500 max-w-md mx-auto">
                                        {activeTab === 'l1'
                                            ? 'Strict RS Sharma book-based recall questions for this chapter.'
                                            : activeTab === 'l2'
                                                ? 'Statement-based UPSC moderate-level questions are being forged.'
                                                : 'Complex assertion-reasoning with injected current affairs.'}
                                    </p>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

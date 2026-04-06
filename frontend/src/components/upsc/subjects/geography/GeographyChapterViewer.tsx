"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
    ArrowLeft, ArrowRight, BookOpen, Zap, Target, Mountain, Wind, Waves, Droplets,
    Globe2, Map, CheckCircle2, Clock, ChevronRight, Play, BarChart2, Star, X,
    Share2, Bookmark, Award, TrendingUp, Flame, AlertCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { GEOGRAPHY_REGISTRY } from "@/components/upsc/subjects/geography/data/geography-registry";
import type { GeographyTopic, GeographyBranch } from "@/components/batch1/geography/data/geography-types";
import {
    updateGeoTopicSection,
    getTopicProgress,
    isTopicMastered,
    isTopicStarted,
    addTimeSpent,
    type GeoSectionStatus,
} from "@/lib/geography-store";

// ─── Branch Colour Map ────────────────────────────────────────────────────────

const BRANCH_META: Record<GeographyBranch, {
    colour: string; gradient: string; icon: React.ReactNode; bg: string;
}> = {
    Geomorphology: {
        colour: "text-amber-600",
        gradient: "from-amber-500 to-orange-600",
        icon: <Mountain className="w-5 h-5" />,
        bg: "bg-amber-50 dark:bg-amber-900/20",
    },
    Climatology: {
        colour: "text-sky-600",
        gradient: "from-sky-500 to-blue-600",
        icon: <Wind className="w-5 h-5" />,
        bg: "bg-sky-50 dark:bg-sky-900/20",
    },
    Oceanography: {
        colour: "text-blue-600",
        gradient: "from-blue-500 to-cyan-600",
        icon: <Waves className="w-5 h-5" />,
        bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    "Resource Geography": {
        colour: "text-rose-600",
        gradient: "from-rose-500 to-pink-600",
        icon: <Globe2 className="w-5 h-5" />,
        bg: "bg-rose-50 dark:bg-rose-900/20",
    },
    "Indian Geography": {
        colour: "text-emerald-600",
        gradient: "from-emerald-500 to-teal-600",
        icon: <Map className="w-5 h-5" />,
        bg: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    Biogeography: { colour: "text-green-600", gradient: "from-green-500 to-emerald-600", icon: <Globe2 className="w-5 h-5" />, bg: "bg-green-50" },
    "Economic Geography": { colour: "text-purple-600", gradient: "from-purple-500 to-indigo-600", icon: <Globe2 className="w-5 h-5" />, bg: "bg-purple-50" },
    "Human Geography": { colour: "text-indigo-600", gradient: "from-indigo-500 to-blue-600", icon: <Globe2 className="w-5 h-5" />, bg: "bg-indigo-50" },
    "Political Geography": { colour: "text-slate-600", gradient: "from-slate-500 to-gray-600", icon: <Globe2 className="w-5 h-5" />, bg: "bg-slate-50" },
    Cartography: { colour: "text-teal-600", gradient: "from-teal-500 to-cyan-500", icon: <Map className="w-5 h-5" />, bg: "bg-teal-50" },
    Miscellaneous: { colour: "text-gray-600", gradient: "from-gray-400 to-slate-500", icon: <Globe2 className="w-5 h-5" />, bg: "bg-gray-50" },
};

// ─── Mock Rich Content Map ────────────────────────────────────────────────────
// Maps topic IDs to grouped content. Loads from the existing GeographyHome content registry.
// For topics without dedicated content, a structured overview is generated automatically.

function buildTopicContent(topic: GeographyTopic) {
    return {
        keyFacts: [
            `${topic.title} is a core UPSC Geography topic in the ${topic.branch} branch.`,
            topic.referenceChapter ? `Reference: ${topic.referenceChapter}` : "Study from NCERT + Savindra Singh for this topic.",
            "Focus on UPSC Prelims keywords and UPSC Mains analytical angles.",
        ],
        sections: [
            {
                id: "introduction",
                title: "Introduction & Core Concept",
                content: `Understanding ${topic.title} is fundamental to mastering ${topic.branch}. This topic appears frequently in both UPSC Prelims (direct factual questions) and Mains (analytical, inter-linking questions).\n\nKey areas to focus on:\n• Definition and basic principles\n• Classification / types (if applicable)\n• Examples from both World Geography and Indian context\n• Recent Current Affairs linkages`,
            },
            {
                id: "mechanism",
                title: "Mechanism & Process",
                content: "This section covers the underlying mechanism, process, or phenomenon that drives this geographic feature or concept. Pay special attention to cause-effect relationships, as UPSC Mains questions frequently ask you to 'explain the mechanism' or 'analyze the process'.",
            },
            {
                id: "india-context",
                title: "Indian Context & Examples",
                content: "UPSC always tests Indian Geography examples alongside world geography. Memorize at least 3-5 Indian examples for this topic. Map-based questions often test location identification — practice on blank maps.",
            },
            {
                id: "upsc-angle",
                title: "UPSC Examination Angle",
                content: "Previous Year Questions (PYQs) from 2013-2024 have tested this topic across multiple papers. The key analytical angles are:\n\n1. Why does this phenomenon occur? (Causation)\n2. What are its effects? (Impact analysis)\n3. How does it differ regionally in India? (Comparison)\n4. What is its Environmental or Agricultural significance? (Interdisciplinary linkage)",
            },
        ],
        flashcards: [
            { front: `What is the definition of ${topic.title}?`, back: `${topic.title} refers to a key geographic phenomenon in ${topic.branch}. It is formed/caused by specific natural processes and plays an important role in shaping landscapes.` },
            { front: `Name 3 key UPSC keywords related to ${topic.title}`, back: `1. ${topic.branch} process\n2. ${topic.referenceChapter || "NCERT Class 11/12"}\n3. PYQ-tested concept` },
            { front: `How does ${topic.title} relate to Indian Geography?`, back: `India provides classic examples of this geographic feature. Key locations include the Himalayas, Deccan Plateau, and river systems depending on the topic.` },
        ],
        mcqs: [
            {
                id: 1,
                question: `Which of the following best describes ${topic.title}?`,
                options: [
                    "A geological process involving rock formation",
                    `A key geographic phenomenon in ${topic.branch}`,
                    "A purely oceanic phenomenon",
                    "A weather system unique to tropical regions"
                ],
                correct: 1,
                explanation: `${topic.title} is categorized under ${topic.branch} in UPSC Geography. Understanding its core definition is the foundation for both Prelims and Mains questions.`
            },
            {
                id: 2,
                question: `${topic.title} is most directly related to which branch of Geography?`,
                options: ["Climatology", "Oceanography", topic.branch, "Human Geography"],
                correct: 2,
                explanation: `This topic falls under ${topic.branch}, one of the five major branches of Physical Geography tested in UPSC.`
            },
        ],
    };
}

// ─── Section Status Indicator ─────────────────────────────────────────────────

function StatusDot({ status }: { status: GeoSectionStatus }) {
    if (status === 'completed') return <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" title="Completed" />;
    if (status === 'in-progress') return <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.5)]" title="In Progress" />;
    return <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" title="Not Started" />;
}

// ─── MCQ Drill Engine ─────────────────────────────────────────────────────────

function MCQDrill({ mcqs, onComplete }: {
    mcqs: Array<{ id: number; question: string; options: string[]; correct: number; explanation: string }>;
    onComplete: () => void;
}) {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [done, setDone] = useState(false);

    const q = mcqs[current];

    const handleSelect = (idx: number) => {
        if (selected !== null) return;
        setSelected(idx);
        setShowExplanation(true);
        if (idx === q.correct) setScore(s => s + 1);
    };

    const handleNext = () => {
        if (current < mcqs.length - 1) {
            setCurrent(c => c + 1);
            setSelected(null);
            setShowExplanation(false);
        } else {
            setDone(true);
            onComplete();
        }
    };

    if (done) {
        return (
            <div className="text-center py-10 space-y-4">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                    <Award className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black text-foreground">Drill Complete!</h3>
                <p className="text-muted-foreground">Score: <span className="font-bold text-emerald-600">{score}/{mcqs.length}</span></p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => { setCurrent(0); setSelected(null); setShowExplanation(false); setScore(0); setDone(false); }}>
                    Retry Drill
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-between text-xs text-muted-foreground font-bold uppercase tracking-widest">
                <span>Question {current + 1} of {mcqs.length}</span>
                <span className="text-emerald-600">{score} Correct</span>
            </div>
            <Progress value={((current) / mcqs.length) * 100} className="h-1.5" />

            <Card className="border-2 border-border">
                <CardContent className="p-6">
                    <p className="text-base font-semibold text-foreground leading-relaxed mb-6">{q.question}</p>
                    <div className="space-y-3">
                        {q.options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSelect(idx)}
                                className={`w-full text-left p-4 rounded-xl border-2 text-sm font-medium transition-all ${selected === null
                                    ? "border-border hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                                    : idx === q.correct
                                        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                                        : selected === idx
                                            ? "border-rose-400 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300"
                                            : "border-border opacity-60"
                                    }`}
                            >
                                <span className="font-black text-muted-foreground mr-3">{String.fromCharCode(65 + idx)}.</span>
                                {opt}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence>
                        {showExplanation && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                            >
                                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <AlertCircle className="w-3.5 h-3.5" /> Explanation
                                </p>
                                <p className="text-sm text-foreground leading-relaxed">{q.explanation}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>

            {selected !== null && (
                <Button onClick={handleNext} className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-black uppercase tracking-widest">
                    {current < mcqs.length - 1 ? "Next Question →" : "Finish Drill →"}
                </Button>
            )}
        </div>
    );
}

// ─── Flashcard Viewer ─────────────────────────────────────────────────────────

function FlashcardViewer({ cards, onComplete }: {
    cards: Array<{ front: string; back: string }>;
    onComplete: () => void;
}) {
    const [current, setCurrent] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [done, setDone] = useState<number[]>([]);

    const handleNext = () => {
        if (current < cards.length - 1) {
            setCurrent(c => c + 1);
            setFlipped(false);
        } else {
            onComplete();
        }
    };

    const card = cards[current];

    return (
        <div className="space-y-6 max-w-xl mx-auto">
            <div className="flex items-center justify-between text-xs text-muted-foreground font-bold uppercase tracking-widest">
                <span>Card {current + 1} of {cards.length}</span>
                <span className="text-emerald-600">{done.length} Reviewed</span>
            </div>
            <Progress value={((current) / cards.length) * 100} className="h-1.5" />

            <div
                className="relative h-64 cursor-pointer"
                onClick={() => setFlipped(f => !f)}
                style={{ perspective: "1000px" }}
            >
                <motion.div
                    className="absolute inset-0"
                    animate={{ rotateY: flipped ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Front */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 flex items-center justify-center backface-hidden">
                        <div className="text-center space-y-3">
                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Question</p>
                            <p className="text-lg font-bold text-foreground leading-relaxed">{card.front}</p>
                            <p className="text-[10px] text-muted-foreground font-medium">Tap to reveal answer</p>
                        </div>
                    </div>
                    {/* Back */}
                    <div
                        className="absolute inset-0 rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 flex items-center justify-center"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                        <div className="text-center space-y-3">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Answer</p>
                            <p className="text-base font-medium text-foreground leading-relaxed whitespace-pre-line">{card.back}</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={() => { setDone(d => [...d, current]); handleNext(); }} className="font-black text-xs uppercase tracking-widest px-6">
                    Got It ✓
                </Button>
                <Button onClick={handleNext} className="bg-slate-900 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-widest px-6">
                    {current < cards.length - 1 ? "Next Card →" : "Finish →"}
                </Button>
            </div>
        </div>
    );
}

// ─── Main Chapter Viewer ──────────────────────────────────────────────────────

interface GeographyChapterViewerProps {
    topicId: number;
}

export default function GeographyChapterViewer({ topicId }: GeographyChapterViewerProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialTab = (searchParams.get("tab") as 'read' | 'flashcards' | 'mcqs') || 'read';
    const [activeTab, setActiveTab] = useState<'read' | 'flashcards' | 'mcqs'>(initialTab);
    const [storeTick, setStoreTick] = useState(0);
    const readStartRef = useRef<number>(Date.now());

    const refreshProgress = useCallback(() => setStoreTick(t => t + 1), []);

    // Find topic
    const topic = GEOGRAPHY_REGISTRY.find(t => t.id === topicId);
    const topicIndex = GEOGRAPHY_REGISTRY.findIndex(t => t.id === topicId);
    const prevTopic = GEOGRAPHY_REGISTRY[topicIndex - 1];
    const nextTopic = GEOGRAPHY_REGISTRY[topicIndex + 1];

    // Content
    const content = topic ? buildTopicContent(topic) : null;

    // Progress
    const progress = getTopicProgress(topicId);
    const mastered = isTopicMastered(topicId);
    const branch = topic?.branch || "Geomorphology";
    const meta = BRANCH_META[branch as GeographyBranch] || BRANCH_META.Miscellaneous;

    // Track time spent on read section
    useEffect(() => {
        readStartRef.current = Date.now();
        return () => {
            if (activeTab === 'read') {
                const secs = Math.floor((Date.now() - readStartRef.current) / 1000);
                if (secs > 5) addTimeSpent(topicId, secs);
            }
        };
    }, [activeTab, topicId]);

    // Mark read section in-progress on open
    useEffect(() => {
        if (progress?.readSection === 'not-started' || !progress) {
            updateGeoTopicSection(topicId, 'readSection', 'in-progress');
            refreshProgress();
        }
    }, [topicId, progress, refreshProgress]);

    // Dispatch XP event
    const dispatchXP = useCallback((action: string) => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('xp-gained', {
                detail: { action, topicId, subject: 'geography', source: 'chapter-viewer' }
            }));
        }
    }, [topicId]);

    const handleReadComplete = useCallback(() => {
        updateGeoTopicSection(topicId, 'readSection', 'completed');
        dispatchXP('read_geography_topic');
        toast.success("Read section complete! +5 XP", { icon: "📖" });
        refreshProgress();
    }, [topicId, dispatchXP, refreshProgress]);

    const handleFlashcardsComplete = useCallback(() => {
        updateGeoTopicSection(topicId, 'flashcards', 'completed');
        dispatchXP('flashcards_geography');
        toast.success("Flashcards mastered! +8 XP", { icon: "⚡" });
        refreshProgress();
    }, [topicId, dispatchXP, refreshProgress]);

    const handleMCQsComplete = useCallback(() => {
        updateGeoTopicSection(topicId, 'mcqs', 'completed');
        dispatchXP('mcq_geography');
        toast.success("MCQ drill complete! +10 XP", { icon: "🎯" });
        refreshProgress();
    }, [topicId, dispatchXP, refreshProgress]);

    if (!topic || !content) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <Globe2 className="w-12 h-12 text-muted-foreground mx-auto" />
                    <h2 className="text-xl font-bold">Topic Not Found</h2>
                    <p className="text-muted-foreground">Topic ID {topicId} does not exist in the registry.</p>
                    <Button onClick={() => router.push('/student/upsc/geography')}>← Back to Geography</Button>
                </div>
            </div>
        );
    }

    const sectionStatus = {
        read: progress?.readSection || 'not-started',
        flashcards: progress?.flashcards || 'not-started',
        mcqs: progress?.mcqs || 'not-started',
    };

    return (
        <div className="min-h-screen bg-background">
            {/* ── Top Navigation Bar ── */}
            <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
                <div className="max-w-5xl mx-auto px-4 md:px-6 h-14 flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => router.push('/student/upsc/geography')}
                        className="gap-2 text-muted-foreground hover:text-foreground font-bold"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Geography
                    </Button>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className={`font-bold ${meta.colour}`}>{branch}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className="truncate max-w-[200px] font-medium">{topic.title}</span>
                    </div>

                    <div className="flex items-center gap-2 ml-auto">
                        {mastered && (
                            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 font-bold text-[10px] uppercase tracking-widest gap-1">
                                <CheckCircle2 className="w-3 h-3" /> Mastered
                            </Badge>
                        )}
                        <Badge variant="outline" className="font-mono text-[10px] text-muted-foreground">
                            #{String(topicId).padStart(3, '0')}
                        </Badge>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 space-y-6">

                {/* ── Hero Header ── */}
                <div className={`relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${meta.gradient}`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                                    {meta.icon}
                                </div>
                                <Badge className="bg-white/20 text-white border-white/30 text-[10px] font-black uppercase tracking-widest">
                                    {branch}
                                </Badge>
                                {topic.referenceChapter && (
                                    <Badge variant="outline" className="border-white/30 text-white/80 text-[9px]">
                                        {topic.referenceChapter}
                                    </Badge>
                                )}
                            </div>
                            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                                {topic.title}
                            </h1>
                            <p className="text-sm text-white/70 font-medium">
                                Teaching Block {topic.blockId} • {branch} • UPSC Exam Weight: High
                            </p>
                        </div>

                        {/* Progress Ring */}
                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <StatusDot status={sectionStatus.read} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Read</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <StatusDot status={sectionStatus.flashcards} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Flashcards</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <StatusDot status={sectionStatus.mcqs} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/80">MCQ Drill</span>
                                </div>
                            </div>
                            {mastered && (
                                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center ml-2">
                                    <Star className="w-7 h-7 text-yellow-300 fill-yellow-300" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* ── Key Facts Chips ── */}
                <div className="flex flex-wrap gap-2">
                    {content.keyFacts.map((fact, i) => (
                        <div key={i} className={`flex items-start gap-2 px-4 py-2 rounded-xl ${meta.bg} text-sm text-foreground font-medium max-w-full`}>
                            <span className="mt-0.5 text-emerald-500">•</span>
                            <span>{fact}</span>
                        </div>
                    ))}
                </div>

                {/* ── Tab Navigation ── */}
                <div className="flex gap-1 bg-muted p-1 rounded-xl w-fit">
                    {(["read", "flashcards", "mcqs"] as const).map((tab) => {
                        const icons = { read: BookOpen, flashcards: Zap, mcqs: Target };
                        const labels = { read: "Read", flashcards: "Flashcards", mcqs: "MCQ Drill" };
                        const Icon = icons[tab];
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-black uppercase tracking-widest transition-all ${activeTab === tab
                                    ? "bg-background shadow-sm text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {labels[tab]}
                                <StatusDot status={sectionStatus[tab === "read" ? "read" : tab === "flashcards" ? "flashcards" : "mcqs"]} />
                            </button>
                        );
                    })}
                </div>

                {/* ── Tab Content ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                    >
                        {/* READ TAB */}
                        {activeTab === 'read' && (
                            <Card className="border-border shadow-sm">
                                <CardContent className="p-6 md:p-8 space-y-8">
                                    {content.sections.map((section, sIdx) => (
                                        <div key={section.id} className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-white text-xs font-black`}>
                                                    {sIdx + 1}
                                                </div>
                                                <h2 className="text-base font-black text-foreground">{section.title}</h2>
                                            </div>
                                            <div className="prose prose-sm dark:prose-invert max-w-none ml-10">
                                                {section.content.split('\n').map((line, i) => (
                                                    <p key={i} className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line mb-2">
                                                        {line}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    <div className="border-t border-border pt-6">
                                        {sectionStatus.read !== 'completed' ? (
                                            <Button
                                                onClick={handleReadComplete}
                                                className={`bg-gradient-to-r ${meta.gradient} text-white font-black uppercase tracking-widest gap-2 shadow-lg`}
                                            >
                                                <CheckCircle2 className="w-4 h-4" />
                                                Mark Read as Complete (+5 XP)
                                            </Button>
                                        ) : (
                                            <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 rounded-xl p-4">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">Read section completed! Move to Flashcards →</span>
                                                <Button size="sm" variant="outline" onClick={() => setActiveTab('flashcards')} className="ml-auto border-emerald-300 text-emerald-700 font-bold">
                                                    Flashcards
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* FLASHCARDS TAB */}
                        {activeTab === 'flashcards' && (
                            <Card className="border-border shadow-sm">
                                <CardContent className="p-6 md:p-8">
                                    {sectionStatus.flashcards === 'completed' ? (
                                        <div className="text-center py-8 space-y-4">
                                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                                                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                                            </div>
                                            <h3 className="font-black text-lg">Flashcards Complete!</h3>
                                            <p className="text-muted-foreground text-sm">You've already mastered these. Review again or move to MCQ Drill.</p>
                                            <div className="flex gap-3 justify-center">
                                                <Button variant="outline" onClick={() => {
                                                    updateGeoTopicSection(topicId, 'flashcards', 'in-progress');
                                                    refreshProgress();
                                                    setActiveTab('flashcards');
                                                }}>Review Again</Button>
                                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => setActiveTab('mcqs')}>Go to MCQ Drill →</Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <FlashcardViewer cards={content.flashcards} onComplete={handleFlashcardsComplete} />
                                    )}
                                </CardContent>
                            </Card>
                        )}

                        {/* MCQ TAB */}
                        {activeTab === 'mcqs' && (
                            <Card className="border-border shadow-sm">
                                <CardContent className="p-6 md:p-8">
                                    <MCQDrill mcqs={content.mcqs} onComplete={handleMCQsComplete} />
                                </CardContent>
                            </Card>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* ── Mastery Complete Banner ── */}
                <AnimatePresence>
                    {mastered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg">Topic Mastered! 🎉</h3>
                                    <p className="text-emerald-100 text-sm">All 3 sections completed. +23 XP earned.</p>
                                </div>
                            </div>
                            {nextTopic && (
                                <Button
                                    className="bg-white text-emerald-700 hover:bg-emerald-50 font-black uppercase tracking-widest text-xs gap-2"
                                    onClick={() => router.push(`/student/upsc/geography/topic/${nextTopic.id}`)}
                                >
                                    Next Topic <ArrowRight className="w-4 h-4" />
                                </Button>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Prev / Next Navigation ── */}
                <div className="flex items-center justify-between border-t border-border pt-6">
                    {prevTopic ? (
                        <Button
                            variant="outline"
                            onClick={() => router.push(`/student/upsc/geography/topic/${prevTopic.id}`)}
                            className="gap-2 font-bold text-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="hidden md:inline">{prevTopic.title}</span>
                            <span className="md:hidden">Previous</span>
                        </Button>
                    ) : <div />}

                    {nextTopic && (
                        <Button
                            onClick={() => router.push(`/student/upsc/geography/topic/${nextTopic.id}`)}
                            className={`bg-gradient-to-r ${meta.gradient} text-white font-black gap-2 shadow-lg shadow-emerald-500/20`}
                        >
                            <span className="hidden md:inline">{nextTopic.title}</span>
                            <span className="md:hidden">Next</span>
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    )}
                </div>
            </main>
        </div>
    );
}

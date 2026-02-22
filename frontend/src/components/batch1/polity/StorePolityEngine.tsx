"use client";

import React, { useState } from 'react';
import { Book, ChevronRight, Clock, Sparkles, Target, TrendingUp, PenTool, BookOpen, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import { POLITY_MODULES, POLITY_TOPICS, getModuleColors, getTopicsByModule } from './data/polity-registry';
// import PolityScheduleView from './PolityScheduleView'; // Removed missing dependency
import { LAXMIKANTH_CHAPTERS, generateWeeklySchedule } from './data/polity-schedule-data';
import { useMemo } from 'react';

// Stub for missing Schedule View
const PolityScheduleView = ({ isAdmin }: { isAdmin: boolean }) => (
    <div className="p-8 text-center border-2 border-dashed border-border rounded-xl">
        <h3 className="text-xl font-bold text-muted-foreground">Schedule View Updating...</h3>
        <p className="text-muted-foreground">Please check the Main Dashboard for the latest schedule.</p>
    </div>
);

import { useEffect } from 'react';

import Batch1ContentMap from './Batch1ContentMap';
import MainsPractice from '../history/HistoryMainsPractice';
import PolityVisuals from './PolityVisuals';
import { createPolitySubjectConfig } from './data/polity-mains-adapter';
import GapAnalysisReport from './analytics/GapAnalysisReport';
import PolityLogicModules from './PolityLogicModules';
import PolityExamSimulator from './PolityExamSimulator';

import PolityResultDashboard from './PolityResultDashboard';
import UnlockModal from './modals/UnlockModal';
import { upscSynapseService, CognitiveProfile, GapAnalysisEntry } from '@/lib/upsc-synapse-service';

export default function StorePolityEngine({ embedded = false }: { embedded?: boolean }) {
    const [selectedModule, setSelectedModule] = useState<string | null>(null);
    const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    const initialView = searchParams?.get('view') as 'topics' | 'schedule' | 'map' | 'mains' | 'visuals' | null;

    const [view, setView] = useState<'topics' | 'schedule' | 'map' | 'mains' | 'visuals'>(initialView || 'map');

    // Adaptive Learning Levels State
    const [adaptiveLevel, setAdaptiveLevel] = useState<'level1' | 'level2' | 'level3'>('level1');
    const [isLevel2Unlocked, setIsLevel2Unlocked] = useState(false); // Default Locked
    const [isLevel3Unlocked, setIsLevel3Unlocked] = useState(false); // Default Locked
    const [showDiagnostic, setShowDiagnostic] = useState(false); // Diagnostic State

    // Backend Data State
    const [cognitiveProfile, setCognitiveProfile] = useState<CognitiveProfile | null>(null);
    const [heatmapData, setHeatmapData] = useState<GapAnalysisEntry[]>([]);

    // Modal State
    const [unlockModal, setUnlockModal] = useState<{ isOpen: boolean; level: 'level2' | 'level3' }>({
        isOpen: false,
        level: 'level2'
    });
    const [activeAuditChapter, setActiveAuditChapter] = useState<number | null>(null);

    const scheduleRef = React.useRef<HTMLDivElement>(null);

    // Create adapted config for Mains Practice
    const polityConfig = useMemo(() => createPolitySubjectConfig(POLITY_TOPICS), []); // ... existing code ...

    // CALLBACKS
    const handleStartAudit = (chapterId: number) => {
        setActiveAuditChapter(chapterId);
    };

    const handleAuditComplete = async (score: number, metrics: any) => {
        if (!activeAuditChapter || !cognitiveProfile) return;

        // Calculate pass/fail (simple logic for now)
        // Audit is passed if score > 70% (e.g., 7/10)
        // In our sim, max score is 10 (5 Qs * 2).
        const percentage = (score / 10) * 100;
        const status = percentage >= 70 ? 'mastered' : 'knowledge_gap';

        try {
            await upscSynapseService.logGapAnalysis({
                chapter_id: activeAuditChapter,
                status: status,
                recall_accuracy: percentage,
                profile_id: cognitiveProfile.id,
                subject: "Polity",
                gap_details: status === 'knowledge_gap' ? { missingConcept: "General Precision" } : undefined
            });

            // Refresh Data
            const heatmap = await upscSynapseService.getHeatmap();
            setHeatmapData(heatmap);

            alert(`Audit Complete! You scored ${percentage}%. Status updated.`);
        } catch (e) {
            console.error("Failed to save audit", e);
            alert("Failed to save results. Please try again.");
        }
        setActiveAuditChapter(null);
    };

    // FETCH BACKEND DATA
    useEffect(() => {
        const fetchData = async () => {
            try {
                const profile = await upscSynapseService.getProfile();
                setCognitiveProfile(profile);
                setAdaptiveLevel(profile.current_level);
                setIsLevel2Unlocked(profile.is_level2_unlocked);
                setIsLevel3Unlocked(profile.is_level3_unlocked);

                const heatmap = await upscSynapseService.getHeatmap();
                setHeatmapData(heatmap);
            } catch (err) {
                console.error("Failed to load Synapse Profile:", err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (view === 'schedule' && scheduleRef.current) {
            setTimeout(() => {
                scheduleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [view]);

    useEffect(() => {
        if (typeof window !== 'undefined' && !localStorage.getItem('polity_start_calendar_date')) {
            localStorage.setItem('polity_start_calendar_date', new Date().toISOString());
        }
    }, []);

    // Check for "Master ID" (simulated)
    const isAdmin = typeof window !== 'undefined' && localStorage.getItem('user_role') === 'admin';

    const handleUnlockRequest = (level: 'level2' | 'level3') => {
        setUnlockModal({ isOpen: true, level });
    };

    // Calculate aggregate accuracy from heatmap
    const aggregateAccuracy = useMemo(() => {
        const attempted = heatmapData.filter(d => d.status !== 'unattempted');
        if (attempted.length === 0) return 0;
        const totalAccuracy = attempted.reduce((sum, entry) => sum + entry.recall_accuracy, 0);
        return Math.round(totalAccuracy / attempted.length);
    }, [heatmapData]);

    const handleUnlockConfirm = async () => {
        try {
            await upscSynapseService.unlockLevel(
                cognitiveProfile?.id || '',
                unlockModal.level,
                499
            );

            // Optimistic UI Update
            if (unlockModal.level === 'level2') {
                setIsLevel2Unlocked(true);
                setAdaptiveLevel('level2');
            } else {
                setIsLevel3Unlocked(true);
                setAdaptiveLevel('level3');
            }
        } catch (error) {
            console.error("Unlock failed:", error);
            alert("Payment failed. Please try again.");
        }
        setUnlockModal({ ...unlockModal, isOpen: false });
    };

    // Calculate overall stats
    const totalChapters = LAXMIKANTH_CHAPTERS.length;
    const totalTopicsImplemented = POLITY_TOPICS.length;
    const totalCA = POLITY_TOPICS.reduce((sum, t) => sum + t.currentAffairs.length, 0);
    const highPriorityTopics = POLITY_TOPICS.filter(t => t.priority === 'High').length;

    // TODAY'S TARGET LOGIC
    const todayTarget = useMemo(() => {
        if (typeof window === 'undefined') return null;
        const weeklyData = generateWeeklySchedule();
        const startDateStr = localStorage.getItem('polity_start_calendar_date');

        // Use Jan 1, 2026 as the base to match Scheduler
        const baseDate = new Date('2026-01-01T00:00:00');

        const now = new Date();
        const diffTime = (now.getTime() - baseDate.getTime());
        const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
        const weekIndex = Math.floor(diffDays / 7);
        const dayOfWeek = now.getDay(); // 0-6 (Sun-Sat)

        const dayMap: Record<number, string> = {
            0: 'sunday', 1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday'
        };

        const dayKey = dayMap[dayOfWeek];
        if (!dayKey || !weeklyData[weekIndex]) return null;

        const contents = weeklyData[weekIndex].days[dayKey as keyof typeof weeklyData[0]['days']];
        const isSaturday = dayKey === 'saturday';
        const isSunday = dayKey === 'sunday';

        return {
            week: weekIndex + 1,
            day: dayKey.charAt(0).toUpperCase() + dayKey.slice(1),
            type: isSaturday ? 'MCQ' : isSunday ? 'Revision' : 'Study',
            data: contents,
            slots: Array.isArray(contents) && !isSaturday ? (contents as any[]).reduce((s, c) => s + (c.slots || 0), 0) : (isSaturday ? 4 : 6)
        };
    }, []);

    // Mock Unlock Function (Simulates Purchase)
    const handleUnlockLevel2 = () => {
        const confirm = window.confirm("Mock Payment: Pay ₹499 to unlock Level 2?");
        if (confirm) setIsLevel2Unlocked(true);
    };

    // MOCK DATA FOR GAP ANALYSIS
    const mockErrors = [
        {
            questionId: 1,
            isKnowledgeGap: true,
            mcq: {
                id: 1,
                question: "Mock Q1",
                options: [],
                source_mapping: { book: "M. Laxmikanth", chapter: "Historical Background", page_ref: 4 },
                cognitive_tag: "Knowledge"
            }
        },
        {
            questionId: 2,
            isUnderstandingGap: true,
            mcq: {
                id: 2,
                question: "Mock Q2",
                options: [],
                source_mapping: { book: "M. Laxmikanth", chapter: "Preamble", page_ref: 45 },
                cognitive_tag: "Understanding"
            }
        },
        {
            questionId: 3,
            isAccuracyGap: true,
            mcq: {
                id: 3,
                question: "Mock Q3",
                options: [],
                source_mapping: { book: "M. Laxmikanth", chapter: "FR", page_ref: 80 },
                cognitive_tag: "Accuracy"
            }
        }
    ];

    return (
        <div className={`min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a] ${embedded ? 'min-h-0 bg-transparent' : ''}`}>
            {/* Hero Section - Hidden in embedded mode */}
            {!embedded && (
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
                    <div className="max-w-6xl mx-auto px-6 py-12">
                        <Link href="/student/upsc-store" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 text-sm font-medium">
                            <ChevronRight className="w-4 h-4 rotate-180" />
                            Back to Store
                        </Link>

                        <div className="flex items-center gap-2 text-blue-200 text-sm mb-2">
                            <BrainCircuit className="w-4 h-4" />
                            <span>UPSC Store • Cognitive Engine</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">
                            Polity Synapse Engine
                        </h1>
                        <p className="text-xl text-blue-100 mb-6">
                            Master Polity with Adaptive Learning, Gap Analysis, and Logic Modules.
                        </p>

                        {/* ADAPTIVE LEVEL TABS */}
                        <div className="flex flex-wrap gap-2 mt-8 bg-card/10 backdrop-blur p-1.5 rounded-xl border border-white/10 w-fit">
                            <button
                                onClick={() => setAdaptiveLevel('level1')}
                                className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${adaptiveLevel === 'level1'
                                    ? 'bg-blue-500 text-white shadow-lg'
                                    : 'text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-card/5'
                                    }`}
                            >
                                <BookOpen className="w-4 h-4" />
                                Level 1: The Book
                            </button>
                            <button
                                onClick={() => isLevel2Unlocked ? setAdaptiveLevel('level2') : handleUnlockRequest('level2')}
                                className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${adaptiveLevel === 'level2'
                                    ? 'bg-amber-500 text-white shadow-lg'
                                    : 'text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-card/5'
                                    } ${!isLevel2Unlocked && 'opacity-70'}`}
                            >
                                <BrainCircuit className="w-4 h-4" />
                                {isLevel2Unlocked ? 'Level 2: The Logic' : 'Level 2: Locked 🔒'}
                            </button>
                            <button
                                onClick={() => isLevel3Unlocked ? setAdaptiveLevel('level3') : handleUnlockRequest('level3')}
                                className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${adaptiveLevel === 'level3'
                                    ? 'bg-red-600 text-white shadow-lg'
                                    : 'text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-card/5'
                                    } ${!isLevel3Unlocked && 'opacity-70'}`}
                            >
                                <Target className="w-4 h-4" />
                                {isLevel3Unlocked ? 'Level 3: Exam Mode' : 'Level 3: Locked 🔒'}
                            </button>
                        </div>


                        {/* Stats Card */}
                        <div className="bg-card dark:bg-[#111] p-6 rounded-2xl border border-border shadow-xl min-w-[280px] mt-8 hidden md:block absolute top-12 right-6 w-72">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-muted-foreground dark:text-muted-foreground text-xs uppercase tracking-wider">Overall Progress</h3>
                                <TrendingUp className="w-4 h-4 text-green-500" />
                            </div>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-4xl font-black text-[#1F2937]">12%</span>
                                <span className="text-sm text-green-500 font-bold mb-1.5">+2.4%</span>
                            </div>
                            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-full rounded-full" style={{ width: '12%' }}></div>
                            </div>
                            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                                <span>32/280 Topics</span>
                                <span>45h 20m spent</span>
                            </div>
                        </div>

                        <UnlockModal
                            isOpen={unlockModal.isOpen}
                            onClose={() => setUnlockModal({ ...unlockModal, isOpen: false })}
                            onUnlock={handleUnlockConfirm}
                            level={unlockModal.level}
                        />

                        {/* Navigation Tabs */}
                        {!selectedModule && (
                            <div className="flex items-center gap-1 mt-12 border-b border-border">
                                {[
                                    { id: 'map', label: 'Content Map', icon: PenTool },
                                    { id: 'topics', label: 'Adaptive Modules', icon: Book },
                                    { id: 'schedule', label: 'Your Schedule', icon: Clock },
                                    { id: 'mains', label: 'Mains Practice', icon: PenTool },
                                    { id: 'visuals', label: 'Visual Library', icon: Sparkles },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setView(tab.id as any)}
                                        className={`px-6 py-4 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${view === tab.id
                                            ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
                                            : 'border-transparent text-muted-foreground hover:text-muted-foreground dark:text-muted-foreground hover:dark:text-gray-200'
                                            }`}
                                    >
                                        <tab.icon className="w-4 h-4" />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Content Area */}
            <div className="min-h-screen">
                {view === 'map' ? (
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <Batch1ContentMap onBack={() => setView('topics')} />
                    </div>
                ) : view === 'topics' ? (
                    <>
                        {adaptiveLevel === 'level1' && (
                            <>
                                {/* NEW: RESULT DASHBOARD (Replaces Revision Grid & Diagnostic Report) */}
                                <PolityResultDashboard
                                    score={cognitiveProfile?.wps_score ?? 72}
                                    stressIndex={cognitiveProfile?.stress_index ?? 6.5}
                                    accuracy={aggregateAccuracy}
                                    gapData={heatmapData}
                                    onUnlockLevel2={handleUnlockConfirm} // Use standard unlock for flow
                                    onRetakeAudit={() => window.location.reload()}
                                    onStartAudit={handleStartAudit}
                                />

                                {/* AUDIT SIMULATOR OVERLAY */}
                                {activeAuditChapter && (
                                    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                                        <div className="bg-card dark:bg-[#0a0a0a] w-full max-w-4xl rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
                                            <PolityExamSimulator
                                                title={`Chapter ${activeAuditChapter} Audit`}
                                                description="Rapid Fire Audit. 5 Questions. Prove you read the book."
                                                mode="audit"
                                                onComplete={handleAuditComplete}
                                                onClose={() => setActiveAuditChapter(null)}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Today's Target Widget - NEW */}
                                {!embedded && todayTarget && (
                                    <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
                                        <div className="bg-card dark:bg-[#111] rounded-3xl border border-blue-200 dark:border-blue-900 shadow-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                                            <div className="flex-shrink-0 w-20 h-20 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex flex-col items-center justify-center text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                                                <span className="text-[10px] uppercase font-black opacity-60">Day</span>
                                                <span className="text-3xl font-black">{todayTarget.day.substring(0, 3)}</span>
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className={`text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${todayTarget.type === 'MCQ' ? 'bg-amber-600' :
                                                        todayTarget.type === 'Revision' ? 'bg-indigo-600' :
                                                            'bg-blue-600'
                                                        }`}>
                                                        Today's {todayTarget.type}
                                                    </span>
                                                    <span className="text-sm text-muted-foreground font-medium">Week {todayTarget.week} Schedule</span>
                                                </div>
                                                <h3 className="text-xl font-black text-foreground">
                                                    {todayTarget.type === 'MCQ'
                                                        ? (todayTarget.data as string[]).join(' • ')
                                                        : (todayTarget.data as any[]).length > 0
                                                            ? (todayTarget.data as any[]).map(c => `CH ${c.chapter}: ${c.topic}`).join(' • ')
                                                            : "Revision / Buffer Day"
                                                    }
                                                </h3>
                                                <div className="flex items-center gap-4 mt-2">
                                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                        <Clock className="w-3.5 h-3.5" /> {todayTarget.slots} Pomodoros
                                                    </div>
                                                    {todayTarget.type === 'Study' && (
                                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                            <Book className="w-3.5 h-3.5" /> {(todayTarget.data as any[]).reduce((s, c) => s + (c.pages || 0), 0)} pages
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => setView('schedule')}
                                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
                                            >
                                                Open Planner <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* One-Stop Revision Grid */}
                                {/* Tab Navigation for Syllabus List */}

                                {/* Tab Navigation for Syllabus List */}
                                <div className="max-w-6xl mx-auto px-6 mt-12">
                                    <div className="flex border-b border-border">
                                        <button
                                            onClick={() => setView('topics')}
                                            className={`px-8 py-4 text-sm font-bold transition-all border-b-2 ${view === 'topics'
                                                ? 'text-blue-600 border-blue-600'
                                                : 'text-muted-foreground border-transparent hover:text-muted-foreground'
                                                }`}
                                        >
                                            Detailed Syllabus (95 Topics)
                                        </button>
                                        <button
                                            onClick={() => setView('schedule')}
                                            className={`px-8 py-4 text-sm font-bold transition-all border-b-2 flex items-center gap-2 text-muted-foreground border-transparent hover:text-muted-foreground`}
                                        >
                                            <Clock className="w-4 h-4" />
                                            Full Schedule
                                        </button>
                                    </div>

                                    {/* Detailed Syllabus List */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pb-12">
                                        {POLITY_TOPICS.map((topic) => (
                                            <Link
                                                key={topic.id}
                                                href={`/student/batch1/polity/topic/${topic.id}`}
                                                className="flex items-center gap-4 bg-card dark:bg-[#111] rounded-xl border border-border p-4 hover:shadow-lg hover:border-blue-500 transition-all"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold">
                                                    {topic.id}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-semibold text-[#1F2937]">{topic.title}</div>
                                                    <div className="text-sm text-muted-foreground dark:text-muted-foreground">
                                                        {topic.keyConcepts.length} concepts • {topic.currentAffairs.length} CA updates
                                                    </div>
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {adaptiveLevel === 'level2' && (
                            <PolityLogicModules />
                        )}

                        {adaptiveLevel === 'level3' && (
                            <PolityExamSimulator />
                        )}
                    </>
                ) : view === 'schedule' ? (
                    <div ref={scheduleRef} className="max-w-6xl mx-auto px-6 py-12">
                        <PolityScheduleView isAdmin={isAdmin} />
                    </div>
                ) : view === 'mains' ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <MainsPractice config={polityConfig} />
                    </div>
                ) : view === 'visuals' ? (
                    <PolityVisuals />
                ) : (
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <Batch1ContentMap onBack={() => setView('topics')} />
                    </div>
                )}
            </div>
        </div>
    );
}

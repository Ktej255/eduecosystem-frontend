import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Book, ChevronRight, Clock, Sparkles, Target, TrendingUp, Calendar, Layout, User, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---

export interface SubjectModule {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string; // Tailwind color name like 'blue', 'red'
    topicRange: [number, number];
}

export interface SubjectTopic {
    id: number | string;
    title: string;
    moduleId: string;
    priority: 'High' | 'Medium' | 'Low';
    staticFocus: string;
    keyConcepts: string[];
    currentAffairsCount: number;
    mainsQuestions?: {
        id: string;
        question: string;
        marks: number;
        modelAnswer?: string;
    }[];
}

export interface WeeklyScheduleData {
    week: number;
    totalSlots: number;
    totalPages: number;
    days: {
        monday: number[]; // Chapter IDs
        tuesday: number[];
        wednesday: number[];
        thursday: number[];
        friday: number[];
        saturday: string[]; // Paper names
        sunday: number[]; // Revision Chapter IDs
    };
}

export interface SubjectChapter {
    chapter: number;
    topic: string;
    part: string; // Module ID
    pages: number;
    slots: number;
}

export interface SubjectConfig {
    id: string; // 'history', 'geography'
    title: string;
    subtitle: string;
    totalChapters: number;
    totalParts: number;
    modules: SubjectModule[];
    topics: SubjectTopic[];
    chapters: SubjectChapter[];
    schedules: WeeklyScheduleData[];
    colors: {
        primary: string; // Tailwind class e.g. "blue"
        heroGradient: string; // "from-blue-600 via-blue-700 to-indigo-800"
    };
    basePath: string; // e.g. "/student/batch1/history"
}

// --- Components ---

interface SubjectPlannerProps {
    config: SubjectConfig;
    embedded?: boolean;
}

export default function SubjectPlanner({ config, embedded = false }: SubjectPlannerProps) {
    const [selectedModule, setSelectedModule] = useState<string | null>(null);
    const [view, setView] = useState<'topics' | 'schedule' | 'map'>('map');
    const scheduleRef = useRef<HTMLDivElement>(null);

    // Scroll to schedule when view changes
    useEffect(() => {
        if (view === 'schedule' && scheduleRef.current) {
            setTimeout(() => {
                scheduleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [view]);

    // Initialize calendar start date if needed (per subject or global?)
    // Using a subject-specific key to allow different start dates
    useEffect(() => {
        const key = `${config.id}_start_calendar_date`;
        if (typeof window !== 'undefined' && !localStorage.getItem(key)) {
            // Default to consistent start date if not set, or now
            // Using a fixed start date for consistency across subjects if applicable, or let it sit?
            // Let's stick to the batch start date logic if strictly followed.
            // For now, simple initialization:
            localStorage.setItem(key, new Date().toISOString());
        }
    }, [config.id]);


    // Check admin
    const isAdmin = typeof window !== 'undefined' &&
        (localStorage.getItem('userRole') === 'teacher' ||
            localStorage.getItem('userEmail')?.includes('admin') ||
            localStorage.getItem('userEmail') === 'test001@gmail.com');


    // Stats
    const totalCA = config.topics.reduce((sum, t) => sum + t.currentAffairsCount, 0);
    const highPriorityTopics = config.topics.filter(t => t.priority === 'High').length;

    return (
        <div className={`min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a] ${embedded ? 'min-h-0 bg-transparent' : ''}`}>
            {/* Hero Section */}
            {!embedded && (
                <div className={`bg-gradient-to-br ${config.colors.heroGradient} text-white`}>
                    <div className="max-w-6xl mx-auto px-6 py-12">
                        <Link href="/student/batch1" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 text-sm font-medium">
                            <ChevronRight className="w-4 h-4 rotate-180" />
                            Back to Dashboard
                        </Link>

                        <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                            <Book className="w-4 h-4" />
                            <span>UPSC Prelims 2026 • Cycle 1</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">
                            {config.title}
                        </h1>
                        <p className="text-xl text-white/80 mb-6">
                            {config.subtitle}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                                <div className="text-3xl font-bold">{config.totalChapters}</div>
                                <div className="text-white/70 text-sm">Chapters</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                                <div className="text-3xl font-bold">{config.totalParts}</div>
                                <div className="text-white/70 text-sm">Parts</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                                <div className="text-3xl font-bold flex items-center gap-1">
                                    {totalCA}
                                    <Sparkles className="w-5 h-5 text-yellow-400" />
                                </div>
                                <div className="text-white/70 text-sm">Current Affairs</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                                <div className="text-3xl font-bold flex items-center gap-1">
                                    {highPriorityTopics}
                                    <Target className="w-5 h-5 text-red-400" />
                                </div>
                                <div className="text-white/70 text-sm">High Priority</div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                onClick={() => setView('schedule')}
                                className={`bg-white text-${config.colors.primary}-700 hover:bg-${config.colors.primary}-50 font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transition-all`}
                            >
                                <TrendingUp className="w-5 h-5" />
                                Open Planner & Schedule
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Tab Navigation */}
            <div className="max-w-6xl mx-auto px-6 mt-12">
                <div className="flex border-b border-gray-200 dark:border-gray-800">
                    <button
                        onClick={() => setView('map')}
                        className={`px-8 py-4 text-sm font-bold transition-all border-b-2 ${view === 'map'
                            ? `text-${config.colors.primary}-600 border-${config.colors.primary}-600`
                            : 'text-gray-500 border-transparent hover:text-gray-700'
                            }`}
                    >
                        Content Map
                    </button>
                    <button
                        onClick={() => setView('topics')}
                        className={`px-8 py-4 text-sm font-bold transition-all border-b-2 ${view === 'topics'
                            ? `text-${config.colors.primary}-600 border-${config.colors.primary}-600`
                            : 'text-gray-500 border-transparent hover:text-gray-700'
                            }`}
                    >
                        Detailed Syllabus
                    </button>
                    <button
                        onClick={() => setView('schedule')}
                        className={`px-8 py-4 text-sm font-bold transition-all border-b-2 flex items-center gap-2 ${view === 'schedule'
                            ? `text-${config.colors.primary}-600 border-${config.colors.primary}-600`
                            : 'text-gray-500 border-transparent hover:text-gray-700'
                            }`}
                    >
                        Study Planner
                    </button>
                </div>
            </div>

            {/* Views */}
            <div className="pb-20">
                {view === 'topics' && (
                    <TopicsView config={config} selectedModule={selectedModule} setSelectedModule={setSelectedModule} />
                )}
                {view === 'schedule' && (
                    <div ref={scheduleRef} className="max-w-6xl mx-auto px-6 py-12">
                        <SubjectScheduleView config={config} isAdmin={isAdmin} />
                    </div>
                )}
                {view === 'map' && (
                    <div className="max-w-6xl mx-auto px-6 py-12">
                        {/* Placeholder for generic map, or we reuse the topics selection as map for now */}
                        <div className="text-center py-10 bg-white dark:bg-[#111] rounded-2xl border border-dashed">
                            <p className="text-gray-500">Interactive Content Map coming soon for {config.title}</p>
                            <button onClick={() => setView('topics')} className="text-blue-600 mt-2 font-bold">View Syllabus List</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// --- Sub-Components ---

function TopicsView({ config, selectedModule, setSelectedModule }: { config: SubjectConfig, selectedModule: string | null, setSelectedModule: (id: string | null) => void }) {
    // Helper to get topics by module
    const getTopics = (modId: string) => config.topics.filter(t => t.moduleId === modId);

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            {/* Module Grid */}
            {!selectedModule && (
                <>
                    <h2 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-6">Structured Curriculum</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {config.modules.map(module => {
                            const topics = getTopics(module.id);
                            const isActive = topics.length > 0;
                            return (
                                <button
                                    key={module.id}
                                    onClick={() => isActive && setSelectedModule(module.id)}
                                    disabled={!isActive}
                                    className={`text-left p-5 rounded-2xl border-2 transition-all ${isActive
                                        ? `hover:shadow-lg hover:border-${config.colors.primary}-500 bg-white dark:bg-[#111] border-gray-200 dark:border-gray-800`
                                        : `opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800`
                                        }`}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-12 h-12 rounded-xl bg-${module.color}-100 dark:bg-${module.color}-900/30 flex items-center justify-center text-2xl text-${module.color}-600`}>
                                            {module.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">Module {module.id}</div>
                                            <div className="font-bold text-[#1F2937] dark:text-white">{module.title}</div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{module.description}</p>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Topics {module.topicRange[0]}-{module.topicRange[1]}</span>
                                        {isActive ? (
                                            <span className="flex items-center gap-1 text-green-600">
                                                <TrendingUp className="w-4 h-4" /> {topics.length} Ready
                                            </span>
                                        ) : (
                                            <span className="text-gray-400">Coming Soon</span>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </>
            )}

            {/* Topics List */}
            {selectedModule && (
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-[#1F2937] dark:text-white">Module {selectedModule} Topics</h2>
                        <button onClick={() => setSelectedModule(null)} className={`text-${config.colors.primary}-600 hover:underline text-sm`}>
                            ← Back to Modules
                        </button>
                    </div>
                    <div className="space-y-3">
                        {getTopics(selectedModule).map(topic => (
                            <div key={topic.id} className="block bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-lg transition-all">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`text-xs px-2 py-0.5 rounded bg-${config.colors.primary}-100 dark:bg-${config.colors.primary}-900/30 text-${config.colors.primary}-700 font-medium`}>Topic {topic.id}</span>
                                            {topic.priority === 'High' && <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700">High Priority</span>}
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#1F2937] dark:text-white mb-1">{topic.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{topic.staticFocus}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// --- Schedule View ---

function SubjectScheduleView({ config, isAdmin }: { config: SubjectConfig, isAdmin: boolean }) {
    const [selectedWeek, setSelectedWeek] = useState(0);
    const [viewMode, setViewMode] = useState<'student' | 'master'>(isAdmin ? 'master' : 'student');

    // We can use generic local storage keys or props-based keys
    const completedChaptersKey = `${config.id}_completed_chapters`;

    const [completedChapters, setCompletedChapters] = useState<number[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem(completedChaptersKey);
        if (stored) setCompletedChapters(JSON.parse(stored));
    }, [completedChaptersKey]);

    const toggleCompletion = (chId: number) => {
        const newSet = completedChapters.includes(chId)
            ? completedChapters.filter(id => id !== chId)
            : [...completedChapters, chId];
        setCompletedChapters(newSet);
        localStorage.setItem(completedChaptersKey, JSON.stringify(newSet));
    }

    const currentWeek: WeeklyScheduleData = config.schedules[selectedWeek] || config.schedules[0];

    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white dark:bg-[#111] p-6 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <Calendar className={`w-7 h-7 text-${config.colors.primary}-600`} />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Study Planner</h2>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Target: 6 Hours / Day</p>
                </div>
                {/* Week Pagination */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setSelectedWeek(p => Math.max(0, p - 1))}
                        disabled={selectedWeek === 0}
                        className="p-2 rounded-xl border hover:bg-gray-50"
                    >
                        <ChevronRight className="w-5 h-5 rotate-180" />
                    </button>
                    <div className="px-6 py-2 bg-blue-50 text-blue-700 rounded-xl font-bold">Week {selectedWeek + 1}</div>
                    <button
                        onClick={() => setSelectedWeek(p => Math.min(config.schedules.length - 1, p + 1))}
                        disabled={selectedWeek === config.schedules.length - 1}
                        className="p-2 rounded-xl border hover:bg-gray-50"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {days.map((day, idx) => {
                    const content = currentWeek.days[day];
                    if (!content || content.length === 0) return null;

                    const isSaturday = day === 'saturday';
                    const isSunday = day === 'sunday';

                    return (
                        <div key={day} className="flex flex-col h-full">
                            <div className="flex items-center justify-between mb-3 px-2">
                                <span className="text-xs font-black uppercase tracking-widest text-gray-400">{day}</span>
                            </div>

                            <div className={`flex-1 space-y-3 p-3 rounded-2xl border ${isSaturday ? 'bg-amber-50 border-amber-200' :
                                isSunday ? 'bg-indigo-50 border-indigo-200' :
                                    'bg-white dark:bg-[#111] border-gray-100 dark:border-gray-800'
                                }`}>
                                {(content as any[]).map((itemId: number | string, i: number) => {
                                    // Render logic varies by type
                                    if (isSaturday) return <div key={i} className="text-sm font-bold">{itemId}</div>;

                                    // For normal days, itemId is chapter ID
                                    const ch = config.chapters.find(c => c.chapter === itemId);
                                    if (!ch) return null;

                                    const isDone = completedChapters.includes(ch.chapter);

                                    // Find Module details
                                    const mod = config.modules.find(m => m.id === ch.part);

                                    return (
                                        <div key={i}
                                            onClick={() => toggleCompletion(ch.chapter)}
                                            className={`group relative bg-white dark:bg-[#111] rounded-2xl border p-4 transition-all cursor-pointer shadow-sm ${isDone ? 'border-green-500 bg-green-50/30' : 'hover:border-blue-400'
                                                }`}>
                                            <div className="flex items-center justify-between gap-1 mb-2">
                                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase bg-${mod?.color || 'blue'}-100 text-${mod?.color || 'blue'}-700`}>CH {ch.chapter}</span>
                                                {isDone && <ShieldCheck className="w-4 h-4 text-green-600" />}
                                            </div>
                                            <h4 className={`text-sm font-bold mb-3 ${isDone ? 'line-through opacity-70' : ''}`}>{ch.topic}</h4>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <Clock className="w-3 h-3" /> {ch.slots} Slots
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

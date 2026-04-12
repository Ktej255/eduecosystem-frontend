"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
    Search, ChevronDown, ChevronRight, BookOpen, CheckCircle2,
    Target, LayoutGrid, List, Sparkles, BarChart2, StickyNote, Flame, Bot, Compass, Globe, Mountain, Waves, Wind, Droplets, Map
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { GEOGRAPHY_REGISTRY } from "@/components/upsc/subjects/geography/data/geography-registry";
import { GEOGRAPHY_CONFIG } from "@/components/upsc/subjects/geography/data/geography-config";
import GeographyTopicAnalyticsModal from "./GeographyTopicAnalyticsModal";
import {
    getGeographyStore,
    saveGeographyStore,
    isTopicMastered,
    isTopicStarted,
    getBranchStats,
    getOverallStats,
    hydrateFromBackend,
    updateGeoTopicSection,
    type GeoBranch,
} from "@/lib/geography-store";

export default function GeographyUnifiedDashboard() {
    const router = useRouter();
    const [expandedParts, setExpandedParts] = useState<Record<string, boolean>>({});
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [filterCompleted, setFilterCompleted] = useState<'all' | 'completed' | 'pending'>('all');
    const [selectedReportTopic, setSelectedReportTopic] = useState<number | null>(null);
    // Tick state to force re-renders when store changes
    const [storeTick, setStoreTick] = useState(0);

    const refreshStore = useCallback(() => setStoreTick((t) => t + 1), []);

    useEffect(() => {
        // Expand first module by default
        setExpandedParts({ '1': true });
        // Hydrate from backend (fire-and-forget, then refresh UI)
        hydrateFromBackend().then(refreshStore).catch(() => null);
    }, [refreshStore]);

    const isBook3 = (id: number) => id >= 500;

    // Derive stats directly from the geography-store (re-computed on every storeTick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const overallStats = getOverallStats(GEOGRAPHY_REGISTRY as unknown as {id: number, branch: GeoBranch}[]);
    const branchStats = getBranchStats(GEOGRAPHY_REGISTRY as unknown as {id: number, branch: GeoBranch}[]);
    const totalTopics = overallStats.total;
    const totalCompleted = overallStats.mastered;
    const overallProgress = overallStats.masteryPercentage;

    const filteredTopics = GEOGRAPHY_REGISTRY.filter(topic => {
        const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter =
            filterCompleted === 'all' ||
            (filterCompleted === 'completed' && isTopicMastered(topic.id)) ||
            (filterCompleted === 'pending' && !isTopicMastered(topic.id));
        return matchesSearch && matchesFilter;
    });

    const togglePart = (partId: string) => {
        setExpandedParts(prev => ({ ...prev, [partId]: !prev[partId] }));
    };

    const navigateToTopic = (topicId: number) => {
        if (isBook3(topicId)) {
            toast.info("Human & Economic Geography (Book 3) content is being prepared.", {
                description: "This module will be unlocked once the content map is verified."
            });
            return;
        }
        // Navigate to the deep-reader chapter viewer
        router.push(`/student/upsc/geography/topic/${topicId}`);
    };

    const handleAction = (e: React.MouseEvent, type: 'flashcard' | 'mcq' | 'report', topicId: number) => {
        e.stopPropagation();

        if (isBook3(topicId) && (type === 'flashcard' || type === 'mcq')) {
            toast.info("This module is locked during content preparation.");
            return;
        }

        if (type === 'flashcard') {
            router.push(`/student/upsc/geography/topic/${topicId}?tab=flashcards`);
        } else if (type === 'mcq') {
            router.push(`/student/upsc/geography/topic/${topicId}?tab=mcqs`);
        } else if (type === 'report') {
            setSelectedReportTopic(topicId);
        }
    };

    const toggleComplete = (e: React.MouseEvent, topicId: number) => {
        e.stopPropagation();
        const alreadyMastered = isTopicMastered(topicId);
        if (!alreadyMastered) {
            // Mark all 3 sections complete in the store
            updateGeoTopicSection(topicId, 'readSection', 'completed');
            updateGeoTopicSection(topicId, 'flashcards', 'completed');
            updateGeoTopicSection(topicId, 'mcqs', 'completed');
        } else {
            // Unmark — reset sections
            const store = getGeographyStore();
            delete store.topics[topicId];
            saveGeographyStore(store);
        }
        refreshStore();
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6 pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                            <Globe className="h-6 w-6" />
                        </div>
                        Geography Mastery
                    </h1>
                    <p className="text-muted-foreground mt-1 ml-1 font-medium">
                        {totalTopics} Topics • {GEOGRAPHY_CONFIG.modules.length} Modules • From Core to Clouds
                    </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" size="sm" onClick={() => router.push('/student/upsc/geography/syllabus')}>Syllabus</Button>
                    <Button variant="outline" size="sm" onClick={() => router.push('/student/upsc/geography/pyq')}>PYQs</Button>
                    <Button 
                        variant="outline"
                        size="sm" 
                        onClick={() => router.push('/student/upsc/geography/revision')}
                        className="border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-bold"
                    >
                        Revision Suite
                    </Button>
                    <Button 
                        size="sm" 
                        onClick={() => router.push('/student/upsc/geography/drill')}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-500/20"
                    >
                        <Target className="w-4 h-4 mr-2" /> Practice Hub
                    </Button>
                </div>
            </div>

            {/* Progress Overview */}
            <Card className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white border-0 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Mountain className="w-32 h-32" />
                </div>
                <CardContent className="p-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                        <div>
                            <h2 className="text-xl font-bold">Subject Progress</h2>
                            <p className="text-emerald-100 text-sm">{totalCompleted}/{totalTopics} topics mastered across 5 branches</p>
                        </div>
                        <div className="flex gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold">{totalCompleted}/{totalTopics}</div>
                                <div className="text-xs text-emerald-200 uppercase font-semibold">Topics Mastered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">{overallProgress}%</div>
                                <div className="text-xs text-emerald-200 uppercase font-semibold">Total Mastery</div>
                            </div>
                        </div>
                    </div>
                    <Progress value={overallProgress} className="h-2 bg-white/20" />
                </CardContent>
            </Card>

            {/* Branch Mastery Rings */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {branchStats.map((branch) => {
                    const icons: Record<string, React.ReactNode> = {
                        'Geomorphology':      <Mountain className="w-4 h-4" />,
                        'Climatology':        <Wind className="w-4 h-4" />,
                        'Oceanography':       <Waves className="w-4 h-4" />,
                        'Resource Geography': <Droplets className="w-4 h-4" />,
                        'Indian Geography':   <Map className="w-4 h-4" />,
                    };
                    const colours: Record<string, string> = {
                        'Geomorphology':      'text-amber-600 bg-amber-50 dark:bg-amber-900/20',
                        'Climatology':        'text-sky-600 bg-sky-50 dark:bg-sky-900/20',
                        'Oceanography':       'text-blue-600 bg-blue-50 dark:bg-blue-900/20',
                        'Resource Geography': 'text-rose-600 bg-rose-50 dark:bg-rose-900/20',
                        'Indian Geography':   'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20',
                    };
                    const colourClass = colours[branch.branch] || 'text-slate-600 bg-slate-50';
                    const pct = branch.masteryPercentage;
                    const circumference = 2 * Math.PI * 18;
                    return (
                        <Card key={branch.branch} className="border-border hover:border-emerald-300 transition-all cursor-pointer group" onClick={() => setFilterCompleted('pending')}>
                            <CardContent className="p-4 flex items-center gap-3">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <svg className="w-12 h-12 -rotate-90" viewBox="0 0 40 40">
                                        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="3" className="text-muted/30" />
                                        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="3"
                                            strokeDasharray={circumference}
                                            strokeDashoffset={circumference - (pct / 100) * circumference}
                                            strokeLinecap="round"
                                            className={pct > 0 ? 'text-emerald-500' : 'text-slate-300'}
                                            style={{ transition: 'stroke-dashoffset 0.8s ease' }}
                                        />
                                    </svg>
                                    <div className={`absolute inset-0 flex items-center justify-center text-[9px] font-black ${colourClass.split(' ')[0]}`}>
                                        {pct}%
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground truncate">
                                        {branch.branch.split(' ')[0]}
                                    </p>
                                    <p className="text-xs font-bold text-foreground">{branch.mastered}/{branch.total}</p>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* GeoDaily — Featured Location Card */}
            <Card className="border-none shadow-lg bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden relative group cursor-pointer"
                onClick={() => router.push('/student/upsc/geography/topic/9')}>
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <CardContent className="p-5 relative z-10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                            <Globe className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">🌍 GeoDaily</span>
                                <span className="text-[9px] text-slate-400 font-medium">Today's Featured Topic</span>
                            </div>
                            <h3 className="text-white font-black text-base">Continental Drift Theory</h3>
                            <p className="text-slate-400 text-xs font-medium">Geomorphology • Block 5 • Savindra Singh Ch. 5</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="text-right hidden md:block">
                            <p className="text-emerald-400 text-xs font-black">+15 XP</p>
                            <p className="text-slate-500 text-[10px]">Complete today</p>
                        </div>
                        <Sparkles className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>
                </CardContent>
            </Card>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 bg-card p-2 rounded-xl border border-border">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search geography topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 border-none focus-visible:ring-0 bg-transparent"
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant={filterCompleted === 'all' ? 'secondary' : 'ghost'} size="sm" onClick={() => setFilterCompleted('all')}>All</Button>
                    <Button variant={filterCompleted === 'completed' ? 'secondary' : 'ghost'} size="sm" onClick={() => setFilterCompleted('completed')}>Done</Button>
                    <Button variant={filterCompleted === 'pending' ? 'secondary' : 'ghost'} size="sm" onClick={() => setFilterCompleted('pending')}>Pending</Button>
                </div>
            </div>

            {/* Modules List */}
            <div className="space-y-4">
                {GEOGRAPHY_CONFIG.modules.map((module) => {
                    const moduleTopics = GEOGRAPHY_REGISTRY.filter(t => {
                        return t.id >= module.topicRange[0] && t.id <= module.topicRange[1];
                    });
                    const filteredModuleTopics = moduleTopics.filter(t => 
                        filteredTopics.some(ft => ft.id === t.id)
                    );
                    const completedInModule = moduleTopics.filter(t => (getGeographyStore().topics[t.id] as {completed?: boolean})?.completed === true).length;
                    const isExpanded = expandedParts[module.id];

                    if (searchQuery && filteredModuleTopics.length === 0) return null;

                    return (
                        <div key={module.id} className="space-y-2">
                            <div 
                                onClick={() => togglePart(module.id)}
                                className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border ${isExpanded ? 'bg-muted/30 border-emerald-500/30 shadow-md' : 'bg-card border-border hover:border-emerald-500/30'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                                        {module.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold">{module.title}</h3>
                                        <p className="text-xs text-muted-foreground">{module.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="hidden md:block w-32">
                                        <div className="flex justify-between text-[10px] mb-1">
                                            <span>{completedInModule}/{moduleTopics.length} done</span>
                                        </div>
                                        <Progress value={(completedInModule / moduleTopics.length) * 100} className="h-1" />
                                    </div>
                                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                                </div>
                            </div>

                            {isExpanded && (
                                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pl-4' : 'space-y-2 pl-4'}>
                                    {filteredModuleTopics.map((topic) => (
                                        <div 
                                            key={topic.id}
                                            className={`p-4 rounded-xl border transition-all ${isTopicMastered(topic.id) ? 'bg-emerald-50/30 border-emerald-200' : 'bg-card border-border hover:border-emerald-400/50'}`}
                                            onClick={() => navigateToTopic(topic.id)}
                                        >
                                            <div className="flex items-start gap-3">
                                                <button 
                                                    onClick={(e) => toggleComplete(e, topic.id)}
                                                    className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${isTopicMastered(topic.id) ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-border'}`}
                                                >
                                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                                </button>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className={`font-semibold text-sm ${isTopicMastered(topic.id) ? 'text-emerald-700 dark:text-emerald-400' : ''}`}>{topic.title}</h4>
                                                        {isBook3(topic.id) && (
                                                            <Badge variant="outline" className="text-[9px] py-0 h-4 border-amber-200 bg-amber-50 text-amber-700 font-bold uppercase tracking-tighter">
                                                                Coming Soon
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <button 
                                                            onClick={(e) => handleAction(e, 'flashcard', topic.id)}
                                                            className="p-1.5 rounded-md bg-muted hover:bg-emerald-100 transition-colors"
                                                            title="Flashcards"
                                                        >
                                                            <StickyNote className="w-3.5 h-3.5 text-muted-foreground hover:text-emerald-600" />
                                                        </button>
                                                        <button 
                                                            onClick={(e) => handleAction(e, 'mcq', topic.id)}
                                                            disabled={isBook3(topic.id)}
                                                            className={`p-1.5 rounded-md transition-colors ${isBook3(topic.id) ? 'bg-muted/50 cursor-not-allowed text-muted' : isTopicMastered(topic.id) ? 'bg-emerald-100 text-emerald-600' : 'bg-muted hover:bg-emerald-100'}`}
                                                            title={isBook3(topic.id) ? "Coming Soon" : "MCQ Practice"}
                                                        >
                                                            <Target className={`w-3.5 h-3.5 ${isBook3(topic.id) ? 'text-muted' : isTopicMastered(topic.id) ? 'text-emerald-600' : 'text-muted-foreground hover:text-emerald-600'}`} />
                                                        </button>
                                                        <button 
                                                            onClick={(e) => handleAction(e, 'report', topic.id)}
                                                            className="p-1.5 rounded-md bg-muted hover:bg-emerald-100 transition-colors"
                                                            title="Progress Report"
                                                        >
                                                            <BarChart2 className="w-3.5 h-3.5 text-muted-foreground hover:text-emerald-600" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <GeographyTopicAnalyticsModal 
                isOpen={!!selectedReportTopic}
                onClose={() => setSelectedReportTopic(null)}
                topicId={selectedReportTopic}
                data={selectedReportTopic ? {
                    completed: isTopicMastered(selectedReportTopic),
                    flashcardsDone: getGeographyStore().topics[selectedReportTopic]?.flashcards === 'completed',
                    mcqsDone: getGeographyStore().topics[selectedReportTopic]?.mcqs === 'completed',
                    readDone: getGeographyStore().topics[selectedReportTopic]?.readSection === 'completed',
                } : null}
                onAction={(type) => {
                    if (selectedReportTopic) {
                        if (type === 'read') navigateToTopic(selectedReportTopic);
                        else handleAction({ stopPropagation: () => {} } as any, type, selectedReportTopic);
                        setSelectedReportTopic(null);
                    }
                }}
            />
        </div>
    );
}

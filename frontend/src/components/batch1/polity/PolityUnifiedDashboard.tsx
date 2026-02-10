"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Search, ChevronDown, ChevronRight, BookOpen, CheckCircle2,
    Target, LayoutGrid, List, Sparkles, BarChart2, StickyNote, Flame, Bot, Scale, Rainbow
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
import { POLITY_PARTS, TOPIC_TITLES, getPartColors, getTopicsByPart, PartId } from "@/components/batch1-1/polity/data/polity-types-95";
import { MAJOR_CURRENT_AFFAIRS } from "@/components/batch1-1/polity/data/MajorCurrentAffairsRegistry";
import { getSRSStats } from "@/components/batch1/polity/revision/srs-engine";
import TopicAnalyticsModal from "./TopicAnalyticsModal";

interface TopicProgress {
    [topicId: number]: {
        completed: boolean;
        lastViewed?: string;
        flashcardsDone?: boolean;
        mcqsDone?: boolean;
        readDone?: boolean;
        score?: number;
    };
}

export default function PolityUnifiedDashboard() {
    const router = useRouter();
    const [expandedParts, setExpandedParts] = useState<Record<string, boolean>>({});
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [progress, setProgress] = useState<TopicProgress>({});
    const [filterCompleted, setFilterCompleted] = useState<'all' | 'completed' | 'pending'>('all');
    const [selectedReportTopic, setSelectedReportTopic] = useState<number | null>(null);

    // Load progress from localStorage
    const [srsDueCount, setSrsDueCount] = useState(0);

    useEffect(() => {
        const saved = localStorage.getItem('polity_95_progress');
        if (saved) {
            setProgress(JSON.parse(saved));
        }
        // Expand first part by default
        setExpandedParts({ 'I': true });

        // Load SRS Stats
        const stats = getSRSStats();
        setSrsDueCount(stats.due);
    }, []);

    // Calculate statistics
    const totalCompleted = Object.values(progress).filter(p => p.completed).length;
    const overallProgress = Math.round((totalCompleted / 95) * 100);

    // Filter topics based on search and filter
    const filteredTopics = TOPIC_TITLES.filter(topic => {
        const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase());
        const topicProgress = progress[topic.id];
        const matchesFilter =
            filterCompleted === 'all' ||
            (filterCompleted === 'completed' && topicProgress?.completed) ||
            (filterCompleted === 'pending' && !topicProgress?.completed);
        return matchesSearch && matchesFilter;
    });

    const togglePart = (partId: string) => {
        setExpandedParts(prev => ({ ...prev, [partId]: !prev[partId] }));
    };

    const expandAll = () => {
        const allExpanded: Record<string, boolean> = {};
        POLITY_PARTS.forEach(part => { allExpanded[part.id] = true; });
        setExpandedParts(allExpanded);
    };

    const collapseAll = () => {
        setExpandedParts({});
    };

    const updateTopicProgress = (topicId: number, updates: Partial<TopicProgress[number]>) => {
        const current = progress[topicId] || { completed: false };
        const updated = { ...current, ...updates, lastViewed: new Date().toISOString() };

        // Auto-complete if all sections done
        if (updated.readDone && updated.flashcardsDone && updated.mcqsDone) {
            updated.completed = true;
        }

        const newProgress = { ...progress, [topicId]: updated };
        setProgress(newProgress);
        localStorage.setItem('polity_95_progress', JSON.stringify(newProgress));
    };

    const navigateToTopic = (topicId: number) => {
        router.push(`/student/batch1-1/polity/${topicId}`);
    };

    const handleAction = (e: React.MouseEvent, type: 'flashcard' | 'mcq' | 'report', topicId: number) => {
        e.stopPropagation();

        if (type === 'flashcard') {
            updateTopicProgress(topicId, { flashcardsDone: true });
            router.push(`/student/batch1-1/polity/${topicId}/flashcards`);
        } else if (type === 'mcq') {
            updateTopicProgress(topicId, { mcqsDone: true });
            router.push(`/student/batch1-1/polity/${topicId}/mcq`);
        } else if (type === 'report') {
            setSelectedReportTopic(topicId);
        }
    };

    const toggleComplete = (e: React.MouseEvent, topicId: number) => {
        e.stopPropagation();
        const isCompleted = progress[topicId]?.completed;
        updateTopicProgress(topicId, { completed: !isCompleted });
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6 pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        Indian Polity
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1 ml-1">
                        95 Topics • 11 Parts • Comprehensive Coverage
                    </p>
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                    <Button variant="outline" size="sm" onClick={expandAll}>Expand All</Button>
                    <Button variant="outline" size="sm" onClick={collapseAll}>Collapse All</Button>
                    <Button
                        size="sm"
                        onClick={() => router.push('/student/batch1-1/polity/revision')}
                        className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold border-2 border-slate-900 relative"
                    >
                        <Sparkles className="w-4 h-4 mr-2" /> Revision Suite
                        {srsDueCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm animate-pulse">
                                {srsDueCount}
                            </span>
                        )}
                    </Button>
                    <Button
                        size="sm"
                        onClick={() => router.push('/student/batch1-1/polity/ai-tutor')}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold border-2 border-cyan-800 ml-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    >
                        <Bot className="w-4 h-4 mr-2" /> Ask Dr. Ambedkar
                    </Button>
                    <Button
                        size="sm"
                        onClick={() => router.push('/student/batch1-1/polity/verdict-visualizer')}
                        className="bg-slate-800 hover:bg-slate-700 text-amber-500 font-bold border-2 border-amber-500/50 ml-2"
                    >
                        <Scale className="w-4 h-4 mr-2" /> 3D Verdicts
                    </Button>
                    <Button
                        size="sm"
                        onClick={() => router.push('/student/batch1-1/polity/preamble-prism')}
                        className="bg-slate-900 hover:bg-slate-800 text-purple-400 font-bold border-2 border-purple-500/50 ml-2 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                    >
                        <Rainbow className="w-4 h-4 mr-2" /> Preamble Prism
                    </Button>
                    <Button
                        size="sm"
                        onClick={() => router.push('/student/batch1/current-affairs?subject=Polity')}
                        className="bg-rose-500 hover:bg-rose-600 text-white font-bold border-2 border-rose-600 ml-2 shadow-[0_0_10px_rgba(244,63,94,0.3)]"
                    >
                        <Flame className="w-4 h-4 mr-2" /> Current Affairs
                    </Button>
                </div>
            </div>

            {/* Progress Overview */}
            <Card className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border-0 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Target className="w-32 h-32" />
                </div>
                <CardContent className="p-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                        <div>
                            <h2 className="text-xl font-bold">Concept Mastery</h2>
                            <p className="text-blue-100 text-sm">Track your journey through the constitution</p>
                        </div>
                        <div className="flex gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold">{totalCompleted}/95</div>
                                <div className="text-xs text-blue-200 uppercase font-semibold">Topics</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">{overallProgress}%</div>
                                <div className="text-xs text-blue-200 uppercase font-semibold">Completed</div>
                            </div>
                        </div>
                    </div>
                    <Progress value={overallProgress} className="h-2 bg-white/20" />
                </CardContent>
            </Card>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 sticky top-20 z-10 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md p-2 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search topics (e.g. 'President', 'Article 21')..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-transparent border-none focus-visible:ring-0"
                    />
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={filterCompleted === 'all' ? 'secondary' : 'ghost'}
                        size="sm"
                        onClick={() => setFilterCompleted('all')}
                        className="rounded-lg"
                    >
                        All
                    </Button>
                    <Button
                        variant={filterCompleted === 'completed' ? 'secondary' : 'ghost'}
                        size="sm"
                        onClick={() => setFilterCompleted('completed')}
                        className={`rounded-lg ${filterCompleted === 'completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : ''}`}
                    >
                        Done
                    </Button>
                    <Button
                        variant={filterCompleted === 'pending' ? 'secondary' : 'ghost'}
                        size="sm"
                        onClick={() => setFilterCompleted('pending')}
                        className={`rounded-lg ${filterCompleted === 'pending' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' : ''}`}
                    >
                        Pending
                    </Button>
                </div>
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-700 mx-2 hidden md:block" />
                <div className="flex gap-1">
                    <Button
                        variant={viewMode === 'grid' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                        className="w-9 px-0"
                    >
                        <LayoutGrid className="h-4 w-4" />
                    </Button>
                    <Button
                        variant={viewMode === 'list' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                        className="w-9 px-0"
                    >
                        <List className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* List */}
            <div className="space-y-6">
                {POLITY_PARTS.map((part) => {
                    const colors = getPartColors(part.color);
                    const partTopics = getTopicsByPart(part.id);
                    const filteredPartTopics = partTopics.filter(t =>
                        filteredTopics.some(ft => ft.id === t.id)
                    );
                    const partCompleted = partTopics.filter(t => progress[t.id]?.completed).length;
                    const isExpanded = expandedParts[part.id];

                    if (searchQuery && filteredPartTopics.length === 0) return null;

                    return (
                        <div key={part.id} className="space-y-3">
                            <div
                                onClick={() => togglePart(part.id)}
                                className={`
                                    flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all
                                    bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 hover:border-blue-300
                                    ${isExpanded ? 'shadow-md ring-1 ring-blue-500/20' : ''}
                                `}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-lg ${colors.light} flex items-center justify-center text-2xl`}>
                                        {part.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                            Part {part.number}: {part.title}
                                            <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500">
                                                {part.topicCount}
                                            </Badge>
                                        </h3>
                                        <p className="text-xs text-gray-500">{part.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="hidden md:block w-32">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-gray-500">Progress</span>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">{partCompleted}/{part.topicCount}</span>
                                        </div>
                                        <Progress value={(partCompleted / part.topicCount) * 100} className="h-1.5" />
                                    </div>
                                    {isExpanded ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                                </div>
                            </div>

                            {isExpanded && (
                                <div className={viewMode === 'grid'
                                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pl-2'
                                    : 'space-y-2 pl-2'
                                }>
                                    {filteredPartTopics.map((topic) => {
                                        const topicProgress = progress[topic.id];
                                        const isCompleted = topicProgress?.completed;
                                        const isNew = topic.id >= 85;
                                        const hasUpdates = MAJOR_CURRENT_AFFAIRS.some(ca => ca.topicIds.includes(topic.id));

                                        return (
                                            <div
                                                key={topic.id}
                                                className={`
                                                    group relative bg-white dark:bg-[#111] rounded-xl border p-4 transition-all
                                                    ${isCompleted
                                                        ? 'border-green-200 dark:border-green-900/30 bg-green-50/50 dark:bg-green-900/10'
                                                        : 'border-gray-200 dark:border-gray-800 hover:border-blue-400 hover:shadow-lg'
                                                    }
                                                `}
                                            >
                                                {/* Header Row: Checkbox + Title */}
                                                <div className="flex items-start gap-3 mb-4">
                                                    <button
                                                        onClick={(e) => toggleComplete(e, topic.id)}
                                                        className={`
                                                            mt-0.5 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all
                                                            ${isCompleted
                                                                ? 'bg-green-500 border-green-500 text-white'
                                                                : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 text-transparent'
                                                            }
                                                        `}
                                                    >
                                                        <CheckCircle2 className="w-4 h-4" />
                                                    </button>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2">
                                                            <h4 className={`font-semibold text-sm ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800 dark:text-gray-200'}`}>
                                                                {topic.title}
                                                            </h4>
                                                            {isNew && (
                                                                <Badge className="bg-purple-500 text-[10px] px-1.5 py-0 h-4">New</Badge>
                                                            )}
                                                            {hasUpdates && (
                                                                <div className="flex items-center text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200" title="Current Affairs Update Available">
                                                                    <Flame size={10} className="mr-0.5 fill-amber-600" />
                                                                    Update
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="text-[10px] text-gray-400 mt-0.5 font-mono">
                                                            Topic #{topic.id}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* 4-Icon Action Row */}
                                                <div className="grid grid-cols-4 gap-1 pt-3 border-t border-gray-100 dark:border-gray-800">

                                                    {/* 1. Read */}
                                                    <button
                                                        onClick={() => navigateToTopic(topic.id)}
                                                        className="flex flex-col items-center gap-0.5 group/btn"
                                                        title="Read Chapter"
                                                    >
                                                        <div className={`p-1.5 rounded-lg transition-colors ${topicProgress?.readDone ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-50 dark:bg-gray-800 text-gray-500 group-hover/btn:bg-indigo-50 group-hover/btn:text-indigo-500'}`}>
                                                            <BookOpen className="w-3.5 h-3.5" />
                                                        </div>
                                                        <span className={`text-[8px] font-medium group-hover/btn:text-indigo-500 ${topicProgress?.readDone ? 'text-indigo-500' : 'text-gray-400'}`}>Read</span>
                                                    </button>

                                                    {/* 2. Practice (Dropdown) */}
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <button
                                                                className="flex flex-col items-center gap-0.5 group/btn outline-none"
                                                                title="Practice Questions & Flashcards"
                                                            >
                                                                <div className={`p-1.5 rounded-lg transition-colors ${topicProgress?.flashcardsDone || topicProgress?.mcqsDone ? 'bg-blue-100 text-blue-600' : 'bg-gray-50 dark:bg-gray-800 text-gray-500 group-hover/btn:bg-blue-50 group-hover/btn:text-blue-500'}`}>
                                                                    <Target className="w-3.5 h-3.5" />
                                                                </div>
                                                                <span className="text-[8px] font-medium text-gray-400 group-hover/btn:text-blue-500">Practice</span>
                                                            </button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="center" className="w-48">
                                                            <DropdownMenuItem onClick={(e) => handleAction(e as any, 'flashcard', topic.id)}>
                                                                <StickyNote className="w-4 h-4 mr-2" />
                                                                <span>Flashcards</span>
                                                                {topicProgress?.flashcardsDone && <CheckCircle2 className="w-3 h-3 ml-auto text-green-500" />}
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem onClick={(e) => handleAction(e as any, 'mcq', topic.id)}>
                                                                <Target className="w-4 h-4 mr-2" />
                                                                <span>Level 1 MCQs</span>
                                                                {topicProgress?.mcqsDone && <CheckCircle2 className="w-3 h-3 ml-auto text-green-500" />}
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem onClick={(e) => handleAction(e as any, 'mcq', topic.id)}>
                                                                <Target className="w-4 h-4 mr-2 text-purple-500" />
                                                                <span>Level 2 (Pro)</span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem onClick={(e) => handleAction(e as any, 'mcq', topic.id)}>
                                                                <Flame className="w-4 h-4 mr-2 text-red-500" />
                                                                <span>Level 3 (Exam)</span>
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>

                                                    {/* 3. Current Affairs */}
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); router.push(`/student/batch1-1/polity/${topic.id}/current-affairs`); }}
                                                        className={`flex flex-col items-center gap-0.5 group/btn ${hasUpdates ? '' : 'opacity-40'}`}
                                                        title={hasUpdates ? "View Current Affairs" : "No Current Affairs for this chapter"}
                                                    >
                                                        <div className={`p-1.5 rounded-lg transition-colors ${hasUpdates ? 'bg-amber-100 text-amber-600' : 'bg-gray-50 dark:bg-gray-800 text-gray-400'} group-hover/btn:bg-amber-50 group-hover/btn:text-amber-600`}>
                                                            <Flame className="w-3.5 h-3.5" />
                                                        </div>
                                                        <span className="text-[8px] font-medium text-gray-400 group-hover/btn:text-amber-600">CA</span>
                                                    </button>

                                                    {/* 4. Report */}
                                                    <button
                                                        onClick={(e) => handleAction(e, 'report', topic.id)}
                                                        className="flex flex-col items-center gap-0.5 group/btn"
                                                        title="Topic Analytics"
                                                    >
                                                        <div className="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-500 group-hover/btn:bg-orange-50 group-hover/btn:text-orange-500 transition-colors">
                                                            <BarChart2 className="w-3.5 h-3.5" />
                                                        </div>
                                                        <span className="text-[8px] font-medium text-gray-400 group-hover/btn:text-orange-500">Report</span>
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Deep Report Modal */}
            <TopicAnalyticsModal
                isOpen={!!selectedReportTopic}
                onClose={() => setSelectedReportTopic(null)}
                topicId={selectedReportTopic}
                data={selectedReportTopic ? progress[selectedReportTopic] : null}
                onAction={(type) => {
                    if (selectedReportTopic) {
                        if (type === 'read') navigateToTopic(selectedReportTopic);
                        else {
                            // Map 'flashcard' -> 'flashcards' for URL if needed, but router push in handleAction used 'flashcards'
                            // Let's reuse logic or specific push
                            if (type === 'flashcard') router.push(`/student/batch1-1/polity/${selectedReportTopic}/flashcards`);
                            if (type === 'mcq') router.push(`/student/batch1-1/polity/${selectedReportTopic}/mcq`);
                        }
                        setSelectedReportTopic(null); // Close modal on nav
                    }
                }}
            />
        </div>
    );
}

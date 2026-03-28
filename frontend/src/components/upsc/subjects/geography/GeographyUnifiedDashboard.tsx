"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Search, ChevronDown, ChevronRight, BookOpen, CheckCircle2,
    Target, LayoutGrid, List, Sparkles, BarChart2, StickyNote, Flame, Bot, Compass, Globe, Mountain, Waves
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
import { GEOGRAPHY_REGISTRY, getGeographyTopicsByBranch } from "@/components/upsc/subjects/geography/data/geography-registry";
import { GEOGRAPHY_CONFIG } from "@/components/upsc/subjects/geography/data/geography-config";
import GeographyTopicAnalyticsModal from "./GeographyTopicAnalyticsModal";

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

export default function GeographyUnifiedDashboard() {
    const router = useRouter();
    const [expandedParts, setExpandedParts] = useState<Record<string, boolean>>({});
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [progress, setProgress] = useState<TopicProgress>({});
    const [filterCompleted, setFilterCompleted] = useState<'all' | 'completed' | 'pending'>('all');
    const [selectedReportTopic, setSelectedReportTopic] = useState<number | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem('geography_progress');
        if (saved) {
            try {
                setProgress(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse geography progress", e);
            }
        }
        // Expand first module by default
        setExpandedParts({ '1': true });
    }, []);

    const totalTopics = GEOGRAPHY_REGISTRY.length;
    const totalCompleted = Object.values(progress).filter(p => p.completed).length;
    const overallProgress = Math.round((totalCompleted / totalTopics) * 100) || 0;

    const filteredTopics = GEOGRAPHY_REGISTRY.filter(topic => {
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

    const updateTopicProgress = (topicId: number, updates: Partial<TopicProgress[number]>) => {
        const current = progress[topicId] || { completed: false };
        const updated = { ...current, ...updates, lastViewed: new Date().toISOString() };
        
        if (updated.readDone && updated.flashcardsDone && updated.mcqsDone) {
            updated.completed = true;
        }

        const newProgress = { ...progress, [topicId]: updated };
        setProgress(newProgress);
        localStorage.setItem('geography_progress', JSON.stringify(newProgress));
    };

    const navigateToTopic = (topicId: number) => {
        router.push(`/student/upsc/geography/topic/${topicId}`);
    };

    const handleAction = (e: React.MouseEvent, type: 'flashcard' | 'mcq' | 'report', topicId: number) => {
        e.stopPropagation();
        if (type === 'flashcard') {
            router.push(`/student/upsc/geography/topic/${topicId}/flashcards`);
        } else if (type === 'mcq') {
            router.push(`/student/upsc/geography/topic/${topicId}/mcq`);
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
                            <p className="text-emerald-100 text-sm">Visualizing your geographic expertise</p>
                        </div>
                        <div className="flex gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold">{totalCompleted}/{totalTopics}</div>
                                <div className="text-xs text-emerald-200 uppercase font-semibold">Topics Done</div>
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
                    const completedInModule = moduleTopics.filter(t => progress[t.id]?.completed).length;
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
                                            className={`p-4 rounded-xl border transition-all ${progress[topic.id]?.completed ? 'bg-emerald-50/30 border-emerald-200' : 'bg-card border-border hover:border-emerald-400/50'}`}
                                            onClick={() => navigateToTopic(topic.id)}
                                        >
                                            <div className="flex items-start gap-3">
                                                <button 
                                                    onClick={(e) => toggleComplete(e, topic.id)}
                                                    className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${progress[topic.id]?.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-border'}`}
                                                >
                                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                                </button>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-sm">{topic.title}</h4>
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
                                                            className="p-1.5 rounded-md bg-muted hover:bg-emerald-100 transition-colors"
                                                            title="Quizzes"
                                                        >
                                                            <Target className="w-3.5 h-3.5 text-muted-foreground hover:text-emerald-600" />
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
                data={selectedReportTopic ? progress[selectedReportTopic] : null}
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

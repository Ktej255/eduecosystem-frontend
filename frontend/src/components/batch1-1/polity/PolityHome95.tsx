"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Search, ChevronDown, ChevronRight, BookOpen, CheckCircle2, Clock,
    Target, Filter, LayoutGrid, List, Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { POLITY_PARTS, TOPIC_TITLES, getPartColors, getTopicsByPart, PartId } from "./data/polity-types-95";

interface TopicProgress {
    [topicId: number]: {
        completed: boolean;
        lastViewed?: string;
        flashcardsDone?: boolean;
        mcqsDone?: boolean;
    };
}

export default function PolityHome95() {
    const router = useRouter();
    const [expandedParts, setExpandedParts] = useState<Record<string, boolean>>({});
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [progress, setProgress] = useState<TopicProgress>({});
    const [filterCompleted, setFilterCompleted] = useState<'all' | 'completed' | 'pending'>('all');

    // Load progress from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('polity_95_progress');
        if (saved) {
            setProgress(JSON.parse(saved));
        }
        // Expand first part by default
        setExpandedParts({ 'I': true });
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

    const navigateToTopic = (topicId: number) => {
        router.push(`/student/batch1-1/polity/${topicId}`);
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        Indian Polity
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                        95 Topics • 11 Parts • Complete UPSC Coverage
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={expandAll}
                    >
                        Expand All
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={collapseAll}
                    >
                        Collapse All
                    </Button>
                </div>
            </div>

            {/* Progress Overview */}
            <Card className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                        <div>
                            <h2 className="text-xl font-bold">Your Progress</h2>
                            <p className="text-blue-100">Complete all 95 topics for UPSC Polity mastery</p>
                        </div>
                        <div className="flex gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold">{totalCompleted}/95</div>
                                <div className="text-sm text-blue-200">Topics Done</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">{overallProgress}%</div>
                                <div className="text-sm text-blue-200">Complete</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">11</div>
                                <div className="text-sm text-blue-200">Parts</div>
                            </div>
                        </div>
                    </div>
                    <Progress value={overallProgress} className="h-3 bg-white/20" />
                </CardContent>
            </Card>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={filterCompleted === 'all' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFilterCompleted('all')}
                    >
                        All (95)
                    </Button>
                    <Button
                        variant={filterCompleted === 'completed' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFilterCompleted('completed')}
                        className={filterCompleted === 'completed' ? 'bg-green-600' : ''}
                    >
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        Done ({totalCompleted})
                    </Button>
                    <Button
                        variant={filterCompleted === 'pending' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFilterCompleted('pending')}
                        className={filterCompleted === 'pending' ? 'bg-orange-600' : ''}
                    >
                        <Clock className="h-4 w-4 mr-1" />
                        Pending ({95 - totalCompleted})
                    </Button>
                </div>
                <div className="flex gap-1 border rounded-lg p-1">
                    <Button
                        variant={viewMode === 'grid' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                    >
                        <LayoutGrid className="h-4 w-4" />
                    </Button>
                    <Button
                        variant={viewMode === 'list' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                    >
                        <List className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Parts and Topics */}
            <div className="space-y-4">
                {POLITY_PARTS.map((part) => {
                    const colors = getPartColors(part.color);
                    const partTopics = getTopicsByPart(part.id);
                    const filteredPartTopics = partTopics.filter(t =>
                        filteredTopics.some(ft => ft.id === t.id)
                    );
                    const partCompleted = partTopics.filter(t => progress[t.id]?.completed).length;
                    const isExpanded = expandedParts[part.id];

                    // Skip parts with no matching topics
                    if (searchQuery && filteredPartTopics.length === 0) return null;

                    return (
                        <Card
                            key={part.id}
                            className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'ring-2 ring-offset-2' : ''}`}
                            style={{ '--tw-ring-color': `var(--${part.color}-500)` } as React.CSSProperties}
                        >
                            {/* Part Header */}
                            <div
                                className={`p-4 cursor-pointer bg-gradient-to-r ${colors.gradient} text-white`}
                                onClick={() => togglePart(part.id)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span className="text-3xl">{part.icon}</span>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-lg font-bold">
                                                    Part {part.number}: {part.title}
                                                </h3>
                                                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                                                    {part.topicCount} Topics
                                                </Badge>
                                            </div>
                                            <p className="text-sm opacity-90">{part.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <div className="text-sm font-medium">{partCompleted}/{part.topicCount}</div>
                                            <Progress
                                                value={(partCompleted / part.topicCount) * 100}
                                                className="w-24 h-2 bg-white/20"
                                            />
                                        </div>
                                        {isExpanded ? (
                                            <ChevronDown className="h-6 w-6" />
                                        ) : (
                                            <ChevronRight className="h-6 w-6" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Topics Grid/List */}
                            {isExpanded && (
                                <CardContent className="p-4 bg-gray-50 dark:bg-gray-900">
                                    <div className={viewMode === 'grid'
                                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'
                                        : 'space-y-2'
                                    }>
                                        {filteredPartTopics.map((topic) => {
                                            const topicProgress = progress[topic.id];
                                            const isCompleted = topicProgress?.completed;
                                            const isNew = topic.id >= 85; // Part XI topics are new

                                            return (
                                                <div
                                                    key={topic.id}
                                                    onClick={() => navigateToTopic(topic.id)}
                                                    className={`
                                                        p-4 rounded-lg cursor-pointer transition-all
                                                        ${isCompleted
                                                            ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-400'
                                                            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:shadow-md'
                                                        }
                                                    `}
                                                >
                                                    <div className="flex items-start justify-between gap-2">
                                                        <div className="flex items-start gap-3">
                                                            <div className={`
                                                                w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold
                                                                ${isCompleted
                                                                    ? 'bg-green-500 text-white'
                                                                    : `${colors.light} ${colors.text}`
                                                                }
                                                            `}>
                                                                {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : topic.id}
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                                                    {topic.title}
                                                                    {isNew && (
                                                                        <Badge className="bg-purple-500 text-white text-xs">
                                                                            <Sparkles className="h-3 w-3 mr-1" />
                                                                            New
                                                                        </Badge>
                                                                    )}
                                                                </div>
                                                                {topicProgress?.lastViewed && (
                                                                    <div className="text-xs text-gray-500 mt-1">
                                                                        Last viewed: {new Date(topicProgress.lastViewed).toLocaleDateString()}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <ChevronRight className="h-5 w-5 text-gray-400" />
                                                    </div>

                                                    {/* Progress indicators */}
                                                    {(topicProgress?.flashcardsDone || topicProgress?.mcqsDone) && (
                                                        <div className="flex gap-2 mt-2 pt-2 border-t">
                                                            {topicProgress.flashcardsDone && (
                                                                <Badge variant="outline" className="text-xs bg-blue-50">
                                                                    📚 Flashcards
                                                                </Badge>
                                                            )}
                                                            {topicProgress.mcqsDone && (
                                                                <Badge variant="outline" className="text-xs bg-green-50">
                                                                    ✓ MCQs
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            )}
                        </Card>
                    );
                })}
            </div>

            {/* Quick Stats Footer */}
            <Card className="bg-gray-50 dark:bg-gray-900">
                <CardContent className="p-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-blue-600">95</div>
                            <div className="text-sm text-gray-500">Total Topics</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-green-600">{totalCompleted}</div>
                            <div className="text-sm text-gray-500">Completed</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-orange-600">{95 - totalCompleted}</div>
                            <div className="text-sm text-gray-500">Remaining</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-purple-600">11</div>
                            <div className="text-sm text-gray-500">New Topics</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

"use client";

import React, { useState, useMemo, useEffect } from 'react';
import {
    BookOpen, Timer, ChevronRight, Search, CheckCircle2,
    Brain, Flame, Zap, ArrowLeft, Play, Trophy, Target, BarChart3,
    Calendar, ListChecks, Shuffle, Save, Trash2, PenLine, Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { LAXMIKANTH_CHAPTERS, ChapterSchedule, generateWeeklySchedule } from '@/components/batch1/polity/data/polity-schedule-data';
import { getProgressStore as getPolityProgress, getCompletedChapterIds as getPolityCompleted } from '@/lib/polity-progress-store';
import { ActivityLogger } from '@/lib/analytics/ActivityLogger';
import PomodoroSessionView from './PomodoroSessionView';

// ========== TYPES ==========
type SubjectId = 'polity' | 'history';
type DashboardView = 'subject_select' | 'mode_select' | 'chapter_select' | 'planner_view' | 'custom_view' | 'session';
type StudyMode = 'independent' | 'planner' | 'custom';

interface SubjectConfig {
    id: SubjectId;
    label: string;
    icon: string;
    color: string;
    gradient: string;
    borderColor: string;
    totalChapters: number;
    description: string;
}

interface SelectedChapter {
    id: number;
    topic: string;
    group: string;
}

interface CustomPreset {
    id: string;
    name: string;
    subject: SubjectId;
    chapters: SelectedChapter[];
    createdAt: number;
}

// ========== CONFIG ==========
const CUSTOM_PRESETS_KEY = 'subject_pomodoro_presets';

const SUBJECTS: SubjectConfig[] = [
    {
        id: 'polity',
        label: 'Indian Polity',
        icon: '🏛️',
        color: 'text-indigo-600',
        gradient: 'from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20',
        borderColor: 'border-indigo-200',
        totalChapters: 95,
        description: 'Laxmikanth — Full Coverage'
    },
    {
        id: 'history',
        label: 'Modern Indian History',
        icon: '📜',
        color: 'text-amber-600',
        gradient: 'from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20',
        borderColor: 'border-amber-200',
        totalChapters: 28,
        description: 'Spectrum — Full Coverage'
    },
];

const MODES: { id: StudyMode; label: string; icon: React.ElementType; description: string; color: string; gradient: string; border: string }[] = [
    {
        id: 'independent',
        label: 'Independent Mode',
        icon: Shuffle,
        description: 'Pick any chapters manually',
        color: 'text-orange-600',
        gradient: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20',
        border: 'border-orange-200',
    },
    {
        id: 'planner',
        label: 'Planner Mode',
        icon: Calendar,
        description: "Follow this week's schedule",
        color: 'text-indigo-600',
        gradient: 'from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20',
        border: 'border-indigo-200',
    },
    {
        id: 'custom',
        label: 'Custom Presets',
        icon: ListChecks,
        description: 'Saved chapter sets',
        color: 'text-emerald-600',
        gradient: 'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20',
        border: 'border-emerald-200',
    },
];

// ========== HELPERS ==========
function getPolityChaptersByGroup(): Record<string, ChapterSchedule[]> {
    const groups: Record<string, ChapterSchedule[]> = {};
    LAXMIKANTH_CHAPTERS.forEach(ch => {
        const group = ch.group || 'Other';
        if (!groups[group]) groups[group] = [];
        groups[group].push(ch);
    });
    return groups;
}

function loadPresets(): CustomPreset[] {
    if (typeof window === 'undefined') return [];
    try {
        const saved = localStorage.getItem(CUSTOM_PRESETS_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch { return []; }
}

function savePresets(presets: CustomPreset[]) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(CUSTOM_PRESETS_KEY, JSON.stringify(presets));
}

function getCurrentWeekNumber(): number {
    if (typeof window === 'undefined') return 1;
    const BATCH_START_DATE = new Date('2026-01-12T00:00:00');
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - BATCH_START_DATE.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, Math.ceil(diffDays / 7));
}

function getCurrentDayOfWeek(): number {
    const day = new Date().getDay(); // 0=Sun..6=Sat
    // Map: Mon=1, Tue=2... Sat=6, Sun=0
    return day === 0 ? 7 : day;
}

// ========== COMPONENT ==========
export default function SubjectPomodoro() {
    const [view, setView] = useState<DashboardView>('subject_select');
    const [selectedSubject, setSelectedSubject] = useState<SubjectId | null>(null);
    const [selectedMode, setSelectedMode] = useState<StudyMode>('independent');
    const [selectedChapters, setSelectedChapters] = useState<SelectedChapter[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [presets, setPresets] = useState<CustomPreset[]>([]);
    const [newPresetName, setNewPresetName] = useState('');
    const [isCreatingPreset, setIsCreatingPreset] = useState(false);

    // Load presets from localStorage
    useEffect(() => {
        setPresets(loadPresets());
    }, []);

    // Progress data
    const polityCompleted = useMemo(() => {
        if (typeof window === 'undefined') return [];
        return getPolityCompleted();
    }, []);

    // Stats from ActivityLogger
    const pomodoroStats = useMemo(() => {
        if (typeof window === 'undefined') return { total: 0, correct: 0, accuracy: 0 };
        const stats = ActivityLogger.getStats();
        return {
            total: stats.pomodoroMCQs,
            correct: stats.pomodoroCorrect,
            accuracy: stats.pomodoroMCQs > 0 ? Math.round((stats.pomodoroCorrect / stats.pomodoroMCQs) * 100) : 0,
        };
    }, [view]);

    // Weekly schedule for planner mode
    const weeklySchedule = useMemo(() => {
        try { return generateWeeklySchedule(); } catch { return []; }
    }, []);

    const currentWeek = getCurrentWeekNumber();
    const currentDayOfWeek = getCurrentDayOfWeek();

    const thisWeekSchedule = useMemo(() => {
        return weeklySchedule.find(w => w.week === currentWeek);
    }, [weeklySchedule, currentWeek]);

    // Get today's chapters from planner
    const todayPlannerChapters = useMemo((): SelectedChapter[] => {
        if (!thisWeekSchedule) return [];
        const dayMap: Record<number, keyof typeof thisWeekSchedule.days> = {
            1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday', 7: 'sunday'
        };
        const dayKey = dayMap[currentDayOfWeek];
        if (!dayKey) return [];
        const dayContent = thisWeekSchedule.days[dayKey];
        if (!dayContent || !Array.isArray(dayContent)) return [];

        return (dayContent as ChapterSchedule[]).map(ch => ({
            id: ch.chapter,
            topic: ch.topic,
            group: ch.group || '',
        }));
    }, [thisWeekSchedule, currentDayOfWeek]);

    // ========== HANDLERS ==========
    const handleSubjectSelect = (subjectId: SubjectId) => {
        setSelectedSubject(subjectId);
        setSelectedChapters([]);
        setView('mode_select');
    };

    const handleModeSelect = (mode: StudyMode) => {
        setSelectedMode(mode);
        if (mode === 'independent') {
            setSelectedChapters([]);
            setView('chapter_select');
        } else if (mode === 'planner') {
            setView('planner_view');
        } else if (mode === 'custom') {
            setView('custom_view');
        }
    };

    const handleChapterToggle = (chapter: SelectedChapter) => {
        setSelectedChapters(prev => {
            const exists = prev.find(c => c.id === chapter.id);
            if (exists) return prev.filter(c => c.id !== chapter.id);
            if (prev.length >= 5) return prev;
            return [...prev, chapter];
        });
    };

    const handleStartSession = () => {
        if (selectedChapters.length === 0) return;
        setView('session');
    };

    const handleStartPlannerSession = () => {
        if (todayPlannerChapters.length === 0) return;
        setSelectedChapters(todayPlannerChapters.slice(0, 5));
        setView('session');
    };

    const handleStartPresetSession = (preset: CustomPreset) => {
        setSelectedChapters(preset.chapters);
        setSelectedSubject(preset.subject);
        setView('session');
    };

    const handleSavePreset = () => {
        if (!newPresetName.trim() || selectedChapters.length === 0 || !selectedSubject) return;
        const newPreset: CustomPreset = {
            id: crypto.randomUUID(),
            name: newPresetName.trim(),
            subject: selectedSubject,
            chapters: [...selectedChapters],
            createdAt: Date.now(),
        };
        const updated = [...presets, newPreset];
        setPresets(updated);
        savePresets(updated);
        setNewPresetName('');
        setIsCreatingPreset(false);
    };

    const handleDeletePreset = (presetId: string) => {
        const updated = presets.filter(p => p.id !== presetId);
        setPresets(updated);
        savePresets(updated);
    };

    const handleBack = () => {
        if (view === 'session') {
            if (selectedMode === 'independent') setView('chapter_select');
            else if (selectedMode === 'planner') setView('planner_view');
            else setView('custom_view');
        } else if (view === 'chapter_select' || view === 'planner_view' || view === 'custom_view') {
            setView('mode_select');
        } else if (view === 'mode_select') {
            setView('subject_select');
            setSelectedSubject(null);
        }
    };

    // ========== SUBJECT SELECT VIEW ==========
    if (view === 'subject_select') {
        return (
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                        <Timer className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-black text-foreground">Subject Pomodoro</h1>
                    <p className="text-muted-foreground mt-2">Choose a subject to start focused study sessions</p>
                </div>

                {pomodoroStats.total > 0 && (
                    <div className="grid grid-cols-3 gap-4">
                        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                            <CardContent className="p-4 text-center">
                                <div className="text-2xl font-black text-orange-600">{pomodoroStats.total}</div>
                                <div className="text-[10px] font-bold text-orange-500 uppercase">MCQs Solved</div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                            <CardContent className="p-4 text-center">
                                <div className="text-2xl font-black text-green-600">{pomodoroStats.correct}</div>
                                <div className="text-[10px] font-bold text-green-500 uppercase">Correct</div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
                            <CardContent className="p-4 text-center">
                                <div className="text-2xl font-black text-indigo-600">{pomodoroStats.accuracy}%</div>
                                <div className="text-[10px] font-bold text-indigo-500 uppercase">Accuracy</div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SUBJECTS.map(subject => {
                        const completedCount = subject.id === 'polity' ? polityCompleted.length : 0;
                        const progress = Math.round((completedCount / subject.totalChapters) * 100);

                        return (
                            <Card
                                key={subject.id}
                                className={`cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 group bg-gradient-to-br ${subject.gradient} ${subject.borderColor} border-2 relative overflow-hidden`}
                                onClick={() => handleSubjectSelect(subject.id)}
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <BookOpen className="w-28 h-28" />
                                </div>
                                <CardContent className="p-8 relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-4xl">{subject.icon}</span>
                                        <div>
                                            <h2 className={`text-xl font-black ${subject.color}`}>{subject.label}</h2>
                                            <p className="text-sm text-muted-foreground">{subject.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1.5">
                                                <BookOpen className="w-4 h-4 text-muted-foreground" />
                                                <span className="text-sm font-medium text-muted-foreground">{subject.totalChapters} chapters</span>
                                            </div>
                                            {completedCount > 0 && (
                                                <div className="flex items-center gap-1.5">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    <span className="text-sm font-medium text-green-600">{completedCount} done</span>
                                                </div>
                                            )}
                                        </div>
                                        <ChevronRight className={`w-6 h-6 ${subject.color} group-hover:translate-x-1 transition-transform`} />
                                    </div>
                                    {completedCount > 0 && (
                                        <div className="mt-4">
                                            <div className="h-2 bg-card/50/50 rounded-full overflow-hidden">
                                                <div className="h-full bg-green-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">{progress}% complete</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        );
    }

    // ========== MODE SELECT VIEW ==========
    if (view === 'mode_select' && selectedSubject) {
        const subjectConfig = SUBJECTS.find(s => s.id === selectedSubject)!;
        const subjectPresets = presets.filter(p => p.subject === selectedSubject);

        return (
            <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex items-center gap-3">
                    <Button variant="ghost" onClick={handleBack} className="p-2">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div>
                        <h1 className="text-2xl font-black text-foreground flex items-center gap-2">
                            <span>{subjectConfig.icon}</span> {subjectConfig.label}
                        </h1>
                        <p className="text-sm text-muted-foreground">Choose your study mode</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {MODES.map(mode => {
                        const Icon = mode.icon;
                        const hasPresets = mode.id === 'custom' && subjectPresets.length > 0;
                        const hasPlannerData = mode.id === 'planner' && todayPlannerChapters.length > 0;

                        return (
                            <Card
                                key={mode.id}
                                className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 group bg-gradient-to-br ${mode.gradient} ${mode.border} border-2 relative overflow-hidden`}
                                onClick={() => handleModeSelect(mode.id)}
                            >
                                <CardContent className="p-6 flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-card/60/60 ${mode.color} shrink-0`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className={`text-lg font-bold ${mode.color}`}>{mode.label}</h3>
                                        <p className="text-sm text-muted-foreground">{mode.description}</p>
                                        {hasPlannerData && (
                                            <p className="text-xs text-indigo-500 mt-1 font-semibold">
                                                📅 {todayPlannerChapters.length} chapter{todayPlannerChapters.length > 1 ? 's' : ''} scheduled today
                                            </p>
                                        )}
                                        {hasPresets && (
                                            <p className="text-xs text-emerald-500 mt-1 font-semibold">
                                                📋 {subjectPresets.length} saved preset{subjectPresets.length > 1 ? 's' : ''}
                                            </p>
                                        )}
                                    </div>
                                    <ChevronRight className={`w-5 h-5 ${mode.color} group-hover:translate-x-1 transition-transform shrink-0`} />
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        );
    }

    // ========== PLANNER VIEW ==========
    if (view === 'planner_view' && selectedSubject) {
        const subjectConfig = SUBJECTS.find(s => s.id === selectedSubject)!;
        const dayNames = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return (
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" onClick={handleBack} className="p-2">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <div>
                            <h1 className="text-2xl font-black text-foreground flex items-center gap-2">
                                <Calendar className="w-6 h-6 text-indigo-500" />
                                Planner Mode — Week {currentWeek}
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Today is {dayNames[currentDayOfWeek]} • {subjectConfig.icon} {subjectConfig.label}
                            </p>
                        </div>
                    </div>
                    {todayPlannerChapters.length > 0 && (
                        <Button
                            onClick={handleStartPlannerSession}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white h-12 px-6 font-bold shadow-lg"
                        >
                            <Play className="mr-2 h-5 w-5" />
                            Study Today&apos;s Plan
                        </Button>
                    )}
                </div>

                {/* Today's Chapters */}
                {todayPlannerChapters.length > 0 ? (
                    <Card className="bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-200 border-2">
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2 text-indigo-700">
                                <Flame className="w-4 h-4" />
                                Today&apos;s Chapters ({dayNames[currentDayOfWeek]})
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {todayPlannerChapters.map(ch => {
                                const isCompleted = polityCompleted.includes(ch.id);
                                return (
                                    <div key={ch.id} className="flex items-center gap-3 p-3 rounded-xl bg-card/70/50 border border-indigo-100">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black shrink-0
                                            ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-indigo-100 text-indigo-700'}`}>
                                            {ch.id}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-foreground truncate">{ch.topic}</p>
                                            <p className="text-[10px] text-muted-foreground">{ch.group}</p>
                                        </div>
                                        {isCompleted && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>
                ) : (
                    <Card className="p-8 text-center bg-muted border-dashed border-border">
                        <Calendar className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                        <h3 className="text-base font-bold text-muted-foreground dark:text-muted-foreground">No chapters scheduled today</h3>
                        <p className="text-sm text-muted-foreground mt-1">Switch to Independent Mode to pick your own chapters.</p>
                        <Button variant="outline" onClick={() => handleModeSelect('independent')} className="mt-4">
                            <Shuffle className="mr-2 h-4 w-4" /> Go Independent
                        </Button>
                    </Card>
                )}

                {/* Full Week Overview */}
                {thisWeekSchedule && (
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2 text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                Week {currentWeek} Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {(['monday', 'tuesday', 'wednesday', 'thursday', 'friday'] as const).map((dayKey, idx) => {
                                    const dayContent = thisWeekSchedule.days[dayKey];
                                    const isToday = idx + 1 === currentDayOfWeek;
                                    const chapters = Array.isArray(dayContent) ? dayContent as ChapterSchedule[] : [];

                                    return (
                                        <div key={dayKey} className={`p-3 rounded-xl border ${isToday ? 'border-indigo-300 bg-indigo-50/50' : 'border-border bg-gray-50/50/50'}`}>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`text-xs font-bold uppercase ${isToday ? 'text-indigo-600' : 'text-muted-foreground'}`}>
                                                    {dayNames[idx + 1]}
                                                </span>
                                                {isToday && <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 text-[10px] h-5">TODAY</Badge>}
                                            </div>
                                            {chapters.length > 0 ? (
                                                <div className="space-y-1">
                                                    {chapters.map(ch => (
                                                        <p key={ch.chapter} className="text-xs text-muted-foreground dark:text-muted-foreground truncate">
                                                            <span className="font-bold text-muted-foreground dark:text-muted-foreground">Ch {ch.chapter}:</span> {ch.topic}
                                                        </p>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-xs text-muted-foreground italic">No chapters</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        );
    }

    // ========== CUSTOM PRESETS VIEW ==========
    if (view === 'custom_view' && selectedSubject) {
        const subjectConfig = SUBJECTS.find(s => s.id === selectedSubject)!;
        const subjectPresets = presets.filter(p => p.subject === selectedSubject);

        return (
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" onClick={handleBack} className="p-2">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <div>
                            <h1 className="text-2xl font-black text-foreground flex items-center gap-2">
                                <ListChecks className="w-6 h-6 text-emerald-500" />
                                Custom Presets
                            </h1>
                            <p className="text-sm text-muted-foreground">{subjectConfig.icon} {subjectConfig.label} — saved chapter sets</p>
                        </div>
                    </div>
                    <Button
                        onClick={() => { setIsCreatingPreset(true); setSelectedChapters([]); setView('chapter_select'); }}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                    >
                        <Plus className="mr-2 h-4 w-4" /> New Preset
                    </Button>
                </div>

                {subjectPresets.length > 0 ? (
                    <div className="space-y-3">
                        {subjectPresets.map(preset => (
                            <Card key={preset.id} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <h3 className="font-bold text-foreground">{preset.name}</h3>
                                            <p className="text-xs text-muted-foreground">
                                                {preset.chapters.length} chapters • Created {new Date(preset.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                size="sm"
                                                onClick={() => handleStartPresetSession(preset)}
                                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
                                            >
                                                <Play className="mr-1 h-3.5 w-3.5" /> Start
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={() => handleDeletePreset(preset.id)}
                                                className="text-red-400 hover:text-red-600 hover:bg-red-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {preset.chapters.map(ch => (
                                            <Badge key={ch.id} variant="secondary" className="bg-muted text-muted-foreground text-[10px]">
                                                Ch {ch.id}: {ch.topic}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Card className="p-8 text-center bg-muted border-dashed border-border">
                        <ListChecks className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                        <h3 className="text-base font-bold text-muted-foreground dark:text-muted-foreground">No custom presets yet</h3>
                        <p className="text-sm text-muted-foreground mt-1">Create a preset to save your favorite chapter combinations.</p>
                    </Card>
                )}
            </div>
        );
    }

    // ========== CHAPTER SELECT VIEW (Independent & Create Preset) ==========
    if (view === 'chapter_select' && selectedSubject) {
        const subjectConfig = SUBJECTS.find(s => s.id === selectedSubject)!;
        const chapterGroups = selectedSubject === 'polity' ? getPolityChaptersByGroup() : {};

        const filteredGroups = Object.entries(chapterGroups).reduce((acc, [group, chapters]) => {
            const filtered = chapters.filter(ch =>
                ch.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                `chapter ${ch.chapter}`.includes(searchQuery.toLowerCase())
            );
            if (filtered.length > 0) acc[group] = filtered;
            return acc;
        }, {} as Record<string, ChapterSchedule[]>);

        return (
            <div className="max-w-5xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" onClick={() => {
                            if (isCreatingPreset) { setIsCreatingPreset(false); setView('custom_view'); }
                            else handleBack();
                        }} className="p-2">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <div>
                            <h1 className="text-2xl font-black text-foreground flex items-center gap-2">
                                <span>{subjectConfig.icon}</span>
                                {isCreatingPreset ? 'Create Preset' : subjectConfig.label}
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                {isCreatingPreset ? 'Select chapters and name your preset' : 'Select up to 5 chapters for your session'}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {isCreatingPreset && selectedChapters.length > 0 && (
                            <div className="flex items-center gap-2">
                                <Input
                                    placeholder="Preset name..."
                                    className="w-40 h-10"
                                    value={newPresetName}
                                    onChange={e => setNewPresetName(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && handleSavePreset()}
                                />
                                <Button onClick={handleSavePreset} className="bg-emerald-600 hover:bg-emerald-700 text-white h-10 font-bold" disabled={!newPresetName.trim()}>
                                    <Save className="mr-1 h-4 w-4" /> Save
                                </Button>
                            </div>
                        )}
                        {!isCreatingPreset && selectedChapters.length > 0 && (
                            <Button onClick={handleStartSession} className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-6 font-bold text-base shadow-lg">
                                <Play className="mr-2 h-5 w-5" /> Start ({selectedChapters.length})
                            </Button>
                        )}
                    </div>
                </div>

                {selectedChapters.length > 0 && (
                    <Card className="bg-orange-50 dark:bg-orange-900/10 border-orange-200">
                        <CardContent className="p-3">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-bold text-orange-600 uppercase mr-2">Selected:</span>
                                {selectedChapters.map(ch => (
                                    <Badge key={ch.id} variant="secondary" className="bg-orange-100 text-orange-700 border-orange-300 cursor-pointer hover:bg-red-100 hover:text-red-700 transition-colors" onClick={() => handleChapterToggle(ch)}>
                                        Ch {ch.id}: {ch.topic} ✕
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search chapters..." className="pl-10 h-12 text-base bg-card border-border" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>

                <div className="space-y-6">
                    {Object.entries(filteredGroups).map(([group, chapters]) => (
                        <div key={group}>
                            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                {group}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {chapters.map(ch => {
                                    const isSelected = selectedChapters.some(s => s.id === ch.chapter);
                                    const isCompleted = polityCompleted.includes(ch.chapter);
                                    const isDisabled = !isSelected && selectedChapters.length >= 5;

                                    return (
                                        <div key={ch.chapter} onClick={() => !isDisabled && handleChapterToggle({ id: ch.chapter, topic: ch.topic, group: ch.group || '' })}
                                            className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between group
                                                ${isSelected ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 shadow-sm' : isDisabled ? 'border-border bg-muted opacity-50 cursor-not-allowed' : 'border-border hover:border-indigo-300 hover:bg-indigo-50/50 bg-card'}`}>
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black shrink-0
                                                    ${isSelected ? 'bg-orange-500 text-white' : isCompleted ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'}`}>
                                                    {ch.chapter}
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-semibold text-foreground truncate">{ch.topic}</p>
                                                    <p className="text-[10px] text-muted-foreground">{ch.pages} pages • {ch.slots} slots</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                {isCompleted && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                                                {isSelected && <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5 text-white" /></div>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // ========== SESSION VIEW ==========
    if (view === 'session' && selectedSubject && selectedChapters.length > 0) {
        return (
            <div>
                <div className="mb-4 flex items-center gap-3">
                    <Button variant="ghost" onClick={handleBack}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Badge variant="outline" className="text-orange-600 border-orange-300">
                        {selectedChapters.length} chapters • {selectedMode === 'planner' ? '📅 Planner' : selectedMode === 'custom' ? '📋 Preset' : '🎯 Independent'}
                    </Badge>
                </div>
                <PomodoroSessionView
                    weekId={99}
                    dayId={99}
                    subject={selectedSubject}
                    showBackButton={false}
                    independentChapters={selectedChapters.map(c => c.id)}
                />
            </div>
        );
    }

    return null;
}

"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Timer,
    BookOpen,
    BarChart3,
    Brain,
    Calendar,
    ChevronRight,
    Flame,
    Moon,
    Trophy,
    ArrowLeft,
    Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Component Imports
import dynamic from 'next/dynamic';

// Component Imports
const PomodoroSessionView = dynamic(() => import('@/components/upsc/platform/pomodoro/PomodoroSessionView'), { loading: () => <div>Loading Session...</div> });
const PolityHome = dynamic(() => import('@/components/upsc/subjects/polity/PolityHome'), { loading: () => <div>Loading Polity...</div> });
const HistoryHome = dynamic(() => import('@/components/upsc/subjects/history/HistoryHome'), { loading: () => <div>Loading History...</div> });
const RetentionDashboard = dynamic(() => import('@/components/retention/RetentionDashboard'), { loading: () => <div>Loading Retention...</div> });
const FocusAnalyticsDashboard = dynamic(() => import('@/components/upsc/subjects/FocusAnalyticsDashboard'), { loading: () => <div>Loading Analytics...</div> });

const Batch1DeepReport = dynamic(() => import('@/components/upsc/platform/reports/Batch1DeepReport'), { loading: () => <div>Loading Report...</div> });

const SubjectPomodoro = dynamic(() => import('@/components/upsc/platform/pomodoro/SubjectPomodoro'), { loading: () => <div>Loading Subject Pomodoro...</div> });
const GeographyDashboard = dynamic(() => import('@/components/upsc/subjects/geography/GeographyDashboard'), { loading: () => <div>Loading Geography...</div> });

type FocusTab = 'pomodoro' | 'subject_pomodoro' | 'study' | 'analytics' | 'retention';
type Subject = 'polity' | 'history' | 'geography' | 'science';

const WEEKS = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    label: `Week ${i + 1}`
}));

const DAYS = [
    { id: 1, label: 'Monday', short: 'Day 1' },
    { id: 2, label: 'Tuesday', short: 'Day 2' },
    { id: 3, label: 'Wednesday', short: 'Day 3' },
    { id: 4, label: 'Thursday', short: 'Day 4' },
    { id: 5, label: 'Friday', short: 'Day 5' },
    { id: 6, label: 'Saturday', short: 'Day 6' },
];

export default function FocusPortal() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<FocusTab>('pomodoro');
    const [selectedSubject, setSelectedSubject] = useState<Subject>('polity');

    // Pomodoro Portal State
    const [pomodoroView, setPomodoroView] = useState<'grid' | 'session'>('grid');
    const [selectedWeek, setSelectedWeek] = useState(1);
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    // Calculate current week/day for defaults
    const currentContext = useMemo(() => {
        if (typeof window === 'undefined') return { week: 1, day: 1 };
        const BATCH_START_DATE = new Date('2026-01-12T00:00:00');
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - BATCH_START_DATE.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const week = Math.ceil(diffDays / 7);
        const day = (diffDays - 1) % 7 + 1;
        return { week: Math.max(1, week), day: Math.min(6, Math.max(1, day)) };
    }, []);

    // Load saved state or default
    React.useEffect(() => {
        // Load Week
        const savedWeek = localStorage.getItem('batch11_portal_week');
        if (savedWeek) setSelectedWeek(Number(savedWeek));
        else setSelectedWeek(currentContext.week);

        // Load Active Tab
        const savedTab = localStorage.getItem('batch11_active_tab');
        if (savedTab && ['pomodoro', 'subject_pomodoro', 'study', 'analytics', 'retention'].includes(savedTab)) {
            setActiveTab(savedTab as FocusTab);
        }

        // Load Selected Subject
        const savedSubject = localStorage.getItem('batch11_selected_subject');
        if (savedSubject && ['polity', 'history', 'geography', 'science'].includes(savedSubject)) {
            setSelectedSubject(savedSubject as Subject);
        }
    }, [currentContext]);

    // Save state on change
    const handleTabChange = (tab: FocusTab) => {
        setActiveTab(tab);
        localStorage.setItem('batch11_active_tab', tab);
    };

    const handleSubjectChange = (subject: Subject) => {
        setSelectedSubject(subject);
        localStorage.setItem('batch11_selected_subject', subject);
    };

    const handleDayClick = (dayId: number) => {
        setSelectedDay(dayId);
        setPomodoroView('session');
    };

    const tabs = [
        { id: 'pomodoro', label: 'Pomodoro Portal', icon: Timer, color: 'text-orange-500' },
        { id: 'subject_pomodoro', label: 'Subject Pomodoro', icon: Target, color: 'text-rose-500' },

        { id: 'study', label: 'Subject Study', icon: BookOpen, color: 'text-blue-500' },
        { id: 'analytics', label: 'Deep Reports', icon: BarChart3, color: 'text-purple-500' },
        { id: 'retention', label: 'Retention Tracker', icon: Brain, color: 'text-green-500' }
    ];

    return (
        <div className="min-h-screen bg-muted dark:bg-[#0a0a0a]">
            {/* Top Navigation Bar */}
            <div className="bg-card dark:bg-[#111] border-b border-border sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                <Brain className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-lg text-foreground hidden md:block">
                                Focus Command Center
                            </span>
                        </div>

                        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => handleTabChange(tab.id as FocusTab)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
                                            ${isActive
                                                ? 'bg-muted text-foreground shadow-sm ring-1 ring-gray-200 dark:ring-gray-700'
                                                : 'text-muted-foreground hover:text-muted-foreground dark:hover:text-muted-foreground hover:bg-muted dark:hover:bg-gray-900'
                                            }`}
                                    >
                                        <Icon className={`w-4 h-4 ${isActive ? tab.color : ''}`} />
                                        <span>{tab.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === 'pomodoro' && (
                            <div className="space-y-6">
                                {pomodoroView === 'grid' ? (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        {/* Header & Week Selector */}
                                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                                            <div>
                                                <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                                                    <Timer className="w-8 h-8 text-orange-500" />
                                                    Pomodoro Portal
                                                </h1>
                                                <p className="text-muted-foreground dark:text-muted-foreground mt-1">
                                                    Daily Focus & Evening Revision Hub
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-3 bg-card p-2 rounded-xl border shadow-sm">
                                                <span className="text-sm font-medium text-muted-foreground ml-2">Select Week:</span>
                                                <Select
                                                    value={selectedWeek.toString()}
                                                    onValueChange={(v) => {
                                                        setSelectedWeek(Number(v));
                                                        localStorage.setItem('batch11_portal_week', v);
                                                    }}
                                                >
                                                    <SelectTrigger className="w-[140px] border-none bg-transparent focus:ring-0 font-bold text-indigo-600">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {WEEKS.map(week => (
                                                            <SelectItem key={week.id} value={week.id.toString()}>
                                                                {week.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        {/* Day Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {DAYS.map((day) => {
                                                const isToday = selectedWeek === currentContext.week && day.id === currentContext.day;
                                                const absoluteDay = (selectedWeek - 1) * 7 + day.id;

                                                return (
                                                    <Card
                                                        key={day.id}
                                                        className={`border-2 cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden
                                                            ${isToday
                                                                ? 'border-orange-500 bg-orange-50/50 dark:bg-orange-900/10'
                                                                : 'border-transparent hover:border-orange-300 bg-card'
                                                            }
                                                        `}
                                                        onClick={() => handleDayClick(day.id)}
                                                    >
                                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                            <Timer className="w-24 h-24 text-orange-500" />
                                                        </div>

                                                        <CardContent className="p-6 relative z-10">
                                                            <div className="flex justify-between items-start mb-4">
                                                                <div>
                                                                    <div className="flex items-center gap-2 mb-1">
                                                                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide
                                                                            ${isToday ? 'bg-orange-100 text-orange-700' : 'bg-muted text-muted-foreground dark:text-muted-foreground'}
                                                                        `}>
                                                                            {day.short}
                                                                        </span>
                                                                        {isToday && <span className="flex items-center text-xs font-bold text-green-600 animate-pulse"><Flame className="w-3 h-3 mr-1" /> TODAY</span>}
                                                                    </div>
                                                                    <h3 className="text-xl font-bold text-foreground">
                                                                        {day.label}
                                                                    </h3>
                                                                </div>
                                                                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors text-orange-600">
                                                                    <Timer className="w-5 h-5" />
                                                                </div>
                                                            </div>

                                                            <div className="space-y-3 mb-6">
                                                                <div className="flex items-center text-sm text-muted-foreground dark:text-muted-foreground">
                                                                    <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                                                                    <span>Course Work & Study</span>
                                                                </div>
                                                                <div className="flex items-center text-sm text-muted-foreground dark:text-muted-foreground">
                                                                    <Moon className="w-4 h-4 mr-2 text-indigo-500" />
                                                                    <span>Evening Revision (PYQ)</span>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                                                <span className="text-xs font-semibold text-muted-foreground">Day {absoluteDay}</span>
                                                                <span className="text-sm font-bold text-orange-600 flex items-center group-hover:translate-x-1 transition-transform">
                                                                    Open Portal <ChevronRight className="w-4 h-4 ml-1" />
                                                                </span>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ) : (
                                    // SESSION VIEW (Timer)
                                    <div>
                                        <div className="mb-4">
                                            <Button
                                                variant="ghost"
                                                onClick={() => setPomodoroView('grid')}
                                                className="text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-white"
                                            >
                                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Pomodoro Portal
                                            </Button>
                                        </div>
                                        {selectedDay && (
                                            <PomodoroSessionView
                                                weekId={selectedWeek}
                                                dayId={selectedDay}
                                                showBackButton={false} // We handle back button above
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'subject_pomodoro' && (
                            <div className="space-y-6">
                                <SubjectPomodoro />
                            </div>
                        )}



                        {activeTab === 'study' && (
                            <div className="space-y-6">
                                {/* Study Tab Content (Preserved) */}
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-foreground">Subject Study</h2>
                                    <Select value={selectedSubject} onValueChange={(v) => handleSubjectChange(v as Subject)}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="polity">Indian Polity</SelectItem>
                                            <SelectItem value="history">Indian History</SelectItem>
                                            <SelectItem value="geography">Geography</SelectItem>
                                            <SelectItem value="science">Science & Tech</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {selectedSubject === 'polity' && <PolityHome embedded={true} />}
                                {selectedSubject === 'history' && <HistoryHome embedded={true} />}
                                {selectedSubject === 'geography' && <GeographyDashboard />}
                                {selectedSubject === 'science' && (
                                    <div className="p-12 text-center bg-card dark:bg-[#111] rounded-2xl border border-dashed border-border">
                                        <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                        <h3 className="text-lg font-medium text-foreground">
                                            Science & Tech Module
                                        </h3>
                                        <p className="text-muted-foreground">Content loading...</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'analytics' && (
                            <div className="space-y-6">
                                <Batch1DeepReport embedded={true} />
                            </div>
                        )}

                        {activeTab === 'retention' && (
                            <div className="space-y-6">
                                <RetentionDashboard />
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

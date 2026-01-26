"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Timer,
    BookOpen,
    BarChart3,
    Brain,
    LayoutDashboard,
    Settings,
    ChevronDown,
    Calendar,
    Mic
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Component Imports
import PomodoroSessionView from '@/components/batch1-1/pomodoro/PomodoroSessionView';
import PolityHome from '@/components/batch1/polity/PolityHome';
import RetentionDashboard from '@/components/retention/RetentionDashboard';
import FocusAnalyticsDashboard from '@/components/batch1/FocusAnalyticsDashboard';
// Assuming HistoryHome exists, if not we fall back to placeholders
// import HistoryHome from '@/components/batch1/history/HistoryHome'; 

// For Analytics, we might need to import the dashboard content
// import AnalyticsDashboard from '@/app/(student-portal)/student/batch1/analytics/page'; // This might be a page, so we handle carefullly.

// Helper to get current schedule
import { generateWeeklySchedule } from '@/components/batch1/polity/data/polity-schedule-data';
import DailyProtocolTimeline from '@/components/batch1/components/DailyProtocolTimeline';

type FocusTab = 'pomodoro' | 'study' | 'analytics' | 'retention';
type Subject = 'polity' | 'history' | 'geography' | 'science';

export default function FocusPortal() {
    const [activeTab, setActiveTab] = useState<FocusTab>('pomodoro');
    const [pomodoroView, setPomodoroView] = useState<'overview' | 'session'>('overview');
    const [selectedSubject, setSelectedSubject] = useState<Subject>('polity');

    const handleTimelineAction = (phaseId: number, link: string) => {
        // If "Start Session" (Phase 3) is clicked, switch to session view within this portal
        if (phaseId === 3) {
            setPomodoroView('session');
        } else {
            // Otherwise navigate to link (Evening, etc)
            window.location.href = link;
        }
    };


    // Calculate Week/Day for Pomodoro (Same logic as PolityScheduleView)
    const { weekId, dayId } = useMemo(() => {
        if (typeof window === 'undefined') return { weekId: 1, dayId: 1 };

        const BATCH_START_DATE = '2026-01-12T00:00:00';
        const startDateStr = localStorage.getItem('polity_start_calendar_date');
        const startDate = startDateStr ? new Date(startDateStr) : new Date(BATCH_START_DATE);

        const diffTime = (new Date().getTime() - startDate.getTime());
        const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
        const week = Math.floor(diffDays / 7) + 1;
        const day = (diffDays % 7) + 1;

        // Ensure effective range (Mon-Fri = 1-5, Sat=6, Sun=7)
        return { weekId: week, dayId: day > 5 ? 5 : day }; // Default to Friday if Weekend for Pomodoro context? Or handle 6/7. 
        // PomodoroSessionView likely expects 1-5 for standard sessions.
    }, []);

    const tabs = [
        { id: 'pomodoro', label: 'Pomodoro Portal', icon: Timer, color: 'text-orange-500' },
        { id: 'study', label: 'Subject Study', icon: BookOpen, color: 'text-blue-500' },
        { id: 'analytics', label: 'Deep Reports', icon: BarChart3, color: 'text-purple-500' },
        { id: 'retention', label: 'Retention Tracker', icon: Brain, color: 'text-green-500' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
            {/* Top Navigation Bar */}
            <div className="bg-white dark:bg-[#111] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                <Brain className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-lg text-gray-900 dark:text-white hidden md:block">
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
                                        onClick={() => setActiveTab(tab.id as FocusTab)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
                                            ${isActive
                                                ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-gray-700'
                                                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900'
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
                                {pomodoroView === 'overview' ? (
                                    <div>
                                        <div className="flex justify-between items-center mb-6">
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Daily Protocol</h2>
                                                <p className="text-gray-500">Select a phase to begin</p>
                                            </div>
                                            <Button
                                                variant="outline"
                                                onClick={() => setPomodoroView('session')}
                                                className="hidden md:flex"
                                            >
                                                <Timer className="mr-2 h-4 w-4" /> Go to Timer
                                            </Button>
                                        </div>
                                        <DailyProtocolTimeline
                                            weekId={weekId}
                                            dayId={dayId}
                                            onPhaseAction={handleTimelineAction}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <div className="mb-4">
                                            <Button
                                                variant="ghost"
                                                onClick={() => setPomodoroView('overview')}
                                                className="text-gray-500 hover:text-gray-900"
                                            >
                                                &larr; Back to Schedule
                                            </Button>
                                        </div>
                                        <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800 rounded-xl p-4 flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                                                <Timer className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                            </div>
                                            <div>
                                                <h2 className="font-bold text-orange-900 dark:text-orange-100">Live Focus Session</h2>
                                                <p className="text-sm text-orange-700 dark:text-orange-300">
                                                    Accessing 8 AM - 2 PM Schedule (Unlimited Access Mode)
                                                </p>
                                            </div>
                                        </div>
                                        <PomodoroSessionView weekId={weekId} dayId={dayId} showBackButton={false} />
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'study' && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Subject Study</h2>
                                    <div className="relative">
                                        <select
                                            value={selectedSubject}
                                            onChange={(e) => setSelectedSubject(e.target.value as Subject)}
                                            className="appearance-none bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white py-2 pl-4 pr-10 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="polity">Indian Polity</option>
                                            <option value="history">Indian History</option>
                                            <option value="geography">Geography</option>
                                            <option value="science">Science & Tech</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                    </div>
                                </div>

                                {selectedSubject === 'polity' ? (
                                    <PolityHome embedded={true} />
                                ) : (
                                    <div className="p-12 text-center bg-white dark:bg-[#111] rounded-2xl border border-dashed border-gray-300 dark:border-gray-800">
                                        <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                            {selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1)} Module
                                        </h3>
                                        <p className="text-gray-500">Content loading or placeholder...</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'analytics' && (
                            <div className="space-y-6">
                                <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                                            <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-purple-900 dark:text-purple-100 text-xl">Deep Analytics Report</h2>
                                            <p className="text-purple-700 dark:text-purple-300">
                                                Consolidated view of your Flashcards, Tests, Voice Notes, and Revision history.
                                            </p>
                                        </div>
                                    </div>

                                    <FocusAnalyticsDashboard />
                                </div>
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

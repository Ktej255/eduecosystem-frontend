"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

// Dynamic Imports for Isolation
const HistoryDashboard = dynamic(() => import('./HistoryDashboard'), {
    loading: () => <div className="p-4 text-amber-600">Loading Dashboard...</div>,
    ssr: false
});
const HistorySectionPlanner = dynamic(() => import('./HistorySectionPlanner'), {
    loading: () => <div className="p-4 text-indigo-600">Loading Planner...</div>,
    ssr: false
});
const SubjectPlanner = dynamic(() => import('../framework/SubjectPlanner'), {
    loading: () => <div className="p-4 text-blue-600">Loading Syllabus...</div>,
    ssr: false
});
const HistoryTimeline = dynamic(() => import('./HistoryTimeline'), {
    loading: () => <div className="p-4 text-green-600">Loading Timeline...</div>,
    ssr: false
});
const HistoryMainsPractice = dynamic(() => import('./HistoryMainsPractice'), {
    loading: () => <div className="p-4 text-red-600">Loading Mains...</div>,
    ssr: false
});
const HistoryVisuals = dynamic(() => import('./HistoryVisuals'), {
    loading: () => <div className="p-4 text-purple-600">Loading Visuals...</div>,
    ssr: false
});
const UniversalQuestionBank = dynamic(() => import('@/components/common/mcq/UniversalQuestionBank'), {
    loading: () => <div className="p-4 text-pink-600">Loading QB...</div>,
    ssr: false
});
const HistoryRevisionDashboard = dynamic(() => import('./revision/HistoryRevisionDashboard'), {
    loading: () => <div className="p-4 text-orange-600">Loading Revision...</div>,
    ssr: false
});

import { HISTORY_CONFIG } from './data/history-config';

export default function HistoryHome({ embedded = false }: { embedded?: boolean }) {
    const [view, setView] = useState<'safe' | 'dashboard' | 'planner' | 'syllabus' | 'timeline' | 'mains' | 'visuals' | 'qb' | 'revision'>('safe');
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-gray-50 p-6 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white border-2 border-dashed border-amber-300 rounded-xl p-8 text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                        <AlertTriangle className="text-amber-500" />
                        History Module - DEBUG MODE
                    </h1>
                    <p className="text-gray-500 mb-6">
                        HistoryHome caused a crash. Please test individual sub-components below.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        <Button variant={view === 'dashboard' ? 'default' : 'outline'} onClick={() => setView('dashboard')}>
                            Overview (Dashboard)
                        </Button>
                        <Button variant={view === 'planner' ? 'default' : 'outline'} onClick={() => setView('planner')}>
                            Study Planner
                        </Button>
                        <Button variant={view === 'revision' ? 'default' : 'outline'} onClick={() => setView('revision')}>
                            Revision Hub
                        </Button>
                        <Button variant={view === 'syllabus' ? 'default' : 'outline'} onClick={() => setView('syllabus')}>
                            Syllabus Map
                        </Button>
                        <Button variant={view === 'timeline' ? 'default' : 'outline'} onClick={() => setView('timeline')}>
                            Timeline
                        </Button>
                        <Button variant={view === 'visuals' ? 'default' : 'outline'} onClick={() => setView('visuals')}>
                            Visuals
                        </Button>
                        <Button variant={view === 'mains' ? 'default' : 'outline'} onClick={() => setView('mains')}>
                            Mains Practice
                        </Button>
                        <Button variant={view === 'qb' ? 'default' : 'outline'} onClick={() => setView('qb')}>
                            Question Bank
                        </Button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[400px] p-6 relative">
                    {view === 'safe' && <div className="text-center text-gray-400 mt-20">Select a module to test</div>}

                    {view === 'dashboard' && <HistoryDashboard />}

                    {view === 'planner' && <HistorySectionPlanner section="modern" />}

                    {view === 'revision' && <HistoryRevisionDashboard section="modern" />}

                    {view === 'syllabus' && <SubjectPlanner config={HISTORY_CONFIG} />}

                    {view === 'timeline' && <HistoryTimeline config={HISTORY_CONFIG} onSelectTopic={() => { }} />}

                    {view === 'visuals' && <HistoryVisuals />}

                    {view === 'mains' && <HistoryMainsPractice config={HISTORY_CONFIG} />}

                    {view === 'qb' && <UniversalQuestionBank initialSubject="history" />}
                </div>
            </div>
        </div>
    );
}

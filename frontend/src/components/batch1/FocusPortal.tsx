"use client";

import React, { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Loader2 } from 'lucide-react';

// Dynamic imports with explicit loading states
const PomodoroSessionView = dynamic(() => import('@/components/batch1-1/pomodoro/PomodoroSessionView'), {
    loading: () => <div className="p-4 bg-orange-50 text-orange-600">Loading Pomodoro Session...</div>,
    ssr: false
});

const SubjectPomodoro = dynamic(() => import('@/components/batch1-1/pomodoro/SubjectPomodoro'), {
    loading: () => <div className="p-4 bg-indigo-50 text-indigo-600">Loading Subject Pomodoro...</div>,
    ssr: false
});

const PolityHome = dynamic(() => import('@/components/batch1/polity/PolityHome'), {
    loading: () => <div className="p-4 bg-blue-50 text-blue-600">Loading Polity...</div>,
    ssr: false
});

const Batch1DeepReport = dynamic(() => import('@/components/batch1-1/reports/Batch1DeepReport'), {
    loading: () => <div className="p-4 bg-purple-50 text-purple-600">Loading Reports...</div>,
    ssr: false
});

// History Home (New potential culprit)
const HistoryHome = dynamic(() => import('@/components/batch1/history/HistoryHome'), {
    loading: () => <div className="p-4 bg-amber-50 text-amber-600">Loading History...</div>,
    ssr: false
});

export default function FocusPortal() {
    const [view, setView] = useState<'safe' | 'pomodoro' | 'subject' | 'polity' | 'reports' | 'history'>('safe');
    const [error, setError] = useState<string | null>(null);

    // Error boundary for immediate children
    const safeRender = (component: React.ReactNode) => {
        try {
            return component;
        } catch (e: any) {
            console.error("Component failed to render:", e);
            setError(e.message || "Unknown error");
            return <div className="text-red-500 font-bold p-4">Component Crashed: {e.message}</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                        <AlertTriangle className="text-orange-500" />
                        Focus Portal - DEBUG MODE
                    </h1>
                    <p className="text-gray-500 mb-6">
                        The standard Focus Portal layout is disabled.
                        Please load components individually to identify the crasher.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        <Button
                            variant={view === 'pomodoro' ? 'default' : 'outline'}
                            onClick={() => setView('pomodoro')}
                            className="border-orange-200 hover:bg-orange-50 text-orange-700"
                        >
                            Load Pomodoro Session
                        </Button>

                        <Button
                            variant={view === 'subject' ? 'default' : 'outline'}
                            onClick={() => setView('subject')}
                            className="border-indigo-200 hover:bg-indigo-50 text-indigo-700"
                        >
                            Load Subject Pomodoro
                        </Button>

                        <Button
                            variant={view === 'polity' ? 'default' : 'outline'}
                            onClick={() => setView('polity')}
                            className="border-blue-200 hover:bg-blue-50 text-blue-700"
                        >
                            Load Polity
                        </Button>

                        <Button
                            variant={view === 'history' ? 'default' : 'outline'}
                            onClick={() => setView('history')}
                            className="border-amber-200 hover:bg-amber-50 text-amber-700"
                        >
                            Load History
                        </Button>

                        <Button
                            variant={view === 'reports' ? 'default' : 'outline'}
                            onClick={() => setView('reports')}
                            className="border-purple-200 hover:bg-purple-50 text-purple-700"
                        >
                            Load Reports
                        </Button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[400px] p-6 relative">
                    {view === 'safe' && (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            Select a component above to test.
                        </div>
                    )}

                    {view === 'pomodoro' && (
                        <div className="animate-in fade-in">
                            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Testing Pomodoro Session View</h3>
                            <PomodoroSessionView weekId={1} dayId={1} />
                        </div>
                    )}

                    {view === 'subject' && (
                        <div className="animate-in fade-in">
                            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Testing Subject Pomodoro</h3>
                            <SubjectPomodoro />
                        </div>
                    )}

                    {view === 'polity' && (
                        <div className="animate-in fade-in">
                            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Testing Polity Home</h3>
                            <PolityHome />
                        </div>
                    )}

                    {view === 'history' && (
                        <div className="animate-in fade-in">
                            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Testing History Home</h3>
                            <HistoryHome />
                        </div>
                    )}

                    {view === 'reports' && (
                        <div className="animate-in fade-in">
                            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Testing Deep Reports</h3>
                            <Batch1DeepReport />
                        </div>
                    )}
                </div>

                {error && (
                    <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                        <p className="font-bold">Error Detected:</p>
                        <pre className="text-xs mt-2 overflow-auto">{error}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}

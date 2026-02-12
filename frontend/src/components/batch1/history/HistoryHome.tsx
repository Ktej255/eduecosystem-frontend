"use client";

import React, { useState } from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { HISTORY_CONFIG } from './data/history-config';
import HistoryTimeline from './HistoryTimeline';
import HistoryMainsPractice from './HistoryMainsPractice';
import HistoryDashboard from './HistoryDashboard';
import HistoryVisuals from './HistoryVisuals';
import HistoryQuestionBank from './HistoryQuestionBank';
import UniversalQuestionBank from '@/components/common/mcq/UniversalQuestionBank';
import { Layout, Clock, PenTool, BookOpen, Map, Target, Landmark, Scroll, Flag, Sparkles, Flame, FileQuestion } from 'lucide-react';
import HistorySectionPlanner from './HistorySectionPlanner';
import { HistorySection } from './data/history-schedule-registry';

export default function HistoryHome({ embedded = false }: { embedded?: boolean }) {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'overview' | 'syllabus' | 'timeline' | 'mains' | 'visuals' | 'question_bank'>('dashboard');
    const [selectedSection, setSelectedSection] = useState<HistorySection>('modern');

    const handleTopicSelect = (topicId: number) => {
        console.log("Timeline selected topic:", topicId);
        setActiveTab('syllabus');
    };

    const sections = [
        { id: 'modern', name: 'Modern', icon: Flag, color: 'text-indigo-500' },
        { id: 'medieval', name: 'Medieval', icon: Scroll, color: 'text-purple-500' },
        { id: 'ancient', name: 'Ancient', icon: Landmark, color: 'text-amber-500' },
        { id: 'art_culture', name: 'Art&Culture', icon: Sparkles, color: 'text-emerald-500' },
    ];

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a]">
            {/* Header */}
            {!embedded && (
                <div className="bg-white border-b border-neutral-200 dark:bg-black dark:border-neutral-800 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center justify-between h-16">
                            <div className="font-bold text-xl text-amber-700 dark:text-amber-500 tracking-tight flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <span>HISTORY<span className="text-neutral-400 font-light">HUB</span></span>
                            </div>

                            <div className="flex space-x-1">
                                <button
                                    onClick={() => setActiveTab('dashboard')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'dashboard'
                                        ? 'bg-indigo-600 text-white shadow-lg'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >0
                                    Study Dashboard
                                </button>
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'overview'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    <Layout className="w-4 h-4" />
                                    Overview
                                </button>
                                <button
                                    onClick={() => setActiveTab('syllabus')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'syllabus'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    <BookOpen className="w-4 h-4" />
                                    Syllabus Map
                                </button>
                                <button
                                    onClick={() => setActiveTab('timeline')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hidden md:flex items-center gap-2 ${activeTab === 'timeline'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    <Layout className="w-4 h-4" />
                                    Timeline
                                </button>
                                <button
                                    onClick={() => setActiveTab('mains')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hidden md:flex items-center gap-2 ${activeTab === 'mains'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    <PenTool className="w-4 h-4" />
                                    Mains
                                </button>
                                <button
                                    onClick={() => setActiveTab('visuals')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hidden md:flex items-center gap-2 ${activeTab === 'visuals'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    <Map className="w-4 h-4" />
                                    Visuals
                                </button>
                                <button
                                    onClick={() => setActiveTab('question_bank')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hidden md:flex items-center gap-2 ${activeTab === 'question_bank'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    <FileQuestion className="w-4 h-4" />
                                    Question Bank
                                </button>
                                <button
                                    onClick={() => window.location.href = '/student/batch1/current-affairs?subject=History'}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all items-center gap-2 flex text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20`}
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Current Affairs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

            {/* Sub-Nav for Study Dashboard */}
            {
                activeTab === 'dashboard' && (
                    <div className="bg-white/50 backdrop-blur-sm border-b border-neutral-200 dark:bg-neutral-900/50 dark:border-neutral-800 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-center gap-8">
                            {sections.map((sec) => (
                                <button
                                    key={sec.id}
                                    onClick={() => setSelectedSection(sec.id as HistorySection)}
                                    className={`h-full px-2 text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all border-b-2
                                    ${selectedSection === sec.id
                                            ? `border-indigo-600 ${sec.color} scale-110`
                                            : 'border-transparent text-gray-400 hover:text-gray-600'
                                        }`}
                                >
                                    <sec.icon className="w-3.5 h-3.5" />
                                    {sec.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )
            }

            <div className="w-full">
                {activeTab === 'syllabus' && (
                    <SubjectPlanner config={HISTORY_CONFIG} />
                )}

                {activeTab === 'timeline' && (
                    <div className="max-w-7xl mx-auto p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center py-8">
                            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">Detailed Timeline</h1>
                            <p className="text-neutral-500">Navigate through the ages of Indian History</p>
                        </div>
                        <HistoryTimeline config={HISTORY_CONFIG} onSelectTopic={handleTopicSelect} />
                    </div>
                )}

                {activeTab === 'mains' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <HistoryMainsPractice config={HISTORY_CONFIG} />
                    </div>
                )}

                {activeTab === 'dashboard' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <HistorySectionPlanner section={selectedSection} />
                    </div>
                )}

                {activeTab === 'overview' && (
                    <HistoryDashboard />
                )}

                {activeTab === 'visuals' && (
                    <HistoryVisuals />
                )}

                {activeTab === 'question_bank' && (
                    <UniversalQuestionBank />
                )}
            </div>
        </div >
    );
}

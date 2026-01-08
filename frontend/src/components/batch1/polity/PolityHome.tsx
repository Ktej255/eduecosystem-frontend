"use client";

import React, { useState } from 'react';
import { Book, ChevronRight, Clock, Sparkles, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { POLITY_MODULES, POLITY_TOPICS, getModuleColors, getTopicsByModule } from './data/polity-registry';

export default function PolityHome({ embedded = false }: { embedded?: boolean }) {
    const [selectedModule, setSelectedModule] = useState<string | null>(null);

    // Calculate overall stats
    const totalTopicsImplemented = POLITY_TOPICS.length;
    const totalCA = POLITY_TOPICS.reduce((sum, t) => sum + t.currentAffairs.length, 0);
    const highPriorityTopics = POLITY_TOPICS.filter(t => t.priority === 'High').length;

    return (
        <div className={`min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a] ${embedded ? 'min-h-0 bg-transparent' : ''}`}>
            {/* Hero Section - Hidden in embedded mode */}
            {!embedded && (
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
                    <div className="max-w-6xl mx-auto px-6 py-12">
                        <Link href="/student/batch1" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 text-sm font-medium">
                            <ChevronRight className="w-4 h-4 rotate-180" />
                            Back to Dashboard
                        </Link>

                        <div className="flex items-center gap-2 text-blue-200 text-sm mb-2">
                            <Book className="w-4 h-4" />
                            <span>UPSC Prelims 2026 • Cycle 1</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">
                            Indian Polity & Governance
                        </h1>
                        <p className="text-xl text-blue-100 mb-6">
                            The Smart 50 Module: Laxmikanth + Current Affairs (Jan 2024 – May 2026)
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                                <div className="text-3xl font-bold">50</div>
                                <div className="text-blue-200 text-sm">Topics</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                                <div className="text-3xl font-bold">9</div>
                                <div className="text-blue-200 text-sm">Modules</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                                <div className="text-3xl font-bold flex items-center gap-1">
                                    {totalCA}
                                    <Sparkles className="w-5 h-5 text-yellow-400" />
                                </div>
                                <div className="text-blue-200 text-sm">Current Affairs</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                                <div className="text-3xl font-bold flex items-center gap-1">
                                    {highPriorityTopics}
                                    <Target className="w-5 h-5 text-red-400" />
                                </div>
                                <div className="text-blue-200 text-sm">High Priority</div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link href="/student/batch1/content-map">
                                <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transition-all">
                                    <TrendingUp className="w-5 h-5" />
                                    View Syllabus Tracker & Content Map
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Module Navigation */}
            <div className="max-w-6xl mx-auto px-6 py-8">
                <h2 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-6">
                    Select Module
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {POLITY_MODULES.map((module) => {
                        const colors = getModuleColors(module.color);
                        const topics = getTopicsByModule(module.id);
                        const [start, end] = module.topicRange;
                        const totalTopics = end - start + 1;
                        const isActive = topics.length > 0;

                        return (
                            <button
                                key={module.id}
                                onClick={() => isActive && setSelectedModule(module.id)}
                                disabled={!isActive}
                                className={`text-left p-5 rounded-2xl border-2 transition-all ${isActive
                                    ? `hover:shadow-lg hover:border-blue-500 bg-white dark:bg-[#111] border-gray-200 dark:border-gray-800`
                                    : `opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800`
                                    }`}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center text-2xl text-white`}>
                                        {module.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Module {module.id}</div>
                                        <div className="font-bold text-[#1F2937] dark:text-white">{module.title}</div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{module.description}</p>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">
                                        Topics {start}-{end}
                                    </span>
                                    {isActive ? (
                                        <span className="flex items-center gap-1 text-green-600">
                                            <TrendingUp className="w-4 h-4" />
                                            {topics.length}/{totalTopics} Ready
                                        </span>
                                    ) : (
                                        <span className="text-gray-400">Coming Soon</span>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Selected Module Topics */}
            {selectedModule && (
                <div className="max-w-6xl mx-auto px-6 pb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-[#1F2937] dark:text-white">
                            Module {selectedModule} Topics
                        </h2>
                        <button
                            onClick={() => setSelectedModule(null)}
                            className="text-blue-600 hover:underline text-sm"
                        >
                            ← Back to Modules
                        </button>
                    </div>

                    <div className="space-y-3">
                        {getTopicsByModule(selectedModule).map((topic) => (
                            <Link
                                key={topic.id}
                                href={`/student/batch1/polity/topic/${topic.id}`}
                                className="block bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-lg hover:border-blue-500 transition-all"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
                                                Topic {topic.id}
                                            </span>
                                            {topic.priority === 'High' && (
                                                <span className="text-xs px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                                                    High Priority
                                                </span>
                                            )}
                                            {topic.currentAffairs.length > 0 && (
                                                <span className="text-xs px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 flex items-center gap-1">
                                                    <Sparkles className="w-3 h-3" />
                                                    {topic.currentAffairs.length} CA
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#1F2937] dark:text-white mb-1">
                                            {topic.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {topic.staticFocus}
                                        </p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-400 mt-2" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Quick Access - All Topics */}
            {!selectedModule && (
                <div className="max-w-6xl mx-auto px-6 pb-12">
                    <h2 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-6">
                        Recently Added Topics
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {POLITY_TOPICS.slice(0, 6).map((topic) => (
                            <Link
                                key={topic.id}
                                href={`/student/batch1/polity/topic/${topic.id}`}
                                className="flex items-center gap-4 bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:shadow-lg hover:border-blue-500 transition-all"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold">
                                    {topic.id}
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-[#1F2937] dark:text-white">{topic.title}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {topic.keyConcepts.length} concepts • {topic.currentAffairs.length} CA updates
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

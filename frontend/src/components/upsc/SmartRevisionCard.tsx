"use client";

import React from 'react';
import { Brain, AlertTriangle, ChevronRight, RefreshCw } from 'lucide-react';
import { useGamification } from '@/context/GamificationContext';
import Link from 'next/link';

export default function SmartRevisionCard() {
    const { getReviewQueue, getWeakTopics } = useGamification();

    const reviewQueue = getReviewQueue(5);
    const weakTopics = getWeakTopics().slice(0, 3);

    if (reviewQueue.length === 0 && weakTopics.length === 0) {
        return (
            <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-2xl p-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Brain className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-green-700 dark:text-green-400">All Caught Up!</h3>
                        <p className="text-sm text-green-600 dark:text-green-500">No pending reviews right now.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white">
                <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    <h3 className="font-bold">Smart Revision</h3>
                </div>
                <p className="text-xs text-amber-100 mt-1">AI-powered spaced repetition</p>
            </div>

            <div className="p-4 space-y-4">
                {/* Review Queue */}
                {reviewQueue.length > 0 && (
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <RefreshCw className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-bold">Due for Review ({reviewQueue.length})</span>
                        </div>
                        <div className="space-y-2">
                            {reviewQueue.slice(0, 3).map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/10 rounded-xl"
                                >
                                    <div className="text-sm">
                                        <span className="font-medium">{item.subjectId}</span>
                                        <span className="text-gray-500"> › {item.topicId}</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Weak Topics */}
                {weakTopics.length > 0 && (
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                            <span className="text-sm font-bold">Weak Areas</span>
                        </div>
                        <div className="space-y-2">
                            {weakTopics.map((topic, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/10 rounded-xl"
                                >
                                    <div>
                                        <div className="text-sm font-medium">{topic.topicId}</div>
                                        <div className="text-xs text-gray-500">{topic.subjectId}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-red-600">{topic.score}%</div>
                                        <div className="text-xs text-gray-400">accuracy</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {(reviewQueue.length > 0 || weakTopics.length > 0) && (
                    <Link
                        href="/student/revision"
                        className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-bold transition-colors"
                    >
                        Start Smart Revision
                    </Link>
                )}
            </div>
        </div>
    );
}

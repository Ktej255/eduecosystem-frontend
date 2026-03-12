"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SubjectConfig, SubjectTopic } from '../../common/framework/SubjectPlanner';
import { ChevronRight, Landmark } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming cn utility exists, usually does in this stack

interface HistoryTimelineProps {
    config: SubjectConfig;
    onSelectTopic: (topicId: number) => void;
}

export default function HistoryTimeline({ config, onSelectTopic }: HistoryTimelineProps) {
    // Sort topics by ID as proxy for chronology
    const sortedTopics = [...config.topics].sort((a, b) => Number(a.id) - Number(b.id));

    return (
        <div className="w-full bg-neutral-900/5 dark:bg-black/20 p-6 rounded-3xl overflow-x-auto">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-amber-600" />
                Chronological Timeline
            </h3>

            <div className="relative min-w-[max-content] pt-8 pb-4 px-4">
                {/* Connecting Line */}
                <div className="absolute top-[3.25rem] left-0 w-full h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 rounded-full opacity-30" />

                <div className="flex gap-8 relative z-10">
                    {sortedTopics.map((topic: SubjectTopic, index: number) => {
                        // Find module for color/context
                        const module = config.modules.find((m: any) => m.id === topic.moduleId);
                        const isHighPriority = topic.priority === 'High';

                        return (
                            <motion.div
                                key={topic.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative flex flex-col items-center w-48 shrink-0 cursor-pointer"
                                onClick={() => onSelectTopic(Number(topic.id))}
                            >
                                {/* Year/Era Marker (Placeholder logic for now) */}
                                <div className="mb-3 px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs font-bold rounded-full border border-amber-200 dark:border-amber-800/50">
                                    Topic {topic.id}
                                </div>

                                {/* Node */}
                                <div className={cn(
                                    "w-6 h-6 rounded-full border-4 transition-all duration-300 mb-4 z-10 relative",
                                    isHighPriority
                                        ? "bg-amber-500 border-white dark:border-neutral-900 shadow-[0_0_0_4px_rgba(245,158,11,0.3)]"
                                        : "bg-neutral-400 border-white dark:border-neutral-900"
                                    ,
                                    "group-hover:scale-125 group-hover:bg-amber-600"
                                )}>
                                    {/* Pulse effect for high priority */}
                                    {isHighPriority && (
                                        <div className="absolute inset-0 rounded-full animate-ping bg-amber-500 opacity-20" />
                                    )}
                                </div>

                                {/* Card */}
                                <div className="w-full bg-card dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-1 group-hover:border-amber-500/50">
                                    <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 mb-1 leading-tight">
                                        {topic.title}
                                    </h4>
                                    <p className="text-[10px] text-neutral-500 line-clamp-2">
                                        {topic.staticFocus}
                                    </p>

                                    {topic.mainsQuestions && topic.mainsQuestions.length > 0 && (
                                        <div className="mt-2 flex items-center gap-1 text-[10px] font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded w-fit">
                                            <span>Mains Qs</span>
                                        </div>
                                    )}
                                </div>

                                {/* Link to next if not last */}
                                {index < sortedTopics.length - 1 && (
                                    <div className="absolute top-[3.25rem] right-[-2rem] w-8 flex justify-center items-center">
                                        <ChevronRight className="w-4 h-4 text-neutral-300" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

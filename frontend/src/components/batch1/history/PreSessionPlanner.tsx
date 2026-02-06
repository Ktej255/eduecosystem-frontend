
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    BookOpen,
    CheckCircle2,
    Target,
    ArrowRight,
    AlertCircle,
    Brain,
    XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { LAXMIKANTH_CHAPTERS } from '@/components/batch1/polity/data/polity-schedule-data';

// --- Interfaces ---
interface PreSessionPlannerProps {
    isOpen: boolean;
    onClose: () => void;
    onStartSession: (selectedChapterIds: number[]) => void;
    scheduledChapterIds: number[];
    weekId: number;
    dayId: number;
    subject?: 'history' | 'polity';
}

interface ChapterItem {
    id: number;
    label: string;
    isCarryForward?: boolean;
}

export default function PreSessionPlanner({
    isOpen,
    onClose,
    onStartSession,
    scheduledChapterIds,
    weekId,
    dayId,
    subject = 'history'
}: PreSessionPlannerProps) {
    const [selectedChapters, setSelectedChapters] = useState<number[]>([]);
    const [step, setStep] = useState<'plan' | 'confirm'>('plan');
    const [carryForwardChapters, setCarryForwardChapters] = useState<ChapterItem[]>([]);

    // Load any carried forward chapters from previous days
    useEffect(() => {
        if (isOpen) {
            // Load carry forward queue
            const queueKey = `batch1_${subject}_carry_forward_queue`;
            const savedQueue = localStorage.getItem(queueKey);
            let queue: number[] = savedQueue ? JSON.parse(savedQueue) : [];

            // Map IDs to labels
            const mappedQueue = queue.map(id => ({
                id,
                label: getChapterLabel(id, subject),
                isCarryForward: true
            }));

            setCarryForwardChapters(mappedQueue);

            // Auto-select scheduled + carry forward
            setSelectedChapters([...scheduledChapterIds, ...queue]);
        }
    }, [isOpen, subject, scheduledChapterIds]);

    const getChapterLabel = (id: number, sub: string) => {
        if (sub === 'polity') {
            const ch = LAXMIKANTH_CHAPTERS?.find(c => c.chapter === id);
            return ch ? `Ch ${id}: ${ch.topic}` : `Chapter ${id}`;
        }
        // For History, we might need a lookup map, for now generic
        return `Chapter ${id} (History)`;
    };

    const toggleChapter = (id: number) => {
        setSelectedChapters(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    const handleConfirm = () => {
        // Calculate what was NOT selected from the Scheduled list
        // These go into carry forward
        const unselected = scheduledChapterIds.filter(id => !selectedChapters.includes(id));

        if (unselected.length > 0) {
            const queueKey = `batch1_${subject}_carry_forward_queue`;
            // Get existing, add new unique
            const saved = localStorage.getItem(queueKey);
            const currentQueue = saved ? JSON.parse(saved) : [];
            const newQueue = [...new Set([...currentQueue, ...unselected])];

            localStorage.setItem(queueKey, JSON.stringify(newQueue));

            toast({
                title: "Schedule Updated",
                description: `${unselected.length} chapters moved to tomorrow's carry-forward list.`,
                variant: "default" // Blue info
            });
        }

        // Also remove any selected "carry forward" items from the queue (since they are now being attempted)
        // Wait, logic: If I select a carry-forward item, does it stay in queue until DONE? 
        // Or do we assume 'planning to do' removes it from 'backlog'?
        // Better: Remove from backlog now. If they fail, they might need to re-add manually or we auto-detect failure later.
        // For now, assume 'Selecting' means 'Will Attempt', so remove from Carry Forward Queue.

        const selectedCarryForward = carryForwardChapters
            .map(c => c.id)
            .filter(id => selectedChapters.includes(id));

        if (selectedCarryForward.length > 0) {
            const queueKey = `batch1_${subject}_carry_forward_queue`;
            const saved = localStorage.getItem(queueKey);
            if (saved) {
                const currentQueue: number[] = JSON.parse(saved);
                const remaining = currentQueue.filter(id => !selectedCarryForward.includes(id));
                // Also add the unselected scheduled ones we just calculated? 
                // Yes, we did that above. But we might have a race/overwrite if we are not careful.
                // Correct logic: 
                // NewQueue = (OldQueue - SelectedCF) + UnselectedScheduled

                const finalQueue = [
                    ...remaining,
                    ...unselected
                ];
                const uniqueFinal = [...new Set(finalQueue)];
                localStorage.setItem(queueKey, JSON.stringify(uniqueFinal));
            }
        }

        onStartSession(selectedChapters);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                >
                    <div className="p-6 bg-gradient-to-br from-indigo-600 to-violet-700 text-white">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <Target className="h-5 w-5" />
                            Session Planner
                        </h2>
                        <p className="text-indigo-100 text-sm mt-1">
                            Commit to your goals. What will you cover today?
                        </p>
                    </div>

                    <div className="p-6 max-h-[60vh] overflow-y-auto">
                        <div className="space-y-6">
                            {/* Scheduled Today Section */}
                            <div>
                                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Calendar className="h-4 w-4" /> Scheduled for Today
                                </h3>
                                <div className="space-y-2">
                                    {scheduledChapterIds.map(id => (
                                        <div
                                            key={id}
                                            onClick={() => toggleChapter(id)}
                                            className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between group
                                                ${selectedChapters.includes(id)
                                                    ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800'
                                                    : 'bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 opacity-60 hover:opacity-100'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors
                                                    ${selectedChapters.includes(id)
                                                        ? 'bg-indigo-600 border-indigo-600 text-white'
                                                        : 'border-zinc-400 text-transparent'
                                                    }`}
                                                >
                                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                                </div>
                                                <span className={`font-medium ${selectedChapters.includes(id) ? 'text-indigo-900 dark:text-indigo-100' : 'text-zinc-600 dark:text-zinc-400'}`}>
                                                    {getChapterLabel(id, subject)}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                    {scheduledChapterIds.length === 0 && (
                                        <p className="text-sm text-zinc-400 italic pl-2">No chapters scheduled explicitly.</p>
                                    )}
                                </div>
                            </div>

                            {/* Carry Forward Section */}
                            {carryForwardChapters.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <AlertCircle className="h-4 w-4" /> Carry Forward (Backlog)
                                    </h3>
                                    <div className="space-y-2">
                                        {carryForwardChapters.map(chapter => (
                                            <div
                                                key={chapter.id}
                                                onClick={() => toggleChapter(chapter.id)}
                                                className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between group
                                                    ${selectedChapters.includes(chapter.id)
                                                        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
                                                        : 'bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 opacity-60 hover:opacity-100'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors
                                                        ${selectedChapters.includes(chapter.id)
                                                            ? 'bg-amber-600 border-amber-600 text-white'
                                                            : 'border-zinc-400 text-transparent'
                                                        }`}
                                                    >
                                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                                    </div>
                                                    <span className={`font-medium ${selectedChapters.includes(chapter.id) ? 'text-amber-900 dark:text-amber-100' : 'text-zinc-600 dark:text-zinc-400'}`}>
                                                        {chapter.label}
                                                    </span>
                                                </div>
                                                <span className="text-[10px] uppercase font-bold text-amber-600 px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded">
                                                    Due
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Stats */}
                            <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex justify-between items-center text-sm">
                                <span className="text-zinc-500">Total Selected:</span>
                                <span className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">
                                    {selectedChapters.length} Chapters
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-3">
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            onClick={handleConfirm}
                            disabled={selectedChapters.length === 0}
                            className={`px-6 ${selectedChapters.length > 0 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-zinc-400'}`}
                        >
                            Start Session <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

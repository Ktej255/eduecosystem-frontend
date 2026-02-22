"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, HelpCircle, AlertTriangle, ThumbsUp } from "lucide-react";
import { getChapterConfidence, setChapterConfidence, markChapterComplete } from "@/services/progressStorage";
import { toast } from "sonner";

interface ConfidencePollProps {
    chapterId: string;
    onPollSubmit?: () => void;
}

export default function ConfidencePoll({ chapterId, onPollSubmit }: ConfidencePollProps) {
    const [confidence, setConfidence] = useState<'high' | 'medium' | 'low' | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const saved = getChapterConfidence(chapterId);
        if (saved) {
            setConfidence(saved);
        }
    }, [chapterId]);

    const handleSelect = (level: 'high' | 'medium' | 'low') => {
        setChapterConfidence(chapterId, level);
        markChapterComplete(chapterId); // Log to completedChapters + chapterLogs for retention tracking
        setConfidence(level);
        setIsSubmitted(true);
        toast.success("Confidence level saved!");
        if (onPollSubmit) onPollSubmit();
    };

    if (confidence && !isSubmitted) {
        // If already has a value on load, show it as selected state (optional, or just show the buttons acting as 'update')
        // For now, let's just let them update it.
    }

    return (
        <div className="w-full max-w-md mx-auto mt-8 p-6 bg-card rounded-xl border border-border shadow-sm text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
                How confident do you feel?
            </h3>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-6">
                Your feedback helps tailor your revision schedule.
            </p>

            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => handleSelect('low')}
                    className={`
                        flex flex-col items-center gap-2 p-3 rounded-lg transition-all w-24
                        ${confidence === 'low'
                            ? 'bg-red-100 text-red-700 ring-2 ring-red-500 ring-offset-2 dark:ring-offset-slate-900'
                            : 'bg-muted text-muted-foreground hover:bg-red-50 hover:text-red-600'}
                    `}
                >
                    <AlertTriangle className="w-6 h-6" />
                    <span className="text-xs font-medium">Low</span>
                </button>

                <button
                    onClick={() => handleSelect('medium')}
                    className={`
                        flex flex-col items-center gap-2 p-3 rounded-lg transition-all w-24
                        ${confidence === 'medium'
                            ? 'bg-amber-100 text-amber-700 ring-2 ring-amber-500 ring-offset-2 dark:ring-offset-slate-900'
                            : 'bg-muted text-muted-foreground hover:bg-amber-50 hover:text-amber-600'}
                    `}
                >
                    <HelpCircle className="w-6 h-6" />
                    <span className="text-xs font-medium">Medium</span>
                </button>

                <button
                    onClick={() => handleSelect('high')}
                    className={`
                        flex flex-col items-center gap-2 p-3 rounded-lg transition-all w-24
                        ${confidence === 'high'
                            ? 'bg-green-100 text-green-700 ring-2 ring-green-500 ring-offset-2 dark:ring-offset-slate-900'
                            : 'bg-muted text-muted-foreground hover:bg-green-50 hover:text-green-600'}
                    `}
                >
                    <ThumbsUp className="w-6 h-6" />
                    <span className="text-xs font-medium">High</span>
                </button>
            </div>

            {isSubmitted && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center justify-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 py-2 rounded-lg"
                >
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Feedback recorded</span>
                </motion.div>
            )}
        </div>
    );
}

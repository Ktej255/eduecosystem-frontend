"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { loadCompiledMCQs } from '@/components/batch1/history/data/spectrum-mcq-loader';
import HistoryMCQSession from '@/components/batch1/history/HistoryMCQSession';
import { MCQ } from '@/types/mcq';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { upscSynapseService } from '@/lib/upsc-synapse-service';

function MCQDrillContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [questions, setQuestions] = useState<MCQ[]>([]);
    const [loading, setLoading] = useState(true);

    const chapterIds = searchParams.get('chapters')?.split(',').map(Number) || [];
    const limit = Number(searchParams.get('limit')) || 60;
    const subject = searchParams.get('subject') || 'History';
    const section = searchParams.get('section') || 'modern';

    useEffect(() => {
        async function fetchQuestions() {
            let ids = chapterIds;

            // If empty (Day 15 Full Syllabus), load correct range based on subject/section
            if (ids.length === 0 || (ids.length === 1 && ids[0] === 0)) {
                if (section === 'medieval') {
                    ids = Array.from({ length: 18 }, (_, i) => i + 1);
                } else if (section === 'ancient') {
                    ids = Array.from({ length: 15 }, (_, i) => i + 1);
                } else if (section === 'art_culture') {
                    ids = Array.from({ length: 15 }, (_, i) => i + 1);
                } else {
                    ids = Array.from({ length: 39 }, (_, i) => i + 1);
                }
            }

            const qs = await loadCompiledMCQs(ids, limit, section);
            setQuestions(qs);
            setLoading(false);
        }
        fetchQuestions();
    }, [searchParams, subject, section]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                    <Loader2 className="w-12 h-12 text-indigo-600" />
                </motion.div>
                <div className="mt-4 font-bold text-gray-500 animate-pulse">
                    Compiling {subject} Drill...
                </div>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="text-xl font-bold text-gray-800 dark:text-gray-200">No questions found for {subject} chapters {chapterIds.join(', ')}.</div>
                <p className="text-sm text-gray-500 mt-2">Check if MCQ content files exist in the data/mcqs directory.</p>
                <button
                    onClick={() => router.back()}
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-xl"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="h-screen bg-gray-50 dark:bg-black p-4 md:p-8">
            <HistoryMCQSession
                questions={questions}
                title={`${subject} Drill: ${chapterIds.length || 'Full'} Chapters`}
                onComplete={async (results) => {
                    console.log("Drill Complete:", results);

                    try {
                        const profile = await upscSynapseService.getProfile();

                        // Group results by chapter
                        const chapterStats: Record<number, { correct: number; total: number }> = {};

                        results.forEach(res => {
                            const question = questions.find(q => q.id === res.questionId);
                            const chId = question?.chapterId ? Number(question.chapterId) : null;

                            if (chId) {
                                if (!chapterStats[chId]) chapterStats[chId] = { correct: 0, total: 0 };
                                chapterStats[chId].total++;
                                if (res.isCorrect) chapterStats[chId].correct++;
                            }
                        });

                        // Sync each chapter result to backend
                        await Promise.all(Object.entries(chapterStats).map(([chId, stats]) => {
                            const accuracy = Math.round((stats.correct / stats.total) * 100);
                            return upscSynapseService.logGapAnalysis({
                                profile_id: profile.id,
                                chapter_id: Number(chId),
                                subject: subject,
                                status: accuracy >= 70 ? "mastered" : "knowledge_gap",
                                recall_accuracy: accuracy
                            });
                        }));

                        // Also store locally for Deep Report
                        const timestamp = new Date().toISOString();
                        const totalScore = Math.round((results.filter(r => r.isCorrect).length / results.length) * 100);

                        localStorage.setItem(`${subject.replace(/\s+/g, '_').toLowerCase()}_drill_${Date.now()}`, JSON.stringify({
                            type: 'HISTORY_DRILL',
                            subject,
                            timestamp,
                            score: totalScore,
                            totalQuestions: results.length,
                            correctCount: results.filter(r => r.isCorrect).length,
                            chapters: chapterIds
                        }));

                        alert("Drill completed! Performance synced with Synapse Engine.");
                    } catch (err) {
                        console.error("Failed to sync drill results:", err);
                        alert("Drill completed, but failed to sync results to backend.");
                    }

                    router.push('/student/batch1/history');
                }}
                onCancel={() => {
                    if (confirm("Are you sure you want to cancel? Progress will be lost.")) {
                        router.push('/student/batch1/history');
                    }
                }}
            />
        </div>
    );
}

export default function MCQDrillPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MCQDrillContent />
        </Suspense>
    );
}

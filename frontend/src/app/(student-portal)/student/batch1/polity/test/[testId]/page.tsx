"use client";

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import CycleMCQs from '@/components/batch1-1/pomodoro/CycleMCQs';
import { POLITY_PAPER_1_JAN_31 } from '@/components/batch1/polity/data/tests/polity-paper1-jan31';
import { POLITY_PAPER_2_JAN_31 } from '@/components/batch1/polity/data/tests/polity-paper2-jan31';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PolityTestPage() {
    const params = useParams();
    const router = useRouter();
    const testId = params.testId as string;
    const [isCompleted, setIsCompleted] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });

    const getTestContent = () => {
        if (testId === 'paper1-jan31') {
            return POLITY_PAPER_1_JAN_31;
        }
        if (testId === 'paper2-jan31') {
            return POLITY_PAPER_2_JAN_31;
        }
        // Fallback or Paper 2 placeholder
        return [];
    };

    const content = getTestContent();

    const handleComplete = (results: any[]) => {
        const correct = results.filter(r => r.isCorrect).length;
        setScore({ correct, total: results.length });
        setIsCompleted(true);
        // Save to localStorage or Backend here
        localStorage.setItem(`polity_test_${testId}_completed`, 'true');
        localStorage.setItem(`polity_test_${testId}_score`, JSON.stringify({ correct, total: results.length }));
    };

    if (content.length === 0) {
        return (
            <div className="p-8 text-center">
                <h1 className="text-2xl font-bold text-red-500">Test Not Found</h1>
                <p>The requested test ID "{testId}" does not exist or has no content.</p>
                <Button onClick={() => router.back()} className="mt-4">
                    Go Back
                </Button>
            </div>
        );
    }

    if (isCompleted) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl max-w-md w-full text-center border border-gray-200 dark:border-gray-800">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 dark:text-green-400">
                        <span className="text-4xl">🎉</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Test Completed!</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                        You have successfully submitted the test.
                    </p>

                    <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 mb-8">
                        <span className="text-sm uppercase font-bold text-slate-500">Your Score</span>
                        <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400 mt-2">
                            {score.correct} <span className="text-xl text-gray-400">/ {score.total}</span>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center">
                        <Button onClick={() => router.push('/student/batch1/polity')} variant="outline">
                            Back to Schedule
                        </Button>
                        <Button onClick={() => window.location.reload()}>
                            Retake Test
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950 pb-20">
            <div className="max-w-4xl mx-auto pt-6 px-4">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mb-4 hover:bg-slate-200 dark:hover:bg-slate-800"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Schedule
                </Button>

                <div className="mb-6">
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white">
                        {testId === 'paper1-jan31' ? 'UPSC Prelims 2026: Paper 1 (Polity)' :
                            testId === 'paper2-jan31' ? 'UPSC Prelims 2026: Paper 2 (Polity)' : 'Test'}
                    </h1>
                    <p className="text-slate-500">
                        {content.length} Questions • 2 Hours • Negative Marking 1/3
                    </p>
                </div>

                <CycleMCQs
                    selectedSubtopics={[]} // Not needed as we provide preloadedMCQs
                    cycleNumber={1}
                    onComplete={handleComplete}
                    preloadedMCQs={content}
                />
            </div>
        </div>
    );
}

"use client";

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import StandardMCQInterface from '@/components/common/mcq/StandardMCQInterface';
import StandardTestReport from '@/components/common/reports/StandardTestReport';
import { ncertMcqBank } from '@/components/upsc/subjects/geography/data/mcqs/ncert-mcqs';

export default function NCERTChapterTestPage() {
    const params = useParams();
    const router = useRouter();
    const chapterId = params.chapterId as string;

    const [isFinished, setIsFinished] = useState(false);
    const [testResults, setTestResults] = useState<any[]>([]);
    const [timeSpent, setTimeSpent] = useState(0);

    const questions = useMemo(() => {
        // Filter by chapter string (e.g., "1", "2")
        // Check if there's exactly matching chapter. NCERT questions have "chapter" field.
        return ncertMcqBank.filter(q => q.chapter === chapterId || q.chapter === String(chapterId));
    }, [chapterId]);

    const handleComplete = (results: any[], totalTimeSeconds: number) => {
        setTestResults(results);
        setTimeSpent(totalTimeSeconds);
        setIsFinished(true);
    };

    if (questions.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-black text-slate-800 dark:text-slate-200">Chapter {chapterId} Not Found</h2>
                    <p className="text-slate-500">Could not load the MCQs for this chapter. Expected 40 questions.</p>
                    <button onClick={() => router.back()} className="text-indigo-600 font-bold hover:underline">
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    if (isFinished) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-4">
                    <StandardTestReport
                        results={testResults}
                        totalTimeSeconds={timeSpent}
                        title={`Class 11 NCERT - Chapter ${chapterId} Results`}
                        onRetry={() => {
                            setIsFinished(false);
                            setTestResults([]);
                        }}
                        onExit={() => router.push('/student/upsc/geography')}
                    />
                </div>
            </div>
        );
    }

    return (
        <StandardMCQInterface
            questions={questions as any}
            title={`Class 11 NCERT - Chapter ${chapterId}`}
            subtitle="Level 1 Practice Assessment"
            onComplete={handleComplete}
            onExit={() => router.push('/student/upsc/geography')}
        />
    );
}

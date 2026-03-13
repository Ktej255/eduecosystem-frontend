"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import StandardMCQInterface, { MCQ } from '@/components/common/mcq/StandardMCQInterface';
import StandardTestReport from '@/components/common/reports/StandardTestReport';
import { environmentMCQs } from '@/components/upsc/subjects/environment/data/mcqs/environment-mcqs';
import { saveChapterReport } from '@/lib/report-persistence';
import { Loader2 } from 'lucide-react';

function EnvironmentMCQContent() {
    const searchParams = useSearchParams();
    const chapterParam = searchParams.get('chapter');
    const levelParam = searchParams.get('level') || '1';

    const [questions, setQuestions] = useState<MCQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [showReport, setShowReport] = useState(false);
    const [testResult, setTestResult] = useState<any>(null);

    const chapterIds = chapterParam ? chapterParam.split(',').map(Number) : [];
    const level = parseInt(levelParam);

    useEffect(() => {
        if (chapterIds.length > 0) {
            const timer = setTimeout(() => {
                const filtered = environmentMCQs.filter(m =>
                    chapterIds.includes(m.chapter) &&
                    (m.difficulty === (level === 3 ? 'hard' : level === 2 ? 'medium' : 'easy'))
                );

                const formattedMCQs: MCQ[] = filtered.map((m, idx) => ({
                    id: m.id || `env-${m.chapter}-${idx}`,
                    question: m.question,
                    options: m.options,
                    correctAnswer: m.correctAnswer,
                    explanation: m.explanation || "No explanation provided.",
                    chapter: `Topic ${m.chapter}`,
                    subtopic: m.subtopic || "General",
                    difficulty: m.difficulty as any
                }));

                setQuestions(formattedMCQs);
                setLoading(false);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, [chapterParam, level]);

    const handleComplete = (result: any[], totalTime: number) => {
        const stats = {
            totalQuestions: result.length,
            correctCount: result.filter((q: any) => q.isCorrect).length,
            incorrectCount: result.filter((q: any) => q.userAnswer !== null && !q.isCorrect).length,
            unansweredCount: result.filter((q: any) => q.userAnswer === null).length,
            score: result.filter((q: any) => q.isCorrect).length,
            accuracy: Math.round((result.filter((q: any) => q.isCorrect).length / result.length) * 100),
            timeTaken: totalTime,
            topicBreakdown: {
                "Environment": {
                    total: result.length,
                    correct: result.filter((q: any) => q.isCorrect).length
                }
            },
            questionAnalysis: result.map((q: any) => ({
                questionId: q.id,
                wasted: !q.isCorrect && q.timeSpent > 60
            }))
        };


        const finalResult = {
            questions: result,
            totalTimeTaken: totalTime,
            ...stats,
            testTitle: `Environment Practice - Level ${level}`
        };

        // Save to universal persistence
        saveChapterReport('environment', chapterIds[0], finalResult, level);

        setTestResult(finalResult);
        setShowReport(true);
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <Loader2 className="w-12 h-12 text-green-600 animate-spin" />
                <p className="text-neutral-500 font-medium tracking-wide">Assembling Environment MCQs...</p>
            </div>
        );
    }

    if (showReport && testResult) {
        return <StandardTestReport results={testResult} onBack={() => window.location.reload()} />;
    }

    return (
        <div className="p-4 md:p-8">
            <StandardMCQInterface
                questions={questions}
                onComplete={handleComplete}
                title={`Environment Topic ${chapterIds.join(', ')}`}
                subtitle={`Level ${level} Practice`}
                onExit={() => window.history.back()}
            />
        </div>
    );
}

export default function EnvironmentMCQPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EnvironmentMCQContent />
        </Suspense>
    );
}

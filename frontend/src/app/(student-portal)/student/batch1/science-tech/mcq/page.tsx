"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import StandardMCQInterface, { MCQ } from '@/components/common/mcq/StandardMCQInterface';
import StandardTestReport from '@/components/common/reports/StandardTestReport';
import { sciTechMCQs } from '@/components/batch1/science-tech/data/mcqs/scitech-mcqs';
import { saveChapterReport } from '@/lib/report-persistence';
import { Loader2 } from 'lucide-react';

function SciTechMCQContent() {
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
                const filtered = sciTechMCQs.filter(m =>
                    chapterIds.includes(m.chapter) &&
                    (m.difficulty === (level === 3 ? 'hard' : level === 2 ? 'medium' : 'easy'))
                );

                const formattedMCQs: MCQ[] = filtered.map((m, idx) => ({
                    id: m.id || `st-${m.chapter}-${idx}`,
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

    const handleComplete = (result: any) => {
        const stats = {
            totalQuestions: result.questions.length,
            correctCount: result.questions.filter((q: any) => q.isCorrect).length,
            incorrectCount: result.questions.filter((q: any) => q.userAnswer !== null && !q.isCorrect).length,
            unansweredCount: result.questions.filter((q: any) => q.userAnswer === null).length,
            score: result.questions.filter((q: any) => q.isCorrect).length,
            accuracy: Math.round((result.questions.filter((q: any) => q.isCorrect).length / result.questions.length) * 100),
            timeTaken: result.totalTimeTaken,
            topicBreakdown: {
                "Science & Tech": {
                    total: result.questions.length,
                    correct: result.questions.filter((q: any) => q.isCorrect).length
                }
            },
            questionAnalysis: result.questions.map((q: any) => ({
                questionId: q.id,
                wasted: !q.isCorrect && q.timeSpent > 60
            }))
        };

        const finalResult = {
            ...result,
            ...stats,
            testTitle: `Science & Tech Practice - Level ${level}`
        };

        // Save to universal persistence
        saveChapterReport('scitech', chapterIds[0], finalResult, level);

        setTestResult(finalResult);
        setShowReport(true);
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <Loader2 className="w-12 h-12 text-purple-600 animate-spin" />
                <p className="text-neutral-500 font-medium tracking-wide">Assembling Science & Tech MCQs...</p>
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
                title={`Science & Tech Topic ${chapterIds.join(', ')}`}
                subtitle={`Level ${level} Practice`}
                onExit={() => window.history.back()}
            />
        </div>
    );
}

export default function SciTechMCQPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SciTechMCQContent />
        </Suspense>
    );
}

"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getMCQsForHistoryChapters } from '@/components/batch1/history/data/history-mcqs-data';
import { Loader2, Target } from 'lucide-react';
import HistoryFeaturePlaceholder from '@/components/batch1/history/HistoryFeaturePlaceholder';
// Standard Components
import StandardMCQInterface, { MCQ, QuestionResult } from '@/components/common/mcq/StandardMCQInterface';
import StandardTestReport, { TestResult } from '@/components/common/reports/StandardTestReport';
import { saveChapterReport } from '@/lib/report-persistence';
import { toast } from 'sonner';

function MCQContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const chapterParam = searchParams.get('chapter');

    const section = searchParams.get('section') || 'modern';
    const levelParam = searchParams.get('level');
    const level = levelParam ? parseInt(levelParam) : null;

    // Parse chapter param
    const chapterIds = chapterParam
        ? chapterParam.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id))
        : [];

    const [questions, setQuestions] = useState<MCQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [showResults, setShowResults] = useState(false);
    const [testResult, setTestResult] = useState<TestResult | null>(null);

    useEffect(() => {
        if (chapterIds.length > 0) {
            const timer = setTimeout(() => {
                const rawMcqs = getMCQsForHistoryChapters(chapterIds, section);

                // Filter by Level if param exists
                const filteredRawMcqs = level
                    ? rawMcqs.filter(m => {
                        // Map difficulty string to level number
                        const diff = m.difficulty?.toLowerCase() || 'easy';
                        let qLevel = 1;
                        if (diff === 'hard' || diff === 'level 3') qLevel = 3;
                        else if (diff === 'moderate' || diff === 'level 2') qLevel = 2;

                        return qLevel === level;
                    })
                    : rawMcqs;

                // Transform to Standard MCQ format
                const formattedMCQs: MCQ[] = filteredRawMcqs.map((m, idx) => ({
                    id: parseInt(m.id) || (idx + 1000), // Ensure ID is number
                    question: m.question,
                    options: m.options,
                    correctAnswer: m.correctAnswer,
                    explanation: m.explanation || "No explanation provided.",
                    category: "History",
                    tags: [`Chapter ${m.chapterId || chapterIds[0]}`, level ? `Level ${level}` : 'Mixed']
                }));

                setQuestions(formattedMCQs);
                setLoading(false);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, [chapterParam, level, section]);

    const handleComplete = (results: QuestionResult[], timeTaken: number) => {
        // Calculate stats
        const correct = results.filter(r => r.isCorrect).length;
        const incorrect = results.filter(r => !r.isCorrect && r.selectedAnswer !== null).length;
        const unanswered = results.filter(r => r.selectedAnswer === null).length;

        // Simple scoring: +2 for correct, -0.66 for incorrect
        const score = (correct * 2) - (incorrect * 0.66);

        const resultData: TestResult = {
            totalQuestions: questions.length,
            correctCount: correct,
            incorrectCount: incorrect,
            unansweredCount: unanswered,
            score: Math.max(0, Math.round(score * 100) / 100), // Standardize to 2 decimals
            accuracy: Math.round((correct / questions.length) * 100) || 0,
            timeTaken: timeTaken,
            topicBreakdown: {
                "History": { total: questions.length, correct: correct }
            },
            questionAnalysis: results.map(r => ({
                questionId: r.questionId,
                wasted: !r.isCorrect && r.timeSpent > 60
            }))
        };

        setTestResult(resultData);
        setShowResults(true);

        // Save to Universal Report Persistence
        // Use the first chapterId if multiple selected, or default to 0
        const primaryChapterId = chapterIds[0] || 0;

        // Use level as 'attemptType' (1, 2, 3) or default to 10 (Mixed/Drill)
        const reportType = level || 10;

        saveChapterReport('history', primaryChapterId, {
            score: correct,
            totalQuestions: questions.length,
            accuracy: resultData.accuracy,
            timeTaken: timeTaken,
            questions: results
        }, reportType);

        toast.success(
            `✅ Test Submitted! Score: ${correct}/${questions.length} (${resultData.accuracy}%) - Report saved to Deep Report Center → Chapters tab`,
            { duration: 5000 }
        );
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-black">
                <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
                <span className="ml-2 text-slate-500 font-medium">Loading History Archives...</span>
            </div>
        );
    }

    if (chapterIds.length === 0) {
        return (
            <HistoryFeaturePlaceholder
                title="No Chapter Selected"
                description="Please select a chapter from the schedule to start the quiz."
                icon={Target}
            />
        );
    }

    if (questions.length === 0) {
        return (
            <HistoryFeaturePlaceholder
                title="Content Coming Soon"
                description={`MCQs for Chapter ${chapterIds.join(', ')} are being digitized. Please check back leter.`}
                icon={Target}
            />
        );
    }

    if (showResults && testResult) {
        return (
            <StandardTestReport
                data={testResult}
                onRetry={() => { setShowResults(false); setTestResult(null); }}
                onBack={() => router.back()}
                topicName={`History Ch. ${chapterIds.join(', ')}`}
            />
        );
    }

    return (
        <StandardMCQInterface
            questions={questions}
            title={`History Ch. ${chapterIds.join(', ')} ${level ? `(Level ${level})` : 'Practice'}`}
            onComplete={handleComplete}
            onExit={() => router.back()}
        />
    );
}

export default function HistoryMCQPage() {
    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>}>
            <MCQContent />
        </Suspense>
    );
}

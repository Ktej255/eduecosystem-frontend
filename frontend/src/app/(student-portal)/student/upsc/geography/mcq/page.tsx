"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Loader2, Target } from 'lucide-react';
import { geographyMCQs } from '@/components/upsc/subjects/geography/data/mcqs/geography-mcqs';

// Standard Components
import StandardMCQInterface, { MCQ } from '@/components/common/mcq/StandardMCQInterface';
import StandardTestReport, { TestResult, QuestionResult } from '@/components/common/reports/StandardTestReport';
import { saveChapterReport } from '@/lib/report-persistence';
import { toast } from 'sonner';

function GeographyMCQContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const chapterParam = searchParams.get('chapter');
    const levelParam = searchParams.get('level');
    const patternParam = searchParams.get('pattern') || 'standard';
    const level = levelParam ? parseInt(levelParam) : 1;

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
                // In geography-mcqs.ts, the chapter field is a number or string
                const filtered = geographyMCQs.filter(m =>
                    chapterIds.includes(Number(m.chapter)) &&
                    (m.difficulty === (level === 3 ? 'hard' : level === 2 ? 'medium' : 'easy')) &&
                    (patternParam === 'statement_based' ? m.question_type === 'statement_based' : m.question_type !== 'statement_based')
                );

                const formattedMCQs: MCQ[] = filtered.map((m, idx) => ({
                    id: m.id || `geo-${m.chapter}-${idx}`,
                    question: m.question,
                    options: m.options,
                    correctAnswer: m.correctAnswer,
                    explanation: m.explanation || "No explanation provided.",
                    chapter: `Day ${m.chapter}`,
                    subtopic: m.topic || "General",
                    difficulty: level === 3 ? 'Hard' : level === 2 ? 'Moderate' : 'Easy'
                }));

                setQuestions(formattedMCQs);
                setLoading(false);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, [chapterParam, level]);

    const handleComplete = (results: QuestionResult[], timeTaken: number) => {
        const correct = results.filter(r => r.isCorrect).length;
        const accuracy = Math.round((correct / questions.length) * 100) || 0;

        const resultData: TestResult = {
            questions: results, // Explicitly assign questions array
            totalQuestions: questions.length,
            correctCount: correct,
            incorrectCount: questions.length - correct,
            unansweredCount: 0,
            score: correct * 2,
            accuracy,
            timeTaken,
            totalTimeTaken: timeTaken,
            topicBreakdown: { "Geography": { total: questions.length, correct } },
            questionAnalysis: results.map(r => ({ questionId: r.id, wasted: !r.isCorrect && r.timeSpent > 60 }))
        };

        setTestResult(resultData);
        setShowResults(true);

        saveChapterReport('geography', chapterIds[0] || 0, {
            ...resultData,
            unansweredCount: results.filter(r => r.userAnswer === null).length
        }, level);

        toast.success(`✅ Geography Test Saved! Score: ${correct}/${questions.length}`);
    };

    if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;

    if (showResults && testResult) {
        return <StandardTestReport results={testResult} onRetake={() => { setShowResults(false); setTestResult(null); }} onBack={() => router.back()} />;
    }

    return (
        <StandardMCQInterface
            questions={questions}
            title={`Geography Day ${chapterIds.join(', ')}`}
            subtitle={`Level ${level} Practice`}
            onComplete={handleComplete}
            onExit={() => router.back()}
        />
    );
}

export default function GeographyMCQPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GeographyMCQContent />
        </Suspense>
    );
}

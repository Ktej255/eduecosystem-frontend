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
import { markQuestionSolved } from '@/services/progressStorage';
import { toast } from 'sonner';

import { CURRENT_AFFAIRS_DATA, CurrentAffairItem } from '@/components/batch1/current-affairs/current-affairs-data';

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
                let filteredRawMcqs = level
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
                    id: m.id || `h-${idx}`,
                    question: m.question,
                    options: m.options,
                    correctAnswer: m.correctAnswer,
                    explanation: m.explanation || "No explanation provided.",
                    category: "History",
                    chapter: `Chapter ${m.chapterId || chapterIds[0]}`,
                    subtopic: "General",
                    tags: [`Chapter ${m.chapterId || chapterIds[0]}`, level ? `Level ${level}` : 'Mixed']
                }));

                // Phase 4: Inject Current Affairs for Level 3
                if (level === 3) {
                    const linkedCA = CURRENT_AFFAIRS_DATA.filter(ca =>
                        chapterIds.includes(ca.chapter || 0) ||
                        (ca.tags && ca.tags.some(tag => formattedMCQs[0]?.tags?.includes(tag)))
                    );

                    linkedCA.forEach(ca => {
                        formattedMCQs.push({
                            id: `ca-${ca.id}`,
                            question: `[UPSC 2024-25 Context: ${ca.title}]\n\n${ca.description}\n\nWith reference to the historical theme mentioned above, which of the following is most accurate?`,
                            options: [
                                "It represents a continuation of the subaltern protest tradition.",
                                "It was a movement led exclusively by the urban intelligentsia.",
                                "It had no significant impact on the national movement.",
                                "It was a state-sponsored reform without grassroots participation."
                            ],
                            correctAnswer: 0,
                            explanation: `This Current Affair item (${ca.title}) highlights the enduring relevance of ${ca.tags?.join(', ') || 'this historical theme'}. In UPSC, such links are crucial for Level 3 (Applied) mastery.`,
                            category: "History",
                            chapter: formattedMCQs[0]?.chapter || "Current Affairs",
                            subtopic: "CA Integration",
                            tags: ["Current Affairs", "Level 3", "UPSC 2025"]
                        });
                    });
                }

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
            questions: results, // Explicitly assign questions array
            totalQuestions: questions.length,
            correctCount: correct,
            incorrectCount: incorrect,
            unansweredCount: unanswered,
            score: Math.max(0, Math.round(score * 100) / 100), // Standardize to 2 decimals
            accuracy: Math.round((correct / questions.length) * 100) || 0,
            timeTaken: timeTaken,
            totalTimeTaken: timeTaken, // Add totalTimeTaken for compatibility
            topicBreakdown: {
                "History": { total: questions.length, correct: correct }
            },
            questionAnalysis: results.map(r => ({
                questionId: r.id,
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
            totalTimeTaken: timeTaken, // Add totalTimeTaken for compatibility
            correctCount: correct,
            incorrectCount: incorrect,
            unansweredCount: unanswered,
            questions: results
        }, reportType);

        // Mark level as complete if accuracy >= 70%
        if (level && resultData.accuracy >= 70) {
            import('@/lib/history-progress-store').then(mod => {
                mod.markHistoryMCQLevelComplete(primaryChapterId, level);
            });
        }

        // Mark individual questions as solved
        results.forEach(r => {
            if (r.isCorrect) {
                markQuestionSolved(r.id);
            }
        });

        const successMsg = level && resultData.accuracy >= 70
            ? `🎉 Level ${level} Mastered! Score: ${correct}/${questions.length} (${resultData.accuracy}%)`
            : `✅ Test Submitted! Score: ${correct}/${questions.length} (${resultData.accuracy}%)`;

        toast.success(
            `${successMsg} - Report saved to Deep Report Center`,
            { duration: 5000 }
        );
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-muted dark:bg-black">
                <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
                <span className="ml-2 text-muted-foreground font-medium">Loading History Archives...</span>
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
                results={testResult}
                onRetake={() => { setShowResults(false); setTestResult(null); }}
                onBack={() => router.back()}
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

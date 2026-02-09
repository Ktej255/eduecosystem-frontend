"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import HistoryMCQSession, { MCQResult } from '@/components/batch1/history/HistoryMCQSession';
import { getMCQsForHistoryChapters } from '@/components/batch1/history/data/history-mcqs-data';
import { ArrowLeft, Loader2, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HistoryFeaturePlaceholder from '@/components/batch1/history/HistoryFeaturePlaceholder';

function MCQContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const chapterParam = searchParams.get('chapter');
    const levelParam = searchParams.get('level'); // Not used yet, but good to have

    // Parse chapter param (can be comma separated or single)
    const chapterIds = chapterParam
        ? chapterParam.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id))
        : [];

    const [questions, setQuestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState<MCQResult[]>([]);

    useEffect(() => {
        if (chapterIds.length > 0) {
            // Simulate loading for better UX
            const timer = setTimeout(() => {
                const mcqs = getMCQsForHistoryChapters(chapterIds);
                // Filter by level if needed in future (e.g. if MCQ objects have 'difficulty')
                setQuestions(mcqs);
                setLoading(false);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, [chapterParam]);

    const handleComplete = (finalResults: MCQResult[]) => {
        setResults(finalResults);
        setShowResults(true);
        // Here you could save to backend using a server action or API
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
                <span className="ml-2 text-slate-500">Loading Questions...</span>
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
                description={`MCQs for Chapter ${chapterIds.join(', ')} are being digitized. Please check back later.`}
                icon={Target}
            />
        );
    }

    if (showResults) {
        return (
            <div className="max-w-4xl mx-auto p-6 space-y-8">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" onClick={() => router.back()}>
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Schedule
                    </Button>
                    <h1 className="text-2xl font-bold">Quiz Results</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                        <div className="text-sm text-green-600 font-bold uppercase">Correct</div>
                        <div className="text-4xl font-black text-green-700">
                            {results.filter(r => r.isCorrect).length}
                        </div>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                        <div className="text-sm text-red-600 font-bold uppercase">Incorrect</div>
                        <div className="text-4xl font-black text-red-700">
                            {results.filter(r => !r.isCorrect).length}
                        </div>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                        <div className="text-sm text-blue-600 font-bold uppercase">Accuracy</div>
                        <div className="text-4xl font-black text-blue-700">
                            {Math.round((results.filter(r => r.isCorrect).length / results.length) * 100)}%
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Detailed Analysis</h2>
                    {results.map((result, idx) => {
                        const question = questions.find(q => q.id === result.questionId) || questions[idx];
                        return (
                            <div key={idx} className={`p-6 rounded-2xl border-2 ${result.isCorrect ? 'border-green-100 bg-green-50/30' : 'border-red-100 bg-red-50/30'}`}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-bold text-slate-500">Q{idx + 1}</span>
                                    {result.isCorrect ? (
                                        <span className="text-green-600 font-bold flex items-center gap-1"><Target className="h-4 w-4" /> Correct</span>
                                    ) : (
                                        <span className="text-red-600 font-bold flex items-center gap-1">Incorrect</span>
                                    )}
                                </div>
                                <p className="font-medium text-lg mb-4">{question.question}</p>

                                <div className="space-y-2 mb-4">
                                    {question.options.map((opt: string, i: number) => (
                                        <div key={i} className={`p-3 rounded-lg text-sm ${question.correctAnswer === i ? 'bg-green-200 text-green-800 font-bold' :
                                                result.selectedAnswer === i ? 'bg-red-200 text-red-800' : 'bg-slate-100 text-slate-600'
                                            }`}>
                                            {opt} {question.correctAnswer === i && " (Correct Answer)"} {result.selectedAnswer === i && !result.isCorrect && " (Your Answer)"}
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-slate-100 p-4 rounded-xl text-sm text-slate-700">
                                    <span className="font-bold block mb-1">Explanation:</span>
                                    {question.explanation}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <HistoryMCQSession
            questions={questions}
            title={`Chapter ${chapterIds.join(' & ')} Practice`}
            onComplete={handleComplete}
            onCancel={() => router.back()}
        />
    );
}

export default function HistoryMCQPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MCQContent />
        </Suspense>
    );
}

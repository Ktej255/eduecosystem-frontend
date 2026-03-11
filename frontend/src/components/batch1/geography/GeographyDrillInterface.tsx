"use client";

import React, { useState, useMemo } from 'react';
import StandardMCQInterface from '@/components/common/mcq/StandardMCQInterface';
import { geographyMCQs as GEOGRAPHY_MCQS } from './data/mcqs/geography-mcqs';
import { Badge } from '@/components/ui/badge';
import { Target } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import GeographyResultDashboard from './GeographyResultDashboard';
import { QuestionResult } from '@/components/common/reports/StandardTestReport';

export default function GeographyDrillInterface() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const topicIdStr = searchParams.get('topicId');
    const branch = searchParams.get('branch');

    const [isFinished, setIsFinished] = useState(false);
    const [results, setResults] = useState<QuestionResult[]>([]);
    const [totalTime, setTotalTime] = useState(0);

    // Normalize and filter MCQs
    const filteredMCQs = useMemo(() => {
        let pool = GEOGRAPHY_MCQS.map(m => ({
            ...m,
            // Map geography specific fields to standard interface
            chapter: m.module || 'General',
            subtopic: m.topic || 'General',
            difficulty: (m.difficulty === 'easy' ? 'Easy' : m.difficulty === 'medium' ? 'Moderate' : 'Hard') as 'Easy' | 'Moderate' | 'Hard'
        }));

        if (branch) {
            pool = pool.filter(m => m.module === branch.toLowerCase());
        }
        // Topic filtering logic could be added here if topicRegistry is used
        
        return pool;
    }, [branch]);

    const handleComplete = (questResults: QuestionResult[], time: number) => {
        setResults(questResults);
        setTotalTime(time);
        setIsFinished(true);
    };

    // Calculate module-wise breakdown for the dashboard
    const moduleData = useMemo(() => {
        const data: Record<string, { correct: number, total: number }> = {};
        results.forEach(r => {
            const mod = r.chapter || 'unknown';
            if (!data[mod]) data[mod] = { correct: 0, total: 0 };
            data[mod].total++;
            if (r.isCorrect) data[mod].correct++;
        });
        return data;
    }, [results]);

    const handleRetake = () => {
        setIsFinished(false);
        setResults([]);
        setTotalTime(0);
    };

    if (isFinished) {
        const score = results.filter(r => r.isCorrect).length;
        const accuracy = results.length > 0 ? (score / results.length) * 100 : 0;
        
        return (
            <GeographyResultDashboard 
                score={score}
                totalQuestions={results.length}
                accuracy={accuracy}
                moduleData={moduleData}
                onRetake={handleRetake}
                onStartPractice={(modId) => {
                    handleRetake();
                    // Optional: set a filter for specific module
                }}
            />
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
                        <Target className="w-6 h-6 text-indigo-600" />
                        Geography Practice Drill
                    </h2>
                    <p className="text-sm text-muted-foreground font-medium">
                        {branch ? `Focused on ${branch}` : "All Geography Modules"}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-indigo-50 border-indigo-200 text-indigo-700 font-bold">
                        {filteredMCQs.length} Questions Available
                    </Badge>
                </div>
            </div>

            <StandardMCQInterface
                questions={filteredMCQs}
                subject="Geography"
                onComplete={handleComplete}
                onExit={() => router.back()}
            />
        </div>
    );
}

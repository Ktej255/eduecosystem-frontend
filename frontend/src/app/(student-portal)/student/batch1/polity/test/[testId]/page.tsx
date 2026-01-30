"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ImmersiveTestSession, { TestResult } from '@/components/common/ImmersiveTestSession';
import SaturdayTestReport from '@/components/batch1-1/saturday/SaturdayTestReport';
import { POLITY_PAPER_1_JAN_31 } from '@/components/batch1/polity/data/tests/polity-paper1-jan31';
import { POLITY_PAPER_2_JAN_31 } from '@/components/batch1/polity/data/tests/polity-paper2-jan31';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PolityTestPage() {
    const params = useParams();
    const router = useRouter();
    const testId = params.testId as string;
    const [testState, setTestState] = useState<'intro' | 'active' | 'report'>('intro');
    const [results, setResults] = useState<any>(null);

    const getTestContent = () => {
        if (testId === 'paper1-jan31') {
            return POLITY_PAPER_1_JAN_31;
        }
        if (testId === 'paper2-jan31') {
            return POLITY_PAPER_2_JAN_31;
        }
        return [];
    };

    const content = getTestContent();

    const handleStart = () => {
        setTestState('active');
    };

    const handleComplete = (finalResults: TestResult) => {
        setResults(finalResults);
        setTestState('report');
        // Persist
        localStorage.setItem(`polity_test_${testId}_completed`, 'true');
        localStorage.setItem(`polity_test_${testId}_results`, JSON.stringify(finalResults));
    };

    if (content.length === 0) {
        return (
            <div className="p-8 text-center text-slate-400">
                <h1 className="text-2xl font-bold text-red-400">Test Not Found</h1>
                <p>The requested test ID "{testId}" does not exist.</p>
                <Button onClick={() => router.back()} className="mt-4">
                    Go Back
                </Button>
            </div>
        );
    }

    if (testState === 'report' && results) {
        return <SaturdayTestReport results={results} onBack={() => router.back()} onRetake={() => window.location.reload()} />;
    }

    if (testState === 'active') {
        return (
            <ImmersiveTestSession
                questions={content}
                testTitle={testId === 'paper1-jan31' ? 'UPSC Prelims 2026: Paper 1 (Polity)' : 'UPSC Prelims 2026: Paper 2 (Polity)'}
                durationSeconds={7200}
                onComplete={handleComplete}
                onCancel={() => setTestState('intro')}
            />
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-white mb-2">
                        {testId === 'paper1-jan31' ? 'Polity Paper 1' : 'Polity Paper 2'}
                    </h1>
                    <p className="text-slate-400">
                        {content.length} Questions • 2 Hours • Negative Marking 0.66
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 text-sm text-slate-300">
                        <ul className="list-disc list-inside space-y-2">
                            <li>All questions are compulsory.</li>
                            <li>Use logic and elimination.</li>
                            <li>Mark confidence levels for detailed analysis.</li>
                            <li>You can bookmark questions to review later.</li>
                        </ul>
                    </div>

                    <Button onClick={handleStart} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-6 text-lg shadow-lg shadow-blue-500/20">
                        Start Test Now
                    </Button>

                    <Button variant="ghost" onClick={() => router.back()} className="w-full text-slate-500 hover:text-white">
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}

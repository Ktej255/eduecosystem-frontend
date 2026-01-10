"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Timer, Trophy, FileText, Clock, Play, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MCQTestSession from "@/components/batch1/qa/MCQTestSession";

interface PageProps {
    params: Promise<{
        weekId: string;
    }>;
}

// Test states
type TestState = 'select' | 'paper1' | 'paper2' | 'complete';

export default function SaturdayTestPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const weekId = parseInt(resolvedParams.weekId);
    const router = useRouter();

    const [testState, setTestState] = useState<TestState>('select');
    const [paper1Score, setPaper1Score] = useState<number | null>(null);
    const [paper2Score, setPaper2Score] = useState<number | null>(null);
    const [paper1Completed, setPaper1Completed] = useState(false);
    const [paper2Completed, setPaper2Completed] = useState(false);

    // Load saved progress
    useEffect(() => {
        const saved = localStorage.getItem(`batch11_saturday_${weekId}`);
        if (saved) {
            const data = JSON.parse(saved);
            setPaper1Score(data.paper1Score);
            setPaper2Score(data.paper2Score);
            setPaper1Completed(data.paper1Completed || false);
            setPaper2Completed(data.paper2Completed || false);
        }
    }, [weekId]);

    // Save progress
    const saveProgress = (p1Score: number | null, p2Score: number | null, p1Done: boolean, p2Done: boolean) => {
        localStorage.setItem(`batch11_saturday_${weekId}`, JSON.stringify({
            paper1Score: p1Score,
            paper2Score: p2Score,
            paper1Completed: p1Done,
            paper2Completed: p2Done,
            lastUpdated: new Date().toISOString()
        }));
    };

    const handlePaper1Complete = (score: number) => {
        setPaper1Score(score);
        setPaper1Completed(true);
        saveProgress(score, paper2Score, true, paper2Completed);
        setTestState('select');
    };

    const handlePaper2Complete = (score: number) => {
        setPaper2Score(score);
        setPaper2Completed(true);
        saveProgress(paper1Score, score, paper1Completed, true);
        setTestState('complete');
    };

    // Test selection view
    if (testState === 'select') {
        return (
            <div className="max-w-4xl mx-auto p-4 md:p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <Link href="/student/batch1-1">
                        <Button variant="ghost">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Batch 1.1
                        </Button>
                    </Link>
                </div>

                {/* Hero */}
                <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 mb-8">
                    <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                            <Trophy className="h-10 w-10" />
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Saturday Test Day</h1>
                        <p className="text-amber-100">Week {weekId} • Two Papers • 2 Hours Each</p>
                    </CardContent>
                </Card>

                {/* Paper Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Paper 1: Current Week */}
                    <Card className={`border-2 ${paper1Completed ? 'border-green-400 bg-green-50 dark:bg-green-900/20' : 'border-amber-300 hover:border-amber-500'} transition-all cursor-pointer`}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${paper1Completed ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                                    <FileText className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-lg">Paper 1</div>
                                    <div className="text-sm text-gray-500 font-normal">Current Week Topics</div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Clock className="h-4 w-4" />
                                    <span>9:00 AM - 11:00 AM (2 Hours)</span>
                                </div>
                                <p className="text-sm text-gray-500">
                                    MCQs from topics covered during Week {weekId} (Monday to Friday).
                                </p>

                                {paper1Completed ? (
                                    <div className="flex items-center justify-between p-3 bg-green-100 rounded-lg">
                                        <span className="flex items-center gap-2 text-green-700 font-medium">
                                            <CheckCircle2 className="h-5 w-5" />
                                            Completed
                                        </span>
                                        <span className="text-2xl font-bold text-green-600">{paper1Score}%</span>
                                    </div>
                                ) : (
                                    <Button
                                        className="w-full bg-amber-500 hover:bg-amber-600"
                                        onClick={() => setTestState('paper1')}
                                    >
                                        <Play className="mr-2 h-4 w-4" />
                                        Start Paper 1
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Paper 2: Previous Weeks */}
                    <Card className={`border-2 ${paper2Completed ? 'border-green-400 bg-green-50 dark:bg-green-900/20' : paper1Completed ? 'border-orange-300 hover:border-orange-500' : 'border-gray-200'} transition-all ${paper1Completed ? 'cursor-pointer' : 'opacity-60'}`}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${paper2Completed ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                                    <FileText className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-lg">Paper 2</div>
                                    <div className="text-sm text-gray-500 font-normal">All Previous Weeks</div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Clock className="h-4 w-4" />
                                    <span>12:00 PM - 2:00 PM (2 Hours)</span>
                                </div>
                                <p className="text-sm text-gray-500">
                                    {weekId > 1
                                        ? `Combined MCQs from Week 1 to Week ${weekId - 1}. Multi-subject coverage.`
                                        : 'Not available in Week 1. This paper covers previous weeks.'}
                                </p>

                                {paper2Completed ? (
                                    <div className="flex items-center justify-between p-3 bg-green-100 rounded-lg">
                                        <span className="flex items-center gap-2 text-green-700 font-medium">
                                            <CheckCircle2 className="h-5 w-5" />
                                            Completed
                                        </span>
                                        <span className="text-2xl font-bold text-green-600">{paper2Score}%</span>
                                    </div>
                                ) : (
                                    <Button
                                        className="w-full bg-orange-500 hover:bg-orange-600"
                                        onClick={() => setTestState('paper2')}
                                        disabled={!paper1Completed || weekId === 1}
                                    >
                                        <Play className="mr-2 h-4 w-4" />
                                        {weekId === 1 ? 'Not Available' : paper1Completed ? 'Start Paper 2' : 'Complete Paper 1 First'}
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Both Complete */}
                {paper1Completed && (paper2Completed || weekId === 1) && (
                    <Card className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200">
                        <CardContent className="p-6 text-center">
                            <Trophy className="h-12 w-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-green-700 mb-2">Week {weekId} Tests Complete!</h3>
                            <p className="text-green-600 mb-4">Great job completing your Saturday tests.</p>
                            <Link href="/student/batch1-1">
                                <Button className="bg-green-600 hover:bg-green-700">
                                    Back to Batch 1.1
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                )}
            </div>
        );
    }

    // Paper 1 or Paper 2 Test View
    if (testState === 'paper1' || testState === 'paper2') {
        const isPaper1 = testState === 'paper1';
        const testDuration = 7200; // 2 hours in seconds

        return (
            <div className="max-w-6xl mx-auto p-4 md:p-6">
                {/* Test Header */}
                <div className="flex items-center justify-between mb-6">
                    <Button
                        variant="ghost"
                        onClick={() => setTestState('select')}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Exit Test
                    </Button>
                    <div className="text-center">
                        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            {isPaper1 ? 'Paper 1: Current Week' : 'Paper 2: Previous Weeks'}
                        </h1>
                        <p className="text-sm text-gray-500">Week {weekId} Saturday Test</p>
                    </div>
                    <div className="flex items-center gap-2 text-amber-600">
                        <Timer className="h-5 w-5" />
                        <span className="font-semibold">2 Hour Timer</span>
                    </div>
                </div>

                {/* Note: MCQTestSession component is reused from Batch 1 */}
                {/* For now showing placeholder - will integrate with actual MCQ system */}
                <Card className="border-amber-200">
                    <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                            <FileText className="h-10 w-10 text-amber-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            {isPaper1 ? 'Paper 1 MCQ Test' : 'Paper 2 MCQ Test'}
                        </h2>
                        <p className="text-gray-600 mb-6">
                            This will load MCQs based on {isPaper1 ? `Week ${weekId} topics` : `Weeks 1-${weekId - 1} combined topics`}.
                            <br />MCQ content will be provided by you.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button
                                variant="outline"
                                onClick={() => setTestState('select')}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="bg-amber-500 hover:bg-amber-600"
                                onClick={() => {
                                    // Simulate test completion with random score
                                    const score = Math.floor(Math.random() * 30) + 60;
                                    if (isPaper1) {
                                        handlePaper1Complete(score);
                                    } else {
                                        handlePaper2Complete(score);
                                    }
                                }}
                            >
                                Complete Test (Demo)
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Complete view
    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6">
            <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Trophy className="h-12 w-12 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    All Tests Complete! 🎉
                </h1>
                <p className="text-gray-600 mb-8">
                    Week {weekId} Saturday tests are done.
                </p>

                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
                    <Card className="bg-amber-50 border-amber-200">
                        <CardContent className="p-4 text-center">
                            <div className="text-3xl font-bold text-amber-600">{paper1Score}%</div>
                            <div className="text-sm text-amber-700">Paper 1</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-orange-50 border-orange-200">
                        <CardContent className="p-4 text-center">
                            <div className="text-3xl font-bold text-orange-600">{paper2Score}%</div>
                            <div className="text-sm text-orange-700">Paper 2</div>
                        </CardContent>
                    </Card>
                </div>

                <Link href="/student/batch1-1">
                    <Button className="bg-green-600 hover:bg-green-700">
                        Back to Batch 1.1
                    </Button>
                </Link>
            </div>
        </div>
    );
}

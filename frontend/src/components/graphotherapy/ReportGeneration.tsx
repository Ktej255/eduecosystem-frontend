"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PlayCircle, CheckCircle2, Lock, BookOpen } from 'lucide-react';

export default function ReportGeneration() {
    const router = useRouter();
    // Stage: 'generating' | 'ready' | 'viewing'
    const [stage, setStage] = useState<'generating' | 'ready' | 'viewing'>('generating');
    const [progress, setProgress] = useState(0);
    const [videoWatched, setVideoWatched] = useState(false);

    // State for Real Analysis
    const [analysis, setAnalysis] = useState<any>(null);
    const [error, setError] = useState("");

    // Real API Call
    useEffect(() => {
        if (stage === 'generating') {
            const performAnalysis = async () => {
                try {
                    // @ts-ignore
                    const file = window.uploadedGraphologyFile;
                    if (!file) {
                        console.log("No file found in window.tmp, using mock mode");
                        return;
                    }

                    const formData = new FormData();
                    formData.append('files', file);

                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/funnel/analyze`, {
                        method: 'POST',
                        body: formData
                    });

                    if (!res.ok) throw new Error("Analysis failed");

                    const data = await res.json();
                    setAnalysis(data);

                } catch (err) {
                    console.error(err);
                    setError("Analysis failed. Please try again.");
                }
            };

            // Start Progress Animation parallel to API
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 95) return 95; // Wait for real API
                    return prev + 2;
                });
            }, 500);

            // Call API
            performAnalysis();

            return () => clearInterval(interval);
        }
    }, [stage]);

    // Update Stage to Ready only when Analysis is present
    useEffect(() => {
        if (analysis) {
            setProgress(100);
            setStage('ready');
        }
    }, [analysis]);

    // Parse Analysis Data Safe Access
    const stability = analysis?.emotional_stability?.status || "Moderate";
    const stabilityScore = analysis?.emotional_stability?.score || 60;
    const stabilityObs = analysis?.emotional_stability?.observation || "Analysis processing...";
    const concerns = analysis?.areas_of_concern || [];
    const insight = analysis?.summary || "Analyzing your subconscious map...";

    // Mock Video Completion (Auto-enables button after 5s for demo, usually length of video)
    useEffect(() => {
        const timer = setTimeout(() => setVideoWatched(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleViewReport = () => {
        setStage('viewing');
    };

    if (stage === 'generating' || stage === 'ready') {
        return (
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 text-center">
                <div className="space-y-4">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        {stage === 'generating' ? 'Analyzing Your Subconscious Map...' : 'Analysis Complete!'}
                    </h1>
                    <p className="text-gray-500">
                        {stage === 'generating'
                            ? 'Our AI and expert graphologists are decoding your strokes. This takes about 5 minutes.'
                            : 'Your detailed personality report is ready to view.'}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="max-w-md mx-auto space-y-2">
                    <Progress value={progress} className="h-3" />
                    <p className="text-xs text-gray-400 text-right">{Math.round(progress)}%</p>
                </div>

                {/* Reputation Video */}
                <Card className="overflow-hidden shadow-2xl border-purple-200">
                    <div className="aspect-video bg-black relative group cursor-pointer flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <PlayCircle className="w-20 h-20 text-white opacity-90 group-hover:scale-110 transition-transform" />
                        <div className="absolute bottom-6 left-6 text-left">
                            <h3 className="text-white font-bold text-lg">Understanding Your Results</h3>
                            <p className="text-gray-300 text-sm">Why your t-bars matter more than you think.</p>
                        </div>
                    </div>
                    <CardContent className="p-6 bg-purple-50 dark:bg-purple-900/10">
                        <p className="text-gray-600 dark:text-gray-300 italic">
                            "While you wait, watch this short video on how Graphotherapy has transformed over 10,000 lives."
                        </p>
                    </CardContent>
                </Card>

                {stage === 'ready' && (
                    <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <Button
                            onClick={handleViewReport}
                            disabled={!videoWatched}
                            size="lg"
                            className="bg-green-600 hover:bg-green-700 text-xl px-12 h-16 shadow-xl shadow-green-500/30"
                        >
                            View My Report Now
                        </Button>
                        {!videoWatched && <p className="text-xs text-red-400 mt-2">Please finish watching the video first.</p>}
                    </div>
                )}
            </div>
        );
    }

    // VIEWING STAGE (Report + Upsell)
    // ... Render ...

    return (
        <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-6">
                <div>
                    <h1 className="text-3xl font-bold">Personal Analysis Report</h1>
                    <p className="text-gray-500">Generated for You on {new Date().toLocaleDateString()}</p>
                </div>
                <Button variant="outline">Download PDF</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Report Content */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Core Personality Matrix</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between font-semibold">
                                    <span>Emotional Stability</span>
                                    <span className={stability === "High" ? "text-green-600" : "text-yellow-600"}>
                                        {stability} ({stabilityScore}/100)
                                    </span>
                                </div>
                                <Progress value={stabilityScore} className="h-2 bg-gray-100" />
                                <p className="text-sm text-gray-600">
                                    {stabilityObs}
                                </p>
                            </div>

                            {/* Dynamic Key Traits */}
                            {analysis?.key_traits?.map((trait: any, idx: number) => (
                                <div key={idx} className="p-3 bg-gray-50 rounded border text-sm">
                                    <div className="font-bold flex justify-between">
                                        {trait.trait}
                                        <span className={trait.impact === "Positive" ? "text-green-600" : "text-red-500"}>{trait.impact}</span>
                                    </div>
                                    <div className="text-gray-600">{trait.description}</div>
                                </div>
                            ))}

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100 text-sm text-purple-900 mt-4">
                                <strong>AI Summary:</strong> {insight}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-red-200 bg-red-50/30">
                        <CardHeader>
                            <CardTitle className="text-red-700 flex items-center">
                                <Lock className="w-5 h-5 mr-2" /> Sections Requiring Correction
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {concerns.length > 0 ? concerns.map((concern: any, i: number) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">{concern.stroke} ({concern.meaning})</strong>
                                        <p className="text-gray-600 text-sm">{concern.fix}</p>
                                    </div>
                                </div>
                            )) : (
                                <p>No major negative strokes found! Great job.</p>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* UPSELL SIDEBAR (Golden Offer) */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="border-4 border-yellow-400 shadow-2xl relative overflow-hidden bg-gradient-to-br from-yellow-50 to-white">
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1">
                            LIMITED TIME OFFER
                        </div>
                        <CardContent className="p-6 text-center space-y-4">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                                <BookOpen className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Level 1 Graphotherapy Book</h3>
                            <p className="text-sm text-gray-600">
                                The exact 21-day stroke correction guide you need to fix the issues in your report.
                            </p>

                            <div className="py-4">
                                <span className="text-gray-400 line-through text-lg">₹4,999</span>
                                <span className="text-3xl font-bold text-red-600 ml-2">₹2,499</span>
                                <div className="text-xs text-green-600 font-bold mt-1">50% OFF - Expires in 15:00</div>
                            </div>

                            <Button
                                className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-bold animate-pulse"
                                onClick={() => router.push('/graphotherapy/funnel/complete')}
                            >
                                Continue to Your Plan
                            </Button>
                            <p className="text-xs text-gray-400">Includes 30-day Portal Access</p>
                        </CardContent>
                    </Card>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800">
                        <strong>Why buy Level 1?</strong> <br />
                        Mere analysis gives you awareness. Graphotherapy gives you the CURE. Don't just know your problems, solve them.
                    </div>
                </div>
            </div>
        </div>
    );
}

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
    const [needsUpload, setNeedsUpload] = useState(false);

    const performAnalysis = async (fileToUse?: File) => {
        setNeedsUpload(false);
        setError("");

        try {
            // @ts-ignore
            const file = fileToUse || window.uploadedGraphologyFile;

            if (!file) {
                console.log("No file found, requesting manual upload");
                setNeedsUpload(true);
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

    // Initial Auto-Trigger
    useEffect(() => {
        if (stage === 'generating') {
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
        if (needsUpload) {
            return (
                <div className="max-w-xl mx-auto space-y-8 animate-in fade-in duration-500 text-center pt-10">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lock className="w-10 h-10 text-red-500" />
                    </div>

                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        Session Expired
                    </h1>
                    <p className="text-gray-500">
                        Your uploaded handwriting sample was cleared for security. Please re-upload to continue the analysis.
                    </p>

                    <Card className="border-2 border-dashed border-gray-300 hover:border-purple-500 transition-colors p-8 cursor-pointer relative overflow-hidden">
                        <input
                            type="file"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    performAnalysis(e.target.files[0]);
                                }
                            }}
                        />
                        <div className="flex flex-col items-center gap-4">
                            <div className="p-4 bg-purple-50 rounded-full text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                            </div>
                            <span className="font-semibold text-purple-700">Click to Re-Upload Image</span>
                        </div>
                    </Card>

                    <Button variant="outline" onClick={() => router.push('/graphotherapy/funnel')}>
                        Start Over
                    </Button>
                </div>
            );
        }

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
                    {/* 1. THE HOOK */}
                    <Card className="bg-gradient-to-r from-purple-50 to-white border-purple-100">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-serif italic text-purple-900 leading-relaxed">
                                "{analysis?.hook || "Your handwriting is a whisper from your subconscious..."}"
                            </h3>
                        </CardContent>
                    </Card>

                    {/* 2. THE 3 INSIGHTS */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                            Key Personality Insights
                        </h2>
                        {analysis?.insights?.map((insight: any, idx: number) => (
                            <Card key={idx} className="overflow-hidden">
                                <CardHeader className="pb-2 bg-gray-50/50">
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        {idx === 0 && <span className="text-blue-500">🧠</span>}
                                        {idx === 1 && <span className="text-red-500">❤️</span>}
                                        {idx === 2 && <span className="text-amber-500">⚡</span>}
                                        {insight.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        {insight.analysis}
                                    </p>

                                    {/* Shadow Hint */}
                                    <div className="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm italic border-l-4 border-purple-500">
                                        <span className="text-purple-400 font-bold not-italic">Shadow Hint: </span>
                                        "{insight.shadow_hint}"
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* 3. THE BLIND SPOT */}
                    <Card className="border-2 border-gray-900 bg-gray-900 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Lock className="w-32 h-32" />
                        </div>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white">
                                <Lock className="w-5 h-5 text-purple-400" />
                                {analysis?.blind_spot?.title || "The Blind Spot"}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <p className="text-gray-300 mb-4">
                                {analysis?.blind_spot?.description}
                            </p>
                            <div className="bg-white/10 backdrop-blur-md p-3 rounded text-center text-sm text-purple-200 border border-white/10">
                                🔒 This trait is often the key to unlocking your full potential.
                            </div>
                        </CardContent>
                    </Card>

                    {/* 4. THE VERDICT */}
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                        <CardHeader>
                            <CardTitle className="text-green-800">
                                {analysis?.verdict?.title || "The Verdict"}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-green-900 font-medium text-lg">
                                {analysis?.verdict?.description}
                            </p>
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

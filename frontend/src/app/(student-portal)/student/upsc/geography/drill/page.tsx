"use client";

import React, { useState, Suspense } from 'react';
import GeographyDrillInterface from '@/components/upsc/subjects/geography/GeographyDrillInterface';
import { ArrowLeft, Target, Zap, Brain, Trophy, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { upscService } from '@/services/upscService';
import { toast } from 'sonner';

function GeographyDrillContent() {
    const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(null);
    const [questions, setQuestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const startDrill = async (selectedDiff: 'easy' | 'medium' | 'hard') => {
        try {
            setLoading(true);
            // Priority 2: Enforce limit 30 for Geography
            const data = await upscService.getDrillQuestions('Geography', selectedDiff, 30);
            
            if (data && data.length > 0) {
                // Map API response to StandardMCQ format
                const mappedQuestions = data.map((q: any) => ({
                    id: q.id,
                    question: q.question_text || q.question,
                    options: q.options || [],
                    correctAnswer: q.correct_option !== undefined ? q.correct_option : q.correctAnswer,
                    explanation: q.explanation || '',
                    chapter: q.topic || q.chapter || 'Geography',
                    subtopic: q.subtopic || 'General',
                    difficulty: (selectedDiff.charAt(0).toUpperCase() + selectedDiff.slice(1)) as any
                }));
                
                setQuestions(mappedQuestions);
                setDifficulty(selectedDiff);
            } else {
                // Priority 1: Graceful Degradation (204 / Empty Results)
                toast.info("Geography Content Generating...", {
                    description: "Our AI is currently finalizing these topics for your cycle. Please check back in a few minutes.",
                });
            }
        } catch (err) {
            console.error("Failed to fetch questions:", err);
            toast.error("Failed to connect to the drill database. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <Loader2 className="w-12 h-12 text-emerald-600 animate-spin mb-4" />
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Fetching Geography MCQs...</h3>
                <p className="text-slate-500">Connecting to production database</p>
            </div>
        );
    }

    if (!difficulty) {
        return (
            <div className="max-w-4xl mx-auto py-12 px-4">
                <Link href="/student/upsc/geography">
                    <button className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors font-bold text-sm uppercase tracking-widest mb-12">
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </button>
                </Link>

                <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <Target className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Geography Practice Hub</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Select your challenge level. We'll pull 20 specialized questions directly from the 1,500+ question production database.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Easy */}
                    <CardSelection 
                        title="Foundation" 
                        diff="easy" 
                        description="Core concepts and fundamental physical geography."
                        icon={<Zap className="w-6 h-6 text-emerald-500" />}
                        color="emerald"
                        onClick={() => startDrill('easy')}
                    />
                    {/* Medium */}
                    <CardSelection 
                        title="Advanced" 
                        diff="medium" 
                        description="Complex interactions, climate patterns, and economic geography."
                        icon={<Brain className="w-6 h-6 text-blue-500" />}
                        color="blue"
                        onClick={() => startDrill('medium')}
                    />
                    {/* Hard */}
                    <CardSelection 
                        title="Mastery" 
                        diff="hard" 
                        description="UPSC-level integration, mapping, and high-difficulty analysis."
                        icon={<Trophy className="w-6 h-6 text-amber-500" />}
                        color="amber"
                        onClick={() => startDrill('hard')}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4">
            <GeographyDrillInterface externalQuestions={questions} />
        </div>
    );
}

function CardSelection({ title, diff, description, icon, color, onClick }: any) {
    const colorClasses: any = {
        emerald: "hover:border-emerald-500/50 bg-emerald-50/30 dark:bg-emerald-900/10",
        blue: "hover:border-blue-500/50 bg-blue-50/30 dark:bg-blue-900/10",
        amber: "hover:border-amber-500/50 bg-amber-50/30 dark:bg-amber-900/10"
    };

    return (
        <div 
            onClick={onClick}
            className={`cursor-pointer p-8 rounded-3xl border-2 border-border transition-all hover:scale-[1.02] hover:shadow-xl ${colorClasses[color]} flex flex-col h-full`}
        >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white dark:bg-slate-800 shadow-sm`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{title}</h3>
            <p className="text-sm text-slate-500 flex-1 mb-8">{description}</p>
            <Button className="w-full font-bold">Start {diff.charAt(0).toUpperCase() + diff.slice(1)}</Button>
        </div>
    );
}

export default function GeographyDrillPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-12">
            <Suspense fallback={<div className="flex items-center justify-center p-20 text-emerald-600 font-bold animate-pulse">Initializing Hub...</div>}>
                <GeographyDrillContent />
            </Suspense>
        </main>
    );
}

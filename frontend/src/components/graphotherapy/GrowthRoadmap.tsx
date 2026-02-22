"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Lock, CheckCircle, ArrowRight, Target, PenTool, Timer, Feather } from 'lucide-react';
import { graphotherapyService } from '@/services/graphotherapyService';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface GrowthDomain {
    id: string;
    title: string;
    description: string;
    icon: string;
    is_locked: boolean;
    unlock_criteria: string;
}

interface RecommendationData {
    primary_recommendation: GrowthDomain;
    alternatives: GrowthDomain[];
    user_context: string;
}

const ICON_MAP: Record<string, React.ReactNode> = {
    'target': <Target className="w-6 h-6" />,
    'pen-tool': <PenTool className="w-6 h-6" />,
    'timer': <Timer className="w-6 h-6" />,
    'feather': <Feather className="w-6 h-6" />
};

export default function GrowthRoadmap() {
    const [data, setData] = useState<RecommendationData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const result = await graphotherapyService.getPredictiveGrowth();
            setData(result);
        } catch (error) {
            console.error("Failed to load growth roadmap", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <div className="p-8 text-center animate-pulse">Calculating growth path...</div>;
    if (!data) return null;

    return (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-card/10 rounded-full blur-2xl" />

                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    AI Recommended Path
                </h2>
                <p className="text-blue-200 mb-6 max-w-xl">
                    {data.user_context} Based on your unique neurological imprint, here is your optimal next step.
                </p>

                {/* Primary Recommendation Card */}
                <div className="bg-card/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-card/15 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-500/20 rounded-lg text-blue-300 border border-blue-400/30">
                            {ICON_MAP[data.primary_recommendation.icon] || <Target className="w-6 h-6" />}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1">{data.primary_recommendation.title}</h3>
                            <p className="text-blue-100/80 mb-4">{data.primary_recommendation.description}</p>

                            <Button className="bg-card text-blue-900 hover:bg-blue-50 font-bold" asChild>
                                <Link href={`/student/graphotherapy/module/${data.primary_recommendation.id}`}>
                                    Start Module <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alternatives */}
            <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Alternative Paths</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {data.alternatives.map((alt) => (
                        <div key={alt.id} className={`rounded-xl p-6 border transition-all ${alt.is_locked ? 'bg-muted border-border opacity-75' : 'bg-card border-border hover:border-blue-500 hover:shadow-md'}`}>
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2 bg-muted rounded-lg text-muted-foreground">
                                    {ICON_MAP[alt.icon] || <Target className="w-5 h-5" />}
                                </div>
                                {alt.is_locked ? (
                                    <div className="flex items-center gap-1 text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">
                                        <Lock className="w-3 h-3" /> Locked
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                                        <CheckCircle className="w-3 h-3" /> Available
                                    </div>
                                )}
                            </div>
                            <h4 className="font-bold text-foreground mb-1">{alt.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{alt.description}</p>

                            {alt.is_locked && (
                                <p className="text-xs text-red-500 font-medium">{alt.unlock_criteria}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

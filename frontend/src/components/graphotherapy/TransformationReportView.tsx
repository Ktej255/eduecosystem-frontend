"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Award, ArrowRight, X, Share2, Copy } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { graphotherapyService } from '@/services/graphotherapyService';
import { Button } from '@/components/ui/button';
import GrowthRoadmap from './GrowthRoadmap';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

interface TransformationData {
    baseline_image_url?: string;
    current_image_url?: string;
    transformation_score: number;
    qualitative_feedback: string;
    metrics: {
        name: string;
        baseline_value: number;
        current_value: number;
        change_percentage: number;
        status: string;
    }[];
}

export default function TransformationReportView() {
    const [data, setData] = useState<TransformationData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const result = await graphotherapyService.compareTransformation();
            setData(result);
        } catch (error) {
            console.error("Failed to load transformation report", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleShare = async () => {
        try {
            const response = await graphotherapyService.shareTransformation();
            await navigator.clipboard.writeText(response.share_url);
            toast.success("Link copied to clipboard!", { description: "Share your transformation with the world." });
        } catch (error) {
            toast.error("Failed to generate link");
        }
    };

    if (isLoading) {
        return <div className="p-8 text-center text-muted-foreground animate-pulse">Analyzing transformation...</div>;
    }

    if (!data) return null;

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-sm font-semibold mb-2">
                    <Sparkles className="w-4 h-4" /> AI Transformation Analysis
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white">
                    Your Handwriting Evolution
                </h2>
                <div className="flex justify-center gap-4">
                    <p className="text-muted-foreground dark:text-muted-foreground max-w-2xl">
                        Comparing your baseline (Day 1) with your current progress to measure neurological shifts.
                    </p>
                    <Button variant="outline" size="sm" onClick={handleShare} className="gap-2 rounded-full hidden md:flex">
                        <Share2 className="w-4 h-4" /> Share
                    </Button>
                </div>
            </div>

            {/* Visual Comparison */}
            <div className="max-w-4xl mx-auto">
                <BeforeAfterSlider
                    beforeImage={data.baseline_image_url}
                    afterImage={data.current_image_url}
                    beforeLabel="Day 1 (Baseline)"
                    afterLabel="Day 21 (Current)"
                />
            </div>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Score Card */}
                <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white text-center flex flex-col items-center justify-center transform hover:scale-105 transition-transform shadow-xl">
                    <div className="text-5xl font-black mb-2">{data.transformation_score}</div>
                    <div className="text-purple-200 font-medium mb-4">Transformation Score</div>
                    <div className="bg-card/20 backdrop-blur-sm rounded-lg px-3 py-1 text-sm flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" /> Top 10% of Batch
                    </div>
                </div>

                {/* Qualitative Feedback */}
                <div className="md:col-span-2 bg-card rounded-2xl p-6 border border-border shadow-lg flex flex-col justify-center">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-500" />
                        AI Analysis
                    </h3>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed italic">
                        "{data.qualitative_feedback}"
                    </p>
                </div>
            </div>

            {/* Detailed Metrics */}
            <div className="max-w-3xl mx-auto space-y-4">
                <h3 className="font-bold text-foreground mb-4">Detailed Metrics</h3>
                {data.metrics.map((metric, i) => (
                    <div key={i} className="bg-muted/50 rounded-xl p-4 flex items-center justify-between border border-border">
                        <div>
                            <div className="font-semibold text-foreground">{metric.name}</div>
                            <div className="text-sm text-green-600 font-medium">+{Math.round(metric.change_percentage)}% Improvement</div>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold text-foreground">{Math.round(metric.current_value)}</div>
                            <div className="text-xs text-muted-foreground">Target: 100</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center pt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-gray-900 dark:bg-card text-white dark:text-foreground hover:bg-gray-800 px-8 py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                            View Your Growth Roadmap <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-none">
                        <GrowthRoadmap />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

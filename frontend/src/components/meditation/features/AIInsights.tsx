"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react';
import { MEDITATION_THEME } from '../theme/MeditationTheme';
import { Button } from '@/components/ui/button';
import { AI_INSIGHTS_SERVICE, Insight } from '@/services/ai/meditationInsights';

export default function AIInsights() {
    const [insights, setInsights] = useState<Insight[]>([]);

    useEffect(() => {
        // Mock fetching session history
        const mockSessions = [{}, {}, {}] as any[];
        const analysis = AI_INSIGHTS_SERVICE.analyzeSessionHistory(mockSessions);
        setInsights(analysis);
    }, []);

    const getIcon = (type: string) => {
        switch (type) {
            case 'pattern': return <TrendingUp className="w-5 h-5 text-indigo-400" />;
            case 'trend': return <Sparkles className="w-5 h-5 text-emerald-400" />;
            case 'recommendation': return <Lightbulb className="w-5 h-5 text-yellow-400" />;
            default: return <Sparkles className="w-5 h-5" />;
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                    <Sparkles className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-light text-white tracking-wide">AI Insights</h2>
                    <p className="text-white/40 text-sm">Personalized analysis of your journey</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {insights.map((insight, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-6 rounded-2xl border border-white/5 ${MEDITATION_THEME.gradients.glassCard} hover:bg-white/10 transition-colors group`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {getIcon(insight.type)}
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-white/40">
                                    {insight.type}
                                </span>
                            </div>
                            {insight.score && (
                                <span className="text-emerald-400 font-bold text-sm">
                                    +{insight.score}%
                                </span>
                            )}
                        </div>

                        <h3 className="text-lg font-medium text-white mb-2">{insight.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            {insight.description}
                        </p>

                        {insight.actionable && (
                            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                <span className="text-xs text-indigo-300 font-medium">
                                    {insight.actionable}
                                </span>
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-white/40 hover:text-white">
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        )}
                    </motion.div>
                ))}

                {/* Upsell / Future Feature Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-6 rounded-xl border border-dashed border-white/10 flex flex-col items-center justify-center text-center space-y-4"
                >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                        <span className="text-xl">🔒</span>
                    </div>
                    <div>
                        <h3 className="text-white font-medium">Unlock Deep Analytics</h3>
                        <p className="text-white/40 text-sm mt-1">Get detailed biometrics & long-term trend analysis.</p>
                    </div>
                    <Button variant="outline" className="border-white/10 text-white/60 hover:text-white hover:bg-white/5">
                        View Premium Plans
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}

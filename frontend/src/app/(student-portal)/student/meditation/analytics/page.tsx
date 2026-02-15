"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MeditationNav from '@/components/meditation/navigation/MeditationNav';
import AmbientBackground from '@/components/meditation/theme/AmbientBackground';
import ProgressGraph from '@/components/meditation/features/ProgressGraph';
import FocusCorrelationChart from '@/components/meditation/features/FocusCorrelationChart';
import AIInsights from '@/components/meditation/features/AIInsights';
import { Calendar, Award, TrendingUp } from 'lucide-react';
import { MEDITATION_THEME } from '@/components/meditation/theme/MeditationTheme';

export default function AnalyticsPage() {
    return (
        <div className="min-h-screen text-white relative font-sans">
            <AmbientBackground />

            <MeditationNav
                title="Your Journey"
                subtitle="Track your path to mindfulness"
                showBack
            />

            <div className="relative z-10 px-6 max-w-7xl mx-auto space-y-8 pb-20">

                {/* Key Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-6 rounded-2xl border border-white/5 ${MEDITATION_THEME.gradients.glassCard}`}
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-400">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-white/60 text-sm">Current Streak</p>
                                <h3 className="text-3xl font-bold text-white">12 Days</h3>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`p-6 rounded-2xl border border-white/5 ${MEDITATION_THEME.gradients.glassCard}`}
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-indigo-500/10 rounded-full text-indigo-400">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-white/60 text-sm">Total Sessions</p>
                                <h3 className="text-3xl font-bold text-white">48</h3>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`p-6 rounded-2xl border border-white/5 ${MEDITATION_THEME.gradients.glassCard}`}
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-400">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-white/60 text-sm">Karma Earned</p>
                                <h3 className="text-3xl font-bold text-white">2,450</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ProgressGraph />
                        <FocusCorrelationChart />
                    </div>
                </motion.div>

                {/* AI Insights Integration */}
                <div className="pt-8 border-t border-white/10">
                    <AIInsights />
                </div>
            </div>
        </div>
    );
}

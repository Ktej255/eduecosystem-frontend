"use client";

import React, { useState, useEffect } from 'react';
import { GraphotherapyEngine, GraphoDrill } from '@/lib/graphotherapy/grapho-engine';
import { graphotherapyService, OverviewResponse } from '@/services/graphotherapyService';
import { Lock, CheckCircle2, Play, Star, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GraphoStreakHeatmap from './GraphoStreakHeatmap';
import TransformationReportView from './TransformationReportView';
import GraphoLeaderboard from './GraphoLeaderboard';
import UnlockLevelModal from './UnlockLevelModal';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function GraphoDashboard() {
    const [overview, setOverview] = useState<OverviewResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await graphotherapyService.getOverview();
                setOverview(data);
            } catch (error) {
                console.error("Failed to load graphotherapy progress:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [activeTab, setActiveTab] = useState<'drills' | 'transformation'>('drills');
    const [showUnlockModal, setShowUnlockModal] = useState(false);

    if (loading) {
        return <div className="min-h-screen bg-neutral-900 flex items-center justify-center text-white">Loading...</div>;
    }

    const currentDay = overview?.current_day || 1;
    const currentLevel = overview?.current_level || 1;

    return (
        <div className="min-h-screen bg-neutral-900 text-white pb-20">
            {/* Header */}
            <div className="relative py-12 px-6 overflow-hidden bg-gradient-to-b from-green-900/40 to-neutral-900">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl font-black mb-2 flex items-center gap-3">
                        <span className="text-green-500">Grapho</span>Therapy
                    </h1>
                    <p className="text-xl text-neutral-400">30 Days to Rewire Your Subconscious.</p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <div className="bg-neutral-800/50 backdrop-blur border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-green-400" />
                            <span className="font-bold">Day {currentDay}</span>
                        </div>
                        <div className="bg-neutral-800/50 backdrop-blur border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-400" />
                            <span className="font-bold">Level {currentLevel}: {overview?.levels.find(l => l.level === currentLevel)?.name}</span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <Tabs defaultValue="drills" onValueChange={(value) => setActiveTab(value as 'drills' | 'transformation')} className="mt-8">
                        <TabsList className="grid w-full grid-cols-2 bg-muted dark:bg-card/5 p-1 rounded-xl">
                            <TabsTrigger
                                value="drills"
                                className={`data-[state=active]:bg-card dark:data-[state=active]:bg-neutral-800 data-[state=active]:shadow-sm rounded-lg transition-all ${activeTab === 'drills' ? '' : 'text-muted-foreground'}`}
                            >
                                Daily Drills
                            </TabsTrigger>
                            <TabsTrigger
                                value="transformation"
                                className={`data-[state=active]:bg-card dark:data-[state=active]:bg-neutral-800 data-[state=active]:shadow-sm rounded-lg transition-all ${activeTab === 'transformation' ? '' : 'text-muted-foreground'}`}
                            >
                                Transformation Insights
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            {activeTab === 'drills' ? (
                <>
                    {/* Analytics Row */}
                    <div className="max-w-6xl mx-auto px-6 -mt-6 relative z-20 mb-8 grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <GraphoStreakHeatmap
                                streak={overview?.total_streak || 0}
                                lastPracticeDate={overview?.last_practice_date || null}
                                totalDays={30}
                            />
                        </div>
                        <div>
                            <GraphoLeaderboard />

                            {/* Upsell / Monetization Card */}
                            <div className="mt-6 bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-6 text-white text-center relative overflow-hidden group cursor-pointer" onClick={() => setShowUnlockModal(true)}>
                                <div className="absolute inset-0 bg-card/5 group-hover:bg-card/10 transition-colors" />
                                <Lock className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                                <h3 className="font-bold text-lg">Unlock Level 2</h3>
                                <p className="text-purple-200 text-sm mb-4">Master Neuro-Linguistic Integration</p>
                                <Button size="sm" className="w-full bg-card text-purple-900 hover:bg-muted font-bold">
                                    Unlock Now
                                </Button>
                            </div>
                        </div>
                    </div>

                    <UnlockLevelModal
                        isOpen={showUnlockModal}
                        onClose={() => setShowUnlockModal(false)}
                        level={{ id: 2, name: "Neuro-Linguistic Integration", price: 5000 }}
                        userCoins={overview?.total_streak /* Mocking coins logic with streak for now or fetch new logic */ ? overview.total_streak * 50 : 0}
                        onSuccess={() => {/* Refresh data */ }}
                    />

                    {/* Grid */}
                    <div className="max-w-4xl mx-auto px-6 mt-8">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                                // Determine Status based on linear progress
                                const isCompleted = day < currentDay;
                                const isCurrent = day === currentDay;
                                const isUnlocked = day <= currentDay;

                                const drill = GraphotherapyEngine.getDrillForDay(day);

                                return (
                                    <Link
                                        href={isUnlocked ? `/student/graphotherapy/drill/${day}` : '#'}
                                        key={day}
                                        className={`relative aspect-square rounded-2xl border flex flex-col items-center justify-center p-4 transition-all group ${isCurrent
                                            ? 'bg-green-600 border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-105 z-10'
                                            : isCompleted
                                                ? 'bg-neutral-800 border-green-900/50 hover:bg-neutral-800/80'
                                                : 'bg-neutral-900 border-neutral-800 opacity-60 cursor-not-allowed'
                                            }`}
                                    >
                                        <div className="text-2xl font-black mb-1">{day}</div>
                                        <div className={`text-xs text-center line-clamp-2 ${isCurrent ? 'text-green-100' : 'text-neutral-500'}`}>
                                            {drill?.focus || (day > 5 ? "Coming Soon" : "Locked")}
                                        </div>

                                        {/* Status Icon */}
                                        <div className="absolute top-2 right-2">
                                            {isCompleted && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                                            {!isUnlocked && <Lock className="w-4 h-4 text-neutral-600" />}
                                            {isCurrent && <Play className="w-5 h-5 text-white animate-pulse" />}
                                        </div>

                                        {/* Label */}
                                        {isCurrent && (
                                            <div className="absolute -bottom-3 bg-card text-green-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                Today
                                            </div>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </>
            ) : (
                <div className="max-w-6xl mx-auto px-6 mt-8">
                    <TransformationReportView />
                </div>
            )}
        </div>
    );
}

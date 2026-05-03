"use client";

import React, { useState, useEffect } from 'react';
import { GraphotherapyEngine, GraphoDrill } from '@/lib/graphotherapy/grapho-engine';
import { graphotherapyService, OverviewResponse, LevelDetailResponse } from '@/services/graphotherapyService';
import { Lock, CheckCircle2, Play, Star, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GraphoStreakHeatmap from './GraphoStreakHeatmap';
import TransformationReportView from './TransformationReportView';
import GraphoLeaderboard from './GraphoLeaderboard';
import UnlockLevelModal from './UnlockLevelModal';
import VisibleTransformation from './VisibleTransformation';
import GrowthCurve from './GrowthCurve';
import MilestoneCelebration from './MilestoneCelebration';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DailyJourneyEngine } from '@/lib/graphotherapy/daily_journey_engine';
import { Progress } from '@/components/ui/progress';
import { Flame, TrendingUp, Award, Zap, Sparkles } from 'lucide-react';

export default function GraphoDashboard() {
    const [overview, setOverview] = useState<OverviewResponse | null>(null);
    const [levelDetail, setLevelDetail] = useState<LevelDetailResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const overviewData = await graphotherapyService.getOverview();
                setOverview(overviewData);
                
                // Also fetch details for the current level
                if (overviewData.current_level) {
                    const detailData = await graphotherapyService.getLevelDetail(overviewData.current_level);
                    setLevelDetail(detailData);
                }
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
    const [showMilestone, setShowMilestone] = useState(false);
    const [milestoneDay, setMilestoneDay] = useState(1);

    useEffect(() => {
        if (overview) {
            const completed = overview.total_days_completed || 0;
            // Show milestone if user just reached 7, 14, or 21 days
            if ([7, 14, 21].includes(completed)) {
                // Check if we've already shown it for this day (could use localStorage)
                const lastShown = localStorage.getItem(`milestone_shown_${completed}`);
                if (!lastShown) {
                    setMilestoneDay(completed);
                    setShowMilestone(true);
                    localStorage.setItem(`milestone_shown_${completed}`, 'true');
                }
            }
        }
    }, [overview]);

    if (loading) {
        return <div className="min-h-screen bg-neutral-900 flex items-center justify-center text-white">Loading...</div>;
    }

    const currentDay = overview?.current_day || 1;
    const currentLevel = overview?.current_level || 1;
    const userState = overview ? DailyJourneyEngine.getUserState(overview) : 'NEW';
    const motivation = DailyJourneyEngine.getMotivationalMessage(userState, overview?.streak_count || 0);
    const progressPercent = overview ? DailyJourneyEngine.getProgressPercentage(overview) : 0;
    const socialProof = overview ? DailyJourneyEngine.getSocialProof(overview) : "";

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
                            <span className="font-bold text-sm">Day {currentDay}</span>
                        </div>
                        <div className="bg-neutral-800/50 backdrop-blur border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                            <Flame className="w-5 h-5 text-orange-500" />
                            <span className="font-bold text-sm">{overview?.streak_count || 0} Day Streak</span>
                        </div>
                        <div className="bg-neutral-800/50 backdrop-blur border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-400" />
                            <span className="font-bold text-sm">Level {currentLevel}</span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-10">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Level Progress</span>
                            <span className="text-2xl font-black text-green-400">{progressPercent}%</span>
                        </div>
                        <div className="h-3 bg-neutral-800 rounded-full overflow-hidden border border-white/5">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${progressPercent}%` }}
                                className="h-full bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                            />
                        </div>
                        <p className="mt-2 text-xs text-neutral-500 font-medium italic">
                            {socialProof}
                        </p>
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
                    {/* Motivation Layer */}
                    <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-30 mb-8">
                         <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className={`p-6 rounded-3xl border shadow-2xl flex items-center gap-6 ${
                                userState === 'DROPPING' || userState === 'STRUGGLING'
                                ? 'bg-red-950/40 border-red-500/30 backdrop-blur-xl' 
                                : 'bg-neutral-800/80 border-white/10 backdrop-blur-xl'
                            }`}
                         >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-inner ${
                                userState === 'DROPPING' || userState === 'STRUGGLING' ? 'bg-red-500/20' : 'bg-green-500/20'
                            }`}>
                                {motivation.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-xl font-black ${motivation.color}`}>
                                    {motivation.title}
                                </h3>
                                <p className="text-neutral-400 text-sm mt-1">{motivation.body}</p>
                            </div>
                            {(userState === 'DROPPING' || userState === 'STRUGGLING' || userState === 'NEW') && (
                                <Link href={`/student/graphotherapy/drill/${currentDay}`}>
                                    <Button className={`${userState === 'STRUGGLING' ? 'bg-red-600 hover:bg-red-500' : 'bg-green-600 hover:bg-green-500'} font-bold px-6 rounded-xl shadow-lg shadow-black/20`}>
                                        {userState === 'NEW' ? 'Start Journey' : 'Reclaim Streak'}
                                    </Button>
                                </Link>
                            )}
                         </motion.div>
                    </div>

                    {/* Analytics Row */}
                    <div className="max-w-6xl mx-auto px-6 relative z-20 mb-8 grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <GraphoStreakHeatmap
                                streak={overview?.streak_count || 0}
                                lastPracticeDate={overview?.last_active_date || null}
                                totalDays={21}
                            />
                        </div>
                        <div className="space-y-6">
                            {/* Retention Stats */}
                            <div className="bg-neutral-800/50 border border-white/5 rounded-2xl p-6">
                                <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Your Impact</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-3 bg-neutral-900/50 rounded-xl">
                                        <div className="text-2xl font-black text-blue-400">{overview?.total_days_completed || 0}</div>
                                        <div className="text-[10px] text-neutral-500 uppercase mt-1">Days Done</div>
                                    </div>
                                    <div className="text-center p-3 bg-neutral-900/50 rounded-xl">
                                        <div className="text-2xl font-black text-orange-400">{overview?.streak_count || 0}</div>
                                        <div className="text-[10px] text-neutral-500 uppercase mt-1">Current Streak</div>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                                    <TrendingUp className="w-4 h-4 text-green-400" />
                                    <span className="text-[10px] text-green-400 font-bold uppercase tracking-tight">
                                        {socialProof}
                                    </span>
                                </div>
                            </div>

                            <GraphoLeaderboard />

                            {/* Upsell / Monetization Card */}
                            {currentLevel === 1 && (
                                <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-6 text-white text-center relative overflow-hidden group cursor-pointer" onClick={() => setShowUnlockModal(true)}>
                                    <div className="absolute inset-0 bg-card/5 group-hover:bg-card/10 transition-colors" />
                                    <Lock className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                                    <h3 className="font-bold text-lg">Unlock Level 2</h3>
                                    <p className="text-purple-200 text-sm mb-4">Master Neuro-Linguistic Integration</p>
                                    <Button size="sm" className="w-full bg-card text-purple-900 hover:bg-muted font-bold">
                                        Unlock Now
                                    </Button>
                                </div>
                            )}
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
                            {(levelDetail?.days || Array.from({ length: 21 }, (_, i) => ({
                                day_number: i + 1,
                                is_unlocked: i + 1 === 1,
                                is_completed: false,
                                focus_area: "Locked"
                            }))).map((dayInfo) => {
                                const day = dayInfo.day_number;
                                const isCompleted = dayInfo.is_completed;
                                const isUnlocked = dayInfo.is_unlocked;
                                const isCurrent = isUnlocked && !isCompleted;

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
                                            {dayInfo.focus_area || "Drill " + day}
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
                <div className="max-w-6xl mx-auto px-6 mt-8 space-y-12 pb-20">
                    <VisibleTransformation 
                        baselineImage={overview?.baseline_image || "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=2000&auto=format&fit=crop"} 
                        currentImage={overview?.latest_image || "https://images.unsplash.com/photo-1506784923340-05822f300c85?q=80&w=2040&auto=format&fit=crop"}
                        transformationScore={overview?.transformation_score || 24}
                        currentDay={currentDay}
                    />

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <GrowthCurve />
                        </div>
                        <div>
                             <Card className="bg-neutral-800/50 border-white/5 backdrop-blur-xl rounded-3xl h-full overflow-hidden">
                                <CardHeader>
                                    <CardTitle className="text-sm font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                                        <Award className="w-4 h-4 text-yellow-400" />
                                        Subconscious Badges
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-neutral-900/50 rounded-2xl border border-white/5">
                                        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-xl">🌱</div>
                                        <div>
                                            <div className="text-sm font-bold text-white">The Seeker</div>
                                            <div className="text-[10px] text-neutral-500 uppercase">Started Level 1</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-neutral-900/50 rounded-2xl border border-white/5 grayscale opacity-50">
                                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">🌊</div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Flow State</div>
                                            <div className="text-[10px] text-neutral-500 uppercase">Complete 14 Days</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-neutral-900/50 rounded-2xl border border-white/5 grayscale opacity-50">
                                        <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center text-xl">⚡</div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Neural Master</div>
                                            <div className="text-[10px] text-neutral-500 uppercase">Finish Level 1</div>
                                        </div>
                                    </div>
                                </CardContent>
                             </Card>
                        </div>
                    </div>

                    {/* Detailed Analysis View (Original) */}
                    <div className="pt-12 border-t border-white/5">
                        <h3 className="text-xl font-black text-white mb-6">Detailed Forensic Analysis</h3>
                        <TransformationReportView />
                    </div>
                </div>
            )}

            <MilestoneCelebration 
                day={milestoneDay}
                isOpen={showMilestone}
                onClose={() => setShowMilestone(false)}
            />
        </div>
    );
}

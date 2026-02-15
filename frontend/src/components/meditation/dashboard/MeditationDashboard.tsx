"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMeditationStore, MEDITATION_LEVELS, MeditationLevel } from '../store/MeditationProgressionStore';
import MeditationLevelCard from './MeditationLevelCard';
import LevelPurchaseModal from '../LevelPurchaseModal';
import { Sparkles, Flower, Activity, BarChart3, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

// Phase 3 Imports
import AmbientBackground from '../theme/AmbientBackground';
import { MEDITATION_THEME } from '../theme/MeditationTheme';
import MeditationNav from '../navigation/MeditationNav';

// Experiences
import Level1_Breathing from '../experiences/Level1_Breathing';
import Level2ZenGarden from '../experiences/Level2ZenGarden';
import Level3_Resonance from '../experiences/Level3_Resonance';

import { useAuth } from '@/contexts/auth-context';

export default function MeditationDashboard() {
    const { user } = useAuth();
    const {
        unlockedLevels,
        karmaCoins,
        streakDays,
        grantLevel,
        completeSession,
        syncPurchases
    } = useMeditationStore();

    const [selectedLevelId, setSelectedLevelId] = useState<number | null>(null);
    const [purchaseModalState, setPurchaseModalState] = useState<{
        isOpen: boolean;
        level: MeditationLevel | null;
    }>({
        isOpen: false,
        level: null
    });

    // Sync purchases on mount
    useEffect(() => {
        syncPurchases();
    }, [syncPurchases]);

    const handleUnlockRequest = (id: number) => {
        const level = MEDITATION_LEVELS.find(l => l.id === id);
        if (level) {
            setPurchaseModalState({ isOpen: true, level });
        }
    };

    const handlePurchaseSuccess = () => {
        if (purchaseModalState.level) {
            grantLevel(purchaseModalState.level.id);
            toast.success("Purchase Successful!", {
                description: `You have unlocked ${purchaseModalState.level.name}. A receipt has been sent to your email.`
            });
            setPurchaseModalState({ isOpen: false, level: null });
        }
    };

    const renderExperience = () => {
        if (!selectedLevelId) return null;

        switch (selectedLevelId) {
            case 1: return <Level1_Breathing onExit={() => setSelectedLevelId(null)} onComplete={() => completeSession(10)} />;
            case 2: return <Level2ZenGarden onExit={() => setSelectedLevelId(null)} onComplete={() => completeSession(15)} />;
            case 3: return <Level3_Resonance onExit={() => setSelectedLevelId(null)} onComplete={() => completeSession(20)} />;
            default: return (
                <div className="flex flex-col items-center justify-center p-20 text-center gap-6 bg-slate-950/80 backdrop-blur-xl rounded-3xl border border-white/10">
                    <h2 className="text-3xl font-light text-white">Experience Coming Soon</h2>
                    <Button
                        onClick={() => setSelectedLevelId(null)}
                        className="rounded-full px-8 bg-white/10 hover:bg-white/20 border-white/20"
                    >
                        Return to Sanctum
                    </Button>
                </div>
            );
        }
    };

    if (selectedLevelId) {
        return (
            <div className="fixed inset-0 z-[60] bg-black">
                {renderExperience()}
            </div>
        );
    }

    return (
        <div className="min-h-screen text-white overflow-hidden relative">
            {/* Phase 3: Ambient Background */}
            <AmbientBackground />

            <div className="relative z-10 max-w-7xl mx-auto py-12 px-6">
                {/* Navigation Header */}
                <MeditationNav
                    title="Inner Sanctum"
                    subtitle="Ascend through the levels of consciousness"
                    rightActions={
                        <div className="flex flex-wrap justify-end gap-3">
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${MEDITATION_THEME.gradients.glassCard}`}>
                                <Activity className="w-4 h-4 text-orange-400" />
                                <span className="font-bold text-orange-100 whitespace-nowrap">{streakDays} Day Streak</span>
                            </div>
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${MEDITATION_THEME.gradients.glassCard}`}>
                                <Sparkles className="w-4 h-4 text-yellow-400" />
                                <span className="font-bold text-yellow-100 whitespace-nowrap">{karmaCoins} Karma</span>
                            </div>
                            <Link href="/student/meditation/analytics">
                                <Button className={`flex items-center gap-2 rounded-full px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/40 border border-indigo-500/30 transition-all text-white`}>
                                    <BarChart3 className="w-4 h-4" />
                                    <span className="hidden sm:inline">Analytics</span>
                                </Button>
                            </Link>
                            <Link href="/student/meditation/purchases">
                                <Button title="History" className={`flex items-center gap-2 rounded-full px-4 py-2 bg-fuchsia-500/20 hover:bg-fuchsia-500/40 border border-fuchsia-500/30 transition-all text-white`}>
                                    <CreditCard className="w-4 h-4" />
                                    <span className="hidden sm:inline">History</span>
                                </Button>
                            </Link>
                        </div>
                    }
                />

                {/* Level Grid - With Staggered Entry */}
                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {MEDITATION_LEVELS.map((level, index) => (
                            <motion.div
                                key={level.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                            >
                                <MeditationLevelCard
                                    level={level}
                                    isUnlocked={unlockedLevels.includes(level.id)}
                                    onUnlock={handleUnlockRequest}
                                    onPlay={setSelectedLevelId}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modals */}
            {purchaseModalState.isOpen && purchaseModalState.level && (
                <LevelPurchaseModal
                    isOpen={purchaseModalState.isOpen}
                    onClose={() => setPurchaseModalState({ ...purchaseModalState, isOpen: false })}
                    level={{
                        id: purchaseModalState.level.id,
                        name: purchaseModalState.level.name,
                        description: purchaseModalState.level.description,
                        price: purchaseModalState.level.id === 1 ? 0 : purchaseModalState.level.id === 2 ? 1499 : purchaseModalState.level.id === 3 ? 1999 : 2499,
                        currency: "INR"
                    }}
                    onPurchaseSuccess={handlePurchaseSuccess}
                    userName={user?.full_name || undefined}
                    userEmail={user?.email}
                />
            )}
        </div>
    );
}

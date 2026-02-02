"use client";

import React, { useState } from 'react';
import { useMeditationStore, MEDITATION_LEVELS, MeditationLevel } from '../store/MeditationProgressionStore';
import MeditationLevelCard from './MeditationLevelCard';
import MeditationUnlockModal from './MeditationUnlockModal';
import { Sparkles, Flower, Wind, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Placeholder Imports for Experiences (Will be created next)
import Level1_Breathing from '../experiences/Level1_Breathing';
import Level2_ZenGarden from '../experiences/Level2_ZenGarden';

export default function MeditationDashboard() {
    const {
        currentLevel,
        unlockedLevels,
        karmaCoins,
        streakDays,
        unlockLevel,
        completeSession
    } = useMeditationStore();

    const [selectedLevelId, setSelectedLevelId] = useState<number | null>(null);
    const [unlockModalState, setUnlockModalState] = useState<{ isOpen: boolean; level: MeditationLevel | null }>({
        isOpen: false,
        level: null
    });

    // If an experience is selected (and unlocked), render it Full Screen
    if (selectedLevelId) {
        const renderExperience = () => {
            // We will implement these one by one. For now, only wiring Level 1 & 2
            switch (selectedLevelId) {
                case 1: return <Level1_Breathing onExit={() => setSelectedLevelId(null)} onComplete={completeSession} />;
                case 2: return <Level2_ZenGarden onExit={() => setSelectedLevelId(null)} onComplete={completeSession} />;
                default: return <div className="text-white p-20 text-center">Experience Coming Soon <Button onClick={() => setSelectedLevelId(null)}>Exit</Button></div>;
            }
        };

        return (
            <div className="fixed inset-0 z-50 bg-black">
                {renderExperience()}
            </div>
        );
    }

    const handleUnlockRequest = (id: number) => {
        const level = MEDITATION_LEVELS.find(l => l.id === id);
        if (level) setUnlockModalState({ isOpen: true, level });
    };

    const confirmUnlock = () => {
        if (unlockModalState.level) {
            const success = unlockLevel(unlockModalState.level.id);
            if (success) {
                setUnlockModalState({ isOpen: false, level: null });
                // Optional: Play sound or show toast
            }
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white overflow-hidden relative">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-emerald-900/20 to-transparent pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 px-6 py-8 md:px-12 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black flex items-center gap-3">
                        <Flower className="w-8 h-8 text-emerald-500" />
                        Inner<span className="text-emerald-500">Sanctum</span>
                    </h1>
                    <p className="text-neutral-400 text-sm mt-1">Daily Mindful Progression</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-full border border-neutral-800">
                        <Activity className="w-4 h-4 text-orange-500" />
                        <span className="font-bold">{streakDays} Day Streak</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-full border border-neutral-800">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="font-bold">{karmaCoins} Karma</span>
                    </div>
                </div>
            </div>

            {/* Level Grid */}
            <div className="relative z-10 px-6 md:px-12 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MEDITATION_LEVELS.map(level => (
                        <MeditationLevelCard
                            key={level.id}
                            level={level}
                            isUnlocked={unlockedLevels.includes(level.id)}
                            userCoins={karmaCoins}
                            onUnlock={handleUnlockRequest}
                            onPlay={setSelectedLevelId}
                        />
                    ))}
                </div>
            </div>

            {/* Modals */}
            <MeditationUnlockModal
                isOpen={unlockModalState.isOpen}
                onClose={() => setUnlockModalState({ ...unlockModalState, isOpen: false })}
                level={unlockModalState.level}
                userCoins={karmaCoins}
                onConfirm={confirmUnlock}
            />
        </div>
    );
}

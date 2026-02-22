"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trophy, Sparkles, Share2, X } from 'lucide-react';
import { Achievement } from '@/lib/gamification';

interface AchievementToastProps {
    achievement: Achievement | null;
    onClose: () => void;
}

export default function AchievementToast({ achievement, onClose }: AchievementToastProps) {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (achievement) {
            setShowConfetti(true);
            // Clear confetti after animation
            const timer = setTimeout(() => setShowConfetti(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [achievement]);

    if (!achievement) return null;

    return (
        <Dialog open={!!achievement} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-sm bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900/50 dark:to-yellow-900/50 border-amber-300">
                {/* Confetti Effect */}
                {showConfetti && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {Array.from({ length: 30 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-bounce"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 0.5}s`,
                                    animationDuration: `${0.5 + Math.random() * 0.5}s`
                                }}
                            >
                                <Sparkles
                                    className={`h-4 w-4 ${['text-amber-400', 'text-yellow-400', 'text-orange-400', 'text-pink-400'][Math.floor(Math.random() * 4)]
                                        }`}
                                />
                            </div>
                        ))}
                    </div>
                )}

                <div className="text-center py-6 relative z-10">
                    <div className="mb-4">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-5xl shadow-lg animate-pulse">
                            {achievement.icon}
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-2">
                        <Trophy className="h-5 w-5 text-amber-600" />
                        <span className="text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                            Achievement Unlocked!
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-2">
                        {achievement.name}
                    </h2>
                    <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                        {achievement.description}
                    </p>

                    <div className="inline-flex items-center gap-1 px-4 py-2 bg-amber-200 dark:bg-amber-800 rounded-full text-amber-800 dark:text-amber-200 font-bold">
                        <Sparkles className="h-4 w-4" />
                        +{achievement.xpReward} XP
                    </div>

                    <div className="mt-6 flex justify-center gap-3">
                        <Button
                            onClick={onClose}
                            className="bg-amber-500 hover:bg-amber-600 text-white"
                        >
                            Awesome!
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

// Hook for managing achievement notifications
export function useAchievementToast() {
    const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);
    const [queue, setQueue] = useState<Achievement[]>([]);

    const showAchievement = (achievement: Achievement) => {
        if (currentAchievement) {
            setQueue(prev => [...prev, achievement]);
        } else {
            setCurrentAchievement(achievement);
        }
    };

    const showAchievements = (achievements: Achievement[]) => {
        if (achievements.length === 0) return;

        if (currentAchievement) {
            setQueue(prev => [...prev, ...achievements]);
        } else {
            setCurrentAchievement(achievements[0]);
            if (achievements.length > 1) {
                setQueue(achievements.slice(1));
            }
        }
    };

    const handleClose = () => {
        if (queue.length > 0) {
            setCurrentAchievement(queue[0]);
            setQueue(prev => prev.slice(1));
        } else {
            setCurrentAchievement(null);
        }
    };

    return {
        currentAchievement,
        showAchievement,
        showAchievements,
        handleClose,
        AchievementToastComponent: () => (
            <AchievementToast
                achievement={currentAchievement}
                onClose={handleClose}
            />
        )
    };
}

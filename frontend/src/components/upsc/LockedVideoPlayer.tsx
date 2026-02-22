"use client";

import React, { useState } from 'react';
import { Lock, Play, Star, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VideoPlayer } from '@/components/features/lms/VideoPlayer';

interface LockedVideoPlayerProps {
    videoUrl: string;
    isUnlocked: boolean;
    title: string;
    onUnlockRequest?: () => void;
}

export default function LockedVideoPlayer({
    videoUrl,
    isUnlocked,
    title,
    onUnlockRequest
}: LockedVideoPlayerProps) {
    if (!isUnlocked) {
        return (
            <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden flex flex-col items-center justify-center p-8 text-center border border-gray-800">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="relative z-10 max-w-md space-y-6">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto border-2 border-gray-700">
                        <Lock className="w-8 h-8 text-muted-foreground" />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Level 2: Visual Classroom</h3>
                        <p className="text-muted-foreground text-sm">
                            This premium video lecture is unlocked for consistent learners.
                            Complete 3 more chapters to unlock this reward.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold"
                            onClick={onUnlockRequest}
                        >
                            <Star className="w-4 h-4 mr-2" /> Check My Consistency
                        </Button>
                        <p className="text-xs text-muted-foreground">
                            Requirement: 7-day streak + &gt;80% MCQ Accuracy
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-green-500 font-bold bg-green-900/10 p-2 rounded-lg border border-green-900/20 w-fit">
                <ShieldCheck className="w-4 h-4" />
                <span>Level 2 Unlocked: Visual Classroom</span>
            </div>
            <VideoPlayer
                src={videoUrl}
                poster="/assets/video-poster-placeholder.jpg"
                autoPlay={false}
            />
        </div>
    );
}

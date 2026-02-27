"use client";

import React, { useState, useEffect } from 'react';
import { isWithinLiveWindow, formatTimeWindow } from '@/lib/journey/class-config';
import { useClassConfig } from '@/hooks/useClassConfig';
import { markStepComplete } from '@/lib/journey/completion-tracker';
import { JourneyEngine } from '@/lib/journey/journey-engine';
import { Video, ExternalLink, Play, CheckCircle, ChevronLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface MeditationSessionProps {
    onComplete?: () => void;
    redirectAfterComplete?: string;
}

export default function MeditationSession({ onComplete, redirectAfterComplete = '/student/graphotherapy' }: MeditationSessionProps) {
    const [isLive, setIsLive] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const CLASS_CONFIG = useClassConfig();

    useEffect(() => {
        // Check live status on mount and every minute
        const checkLiveStatus = () => {
            setIsLive(isWithinLiveWindow(CLASS_CONFIG.morning));
            setCurrentTime(new Date());
        };

        checkLiveStatus();
        const interval = setInterval(checkLiveStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleComplete = () => {
        // Calculate current day number
        const plan = JourneyEngine.generateDailyPlan(new Date(), {
            lastCompletedDate: null, streakDays: 0, completedChapters: [], masteredChapters: [], weakTopics: []
        });

        // Mark meditation as complete in localStorage
        markStepComplete(plan.dayNumber, `meditation-${plan.dayNumber}`);

        setIsCompleted(true);
        if (onComplete) onComplete();
    };

    if (isCompleted) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white flex flex-col items-center justify-center p-6">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6 animate-in zoom-in">
                    <CheckCircle className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black mb-2">Meditation Complete!</h2>
                <p className="text-purple-300 mb-8 text-center max-w-md">
                    Your mind is now clear and focused. Proceed to Graphotherapy.
                </p>
                <Link href={redirectAfterComplete}>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 rounded-xl px-8 py-6 font-bold text-lg">
                        Continue to Graphotherapy →
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white pb-20">
            {/* Header */}
            <div className="border-b border-purple-800/50 p-4 sticky top-0 bg-indigo-900/80 backdrop-blur z-20 flex justify-between items-center">
                <Link href="/student/dashboard" className="p-2 hover:bg-purple-800/50 rounded-full">
                    <ChevronLeft className="w-5 h-5 text-purple-300" />
                </Link>
                <div className="font-bold text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="w-9" />
            </div>

            <div className="max-w-3xl mx-auto p-6 md:p-8">
                {/* Title Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-bold mb-4">
                        {isLive ? (
                            <>
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                LIVE NOW
                            </>
                        ) : (
                            <>
                                <Video className="w-4 h-4" />
                                RECORDED SESSION
                            </>
                        )}
                    </div>
                    <h1 className="text-4xl font-black mb-2">{CLASS_CONFIG.morning.title}</h1>
                    <p className="text-purple-300">{CLASS_CONFIG.morning.description}</p>
                </div>

                {/* Content Area */}
                <div className="bg-purple-900/30 rounded-3xl border border-purple-700/50 overflow-hidden">
                    {isLive ? (
                        /* LIVE: Show Google Meet Link */
                        <div className="p-8 md:p-12 text-center">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ExternalLink className="w-10 h-10 text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Live Class in Progress</h2>
                            <p className="text-purple-300 mb-2">
                                Live Window: {formatTimeWindow(CLASS_CONFIG.morning)}
                            </p>
                            <p className="text-purple-400 text-sm mb-8">
                                Click below to join the live meditation session with your mentor.
                            </p>
                            <a
                                href={CLASS_CONFIG.morning.meetLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 rounded-xl px-10 py-6 font-bold text-lg shadow-lg shadow-green-500/30">
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    Join Google Meet
                                </Button>
                            </a>
                            <div className="mt-8 pt-8 border-t border-purple-700/50">
                                <Button
                                    variant="ghost"
                                    className="text-purple-300 hover:text-white hover:bg-purple-800/50"
                                    onClick={handleComplete}
                                >
                                    I've completed the session →
                                </Button>
                            </div>
                        </div>
                    ) : (
                        /* RECORDED: Show YouTube Video */
                        <div className="space-y-6">
                            <div className="aspect-video bg-black">
                                <iframe
                                    src={CLASS_CONFIG.morning.recordedVideo}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ border: 'none' }}
                                />
                            </div>
                            <div className="p-6 text-center">
                                <p className="text-purple-300 text-sm mb-4">
                                    Live session window: {formatTimeWindow(CLASS_CONFIG.morning)}
                                </p>
                                <p className="text-purple-400 text-xs mb-6">
                                    Watch the recorded meditation session above. Once complete, proceed to Graphotherapy.
                                </p>
                                <Button
                                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 rounded-xl px-8 py-4 font-bold"
                                    onClick={handleComplete}
                                >
                                    <Play className="w-5 h-5 mr-2" />
                                    Mark Complete & Continue
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

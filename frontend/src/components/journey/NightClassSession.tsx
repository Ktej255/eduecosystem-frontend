"use client";

import React, { useState, useEffect } from 'react';
import { CLASS_CONFIG, isWithinLiveWindow, formatTimeWindow } from '@/lib/journey/class-config';
import { Video, ExternalLink, CheckCircle, ChevronLeft, Clock, Moon, BookHeart, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type NightStep = 'class' | 'appreciation' | 'audit' | 'complete';

interface NightClassSessionProps {
    onComplete?: () => void;
}

export default function NightClassSession({ onComplete }: NightClassSessionProps) {
    const [isLive, setIsLive] = useState(false);
    const [step, setStep] = useState<NightStep>('class');
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const checkLiveStatus = () => {
            setIsLive(isWithinLiveWindow(CLASS_CONFIG.night));
            setCurrentTime(new Date());
        };

        checkLiveStatus();
        const interval = setInterval(checkLiveStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    if (step === 'complete') {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-black text-white flex flex-col items-center justify-center p-6">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6 animate-in zoom-in">
                    <CheckCircle className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black mb-2">Day Complete!</h2>
                <p className="text-indigo-300 mb-8 text-center max-w-md">
                    You've completed another successful day of learning. Rest well!
                </p>
                <Link href="/student/dashboard">
                    <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 rounded-xl px-8 py-6 font-bold text-lg">
                        Back to Dashboard
                    </Button>
                </Link>
            </div>
        );
    }

    if (step === 'appreciation') {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-black text-white flex flex-col items-center justify-center p-6">
                <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 mb-6">
                    <BookHeart className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Appreciation Journal</h2>
                <p className="text-indigo-300 mb-8 text-center max-w-md">
                    Write 3 things you're grateful for today. This practice rewires your brain for positivity.
                </p>
                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        className="border-indigo-700 text-indigo-300 hover:bg-indigo-800/50 px-8 py-4"
                        onClick={() => setStep('audit')}
                    >
                        Skip
                    </Button>
                    <Button
                        className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4"
                        onClick={() => setStep('audit')}
                    >
                        Done ✓
                    </Button>
                </div>
            </div>
        );
    }

    if (step === 'audit') {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-black text-white flex flex-col items-center justify-center p-6">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-6">
                    <ClipboardCheck className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Audit of the Day</h2>
                <p className="text-indigo-300 mb-8 text-center max-w-md">
                    Review your day: What went well? What could be improved? What will you do differently tomorrow?
                </p>
                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        className="border-indigo-700 text-indigo-300 hover:bg-indigo-800/50 px-8 py-4"
                        onClick={() => setStep('complete')}
                    >
                        Skip
                    </Button>
                    <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
                        onClick={() => setStep('complete')}
                    >
                        Done ✓
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-black text-white pb-20">
            {/* Header */}
            <div className="border-b border-indigo-800/50 p-4 sticky top-0 bg-slate-900/80 backdrop-blur z-20 flex justify-between items-center">
                <Link href="/student/dashboard" className="p-2 hover:bg-indigo-800/50 rounded-full">
                    <ChevronLeft className="w-5 h-5 text-indigo-300" />
                </Link>
                <div className="font-bold text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="w-9" />
            </div>

            <div className="max-w-3xl mx-auto p-6 md:p-8">
                {/* Title Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-sm font-bold mb-4">
                        {isLive ? (
                            <>
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                LIVE NOW
                            </>
                        ) : (
                            <>
                                <Moon className="w-4 h-4" />
                                RECORDED SESSION
                            </>
                        )}
                    </div>
                    <h1 className="text-4xl font-black mb-2">{CLASS_CONFIG.night.title}</h1>
                    <p className="text-indigo-300">{CLASS_CONFIG.night.description}</p>
                </div>

                {/* Content Area */}
                <div className="bg-indigo-900/30 rounded-3xl border border-indigo-700/50 overflow-hidden">
                    {isLive ? (
                        <div className="p-8 md:p-12 text-center">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ExternalLink className="w-10 h-10 text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Live Class in Progress</h2>
                            <p className="text-indigo-300 mb-2">
                                Live Window: {formatTimeWindow(CLASS_CONFIG.night)}
                            </p>
                            <a
                                href={CLASS_CONFIG.night.meetLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 rounded-xl px-10 py-6 font-bold text-lg shadow-lg shadow-green-500/30">
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    Join Google Meet
                                </Button>
                            </a>
                            <div className="mt-8 pt-8 border-t border-indigo-700/50">
                                <Button
                                    variant="ghost"
                                    className="text-indigo-300 hover:text-white hover:bg-indigo-800/50"
                                    onClick={() => setStep('appreciation')}
                                >
                                    I've completed the class →
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="aspect-video bg-black">
                                <iframe
                                    src={CLASS_CONFIG.night.recordedVideo}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ border: 'none' }}
                                />
                            </div>
                            <div className="p-6 text-center">
                                <p className="text-indigo-300 text-sm mb-4">
                                    Live session window: {formatTimeWindow(CLASS_CONFIG.night)}
                                </p>
                                <Button
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 rounded-xl px-8 py-4 font-bold"
                                    onClick={() => setStep('appreciation')}
                                >
                                    Continue to Journals →
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { GraphoDrill } from '@/lib/graphotherapy/grapho-engine';
import { CLASS_CONFIG } from '@/lib/journey/class-config';
import { markStepComplete } from '@/lib/journey/completion-tracker';
import {
    ChevronLeft,
    Camera,
    Check,
    PenTool,
    Info,
    Timer,
    Play,
    Pause,
    Upload,
    BookHeart,
    HelpCircle,
    ArrowRight,
    Activity
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GraphoAIAnalyzer from './GraphoAIAnalyzer';
import GraphoVoiceSync from './GraphoVoiceSync';
import { graphotherapyService } from '@/services/graphotherapyService';

// ... (existing helper types)
type DrillStep =
    | 'page-instructions'
    | 'page-writing'
    | 'page-upload'
    | 'gratitude-confirm'
    | 'questions-confirm'
    | 'complete';

interface DailyDrillModeProps {
    drill: GraphoDrill;
    level?: number;
}

export default function DailyDrillMode({ drill, level = CLASS_CONFIG.graphotherapy.currentLevel }: DailyDrillModeProps) {
    const pagesRequired = level; // Level 2 = 2 pages

    // State
    const [currentPage, setCurrentPage] = useState(1);
    const [step, setStep] = useState<DrillStep>('page-instructions');
    const [files, setFiles] = useState<(File | null)[]>(Array(pagesRequired).fill(null));
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showAnalyzer, setShowAnalyzer] = useState(false);
    const [isVoiceSyncActive, setIsVoiceSyncActive] = useState(false); // Controls Voice Sync
    const [startTime, setStartTime] = useState<Date | null>(null); // Metadata tracking

    // Stopwatch State
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Stopwatch Logic
    useEffect(() => {
        if (isTimerRunning) {
            timerRef.current = setInterval(() => {
                setElapsedSeconds(prev => prev + 1);
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isTimerRunning]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const startTimer = () => {
        setIsTimerRunning(true);
        setStep('page-writing');
        setStartTime(new Date());
    };

    const resetTimerForNextPage = () => {
        setElapsedSeconds(0);
        setIsTimerRunning(false);
    };

    // File Handling
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const newFiles = [...files];
            newFiles[currentPage - 1] = e.target.files[0];
            setFiles(newFiles);
        }
    };

    const handlePageSubmit = async () => {
        const file = files[currentPage - 1];
        if (!file) return;

        setIsSubmitting(true);

        // Try to save to backend (don't block on failure)
        try {
            const duration = startTime
                ? Math.round((new Date().getTime() - startTime.getTime()) / 1000)
                : 0;

            await graphotherapyService.completeDay(
                level,
                drill.day,
                file,
                startTime?.toISOString(),
                duration
            );
        } catch (error) {
            console.warn("API save failed, continuing offline:", error);
            // Save to localStorage as backup
            const savedProgress = JSON.parse(localStorage.getItem('graphotherapy_progress') || '{}');
            savedProgress[`day_${drill.day}_page_${currentPage}`] = {
                completed: true,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem('graphotherapy_progress', JSON.stringify(savedProgress));
        }

        toast.success(`Page ${currentPage} submitted!`);
        setIsSubmitting(false);

        if (currentPage < pagesRequired) {
            // Move to next page
            setCurrentPage(prev => prev + 1);
            resetTimerForNextPage();
            setStep('page-instructions');
        } else {
            // All pages done, move to journal confirmations
            setStep('gratitude-confirm');
        }
    };

    // Render based on current step
    if (step === 'complete') {
        return (
            <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6 animate-in zoom-in">
                    <Check className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black mb-2">Graphotherapy Complete!</h2>
                <p className="text-neutral-400 mb-8 text-center max-w-md">
                    Your neural pathways are being rewired. Consistency is key.
                </p>
                <Link href="/student/dashboard">
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 rounded-xl px-8 py-6 font-bold text-lg">
                        Back to Dashboard →
                    </Button>
                </Link>
            </div>
        );
    }

    if (step === 'gratitude-confirm') {
        return (
            <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6">
                <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-500 mb-6">
                    <BookHeart className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Gratitude Journal</h2>
                <p className="text-neutral-400 mb-8 text-center max-w-md">
                    Have you completed your Gratitude Journal for today?
                </p>
                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 px-8 py-4"
                        onClick={() => setStep('questions-confirm')}
                    >
                        Skip
                    </Button>
                    <Button
                        className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4"
                        onClick={() => setStep('questions-confirm')}
                    >
                        Yes, Done ✓
                    </Button>
                </div>
            </div>
        );
    }

    if (step === 'questions-confirm') {
        return (
            <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500 mb-6">
                    <HelpCircle className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Today's Questions</h2>
                <p className="text-neutral-400 mb-8 text-center max-w-md">
                    Have you written down your questions for today?
                </p>
                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 px-8 py-4"
                        onClick={() => setStep('complete')}
                    >
                        Skip
                    </Button>
                    <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
                        onClick={() => {
                            // Mark graphotherapy as complete in localStorage
                            markStepComplete(drill.day, `grapho-${drill.day}`);
                            setStep('complete');
                        }}
                    >
                        Yes, Done ✓
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-900 text-white pb-20 relative">
            {/* AI Analyzer Overlay */}
            {showAnalyzer && files[currentPage - 1] && (
                <GraphoAIAnalyzer
                    file={files[currentPage - 1]!}
                    onClose={() => setShowAnalyzer(false)}
                />
            )}

            {/* Voice Sync Manager */}
            <GraphoVoiceSync
                isActive={step === 'page-writing' && isVoiceSyncActive}
                bpm={60}
                affirmations={[
                    "I am calm and focused",
                    "My handwriting reflects my clarity",
                    "New strokes, new patterns",
                    "Consistency creates change"
                ]}
            />

            {/* Top Bar */}
            <div className="border-b border-neutral-800 p-4 sticky top-0 bg-neutral-900/80 backdrop-blur z-20 flex justify-between items-center">
                <Link href="/student/dashboard" className="p-2 hover:bg-neutral-800 rounded-full">
                    <ChevronLeft className="w-5 h-5 text-neutral-400" />
                </Link>
                <div className="flex items-center gap-4">
                    <span className="text-xs text-neutral-500 uppercase font-bold">
                        Page {currentPage} of {pagesRequired}
                    </span>
                    <div className="font-bold text-sm">Day {drill.day}</div>

                    {/* Voice Sync Toggle */}
                    {step === 'page-writing' && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsVoiceSyncActive(!isVoiceSyncActive)}
                            className={`
                                gap-2 text-xs border rounded-full px-3 h-8 transition-all ml-2
                                ${isVoiceSyncActive
                                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/50 hover:bg-purple-500/30'
                                    : 'border-neutral-700 text-neutral-400 hover:text-white'}
                            `}
                        >
                            <Activity className="w-3 h-3" />
                            {isVoiceSyncActive ? 'Voice Sync ON' : 'Voice Sync OFF'}
                        </Button>
                    )}
                </div>
                <div className="w-9" />
            </div>

            <div className="max-w-2xl mx-auto p-6 md:p-8">
                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mb-8">
                    {Array.from({ length: pagesRequired }).map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-colors ${i < currentPage - 1 ? 'bg-green-500' :
                                i === currentPage - 1 ? 'bg-blue-500 scale-125' :
                                    'bg-neutral-700'
                                }`}
                        />
                    ))}
                </div>

                {step === 'page-instructions' && (
                    <div className="bg-neutral-800 rounded-3xl p-8 border border-neutral-700 text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="bg-green-500/20 p-3 rounded-xl text-green-500">
                                <PenTool className="w-6 h-6" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Page {currentPage} - {drill.focus}</h2>
                        <p className="text-neutral-400 mb-6 font-medium text-amber-500">
                            Current Focus: {drill.focus} ({drill.trait})
                        </p>
                        <p className="text-neutral-400 mb-6 text-sm">{drill.instruction}</p>

                        <div className="bg-neutral-900/50 rounded-2xl p-6 border border-neutral-700/50 mb-8 text-left">
                            <div className="text-xs font-bold text-neutral-500 uppercase mb-4 flex items-center gap-2">
                                <Info className="w-4 h-4" /> Practice Lines
                            </div>
                            <ul className="space-y-3 font-serif text-xl italic text-green-100">
                                {drill.sampleText.map((line, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="text-neutral-700 not-italic text-sm pt-1">{i + 1}</span>
                                        {line}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-neutral-500 text-sm mb-6">
                            Timer: {CLASS_CONFIG.graphotherapy.timerMinutes} minutes per page
                        </p>

                        <Button
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold h-14 rounded-xl text-lg"
                            onClick={startTimer}
                        >
                            <Play className="w-5 h-5 mr-2" />
                            Start Writing
                        </Button>
                    </div>
                )}

                {step === 'page-writing' && (
                    <div className="bg-neutral-800 rounded-3xl p-8 border border-neutral-700 text-center">
                        <div className="mb-8">
                            <div className="absolute top-4 right-4 bg-neutral-900/80 px-4 py-2 rounded-full border border-neutral-700">
                                <span className="text-amber-500 font-bold uppercase text-xs tracking-wider">Focus: {drill.focus}</span>
                            </div>
                            <div className={`text-6xl font-mono font-black text-green-400`}>
                                {formatTime(elapsedSeconds)}
                            </div>
                            <p className="text-neutral-500 mt-2">Time Elapsed</p>
                        </div>

                        <div className="bg-neutral-900/50 rounded-2xl p-6 border border-neutral-700/50 mb-8 text-left">
                            <ul className="space-y-3 font-serif text-lg italic text-green-100/80">
                                {drill.sampleText.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <Button
                                variant="outline"
                                className="flex-1 border-neutral-700 text-neutral-300 hover:bg-neutral-700"
                                onClick={() => setIsTimerRunning(!isTimerRunning)}
                            >
                                {isTimerRunning ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                                {isTimerRunning ? 'Pause' : 'Resume'}
                            </Button>
                            <Button
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={() => setStep('page-upload')}
                            >
                                Done Writing <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                )}

                {step === 'page-upload' && (
                    <div className="bg-neutral-800 rounded-3xl p-8 border border-neutral-700 text-center">
                        <h3 className="text-xl font-bold mb-2">Upload Page {currentPage}</h3>
                        <p className="text-neutral-400 mb-6 text-sm">
                            Take a clear photo of your handwritten page and upload it.
                        </p>

                        <div className="border-2 border-dashed border-neutral-700 rounded-2xl p-8 transition-colors hover:border-green-500/50 hover:bg-neutral-700/30 relative">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            {files[currentPage - 1] ? (
                                <div className="flex flex-col items-center">
                                    <Check className="w-10 h-10 text-green-500 mb-2" />
                                    <div className="font-medium text-green-400">{files[currentPage - 1]?.name}</div>
                                    <div className="text-xs text-neutral-500 mt-1">Ready to submit</div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <Camera className="w-10 h-10 text-neutral-500 mb-4" />
                                    <div className="font-bold text-neutral-300">Tap to Capture</div>
                                    <div className="text-xs text-neutral-500 mt-1">or drag and drop image here</div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-3 mt-6">
                            {files[currentPage - 1] && (
                                <Button
                                    onClick={() => setShowAnalyzer(true)}
                                    className="w-full bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-500/50 font-bold h-12 rounded-xl text-lg flex items-center justify-center gap-2"
                                >
                                    <BookHeart className="w-5 h-5" />
                                    Analyze with AI
                                </Button>
                            )}

                            <Button
                                disabled={!files[currentPage - 1] || isSubmitting}
                                onClick={handlePageSubmit}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-xl text-lg flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? "Submitting..." : (
                                    <>
                                        <Upload className="w-5 h-5" />
                                        Submit Page {currentPage}
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

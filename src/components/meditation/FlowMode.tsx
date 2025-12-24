"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProcessTimer from "./ProcessTimer";
import AudioManager, { AudioManagerRef, AudioAssets } from "./AudioManager";
import { Pause, Play, SkipForward, X } from "lucide-react";

export interface MeditationProcess {
    id: number;
    name: string;
    description: string | null;
    order: number;
    duration_seconds: number;
    announcement_audio_url?: string;
    background_music_url?: string;
    bell_sound_url?: string;
}

interface FlowModeProps {
    processes: MeditationProcess[];
    onProcessComplete: (processId: number) => void;
    onSessionComplete: () => void;
    onExit: () => void;
}

type SessionState = 'announcement' | 'timer' | 'transition' | 'complete';

export default function FlowMode({
    processes,
    onProcessComplete,
    onSessionComplete,
    onExit
}: FlowModeProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sessionState, setSessionState] = useState<SessionState>('announcement');
    const [isPaused, setIsPaused] = useState(false);
    const [showControls, setShowControls] = useState(false);

    const audioRef = useRef<AudioManagerRef>(null);
    const wakeLockRef = useRef<WakeLockSentinel | null>(null);

    const currentProcess = processes[currentIndex];
    const isLastProcess = currentIndex === processes.length - 1;

    // Request wake lock to prevent screen dim
    useEffect(() => {
        const requestWakeLock = async () => {
            try {
                if ('wakeLock' in navigator) {
                    wakeLockRef.current = await navigator.wakeLock.request('screen');
                }
            } catch (err) {
                console.log('Wake Lock not supported or failed');
            }
        };

        requestWakeLock();

        return () => {
            wakeLockRef.current?.release();
        };
    }, []);

    // Get audio assets for current process
    const getAudioAssets = useCallback((): AudioAssets => {
        return {
            announcementUrl: currentProcess?.announcement_audio_url,
            backgroundMusicUrl: currentProcess?.background_music_url || processes[0]?.background_music_url,
            bellSoundUrl: currentProcess?.bell_sound_url
        };
    }, [currentProcess, processes]);

    // Handle announcement complete - start timer
    const handleAnnouncementEnd = useCallback(() => {
        setSessionState('timer');
    }, []);

    // Handle timer complete - play bell and transition
    const handleTimerComplete = useCallback(async () => {
        setSessionState('transition');

        // Play bell sound
        await audioRef.current?.playBell();

        // Mark process as complete
        onProcessComplete(currentProcess.id);

        // Wait then move to next or complete
        setTimeout(() => {
            if (isLastProcess) {
                setSessionState('complete');
                audioRef.current?.fadeOutBackground(2000);
                setTimeout(onSessionComplete, 2500);
            } else {
                setCurrentIndex(prev => prev + 1);
                setSessionState('announcement');
            }
        }, 3000); // 3 second pause between processes
    }, [currentProcess, isLastProcess, onProcessComplete, onSessionComplete]);

    // Play announcement when moving to new process
    useEffect(() => {
        if (sessionState === 'announcement' && currentProcess) {
            // Update audio source for new process
            const playNewAnnouncement = async () => {
                // Small delay to ensure audio is ready
                await new Promise(resolve => setTimeout(resolve, 500));
                audioRef.current?.playAnnouncement();
            };
            playNewAnnouncement();
        }
    }, [sessionState, currentProcess]);

    // Toggle pause
    const togglePause = useCallback(() => {
        setIsPaused(prev => {
            if (prev) {
                audioRef.current?.resumeAll();
            } else {
                audioRef.current?.pauseAll();
            }
            return !prev;
        });
    }, []);

    // Skip to next process
    const skipProcess = useCallback(() => {
        if (isLastProcess) {
            onSessionComplete();
        } else {
            onProcessComplete(currentProcess.id);
            setCurrentIndex(prev => prev + 1);
            setSessionState('announcement');
        }
    }, [currentProcess, isLastProcess, onProcessComplete, onSessionComplete]);

    // Show controls on tap, hide after delay
    const handleScreenTap = useCallback(() => {
        setShowControls(true);
        setTimeout(() => setShowControls(false), 5000);
    }, []);

    if (!currentProcess) return null;

    return (
        <div
            className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: '#0a0a0a' }}
            onClick={handleScreenTap}
        >
            {/* Audio Manager */}
            <AudioManager
                ref={audioRef}
                assets={getAudioAssets()}
                onAnnouncementEnd={handleAnnouncementEnd}
                autoPlayBackground={true}
                backgroundVolume={0.3}
            />

            {/* Background gradient */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(79, 70, 229, 0.2) 0%, transparent 60%)'
                }}
            />

            {/* Session State Display */}
            <AnimatePresence mode="wait">
                {sessionState === 'announcement' && (
                    <motion.div
                        key="announcement"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-center"
                        >
                            <p className="text-indigo-400 text-sm uppercase tracking-widest mb-4">
                                Process {currentIndex + 1} of {processes.length}
                            </p>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                                {currentProcess.name}
                            </h1>
                            {currentProcess.description && (
                                <p className="text-gray-400 text-lg max-w-md mx-auto">
                                    {currentProcess.description}
                                </p>
                            )}
                        </motion.div>
                    </motion.div>
                )}

                {sessionState === 'timer' && (
                    <motion.div
                        key="timer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <ProcessTimer
                            durationSeconds={currentProcess.duration_seconds}
                            onComplete={handleTimerComplete}
                            isPaused={isPaused}
                            processName={currentProcess.name}
                            processIndex={currentIndex}
                            totalProcesses={processes.length}
                        />
                    </motion.div>
                )}

                {sessionState === 'transition' && (
                    <motion.div
                        key="transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1]
                            }}
                            transition={{ duration: 2 }}
                            className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center"
                        >
                            <span className="text-green-400 text-4xl">✓</span>
                        </motion.div>
                        <p className="text-gray-400 mt-4">
                            {isLastProcess ? "Session Complete!" : "Transitioning..."}
                        </p>
                    </motion.div>
                )}

                {sessionState === 'complete' && (
                    <motion.div
                        key="complete"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 1 }}
                            className="text-6xl mb-6"
                        >
                            🙏
                        </motion.div>
                        <h1 className="text-4xl font-bold text-white mb-2">Namaste</h1>
                        <p className="text-gray-400">Session Complete</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Controls overlay */}
            <AnimatePresence>
                {showControls && sessionState === 'timer' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent"
                    >
                        <div className="flex items-center justify-center gap-6">
                            <button
                                onClick={(e) => { e.stopPropagation(); onExit(); }}
                                className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center hover:bg-red-500/30 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <button
                                onClick={(e) => { e.stopPropagation(); togglePause(); }}
                                className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                {isPaused ? <Play className="w-7 h-7" /> : <Pause className="w-7 h-7" />}
                            </button>

                            <button
                                onClick={(e) => { e.stopPropagation(); skipProcess(); }}
                                className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <SkipForward className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Paused overlay */}
            {isPaused && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="text-center"
                    >
                        <Pause className="w-16 h-16 text-white mx-auto mb-4" />
                        <p className="text-white text-xl font-medium">Paused</p>
                        <p className="text-gray-400 text-sm mt-2">Tap anywhere to resume</p>
                    </motion.div>
                </div>
            )}
        </div>
    );
}

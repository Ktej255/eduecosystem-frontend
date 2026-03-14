"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Play,
    Pause,
    RotateCcw,
    CheckCircle2,
    ArrowRight,
    Volume2,
    VolumeX,
    X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MeditationProcess } from "./FlowMode";
import ProcessTimer from "./ProcessTimer";

interface TutorialModeProps {
    process: MeditationProcess;
    videoUrl?: string;
    onComplete: () => void;
    isLast: boolean;
    processNumber: number;
    totalNewProcesses: number;
}

type TutorialState = 'video' | 'practice' | 'confirm';

export default function TutorialMode({
    process,
    videoUrl,
    onComplete,
    isLast,
    processNumber,
    totalNewProcesses,
    onExit
}: TutorialModeProps & { onExit?: () => void }) {
    const [tutorialState, setTutorialState] = useState<TutorialState>('video');
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [hasWatchedVideo, setHasWatchedVideo] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);

    // Handle video play/pause
    const toggleVideo = () => {
        if (!videoRef.current) return;

        if (isVideoPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsVideoPlaying(!isVideoPlaying);
    };

    // Handle video end
    const handleVideoEnd = () => {
        setIsVideoPlaying(false);
        setHasWatchedVideo(true);
    };

    // Replay video
    const replayVideo = () => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setIsVideoPlaying(true);
    };

    // Toggle mute
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
        }
        setIsMuted(!isMuted);
    };

    // Move to practice
    const startPractice = () => {
        setTutorialState('practice');
    };

    // Practice complete
    const handlePracticeComplete = () => {
        setTutorialState('confirm');
    };

    // Confirm understanding and move on
    const confirmAndContinue = () => {
        onComplete();
    };

    return (
        <div
            className="min-h-screen relative"
            style={{ backgroundColor: '#0a0a0a' }}
        >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-6 z-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {onExit && (
                            <button
                                onClick={onExit}
                                className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                                title="Exit Session"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                        <div>
                            <p className="text-indigo-400 text-sm uppercase tracking-widest">
                                New Process {processNumber} of {totalNewProcesses}
                            </p>
                            <h1 className="text-2xl md:text-3xl font-bold text-white">
                                {process.name}
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        Tutorial
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {/* Video Tutorial State */}
                {tutorialState === 'video' && (
                    <motion.div
                        key="video"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center pt-24 pb-8 px-4"
                    >
                        {/* Video Player */}
                        <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden bg-neutral-900 mb-6">
                            {videoUrl ? (
                                <>
                                    <video
                                        ref={videoRef}
                                        src={videoUrl}
                                        className="w-full h-full object-cover"
                                        onEnded={handleVideoEnd}
                                        onPlay={() => setIsVideoPlaying(true)}
                                        onPause={() => setIsVideoPlaying(false)}
                                    />

                                    {/* Video controls overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button
                                            onClick={toggleVideo}
                                            className="w-16 h-16 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center hover:bg-card/30 transition-colors"
                                        >
                                            {isVideoPlaying ? (
                                                <Pause className="w-8 h-8 text-white" />
                                            ) : (
                                                <Play className="w-8 h-8 text-white ml-1" />
                                            )}
                                        </button>
                                    </div>

                                    {/* Bottom controls */}
                                    <div className="absolute bottom-4 right-4 flex gap-2">
                                        <button
                                            onClick={toggleMute}
                                            className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center"
                                        >
                                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                        </button>
                                        <button
                                            onClick={replayVideo}
                                            className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center"
                                        >
                                            <RotateCcw className="w-5 h-5" />
                                        </button>
                                    </div>
                                </>
                            ) : (
                                // Placeholder when no video
                                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                                    <Play className="w-16 h-16 mb-4 opacity-30" />
                                    <p className="text-lg">Tutorial video coming soon</p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        {process.description || "Learn this meditation technique"}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Process Description */}
                        {process.description && (
                            <div className="w-full max-w-3xl bg-neutral-900/50 rounded-xl p-4 mb-6">
                                <p className="text-muted-foreground">{process.description}</p>
                            </div>
                        )}

                        {/* Duration info */}
                        <div className="text-center mb-6">
                            <p className="text-muted-foreground">
                                Duration: <span className="text-white font-medium">
                                    {Math.floor(process.duration_seconds / 60)} min {process.duration_seconds % 60 > 0 && `${process.duration_seconds % 60} sec`}
                                </span>
                            </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-4">
                            <Button
                                variant="outline"
                                onClick={() => setHasWatchedVideo(true)}
                                className="border-gray-700 text-muted-foreground hover:text-white"
                            >
                                Skip Video
                            </Button>
                            <Button
                                onClick={startPractice}
                                disabled={!hasWatchedVideo && !!videoUrl}
                                className={`
                                    px-8 py-3
                                    ${hasWatchedVideo || !videoUrl
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600'
                                        : 'bg-gray-700 cursor-not-allowed'
                                    }
                                `}
                            >
                                {hasWatchedVideo || !videoUrl ? "Start Practice" : "Watch Video First"}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                )}

                {/* Practice State */}
                {tutorialState === 'practice' && (
                    <motion.div
                        key="practice"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <ProcessTimer
                            durationSeconds={process.duration_seconds}
                            onComplete={handlePracticeComplete}
                            isPaused={false}
                            processName={process.name}
                            processIndex={0}
                            totalProcesses={1}
                        />
                    </motion.div>
                )}

                {/* Confirmation State */}
                {tutorialState === 'confirm' && (
                    <motion.div
                        key="confirm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center px-4"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 0.5 }}
                            className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
                        >
                            <CheckCircle2 className="w-12 h-12 text-green-400" />
                        </motion.div>

                        <h2 className="text-3xl font-bold text-white mb-2 text-center">
                            {process.name} Complete!
                        </h2>
                        <p className="text-muted-foreground mb-8 text-center max-w-md">
                            Great job practicing this technique. You'll perform this daily from now on.
                        </p>

                        <Button
                            onClick={confirmAndContinue}
                            size="lg"
                            className="px-10 py-6 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
                        >
                            {isLast ? "Complete Tutorial" : "Next Process"}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background gradient */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at top, rgba(79, 70, 229, 0.1) 0%, transparent 50%)'
                }}
            />
        </div>
    );
}

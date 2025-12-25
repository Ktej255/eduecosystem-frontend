"use client";

import React, { useState, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import PreSessionScreen from "./PreSessionScreen";
import FlowMode, { MeditationProcess } from "./FlowMode";
import TutorialMode from "./TutorialMode";
import SessionSummary from "./SessionSummary";
import { meditationService } from "@/services/meditationService";

export interface MeditationPlayerProps {
    levelId: number;
    dayNumber: number;
    processes: MeditationProcess[];
    isUnlockDay: boolean;
    newProcesses?: MeditationProcess[];  // Only the new processes to learn today
    currentStreak: number;
}

type PlayerState = 'pre-session' | 'tutorial' | 'flow' | 'summary';

export default function MeditationPlayer({
    levelId,
    dayNumber,
    processes,
    isUnlockDay,
    newProcesses = [],
    currentStreak
}: MeditationPlayerProps) {
    const [playerState, setPlayerState] = useState<PlayerState>('pre-session');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
    const [completedProcessIds, setCompletedProcessIds] = useState<number[]>([]);
    const [currentTutorialIndex, setCurrentTutorialIndex] = useState(0);
    const [sessionStreak, setSessionStreak] = useState(currentStreak);
    const [isNewStreak, setIsNewStreak] = useState(false);

    // Separate known processes (flow mode) from new processes (tutorial mode)
    const knownProcesses = useMemo(() => {
        const newProcessIds = new Set(newProcesses.map(p => p.id));
        return processes.filter(p => !newProcessIds.has(p.id));
    }, [processes, newProcesses]);

    // Calculate total duration
    const totalDuration = useMemo(() => {
        const totalSeconds = processes.reduce((sum, p) => sum + p.duration_seconds, 0);
        return Math.round(totalSeconds / 60);
    }, [processes]);

    // Handle session start
    const handleSessionStart = useCallback((timeSlot: string) => {
        setSelectedTimeSlot(timeSlot);

        if (isUnlockDay && newProcesses.length > 0) {
            // If unlock day with known processes, do flow first then tutorial
            if (knownProcesses.length > 0) {
                setPlayerState('flow');
            } else {
                // Day 1 - all new, start with tutorials
                setPlayerState('tutorial');
            }
        } else {
            // Regular practice day - straight to flow
            setPlayerState('flow');
        }
    }, [isUnlockDay, newProcesses, knownProcesses]);

    // Handle process completion (during flow mode)
    const handleProcessComplete = useCallback(async (processId: number) => {
        setCompletedProcessIds(prev => [...prev, processId]);

        try {
            await meditationService.completeProcess(
                levelId,
                dayNumber,
                processId,
                false // watched_video
            );
        } catch (error) {
            console.error("Failed to save process completion:", error);
            // Continue anyway - will sync later
        }
    }, [levelId, dayNumber]);

    // Handle flow mode completion (known processes done)
    const handleFlowComplete = useCallback(() => {
        if (isUnlockDay && newProcesses.length > 0) {
            // Move to tutorials for new processes
            setCurrentTutorialIndex(0);
            setPlayerState('tutorial');
        } else {
            // No tutorials, go to summary
            handleSessionComplete();
        }
    }, [isUnlockDay, newProcesses]);

    // Handle single tutorial completion
    const handleTutorialComplete = useCallback(async () => {
        const completedProcess = newProcesses[currentTutorialIndex];
        setCompletedProcessIds(prev => [...prev, completedProcess.id]);

        try {
            await meditationService.completeProcess(
                levelId,
                dayNumber,
                completedProcess.id,
                true // watched_video
            );
        } catch (error) {
            console.error("Failed to save tutorial completion:", error);
        }

        if (currentTutorialIndex < newProcesses.length - 1) {
            // More tutorials to go
            setCurrentTutorialIndex(prev => prev + 1);
        } else {
            // All tutorials done
            handleSessionComplete();
        }
    }, [currentTutorialIndex, newProcesses, levelId, dayNumber]);

    // Handle full session completion
    const handleSessionComplete = useCallback(async () => {
        try {
            const result = await meditationService.completeDay(
                levelId,
                dayNumber,
                selectedTimeSlot.includes('PM') ? 'night' : 'morning',
                undefined
            );

            setSessionStreak(result.new_streak);
            setIsNewStreak(result.new_streak > currentStreak);
        } catch (error) {
            console.error("Failed to complete day:", error);
            // Still show summary
            setIsNewStreak(false);
        }

        setPlayerState('summary');
    }, [levelId, dayNumber, selectedTimeSlot, currentStreak]);

    // Handle exit during session
    const handleExit = useCallback(() => {
        if (confirm("Are you sure you want to exit? Your progress will be saved.")) {
            // Progress is saved incrementally, just navigate away
            window.location.href = '/student/meditation';
        }
    }, []);

    // Current tutorial process
    const currentTutorialProcess = newProcesses[currentTutorialIndex];

    return (
        <AnimatePresence mode="wait">
            {playerState === 'pre-session' && (
                <PreSessionScreen
                    key="pre-session"
                    onStart={handleSessionStart}
                    processCount={processes.length}
                    estimatedDuration={totalDuration}
                    isUnlockDay={isUnlockDay}
                    newProcessCount={newProcesses.length}
                />
            )}

            {playerState === 'flow' && (
                <FlowMode
                    key="flow"
                    processes={isUnlockDay ? knownProcesses : processes}
                    onProcessComplete={handleProcessComplete}
                    onSessionComplete={handleFlowComplete}
                    onExit={handleExit}
                />
            )}

            {playerState === 'tutorial' && currentTutorialProcess && (
                <TutorialMode
                    key={`tutorial-${currentTutorialProcess.id}`}
                    process={currentTutorialProcess}
                    videoUrl={currentTutorialProcess.video_url}
                    onComplete={handleTutorialComplete}
                    isLast={currentTutorialIndex === newProcesses.length - 1}
                    processNumber={currentTutorialIndex + 1}
                    totalNewProcesses={newProcesses.length}
                />
            )}

            {playerState === 'summary' && (
                <SessionSummary
                    key="summary"
                    processesCompleted={completedProcessIds.length}
                    totalDuration={totalDuration}
                    currentStreak={sessionStreak}
                    dayNumber={dayNumber}
                    levelNumber={levelId}
                    isNewStreak={isNewStreak}
                />
            )}
        </AnimatePresence>
    );
}

// Extend MeditationProcess type to include video_url
declare module "./FlowMode" {
    interface MeditationProcess {
        video_url?: string;
    }
}

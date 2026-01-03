"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Play,
    Pause,
    SkipForward,
    CheckCircle,
    BookOpen,
    Mic,
    Coffee,
    Clock,
    Target,
    Zap,
    ChevronRight,
} from "lucide-react";
import {
    getPomodoroTimerService,
    SessionType,
    TimerState,
    SESSION_DURATIONS,
} from "@/services/PomodoroTimerService";
import BackgroundTimer from "./BackgroundTimer";
import ExplanationRecorder from "./ExplanationRecorder";
import TopicSelector from "./TopicSelector";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/auth-context";
import { getStudySessionService } from "@/services/studySessionService";

// Pomodoro Phase Configuration
interface CycleStep {
    type: SessionType;
    label: string;
}

// Phase 1: 4 cycles of 25-min study + 5-min explanation
const PHASE_1_CYCLE: CycleStep[] = [
    { type: "study_25", label: "Study (25 min)" },
    { type: "explanation_5", label: "Explain (5 min)" },
];
const PHASE_1_CYCLES = 4;

// Phase 2: 45-min study + 10-min explanation (repeats)
const PHASE_2_CYCLE: CycleStep[] = [
    { type: "study_45", label: "Deep Study (45 min)" },
    { type: "explanation_10", label: "Explain (10 min)" },
];

// Break between phases
const PHASE_BREAK: CycleStep = { type: "break_15", label: "Break (15 min)" };

export interface PomodoroSessionManagerProps {
    subjectId?: string;
    subjectName?: string;
    targetHours?: number; // e.g., 5 hours
    onSessionComplete?: (sessionData: SessionData) => void;
    className?: string;
}

export interface SessionData {
    topicId: string;
    topicName: string;
    phase: number;
    cycle: number;
    sessionType: SessionType;
    startTime: number;
    endTime: number;
    audioBlob?: Blob;
}

type SessionState =
    | "idle"
    | "topic_selection"
    | "studying"
    | "recording"
    | "break"
    | "completed";

export default function PomodoroSessionManager({
    subjectId,
    subjectName = "Subject",
    targetHours = 5,
    onSessionComplete,
    className,
}: PomodoroSessionManagerProps) {
    const [sessionState, setSessionState] = useState<SessionState>("idle");
    const [currentPhase, setCurrentPhase] = useState(1);
    const [currentCycle, setCurrentCycle] = useState(1);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [selectedTopic, setSelectedTopic] = useState<{
        id: string;
        name: string;
    } | null>(null);
    const [completedSessions, setCompletedSessions] = useState<SessionData[]>([]);
    const [totalElapsedMs, setTotalElapsedMs] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [timerState, setTimerState] = useState<TimerState | null>(null);

    const targetMs = targetHours * 60 * 60 * 1000;

    const { user } = useAuth();

    // Get current cycle steps based on phase
    const getCurrentCycle = useCallback(() => {
        return currentPhase === 1 ? PHASE_1_CYCLE : PHASE_2_CYCLE;
    }, [currentPhase]);

    // Get current step
    const getCurrentStep = useCallback(() => {
        const cycle = getCurrentCycle();
        return cycle[currentStepIndex % cycle.length];
    }, [getCurrentCycle, currentStepIndex]);

    // Calculate overall progress
    const overallProgress = Math.min((totalElapsedMs / targetMs) * 100, 100);

    // Handle timer completion
    const handleTimerComplete = useCallback(
        async (sessionType: SessionType) => {
            const service = getPomodoroTimerService();
            const state = service.getState();

            // Record session data
            const sessionData: SessionData = {
                topicId: selectedTopic?.id || "",
                topicName: selectedTopic?.name || "",
                phase: currentPhase,
                cycle: currentCycle,
                sessionType,
                startTime: state.startTime || Date.now(),
                endTime: Date.now(),
            };

            // Backend Recording (Study phase doesn't have audio)
            if (user?.email && !sessionType.startsWith("explanation")) {
                try {
                    await getStudySessionService().recordSession({
                        email: user.email,
                        session_type: sessionType,
                        topic_id: selectedTopic?.id,
                        topic_name: selectedTopic?.name,
                        subject_id: subjectId,
                        subject_name: subjectName,
                        start_time: new Date(sessionData.startTime).toISOString(),
                        end_time: new Date(sessionData.endTime).toISOString(),
                        duration_seconds: SESSION_DURATIONS[sessionType] / 1000,
                        cycle_number: currentCycle,
                        phase_number: currentPhase
                    });
                } catch (e) {
                    console.error("Failed to sync session to backend", e);
                }
            }

            // Update total elapsed time
            const sessionDuration = SESSION_DURATIONS[sessionType];
            setTotalElapsedMs((prev) => prev + sessionDuration);

            // Transition based on session type
            if (sessionType.startsWith("study")) {
                // After study, move to recording
                setSessionState("recording");
                setIsRecording(true);

                // Start explanation timer
                const explanationType =
                    currentPhase === 1 ? "explanation_5" : "explanation_10";
                service.startTimer(explanationType, {
                    topicId: selectedTopic?.id,
                    topicName: selectedTopic?.name,
                    cycleNumber: currentCycle,
                    phaseNumber: currentPhase,
                });
            } else if (sessionType.startsWith("explanation")) {
                // After explanation, check if cycle complete
                moveToNextStep();
            } else if (sessionType === "break_15") {
                // After break, move to Phase 2
                setCurrentPhase(2);
                setCurrentCycle(1);
                setCurrentStepIndex(0);
                setSessionState("studying");
                startStudyTimer();
            }

            setCompletedSessions((prev) => [...prev, sessionData]);
            onSessionComplete?.(sessionData);
        },
        [selectedTopic, currentPhase, currentCycle, onSessionComplete]
    );

    // Move to next step in the cycle
    const moveToNextStep = useCallback(() => {
        const cycle = getCurrentCycle();
        const nextStepIndex = currentStepIndex + 1;

        if (nextStepIndex >= cycle.length) {
            // Cycle complete
            if (currentPhase === 1 && currentCycle < PHASE_1_CYCLES) {
                // More Phase 1 cycles remaining
                setCurrentCycle((c) => c + 1);
                setCurrentStepIndex(0);
                setSessionState("studying");
                startStudyTimer();
            } else if (currentPhase === 1) {
                // Phase 1 complete, start break
                setSessionState("break");
                const service = getPomodoroTimerService();
                service.startTimer("break_15", {
                    topicId: selectedTopic?.id,
                    topicName: selectedTopic?.name,
                    cycleNumber: currentCycle,
                    phaseNumber: currentPhase,
                });
            } else {
                // Phase 2 cycle complete, continue or finish
                if (totalElapsedMs >= targetMs) {
                    setSessionState("completed");
                } else {
                    setCurrentCycle((c) => c + 1);
                    setCurrentStepIndex(0);
                    setSessionState("studying");
                    startStudyTimer();
                }
            }
        } else {
            setCurrentStepIndex(nextStepIndex);
        }
    }, [
        getCurrentCycle,
        currentStepIndex,
        currentPhase,
        currentCycle,
        totalElapsedMs,
        targetMs,
        selectedTopic,
    ]);

    // Start study timer
    const startStudyTimer = useCallback(() => {
        const service = getPomodoroTimerService();
        const studyType = currentPhase === 1 ? "study_25" : "study_45";
        service.startTimer(studyType, {
            topicId: selectedTopic?.id,
            topicName: selectedTopic?.name,
            cycleNumber: currentCycle,
            phaseNumber: currentPhase,
        });
        setSessionState("studying");
    }, [currentPhase, selectedTopic, currentCycle]);

    // Handle topic selection
    const handleTopicSelected = (topic: { id: string; name: string }) => {
        setSelectedTopic(topic);
        const service = getPomodoroTimerService();
        service.updateTopic(topic.id, topic.name);
        setSessionState("studying");
        startStudyTimer();
    };

    // Handle recording complete
    const handleRecordingComplete = async (audioBlob?: Blob) => {
        setIsRecording(false);

        // Backend Recording for Explanation
        if (user?.email && audioBlob) {
            const service = getPomodoroTimerService();
            const state = service.getState();
            const explanationType = currentPhase === 1 ? "explanation_5" : "explanation_10";

            try {
                await getStudySessionService().recordSession({
                    email: user.email,
                    session_type: explanationType,
                    topic_id: selectedTopic?.id,
                    topic_name: selectedTopic?.name,
                    subject_id: subjectId,
                    subject_name: subjectName,
                    start_time: new Date(state.startTime || Date.now()).toISOString(),
                    end_time: new Date().toISOString(),
                    duration_seconds: SESSION_DURATIONS[explanationType] / 1000,
                    cycle_number: currentCycle,
                    phase_number: currentPhase,
                    audio: audioBlob
                });
            } catch (e) {
                console.error("Failed to sync recording to backend", e);
            }
        }

        // Update last session with audio
        if (audioBlob) {
            setCompletedSessions((prev) => {
                const updated = [...prev];
                if (updated.length > 0) {
                    updated[updated.length - 1].audioBlob = audioBlob;
                }
                return updated;
            });
        }

        moveToNextStep();
    };

    // Handle early completion ("Done" button)
    const handleDoneEarly = () => {
        const service = getPomodoroTimerService();
        service.completeEarly();
    };

    // Start new session
    const handleStartSession = () => {
        setSessionState("topic_selection");
        setCurrentPhase(1);
        setCurrentCycle(1);
        setCurrentStepIndex(0);
        setTotalElapsedMs(0);
        setCompletedSessions([]);
    };

    // Handle timer state changes
    const handleTimerStateChange = (state: TimerState) => {
        setTimerState(state);
    };

    // Format time for display
    const formatDuration = (ms: number): string => {
        const hours = Math.floor(ms / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }
        return `${minutes}m`;
    };

    // Render based on current state
    const renderContent = () => {
        switch (sessionState) {
            case "idle":
                return (
                    <div className="text-center py-12 space-y-6">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <Target className="w-12 h-12 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Start Pomodoro Session</h2>
                            <p className="text-gray-500 mt-2">
                                {subjectName} • {targetHours} hour target
                            </p>
                        </div>
                        <Button
                            size="lg"
                            className="px-8 py-6 text-lg gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                            onClick={handleStartSession}
                        >
                            <Play className="w-5 h-5" />
                            Begin Study Session
                        </Button>
                    </div>
                );

            case "topic_selection":
                return (
                    <TopicSelector
                        subjectId={subjectId}
                        onTopicSelected={handleTopicSelected}
                        onCancel={() => setSessionState("idle")}
                    />
                );

            case "studying":
            case "break":
                return (
                    <div className="space-y-6">
                        {/* Phase & Cycle Indicator */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Badge
                                    variant="outline"
                                    className={cn(
                                        "px-3 py-1",
                                        currentPhase === 1
                                            ? "bg-blue-500/10 text-blue-500 border-blue-500"
                                            : "bg-purple-500/10 text-purple-500 border-purple-500"
                                    )}
                                >
                                    Phase {currentPhase}
                                </Badge>
                                <Badge variant="outline" className="px-3 py-1">
                                    Cycle {currentCycle}
                                    {currentPhase === 1 && ` of ${PHASE_1_CYCLES}`}
                                </Badge>
                            </div>
                            <div className="text-sm text-gray-500">
                                {formatDuration(totalElapsedMs)} / {targetHours}h
                            </div>
                        </div>

                        {/* Overall Progress */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Overall Progress</span>
                                <span className="font-medium">{Math.round(overallProgress)}%</span>
                            </div>
                            <Progress value={overallProgress} className="h-2" />
                        </div>

                        {/* Topic Display */}
                        {selectedTopic && (
                            <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                                <BookOpen className="w-4 h-4 text-gray-500" />
                                <span className="text-sm font-medium">{selectedTopic.name}</span>
                            </div>
                        )}

                        {/* Timer */}
                        <BackgroundTimer
                            onComplete={handleTimerComplete}
                            onStateChange={handleTimerStateChange}
                        />

                        {/* Next Step Preview */}
                        {sessionState !== "break" && (
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <ChevronRight className="w-4 h-4" />
                                <span>
                                    Next: {currentStepIndex === 0 ? "Record Explanation" : "Study Session"}
                                </span>
                            </div>
                        )}
                    </div>
                );

            case "recording":
                return (
                    <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Badge className="bg-green-500/10 text-green-500 border-green-500 px-3 py-1">
                                    <Mic className="w-3 h-3 mr-1" />
                                    Recording Phase
                                </Badge>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleDoneEarly}
                            >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Done
                            </Button>
                        </div>

                        {/* Topic */}
                        {selectedTopic && (
                            <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                                <p className="text-sm text-gray-500 mb-1">Explain what you learned about:</p>
                                <p className="font-semibold text-lg">{selectedTopic.name}</p>
                            </div>
                        )}

                        {/* Timer (for reference) */}
                        <BackgroundTimer
                            compact
                            onComplete={handleTimerComplete}
                            onStateChange={handleTimerStateChange}
                        />

                        {/* Recorder */}
                        <ExplanationRecorder
                            isActive={isRecording}
                            onComplete={handleRecordingComplete}
                            onExtendTime={(minutes) => {
                                const service = getPomodoroTimerService();
                                service.addMinutes(minutes);
                            }}
                        />
                    </div>
                );

            case "completed":
                return (
                    <div className="text-center py-12 space-y-6">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center animate-bounce">
                            <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-green-500">
                                Session Complete! 🎉
                            </h2>
                            <p className="text-gray-500 mt-2">
                                You studied for {formatDuration(totalElapsedMs)}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Badge variant="outline" className="px-4 py-2">
                                {completedSessions.filter((s) => s.sessionType.startsWith("study")).length} Study Sessions
                            </Badge>
                            <Badge variant="outline" className="px-4 py-2">
                                {completedSessions.filter((s) => s.sessionType.startsWith("explanation")).length} Recordings
                            </Badge>
                        </div>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={handleStartSession}
                        >
                            <Play className="w-4 h-4 mr-2" />
                            Start Another Session
                        </Button>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <Card className={cn("overflow-hidden", className)}>
            <CardHeader className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-b">
                <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-indigo-500" />
                    Pomodoro Study Session
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">{renderContent()}</CardContent>
        </Card>
    );
}

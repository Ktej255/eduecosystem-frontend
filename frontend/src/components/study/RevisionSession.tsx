"use client";

import React, { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Play,
    Clock,
    BookOpen,
    Mic,
    CheckCircle,
    Sun,
    Moon,
} from "lucide-react";
import {
    getPomodoroTimerService,
    SessionType,
    TimerState,
} from "@/services/PomodoroTimerService";
import BackgroundTimer from "./BackgroundTimer";
import ExplanationRecorder from "./ExplanationRecorder";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/auth-context";
import { getStudySessionService } from "@/services/studySessionService";

interface RevisionSessionProps {
    classworkContent?: {
        topicName: string;
        notes?: string;
    }[];
    onComplete?: (recordingBlob?: Blob) => void;
    className?: string;
}

type SessionState = "idle" | "reviewing" | "recording" | "completed";

export default function RevisionSession({
    classworkContent = [],
    onComplete,
    className,
}: RevisionSessionProps) {
    const [sessionState, setSessionState] = useState<SessionState>("idle");
    const [timerState, setTimerState] = useState<TimerState | null>(null);
    const [isRecording, setIsRecording] = useState(false);

    const { user } = useAuth();

    // Get current time to determine if it's evening
    const currentHour = new Date().getHours();
    const isEvening = currentHour >= 17 && currentHour <= 21;

    // Start revision timer
    const startRevision = () => {
        const service = getPomodoroTimerService();
        service.startTimer("revision_25", {
            topicName: "Evening Revision",
            cycleNumber: 1,
            phaseNumber: 1,
        });
        setSessionState("reviewing");
    };

    // Handle timer completion
    const handleTimerComplete = useCallback(async (sessionType: SessionType) => {
        if (sessionType === "revision_25") {
            // Backend Recording for Revision Phase
            if (user?.email) {
                try {
                    await getStudySessionService().recordSession({
                        email: user.email,
                        session_type: "revision_25",
                        topic_name: "Evening Revision",
                        start_time: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
                        end_time: new Date().toISOString(),
                        duration_seconds: 25 * 60
                    });
                } catch (e) {
                    console.error("Failed to sync revision to backend", e);
                }
            }

            // Move to recording phase
            const service = getPomodoroTimerService();
            service.startTimer("explanation_5", {
                topicName: "Revision Explanation",
                cycleNumber: 1,
                phaseNumber: 1,
            });
            setSessionState("recording");
            setIsRecording(true);
        } else if (sessionType === "explanation_5") {
            // Session complete
            setSessionState("completed");
        }
    }, [user, currentHour]);

    // Handle recording complete
    const handleRecordingComplete = async (audioBlob?: Blob) => {
        setIsRecording(false);

        // Backend Recording for Explanation Phase
        if (user?.email && audioBlob) {
            try {
                await getStudySessionService().recordSession({
                    email: user.email,
                    session_type: "explanation_5",
                    topic_name: "Revision Explanation",
                    start_time: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
                    end_time: new Date().toISOString(),
                    duration_seconds: 5 * 60,
                    audio: audioBlob
                });
            } catch (e) {
                console.error("Failed to sync revision recording to backend", e);
            }
        }

        setSessionState("completed");
        onComplete?.(audioBlob);
    };

    // Handle timer state changes
    const handleTimerStateChange = (state: TimerState) => {
        setTimerState(state);
    };

    // Render content based on state
    const renderContent = () => {
        switch (sessionState) {
            case "idle":
                return (
                    <div className="text-center py-8 space-y-6">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center">
                            <Sun className="w-10 h-10 text-white" />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold">Evening Revision Session</h2>
                            <p className="text-gray-500 mt-1">
                                {isEvening
                                    ? "Perfect time for revision!"
                                    : "Start your 25-minute revision session"}
                            </p>
                        </div>

                        {/* Classwork Summary */}
                        {classworkContent.length > 0 && (
                            <div className="text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-2">
                                <p className="text-sm font-medium text-gray-500">
                                    Today&apos;s Topics:
                                </p>
                                <ul className="space-y-1">
                                    {classworkContent.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2 text-sm"
                                        >
                                            <BookOpen className="w-4 h-4 text-orange-500" />
                                            {item.topicName}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <Button
                            size="lg"
                            className="px-8 py-6 text-lg gap-2 bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-600 hover:to-rose-700"
                            onClick={startRevision}
                        >
                            <Play className="w-5 h-5" />
                            Begin Revision (25 min)
                        </Button>
                    </div>
                );

            case "reviewing":
                return (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/50 px-3 py-1">
                                <Clock className="w-3 h-3 mr-1" />
                                Revision Time
                            </Badge>
                            <p className="text-sm text-gray-500">
                                Review today&apos;s classwork
                            </p>
                        </div>

                        {/* Topics to Review */}
                        {classworkContent.length > 0 && (
                            <Card className="border-orange-200 dark:border-orange-900">
                                <CardContent className="p-4">
                                    <p className="text-sm font-medium text-gray-500 mb-3">
                                        Topics to Review:
                                    </p>
                                    <div className="space-y-2">
                                        {classworkContent.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20"
                                            >
                                                <BookOpen className="w-5 h-5 text-orange-500 mt-0.5" />
                                                <div>
                                                    <p className="font-medium">{item.topicName}</p>
                                                    {item.notes && (
                                                        <p className="text-sm text-gray-500 mt-1">
                                                            {item.notes}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Timer */}
                        <BackgroundTimer
                            onComplete={handleTimerComplete}
                            onStateChange={handleTimerStateChange}
                        />

                        <p className="text-center text-sm text-gray-500">
                            After the timer, you&apos;ll record what you learned
                        </p>
                    </div>
                );

            case "recording":
                return (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <Badge className="bg-green-500/10 text-green-600 border-green-500/50 px-3 py-1">
                                <Mic className="w-3 h-3 mr-1" />
                                Recording Phase
                            </Badge>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleRecordingComplete()}
                            >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Done
                            </Button>
                        </div>

                        <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                            <p className="font-medium text-center">
                                Explain what you revised in today&apos;s classwork
                            </p>
                        </div>

                        {/* Timer (compact) */}
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
                    <div className="text-center py-8 space-y-6">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-green-500">
                                Revision Complete! 🎉
                            </h2>
                            <p className="text-gray-500 mt-1">
                                Great job reviewing today&apos;s content
                            </p>
                        </div>

                        <Button
                            variant="outline"
                            onClick={() => {
                                setSessionState("idle");
                            }}
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
            <CardHeader className="bg-gradient-to-r from-orange-500/10 to-rose-500/10 border-b">
                <CardTitle className="flex items-center gap-2">
                    {isEvening ? (
                        <Moon className="w-5 h-5 text-orange-500" />
                    ) : (
                        <Sun className="w-5 h-5 text-orange-500" />
                    )}
                    6:30 Revision Session
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">{renderContent()}</CardContent>
        </Card>
    );
}

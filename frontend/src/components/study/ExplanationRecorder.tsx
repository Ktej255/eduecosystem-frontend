"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    Mic,
    MicOff,
    Square,
    Play,
    Pause,
    RotateCcw,
    CheckCircle,
    Plus,
    Clock,
    Volume2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ExplanationRecorderProps {
    isActive: boolean;
    onComplete: (audioBlob?: Blob) => void;
    onExtendTime?: (minutes: 1 | 2 | 3 | 5) => void;
    maxDurationMs?: number;
    className?: string;
}

type RecordingState = "idle" | "recording" | "paused" | "stopped" | "playing";

export default function ExplanationRecorder({
    isActive,
    onComplete,
    onExtendTime,
    maxDurationMs = 10 * 60 * 1000, // 10 minutes default max
    className,
}: ExplanationRecorderProps) {
    const [recordingState, setRecordingState] = useState<RecordingState>("idle");
    const [recordingTime, setRecordingTime] = useState(0);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [waveformData, setWaveformData] = useState<number[]>(new Array(50).fill(0));
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const streamRef = useRef<MediaStream | null>(null);

    // Check microphone permission
    useEffect(() => {
        const checkPermission = async () => {
            try {
                const result = await navigator.permissions.query({
                    name: "microphone" as PermissionName,
                });
                setHasPermission(result.state === "granted");
            } catch {
                // Permission API not supported, try direct access
                setHasPermission(null);
            }
        };
        checkPermission();
    }, []);

    // Auto-start recording when component becomes active
    useEffect(() => {
        if (isActive && recordingState === "idle") {
            startRecording();
        }
    }, [isActive]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopRecording();
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop());
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
            }
        };
    }, []);

    // Start recording
    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;
            setHasPermission(true);

            // Set up analyser for waveform visualization
            const audioContext = new AudioContext();
            const source = audioContext.createMediaStreamSource(stream);
            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 128;
            source.connect(analyser);
            analyserRef.current = analyser;

            // Start waveform animation
            const updateWaveform = () => {
                if (analyserRef.current) {
                    const bufferLength = analyserRef.current.frequencyBinCount;
                    const dataArray = new Uint8Array(bufferLength);
                    analyserRef.current.getByteFrequencyData(dataArray);

                    const normalized = Array.from(dataArray.slice(0, 50)).map(
                        (v) => v / 255
                    );
                    setWaveformData(normalized);
                }
                animationFrameRef.current = requestAnimationFrame(updateWaveform);
            };
            updateWaveform();

            // Create MediaRecorder
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: MediaRecorder.isTypeSupported("audio/webm")
                    ? "audio/webm"
                    : "audio/mp4",
            });
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(audioChunksRef.current, {
                    type: mediaRecorder.mimeType,
                });
                setAudioBlob(blob);
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);
                setRecordingState("stopped");

                // Clean up stream
                stream.getTracks().forEach((track) => track.stop());
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            };

            mediaRecorder.start(100); // Collect data every 100ms
            setRecordingState("recording");

            // Start timer
            timerRef.current = setInterval(() => {
                setRecordingTime((prev) => prev + 1000);
            }, 1000);
        } catch (error) {
            console.error("Error starting recording:", error);
            setHasPermission(false);
        }
    };

    // Pause recording
    const pauseRecording = () => {
        if (mediaRecorderRef.current && recordingState === "recording") {
            mediaRecorderRef.current.pause();
            setRecordingState("paused");
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        }
    };

    // Resume recording
    const resumeRecording = () => {
        if (mediaRecorderRef.current && recordingState === "paused") {
            mediaRecorderRef.current.resume();
            setRecordingState("recording");

            // Resume timer
            timerRef.current = setInterval(() => {
                setRecordingTime((prev) => prev + 1000);
            }, 1000);

            // Resume waveform
            const updateWaveform = () => {
                if (analyserRef.current) {
                    const bufferLength = analyserRef.current.frequencyBinCount;
                    const dataArray = new Uint8Array(bufferLength);
                    analyserRef.current.getByteFrequencyData(dataArray);
                    const normalized = Array.from(dataArray.slice(0, 50)).map(
                        (v) => v / 255
                    );
                    setWaveformData(normalized);
                }
                animationFrameRef.current = requestAnimationFrame(updateWaveform);
            };
            updateWaveform();
        }
    };

    // Stop recording
    const stopRecording = () => {
        if (mediaRecorderRef.current && recordingState !== "idle") {
            if (mediaRecorderRef.current.state !== "inactive") {
                mediaRecorderRef.current.stop();
            }
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        }
    };

    // Reset and start new recording
    const resetRecording = () => {
        if (audioUrl) {
            URL.revokeObjectURL(audioUrl);
        }
        setAudioUrl(null);
        setAudioBlob(null);
        setRecordingTime(0);
        setRecordingState("idle");
        setWaveformData(new Array(50).fill(0));
        startRecording();
    };

    // Play recorded audio
    const playRecording = () => {
        if (audioUrl && audioRef.current) {
            audioRef.current.play();
            setRecordingState("playing");
        }
    };

    // Submit recording
    const handleComplete = () => {
        stopRecording();
        onComplete(audioBlob || undefined);
    };

    // Skip recording
    const handleSkip = () => {
        stopRecording();
        onComplete(undefined);
    };

    // Format time display
    const formatTime = (ms: number): string => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    };

    // Permission denied view
    if (hasPermission === false) {
        return (
            <Card className={cn("border-red-500/50", className)}>
                <CardContent className="p-6 text-center">
                    <MicOff className="w-12 h-12 mx-auto mb-4 text-red-500" />
                    <h3 className="font-semibold mb-2">Microphone Access Required</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        Please allow microphone access to record your explanation.
                    </p>
                    <Button onClick={startRecording}>
                        <Mic className="w-4 h-4 mr-2" />
                        Grant Access
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className={cn("overflow-hidden", className)}>
            <CardContent className="p-6 space-y-6">
                {/* Waveform Visualization */}
                <div className="relative h-24 flex items-center justify-center gap-0.5 bg-muted rounded-lg overflow-hidden">
                    {waveformData.map((value, index) => (
                        <div
                            key={index}
                            className={cn(
                                "w-1.5 rounded-full transition-all duration-75",
                                recordingState === "recording"
                                    ? "bg-gradient-to-t from-green-500 to-emerald-400"
                                    : recordingState === "paused"
                                        ? "bg-yellow-500"
                                        : "bg-gray-400"
                            )}
                            style={{
                                height: `${Math.max(10, value * 100)}%`,
                            }}
                        />
                    ))}

                    {/* Recording indicator */}
                    {recordingState === "recording" && (
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-xs font-medium text-red-500">REC</span>
                        </div>
                    )}
                </div>

                {/* Timer */}
                <div className="text-center">
                    <p className="text-4xl font-mono font-bold">
                        {formatTime(recordingTime)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                        {recordingState === "recording"
                            ? "Recording..."
                            : recordingState === "paused"
                                ? "Paused"
                                : recordingState === "stopped"
                                    ? "Recording Complete"
                                    : recordingState === "playing"
                                        ? "Playing..."
                                        : "Ready to record"}
                    </p>
                </div>

                {/* Recording Controls */}
                {recordingState === "recording" || recordingState === "paused" ? (
                    <div className="flex justify-center gap-4">
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={recordingState === "recording" ? pauseRecording : resumeRecording}
                            className="w-14 h-14 rounded-full p-0"
                        >
                            {recordingState === "recording" ? (
                                <Pause className="w-6 h-6" />
                            ) : (
                                <Play className="w-6 h-6" />
                            )}
                        </Button>
                        <Button
                            variant="destructive"
                            size="lg"
                            onClick={stopRecording}
                            className="w-14 h-14 rounded-full p-0"
                        >
                            <Square className="w-6 h-6" />
                        </Button>
                    </div>
                ) : recordingState === "stopped" ? (
                    <div className="space-y-4">
                        {/* Audio Playback */}
                        <audio ref={audioRef} src={audioUrl || undefined} className="hidden" />

                        <div className="flex justify-center gap-4">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={playRecording}
                                className="w-14 h-14 rounded-full p-0"
                            >
                                <Volume2 className="w-6 h-6" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={resetRecording}
                                className="w-14 h-14 rounded-full p-0"
                            >
                                <RotateCcw className="w-6 h-6" />
                            </Button>
                        </div>

                        <div className="flex justify-center gap-4 pt-2">
                            <Button
                                variant="outline"
                                onClick={handleSkip}
                            >
                                Skip
                            </Button>
                            <Button
                                className="bg-green-600 hover:bg-green-700"
                                onClick={handleComplete}
                            >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Submit Recording
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            onClick={startRecording}
                            className="w-20 h-20 rounded-full bg-green-600 hover:bg-green-700"
                        >
                            <Mic className="w-8 h-8" />
                        </Button>
                    </div>
                )}

                {/* Time Extension Buttons */}
                {(recordingState === "recording" || recordingState === "paused") &&
                    onExtendTime && (
                        <div className="space-y-2">
                            <p className="text-sm text-center text-muted-foreground">
                                Need more time?
                            </p>
                            <div className="flex justify-center gap-2 flex-wrap">
                                {([1, 2, 3, 5] as const).map((minutes) => (
                                    <Button
                                        key={minutes}
                                        variant="outline"
                                        size="sm"
                                        onClick={() => onExtendTime(minutes)}
                                        className="gap-1"
                                    >
                                        <Plus className="w-3 h-3" />
                                        {minutes} min
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                {/* Done Button (for early completion) */}
                {(recordingState === "recording" || recordingState === "paused") && (
                    <div className="flex justify-center pt-4 border-t">
                        <Button
                            variant="ghost"
                            onClick={handleComplete}
                            className="gap-2"
                        >
                            <CheckCircle className="w-4 h-4" />
                            Done Explaining
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

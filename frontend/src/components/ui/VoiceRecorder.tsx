"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, Square, Trash2, Play, Pause, RotateCcw, Send, CheckCircle2 } from "lucide-react";

interface VoiceRecorderProps {
    onRecordingComplete: (base64Audio: string) => void;
    onReset?: () => void;
    onRecordingStart?: () => void;
    onRecordingStop?: () => void;
    autoSubmit?: boolean; // If false, show Submit button after recording
}

export default function VoiceRecorder({
    onRecordingComplete,
    onReset,
    onRecordingStart,
    onRecordingStop,
    autoSubmit = false
}: VoiceRecorderProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
    const [pendingAudioData, setPendingAudioData] = useState<string | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            if (audioUrl) URL.revokeObjectURL(audioUrl);
        };
    }, [audioUrl]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const url = URL.createObjectURL(audioBlob);
                setAudioUrl(url);
                setRecordedBlob(audioBlob);

                // Convert to base64
                const reader = new FileReader();
                reader.readAsDataURL(audioBlob);
                reader.onloadend = () => {
                    const base64data = reader.result as string;

                    if (autoSubmit) {
                        // Old behavior: auto submit
                        onRecordingComplete(base64data);
                    } else {
                        // New behavior: wait for explicit submit
                        setPendingAudioData(base64data);
                        setIsReadyToSubmit(true);
                    }
                };

                // Call onRecordingStop callback
                if (onRecordingStop) onRecordingStop();
            };

            mediaRecorder.start();
            setIsRecording(true);
            setDuration(0);
            setIsReadyToSubmit(false);
            setPendingAudioData(null);

            // Call onRecordingStart callback
            if (onRecordingStart) onRecordingStart();

            timerRef.current = setInterval(() => {
                setDuration(prev => prev + 1);
            }, 1000);
        } catch (err) {
            console.error("Error accessing microphone:", err);
            alert("Could not access microphone. Please ensure you have given permission.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
            setIsRecording(false);
            if (timerRef.current) clearInterval(timerRef.current);
        }
    };

    const handleSubmit = () => {
        if (pendingAudioData) {
            onRecordingComplete(pendingAudioData);
            setIsReadyToSubmit(false);
        }
    };

    const handleReset = () => {
        setAudioUrl(null);
        setRecordedBlob(null);
        setDuration(0);
        setIsReadyToSubmit(false);
        setPendingAudioData(null);
        if (onReset) onReset();
    };

    const togglePlayback = () => {
        if (!audioPlayerRef.current) return;

        if (isPlaying) {
            audioPlayerRef.current.pause();
        } else {
            audioPlayerRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card">
            {!audioUrl ? (
                <div className="text-center w-full">
                    {isRecording ? (
                        // RECORDING STATE - Prominent stop button
                        <div className="space-y-6">
                            {/* Timer with pulsing indicator */}
                            <div className="flex items-center gap-3 justify-center">
                                <span className="relative flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                                </span>
                                <span className="text-3xl font-mono font-bold text-red-600">
                                    {formatTime(duration)}
                                </span>
                            </div>

                            {/* Recording indicator text */}
                            <p className="text-sm text-red-600 font-medium animate-pulse">
                                🎙️ Recording your explanation...
                            </p>

                            {/* Large prominent STOP button */}
                            <Button
                                variant="destructive"
                                size="lg"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    stopRecording();
                                }}
                                className="rounded-full w-24 h-24 shadow-lg hover:scale-105 transition-transform bg-red-600 hover:bg-red-700"
                            >
                                <Square className="h-10 w-10" fill="white" />
                            </Button>

                            <p className="text-lg font-semibold text-muted-foreground dark:text-muted-foreground">
                                Tap to STOP Recording
                            </p>
                        </div>
                    ) : (
                        // IDLE STATE - Start recording button
                        <div className="space-y-4">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    startRecording();
                                }}
                                className="rounded-full w-20 h-20 border-2 border-primary text-primary hover:bg-primary/10 shadow-md"
                            >
                                <Mic className="h-10 w-10" />
                            </Button>
                            <div>
                                <h4 className="font-semibold text-muted-foreground dark:text-muted-foreground">Tap to start recording</h4>
                                <p className="text-sm text-muted-foreground">Explain the concept in your own words</p>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                // RECORDED STATE - Playback and submit controls
                <div className="w-full space-y-4">
                    {/* Success indicator */}
                    <div className="flex items-center justify-center gap-2 text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        <span className="font-medium">Recording Complete!</span>
                    </div>

                    {/* Playback controls */}
                    <div className="flex items-center gap-4 justify-between bg-muted p-4 rounded-lg">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                togglePlayback();
                            }}
                            className="text-primary"
                        >
                            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </Button>

                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-full rounded-full"></div>
                        </div>

                        <span className="text-sm font-mono text-muted-foreground dark:text-muted-foreground">{formatTime(duration)}</span>
                    </div>

                    <audio
                        ref={audioPlayerRef}
                        src={audioUrl}
                        onEnded={() => setIsPlaying(false)}
                        className="hidden"
                    />

                    {/* Action buttons */}
                    <div className="flex gap-3">
                        {/* Re-record button */}
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleReset();
                            }}
                            className="flex-1 gap-2 text-muted-foreground"
                        >
                            <RotateCcw className="h-4 w-4" />
                            Re-record
                        </Button>

                        {/* Submit button - only show if not autoSubmit */}
                        {isReadyToSubmit && (
                            <Button
                                size="lg"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSubmit();
                                }}
                                className="flex-1 gap-2 bg-green-600 hover:bg-green-700 text-white"
                            >
                                <Send className="h-4 w-4" />
                                Submit Answer
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

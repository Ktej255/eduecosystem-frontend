"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, Square, Trash2, Play, Pause, RotateCcw } from "lucide-react";

interface VoiceRecorderProps {
    onRecordingComplete: (base64Audio: string) => void;
    onReset?: () => void;
}

export default function VoiceRecorder({ onRecordingComplete, onReset }: VoiceRecorderProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);

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

                // Convert to base64 for backend
                const reader = new FileReader();
                reader.readAsDataURL(audioBlob);
                reader.onloadend = () => {
                    const base64data = reader.result as string;
                    // Remove prefix (data:audio/webm;base64,) if needed, 
                    // but usually backend can handle it or expects just the data
                    onRecordingComplete(base64data);
                };
            };

            mediaRecorder.start();
            setIsRecording(true);
            setDuration(0);
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

    const handleReset = () => {
        setAudioUrl(null);
        setRecordedBlob(null);
        setDuration(0);
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
        <div className="flex flex-col items-center gap-4 p-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-900/20">
            {!audioUrl ? (
                <div className="text-center">
                    {isRecording ? (
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 justify-center">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                <span className="text-xl font-mono font-bold text-red-600">
                                    {formatTime(duration)}
                                </span>
                            </div>
                            <Button
                                variant="destructive"
                                size="lg"
                                onClick={stopRecording}
                                className="rounded-full w-16 h-16"
                            >
                                <Square className="h-6 w-6" />
                            </Button>
                            <p className="text-sm text-gray-500">Recording your explanation...</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={startRecording}
                                className="rounded-full w-16 h-16 border-primary text-primary hover:bg-primary/10"
                            >
                                <Mic className="h-8 w-8" />
                            </Button>
                            <div>
                                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Tap to start recording</h4>
                                <p className="text-sm text-gray-500">Explain the concept in your own words</p>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="w-full space-y-4">
                    <div className="flex items-center gap-4 justify-between bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={togglePlayback}
                            className="text-primary"
                        >
                            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </Button>

                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-0"></div>
                        </div>

                        <span className="text-xs font-mono text-gray-500">{formatTime(duration)}</span>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleReset}
                            className="text-red-500"
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>

                    <audio
                        ref={audioPlayerRef}
                        src={audioUrl}
                        onEnded={() => setIsPlaying(false)}
                        className="hidden"
                    />

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleReset}
                        className="w-full gap-2 text-gray-500"
                    >
                        <RotateCcw className="h-4 w-4" /> Reset and re-record
                    </Button>
                </div>
            )}
        </div>
    );
}

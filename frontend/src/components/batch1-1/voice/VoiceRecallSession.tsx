"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, Square, Volume2, RotateCcw, Brain, Check, X, AlertCircle, Loader2 } from 'lucide-react';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { FlexibleFlashcard } from '@/components/batch1-1/pomodoro/CycleFlashcards';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

// Backend API Service placeholder (should assume fetch wrapper exists or use fetch direct)
// Assuming we have a way to call the backend.
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

interface VoiceRecallSessionProps {
    card: FlexibleFlashcard;
    onNext: () => void;
    onComplete?: (score: number) => void;
}

export default function VoiceRecallSession({ card, onNext, onComplete }: VoiceRecallSessionProps) {
    const { toast } = useToast();
    const [mode, setMode] = useState<'question' | 'recording' | 'analyzing' | 'result'>('question');
    const [recordingTime, setRecordingTime] = useState(0);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [feedback, setFeedback] = useState<any>(null); // To store AI analysis result

    // Web Speech API for real-time text (optional fallback/display)
    const {
        isListening: isSpeechListening,
        transcript,
        startListening: startSpeech,
        stopListening: stopSpeech,
        resetTranscript
    } = useSpeechRecognition({
        continuous: true,
        interimResults: true
    });

    // MediaRecorder for Audio File (for AI Backend)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Audio playback
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Cleanup
    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });

            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                setAudioBlob(blob);

                // Set audio source for playback
                if (audioRef.current) URL.revokeObjectURL(audioRef.current.src);
                const audioUrl = URL.createObjectURL(blob);
                audioRef.current = new Audio(audioUrl);
                audioRef.current.onended = () => setIsPlaying(false);
            };

            mediaRecorder.start();
            setMode('recording');
            setRecordingTime(0);

            // Start Web Speech API too for live transcript
            resetTranscript();
            startSpeech();

            timerRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1);
            }, 1000);

        } catch (err) {
            console.error("Mic error:", err);
            toast({
                title: "Microphone Error",
                description: "Could not access microphone. Please check permissions.",
                variant: "destructive"
            });
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
        }

        if (timerRef.current) clearInterval(timerRef.current);
        stopSpeech();
        setMode('analyzing');
    };

    const analyzeRecording = async () => {
        if (!audioBlob) return;

        try {
            // Prepare form data
            const formData = new FormData();
            formData.append('audio', audioBlob, 'recording.webm');
            formData.append('question', card.question || card.front || "Unknown Question");
            formData.append('expected_answer', card.answer || card.back || "Unknown Answer");

            // Assuming auth token is handled by interceptor or we retrieve it
            const token = localStorage.getItem('token');

            const response = await fetch(`${API_URL}/audio-analysis/analyze-flashcard-form`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error('Analysis failed');
            }

            const result = await response.json();
            setFeedback(result);
            setMode('result');

            if (onComplete) onComplete(result.score || 0);

        } catch (err) {
            console.error("Analysis error:", err);
            toast({
                title: "Analysis Failed",
                description: "Could not analyze recording via AI. Using local check.",
                variant: "destructive"
            });
            // Fallback to purely local text matching?
            // For now just error state
            setMode('result'); // or handle error UI
            setFeedback({
                score: 0,
                feedback: "AI Analysis unavailable. Please try again.",
                missing_points: []
            });
        }
    };

    const togglePlayback = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(e => console.error(e));
            setIsPlaying(true);
        }
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const getFront = () => card.question || card.front || "No Question";

    return (
        <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-200">
            <CardContent className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-indigo-600" />
                        <span className="font-bold text-indigo-800 dark:text-indigo-300">Voice Recall Mode</span>
                    </div>
                    {mode === 'recording' && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 rounded-full animate-pulse">
                            <div className="w-2 h-2 rounded-full bg-red-600" />
                            <span className="font-mono text-sm">{formatTime(recordingTime)}</span>
                        </div>
                    )}
                </div>

                {/* Question Area */}
                <div className="mb-8 text-center">
                    <h2 className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-4">
                        {getFront()}
                    </h2>

                    {/* Live Transcript (during recording) */}
                    {mode === 'recording' && (
                        <div className="min-h-[60px] p-4 bg-card/50 dark:bg-black/20 rounded-lg text-muted-foreground dark:text-muted-foreground text-sm italic">
                            {transcript || "Listening..."}
                        </div>
                    )}
                </div>

                {/* Controls */}
                <div className="flex flex-col items-center gap-6">
                    {mode === 'question' && (
                        <Button
                            onClick={startRecording}
                            size="lg"
                            className="w-20 h-20 rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200 dark:shadow-none transition-all hover:scale-105"
                        >
                            <Mic className="h-8 w-8" />
                        </Button>
                    )}

                    {mode === 'recording' && (
                        <Button
                            onClick={stopRecording}
                            size="lg"
                            className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 shadow-xl shadow-red-200 dark:shadow-none animate-pulse"
                        >
                            <Square className="h-8 w-8 fill-current" />
                        </Button>
                    )}

                    {mode === 'analyzing' && (
                        <div className="w-full flex flex-col items-center gap-4">
                            <div className="flex gap-2">
                                <Button variant="outline" onClick={togglePlayback} className="rounded-full">
                                    {isPlaying ? <Square className="h-4 w-4 mr-2" /> : <Volume2 className="h-4 w-4 mr-2" />}
                                    {isPlaying ? "Stop" : "Play Recording"}
                                </Button>
                                <Button variant="outline" onClick={() => setMode('question')} className="rounded-full">
                                    <RotateCcw className="h-4 w-4 mr-2" /> Retry
                                </Button>
                            </div>

                            <Button
                                onClick={analyzeRecording}
                                className="w-full max-w-sm bg-indigo-600 hover:bg-indigo-700 text-white"
                            >
                                <Brain className="h-4 w-4 mr-2" /> Analyze Answer with AI
                            </Button>
                        </div>
                    )}

                    {/* Result View */}
                    {mode === 'result' && feedback && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full space-y-4"
                        >
                            <div className={`p-4 rounded-xl border ${feedback.score >= 70 ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-semibold text-lg flex items-center gap-2">
                                        {feedback.score >= 70 ? <Check className="h-5 w-5 text-green-600" /> : <AlertCircle className="h-5 w-5 text-orange-600" />}
                                        Score: {feedback.score}/100
                                    </span>
                                    <Badge variant={feedback.score >= 70 ? "default" : "secondary"}>
                                        {feedback.score >= 70 ? "Passed" : "Needs Review"}
                                    </Badge>
                                </div>
                                <p className="text-muted-foreground dark:text-muted-foreground text-sm">
                                    {feedback.feedback}
                                </p>
                            </div>

                            {feedback.missing_points && feedback.missing_points.length > 0 && (
                                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100">
                                    <h4 className="font-medium text-red-800 dark:text-red-300 mb-2 text-sm">Missed Concepts:</h4>
                                    <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-400 space-y-1">
                                        {feedback.missing_points.map((point: string, i: number) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <Button onClick={onNext} className="w-full mt-4">
                                Next Card
                            </Button>
                        </motion.div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

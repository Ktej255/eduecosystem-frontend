"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Square, Play, RotateCcw, Loader2, Wand2 } from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/api";

type Feedback = {
    transcription: string;
    metrics: {
        pronunciation_score: number;
        confidence_score: number;
        clarity_score: number;
    };
    feedback: {
        strengths: string[];
        improvements: string[];
    };
    overall_assessment: string;
};

interface VoiceRecorderProps {
    context: string;
}

export function VoiceRecorder({ context }: VoiceRecorderProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [feedback, setFeedback] = useState<Feedback | null>(null);
    const [recordingTime, setRecordingTime] = useState(0);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<BlobPart[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            chunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: "audio/webm" });
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);
                setAudioBlob(blob);
                stream.getTracks().forEach((track) => track.stop());
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
            setFeedback(null);

            setRecordingTime(0);
            timerRef.current = setInterval(() => {
                setRecordingTime((prev) => prev + 1);
            }, 1000);

        } catch (err) {
            console.error("Error accessing microphone:", err);
            toast.error("Could not access microphone");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            if (timerRef.current) clearInterval(timerRef.current);
        }
    };

    const resetRecording = () => {
        setAudioUrl(null);
        setAudioBlob(null);
        setFeedback(null);
        setRecordingTime(0);
    };

    const analyzeAudio = async () => {
        if (!audioBlob) return;

        setIsAnalyzing(true);
        try {
            // Convert blob to base64
            const reader = new FileReader();
            reader.readAsDataURL(audioBlob);
            reader.onloadend = async () => {
                const base64Audio = (reader.result as string).split(",")[1];
                
                const res = await api.post(
                    "/voice-tutor/analyze",
                    {
                        audio_base64: base64Audio,
                        context: context,
                    }
                );

                setFeedback(res.data);
                toast.success("Analysis Complete!");
            };
        } catch (err) {
            console.error("Analysis failed", err);
            toast.error("Failed to analyze audio");
        } finally {
            setIsAnalyzing(false);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="space-y-6">
            {/* Recorder Controls */}
            <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 flex flex-col items-center justify-center gap-6">
                    <div className="text-4xl font-mono font-bold text-cyan-400">
                        {formatTime(recordingTime)}
                    </div>

                    <div className="flex items-center gap-4">
                        {!isRecording && !audioUrl && (
                            <Button
                                onClick={startRecording}
                                size="lg"
                                className="h-16 w-16 rounded-full bg-red-600 hover:bg-red-700 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                            >
                                <Mic className="h-8 w-8" />
                            </Button>
                        )}

                        {isRecording && (
                            <Button
                                onClick={stopRecording}
                                size="lg"
                                className="h-16 w-16 rounded-full bg-gray-700 hover:bg-gray-600 animate-pulse"
                            >
                                <Square className="h-6 w-6 fill-current" />
                            </Button>
                        )}

                        {audioUrl && !isRecording && (
                            <>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-12 w-12 rounded-full border-gray-600"
                                    onClick={resetRecording}
                                >
                                    <RotateCcw className="h-5 w-5" />
                                </Button>

                                <audio controls src={audioUrl} className="hidden" />
                                {/* Custom Player could go here, for now using simple analyze button */}

                                <Button
                                    onClick={analyzeAudio}
                                    disabled={isAnalyzing}
                                    className="h-12 px-6 rounded-full bg-cyan-600 hover:bg-cyan-500 font-bold"
                                >
                                    {isAnalyzing ? (
                                        <Loader2 className="h-5 w-5 animate-spin mr-2" />
                                    ) : (
                                        <Wand2 className="h-5 w-5 mr-2" />
                                    )}
                                    {isAnalyzing ? "Listening..." : "Analyze My Voice"}
                                </Button>
                            </>
                        )}
                    </div>

                    {isRecording && <p className="text-red-400 text-sm animate-pulse">Recording...</p>}
                </CardContent>
            </Card>

            {/* Feedback Display */}
            {feedback && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Transcription */}
                    <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-4">
                            <h3 className="text-sm font-medium text-muted-foreground mb-2">You said:</h3>
                            <p className="text-lg italic font-serif text-white">"{feedback.transcription}"</p>
                            <div className="mt-4 p-3 bg-cyan-950/30 border border-cyan-900 rounded-lg">
                                <p className="text-cyan-200 font-medium text-sm">{feedback.overall_assessment}</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <MetricCard label="Pronunciation" score={feedback.metrics.pronunciation_score} />
                        <MetricCard label="Confidence" score={feedback.metrics.confidence_score} />
                        <MetricCard label="Clarity" score={feedback.metrics.clarity_score} />
                    </div>

                    {/* Detailed Feedback */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-green-950/20 border-green-900/50">
                            <CardContent className="p-4">
                                <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                                    <span className="text-xl">🌟</span> Strengths
                                </h3>
                                <ul className="space-y-2">
                                    {feedback.feedback.strengths.map((item, i) => (
                                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-orange-950/20 border-orange-900/50">
                            <CardContent className="p-4">
                                <h3 className="text-orange-400 font-bold mb-3 flex items-center gap-2">
                                    <span className="text-xl">📈</span> To Improve
                                </h3>
                                <ul className="space-y-2">
                                    {feedback.feedback.improvements.map((item, i) => (
                                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    );
}

function MetricCard({ label, score }: { label: string, score: number }) {
    const getColor = (s: number) => {
        if (s >= 8) return "text-green-500";
        if (s >= 6) return "text-yellow-500";
        return "text-red-500";
    };

    return (
        <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4 flex flex-col items-center">
                <span className="text-muted-foreground text-sm mb-1">{label}</span>
                <div className={`text-4xl font-bold ${getColor(score)}`}>{score}/10</div>
                {/* Simple bar */}
                <div className="w-full h-1.5 bg-gray-800 rounded-full mt-3 overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-1000 ${getColor(score).replace("text-", "bg-")}`}
                        style={{ width: `${score * 10}%` }}
                    />
                </div>
            </CardContent>
        </Card>
    );
}

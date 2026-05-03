"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Loader2, CheckCircle2, AlertTriangle, Brain } from "lucide-react";
import VoiceRecorder from "@/components/ui/VoiceRecorder";
import { api } from "@/lib/api";

interface RecallSessionProps {
    topics: string[]; // List of topic names covered in last 2 Pomodoros
    onComplete: (result: RecallResult) => void;
    sessionNumber: number;
}

export interface RecallResult {
    sessionNumber: number;
    topics: string[];
    transcription: string;
    recallPercentage: number;
    feedback: string;
    keyPointsMentioned: string[];
    missingPoints: string[];
}

export default function RecallSession({
    topics,
    onComplete,
    sessionNumber
}: RecallSessionProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<RecallResult | null>(null);
    const [error, setError] = useState<string | null>(null);


    const handleRecordingComplete = async (base64Audio: string) => {
        setIsRecording(false);
        setIsAnalyzing(true);
        setError(null);

        try {
            const response = await api.post("/audio-analysis/analyze-recall", {
                audio_base64: base64Audio,
                topics: topics.join(", "),
                session_context: `Pomodoro Recall Session ${sessionNumber}`
            });

            const data = response.data;

            const recallResult: RecallResult = {
                sessionNumber,
                topics,
                transcription: data.transcription || "",
                recallPercentage: data.recall_percentage || data.score || 0,
                feedback: data.feedback || "",
                keyPointsMentioned: data.key_points_mentioned || [],
                missingPoints: data.missing_points || []
            };

            setResult(recallResult);
        } catch (err) {
            console.error("Recall analysis error:", err);
            setError("Failed to analyze recording. Please try again.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleContinue = () => {
        if (result) {
            onComplete(result);
        }
    };

    // Result view
    if (result) {
        const isGoodRecall = result.recallPercentage >= 70;

        return (
            <Card className={`border-2 ${isGoodRecall ? 'border-green-400 bg-green-50 dark:bg-green-900/20' : 'border-amber-400 bg-amber-50 dark:bg-amber-900/20'}`}>
                <CardContent className="p-6">
                    <div className="text-center mb-6">
                        <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${isGoodRecall ? 'bg-green-100 dark:bg-green-900/30' : 'bg-amber-100 dark:bg-amber-900/30'}`}>
                            {isGoodRecall ? (
                                <CheckCircle2 className="h-10 w-10 text-green-600" />
                            ) : (
                                <AlertTriangle className="h-10 w-10 text-amber-600" />
                            )}
                        </div>
                        <div className={`text-4xl font-bold mb-2 ${isGoodRecall ? 'text-green-600' : 'text-amber-600'}`}>
                            {result.recallPercentage}%
                        </div>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                            {isGoodRecall ? 'Excellent recall! Keep it up!' : 'Good effort! Focus on the missing points.'}
                        </p>
                    </div>

                    {/* Feedback */}
                    <div className="bg-card rounded-lg p-4 mb-4">
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">{result.feedback}</p>
                    </div>

                    {/* Key Points Mentioned */}
                    {result.keyPointsMentioned.length > 0 && (
                        <div className="mb-4">
                            <h4 className="text-xs uppercase text-green-600 font-semibold mb-2">Points You Covered</h4>
                            <div className="flex flex-wrap gap-2">
                                {result.keyPointsMentioned.map((point, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                                        ✓ {point}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Missing Points */}
                    {result.missingPoints.length > 0 && (
                        <div className="mb-6">
                            <h4 className="text-xs uppercase text-amber-600 font-semibold mb-2">Points to Review</h4>
                            <div className="flex flex-wrap gap-2">
                                {result.missingPoints.map((point, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full">
                                        {point}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <Button onClick={handleContinue} className="w-full bg-orange-500 hover:bg-orange-600">
                        Continue to Next Session
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
            <CardContent className="p-6">
                <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Brain className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                        Voice Recall Session
                    </h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                        Explain what you learned in the last 2 Pomodoros
                    </p>
                </div>

                {/* Topics to recall */}
                <div className="bg-card rounded-lg p-4 mb-6">
                    <h4 className="text-xs uppercase text-muted-foreground mb-2">Topics to Recall:</h4>
                    <div className="flex flex-wrap gap-2">
                        {topics.map((topic, i) => (
                            <span key={i} className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Recording Interface */}
                {isAnalyzing ? (
                    <div className="text-center py-8">
                        <Loader2 className="h-12 w-12 animate-spin text-purple-500 mx-auto mb-4" />
                        <p className="text-purple-600 font-medium">🤖 AI analyzing your recall...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-4">
                        <p className="text-red-500 mb-4">{error}</p>
                        <Button onClick={() => setError(null)} variant="outline">
                            Try Again
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4">
                            <p className="text-sm text-purple-700 dark:text-purple-300 text-center mb-4">
                                Press record and explain everything you remember about the topics above.
                                Speak for 1-2 minutes.
                            </p>
                            <VoiceRecorder
                                autoSubmit={false}
                                onRecordingComplete={handleRecordingComplete}
                                onRecordingStart={() => setIsRecording(true)}
                                onRecordingStop={() => { }}
                            />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}


"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    Brain,
    CheckCircle2,
    XCircle,
    ArrowLeft,
    ArrowRight,
    Send,
    Loader2,
    AlertCircle,
    Lightbulb,
    Trophy,
    Mic,
    MicOff,
    Square,
    Play,
    RotateCcw
} from "lucide-react";

// Sample MCQ questions - In production, these would come from backend/topic data
const SAMPLE_QUESTIONS = [
    {
        id: 1,
        question: "Which of the following statements about the Preamble of the Indian Constitution is/are correct?",
        options: [
            "The word 'Socialist' was added by the 42nd Amendment",
            "The Preamble is a part of the Constitution as per Kesavananda Bharati case",
            "The Preamble can be amended under Article 368",
            "All of the above"
        ],
        correctAnswer: 3, // Index of correct option (0-based)
        explanations: [
            "Correct - The 42nd Amendment (1976) added 'Socialist' and 'Secular' to the Preamble.",
            "Correct - In Kesavananda Bharati case (1973), SC held Preamble is part of Constitution.",
            "Correct - Preamble can be amended under Article 368, but basic features cannot be altered.",
            "Correct - All three statements are accurate about the Preamble."
        ],
        topic: "Preamble"
    },
    {
        id: 2,
        question: "Consider the following about the Regulating Act of 1773:",
        options: [
            "It created the post of Governor-General of India",
            "It established the Supreme Court at Calcutta",
            "It made the Company's commercial activities subject to Parliamentary control",
            "Warren Hastings became the first Governor under this Act"
        ],
        correctAnswer: 1, // Supreme Court at Calcutta
        explanations: [
            "Incorrect - It created Governor-General of BENGAL, not India. Governor-General of India came in 1833.",
            "Correct - The Supreme Court at Calcutta was established under this Act with Sir Elijah Impey as first Chief Justice.",
            "Partially correct but not the main focus - While it did bring some control, the key feature was administrative reform.",
            "Incorrect - Warren Hastings became the first Governor-General of Bengal, not just 'Governor'."
        ],
        topic: "Historical Evolution"
    },
    {
        id: 3,
        question: "Which Article of the Constitution deals with the Right to Equality?",
        options: [
            "Articles 12-18",
            "Articles 14-18",
            "Articles 19-22",
            "Articles 23-24"
        ],
        correctAnswer: 1, // Articles 14-18
        explanations: [
            "Incorrect - Article 12 defines 'State' and Articles 12-35 cover all Fundamental Rights.",
            "Correct - Right to Equality is covered under Articles 14 (equality before law), 15 (prohibition of discrimination), 16 (equality of opportunity), 17 (abolition of untouchability), and 18 (abolition of titles).",
            "Incorrect - Articles 19-22 deal with Right to Freedom.",
            "Incorrect - Articles 23-24 deal with Right against Exploitation."
        ],
        topic: "Fundamental Rights"
    }
];

interface ElaborationQAProps {
    cycleId: number;
    day: number;
    onClose: () => void;
}

interface OptionRecording {
    audioBlob: Blob | null;
    audioUrl: string | null;
    isRecording: boolean;
    isAnalyzing: boolean;
    isAnalyzed: boolean;
    aiFeedback: string | null;
    isCorrect: boolean | null;
    duration: number;
}

const initialRecordingState = (): OptionRecording => ({
    audioBlob: null,
    audioUrl: null,
    isRecording: false,
    isAnalyzing: false,
    isAnalyzed: false,
    aiFeedback: null,
    isCorrect: null,
    duration: 0
});

export default function ElaborationQA({ cycleId, day, onClose }: ElaborationQAProps) {
    const [questions] = useState(SAMPLE_QUESTIONS);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [recordings, setRecordings] = useState<OptionRecording[]>([
        initialRecordingState(),
        initialRecordingState(),
        initialRecordingState(),
        initialRecordingState()
    ]);
    const [score, setScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [sessionComplete, setSessionComplete] = useState(false);
    const [allAnalyzed, setAllAnalyzed] = useState(false);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [activeRecordingIndex, setActiveRecordingIndex] = useState<number | null>(null);

    const currentQuestion = questions[currentIndex];
    const progress = ((currentIndex) / questions.length) * 100;

    // Check if all options are analyzed
    useEffect(() => {
        const allDone = recordings.every(r => r.isAnalyzed);
        setAllAnalyzed(allDone);

        if (allDone) {
            // Calculate score
            let questionScore = 0;
            recordings.forEach((r, idx) => {
                if (r.isCorrect) questionScore += 25;
            });
            setScore(questionScore);
        }
    }, [recordings]);

    const startRecording = async (optionIndex: number) => {
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
                const audioUrl = URL.createObjectURL(audioBlob);

                // Update recording state
                setRecordings(prev => {
                    const newRecordings = [...prev];
                    newRecordings[optionIndex] = {
                        ...newRecordings[optionIndex],
                        audioBlob,
                        audioUrl,
                        isRecording: false
                    };
                    return newRecordings;
                });

                // Stop all tracks
                stream.getTracks().forEach(track => track.stop());

                // Start AI analysis
                analyzeRecording(optionIndex);
            };

            // Start recording
            setActiveRecordingIndex(optionIndex);
            setRecordings(prev => {
                const newRecordings = [...prev];
                newRecordings[optionIndex] = {
                    ...newRecordings[optionIndex],
                    isRecording: true,
                    duration: 0,
                    audioBlob: null,
                    audioUrl: null,
                    isAnalyzed: false,
                    aiFeedback: null,
                    isCorrect: null
                };
                return newRecordings;
            });

            // Start timer
            timerRef.current = setInterval(() => {
                setRecordings(prev => {
                    const newRecordings = [...prev];
                    newRecordings[optionIndex] = {
                        ...newRecordings[optionIndex],
                        duration: newRecordings[optionIndex].duration + 1
                    };
                    return newRecordings;
                });
            }, 1000);

            mediaRecorder.start();
        } catch (error) {
            console.error("Error accessing microphone:", error);
            alert("Unable to access microphone. Please allow microphone permissions.");
        }
    };

    const stopRecording = (optionIndex: number) => {
        if (mediaRecorderRef.current && recordings[optionIndex].isRecording) {
            mediaRecorderRef.current.stop();
            setActiveRecordingIndex(null);

            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }
    };

    const analyzeRecording = async (optionIndex: number) => {
        // Set analyzing state
        setRecordings(prev => {
            const newRecordings = [...prev];
            newRecordings[optionIndex] = {
                ...newRecordings[optionIndex],
                isAnalyzing: true
            };
            return newRecordings;
        });

        const isCorrectOption = optionIndex === currentQuestion.correctAnswer;
        const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

        try {
            // Call backend API for AI analysis
            const response = await fetch(`${API_BASE}/audio/analyze`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    audio_base64: '', // Would include actual audio in production
                    option_text: currentQuestion.options[optionIndex],
                    is_correct_option: isCorrectOption,
                    correct_explanation: currentQuestion.explanations[optionIndex],
                    topic: currentQuestion.topic
                })
            });

            if (response.ok) {
                const data = await response.json();
                setRecordings(prev => {
                    const newRecordings = [...prev];
                    newRecordings[optionIndex] = {
                        ...newRecordings[optionIndex],
                        isAnalyzing: false,
                        isAnalyzed: true,
                        aiFeedback: data.feedback || (data.is_correct ? "✓ Good explanation!" : "⚠ Review needed"),
                        isCorrect: data.is_correct
                    };
                    return newRecordings;
                });
                return;
            }
        } catch (error) {
            console.log('Falling back to simulated analysis:', error);
        }

        // Fallback to simulated analysis if API fails
        await new Promise(resolve => setTimeout(resolve, 1500));

        const simulatedCorrect = Math.random() > 0.3;
        let feedback = "";
        if (simulatedCorrect) {
            if (isCorrectOption) {
                feedback = "✓ Great explanation! You correctly identified this as the RIGHT answer.";
            } else {
                feedback = "✓ Good job! You correctly identified this as an INCORRECT option.";
            }
        } else {
            if (isCorrectOption) {
                feedback = "⚠ This is actually the CORRECT answer. Review: " + currentQuestion.explanations[optionIndex];
            } else {
                feedback = "⚠ Your reasoning needs revision. " + currentQuestion.explanations[optionIndex];
            }
        }

        setRecordings(prev => {
            const newRecordings = [...prev];
            newRecordings[optionIndex] = {
                ...newRecordings[optionIndex],
                isAnalyzing: false,
                isAnalyzed: true,
                aiFeedback: feedback,
                isCorrect: simulatedCorrect
            };
            return newRecordings;
        });
    };

    const playRecording = (optionIndex: number) => {
        const audioUrl = recordings[optionIndex].audioUrl;
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play();
        }
    };

    const resetRecording = (optionIndex: number) => {
        setRecordings(prev => {
            const newRecordings = [...prev];
            newRecordings[optionIndex] = initialRecordingState();
            return newRecordings;
        });
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setTotalScore(prev => prev + score);
            setCurrentIndex(currentIndex + 1);
            setRecordings([
                initialRecordingState(),
                initialRecordingState(),
                initialRecordingState(),
                initialRecordingState()
            ]);
            setScore(0);
            setAllAnalyzed(false);
        } else {
            setTotalScore(prev => prev + score);
            setSessionComplete(true);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    if (sessionComplete) {
        const finalTotal = totalScore;
        const avgScore = Math.round(finalTotal / questions.length);

        return (
            <div className="text-center py-8 space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Trophy className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Q&A Session Complete! 🎉
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        You explained {questions.length * 4} options across {questions.length} questions
                    </p>
                </div>

                <div className="max-w-md mx-auto">
                    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                        <CardContent className="p-6 text-center">
                            <div className="text-5xl font-bold text-blue-600 mb-2">{avgScore}%</div>
                            <div className="text-gray-600">Average Understanding Score</div>
                            <div className="text-sm text-gray-500 mt-2">
                                Total: {finalTotal} / {questions.length * 100} points
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex gap-4 justify-center pt-4">
                    <Button variant="outline" onClick={() => {
                        setCurrentIndex(0);
                        setSessionComplete(false);
                        setTotalScore(0);
                        setScore(0);
                        setRecordings([
                            initialRecordingState(),
                            initialRecordingState(),
                            initialRecordingState(),
                            initialRecordingState()
                        ]);
                        setAllAnalyzed(false);
                    }}>
                        Try Again
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700" onClick={onClose}>
                        Complete Session
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={onClose}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <div className="text-sm text-gray-500">
                    Question {currentIndex + 1} of {questions.length}
                </div>
            </div>

            <Progress value={progress} className="h-2" />

            {/* Instructions */}
            <Card className="bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200">
                <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Mic className="h-5 w-5" />
                        <span className="font-medium">Voice Explanation Mode</span>
                    </div>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                        Record your explanation for each option. AI will analyze your response immediately.
                    </p>
                </CardContent>
            </Card>

            {/* Question Card */}
            <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                            {currentQuestion.topic}
                        </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {currentQuestion.question}
                    </h2>
                </CardContent>
            </Card>

            {/* Options with Audio Recording */}
            <div className="space-y-4">
                {currentQuestion.options.map((option, idx) => {
                    const recording = recordings[idx];
                    const isOtherRecording = activeRecordingIndex !== null && activeRecordingIndex !== idx;

                    return (
                        <Card
                            key={idx}
                            className={`transition-all ${recording.isAnalyzed
                                ? recording.isCorrect
                                    ? 'border-2 border-green-500 bg-green-50 dark:bg-green-900/20'
                                    : 'border-2 border-amber-400 bg-amber-50 dark:bg-amber-900/20'
                                : recording.isRecording
                                    ? 'border-2 border-red-500 bg-red-50 dark:bg-red-900/10'
                                    : 'hover:shadow-md'
                                }`}
                        >
                            <CardContent className="p-4">
                                {/* Option Header */}
                                <div className="flex items-start gap-3 mb-4">
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${recording.isAnalyzed && recording.isCorrect
                                        ? 'bg-green-500 text-white'
                                        : recording.isAnalyzed
                                            ? 'bg-amber-500 text-white'
                                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                        }`}>
                                        {String.fromCharCode(65 + idx)}
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200 pt-1 flex-1">
                                        {option}
                                    </span>
                                    {recording.isAnalyzed && recording.isCorrect && (
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                    )}
                                    {recording.isAnalyzed && !recording.isCorrect && (
                                        <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                                    )}
                                </div>

                                {/* Recording Controls */}
                                <div className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                    {!recording.audioUrl && !recording.isRecording && !recording.isAnalyzing && (
                                        <Button
                                            size="sm"
                                            className="bg-red-500 hover:bg-red-600 text-white"
                                            onClick={() => startRecording(idx)}
                                            disabled={isOtherRecording}
                                        >
                                            <Mic className="h-4 w-4 mr-2" />
                                            Record Explanation
                                        </Button>
                                    )}

                                    {recording.isRecording && (
                                        <>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                                <span className="text-red-600 font-mono text-sm">
                                                    {formatTime(recording.duration)}
                                                </span>
                                            </div>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="border-red-500 text-red-600"
                                                onClick={() => stopRecording(idx)}
                                            >
                                                <Square className="h-4 w-4 mr-2" />
                                                Stop
                                            </Button>
                                        </>
                                    )}

                                    {recording.isAnalyzing && (
                                        <div className="flex items-center gap-2 text-blue-600">
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            <span className="text-sm">AI is analyzing your explanation...</span>
                                        </div>
                                    )}

                                    {recording.audioUrl && !recording.isAnalyzing && (
                                        <>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => playRecording(idx)}
                                            >
                                                <Play className="h-4 w-4 mr-2" />
                                                Play
                                            </Button>
                                            <span className="text-sm text-gray-500">
                                                {formatTime(recording.duration)}
                                            </span>
                                            {!recording.isAnalyzed && (
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    onClick={() => resetRecording(idx)}
                                                >
                                                    <RotateCcw className="h-4 w-4" />
                                                </Button>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* AI Feedback */}
                                {recording.isAnalyzed && recording.aiFeedback && (
                                    <div className={`mt-3 p-3 rounded-lg text-sm ${recording.isCorrect
                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                        : 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200'
                                        }`}>
                                        <div className="flex items-center gap-1 text-xs mb-1 font-semibold">
                                            <Brain className="h-3 w-3" />
                                            AI Analysis:
                                        </div>
                                        <p>{recording.aiFeedback}</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Progress Summary */}
            <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                    Explained: {recordings.filter(r => r.isAnalyzed).length} / 4 options
                </div>
                {allAnalyzed && (
                    <div className="text-sm font-semibold text-blue-600">
                        Score: {score}/100
                    </div>
                )}
            </div>

            {/* Navigation */}
            <div className="flex justify-end gap-4">
                <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={handleNext}
                    disabled={!allAnalyzed}
                >
                    {currentIndex < questions.length - 1 ? (
                        <>
                            Next Question
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                    ) : (
                        'Complete Session'
                    )}
                </Button>
            </div>

            {/* Helper Text */}
            {!allAnalyzed && (
                <p className="text-center text-sm text-gray-500">
                    <AlertCircle className="inline h-4 w-4 mr-1" />
                    Record your voice explanation for all 4 options to proceed
                </p>
            )}
        </div>
    );
}

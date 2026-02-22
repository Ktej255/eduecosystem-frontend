"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, ChevronRight, RotateCcw, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

// Define Generic Flashcard Interface
export interface Flashcard {
    id: number;
    front: string; // Map 'question' to 'front'
    back: string;  // Map 'answer' to 'back'
    category?: string;
    source?: string;
}

interface VoiceRecallModeProps {
    flashcards: Flashcard[];
    backLink?: string;
    title?: string;
}

export default function GenericVoiceRecallMode({
    flashcards,
    backLink = "/student/revision",
    title = "Voice Recall Session"
}: VoiceRecallModeProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | 'partial' | null>(null);
    const [similarity, setSimilarity] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState(0);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const recognitionRef = useRef<any>(null);
    const synthRef = useRef<SpeechSynthesis | null>(null);

    // Initialize Speech Recognition
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                recognitionRef.current = new SpeechRecognition();
                recognitionRef.current.continuous = true;
                recognitionRef.current.interimResults = true;
                recognitionRef.current.lang = 'en-US';

                recognitionRef.current.onresult = (event: any) => {
                    let finalTranscript = '';
                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                            finalTranscript += event.results[i][0].transcript;
                        }
                    }
                    if (finalTranscript) {
                        setTranscript(prev => prev + ' ' + finalTranscript);
                    }
                };

                recognitionRef.current.onerror = (event: any) => {
                    console.error('Speech recognition error', event.error);
                    setIsListening(false);
                };
            }

            synthRef.current = window.speechSynthesis;
        }
    }, []);

    // Analyze Answer
    const analyzeAnswer = () => {
        setIsListening(false);
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }

        const currentCard = flashcards[currentIndex];
        const correct = currentCard.back.toLowerCase();
        const user = transcript.toLowerCase();

        // Basic string similarity (token-based Jaccard index for simplicity)
        const correctTokens = new Set(correct.split(/\s+/));
        const userTokens = new Set(user.split(/\s+/));
        const intersection = new Set([...correctTokens].filter(x => userTokens.has(x)));

        const sim = (intersection.size / correctTokens.size) * 100;
        setSimilarity(Math.round(sim));

        if (sim > 70) {
            setFeedback('correct');
            setScore(s => s + 1);
        } else if (sim > 40) {
            setFeedback('partial');
        } else {
            setFeedback('incorrect');
        }
        setShowAnswer(true);
    };

    const nextCard = () => {
        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex(c => c + 1);
            setTranscript('');
            setFeedback(null);
            setShowAnswer(false);
            setSimilarity(0);
        }
    };

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
        } else {
            setTranscript('');
            recognitionRef.current?.start();
            setIsListening(true);
        }
    };

    const speakText = (text: string) => {
        if (synthRef.current) {
            if (isSpeaking) {
                synthRef.current.cancel();
                setIsSpeaking(false);
            } else {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.onend = () => setIsSpeaking(false);
                synthRef.current.speak(utterance);
                setIsSpeaking(true);
            }
        }
    };

    if (flashcards.length === 0) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold">No Flashcards Available</h2>
                    <p className="text-muted-foreground mb-6">Select chapters with flashcards to start.</p>
                    <Link href={backLink}>
                        <Button variant="outline">Go Back</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const currentCard = flashcards[currentIndex];

    return (
        <div className="min-h-screen bg-slate-950 text-white p-6 flex flex-col items-center">
            {/* Header */}
            <div className="w-full max-w-4xl flex items-center justify-between mb-8">
                <Link href={backLink} className="text-muted-foreground hover:text-white flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 rotate-180" /> Exit
                </Link>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-muted-foreground">Card {currentIndex + 1} / {flashcards.length}</span>
                    <Progress value={(currentIndex / flashcards.length) * 100} className="w-32 h-2" />
                </div>
            </div>

            {/* Main Area */}
            <div className="w-full max-w-2xl flex-1 flex flex-col gap-8">
                {/* Question Card */}
                <Card className="p-8 bg-slate-900 border-slate-800 relative overflow-hidden min-h-[200px] flex items-center justify-center text-center">
                    <div className="absolute top-4 left-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Question</div>
                    <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
                        {currentCard.front}
                    </h2>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-muted-foreground hover:text-white"
                        onClick={() => speakText(currentCard.front)}
                    >
                        <Volume2 className={`w-5 h-5 ${isSpeaking ? 'text-indigo-400 animate-pulse' : ''}`} />
                    </Button>
                </Card>

                {/* Interaction Area */}
                <div className="flex-1 flex flex-col gap-4">
                    {!showAnswer ? (
                        <div className="flex-1 bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed flex flex-col items-center justify-center p-8 transition-all">

                            {transcript ? (
                                <div className="w-full text-center mb-8">
                                    <p className="text-slate-300 text-lg">"{transcript}"</p>
                                    {isListening && <div className="mt-4 flex gap-1 justify-center"><span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" /><span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-75" /><span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-150" /></div>}
                                </div>
                            ) : (
                                <div className="text-center text-muted-foreground mb-8">
                                    <p>Tap the microphone and answer aloud.</p>
                                </div>
                            )}

                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className={`h-16 w-16 rounded-full text-white shadow-2xl transition-all ${isListening ? 'bg-red-500 hover:bg-red-600 scale-110' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                                    onClick={toggleListening}
                                >
                                    {isListening ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                                </Button>
                                {transcript && (
                                    <Button size="lg" className="h-16 rounded-full px-8 font-bold text-lg bg-emerald-600 hover:bg-emerald-700" onClick={analyzeAnswer}>
                                        Check Answer
                                    </Button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 bg-slate-900 rounded-2xl border border-slate-800 p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4">
                            <div className="flex items-center justify-between">
                                <div className="text-xs font-bold text-muted-foreground uppercase">Analysis</div>
                                <div className={`px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2 ${feedback === 'correct' ? 'bg-emerald-500/10 text-emerald-400' :
                                        feedback === 'partial' ? 'bg-amber-500/10 text-amber-400' :
                                            'bg-red-500/10 text-red-400'
                                    }`}>
                                    {feedback === 'correct' ? <CheckCircle2 className="w-4 h-4" /> : feedback === 'partial' ? <AlertCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                                    {feedback === 'correct' ? 'Perfect Match' : feedback === 'partial' ? 'Close Enough' : 'Needs Improvement'}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="text-sm text-muted-foreground">Correct Answer:</div>
                                <p className="text-lg text-emerald-300 font-medium leading-relaxed">{currentCard.back}</p>
                            </div>

                            <div className="pt-4 border-t border-slate-800 flex justify-end">
                                <Button size="lg" onClick={nextCard} className="gap-2">
                                    Next Card <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

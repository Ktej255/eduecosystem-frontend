"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play,
    Pause,
    Mic,
    CheckCircle2,
    ChevronRight,
    Clock,
    RotateCcw,
    Volume2,
    BrainCircuit,
    ListTodo,
    Sparkles,
    CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { toast } from 'react-hot-toast';
import { saveCycleSession, CycleSession } from '@/lib/revision/revision-analytics-service';

type CyclePhase = 'video' | 'recall' | 'mcq' | 'transition';



interface CycleEngineProps {
    examId: string;
    onComplete: (data: any) => void;
    durationMinutes: number;
    subjectId: string;
    topicName: string;
    topicId: number;
}

export default function CycleEngine({ examId, onComplete, durationMinutes = 25, subjectId, topicName, topicId }: CycleEngineProps) {
    const [phase, setPhase] = useState<CyclePhase>('video');
    const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const sessionStartTimeRef = useRef<string>(new Date().toISOString());


    // Speech Recognition Integration
    const {
        isListening,
        transcript,
        startListening,
        stopListening,
        resetTranscript,
        hasSupport
    } = useSpeechRecognition({
        onResult: (text) => setRecallTranscript(text),
        onError: (err) => {
            console.error('Speech Error:', err);
            toast.error('Voice capture issue: ' + err);
        }
    });

    // Recording States
    const [isRecording, setIsRecording] = useState(false);

    const [recallTranscript, setRecallTranscript] = useState('');
    const [mcqResults, setMcqResults] = useState({ correct: 0, total: 5 }); // Default total 5

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handlePhaseComplete();
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isActive, timeLeft]);

    const handlePhaseComplete = () => {
        setIsActive(false);
        if (phase === 'video') {
            setPhase('recall');
        } else if (phase === 'recall') {
            setPhase('mcq');
        } else if (phase === 'mcq') {
            // Persist session data
            const session: CycleSession = {
                id: `cycle-${Date.now()}`,
                examId: examId,
                subjectId,
                topicName,
                topicId,
                startTime: sessionStartTimeRef.current,
                endTime: new Date().toISOString(),
                durationMinutes,
                phases: {
                    video: { completed: true, durationSeconds: (durationMinutes * 60) - timeLeft },
                    recall: { completed: true, transcript: recallTranscript, aiScore: 75 }, // To be scored by backend
                    mcq: { completed: true, correctCount: mcqResults.correct, totalCount: mcqResults.total }
                },
                level: 'beginner'
            };
            saveCycleSession(session);
            toast.success('Session saved to Knowledge Tree!');
            onComplete({ subjectId, topicName, status: 'completed' });
        }
    };


    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const progress = (timeLeft / (durationMinutes * 60)) * 100;

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content Area */}
                <div className="flex-1 space-y-6">
                    <AnimatePresence mode="wait">
                        {phase === 'video' && (
                            <motion.div
                                key="video"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="relative aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-900 group"
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-white p-12">
                                        <div className="w-24 h-24 bg-card/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md group-hover:scale-110 transition-transform cursor-pointer" onClick={() => setIsActive(!isActive)}>
                                            {isActive ? <Pause className="w-10 h-10 fill-white" /> : <Play className="w-10 h-10 fill-white ml-2" />}
                                        </div>
                                        <h3 className="text-2xl font-black mb-2">Fundamental Rights: Article 14-18</h3>
                                        <p className="text-muted-foreground font-medium tracking-wide uppercase text-xs">Conceptual Clarity Video • 25 Minutes</p>
                                    </div>
                                </div>

                                {/* Video Progress Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white font-mono text-sm">{formatTime(durationMinutes * 60 - timeLeft)}</span>
                                        <span className="text-muted-foreground font-mono text-sm">{formatTime(timeLeft)}</span>
                                    </div>
                                    <Progress value={100 - progress} className="h-1.5 bg-card/20" color="bg-indigo-500" />
                                </div>
                            </motion.div>
                        )}

                        {phase === 'recall' && (
                            <motion.div
                                key="recall"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-card rounded-[3rem] p-12 shadow-2xl border border-slate-100 text-center"
                            >
                                <div className="w-24 h-24 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                                    <Mic className={`w-10 h-10 text-rose-600 ${isRecording ? 'animate-pulse' : ''}`} />
                                    {isRecording && (
                                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-4xl font-black mb-4">Verbal Recall Session</h2>
                                <p className="text-muted-foreground dark:text-muted-foreground max-w-lg mx-auto mb-12 font-medium">
                                    Explain the core concepts you just watched. Verbalizing helps "lock in" the neuro-pathways of understanding.
                                </p>

                                <div className="bg-muted p-8 rounded-3xl mb-8 min-h-[150px] border border-slate-100 text-left">
                                    {recallTranscript ? (
                                        <p className="text-lg font-medium leading-relaxed italic text-muted-foreground">
                                            "{recallTranscript}"
                                        </p>
                                    ) : (
                                        <p className="text-muted-foreground italic text-center py-8">Your explanation will appear here as you speak...</p>
                                    )}
                                </div>

                                <div className="flex gap-4 justify-center">
                                    <Button
                                        size="lg"
                                        onClick={() => {
                                            if (isListening) {
                                                stopListening();
                                            } else {
                                                resetTranscript();
                                                startListening();
                                            }
                                        }}
                                        className={`h-16 px-10 rounded-2xl font-black transition-all ${isListening ? 'bg-rose-600 text-white animate-pulse' : 'bg-slate-900 dark:bg-card dark:text-foreground'
                                            }`}
                                    >
                                        {isListening ? 'Stop Recording' : 'Start Explaining'}
                                    </Button>
                                    <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl font-black" onClick={() => {
                                        stopListening();
                                        handlePhaseComplete();
                                    }}>
                                        Done Recalling
                                    </Button>
                                </div>

                            </motion.div>
                        )}

                        {phase === 'mcq' && (
                            <motion.div
                                key="mcq"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-3xl font-black">Retention Check</h2>
                                    <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 border-none px-4 py-1.5 rounded-full font-black uppercase tracking-widest text-[10px]">
                                        Question 1 of 5
                                    </Badge>
                                </div>

                                <Card className="border-none bg-card rounded-[2.5rem] shadow-xl overflow-hidden">
                                    <CardContent className="p-12">
                                        <h3 className="text-2xl font-bold mb-10 leading-snug">
                                            Which of the following Fundamental Rights provides for the "Abolition of Untouchability"?
                                        </h3>

                                        <div className="grid grid-cols-1 gap-4">
                                            {[
                                                'Article 14',
                                                'Article 17',
                                                'Article 19',
                                                'Article 21'
                                            ].map((opt, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => {
                                                        // Demonstration logic: Article 17 is correct
                                                        const isCorrect = i === 1;
                                                        if (isCorrect) {
                                                            setMcqResults(prev => ({ ...prev, correct: prev.correct + 1 }));
                                                            toast.success('Correct!');
                                                        } else {
                                                            toast.error('Incorrect. Review Article 17.');
                                                        }
                                                        // Finalize after one demo question for this version
                                                        handlePhaseComplete();
                                                    }}
                                                    className="w-full p-6 text-left rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-all font-bold flex justify-between group"
                                                >
                                                    {opt}
                                                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                                </button>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="flex justify-between items-center bg-muted/50 p-6 rounded-[2rem]">
                                    <p className="text-sm font-bold text-muted-foreground">Correct answers give 2X XP during Cycle Loops</p>
                                    <Button className="rounded-xl font-bold bg-indigo-600">Submit Answer</Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Sidebar Stats / Info */}
                <div className="w-full lg:w-80 space-y-6">
                    <Card className="border-none bg-indigo-600 text-white rounded-[2rem] shadow-xl shadow-indigo-500/20 overflow-hidden">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-2 mb-6 opacity-80">
                                <Clock className="w-4 h-4" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Active Cycle</span>
                            </div>
                            <div className="text-6xl font-black mb-2 tabular-nums">{formatTime(timeLeft)}</div>
                            <p className="text-indigo-200 text-sm font-medium mb-8">Conceptual Deep Dive</p>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-xs font-bold">
                                    <span className="opacity-80">Progress</span>
                                    <span>{Math.round(100 - progress)}%</span>
                                </div>
                                <Progress value={100 - progress} className="h-1 bg-card/20" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-none bg-card rounded-[2rem] shadow-lg border border-slate-100">
                        <CardContent className="p-8">
                            <h4 className="font-black text-xs uppercase tracking-widest text-muted-foreground mb-6">Pipeline</h4>
                            <div className="space-y-6">
                                {[
                                    { phase: 'video', label: 'Watch Context', active: phase === 'video', done: phase !== 'video' },
                                    { phase: 'recall', label: 'Verbal Recall', active: phase === 'recall', done: phase === 'mcq' },
                                    { phase: 'mcq', label: 'Retention Test', active: phase === 'mcq', done: false },
                                ].map((step, i) => (
                                    <div key={i} className={`flex items-center gap-4 ${step.active ? 'text-indigo-600' : step.done ? 'text-emerald-500' : 'text-muted-foreground'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${step.active ? 'border-indigo-600 bg-indigo-50' : step.done ? 'border-emerald-500 bg-emerald-50' : 'border-border bg-transparent'
                                            }`}>
                                            {step.done ? <CheckCircle className="w-4 h-4" /> : <span className="text-xs font-bold">{i + 1}</span>}
                                        </div>
                                        <span className={`text-sm font-black transition-colors ${step.active ? 'opacity-100' : 'opacity-60'}`}>{step.label}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Insights Box */}
                    <Card className="border-none bg-slate-900 text-white rounded-[2rem] overflow-hidden p-8">
                        <BrainCircuit className="w-8 h-8 text-indigo-400 mb-4" />
                        <h4 className="font-black text-lg mb-2 leading-tight">Adaptive Focus</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed font-medium">
                            Based on your previous speed, Article 17 has been prioritized for this cycle. Retention velocity is 1.2x.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}

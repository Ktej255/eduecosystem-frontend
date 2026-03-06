"use client";

import React, { useState, useEffect } from 'react';
import {
    Clock, Play, Pause, CheckCircle2,
    ArrowRight, BookOpen, Mic,
    Camera, ChevronRight, GraduationCap,
    AlertCircle
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const TEACH_TIME = 25 * 60; // 25 minutes
const RECALL_TIME = 5 * 60; // 5 minutes

type SessionPhase = 'Teaching' | 'Recall' | 'Complete';

export interface Topic {
    id: number | string;
    title: string;
    branch?: string;
    blockId?: number | string;
}

interface SessionTimerProps {
    topics: Topic[];
    subject: string;
    onComplete: (topics: Topic[]) => void;
    backPath: string;
    accentColor?: 'indigo' | 'emerald' | 'blue' | 'rose' | 'amber';
}

export default function SessionTimer({
    topics,
    subject,
    onComplete,
    backPath,
    accentColor = 'indigo'
}: SessionTimerProps) {
    const router = useRouter();

    const [phase, setPhase] = useState<SessionPhase>('Teaching');
    const [timeLeft, setTimeLeft] = useState(TEACH_TIME);
    const [isActive, setIsActive] = useState(false);

    // For audio/photo uploads
    const [photoUploaded, setPhotoUploaded] = useState(false);
    const [audioUploaded, setAudioUploaded] = useState(false);

    useEffect(() => {
        let interval: any = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            if (phase === 'Teaching') {
                handleSwitchToRecall();
            } else if (phase === 'Recall') {
                setPhase('Complete');
                setIsActive(false);
                toast.success("Recall session complete!");
            }
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft, phase]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleSwitchToRecall = () => {
        setPhase('Recall');
        setTimeLeft(RECALL_TIME);
        setIsActive(true);
        toast.info("Entering 5-minute Recall Phase. Prepare your notes or audio summary.");
    };

    const colorClasses = {
        indigo: { primary: 'bg-indigo-600', border: 'border-indigo-600', bg: 'bg-indigo-100', text: 'text-indigo-700', ring: 'ring-indigo-600', textPrimary: 'text-indigo-600' },
        emerald: { primary: 'bg-emerald-600', border: 'border-emerald-600', bg: 'bg-emerald-100', text: 'text-emerald-700', ring: 'ring-emerald-600', textPrimary: 'text-emerald-600' },
        blue: { primary: 'bg-blue-600', border: 'border-blue-600', bg: 'bg-blue-100', text: 'text-blue-700', ring: 'ring-blue-600', textPrimary: 'text-blue-600' },
        rose: { primary: 'bg-rose-600', border: 'border-rose-600', bg: 'bg-rose-100', text: 'text-rose-700', ring: 'ring-rose-600', textPrimary: 'text-rose-600' },
        amber: { primary: 'bg-amber-600', border: 'border-amber-600', bg: 'bg-amber-100', text: 'text-amber-700', ring: 'ring-amber-600', textPrimary: 'text-amber-600' },
    };

    const theme = colorClasses[accentColor] || colorClasses.indigo;

    const progressValue = phase === 'Teaching'
        ? ((TEACH_TIME - timeLeft) / TEACH_TIME) * 100
        : ((RECALL_TIME - timeLeft) / RECALL_TIME) * 100;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen flex flex-col items-center">

            {/* Session Header */}
            <div className="text-center space-y-4 mb-12">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <Badge variant="secondary" className={`${theme.bg} ${theme.text} hover:${theme.bg} font-bold px-3`}>
                        {subject}
                    </Badge>
                    {topics[0]?.blockId && (
                        <Badge variant="outline" className={`border-${accentColor}-200 ${theme.textPrimary} font-bold px-3`}>
                            Block {topics[0].blockId}
                        </Badge>
                    )}
                </div>
                <h1 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    Topic Session
                </h1>
                <div className="flex flex-col gap-2 items-center">
                    {topics.map(t => (
                        <div key={t.id} className="text-xl font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2">
                            <BookOpen className={`w-5 h-5 ${theme.textPrimary}`} />
                            {t.title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Phase UI */}
            <AnimatePresence mode="wait">
                {phase === 'Teaching' || phase === 'Recall' ? (
                    <motion.div
                        key={phase}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="w-full max-w-2xl"
                    >
                        <Card className={`border-4 ${phase === 'Teaching' ? theme.border : 'border-emerald-600'} shadow-2xl bg-card overflow-hidden`}>
                            <CardHeader className="bg-slate-50 dark:bg-slate-900 border-b py-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${phase === 'Teaching' ? theme.primary : 'bg-emerald-600'} text-white`}>
                                            <GraduationCap className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg font-black uppercase tracking-widest">
                                                {phase} Phase
                                            </CardTitle>
                                            <CardDescription className="font-medium">
                                                {phase === 'Teaching'
                                                    ? 'Focus exclusively on the teacher and your notes.'
                                                    : 'Summarize what you learned in 5 minutes.'}
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <Badge className={`text-xl px-4 py-1 h-auto font-mono ${phase === 'Teaching' ? theme.primary : 'bg-emerald-600'} text-white`}>
                                        {formatTime(timeLeft)}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="p-12 flex flex-col items-center">
                                {/* Large Central Clock Display */}
                                <div className="relative w-64 h-64 mb-12">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                            cx="50" cy="50" r="45"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="text-slate-100 dark:text-slate-800"
                                        />
                                        <motion.circle
                                            cx="50" cy="50" r="45"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            strokeDasharray="283"
                                            strokeDashoffset={283 - (283 * progressValue) / 100}
                                            className={phase === 'Teaching' ? theme.textPrimary : 'text-emerald-600'}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-6xl font-black font-mono text-slate-900 dark:text-white">
                                            {formatTime(timeLeft)}
                                        </span>
                                        <span className="text-xs font-black uppercase tracking-widest text-muted-foreground mt-2">
                                            Remaining
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-4 w-full justify-center">
                                    <Button
                                        size="lg"
                                        className={`px-12 font-black uppercase tracking-widest h-14 ${isActive ? 'bg-slate-200 text-slate-800 hover:bg-slate-300' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                                        onClick={() => setIsActive(!isActive)}
                                    >
                                        {isActive ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                                        {isActive ? 'Pause' : 'Start'}
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="h-14 font-bold border-2"
                                        onClick={() => {
                                            if (confirm("Skip current phase?")) {
                                                if (phase === 'Teaching') handleSwitchToRecall();
                                                else setPhase('Complete');
                                            }
                                        }}
                                    >
                                        Skip Phase <ChevronRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </div>

                                {phase === 'Recall' && (
                                    <div className="mt-12 w-full grid grid-cols-2 gap-4">
                                        <Button
                                            variant={photoUploaded ? "secondary" : "outline"}
                                            className={`h-20 flex flex-col gap-2 border-2 ${photoUploaded ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-dashed'}`}
                                            onClick={() => { setPhotoUploaded(true); toast.success("Photo uploaded successfully."); }}
                                        >
                                            <Camera className="w-6 h-6" />
                                            <span className="text-xs font-black uppercase">Upload Handwritten Note</span>
                                            {photoUploaded && <CheckCircle2 className="w-4 h-4 absolute top-2 right-2" />}
                                        </Button>
                                        <Button
                                            variant={audioUploaded ? "secondary" : "outline"}
                                            className={`h-20 flex flex-col gap-2 border-2 ${audioUploaded ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-dashed'}`}
                                            onClick={() => { setAudioUploaded(true); toast.success("Audio recorded successfully."); }}
                                        >
                                            <Mic className="w-6 h-6" />
                                            <span className="text-xs font-black uppercase">Record Audio Summary</span>
                                            {audioUploaded && <CheckCircle2 className="w-4 h-4 absolute top-2 right-2" />}
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-xl text-center space-y-8"
                    >
                        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-xl shadow-emerald-500/10">
                            <CheckCircle2 className="w-16 h-16" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Block Complete!</h2>
                            <p className="text-slate-500 font-medium">You have successfully mastered these topics.</p>
                        </div>

                        <Card className="border-border bg-card shadow-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-bold text-muted-foreground uppercase">Topics Mastered</span>
                                <Badge className="bg-emerald-600 text-white">{topics.length}</Badge>
                            </div>
                            <div className="space-y-3">
                                {topics.map(t => (
                                    <div key={t.id} className="flex items-center gap-3 p-3 bg-muted rounded-lg font-bold text-slate-700 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        {t.title}
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <div className="flex flex-col gap-3">
                            <Button size="lg" className={`${theme.primary} hover:opacity-90 text-white font-black h-16 uppercase tracking-widest`} onClick={() => onComplete(topics)}>
                                Complete & Back to Dashboard
                            </Button>
                            <Button size="lg" variant="outline" className="h-16 font-black uppercase tracking-widest border-2" onClick={() => router.push(backPath)}>
                                Exit to Subject Portal <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Quick Tips */}
            <div className="mt-12 max-w-md w-full">
                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-1" />
                    <p className="text-xs font-medium text-amber-800 leading-relaxed">
                        <strong>Teacher's Tip:</strong> During the 25-minute teaching phase, avoid all distractions. If the teacher finishes early, use the remaining time to refine your diagrams before the 5-minute recall starts.
                    </p>
                </div>
            </div>
        </div>
    );
}

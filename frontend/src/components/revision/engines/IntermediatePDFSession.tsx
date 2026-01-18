"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText,
    Highlighter,
    MessageSquare,
    Bookmark,
    Timer,
    ChevronLeft,
    ChevronRight,
    ZoomIn,
    ZoomOut,
    MoreVertical,
    Play,
    Pause,
    CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from 'react-hot-toast';
import { saveCycleSession, CycleSession } from '@/lib/revision/revision-analytics-service';

interface IntermediatePDFSessionProps {
    topicName: string;
    onComplete: (data: any) => void;
    durationMinutes?: number;
}

export default function IntermediatePDFSession({
    topicName = "Indian Polity: Chapter 17",
    onComplete,
    durationMinutes = 45
}: IntermediatePDFSessionProps) {
    const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
    const [isActive, setIsActive] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [zoom, setZoom] = useState(100);
    const [annotations, setAnnotations] = useState<number>(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);

            const finishSession = async () => {
                toast.success("Focus Session Complete!");

                const session: CycleSession = {
                    id: `pdf-${Date.now()}`,
                    examId: 'upsc',
                    subjectId: 'polity',
                    topicName,
                    startTime: new Date(Date.now() - durationMinutes * 60000).toISOString(),
                    endTime: new Date().toISOString(),
                    durationMinutes,
                    level: 'intermediate',
                    phases: {
                        video: { completed: false, durationSeconds: 0 },
                        recall: { completed: false, transcript: '' },
                        mcq: { completed: false, correctCount: 0, totalCount: 0 }
                    }
                };

                await saveCycleSession(session);
                onComplete({ annotations, duration: durationMinutes });
            };

            finishSession();
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft, onComplete, annotations, durationMinutes, topicName]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleAnnotate = () => {
        setAnnotations(prev => prev + 1);
        toast.success("Highlight added", { icon: '🖊️', position: 'bottom-center' });
    };

    return (
        <div className="flex h-[calc(100vh-100px)] gap-4 p-4 max-w-7xl mx-auto">
            {/* Left: PDF Viewer (Simulated) */}
            <Card className="flex-1 flex flex-col overflow-hidden border-slate-200 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-slate-900/50">
                {/* PDF Toolbar */}
                <div className="h-14 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-md px-2 py-1">
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <span className="text-xs font-mono w-16 text-center">{currentPage} / 12</span>
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setCurrentPage(Math.min(12, currentPage + 1))}>
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2" />
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setZoom(z => Math.max(50, z - 10))}>
                                <ZoomOut className="w-4 h-4" />
                            </Button>
                            <span className="text-xs font-medium w-12 text-center">{zoom}%</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setZoom(z => Math.min(200, z + 10))}>
                                <ZoomIn className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="secondary"
                            size="sm"
                            className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200"
                            onClick={handleAnnotate}
                        >
                            <Highlighter className="w-4 h-4 mr-2" /> Highlight
                        </Button>
                        <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* PDF Content Area (Mock) */}
                <div className="flex-1 overflow-y-auto p-8 flex justify-center bg-slate-200/50 dark:bg-black/20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-white text-slate-900 w-full max-w-3xl min-h-[1000px] shadow-2xl p-16 relative"
                        style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
                    >
                        {/* Mock Document Content */}
                        <div className="space-y-8 font-serif leading-relaxed">
                            <div className="border-b-2 border-slate-900 pb-4 mb-12">
                                <h1 className="text-4xl font-black mb-2">{topicName}</h1>
                                <p className="text-slate-500 italic">Target 2026 • Revision Module • Batch 1.1</p>
                            </div>

                            <section>
                                <h2 className="text-2xl font-bold mb-4 text-slate-800">1. Introduction to Emergency Provisions</h2>
                                <p className="text-lg text-slate-700 mb-6">
                                    The Emergency provisions are contained in Part XVIII of the Constitution of India, from Articles 352 to 360.
                                    These provisions enable the Central government to meet any abnormal situation effectively.
                                    <span className="bg-yellow-200 px-1">The rationality behind the incorporation of these provisions</span> is to safeguard the
                                    sovereignty, unity, integrity, and security of the country, the democratic political system, and the Constitution.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4 text-slate-800">2. National Emergency (Article 352)</h2>
                                <p className="text-lg text-slate-700 mb-6">
                                    Under Article 352, the President can declare a national emergency when the security of India or a part of it is threatened by war or external aggression or armed rebellion.
                                    It may be noted that the president can declare a national emergency even before the actual occurrence of war or external aggression or armed rebellion, if he is satisfied that there is an imminent danger.
                                </p>
                                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-8">
                                    <h4 className="font-bold text-blue-900 mb-2">Key Fact</h4>
                                    <p className="text-blue-800">
                                        The 44th Amendment Act of 1978 substituted the words “armed rebellion” for “internal disturbance”.
                                        Thus, it is no longer possible to declare a National Emergency on the ground of “internal disturbance” as was done in 1975.
                                    </p>
                                </div>
                            </section>

                            {/* Visual Placeholder for more text */}
                            <div className="space-y-4 opacity-30 select-none">
                                <div className="h-4 bg-slate-200 rounded w-full"></div>
                                <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                                <div className="h-4 bg-slate-200 rounded w-full"></div>
                                <div className="h-4 bg-slate-200 rounded w-4/6"></div>
                                <div className="h-4 bg-slate-200 rounded w-full"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Card>

            {/* Right: Tools & Timer */}
            <div className="w-80 flex flex-col gap-4">
                {/* Timer Card */}
                <Card className="bg-indigo-600 text-white border-none shadow-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                        <Timer className="w-24 h-24" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <Badge className="bg-white/20 hover:bg-white/30 text-white border-none">Deep Focus</Badge>
                            <span className="text-xs font-medium opacity-80">{Math.round((timeLeft / (durationMinutes * 60)) * 100)}%</span>
                        </div>
                        <div className="text-5xl font-mono font-bold tracking-tighter mb-6">
                            {formatTime(timeLeft)}
                        </div>
                        <Progress value={(timeLeft / (durationMinutes * 60)) * 100} className="h-2 bg-white/20 mb-6" color="bg-white" />

                        <div className="flex items-center gap-3">
                            <Button
                                onClick={() => setIsActive(!isActive)}
                                className={`flex-1 font-bold ${isActive ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-white text-indigo-600 hover:bg-indigo-50'}`}
                            >
                                {isActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                                {isActive ? "Pause" : "Start"}
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Tools Panel */}
                <Card className="flex-1 border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900 flex flex-col">
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 font-semibold flex items-center gap-2">
                        <Brain className="w-4 h-4 text-purple-500" /> Session Tools
                    </div>

                    <div className="p-4 space-y-4 flex-1">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Assignments</label>
                            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-start gap-3 border border-slate-100 dark:border-slate-700">
                                <div className="mt-0.5"><div className="w-4 h-4 rounded-full border-2 border-slate-300" /></div>
                                <div className="text-sm">
                                    <p className="font-medium">Read Articles 352-360</p>
                                    <p className="text-xs text-slate-500 mt-1">Pages 1-4</p>
                                </div>
                            </div>
                            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-start gap-3 border border-green-100 dark:border-green-900/30">
                                <div className="mt-0.5"><CheckCircle2 className="w-4 h-4 text-green-600" /></div>
                                <div className="text-sm">
                                    <p className="font-medium text-green-900 dark:text-green-100">Review 44th Amendment</p>
                                    <p className="text-xs text-green-700 dark:text-green-300 mt-1">Completed</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Your Notes</label>
                            <div className="h-32 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 rounded-lg p-3 text-sm font-handwriting">
                                <p className="text-slate-800 dark:text-slate-200">
                                    Recall: National Emergency can be declared on grounds of war, external aggression, or armed rebellion.
                                    <br /><br />
                                    *Internal disturbance removed in 1978.
                                </p>
                            </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs text-slate-500">Highlights</span>
                                <Badge variant="outline">{annotations}</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-slate-500">Time Elapsed</span>
                                <span className="text-xs font-mono">{formatTime((durationMinutes * 60) - timeLeft)}</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Brain,
    Mic,
    Sparkles,
    ChevronRight,
    Target,
    AlertCircle,
    CheckCircle2,
    RotateCcw,
    FileText,
    ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { toast } from 'react-hot-toast';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { saveCycleSession, CycleSession } from '@/lib/revision/revision-analytics-service';

interface AdvancedRecallEngineProps {
    topicName: string;
    onRecallComplete: (data: any) => void;
}

export default function AdvancedRecallEngine({ topicName = "Executive Branch: The President", onRecallComplete }: AdvancedRecallEngineProps) {
    const [step, setStep] = useState<'prompt' | 'recalling' | 'analyzing' | 'result'>('prompt');
    const [result, setResult] = useState<any>(null);

    const {
        isListening,
        transcript,
        startListening,
        stopListening,
        resetTranscript
    } = useSpeechRecognition({
        onResult: (text) => {/* real-time feedback handled by state */ },
    });

    const handleStartRecall = () => {
        resetTranscript();
        startListening();
        setStep('recalling');
    };

    const handleStopRecall = async () => {
        stopListening();
        setStep('analyzing');

        // Simulating AI Analysis with local keyword matching
        setTimeout(() => {
            const analysis = evaluateRecall(transcript, topicName);
            setResult(analysis);
            setStep('result');
        }, 1500);
    };

    const evaluateRecall = (text: string, topic: string) => {
        const lowerText = text.toLowerCase();
        let concepts = [];
        let score = 0;
        let feedback = "";

        // Ontology for Fundamental Rights (Client-side Mock AI)
        const ontology = [
            { id: 'equality', name: "Right to Equality", keywords: ['article 14', 'equality', 'discrimination', 'untouchability', 'article 18', 'titles'] },
            { id: 'freedom', name: "Right to Freedom", keywords: ['article 19', 'speech', 'expression', 'assembly', 'association', 'movement', 'residence', 'profession'] },
            { id: 'life', name: "Protection of Life", keywords: ['article 21', 'life', 'liberty', 'privacy', 'dignity', 'procedure established by law'] },
            { id: 'exploitation', name: "Against Exploitation", keywords: ['article 23', 'trafficking', 'forced labor', 'article 24', 'children', 'factories'] },
            { id: 'remedies', name: "Constitutional Remedies", keywords: ['article 32', 'writs', 'habeas corpus', 'mandamus', 'soul of constitution'] }
        ];

        let hits = 0;
        concepts = ontology.map(concept => {
            const matches = concept.keywords.filter(k => lowerText.includes(k));
            let status = 'missing';
            if (matches.length >= 2) status = 'correct';
            else if (matches.length > 0) status = 'partial';

            if (status === 'correct') hits += 1;
            if (status === 'partial') hits += 0.5;

            return { name: concept.name, status, matches: matches.length };
        });

        const maxScore = ontology.length;
        score = Math.round((hits / maxScore) * 100);

        if (score > 80) feedback = "Outstanding recall! You covered almost all major articles and concepts.";
        else if (score > 50) feedback = "Good attempt. You touched upon key areas but missed some specific article numbers or details.";
        else feedback = "You missed several core concepts. Review Article 19 and 32 specifically before moving forward.";

        // Fallback for empty transcript (demo mode)
        if (!text || text.length < 10) {
            return {
                score: 12, // Low score for silence
                concepts: ontology.map(c => ({ ...c, status: 'missing' })),
                feedback: "We didn't catch much. Please try speaking clearly about the Fundamental Rights."
            };
        }

        return { score, concepts, feedback };
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <AnimatePresence mode="wait">
                {step === 'prompt' && (
                    <motion.div
                        key="prompt"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center bg-white dark:bg-slate-900 p-16 rounded-[4rem] shadow-2xl border border-slate-100 dark:border-slate-800"
                    >
                        <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                            <Brain className="w-10 h-10 text-purple-600" />
                        </div>
                        <h2 className="text-4xl font-black mb-6 tracking-tight">Challenge Your Knowledge</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-12 font-medium leading-relaxed">
                            Before we show you the content for <span className="text-purple-600 font-bold">"{topicName}"</span>, explain what you already know out loud.
                        </p>
                        <Button
                            size="lg"
                            onClick={handleStartRecall}
                            className="h-16 px-12 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-lg shadow-xl shadow-purple-500/20"
                        >
                            I'm Ready to Explain <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>
                )}

                {step === 'recalling' && (
                    <motion.div
                        key="recalling"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="flex justify-between items-center">
                            <Badge className="bg-rose-500 text-white animate-pulse border-none px-4 py-2 rounded-full font-black text-[10px] tracking-widest uppercase">
                                Recording Live • Speaking Now
                            </Badge>
                            <span className="text-slate-400 font-bold text-xs">Topic: {topicName}</span>
                        </div>

                        <Card className="border-none bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-center p-12 text-center border-t-8 border-rose-500">
                            {transcript ? (
                                <p className="text-2xl font-bold leading-relaxed text-slate-800 dark:text-slate-200 indent-8 italic">
                                    "{transcript}"
                                </p>
                            ) : (
                                <div className="space-y-4">
                                    <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto animate-bounce">
                                        <Mic className="w-8 h-8 text-rose-500" />
                                    </div>
                                    <p className="text-slate-400 font-medium">Listening for your explanation...</p>
                                </div>
                            )}
                        </Card>

                        <div className="flex gap-4 justify-center">
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-16 px-10 rounded-2xl font-black border-2"
                                onClick={() => { stopListening(); setStep('prompt'); }}
                            >
                                <RotateCcw className="w-5 h-5 mr-2" /> Reset
                            </Button>
                            <Button
                                size="lg"
                                onClick={handleStopRecall}
                                className="h-16 px-14 rounded-2xl bg-slate-900 dark:bg-white dark:text-slate-900 font-black text-lg"
                            >
                                Analyze Recall <Sparkles className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                )}

                {step === 'analyzing' && (
                    <motion.div
                        key="analyzing"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                    >
                        <div className="relative w-40 h-40 mx-auto mb-10">
                            <div className="absolute inset-0 border-8 border-slate-100 dark:border-slate-800 rounded-full" />
                            <motion.div
                                className="absolute inset-0 border-8 border-purple-500 rounded-full border-t-transparent"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Sparkles className="w-12 h-12 text-purple-500" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black mb-4">Cross-Checking with Knowledge Base</h2>
                        <p className="text-slate-500 font-medium italic">"Identifying semantic patterns and mapping missing concepts..."</p>
                    </motion.div>
                )}

                {step === 'result' && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Score Card */}
                            <Card className="lg:col-span-1 border-none bg-indigo-600 text-white rounded-[3rem] p-10 flex flex-col items-center justify-center shadow-2xl text-center">
                                <div className="text-7xl font-black mb-2">{result.score}%</div>
                                <h4 className="font-black uppercase tracking-widest text-[10px] opacity-70 mb-8">Recall Efficiency Index</h4>
                                <div className="space-y-4 w-full">
                                    <div className="flex justify-between text-[10px] font-black opacity-80 uppercase tracking-tighter">
                                        <span>Accuracy</span>
                                        <span>High</span>
                                    </div>
                                    <Progress value={result.score} className="h-1.5 bg-white/20" color="bg-white" />
                                </div>
                            </Card>

                            {/* Gaps List */}
                            <Card className="lg:col-span-2 border-none bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl p-12 border border-slate-100 dark:border-slate-800">
                                <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
                                    <Target className="text-rose-500" /> Concept Mapping
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {result.concepts.map((c: any, i: number) => (
                                        <div key={i} className={`p-4 rounded-2xl flex items-center justify-between border-2 transition-all ${c.status === 'correct' ? 'border-emerald-100 bg-emerald-50/50 dark:bg-emerald-950/10 text-emerald-700' :
                                            c.status === 'partial' ? 'border-amber-100 bg-amber-50/50 dark:bg-amber-950/10 text-amber-700' :
                                                'border-rose-100 bg-rose-50/50 dark:bg-rose-950/10 text-rose-700'
                                            }`}>
                                            <div className="flex items-center gap-3">
                                                {c.status === 'correct' ? <CheckCircle2 className="w-5 h-5" /> :
                                                    c.status === 'partial' ? <Sparkles className="w-5 h-5" /> :
                                                        <AlertCircle className="w-5 h-5" />}
                                                <span className="font-bold text-sm tracking-tight">{c.name}</span>
                                            </div>
                                            <span className="text-[9px] font-black uppercase tracking-widest opacity-60">{c.status}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 italic text-slate-500 text-sm font-medium">
                                    "{result.feedback}"
                                </div>
                            </Card>
                        </div>

                        <div className="flex justify-center pt-8">
                            <Button
                                size="lg"
                                className="h-14 px-12 rounded-2xl bg-indigo-600 font-black shadow-xl"
                                onClick={async () => {
                                    const session: CycleSession = {
                                        id: `recall-${Date.now()}`,
                                        examId: 'upsc',
                                        subjectId: 'polity',
                                        topicName,
                                        startTime: new Date().toISOString(), // Roughly now for recall-only
                                        endTime: new Date().toISOString(),
                                        durationMinutes: 10, // Approx
                                        level: 'advanced',
                                        phases: {
                                            video: { completed: false, durationSeconds: 0 },
                                            recall: { completed: true, transcript: transcript, aiScore: result.score },
                                            mcq: { completed: false, correctCount: 0, totalCount: 0 }
                                        }
                                    };
                                    await saveCycleSession(session);
                                    toast.success("Recall analysis synced!");
                                    onRecallComplete(result);
                                }}
                            >
                                Review Missing Content <FileText className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

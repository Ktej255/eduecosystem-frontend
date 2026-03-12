"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
    AlertTriangle, Target, BrainCircuit, Crosshair,
    Zap, Ghost, TrendingDown, BookOpenCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { computeStudentVulnerabilities, VulnerabilityProfile } from '@/lib/examiner-core';

export default function PredictiveExaminerAnalytics() {
    const [profiles, setProfiles] = useState<VulnerabilityProfile[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState<{ analyzedCards: number, overallRisk: number }>({ analyzedCards: 0, overallRisk: 0 });

    useEffect(() => {
        const analyzeVulnerabilities = async () => {
            setIsLoading(true);
            const data = await computeStudentVulnerabilities();
            setProfiles(data.profiles);
            setStats({ analyzedCards: data.analyzedCards, overallRisk: data.overallRisk });
            setIsLoading(false);
        };
        analyzeVulnerabilities();
    }, []);

    const getTrapIcon = (type: VulnerabilityProfile['trapType']) => {
        switch (type) {
            case 'concept_confusion': return <Ghost className="w-5 h-5 text-fuchsia-400" />;
            case 'memory_fade': return <TrendingDown className="w-5 h-5 text-orange-400" />;
            case 'overconfidence_bias': return <Zap className="w-5 h-5 text-amber-400" />;
            case 'speed_error': return <Crosshair className="w-5 h-5 text-blue-400" />;
        }
    };

    const getTrapLabel = (type: VulnerabilityProfile['trapType']) => {
        return type.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center h-[500px]">
                <BrainCircuit className="w-12 h-12 text-slate-400 animate-pulse mb-4" />
                <h3 className="text-xl font-bold text-slate-300">Synthesizing Neuro-Metrics...</h3>
                <p className="text-slate-500">Cross-referencing Deep Reports with SRS Retention curves.</p>
            </div>
        );
    }

    if (profiles.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center h-[500px] bg-slate-900 border border-emerald-900/40 rounded-3xl">
                <div className="w-20 h-20 bg-emerald-950 rounded-full flex items-center justify-center mb-6 border border-emerald-800">
                    <BookOpenCheck className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-black text-emerald-400 mb-2">Examiner Defeated</h3>
                <p className="text-slate-400 max-w-sm">No critical vulnerabilities detected in your cognitive profile. Your procedural logic is airtight.</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto space-y-6 font-['Calibri'] relative">

            {/* Context Header */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between shadow-2xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 max-w-2xl text-left">
                    <Badge variant="outline" className="border-rose-900 text-rose-400 bg-rose-950/50 mb-4 px-3 py-1 font-bold tracking-wider">
                        <AlertTriangle className="w-3 h-3 mr-2" /> UPSC EXAMINER MODE
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                        We know exactly how you will fail.
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        This AI analyzes a matrix of your SRS repetition hesitations, Deep Report MCQ errors, and time-stamped reading gaps to predict <span className="text-rose-400 font-bold">precisely</span> which traps you'll fall into on exam day.
                    </p>
                </div>

                <div className="relative z-10 flex gap-4 text-center shrink-0">
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl w-32">
                        <div className="text-3xl font-black text-indigo-400 mb-1">{stats.analyzedCards}</div>
                        <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Data Points</div>
                    </div>
                    <div className="bg-rose-950/20 border border-rose-900 p-6 rounded-2xl w-32 shadow-[0_0_15px_rgba(225,29,72,0.15)]">
                        <div className="text-3xl font-black text-rose-500 mb-1">{stats.overallRisk}%</div>
                        <div className="text-xs text-rose-400 uppercase font-bold tracking-widest">Global Risk</div>
                    </div>
                </div>
            </div>

            {/* Vulnerability Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence>
                    {profiles.map((vuln, idx) => (
                        <motion.div
                            key={vuln.chapterId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors h-full overflow-hidden relative group">
                                <div className={`absolute top-0 left-0 w-1 h-full ${vuln.riskScore > 80 ? 'bg-rose-600' : vuln.riskScore > 50 ? 'bg-orange-500' : 'bg-amber-400'}`}></div>

                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Target Profile</p>
                                            <h3 className="text-xl font-bold text-slate-100">{vuln.title}</h3>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Target className={`w-4 h-4 ${vuln.riskScore > 80 ? 'text-rose-500' : 'text-orange-500'}`} />
                                                <span className={`text-2xl font-black ${vuln.riskScore > 80 ? 'text-rose-500' : 'text-orange-500'}`}>
                                                    {vuln.riskScore}%
                                                </span>
                                            </div>
                                            <span className="text-xs text-slate-500 font-bold uppercase">Breach Prob.</span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <Progress
                                            value={vuln.riskScore}
                                            className="h-2 bg-slate-800"
                                            indicatorClassName={vuln.riskScore > 80 ? 'bg-rose-600' : 'bg-orange-500'}
                                        />
                                    </div>

                                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            {getTrapIcon(vuln.trapType)}
                                            <span className="text-sm font-bold text-slate-300 uppercase tracking-wide">
                                                Vector: {getTrapLabel(vuln.trapType)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative p-5 rounded-xl bg-gradient-to-br from-rose-950/30 to-slate-900 border border-rose-900/30">
                                        <div className="absolute top-4 right-4 opacity-10">
                                            <BrainCircuit className="w-12 h-12" />
                                        </div>
                                        <p className="text-xs text-rose-400/80 uppercase font-black tracking-widest mb-2 font-mono">
                                            // EXAMINER'S EXECUTABLE
                                        </p>
                                        <p className="text-slate-300 text-sm leading-relaxed relative z-10 italic">
                                            "{vuln.examinerNote}"
                                        </p>
                                    </div>

                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

        </div>
    );
}

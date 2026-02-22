"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Target, ArrowRight, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';
import { getLearningProgress, getTopicRetention, isChapterComplete } from '@/services/progressStorage';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Mission {
    subject: string;
    chapterId: string;
    type: 'review' | 'solve' | 'start';
    title: string;
    description: string;
    impact: string;
    retention?: number;
}

export default function DailyMissionCard() {
    const [mission, setMission] = useState<Mission | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        generateMission();
    }, []);

    const generateMission = () => {
        setLoading(true);
        const progress = getLearningProgress();
        const chapters = progress.completedChapters || [];

        if (chapters.length === 0) {
            setMission({
                subject: 'Economy',
                chapterId: 'economy-banking',
                type: 'start',
                title: 'Initialize Your Journey',
                description: 'Start your first chapter in Economy: Banking & Monetary Policy.',
                impact: 'Establish your first knowledge stability score.'
            });
            setLoading(false);
            return;
        }

        // Find chapter with lowest retention
        let lowestRetention = 1.1;
        let criticalChapter = '';

        chapters.forEach(id => {
            const data = getTopicRetention(id);
            if (data.retrievability < lowestRetention) {
                lowestRetention = data.retrievability;
                criticalChapter = id;
            }
        });

        const subject = criticalChapter.split('-')[0];
        const chapterName = criticalChapter.split('-').slice(1).join(' ').replace(/\b\w/g, l => l.toUpperCase());

        if (lowestRetention < 0.75) {
            setMission({
                subject: subject.toUpperCase(),
                chapterId: criticalChapter,
                type: 'review',
                title: `Rescue ${chapterName}`,
                description: `Your retention for ${chapterName} has dropped to ${Math.round(lowestRetention * 100)}%. Quick review needed.`,
                impact: 'Boost Stability by +40%',
                retention: lowestRetention
            });
        } else {
            // Suggest a new chapter or deep dive if retention is high
            setMission({
                subject: 'Polity',
                chapterId: 'polity-preamble',
                type: 'solve',
                title: 'High Performance Mode',
                description: 'All current topics are stable. Solve 10 PYQs on Preamble to test your edges.',
                impact: 'Unlocks "Master" Badge progression',
                retention: lowestRetention
            });
        }
        setLoading(false);
    };

    if (loading) return <div className="h-48 animate-pulse bg-card/5 rounded-2xl border border-white/10" />;

    if (!mission) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/10 via-neutral-900 to-black border border-amber-500/20 p-6"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -mr-16 -mt-16" />

            <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-amber-500" />
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Active Mission</span>
                <div className="ml-auto flex items-center gap-1.5 px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span className="text-[10px] font-bold text-amber-400">+50 XP</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{mission.title}</h3>
                    <p className="text-white/60 text-sm max-w-md leading-relaxed">{mission.description}</p>

                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-1.5 label text-[10px] font-bold text-white/40 uppercase">
                            <RefreshCw className="w-3 h-3" />
                            <span>{mission.impact}</span>
                        </div>
                        {mission.retention !== undefined && (
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-red-400 uppercase">
                                <AlertCircle className="w-3 h-3" />
                                <span>Stability: {Math.round(mission.retention * 100)}%</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-3 w-full md:w-auto">
                    <Button
                        asChild
                        className="bg-amber-500 hover:bg-amber-600 text-black font-bold h-12 px-8 rounded-xl"
                    >
                        <Link href={`/student/batch1-1/${mission.subject.toLowerCase()}`}>
                            Execute Mission <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                    <button
                        onClick={generateMission}
                        className="text-[10px] text-center text-white/40 hover:text-white/60 transition-colors uppercase font-bold tracking-tighter"
                    >
                        Re-scan DNA for new mission
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

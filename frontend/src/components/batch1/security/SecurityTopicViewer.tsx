"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Tag, ShieldAlert, ShieldCheck, Radar, Construction, CheckCircle, BrainCircuit } from "lucide-react";
import Link from 'next/link';
import { ContentItem } from "../types";
import { Badge } from "@/components/ui/badge";
import { isChapterComplete, markChapterComplete } from "@/services/progressStorage";
import { toast } from "sonner";
import ConfidencePoll from "@/components/shared/ConfidencePoll";
import { motion } from "framer-motion";

interface SecurityTopicViewerProps {
    content: ContentItem;
}

export default function SecurityTopicViewer({ content }: SecurityTopicViewerProps) {
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        setIsCompleted(isChapterComplete(content.id));
    }, [content.id]);

    const handleComplete = () => {
        markChapterComplete(content.id);
        setIsCompleted(true);
        toast.info("Intelligence Briefing Mastered. Operation Log Updated.");
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-red-500/30">
            {/* Header - Tactical/High Tech Theme */}
            <div className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/batch1/security">
                            <Button variant="ghost" size="icon" className="hover:bg-slate-800 text-slate-400">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold tracking-tight">
                                    {content.title}
                                </h1>
                                {isCompleted && (
                                    <Badge variant="secondary" className="bg-emerald-900/40 text-emerald-400 border-emerald-800/50 gap-1 uppercase text-[10px] tracking-widest">
                                        <ShieldCheck className="w-3 h-3" />
                                        Verified
                                    </Badge>
                                )}
                            </div>
                            <div className="flex items-center gap-3 text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-black">
                                <span className="flex items-center gap-1">
                                    <Radar className="w-3 h-3 text-red-500 animate-pulse" />
                                    Security Level: Classified
                                </span>
                                <span className="flex items-center gap-1 border-l border-slate-700 pl-3">
                                    <Clock className="w-3 h-3" />
                                    {content.readTime || '12 mins'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
                {/* Tactical Briefing Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-slate-800 border-l-4 border-l-red-600 shadow-2xl relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <Badge className="bg-red-600 hover:bg-red-700 text-white border-0 mb-4 px-3 py-1 uppercase tracking-tighter italic">
                            Tactical Brief
                        </Badge>
                        <h2 className="text-2xl font-bold mb-4">{content.description}</h2>
                        <div className="flex flex-wrap gap-2 pt-4">
                            {content.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-bold bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
                                    #{tag.toUpperCase()}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-3xl" />
                </motion.div>

                {/* Main Intel Content */}
                <Card className="bg-slate-900 border-slate-800 overflow-hidden shadow-xl">
                    <CardContent className="p-8 md:p-12 prose prose-invert max-w-none 
                        prose-h1:text-3xl prose-h1:font-black prose-h1:text-red-500 prose-h1:uppercase prose-h1:tracking-tighter
                        prose-h2:text-xl prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-2
                        prose-p:text-slate-300 leading-relaxed font-mono text-sm">
                        <div dangerouslySetInnerHTML={{ __html: content.content || "" }} />
                    </CardContent>
                </Card>

                {/* Status Update */}
                <div className="space-y-6 pb-20">
                    <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 text-center relative overflow-hidden">
                        <BrainCircuit className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">
                            Cognitive Debriefing
                        </h3>
                        <p className="text-slate-500 mb-8 max-w-md mx-auto text-sm">
                            Mark this intel as assimilated to update your performance DNA and schedule future retentions.
                        </p>

                        {!isCompleted ? (
                            <Button size="lg" onClick={handleComplete} className="bg-red-600 hover:bg-red-700 text-white gap-2 px-8 py-6 rounded-xl text-lg font-black uppercase tracking-widest shadow-lg shadow-red-900/50 transition-all active:scale-95">
                                <ShieldAlert className="w-5 h-5" />
                                Authorize Assimilation
                            </Button>
                        ) : (
                            <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                <Badge className="bg-emerald-600 text-white px-4 py-1 animate-pulse">
                                    INTEL ASSIMILATED
                                </Badge>
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                    <ConfidencePoll chapterId={content.id} />
                                </div>
                            </div>
                        )}

                        {/* Grid lines background for tactical feel */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}


"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LandmarkCase } from '../data/landmark-cases';
import { Scale, Users, Gavel, X, Quote, History, BookOpen } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

interface VerdictOverlayProps {
    data: LandmarkCase | null;
    onClose: () => void;
}

export default function VerdictOverlay({ data, onClose }: VerdictOverlayProps) {
    if (!data) return null;

    return (
        <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:top-24 lg:bottom-auto lg:w-[450px] z-50 animate-in slide-in-from-right duration-500">
            <Card className="bg-slate-900/95 backdrop-blur-xl border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative border-t-4" style={{ borderTopColor: data.color }}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-full p-1.5 transition-colors z-10"
                >
                    <X size={18} />
                </button>

                <CardContent className="p-0">
                    {/* Header Section */}
                    <div className="p-6 bg-gradient-to-b from-slate-800/50 to-transparent">
                        <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline" className="text-amber-400 border-amber-900/50 bg-amber-950/20 px-3 py-1 text-[10px] tracking-widest uppercase">
                                Landmark Judgment {data.year}
                            </Badge>
                        </div>
                        <h2 className="text-3xl font-black text-white leading-tight mb-2">
                            {data.title}
                        </h2>
                        <p className="text-sm font-mono text-slate-400 opacity-80">{data.citation}</p>
                    </div>

                    <div className="px-6 pb-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                        {/* Summary Section */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-slate-300 font-bold text-xs uppercase tracking-wider">
                                <History size={14} className="text-blue-400" />
                                The Historical Context
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-slate-700 pl-4 bg-slate-800/20 py-2 rounded-r-lg">
                                {data.narrative}
                            </p>
                        </div>

                        {/* Legal Duel Section */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-4 bg-red-950/10 border border-red-900/20 rounded-xl relative overflow-hidden group">
                                <Quote className="absolute -right-2 -bottom-2 text-red-500/10 rotate-12 transition-transform group-hover:scale-110" size={80} />
                                <h4 className="text-[10px] font-bold text-red-400 uppercase mb-2">The Challenge (Appellant)</h4>
                                <p className="text-xs text-red-100/80 leading-relaxed z-10 relative">{data.keyArguments.appellant}</p>
                            </div>
                            <div className="p-4 bg-emerald-950/10 border border-emerald-900/20 rounded-xl relative overflow-hidden group">
                                <Quote className="absolute -right-2 -bottom-2 text-emerald-500/10 -rotate-12 transition-transform group-hover:scale-110" size={80} />
                                <h4 className="text-[10px] font-bold text-emerald-400 uppercase mb-2">The Defense (Respondent)</h4>
                                <p className="text-xs text-emerald-100/80 leading-relaxed z-10 relative">{data.keyArguments.respondent}</p>
                            </div>
                        </div>

                        <Separator className="bg-slate-800" />

                        {/* Core Facts Section */}
                        <div className="grid grid-cols-1 gap-3 text-sm">
                            <div className="flex items-start gap-3 group">
                                <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                                    <Gavel className="text-amber-500" size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase">The Verdict</p>
                                    <p className="text-slate-200 font-medium leading-normal">{data.verdict}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 group">
                                <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                    <Scale className="text-cyan-500" size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase">Constitutional Impact</p>
                                    <p className="text-slate-200 font-medium leading-normal">{data.impact}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 group">
                                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                    <Users className="text-blue-500" size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase">Bench Strength</p>
                                    <p className="text-slate-200 font-medium leading-normal">{data.benchStrength} Judges</p>
                                </div>
                            </div>
                        </div>

                        {/* Master Conclusion Button */}
                        <div className="pt-4">
                            <button className="w-full py-3 bg-white text-slate-900 font-black text-xs uppercase tracking-widest rounded-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                                <BookOpen size={14} />
                                Study Basic Structure Doctrine
                            </button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

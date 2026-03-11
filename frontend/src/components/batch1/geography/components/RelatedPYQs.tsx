"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, HelpCircle } from "lucide-react";
import { GEOGRAPHY_PYQS } from "../data/geography-pyqs";

interface RelatedPYQsProps {
    topic: string;
}

export default function RelatedPYQs({ topic }: RelatedPYQsProps) {
    // Filter PYQs related to the current topic
    const relatedPYQs = GEOGRAPHY_PYQS.filter(pyq => 
        pyq.topic.toLowerCase().includes(topic.toLowerCase()) || 
        topic.toLowerCase().includes(pyq.topic.toLowerCase())
    ).slice(0, 3); // Show top 3

    if (relatedPYQs.length === 0) return null;

    return (
        <div className="mt-12 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <h3 className="text-xl font-bold text-white">Related UPSC PYQs</h3>
            </div>
            
            <div className="grid gap-4">
                {relatedPYQs.map((pyq) => (
                    <Card key={pyq.id} className="bg-slate-900/50 border-white/10 hover:border-indigo-500/50 transition-all group overflow-hidden">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <Badge variant="outline" className="text-indigo-300 border-indigo-500/30 bg-indigo-500/10">
                                    {pyq.exam} {pyq.year}
                                </Badge>
                                <Badge variant="ghost" className="text-slate-400 font-normal">
                                    {pyq.difficulty}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-200 mb-4 leading-relaxed">
                                {pyq.question}
                            </p>
                            
                            <div className="space-y-2">
                                {pyq.options.map((option, idx) => (
                                    <div 
                                        key={idx} 
                                        className="p-3 rounded-lg bg-black/20 border border-white/5 text-sm text-slate-400 flex items-center gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center text-xs shrink-0">
                                            {String.fromCharCode(65 + idx)}
                                        </div>
                                        {option}
                                    </div>
                                ))}
                            </div>

                            <details className="mt-4 group/details">
                                <summary className="text-sm font-medium text-indigo-400 cursor-pointer hover:text-indigo-300 transition-colors list-none flex items-center gap-2">
                                    <HelpCircle className="w-4 h-4" />
                                    Show Solution & Explanation
                                </summary>
                                <div className="mt-3 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20 animate-in zoom-in-95 duration-300">
                                    <p className="text-sm font-bold text-emerald-400 mb-1">
                                        Correct Answer: {String.fromCharCode(65 + pyq.correctIndex)}
                                    </p>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        {pyq.explanation}
                                    </p>
                                </div>
                            </details>
                        </CardContent>
                    </Card>
                ))}
            </div>
            
            <p className="text-center text-xs text-slate-500 italic mt-4">
                These are real UPSC questions related to this session's topic.
            </p>
        </div>
    );
}

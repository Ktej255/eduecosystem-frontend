"use client";

import React, { useState } from "react";
import {
    Newspaper, Calendar, ExternalLink, Lightbulb,
    TrendingUp, Info, ChevronRight, Share2,
    Bookmark, MessageSquare
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { MAJOR_CURRENT_AFFAIRS, CurrentAffairItem } from "../data/MajorCurrentAffairsRegistry";

interface ChapterCurrentAffairsSectionProps {
    topicId: number;
}

export default function ChapterCurrentAffairsSection({ topicId }: ChapterCurrentAffairsSectionProps) {
    const relevantNews = MAJOR_CURRENT_AFFAIRS.filter(ca => ca.topicIds.includes(topicId));

    if (relevantNews.length === 0) return null;

    return (
        <section className="mt-12 space-y-6 font-['Calibri']">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-amber-100 p-2 rounded-xl text-amber-700">
                        <Newspaper size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-foreground">Recent Developments</h3>
                        <p className="text-sm text-muted-foreground">Chapter-wise Current Affairs & UPSC Linkages</p>
                    </div>
                </div>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                    {relevantNews.length} Updates Available
                </Badge>
            </div>

            <div className="grid gap-6">
                {relevantNews.map((news, idx) => (
                    <CurrentAffairCard key={news.id} news={news} index={idx} />
                ))}
            </div>
        </section>
    );
}

function CurrentAffairCard({ news, index }: { news: CurrentAffairItem, index: number }) {
    const [isExpanded, setIsExpanded] = useState(index === 0);

    const importanceColors: Record<string, string> = {
        High: "bg-red-100 text-red-700 border-red-200",
        Medium: "bg-amber-100 text-amber-700 border-amber-200",
        Low: "bg-blue-100 text-blue-700 border-blue-200",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Card className={`overflow-hidden border-2 transition-all hover:shadow-lg ${isExpanded ? 'border-amber-200 ring-2 ring-amber-50' : 'border-border'}`}>
                <CardContent className="p-0">
                    {/* Header Strip */}
                    <div
                        className="p-4 flex flex-wrap items-center justify-between gap-4 cursor-pointer hover:bg-muted/30 transition-colors"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <div className="flex items-center gap-3 flex-1">
                            <Badge className={`${importanceColors[news.importance]} font-bold`}>
                                {news.importance.toUpperCase()}
                            </Badge>
                            <h4 className="font-bold text-base text-foreground leading-tight hover:text-amber-700 transition-colors">
                                {news.title}
                            </h4>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground whitespace-nowrap">
                            <div className="flex items-center gap-1">
                                <Calendar size={12} /> {new Date(news.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                            </div>
                            <div className="flex items-center gap-1 text-blue-600">
                                <ExternalLink size={12} /> {news.source}
                            </div>
                            <ChevronRight className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} size={16} />
                        </div>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 pt-2 space-y-4">
                                    <div className="p-4 bg-muted/50 rounded-xl border border-border text-sm leading-relaxed text-muted-foreground">
                                        {news.summary}
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                                            <div className="flex items-center gap-2 mb-2 text-blue-800 font-bold text-xs uppercase tracking-wider">
                                                <Lightbulb size={14} /> The Polity Hook
                                            </div>
                                            <p className="text-sm text-blue-900 leading-relaxed font-medium">
                                                Connect this to: <span className="underline decoration-blue-300 underline-offset-4">Constitutional Provisions</span> and <span className="underline decoration-blue-300 underline-offset-4">Supreme Court Judgements</span>.
                                            </p>
                                        </div>

                                        <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
                                            <div className="flex items-center gap-2 mb-2 text-purple-800 font-bold text-xs uppercase tracking-wider">
                                                <TrendingUp size={14} /> UPSC Relevant Tags
                                            </div>
                                            <div className="flex flex-wrap gap-1">
                                                {news.tags.map(tag => (
                                                    <Badge key={tag} variant="secondary" className="bg-white text-purple-700 border-purple-100 text-[10px]">
                                                        #{tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-2">
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-tighter">
                                                <Bookmark size={12} className="mr-1" /> Save to Revision
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-tighter">
                                                <MessageSquare size={12} className="mr-1" /> Ask AI Tutor
                                            </Button>
                                        </div>
                                        <Button variant="link" size="sm" className="h-8 text-[10px] font-bold text-amber-600">
                                            Read Full Article <ChevronRight size={12} />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </motion.div>
    );
}

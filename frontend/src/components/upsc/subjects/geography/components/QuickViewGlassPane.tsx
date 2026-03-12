import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Play, FileText, CheckCircle2, Lock, Unlock } from "lucide-react";
import { MicroTopic } from "../data/geography-syllabus-data";

interface QuickViewGlassPaneProps {
    topic: MicroTopic | null;
    onClose: () => void;
    onStartLearning: (topic: MicroTopic) => void;
}

export function QuickViewGlassPane({ topic, onClose, onStartLearning }: QuickViewGlassPaneProps) {
    if (!topic) return null;

    const isOpen = !!topic;

    return (
        <div
            className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-card/10 backdrop-blur-xl border-l border-white/20 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/20 text-white">
                <div className="flex items-center gap-3">
                    {topic.status === 'locked' ? (
                        <Lock className="w-5 h-5 text-muted-foreground" />
                    ) : topic.status === 'mastered' ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                    ) : (
                        <Unlock className="w-5 h-5 text-amber-400" />
                    )}
                    <h2 className="text-lg font-bold truncate pr-4">{topic.title}</h2>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="hover:bg-card/10 text-white rounded-full"
                >
                    <X className="w-5 h-5" />
                </Button>
            </div>

            {/* Content Body */}
            <ScrollArea className="flex-1 p-6 text-white">
                <div className="space-y-6">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${topic.status === 'mastered' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                                topic.status === 'active' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                                    'bg-muted-foreground/20 text-muted-foreground border border-gray-500/30'
                            }`}>
                            {topic.status}
                        </span>
                    </div>

                    {/* Micro Summary */}
                    <Card className="bg-black/20 border-white/10 text-white">
                        <CardHeader>
                            <CardTitle className="text-sm uppercase text-muted-foreground tracking-widest">About this Topic</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm leading-relaxed text-gray-200">
                                Dive deep into {topic.title}. This module covers the essential concepts required for UPSC CSE,
                                bringing complex geographic phenomena to life through interactive visualizations.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Learning Resources */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase text-muted-foreground tracking-widest mb-2">Learning Materials</h3>

                        <Button
                            className="w-full justify-start bg-indigo-600 hover:bg-indigo-700 text-white border-0 py-6"
                            onClick={() => onStartLearning(topic)}
                        >
                            <div className="w-8 h-8 rounded-full bg-card/20 flex items-center justify-center mr-3">
                                <Play className="w-4 h-4 text-white fill-current" />
                            </div>
                            <div className="text-left">
                                <div className="font-bold">Watch Micro-Lecture</div>
                                <div className="text-xs opacity-70">15 mins • High-Yield Concepts</div>
                            </div>
                        </Button>

                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="border-white/20 hover:bg-card/10 text-white h-auto py-4 flex flex-col gap-2">
                                <FileText className="w-5 h-5" />
                                <span>Read Notes</span>
                            </Button>
                            <Button variant="outline" className="border-white/20 hover:bg-card/10 text-white h-auto py-4 flex flex-col gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Take Quiz</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </ScrollArea>

            {/* Footer Actions */}
            <div className="p-4 border-t border-white/10 bg-black/20">
                {topic.status === 'locked' ? (
                    <Button disabled className="w-full bg-gray-600/50 text-muted-foreground cursor-not-allowed">
                        Prerequisites Required
                    </Button>
                ) : (
                    <Button
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-6 shadow-lg shadow-orange-900/20"
                        onClick={() => onStartLearning(topic)}
                    >
                        Start Learning Now
                    </Button>
                )}
            </div>
        </div>
    );
}

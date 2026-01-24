"use client";

import React, { useState } from "react";
import { RAS_PRELIMS_SYLLABUS } from "./data/ras-syllabus-data";
import { ArrowLeft, BookOpen, Clock, FileText, HelpCircle, Layers, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import RASPomodoroSession from "./RASPomodoroSession";
import RASPYQViewer from "./RASPYQViewer";

interface RASSubjectDetailViewProps {
    subjectId: number;
}

export default function RASSubjectDetailView({ subjectId }: RASSubjectDetailViewProps) {
    const subject = RAS_PRELIMS_SYLLABUS[subjectId];
    const [isSessionActive, setIsSessionActive] = useState(false);
    const [activeTopic, setActiveTopic] = useState<string | null>(null);

    if (!subject) {
        return <div className="p-8 text-white">Subject not found</div>;
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Session Overlay */}
            {isSessionActive && activeTopic && (
                <RASPomodoroSession
                    topic={activeTopic}
                    onExit={() => setIsSessionActive(false)}
                />
            )}

            {/* Header */}
            <div className="relative bg-neutral-900 border-b border-neutral-800 pb-8 pt-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/student/ras">
                        <Button variant="ghost" className="mb-4 text-neutral-400 hover:text-white pl-0 hover:bg-transparent">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Dashboard
                        </Button>
                    </Link>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-20 h-20 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold text-3xl border border-amber-500/20">
                            {subject.title.substring(0, 1)}
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-amber-500 border-amber-500/30">Prelims & Mains</Badge>
                                <Badge variant="outline" className="text-blue-500 border-blue-500/30">{subject.topics.length} Micro-Topics</Badge>
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-2">{subject.title}</h1>
                            <p className="text-neutral-400 max-w-3xl">
                                Comprehensive coverage for RAS 2026. Master every micro-topic with integrated notes, PYQs, and answer writing practice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Tabs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Tabs defaultValue="syllabus" className="space-y-6">
                    <TabsList className="bg-neutral-900 border border-neutral-800 p-1">
                        <TabsTrigger value="syllabus" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                            <Layers className="w-4 h-4 mr-2" /> Syllabus Tracker
                        </TabsTrigger>
                        <TabsTrigger value="notes" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                            <BookOpen className="w-4 h-4 mr-2" /> Study Notes
                        </TabsTrigger>
                        <TabsTrigger value="pyq" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                            <HelpCircle className="w-4 h-4 mr-2" /> PYQ Analysis
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="syllabus" className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                            {subject.topics.map((topic, idx) => (
                                <Card key={idx} className="bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-colors">
                                    <div className="p-4 flex items-center justify-between">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-mono text-neutral-500">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-white text-lg mb-1">{topic}</h3>
                                                <div className="flex items-center gap-4 text-xs text-neutral-500">
                                                    <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> No Notes</span>
                                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Last studied: Never</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                size="sm"
                                                className="bg-amber-500 hover:bg-amber-600 text-black font-bold"
                                                onClick={() => {
                                                    setActiveTopic(topic);
                                                    setIsSessionActive(true);
                                                }}
                                            >
                                                <Play className="w-4 h-4 mr-2" /> Study Now
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="notes">
                        <div className="p-12 text-center border-2 border-dashed border-neutral-800 rounded-xl">
                            <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4 text-neutral-500">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Subject Notes Repository</h3>
                            <p className="text-neutral-400 max-w-md mx-auto mb-6">
                                Detailed notes for {subject.title} are being digitized. You can attach your own PDF notes here in the future.
                            </p>
                            <Button variant="outline" className="border-neutral-700 text-neutral-300">Upload PDF</Button>
                        </div>
                    </TabsContent>

                    <TabsContent value="pyq">
                        <RASPYQViewer subjectTitle={subject.title} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

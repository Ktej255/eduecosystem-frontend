"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronDown, ChevronRight, BookOpen, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import RASOverviewPlan from "./RASOverviewPlan";

interface RASSyllabusViewerProps {
    onExit: () => void;
}

export default function RASSyllabusViewer({ onExit }: RASSyllabusViewerProps) {
    const [activeTab, setActiveTab] = useState<"overview" | "mains" | "prelims">("overview");

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50 backdrop-blur sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={onExit}>
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <div>
                        <h1 className="text-sm font-bold text-amber-500 uppercase tracking-wider">RAS Syllabus 2026</h1>
                        <p className="text-xs text-neutral-400">Official RPSC Scheme</p>
                    </div>
                </div>

                <div className="flex bg-neutral-800 rounded-lg p-1">
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={cn(
                            "px-4 py-1.5 rounded-md text-xs font-bold transition-all",
                            activeTab === "overview" ? "bg-amber-500 text-black shadow-lg" : "text-neutral-400 hover:text-white"
                        )}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab("mains")}
                        className={cn(
                            "px-4 py-1.5 rounded-md text-xs font-bold transition-all",
                            activeTab === "mains" ? "bg-amber-500 text-black shadow-lg" : "text-neutral-400 hover:text-white"
                        )}
                    >
                        Mains
                    </button>
                    <button
                        onClick={() => setActiveTab("prelims")}
                        className={cn(
                            "px-4 py-1.5 rounded-md text-xs font-bold transition-all",
                            activeTab === "prelims" ? "bg-amber-500 text-black shadow-lg" : "text-neutral-400 hover:text-white"
                        )}
                    >
                        Prelims
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-5xl mx-auto w-full space-y-8">
                <AnimatePresence mode="wait">
                    {activeTab === "overview" && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <RASOverviewPlan />
                        </motion.div>
                    )}
                    {activeTab === "mains" && (
                        <MainsSyllabusView key="mains" />
                    )}
                    {activeTab === "prelims" && (
                        <PrelimsSyllabusView key="prelims" />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// --- Sub Components ---

function MainsSyllabusView() {
    const [activePaper, setActivePaper] = useState("Paper I");

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
        >
            <Tabs defaultValue={activePaper} onValueChange={setActivePaper} className="w-full">
                <TabsList className="bg-neutral-900 w-full h-auto flex-wrap justify-start p-2 gap-2 border border-neutral-800 rounded-xl">
                    {RAS_MAINS_SYLLABUS.map((paper) => (
                        <TabsTrigger
                            key={paper.paper}
                            value={paper.paper}
                            className="data-[state=active]:bg-amber-500 data-[state=active]:text-black text-neutral-400 px-4 py-2 h-auto"
                        >
                            <div className="text-left">
                                <div className="text-xs font-bold uppercase opacity-70">{paper.paper}</div>
                                <div className="text-sm font-bold truncate max-w-[120px] md:max-w-none">{paper.subject}</div>
                            </div>
                        </TabsTrigger>
                    ))}
                </TabsList>

                {RAS_MAINS_SYLLABUS.map((paper) => (
                    <TabsContent key={paper.paper} value={paper.paper} className="mt-6 space-y-6">
                        <div className="flex items-center justify-between bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                            <div className="flex items-center gap-2 text-sm text-neutral-300">
                                <BookOpen className="w-4 h-4 text-amber-500" />
                                Max Marks: <span className="font-mono text-white">{paper.marks}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-300">
                                <ScrollText className="w-4 h-4 text-amber-500" />
                                Duration: <span className="font-mono text-white">{paper.duration}</span>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {paper.units.map((unit, idx) => (
                                <SyllabusUnitCard key={idx} unit={unit} />
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </motion.div>
    );
}

function SyllabusUnitCard({ unit }: { unit: SyllabusSection }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Card className="bg-neutral-900 border-neutral-800 overflow-hidden">
            <div
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-neutral-800/50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-bold text-amber-500">{unit.title}</h3>
                <ChevronDown className={cn("w-5 h-5 text-neutral-500 transition-transform", isOpen && "rotate-180")} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                    >
                        <CardContent className="p-4 pt-0 text-neutral-300 space-y-4 text-sm leading-relaxed border-t border-neutral-800/50">
                            {/* Direct Topics */}
                            {unit.topics.length > 0 && (
                                <ul className="list-disc list-inside space-y-2 mt-4 marker:text-neutral-600 pl-2">
                                    {unit.topics.map((topic, i) => (
                                        <li key={i}>{topic}</li>
                                    ))}
                                </ul>
                            )}

                            {/* Sub Sections */}
                            {unit.subSections?.map((sub, i) => (
                                <div key={i} className="mt-4 bg-black/20 p-4 rounded-lg">
                                    <h4 className="font-bold text-white mb-2">{sub.title}</h4>
                                    <ul className="list-disc list-inside space-y-1.5 marker:text-neutral-600 text-neutral-400">
                                        {sub.topics.map((t, idx) => (
                                            <li key={idx}>{t}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </CardContent>
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    );
}

function PrelimsSyllabusView() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
        >
            <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl text-amber-200 text-sm mb-6">
                <strong>Preliminary Examination Scheme:</strong> 200 Marks, 3 Hours, 150 Questions.
                <br />Negative Marking: 1/3 mark deducted for each wrong answer.
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {RAS_PRELIMS_SYLLABUS.map((section, idx) => (
                    <Card key={idx} className="bg-neutral-900 border-neutral-800">
                        <CardHeader>
                            <CardTitle className="text-base text-amber-500">{section.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-neutral-300">
                            <ul className="list-disc list-inside space-y-2 marker:text-neutral-600">
                                {section.topics.map((t, i) => (
                                    <li key={i}>{t}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
}

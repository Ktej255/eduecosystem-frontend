"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, BookOpen, Brain, Zap, Rocket, Atom, Shield, Dna, Radio, Bot, Globe, FileText, Cpu, User, Square as RoundedSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SCIENCE_TECH_CONTENT, ScienceTopic } from "./data/ras-science-tech-data";
import DOMPurify from "dompurify";

interface RASScienceTechViewerProps {
    onExit: () => void;
}

export default function RASScienceTechViewer({ onExit }: RASScienceTechViewerProps) {
    const [activeTopicId, setActiveTopicId] = useState(SCIENCE_TECH_CONTENT[0].id);
    const activeTopic = SCIENCE_TECH_CONTENT.find(t => t.id === activeTopicId) || SCIENCE_TECH_CONTENT[0];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/80 backdrop-blur sticky top-0 z-20">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={onExit} className="hover:bg-neutral-800">
                        <ChevronLeft className="w-5 h-5 text-neutral-400" />
                    </Button>
                    <div>
                        <h1 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                            <Zap className="w-4 h-4" /> Science & Technology
                        </h1>
                        <p className="text-xs text-neutral-500 font-mono">RAS Mains Paper II</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar Navigation (Desktop) */}
                <div className="hidden md:block w-64 border-r border-neutral-800 bg-neutral-900/30 p-4 space-y-2 overflow-y-auto">
                    <div className="text-xs font-bold text-neutral-500 uppercase mb-4 tracking-widest pl-2">Modules</div>
                    {SCIENCE_TECH_CONTENT.map((topic) => (
                        <button
                            key={topic.id}
                            onClick={() => setActiveTopicId(topic.id)}
                            className={cn(
                                "w-full text-left p-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3",
                                activeTopicId === topic.id
                                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                                    : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
                            )}
                        >
                            {topic.id === 'nanotech' ? <Atom className="w-4 h-4" /> :
                                topic.id === 'defence-tech' ? <Shield className="w-4 h-4" /> :
                                    topic.id === 'biotech' ? <Dna className="w-4 h-4" /> :
                                        topic.id === 'telecom-it' ? <Radio className="w-4 h-4" /> :
                                            topic.id === 'robotics' ? <Bot className="w-4 h-4" /> :
                                                topic.id === 'ipr-governance' ? <FileText className="w-4 h-4" /> :
                                                    topic.id === 'scientists' ? <User className="w-4 h-4" /> :
                                                        topic.id === 'quiz' ? <BookOpen className="w-4 h-4" /> :
                                                            <RoundedSquare className="w-4 h-4" />}
                            {topic.title}
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
                    {/* Mobile Topic Selector */}
                    <div className="md:hidden flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
                        {SCIENCE_TECH_CONTENT.map((topic) => (
                            <button
                                key={topic.id}
                                onClick={() => setActiveTopicId(topic.id)}
                                className={cn(
                                    "whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border",
                                    activeTopicId === topic.id
                                        ? "bg-cyan-500 text-black border-cyan-500"
                                        : "bg-neutral-900 text-neutral-400 border-neutral-800"
                                )}
                            >
                                {topic.title}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTopic.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="max-w-4xl mx-auto space-y-8 pb-20"
                        >
                            <div className="space-y-2">
                                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    {activeTopic.title}
                                </h1>
                                <div className="h-1 w-20 bg-cyan-500/50 rounded-full" />
                            </div>

                            <div className="grid gap-6">
                                {activeTopic.sections.map((section, idx) => (
                                    <SectionCard key={idx} section={section} />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

// --- Topic Section Component ---
function SectionCard({ section }: { section: ScienceTopic['sections'][0] }) {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <Card className="bg-neutral-900/50 border-neutral-800 overflow-hidden backdrop-blur-sm">
            <div
                className="p-5 flex items-center justify-between cursor-pointer hover:bg-neutral-800/50 transition-colors group"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <h3 className="text-xl font-semibold text-cyan-100 group-hover:text-cyan-400 transition-colors">
                    {section.heading}
                </h3>
                <ChevronDown className={cn("w-5 h-5 text-neutral-500 transition-transform duration-300", isExpanded && "rotate-180")} />
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <CardContent className="p-5 pt-0 space-y-6">
                            {/* Direct Content Text */}
                            {section.content && (
                                <p className="text-neutral-300 leading-relaxed text-sm md:text-base border-l-2 border-neutral-700 pl-4">
                                    {section.content}
                                </p>
                            )}

                            {/* Direct Points List */}
                            {section.points && (
                                <ul className="space-y-3">
                                    {section.points.map((pt, i) => (
                                        <li key={i} className="flex gap-3 text-neutral-300 text-sm md:text-base">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                                            <span dangerouslySetInnerHTML={{
                                                // Simple markdown-like bold parsing
                                                __html: DOMPurify.sanitize(pt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>'))
                                            }} />
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Subsections */}
                            {section.subsections?.map((sub, i) => (
                                <div key={i} className="bg-black/20 rounded-xl p-4 border border-white/5">
                                    <h4 className="text-cyan-500 font-medium mb-3 flex items-center gap-2">
                                        <div className="w-1 h-4 bg-cyan-600 rounded-full" />
                                        {sub.subHeading}
                                    </h4>
                                    <ul className="space-y-2 pl-2">
                                        {sub.points.map((pt, idx) => (
                                            <li key={idx} className="text-neutral-400 text-sm flex gap-2">
                                                <span className="text-neutral-600">•</span>
                                                <span dangerouslySetInnerHTML={{
                                                    __html: DOMPurify.sanitize(pt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-neutral-200">$1</strong>'))
                                                }} />
                                            </li>
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

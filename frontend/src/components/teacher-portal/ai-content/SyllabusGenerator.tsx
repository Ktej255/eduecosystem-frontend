"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bot, Sparkles, ChevronRight, ChevronDown, Check, BookOpen, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

import { aiService } from '@/lib/services/aiService';
import type { SyllabusUnit } from '@/lib/services/aiService';

export default function SyllabusGenerator() {
    const [subject, setSubject] = useState("");
    const [level, setLevel] = useState("Intermediate");
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedSyllabus, setGeneratedSyllabus] = useState<SyllabusUnit[] | null>(null);

    const handleGenerate = async () => {
        if (!subject) {
            toast.error("Please enter a subject name");
            return;
        }

        setIsGenerating(true);
        try {
            const syllabus = await aiService.generateSyllabus(subject, level);
            setGeneratedSyllabus(syllabus);
            toast.success("Syllabus generated successfully!");
        } catch (error) {
            toast.error("Failed to generate syllabus. Please try again.");
            console.error(error);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Input Section */}
            <Card className="h-fit">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Bot className="w-6 h-6 text-purple-500" />
                        AI Curriculum Architect
                    </CardTitle>
                    <p className="text-sm text-neutral-500">
                        Design a complete course structure in seconds using advanced AI models.
                    </p>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Subject / Topic</label>
                        <Input
                            placeholder="e.g. Quantum Physics, Renaissance Art..."
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Target Audience</label>
                        <Select value={level} onValueChange={setLevel}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Beginner">Beginner (Foundational)</SelectItem>
                                <SelectItem value="Intermediate">Intermediate (Core)</SelectItem>
                                <SelectItem value="Advanced">Advanced (Specialized)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold h-12"
                    >
                        {isGenerating ? (
                            <span className="flex items-center gap-2 animate-pulse">
                                <Sparkles className="w-5 h-5" /> Designing Course...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5" /> Generate Syllabus
                            </span>
                        )}
                    </Button>
                </CardContent>
            </Card>

            {/* Output Section */}
            <div className="space-y-4">
                {generatedSyllabus ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-card dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                                    {subject} - {level} Course
                                </h3>
                                <p className="text-xs text-neutral-500">Generated by Edu-AI Model v4.0</p>
                            </div>
                            <Button variant="outline" size="sm" className="gap-2">
                                <Check className="w-4 h-4 text-green-500" /> Save Draft
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {generatedSyllabus.map((unit, i) => (
                                <SyllabusUnit key={i} unit={unit} index={i} />
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <div className="h-full border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-xl flex flex-col items-center justify-center text-neutral-400 p-8 text-center bg-neutral-50/50">
                        <Layers className="w-12 h-12 mb-4 opacity-20" />
                        <p className="font-medium">Ready to Ideate</p>
                        <p className="text-xs max-w-xs mt-2">Enter a topic on the left to generate units, chapters, and learning outcomes automatically.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function SyllabusUnit({ unit, index }: { unit: any, index: number }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="border border-neutral-100 dark:border-neutral-800 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 transition-colors text-left"
            >
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                    </div>
                    <span className="font-semibold text-sm">{unit.unit}</span>
                </div>
                {isOpen ? <ChevronDown className="w-4 h-4 text-neutral-400" /> : <ChevronRight className="w-4 h-4 text-neutral-400" />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <div className="p-4 bg-card dark:bg-neutral-950 space-y-2">
                            {unit.chapters.map((chapter: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-3 pl-9 py-1 text-sm text-neutral-600 dark:text-neutral-400 hover:text-purple-500 cursor-pointer group">
                                    <BookOpen className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {chapter}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

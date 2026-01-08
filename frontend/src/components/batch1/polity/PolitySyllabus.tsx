"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    BookOpen,
    CheckCircle2,
    ChevronRight,
    BrainCircuit,
    FileQuestion
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Syllabus Data Structure
const SYLLABUS_DATA = [
    {
        day: 1,
        topic: "Constitutional History",
        subtopics: ["Regulating Acts", "Charter Acts", "Govt of India Acts"],
        mcqAvailable: true,
        flashcardsAvailable: false,
        status: "completed"
    },
    {
        day: 2,
        topic: "Making of Constitution",
        subtopics: ["Constituent Assembly", "Committees", "Enactment"],
        mcqAvailable: true,
        flashcardsAvailable: true,
        status: "completed"
    },
    {
        day: 3,
        topic: "Preamble & Union & Territory",
        subtopics: ["Preamble Keywords", "Article 1-4", "Reorganization of States"],
        mcqAvailable: true,
        flashcardsAvailable: false, // Verify if Day 3 flashcards exist
        status: "completed"
    },
    {
        day: 5,
        topic: "Citizenship",
        subtopics: ["Constitutional Provisions", "Citizenship Act 1955", "CAA/NRC"],
        mcqAvailable: true,
        flashcardsAvailable: true,
        status: "completed"
    },
    {
        day: 6,
        topic: "Fundamental Rights (Part 1)",
        subtopics: ["Articles 12-21A", "Right to Equality", "Right to Freedom"],
        mcqAvailable: true,
        flashcardsAvailable: true,
        status: "completed"
    },
    {
        day: 7,
        topic: "Fundamental Rights (Part 2)",
        subtopics: ["Articles 22-30", "Preventive Detention", "Freedom of Religion", "Minority Rights"],
        mcqAvailable: true,
        flashcardsAvailable: true,
        status: "completed"
    },
    {
        day: 8,
        topic: "Fundamental Rights (Part 3)",
        subtopics: ["Article 32 (Writs)", "Art 33-35", "Right to Property"],
        mcqAvailable: true,
        flashcardsAvailable: true,
        status: "completed"
    },
    {
        day: 9,
        topic: "Directive Principles & Fundamental Duties",
        subtopics: ["DPSP (Art 36-51)", "Fundamental Duties (Art 51A)"],
        mcqAvailable: true,
        flashcardsAvailable: true,
        status: "active"
    }
];

export default function PolitySyllabus() {
    const router = useRouter();

    const handleNavigate = (day: number) => {
        // Navigate to the specific day's evening session
        // Assumption: Cycle 1 is the default for now
        router.push(`/student/batch1/cycle/1/day/${day}/evening`);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950/50 p-6 md:p-12">

            {/* Header Section */}
            <div className="max-w-5xl mx-auto mb-10 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-indigo-500/30 text-indigo-600 bg-indigo-50">
                        Batch 1 • Indian Polity
                    </Badge>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
                        Course Syllabus & Progress
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        Track your progress through the Indian Polity module. Access Flashcards and MCQs for each completed day.
                    </p>
                </motion.div>
            </div>

            {/* Syllabus Table / Timeline */}
            <div className="max-w-5xl mx-auto space-y-4">
                {SYLLABUS_DATA.map((item, index) => (
                    <motion.div
                        key={item.day}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                        <Card className="hover:shadow-md transition-shadow border-slate-200 dark:border-slate-800 overflow-hidden group">
                            <CardContent className="p-0">
                                <div className="flex flex-col md:flex-row md:items-stretch">

                                    {/* Day Indicator */}
                                    <div className="flex items-center justify-center p-6 bg-slate-100 dark:bg-slate-900 min-w-[100px] border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
                                        <div className="text-center">
                                            <span className="block text-xs uppercase font-bold text-slate-500 tracking-wider">Day</span>
                                            <span className="block text-3xl font-black text-slate-800 dark:text-slate-200">{item.day}</span>
                                        </div>
                                    </div>

                                    {/* Content Info */}
                                    <div className="flex-1 p-6 flex flex-col justify-center">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 transition-colors">
                                                {item.topic}
                                            </h3>
                                            {item.status === "completed" && (
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {item.subtopics.map(sub => (
                                                <span key={sub} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                                                    {sub}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="p-6 flex items-center gap-4 bg-slate-50/50 dark:bg-slate-900/20 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 min-w-[200px] justify-end">
                                        <div className="flex gap-2">
                                            {item.flashcardsAvailable ? (
                                                <div className="flex flex-col items-center group/icon cursor-help" title="Flashcards Available">
                                                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center group-hover/icon:bg-amber-200 transition-colors">
                                                        <BrainCircuit className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-300 flex items-center justify-center" title="No Flashcards">
                                                    <BrainCircuit className="w-4 h-4" />
                                                </div>
                                            )}

                                            {item.mcqAvailable ? (
                                                <div className="flex flex-col items-center group/icon cursor-help" title="MCQs Available">
                                                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover/icon:bg-indigo-200 transition-colors">
                                                        <FileQuestion className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-300 flex items-center justify-center" title="No MCQs">
                                                    <FileQuestion className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2" />

                                        <button
                                            onClick={() => handleNavigate(item.day)}
                                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>

                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-5xl mx-auto mt-8 text-center">
                <p className="text-slate-400 text-sm">
                    More content is unlocked as the batch progresses.
                </p>
            </div>
        </div>
    );
}

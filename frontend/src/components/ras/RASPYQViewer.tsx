"use client";

import React, { useState, useMemo } from "react";
import { RAS_2024_FULL_PAPER as ALL_RAS_2024_QUESTIONS, RASQuestion } from "./data/ras-2024-index";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RASPYQViewerProps {
    subjectTitle: string;
}

export default function RASPYQViewer({ subjectTitle }: RASPYQViewerProps) {
    const [language, setLanguage] = useState<"en" | "hi">("en");

    // Mapping Syllabus Titles to Data Subject Tags
    const relevantQuestions = useMemo(() => {
        // Create a mapping strategy or keyword matching
        // Syllabus Title -> Possible Data Keys
        const searchKeywords = getKeywordsForSubject(subjectTitle);

        return ALL_RAS_2024_QUESTIONS.filter((q: RASQuestion) => {
            if (!q.subject) return false;
            return searchKeywords.some(k => q.subject?.toLowerCase().includes(k.toLowerCase()));
        });
    }, [subjectTitle]);

    if (relevantQuestions.length === 0) {
        return (
            <div className="p-8 text-center text-neutral-500 bg-neutral-900/50 rounded-xl border border-neutral-800">
                <p>No specific 2024 PYQs found matching "{subjectTitle}".</p>
                <p className="text-xs mt-2">Try checking the "General Knowledge" section.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-amber-500 border-amber-500/30">
                        {relevantQuestions.length} Questions Found
                    </Badge>
                    <span className="text-xs text-neutral-500">Source: RAS 2023-24 Prelims</span>
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage(prev => prev === "en" ? "hi" : "en")}
                    className="text-neutral-400 hover:text-white"
                >
                    <Globe className="w-4 h-4 mr-2" />
                    {language === "en" ? "Switch to Hindi" : "Switch to English"}
                </Button>
            </div>

            <div className="space-y-4">
                {relevantQuestions.map((q, idx) => (
                    <QuestionCard key={q.id} question={q} language={language} index={idx + 1} />
                ))}
            </div>
        </div>
    );
}

function QuestionCard({ question, language, index }: { question: RASQuestion, language: "en" | "hi", index: number }) {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const isCorrect = selectedOption === question.correctAnswer;
    const isAnswered = selectedOption !== null;

    return (
        <Card className="bg-neutral-900 border-neutral-800 overflow-hidden">
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-neutral-500">Q{question.id} • {question.subject}</span>
                    {question.difficulty && (
                        <span className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold
                            ${question.difficulty === 'easy' ? 'bg-green-500/10 text-green-500' :
                                question.difficulty === 'medium' ? 'bg-amber-500/10 text-amber-500' :
                                    'bg-red-500/10 text-red-500'}`}>
                            {question.difficulty}
                        </span>
                    )}
                </div>

                <div className="mb-6 whitespace-pre-line text-neutral-200 font-medium leading-relaxed">
                    {question.question[language]}
                </div>

                <div className="grid gap-3">
                    {question.options[language].slice(0, 4).map((opt: string, i: number) => {
                        const optionIndex = i + 1;
                        let stateStyle = "bg-neutral-800 hover:bg-neutral-700 border-transparent";

                        if (isAnswered) {
                            if (optionIndex === question.correctAnswer) {
                                stateStyle = "bg-green-500/20 border-green-500/50 text-green-200";
                            } else if (optionIndex === selectedOption) {
                                stateStyle = "bg-red-500/20 border-red-500/50 text-red-200";
                            } else {
                                stateStyle = "opacity-50 pointer-events-none"; // Dim others
                            }
                        }

                        return (
                            <button
                                key={i}
                                onClick={() => !isAnswered && setSelectedOption(optionIndex)}
                                disabled={isAnswered}
                                className={`w-full text-left p-4 rounded-lg border transition-all flex items-start gap-3 ${stateStyle}`}
                            >
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black/20 flex items-center justify-center text-xs font-mono opacity-70">
                                    {String.fromCharCode(65 + i)}
                                </span>
                                <span>{opt}</span>
                                {isAnswered && optionIndex === question.correctAnswer && (
                                    <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto flex-shrink-0" />
                                )}
                                {isAnswered && optionIndex === selectedOption && optionIndex !== question.correctAnswer && (
                                    <XCircle className="w-5 h-5 text-red-500 ml-auto flex-shrink-0" />
                                )}
                            </button>
                        );
                    })}
                </div>

                <AnimatePresence>
                    {isAnswered && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            className="mt-4 overflow-hidden"
                        >
                            <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => setShowExplanation(!showExplanation)}
                                >
                                    <span className="text-amber-500 font-bold text-sm">Explanation</span>
                                    {showExplanation ? <ChevronUp className="w-4 h-4 text-amber-500" /> : <ChevronDown className="w-4 h-4 text-amber-500" />}
                                </div>
                                {showExplanation && (
                                    <div className="mt-2 text-sm text-neutral-300">
                                        {question.explanation?.[language] || "Detailed explanation coming soon."}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}

// Helper to map Syllabus Subject Titles to Data Keywords (broad matching)
function getKeywordsForSubject(title: string): string[] {
    const t = title.toLowerCase();
    if (t.includes("history") && t.includes("rajasthan")) return ["History", "Culture", "Rajasthan"];
    if (t.includes("history") && t.includes("indian")) return ["History", "Indian"];
    if (t.includes("geography") && t.includes("rajasthan")) return ["Geography", "Rajasthan"];
    if (t.includes("geography")) return ["Geography"];
    if (t.includes("polity")) return ["Polity", "Constitution"];
    if (t.includes("economy") && t.includes("rajasthan")) return ["Economy", "Rajasthan"];
    if (t.includes("economy")) return ["Economy"];
    if (t.includes("science")) return ["Science", "Space", "Defence", "Biology", "Physics", "Chemistry"];
    if (t.includes("current")) return ["Current", "Schemes", "Sports"];
    if (t.includes("reasoning")) return ["Reasoning", "Math"];

    return [t.split(" ")[0]]; // Fallback
}

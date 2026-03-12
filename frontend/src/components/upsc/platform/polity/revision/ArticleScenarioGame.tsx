"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Siren, Gavel, Scale, AlertTriangle, RefreshCw, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Hardcoded Scenario Data (Level 3 Content)
const SCENARIOS = [
    {
        id: 1,
        situation: "The President wants to seek the opinion of the Supreme Court on a question of law regarding the new Cauvery Water Treaty.",
        options: ['143', '131', '136', '142'],
        answer: '143',
        explanation: "Article 143 empowers the President to consult the Supreme Court. The advice is not binding."
    },
    {
        id: 2,
        situation: "A citizen is arrested by the police but not produced before a magistrate within 24 hours.",
        options: ['20', '21', '22', '23'],
        answer: '22',
        explanation: "Article 22 grants protection against arrest and detention, including the right to be produced before a magistrate within 24 hours."
    },
    {
        id: 3,
        situation: "The Parliament wants to legislate on the 'Police' subject (State List) to curb interstate drug trafficking.",
        options: ['248', '249', '250', '252'],
        answer: '249',
        explanation: "Article 249 allows Rajya Sabha to authorize Parliament to make laws on State List subjects in national interest."
    },
    {
        id: 4,
        situation: "A money bill is passed by Lok Sabha and sent to Rajya Sabha. Rajya Sabha holds it for 20 days without action.",
        options: ['108', '109', '110', '111'],
        answer: '109',
        explanation: "Under Article 109, if Rajya Sabha does not return a Money Bill within 14 days, it is deemed to be passed."
    }
];

export default function ArticleScenarioGame({ onComplete }: { onComplete?: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const currentScenario = SCENARIOS[currentIndex];

    const handleSelect = (option: string) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);
        if (option === currentScenario.answer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < SCENARIOS.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setIsFinished(true);
            if (onComplete) onComplete();
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setScore(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setIsFinished(false);
    };

    if (isFinished) {
        return (
            <div className="text-center p-8 bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl shadow-xl">
                <div className="mb-6 inline-block p-4 bg-yellow-400 rounded-full text-indigo-900 shadow-lg shadow-yellow-500/50">
                    <Trophy size={48} />
                </div>
                <h2 className="text-4xl font-black mb-2 tracking-tight">Level 3 Mastered!</h2>
                <p className="text-indigo-200 mb-8 text-lg">Your Constitutional IQ is: <span className="font-bold text-white">{Math.round((score / SCENARIOS.length) * 100)}%</span></p>
                <Button onClick={handleRestart} size="lg" className="rounded-full font-bold bg-card text-indigo-900 hover:bg-indigo-50">
                    <RefreshCw className="mr-2" /> Replay Scenario Mode
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6 font-['Calibri']">
            {/* Header */}
            <div className="flex justify-between items-center bg-muted p-4 rounded-xl">
                <div className="flex items-center gap-2 font-bold text-muted-foreground">
                    <Siren className="text-red-500" /> Crisis Situation #{currentIndex + 1}
                </div>
                <div className="text-sm font-bold text-muted-foreground">
                    Score: {score}
                </div>
            </div>

            <Card className="border-0 shadow-2xl relative overflow-hidden bg-card">
                <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>

                <CardContent className="p-8 md:p-12">
                    <Badge variant="outline" className="mb-6 border-red-200 text-red-600 bg-red-50 font-bold uppercase tracking-widest">
                        Constitutional Crisis
                    </Badge>

                    <h3 className="text-2xl md:text-3xl font-medium text-foreground leading-snug mb-8 font-serif italic">
                        "{currentScenario.situation}"
                    </h3>

                    <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-4">
                        Which Article Applies?
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {currentScenario.options.map((opt) => {
                            let statusClass = "bg-card border-2 border-border hover:border-slate-400 text-muted-foreground";

                            if (isAnswered) {
                                if (opt === currentScenario.answer) {
                                    statusClass = "bg-green-600 border-green-600 text-white shadow-lg shadow-green-200 scale-105";
                                } else if (opt === selectedOption) {
                                    statusClass = "bg-red-500 border-red-500 text-white opacity-50";
                                } else {
                                    statusClass = "bg-muted border-slate-100 text-slate-300";
                                }
                            }

                            return (
                                <motion.button
                                    key={opt}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleSelect(opt)}
                                    disabled={isAnswered}
                                    className={`p-4 rounded-xl font-black text-xl transition-all ${statusClass}`}
                                >
                                    Art. {opt}
                                </motion.button>
                            );
                        })}
                    </div>

                    <AnimatePresence>
                        {isAnswered && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-8 pt-6 border-t border-slate-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="pt-1">
                                        <Gavel className="text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Judicial Explanation</h4>
                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            {currentScenario.explanation}
                                        </p>
                                    </div>
                                    <Button onClick={handleNext} className="ml-auto bg-slate-900 text-white">
                                        Next
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </div>
    );
}

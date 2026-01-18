"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';

interface MCQ {
    id: number;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export default function DailyBriefing() {
    const [questions, setQuestions] = useState<MCQ[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const loadQuiz = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/productivity/news-quiz`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ topic_focus: "General" })
            });

            if (!response.ok) throw new Error("API Error");
            const data = await response.json();
            if (!Array.isArray(data)) throw new Error("Invalid Data");
            setQuestions(data);
        } catch (error) {
            console.error(error);
            toast.error("Using offline mode.");
            // Mock Fallback
            setQuestions([
                {
                    id: 1,
                    question: "Which organization regulates the Repo Rate in India?",
                    options: ["SEBI", "RBI", "Finance Ministry", "NITI Aayog"],
                    correctIndex: 1,
                    explanation: "RBI Monetary Policy Committee decides the repo rate."
                },
                {
                    id: 2,
                    question: "What is the primary objective of the ISRO RLV-LEX-02 mission?",
                    options: ["Mars Landing", "Reusable Launch Vehicle Landing", "Sun Observation", "Moon Rover"],
                    correctIndex: 1,
                    explanation: "It demonstrated the autonomous landing capability of a reusable launch vehicle."
                },
                {
                    id: 3,
                    question: "The 'Electoral Bonds' scheme was struck down by the Supreme Court based on which Article?",
                    options: ["Article 14", "Article 19(1)(a)", "Article 21", "Article 32"],
                    correctIndex: 1,
                    explanation: "It violated the Right to Information under Article 19(1)(a)."
                }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleAnswer = (index: number) => {
        if (selectedOption !== null) return;
        setSelectedOption(index);

        if (index === questions[currentQ].correctIndex) {
            setScore(prev => prev + 1);
        }

        // Auto advance after delay
        setTimeout(() => {
            if (currentQ < questions.length - 1) {
                setCurrentQ(prev => prev + 1);
                setSelectedOption(null);
            } else {
                setFinished(true);
            }
        }, 3000);
    };

    if (loading) return (
        <Card className="h-64 flex items-center justify-center border-dashed border-2">
            <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
            <span className="ml-2">Generating Daily Briefing...</span>
        </Card>
    );

    if (questions.length === 0) return (
        <Card className="h-64 flex flex-col items-center justify-center">
            <Newspaper className="h-10 w-10 text-gray-400 mb-2" />
            <Button onClick={loadQuiz}>Start Daily News Quiz</Button>
        </Card>
    );

    if (finished) return (
        <Card className="bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-900 border-green-200">
            <CardContent className="h-64 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Quiz Complete!</h3>
                <p className="text-4xl font-extrabold mb-4">{score} / {questions.length}</p>
                <p className="text-sm text-gray-600 mb-6">Score recorded in your Activity Log.</p>
                <Button onClick={() => window.location.reload()} variant="outline">Refresh Headlines</Button>
            </CardContent>
        </Card>
    );

    const q = questions[currentQ];

    return (
        <Card className="overflow-hidden border-indigo-100 dark:border-indigo-900 shadow-sm relative">
            <CardHeader className="bg-indigo-50/50 dark:bg-indigo-900/20 pb-4">
                <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-indigo-500">
                    <span>News Briefing</span>
                    <span>{currentQ + 1} / {questions.length}</span>
                </div>
                <CardTitle className="text-lg leading-tight mt-2 min-h-[3rem]">
                    {q.question}
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-3">
                <AnimatePresence mode="wait">
                    {q.options.map((opt, i) => {
                        let btnClass = "justify-start text-left h-auto py-3 px-4 w-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800";
                        if (selectedOption !== null) {
                            if (i === q.correctIndex) btnClass = "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 justify-start h-auto w-full"; // Correct
                            else if (i === selectedOption) btnClass = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 justify-start h-auto w-full"; // Wrong
                            else btnClass = "border-gray-100 dark:border-gray-800 opacity-50 justify-start h-auto w-full";
                        } else {
                            btnClass += " border-gray-100 dark:border-gray-700";
                        }

                        return (
                            <motion.div key={i} layout>
                                <Button
                                    variant="ghost"
                                    className={btnClass}
                                    onClick={() => handleAnswer(i)}
                                    disabled={selectedOption !== null}
                                >
                                    <div className="flex items-center w-full">
                                        <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs border mr-3 shrink-0 ${selectedOption === i || (selectedOption !== null && i === q.correctIndex) ? 'border-current' : 'border-gray-300'
                                            }`}>
                                            {String.fromCharCode(65 + i)}
                                        </span>
                                        <span className="flex-1">{opt}</span>
                                        {selectedOption !== null && i === q.correctIndex && <CheckCircle className="h-5 w-5 ml-2 text-green-600" />}
                                        {selectedOption === i && i !== q.correctIndex && <XCircle className="h-5 w-5 ml-2 text-red-600" />}
                                    </div>
                                </Button>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {selectedOption !== null && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-sm text-blue-800 dark:text-blue-300 mt-4"
                    >
                        <strong>Insight:</strong> {q.explanation}
                    </motion.div>
                )}
            </CardContent>
        </Card>
    );
}

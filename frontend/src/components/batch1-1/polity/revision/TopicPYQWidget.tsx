"use client";

import React, { useState } from 'react';
import { PYQ_DATA } from '../data/pyq-data';
import { PYQItem } from '../data/pyq-types';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, HelpCircle, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TopicPYQWidgetProps {
    topicId: number;
}

export default function TopicPYQWidget({ topicId }: TopicPYQWidgetProps) {
    const relevantQuestions = PYQ_DATA.filter(q => q.topicIds.includes(topicId));

    if (relevantQuestions.length === 0) return null;

    return (
        <section className="mt-12 mb-8 border-t-2 border-slate-100 pt-8 font-['Calibri']">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700">
                    <Trophy size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">UPSC Past Year Questions</h3>
                    <p className="text-sm text-slate-500">Directly from this topic ({relevantQuestions.length} questions)</p>
                </div>
            </div>

            <div className="grid gap-4">
                {relevantQuestions.map(q => (
                    <PYQMiniCard key={q.id} question={q} />
                ))}
            </div>

        </section>
    );
}

function PYQMiniCard({ question }: { question: PYQItem }) {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4">
                <div className="flex justify-between items-start gap-4 mb-3">
                    <Badge variant="secondary" className="font-bold">
                        {question.year} {question.exam === 'MAINS' && '(Mains)'}
                    </Badge>
                    <span className="text-xs text-slate-400 font-mono">{question.difficulty}</span>
                </div>

                <p className="font-bold text-slate-800 mb-4 text-base leading-relaxed">
                    {question.question}
                </p>

                {/* Options for Prelims */}
                {question.exam === 'PRELIMS' && question.options && (
                    <div className="space-y-1.5 mb-4 pl-1 border-l-2 border-slate-100">
                        {question.options.map(opt => (
                            <div key={opt.label} className={`text-sm py-1 px-2 rounded ${isRevealed && opt.label === question.answer ? 'bg-green-100 text-green-800 font-bold' : 'text-slate-600'}`}>
                                <span className="font-semibold mr-2">{opt.label}.</span> {opt.text}
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex flex-col gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsRevealed(!isRevealed)}
                        className="self-start text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-0"
                    >
                        {isRevealed ? 'Hide Answer' : 'Show Answer & Explanation'}
                        {isRevealed ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                    </Button>

                    <AnimatePresence>
                        {isRevealed && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700 border border-slate-100"
                            >
                                <p className="font-bold mb-1 text-slate-900 border-b border-slate-200 pb-1 inline-block">Explanation:</p>
                                <p className="leading-relaxed mt-1">{question.explanation}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </CardContent>
        </Card>
    );
}

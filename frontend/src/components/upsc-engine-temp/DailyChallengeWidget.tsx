"use client";

import React, { useState } from 'react';
import { Flame, Target, Star, ChevronRight } from 'lucide-react';
import { useGamification } from '@/context/GamificationContext';

const DAILY_QUESTIONS = [
    { id: 'dq1', q: "Who was the Viceroy during the Partition of Bengal (1905)?", a: 2, options: ["Lord Ripon", "Lord Lytton", "Lord Curzon", "Lord Wavell"] },
    { id: 'dq2', q: "Article 21A (Right to Education) was added by which Amendment?", a: 0, options: ["86th Amendment", "42nd Amendment", "44th Amendment", "73rd Amendment"] },
    { id: 'dq3', q: "Which river is known as 'Dakshin Ganga'?", a: 1, options: ["Krishna", "Godavari", "Cauvery", "Mahanadi"] },
    { id: 'dq4', q: "Ramsar Convention is related to conservation of?", a: 0, options: ["Wetlands", "Forests", "Ozone Layer", "Coral Reefs"] },
    { id: 'dq5', q: "Which of these is a Direct Tax?", a: 3, options: ["GST", "Excise Duty", "Customs Duty", "Income Tax"] }
];

export default function DailyChallengeWidget() {
    const { addXP } = useGamification();
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);

    const handleAnswer = (idx: number) => {
        setSelected(idx);
        setTimeout(() => {
            if (idx === DAILY_QUESTIONS[currentQ].a) {
                setScore(s => s + 1);
                addXP('mcq_correct');
            } else {
                addXP('mcq_incorrect');
            }

            if (currentQ < DAILY_QUESTIONS.length - 1) {
                setCurrentQ(q => q + 1);
                setSelected(null);
            } else {
                setCompleted(true);
                addXP('daily_challenge_bonus'); // Will map to default points
            }
        }, 800);
    };

    if (completed) {
        return (
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white text-center">
                <Target className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-1">Challenge Complete!</h3>
                <p className="text-orange-100 mb-4">You scored {score}/{DAILY_QUESTIONS.length}</p>

                <div className="flex justify-center gap-4 text-sm font-bold">
                    <div className="bg-card/20 px-4 py-2 rounded-xl flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-300" />
                        +{score * 10 + 15} XP
                    </div>
                    <div className="bg-card/20 px-4 py-2 rounded-xl flex items-center gap-2">
                        <Flame className="w-4 h-4 text-orange-200" />
                        Streak Saved!
                    </div>
                </div>
            </div>
        );
    }

    const question = DAILY_QUESTIONS[currentQ];

    return (
        <div className="bg-card dark:bg-[#111] rounded-2xl border border-border overflow-hidden">
            <div className="bg-orange-50 dark:bg-orange-900/10 p-4 border-b border-orange-100 dark:border-orange-800/30 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <h3 className="font-bold text-foreground">Daily Challenge</h3>
                </div>
                <div className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded">
                    {currentQ + 1}/{DAILY_QUESTIONS.length}
                </div>
            </div>

            <div className="p-5">
                <p className="font-medium text-foreground mb-4 min-h-[48px]">
                    {question.q}
                </p>

                <div className="space-y-2">
                    {question.options.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => selected === null && handleAnswer(idx)}
                            disabled={selected !== null}
                            className={`w-full text-left p-3 rounded-xl border text-sm transition-all flex justify-between items-center
                                ${selected === idx
                                    ? (idx === question.a ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800')
                                    : 'bg-card dark:bg-[#151515] border-border hover:border-orange-400'}`}
                        >
                            {opt}
                            {selected === idx && <ChevronRight className="w-4 h-4" />}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

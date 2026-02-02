"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BrainCircuit, AlertTriangle, FileText, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

// Mock Data
const STUDENTS = [
    { id: '1', name: 'Aarav Patel', risk: 'High', weakTopics: ['Quantum Mechanics', 'Thermodynamics'] },
    { id: '2', name: 'Sneha Gupta', risk: 'Medium', weakTopics: ['Organic Chemistry'] },
    { id: '3', name: 'Rohan Kumar', risk: 'Low', weakTopics: ['Calculus II'] },
];

export default function AdaptiveTestCreator() {
    const [selectedStudent, setSelectedStudent] = useState<string>("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [generatedTest, setGeneratedTest] = useState<any>(null);

    const handleAnalyze = () => {
        if (!selectedStudent) return;
        setIsAnalyzing(true);
        setTimeout(() => {
            const student = STUDENTS.find(s => s.id === selectedStudent);
            setGeneratedTest({
                title: `Recovery Plan: ${student?.name}`,
                topics: student?.weakTopics,
                questions: [
                    { q: "Explain the Second Law of Thermodynamics.", type: "Subjective" },
                    { q: "Calculate the entropy change in an ideal gas.", type: "Numerical" },
                    { q: "Define Heisenberg's Uncertainty Principle.", type: "Conceptual" }
                ]
            });
            setIsAnalyzing(false);
            toast.success("Adaptive test generated!");
        }, 2000);
    };

    return (
        <Card className="h-full border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-rose-600">
                    <BrainCircuit className="w-5 h-5" />
                    Adaptive Test Creator
                </CardTitle>
                <p className="text-xs text-neutral-500">Generate targeted recovery tests based on student performance gaps.</p>
            </CardHeader>
            <CardContent className="space-y-6">

                <div className="space-y-2">
                    <label className="text-sm font-medium">Select Student</label>
                    <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                        <SelectTrigger>
                            <SelectValue placeholder="Choose a student..." />
                        </SelectTrigger>
                        <SelectContent>
                            {STUDENTS.map(s => (
                                <SelectItem key={s.id} value={s.id}>
                                    {s.name} ({s.risk} Risk)
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <Button
                    onClick={handleAnalyze}
                    disabled={!selectedStudent || isAnalyzing}
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                >
                    {isAnalyzing ? "Scanning Weaknesses..." : "Analyze & Generate Test"}
                </Button>

                {generatedTest && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700"
                    >
                        <div className="flex items-center gap-2 mb-3 text-rose-600 font-bold">
                            <AlertTriangle className="w-4 h-4" />
                            {generatedTest.title}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {generatedTest.topics.map((t: string) => (
                                <span key={t} className="text-[10px] bg-rose-100 text-rose-700 px-2 py-1 rounded-full uppercase font-bold">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="space-y-2">
                            {generatedTest.questions.map((q: any, i: number) => (
                                <div key={i} className="flex gap-2 text-sm bg-white dark:bg-neutral-900 p-2 rounded border border-neutral-100 dark:border-neutral-800">
                                    <span className="font-bold text-neutral-400">{i + 1}.</span>
                                    <span>{q.q}</span>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className="w-full mt-4 gap-2 text-xs">
                            <CheckCircle className="w-3 h-3" /> Assign to Student
                        </Button>
                    </motion.div>
                )}
            </CardContent>
        </Card>
    );
}

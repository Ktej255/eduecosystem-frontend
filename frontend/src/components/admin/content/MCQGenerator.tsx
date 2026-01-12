"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, FileJson, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { LAXMIKANTH_CHAPTERS } from '@/components/batch1/polity/data/polity-schedule-data';
import { CHAPTER_SUBTOPICS } from '@/components/batch1/polity/data/polity-subtopics';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

interface MCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number; // 0-3
    explanation: string;
}

export default function MCQGenerator() {
    const router = useRouter();
    const { toast } = useToast();

    const [selectedChapterId, setSelectedChapterId] = useState<string>("");
    const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>("all");

    // Form state
    const [question, setQuestion] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState<string>("0"); // String for Select
    const [explanation, setExplanation] = useState("");

    // List state
    const [questions, setQuestions] = useState<MCQ[]>([]);

    // Filter subtopics
    const availableSubtopics = useMemo(() => {
        if (!selectedChapterId) return [];
        return CHAPTER_SUBTOPICS[parseInt(selectedChapterId)] || [];
    }, [selectedChapterId]);

    const handleAddMCQ = () => {
        if (!question.trim() || !optionA.trim() || !optionB.trim()) return;

        const newMCQ: MCQ = {
            id: Date.now().toString(),
            question: question.trim(),
            options: [optionA.trim(), optionB.trim(), optionC.trim(), optionD.trim()],
            correctAnswer: parseInt(correctAnswer),
            explanation: explanation.trim()
        };

        setQuestions([...questions, newMCQ]);

        // Reset form
        setQuestion("");
        setOptionA("");
        setOptionB("");
        setOptionC("");
        setOptionD("");
        setCorrectAnswer("0");
        setExplanation("");
    };

    const handleDeleteMCQ = (id: string) => {
        setQuestions(questions.filter(q => q.id !== id));
    };

    const handleExport = () => {
        const exportData = {
            chapterId: selectedChapterId,
            subtopicId: selectedSubtopicId,
            generatedAt: new Date().toISOString(),
            questions: questions.map(q => ({
                question: q.question,
                options: q.options,
                answer: q.correctAnswer,
                explanation: q.explanation
            }))
        };

        const json = JSON.stringify(exportData, null, 2);

        navigator.clipboard.writeText(json);
        toast({
            title: "Copied to Clipboard",
            description: "JSON data ready to be pasted into codebase.",
        });
    };

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => router.back()}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <h1 className="text-2xl font-bold">MCQ Generator</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Input Form */}
                <div className="lg:col-span-1 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Configuration</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Chapter</Label>
                                <Select value={selectedChapterId} onValueChange={setSelectedChapterId}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Chapter" />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-60">
                                        {LAXMIKANTH_CHAPTERS.map(ch => (
                                            <SelectItem key={ch.chapter} value={ch.chapter.toString()}>
                                                {ch.chapter}. {ch.topic}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Subtopic (Optional)</Label>
                                <Select value={selectedSubtopicId} onValueChange={setSelectedSubtopicId} disabled={!selectedChapterId}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Subtopic" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Subtopics</SelectItem>
                                        {availableSubtopics.map(sub => (
                                            <SelectItem key={sub.id} value={sub.id}>
                                                {sub.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>New Question</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Question Text</Label>
                                <Textarea
                                    placeholder="Enter question..."
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    className="min-h-[80px]"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="space-y-1">
                                    <Label className="text-xs">Option A</Label>
                                    <Input value={optionA} onChange={(e) => setOptionA(e.target.value)} />
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-xs">Option B</Label>
                                    <Input value={optionB} onChange={(e) => setOptionB(e.target.value)} />
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-xs">Option C</Label>
                                    <Input value={optionC} onChange={(e) => setOptionC(e.target.value)} />
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-xs">Option D</Label>
                                    <Input value={optionD} onChange={(e) => setOptionD(e.target.value)} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Correct Option</Label>
                                <Select value={correctAnswer} onValueChange={setCorrectAnswer}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select answer" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0">Option A</SelectItem>
                                        <SelectItem value="1">Option B</SelectItem>
                                        <SelectItem value="2">Option C</SelectItem>
                                        <SelectItem value="3">Option D</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Explanation</Label>
                                <Textarea
                                    placeholder="Why is it correct?"
                                    value={explanation}
                                    onChange={(e) => setExplanation(e.target.value)}
                                    className="min-h-[60px]"
                                />
                            </div>

                            <Button onClick={handleAddMCQ} className="w-full" disabled={!selectedChapterId}>
                                <Plus className="w-4 h-4 mr-2" /> Add Question
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Right: Preview List */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">
                            Generated Questions ({questions.length})
                        </h2>
                        <Button variant="outline" onClick={handleExport} disabled={questions.length === 0}>
                            <FileJson className="w-4 h-4 mr-2 text-green-600" />
                            Export JSON
                        </Button>
                    </div>

                    {questions.length === 0 ? (
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center text-gray-400">
                            No questions generated yet.
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {questions.map((q, idx) => (
                                <Card key={q.id} className="relative group hover:shadow-md transition-all">
                                    <CardContent className="p-4 space-y-3">
                                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" size="icon" className="h-6 w-6 text-red-500" onClick={() => handleDeleteMCQ(q.id)}>
                                                <Trash2 className="w-3 h-3" />
                                            </Button>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="font-bold text-gray-500">Q{idx + 1}.</span>
                                            <p className="font-medium text-gray-900 dark:text-gray-100">{q.question}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 pl-6">
                                            {q.options.map((opt, optIdx) => (
                                                <div
                                                    key={optIdx}
                                                    className={`text-sm p-2 rounded ${optIdx === q.correctAnswer
                                                        ? 'bg-green-50 text-green-700 border border-green-200'
                                                        : 'bg-gray-50 text-gray-600'
                                                        }`}
                                                >
                                                    <span className="font-bold mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                                                    {opt}
                                                    {optIdx === q.correctAnswer && <CheckCircle2 className="w-3 h-3 inline ml-2" />}
                                                </div>
                                            ))}
                                        </div>
                                        {q.explanation && (
                                            <div className="pl-6 pt-2 border-t mt-2">
                                                <p className="text-xs text-gray-500">
                                                    <span className="font-bold">Explanation:</span> {q.explanation}
                                                </p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

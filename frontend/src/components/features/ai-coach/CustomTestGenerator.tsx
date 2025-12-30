
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ListChecks, CheckCircle2, XCircle, AlertCircle, BookOpen } from "lucide-react";
import aiLearningService, { MCQItem } from "@/services/aiLearningService";
import { toast } from "@/components/ui/use-toast";

export default function CustomTestGenerator() {
    const [notes, setNotes] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [quizData, setQuizData] = useState<{ topic: string, questions: MCQItem[] } | null>(null);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [showResults, setShowResults] = useState(false);

    const handleGenerate = async () => {
        if (notes.length < 50) {
            toast({
                title: "Not enough content",
                description: "Please enter at least 50 characters of notes to generate questions.",
                variant: "destructive"
            });
            return;
        }

        setIsLoading(true);
        try {
            const data = await aiLearningService.generateMCQ({
                notes_text: notes,
                num_questions: 5,
                difficulty: 'hard'
            });
            setQuizData({ topic: data.source_topic, questions: data.questions });
            setAnswers({});
            setShowResults(false);
            toast({
                title: "Test Generated",
                description: `Created 5 questions on ${data.source_topic}.`
            });
        } catch (error) {
            console.error(error);
            toast({
                title: "Generation Failed",
                description: "Could not generate test. Please try again.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleOptionSelect = (qIndex: number, optionId: string) => {
        if (showResults) return; // Prevent changing after submit
        setAnswers(prev => ({
            ...prev,
            [qIndex]: optionId
        }));
    };

    const handleSubmit = () => {
        setShowResults(true);
        // Calculate score
        let score = 0;
        quizData?.questions.forEach((q, idx) => {
            if (answers[idx] === q.correct_option_id) score++;
        });

        toast({
            title: `You scored ${score}/${quizData?.questions.length}`,
            description: score === quizData?.questions.length ? "Perfect score! Outstanding." : "Review the explanations to learn more."
        });
    };

    const reset = () => {
        setQuizData(null);
        setNotes("");
        setAnswers({});
        setShowResults(false);
    };

    if (quizData) {
        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-indigo-600" />
                        {quizData.topic} Test
                    </h2>
                    <Button variant="outline" onClick={reset}>Create New Test</Button>
                </div>

                <div className="grid gap-6">
                    {quizData.questions.map((q, idx) => {
                        const isCorrect = answers[idx] === q.correct_option_id;
                        const isSelected = !!answers[idx];

                        let borderClass = "border-slate-200";
                        if (showResults) {
                            borderClass = isCorrect ? "border-green-500 bg-green-50" : "border-red-200 bg-red-50";
                        }

                        return (
                            <Card key={idx} className={`shadow-sm ${borderClass}`}>
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between gap-4">
                                        <CardTitle className="text-lg font-medium leading-relaxed">
                                            {idx + 1}. {q.question}
                                        </CardTitle>
                                        {showResults && (
                                            isCorrect
                                                ? <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                                                : <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <RadioGroup
                                        value={answers[idx]}
                                        onValueChange={(val) => handleOptionSelect(idx, val)}
                                    >
                                        {q.options.map((opt) => {
                                            const isOptCorrect = opt.id === q.correct_option_id;
                                            const isOptSelected = answers[idx] === opt.id;

                                            let optClass = "";
                                            if (showResults) {
                                                if (isOptCorrect) optClass = "text-green-700 font-medium bg-green-100/50";
                                                else if (isOptSelected && !isOptCorrect) optClass = "text-red-700 line-through decoration-red-400";
                                            }

                                            return (
                                                <div key={opt.id} className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${optClass}`}>
                                                    <RadioGroupItem value={opt.id} id={`q${idx}-${opt.id}`} disabled={showResults} />
                                                    <Label htmlFor={`q${idx}-${opt.id}`} className="cursor-pointer text-base w-full">
                                                        {opt.text}
                                                    </Label>
                                                </div>
                                            )
                                        })}
                                    </RadioGroup>

                                    {showResults && (
                                        <div className="mt-4 p-4 bg-white/60 rounded-lg border border-slate-200 text-sm">
                                            <p className="font-semibold flex items-center gap-2 mb-1 text-slate-800">
                                                <AlertCircle className="w-4 h-4" /> Explanation:
                                            </p>
                                            <p className="text-slate-600 leading-relaxed">{q.explanation}</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {!showResults && (
                    <div className="flex justify-end pt-4">
                        <Button
                            size="lg"
                            onClick={handleSubmit}
                            className="bg-indigo-600 hover:bg-indigo-700 min-w-[200px]"
                            disabled={Object.keys(answers).length < quizData.questions.length}
                        >
                            Submit & Check Answers
                        </Button>
                    </div>
                )}
            </div>
        );
    }

    return (
        <Card className="max-w-3xl mx-auto shadow-lg border-t-4 border-indigo-500">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                    <ListChecks className="w-8 h-8 text-indigo-600" />
                    Custom Test Generator
                </CardTitle>
                <CardDescription>
                    Paste your notes, articles, or summary text below. AI will instantly generate high-quality MCQs to test your understanding.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Textarea
                    placeholder="Paste your study material here (e.g., notes on Monetary Policy)..."
                    className="min-h-[300px] text-base leading-relaxed p-4 resize-none focus:ring-indigo-500"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <div className="flex justify-between items-center text-sm text-slate-500">
                    <span>Minimum 50 characters</span>
                    <span>{notes.length} chars</span>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    className="w-full h-12 text-lg bg-indigo-600 hover:bg-indigo-700"
                    onClick={handleGenerate}
                    disabled={isLoading || notes.length < 50}
                >
                    {isLoading ? "Generating Questions..." : "Generate Test"}
                </Button>
            </CardFooter>
        </Card>
    );
}

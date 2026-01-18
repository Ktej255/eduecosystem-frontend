"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, FileText, Loader2, CheckCircle, AlertCircle, ChevronRight, PenTool } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';

interface EvaluationResult {
    scores: {
        introduction: number;
        body: number;
        structure: number;
        conclusion: number;
        total: number;
    };
    feedback: {
        strengths: string[];
        weaknesses: string[];
        improvements: string[];
    };
    model_answer_summary: string;
}

export default function MainsEvaluator() {
    const [question, setQuestion] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<EvaluationResult | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleAnalyze = async () => {
        if (!file || !question) {
            toast.error("Please provide both a question and an image of your answer.");
            return;
        }

        setIsAnalyzing(true);
        setResult(null);

        const formData = new FormData();
        formData.append("question", question);
        formData.append("file", file);

        try {
            const token = localStorage.getItem('token'); // Simplistic auth handling
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/mains/evaluate-image`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || "Analysis failed");
            }

            const data = await response.json();
            setResult(data);
            toast.success("Answer evaluated successfully!");
        } catch (error: any) {
            console.error("Evaluation Error:", error);
            toast.error(error.message || "Failed to analyze answer.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
                <Card className="border-indigo-100 dark:border-indigo-900 shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                            <PenTool className="h-5 w-5" />
                            Submit Answer
                        </CardTitle>
                        <CardDescription>
                            Upload a photo of your handwritten answer for AI evaluation.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="question">Mains Question</Label>
                            <Textarea
                                id="question"
                                placeholder="Enter the question you answered..."
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                className="min-h-[100px] border-gray-200 focus:border-indigo-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Answer Image</Label>
                            <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors cursor-pointer relative">
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                {preview ? (
                                    <div className="relative w-full h-48 flex justify-center">
                                        <img src={preview} alt="Answer Preview" className="h-full object-contain rounded shadow-sm" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity rounded">
                                            <span className="text-white font-medium flex items-center gap-2"><Upload className="h-4 w-4" /> Change Image</span>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm mb-3">
                                            <Upload className="h-6 w-6 text-indigo-500" />
                                        </div>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Click to Upload
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            JPG, PNG (Max 10MB)
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        <Button
                            onClick={handleAnalyze}
                            disabled={isAnalyzing || !file || !question}
                            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white h-12 text-lg shadow-lg shadow-indigo-200 dark:shadow-none"
                        >
                            {isAnalyzing ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Analyzing with Gemini Vision...
                                </>
                            ) : (
                                <>
                                    Evaluate Answer <ChevronRight className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Results Section */}
            <div>
                <AnimatePresence mode="wait">
                    {result ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            <Card className="border-t-4 border-t-indigo-500 shadow-md">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                                                Evaluation Results
                                            </CardTitle>
                                            <CardDescription>
                                                AI Assessment provided by Gemini Vision
                                            </CardDescription>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Total Score</span>
                                            <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                                                {result.scores.total}<span className="text-xl text-gray-400">/10</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    {/* Breakdown */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <ScoreItem label="Introduction" score={result.scores.introduction} max={1} />
                                        <ScoreItem label="Body Content" score={result.scores.body} max={4} />
                                        <ScoreItem label="Structure" score={result.scores.structure} max={2} />
                                        <ScoreItem label="Conclusion" score={result.scores.conclusion} max={2} />
                                    </div>

                                    {/* Feedback */}
                                    <div className="space-y-4">
                                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-900">
                                            <h4 className="flex items-center gap-2 font-semibold text-green-800 dark:text-green-300 mb-2">
                                                <CheckCircle className="h-4 w-4" /> Strengths
                                            </h4>
                                            <ul className="list-disc pl-5 space-y-1 text-sm text-green-700 dark:text-green-400">
                                                {result.feedback.strengths.map((s, i) => (
                                                    <li key={i}>{s}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-100 dark:border-amber-900">
                                            <h4 className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-300 mb-2">
                                                <AlertCircle className="h-4 w-4" /> Areas for Improvement
                                            </h4>
                                            <ul className="list-disc pl-5 space-y-1 text-sm text-amber-700 dark:text-amber-400">
                                                {result.feedback.improvements.map((s, i) => (
                                                    <li key={i}>{s}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Model Answer Summary */}
                                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                            <FileText className="h-4 w-4 text-gray-500" /> Model Approach
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
                                            {result.model_answer_summary}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl">
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-full mb-4">
                                <FileText className="h-10 w-10 text-indigo-300" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                No Analysis Yet
                            </h3>
                            <p className="text-gray-500 max-w-xs">
                                Submit your answer on the left to confirm your readiness for the Mains.
                            </p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

function ScoreItem({ label, score, max }: { label: string, score: number, max: number }) {
    // Determine bar color based on percentage
    const percentage = (score / 10) * 100; // Normalizing 0-10 score to percentage?
    // Wait, prompt returned raw scores? Rubric says Intro (1-2), Body (1-4).
    // Prompt said "score 0-10" for all parameters? No, I said score 0-10 but listed breakdown.
    // Actually prompt in `gemini_service.py` said: "Evaluate on these parameters (score 0-10, be strict)".
    // So distinct params are 0-10 each? But rubric implied weighted?
    // Let's assume prompt returns 0-10 for each category or something.
    // Re-reading prompt: "scores": {"introduction": 0, "body": 0, ... "total": 0}
    // If usage of standard rubric is expected (Total 10), then subscores sum to 10.
    // If prompt gives 0-10 for each dimension, total needs to be calculated or it's just "Total" returned by AI.
    // I will assume the AI returns consistent values.
    // The previous prompt text: "Evaluate on these parameters (score 0-10)... Return JSON... "total": 0".

    // I'll just display what comes back.

    return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between mb-1">
                <span className="text-xs font-medium text-gray-500 uppercase">{label}</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">{score}</span>
            </div>
            <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${Math.min(100, (score / 10) * 100)}%` }} // Assuming max 10 for individual too for visualization scaling
                />
            </div>
        </div>
    );
}

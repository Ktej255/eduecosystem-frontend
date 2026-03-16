"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { SubjectConfig, SubjectTopic } from '../../common/framework/SubjectPlanner';
import { PenTool, CheckCircle, Clock, BookOpen, ChevronDown, ChevronUp, Loader2, Sparkles, ThumbsUp, AlertTriangle, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface HistoryMainsPracticeProps {
    config: SubjectConfig;
}

interface EvaluationResult {
    score: number;
    feedback: string;
    strengths: string[];
    improvements: string[];
}

const STORAGE_KEY_PREFIX = "mains_draft_";

export default function HistoryMainsPractice({ config }: HistoryMainsPracticeProps) {
    const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [evaluations, setEvaluations] = useState<{ [key: string]: EvaluationResult }>({});
    const [loadingEvaluation, setLoadingEvaluation] = useState<{ [key: string]: boolean }>({});
    const [evaluationError, setEvaluationError] = useState<{ [key: string]: string }>({});
    const [showModelAnswer, setShowModelAnswer] = useState<{ [key: string]: boolean }>({});

    // Filter topics that have Mains Questions
    const topicsWithMains = config.topics.filter(t => t.mainsQuestions && t.mainsQuestions.length > 0);

    // Load drafts from localStorage on mount
    useEffect(() => {
        const loadedAnswers: { [key: string]: string } = {};
        topicsWithMains.forEach(topic => {
            topic.mainsQuestions?.forEach(q => {
                const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}${q.id}`);
                if (saved) {
                    loadedAnswers[q.id] = saved;
                }
            });
        });
        if (Object.keys(loadedAnswers).length > 0) {
            setAnswers(loadedAnswers);
        }
    }, []);

    // Save draft to localStorage (debounced via effect)
    useEffect(() => {
        const timeoutIds: NodeJS.Timeout[] = [];
        Object.entries(answers).forEach(([questionId, answer]) => {
            const timeoutId = setTimeout(() => {
                if (answer) {
                    localStorage.setItem(`${STORAGE_KEY_PREFIX}${questionId}`, answer);
                }
            }, 500); // 500ms debounce
            timeoutIds.push(timeoutId);
        });
        return () => timeoutIds.forEach(id => clearTimeout(id));
    }, [answers]);

    const handleEvaluate = async (questionId: string, question: string, marks: number) => {
        const answer = answers[questionId];
        if (!answer || answer.trim().length < 50) {
            setEvaluationError({ ...evaluationError, [questionId]: "Please write at least 50 characters before evaluating." });
            return;
        }

        setLoadingEvaluation({ ...loadingEvaluation, [questionId]: true });
        setEvaluationError({ ...evaluationError, [questionId]: "" });

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/mains/evaluate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question, answer, marks })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.detail || `Evaluation failed (${response.status})`);
            }

            const result: EvaluationResult = await response.json();
            setEvaluations({ ...evaluations, [questionId]: result });
        } catch (error: any) {
            console.error("Evaluation error:", error);
            setEvaluationError({ ...evaluationError, [questionId]: error.message || "Evaluation failed. Please try again." });
        } finally {
            setLoadingEvaluation({ ...loadingEvaluation, [questionId]: false });
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 text-white mb-8 shadow-xl">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                            <PenTool className="w-8 h-8 text-amber-400" />
                            Mains Answer Writing
                        </h2>
                        <p className="text-blue-200 text-lg">Practice daily answer writing for History. Focus on structure, flow, and keywords.</p>
                    </div>
                    <div className="bg-card/10 backdrop-blur rounded-xl p-4 border border-white/20 text-center min-w-[120px]">
                        <div className="text-3xl font-bold">{topicsWithMains.reduce((acc, t) => acc + (t.mainsQuestions?.length || 0), 0)}</div>
                        <div className="text-sm text-blue-200">Total Questions</div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {topicsWithMains.map((topic: SubjectTopic) => (
                    <div key={topic.id} className="bg-card dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
                        <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                            <h3 className="font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                                <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs">Topic {topic.id}</span>
                                {topic.title}
                            </h3>
                            <span className="text-xs text-neutral-500 font-medium">
                                {topic.mainsQuestions?.length} Questions
                            </span>
                        </div>

                        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
                            {topic.mainsQuestions?.map((q: any, idx: number) => {
                                const isExpanded = selectedQuestionId === q.id;
                                const hasAnswer = !!answers[q.id];
                                const evaluation = evaluations[q.id];
                                const isLoading = loadingEvaluation[q.id];
                                const error = evaluationError[q.id];

                                return (
                                    <div key={q.id} className="p-0 transition-colors bg-card dark:bg-neutral-900">
                                        {/* Question Header */}
                                        <div
                                            className="p-5 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/30 flex items-start gap-4"
                                            onClick={() => setSelectedQuestionId(isExpanded ? null : q.id)}
                                        >
                                            <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
                                                Q{idx + 1}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-base font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed">
                                                    {q.question}
                                                </p>
                                                <div className="flex items-center gap-4 mt-2 text-xs text-neutral-500">
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" /> 10 Mins (Ideal)
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <BookOpen className="w-3 h-3" /> {q.marks} Marks
                                                    </span>
                                                    {evaluation && (
                                                        <span className="flex items-center gap-1 text-green-600 font-bold">
                                                            <Sparkles className="w-3 h-3" /> Evaluated: {evaluation.score}/{q.marks}
                                                        </span>
                                                    )}
                                                    {hasAnswer && !evaluation && (
                                                        <span className="flex items-center gap-1 text-amber-600 font-bold">
                                                            <CheckCircle className="w-3 h-3" /> Draft Saved
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="pt-1">
                                                {isExpanded ? <ChevronUp className="w-5 h-5 text-neutral-400" /> : <ChevronDown className="w-5 h-5 text-neutral-400" />}
                                            </div>
                                        </div>

                                        {/* Expanded Area */}
                                        {isExpanded && (
                                            <div className="px-5 pb-6 pt-2 bg-neutral-50/50 dark:bg-neutral-900/50 space-y-4">
                                                <Textarea
                                                    placeholder="Start writing your answer here... Structure: Intro (2 lines), Body (Points), Conclusion (2 lines)"
                                                    className="min-h-[200px] bg-card dark:bg-black border-neutral-300 dark:border-neutral-700 resize-y"
                                                    value={answers[q.id] || ''}
                                                    onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                                                />

                                                {/* Action Buttons */}
                                                <div className="flex items-center justify-between">
                                                    {error && (
                                                        <p className="text-xs text-red-500 flex items-center gap-1">
                                                            <AlertTriangle className="w-3 h-3" /> {error}
                                                        </p>
                                                    )}
                                                    {!error && (
                                                        <p className="text-xs text-neutral-400 italic">
                                                            Write at least 50 characters to enable AI evaluation.
                                                        </p>
                                                    )}
                                                    <div className="flex gap-2">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => setShowModelAnswer({ ...showModelAnswer, [q.id]: !showModelAnswer[q.id] })}
                                                            disabled={!q.modelAnswer}
                                                        >
                                                            <Eye className="w-4 h-4 mr-2" />
                                                            {showModelAnswer[q.id] ? "Hide" : "View"} Model Answer
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                                                            disabled={isLoading || !answers[q.id] || answers[q.id].trim().length < 50}
                                                            onClick={() => handleEvaluate(q.id, q.question, q.marks)}
                                                        >
                                                            {isLoading ? (
                                                                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Evaluating...</>
                                                            ) : (
                                                                <><Sparkles className="w-4 h-4 mr-2" /> AI Evaluate</>
                                                            )}
                                                        </Button>
                                                    </div>
                                                </div>

                                                {/* Model Answer Display */}
                                                {showModelAnswer[q.id] && q.modelAnswer && (
                                                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                                                        <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                                                            <BookOpen className="w-4 h-4" /> Model Answer
                                                        </h4>
                                                        <p className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap">
                                                            {q.modelAnswer}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Evaluation Results */}
                                                {evaluation && (
                                                    <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                                                        <div className="flex items-center justify-between mb-3">
                                                            <h4 className="font-bold text-green-800 dark:text-green-200 flex items-center gap-2">
                                                                <Sparkles className="w-5 h-5" /> AI Evaluation
                                                            </h4>
                                                            <div className="text-2xl font-black text-green-700 dark:text-green-300">
                                                                {evaluation.score}/{q.marks}
                                                            </div>
                                                        </div>
                                                        <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">{evaluation.feedback}</p>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {evaluation.strengths.length > 0 && (
                                                                <div className="bg-card/50 dark:bg-black/20 p-3 rounded-lg">
                                                                    <h5 className="text-xs font-bold uppercase text-green-700 dark:text-green-300 mb-2 flex items-center gap-1">
                                                                        <ThumbsUp className="w-3 h-3" /> Strengths
                                                                    </h5>
                                                                    <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                                                                        {evaluation.strengths.map((s, i) => <li key={i}>• {s}</li>)}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                            {evaluation.improvements.length > 0 && (
                                                                <div className="bg-card/50 dark:bg-black/20 p-3 rounded-lg">
                                                                    <h5 className="text-xs font-bold uppercase text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-1">
                                                                        <AlertTriangle className="w-3 h-3" /> Improvements
                                                                    </h5>
                                                                    <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                                                                        {evaluation.improvements.map((i, idx) => <li key={idx}>• {i}</li>)}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {topicsWithMains.length === 0 && (
                    <div className="text-center py-20 text-neutral-500">
                        <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        No Mains questions available for the current topics yet.
                    </div>
                )}
            </div>
        </div>
    );
}


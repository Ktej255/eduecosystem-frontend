"use client";

import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Lightbulb, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExplanationFeedbackProps {
    topicTitle: string;
    keyPoints: string[]; // Keywords/phrases student should mention
    onComplete: (score: number) => void;
}

interface FeedbackResult {
    score: number;
    matchedPoints: string[];
    missedPoints: string[];
    feedback: string;
}

function analyzeExplanation(text: string, keyPoints: string[]): FeedbackResult {
    const normalizedText = text.toLowerCase().trim();
    const matchedPoints: string[] = [];
    const missedPoints: string[] = [];

    // Check each key point for presence in the explanation
    keyPoints.forEach(point => {
        // Split point into keywords for flexible matching
        const keywords = point.toLowerCase().split(/\s+/).filter(w => w.length > 3);
        const matchCount = keywords.filter(kw => normalizedText.includes(kw)).length;

        // Consider matched if at least 60% of keywords are present
        if (matchCount / keywords.length >= 0.6) {
            matchedPoints.push(point);
        } else {
            missedPoints.push(point);
        }
    });

    const score = Math.round((matchedPoints.length / keyPoints.length) * 100);

    // Generate feedback based on score
    let feedback = '';
    if (score >= 90) {
        feedback = "Excellent! You've demonstrated a thorough understanding of this topic.";
    } else if (score >= 70) {
        feedback = "Good job! You covered most key concepts. Review the missed points to strengthen your understanding.";
    } else if (score >= 50) {
        feedback = "Fair attempt. Consider rewatching the content and focusing on the missed concepts.";
    } else {
        feedback = "Your explanation needs more detail. Try to include specific facts and concepts from the lesson.";
    }

    return { score, matchedPoints, missedPoints, feedback };
}

export default function ExplanationFeedback({ topicTitle, keyPoints, onComplete }: ExplanationFeedbackProps) {
    const [explanation, setExplanation] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<FeedbackResult | null>(null);

    const handleSubmit = () => {
        if (explanation.length < 20) return;

        setIsAnalyzing(true);

        // Simulate analysis delay for better UX
        setTimeout(() => {
            const analysisResult = analyzeExplanation(explanation, keyPoints);
            setResult(analysisResult);
            setIsAnalyzing(false);
        }, 1500);
    };

    const handleRedo = () => {
        setResult(null);
        setExplanation('');
    };

    if (result) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card dark:bg-[#111] rounded-2xl border border-border overflow-hidden"
            >
                {/* Score Header */}
                <div className={`p-6 text-white ${result.score >= 70 ? 'bg-green-600' :
                        result.score >= 50 ? 'bg-amber-600' : 'bg-red-600'
                    }`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm opacity-80">Your Retention Score</div>
                            <div className="text-4xl font-bold">{result.score}%</div>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-card/20 flex items-center justify-center">
                            {result.score >= 70 ? (
                                <CheckCircle className="w-8 h-8" />
                            ) : (
                                <AlertCircle className="w-8 h-8" />
                            )}
                        </div>
                    </div>
                    <p className="mt-4 text-sm opacity-90">{result.feedback}</p>
                </div>

                {/* Key Points Breakdown */}
                <div className="p-6 space-y-4">
                    {result.matchedPoints.length > 0 && (
                        <div>
                            <h4 className="font-bold text-sm text-green-600 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                Covered Concepts ({result.matchedPoints.length})
                            </h4>
                            <ul className="space-y-1">
                                {result.matchedPoints.map((point, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground dark:text-muted-foreground flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {result.missedPoints.length > 0 && (
                        <div>
                            <h4 className="font-bold text-sm text-amber-600 mb-2 flex items-center gap-2">
                                <Lightbulb className="w-4 h-4" />
                                Points to Review ({result.missedPoints.length})
                            </h4>
                            <ul className="space-y-1">
                                {result.missedPoints.map((point, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground dark:text-muted-foreground flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex gap-3 pt-4">
                        <button
                            onClick={handleRedo}
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border font-medium hover:bg-muted dark:hover:bg-gray-900"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Try Again
                        </button>
                        <button
                            onClick={() => onComplete(result.score)}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="bg-card dark:bg-[#111] rounded-2xl border border-border p-6">
            <h2 className="text-xl font-bold mb-2">Explain What You Learned</h2>
            <p className="text-muted-foreground text-sm mb-4">
                Summarize <span className="font-medium text-muted-foreground dark:text-muted-foreground">{topicTitle}</span> in your own words.
                Include key facts and concepts.
            </p>

            <div className="relative mb-4">
                <textarea
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    className="w-full h-40 p-4 rounded-xl border border-border bg-muted dark:bg-[#0a0a0a] focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    placeholder="Type your explanation here. Try to mention specific terms, dates, names, and concepts..."
                    disabled={isAnalyzing}
                />
                <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                    {explanation.length} characters
                </div>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                    Minimum 20 characters required
                </p>
                <button
                    onClick={handleSubmit}
                    disabled={explanation.length < 20 || isAnalyzing}
                    className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2"
                >
                    {isAnalyzing ? (
                        <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            Analyzing...
                        </>
                    ) : (
                        'Analyze My Explanation'
                    )}
                </button>
            </div>
        </div>
    );
}

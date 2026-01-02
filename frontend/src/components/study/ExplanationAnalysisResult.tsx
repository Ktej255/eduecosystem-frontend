"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    CheckCircle,
    XCircle,
    Lightbulb,
    Star,
    TrendingUp,
    MessageSquare,
    Target,
} from "lucide-react";
import { StudyExplanationAnalysis } from "@/services/studySessionService";
import { cn } from "@/lib/utils";

interface ExplanationAnalysisResultProps {
    analysis: StudyExplanationAnalysis;
    onClose?: () => void;
    className?: string;
}

export default function ExplanationAnalysisResult({
    analysis,
    onClose,
    className,
}: ExplanationAnalysisResultProps) {
    const { analysis: data } = analysis;

    if (!data) {
        return (
            <Card className={cn("border-red-500/50", className)}>
                <CardContent className="p-6 text-center">
                    <XCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
                    <h3 className="font-semibold mb-2">Analysis Failed</h3>
                    <p className="text-sm text-gray-500">
                        {analysis.error || "Could not analyze your explanation. Please try again."}
                    </p>
                </CardContent>
            </Card>
        );
    }

    const scoreColor =
        data.comprehension_score >= 80
            ? "text-green-500"
            : data.comprehension_score >= 60
                ? "text-amber-500"
                : "text-red-500";

    const scoreBg =
        data.comprehension_score >= 80
            ? "bg-green-500/10"
            : data.comprehension_score >= 60
                ? "bg-amber-500/10"
                : "bg-red-500/10";

    return (
        <Card className={cn("overflow-hidden", className)}>
            <CardContent className="p-6 space-y-6">
                {/* Score Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold text-lg">Analysis Results</h3>
                        <p className="text-sm text-gray-500">{analysis.topic_name}</p>
                    </div>
                    <div className={cn("w-20 h-20 rounded-full flex items-center justify-center", scoreBg)}>
                        <span className={cn("text-3xl font-bold", scoreColor)}>
                            {data.comprehension_score}
                        </span>
                    </div>
                </div>

                {/* Ratings */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Clarity</span>
                            <span className="font-medium">{data.clarity_rating}/5</span>
                        </div>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={cn(
                                        "w-4 h-4",
                                        star <= data.clarity_rating
                                            ? "text-yellow-400 fill-yellow-400"
                                            : "text-gray-300"
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Depth</span>
                            <span className="font-medium">{data.depth_rating}/5</span>
                        </div>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={cn(
                                        "w-4 h-4",
                                        star <= data.depth_rating
                                            ? "text-purple-400 fill-purple-400"
                                            : "text-gray-300"
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-blue-500 mt-0.5" />
                        <p className="text-sm">{data.summary}</p>
                    </div>
                </div>

                {/* Key Concepts */}
                {data.key_concepts && data.key_concepts.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            Key Concepts Covered
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {data.key_concepts.map((concept, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                >
                                    {concept}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                {/* Missing Concepts */}
                {data.missing_concepts && data.missing_concepts.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-amber-600">
                            <Target className="w-4 h-4" />
                            Areas to Review
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {data.missing_concepts.map((concept, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                >
                                    {concept}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                {/* Strengths */}
                {data.strengths && data.strengths.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                            <Star className="w-4 h-4" />
                            Strengths
                        </div>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            {data.strengths.map((strength, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    {strength}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Improvements */}
                {data.improvements && data.improvements.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-purple-600">
                            <TrendingUp className="w-4 h-4" />
                            How to Improve
                        </div>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            {data.improvements.map((improvement, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <Lightbulb className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                    {improvement}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Transcript Preview */}
                {analysis.transcript && (
                    <details className="pt-4 border-t">
                        <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                            View Transcript
                        </summary>
                        <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-300 max-h-40 overflow-y-auto">
                            {analysis.transcript}
                        </div>
                    </details>
                )}
            </CardContent>
        </Card>
    );
}

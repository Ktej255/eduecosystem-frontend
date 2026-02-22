import React from 'react';
import { AlertCircle, BookOpen, BrainCircuit, CheckCircle, Target, TrendingUp } from 'lucide-react';
import type { MCQ } from '../data/mcq-utils';

interface GapAnalysisProps {
    totalQuestions: number;
    score: number;
    errors: {
        questionId: number | string;
        isKnowledgeGap?: boolean;
        isUnderstandingGap?: boolean;
        isAccuracyGap?: boolean;
        mcq: MCQ;
    }[];
}

export default function GapAnalysisReport({ totalQuestions, score, errors }: GapAnalysisProps) {
    // Categorize Errors
    const knowledgeGaps = errors.filter(e => e.isKnowledgeGap || e.mcq.cognitive_tag === 'Knowledge');
    const understandingGaps = errors.filter(e => e.isUnderstandingGap || e.mcq.cognitive_tag === 'Understanding');
    const accuracyGaps = errors.filter(e => e.isAccuracyGap || e.mcq.cognitive_tag === 'Accuracy');

    // Calculate Percentages (Simulated)
    const accuracy = Math.round((score / totalQuestions) * 100);

    return (
        <div className="bg-card rounded-2xl p-6 border border-border shadow-xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                The Protocol: Deep Diagnosis
            </h2>

            {/* Score Overview */}
            <div className="flex items-center gap-6 mb-8 bg-primary/10 p-4 rounded-xl border border-primary/20">
                <div className="text-center">
                    <span className="block text-4xl font-black text-primary">{score}/{totalQuestions}</span>
                    <span className="text-xs font-bold uppercase text-primary/70">Score</span>
                </div>
                <div className="w-px h-12 bg-primary/20" />
                <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">
                        {accuracy > 80 ? "Mastery Achieved 🚀" : accuracy > 60 ? "Solid Foundation 👍" : "Critical Gaps Detected ⚠️"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {accuracy > 80
                            ? "You are ready for Level 2 logic modules."
                            : accuracy > 60
                                ? "Review the specific chapters below before moving on."
                                : "Do not attempt Level 2 yet. Go back to Laxmikanth Level 1."}
                    </p>
                </div>
            </div>

            {/* The Why Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Knowledge Gap */}
                <div className={`p-4 rounded-xl border-2 ${knowledgeGaps.length > 0 ? 'border-destructive/20 bg-destructive/10' : 'border-border bg-muted/50'}`}>
                    <div className="flex items-center gap-2 mb-3 text-destructive font-bold">
                        <BookOpen className="w-5 h-5" />
                        Knowledge Gap
                    </div>
                    {knowledgeGaps.length > 0 ? (
                        <>
                            <div className="text-3xl font-black text-destructive mb-2">{knowledgeGaps.length}</div>
                            <p className="text-xs text-destructive/80 mb-3">Questions missed directly from the book.</p>
                            <div className="space-y-2">
                                {knowledgeGaps.map((err, i) => (
                                    <div key={i} className="text-xs bg-card p-2 rounded border border-destructive/20 text-foreground">
                                        Reading required: <span className="font-bold">{err.mcq.source_mapping?.chapter || 'Chapter ??'}</span> (Page {err.mcq.source_mapping?.page_ref})
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center py-6 text-green-600 opacity-60">
                            <CheckCircle className="w-8 h-8 mb-2" />
                            <span className="text-xs font-bold">Perfect Recall</span>
                        </div>
                    )}
                </div>

                {/* Understanding Gap */}
                <div className={`p-4 rounded-xl border-2 ${understandingGaps.length > 0 ? 'border-amber-500/20 bg-amber-500/10' : 'border-border bg-muted/50'}`}>
                    <div className="flex items-center gap-2 mb-3 text-amber-600 dark:text-amber-500 font-bold">
                        <BrainCircuit className="w-5 h-5" />
                        Understanding Gap
                    </div>
                    {understandingGaps.length > 0 ? (
                        <>
                            <div className="text-3xl font-black text-amber-600 mb-2">{understandingGaps.length}</div>
                            <p className="text-xs text-amber-600/80 mb-3">Conceptual flaws. Logic failed.</p>
                            <button className="w-full py-2 bg-amber-500/20 text-amber-700 dark:text-amber-300 rounded-lg text-xs font-bold hover:bg-amber-500/30 transition-colors">
                                Watch Concept Video 📺
                            </button>
                        </>
                    ) : (
                        <div className="flex flex-col items-center py-6 text-green-600 opacity-60">
                            <CheckCircle className="w-8 h-8 mb-2" />
                            <span className="text-xs font-bold">Logic Sound</span>
                        </div>
                    )}
                </div>

                {/* Accuracy Gap */}
                <div className={`p-4 rounded-xl border-2 ${accuracyGaps.length > 0 ? 'border-purple-500/20 bg-purple-500/10' : 'border-border bg-muted/50'}`}>
                    <div className="flex items-center gap-2 mb-3 text-purple-600 dark:text-purple-400 font-bold">
                        <Target className="w-5 h-5" />
                        Accuracy Gap
                    </div>
                    {accuracyGaps.length > 0 ? (
                        <>
                            <div className="text-3xl font-black text-purple-600 mb-2">{accuracyGaps.length}</div>
                            <p className="text-xs text-purple-600/80 mb-3">Silly mistakes or anxiety rushing.</p>
                            <div className="text-xs bg-purple-500/20 p-2 rounded text-purple-700 dark:text-purple-300">
                                🧠 <strong>Meditation Recommended</strong><br />
                                Your rushing indicates stress.
                            </div>
                            <a href="/student/meditation" className="mt-2 block w-full py-2 bg-purple-600 text-primary-foreground text-center rounded-lg text-xs font-bold hover:bg-purple-700 transition-colors">
                                Calm Mind (5 Min) 🧘
                            </a>
                        </>
                    ) : (
                        <div className="flex flex-col items-center py-6 text-green-600 opacity-60">
                            <CheckCircle className="w-8 h-8 mb-2" />
                            <span className="text-xs font-bold">Focus Sharp</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

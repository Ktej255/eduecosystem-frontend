"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, Star, Lightbulb, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

interface PostSessionExperienceFormProps {
    experienceId: number;
    preSessionData: {
        stress: number;
        anxiety: number;
        focus: number;
        emotionalState: string;
    };
    onComplete: () => void;
}

const EMOTIONAL_STATES = [
    { value: "Calm", color: "text-green-400", emoji: "😌" },
    { value: "Neutral", color: "text-blue-400", emoji: "😐" },
    { value: "Anxious", color: "text-yellow-400", emoji: "😰" },
    { value: "Stressed", color: "text-orange-400", emoji: "😣" },
    { value: "Overwhelmed", color: "text-red-400", emoji: "😫" }
];

export default function PostSessionExperienceForm({
    experienceId,
    preSessionData,
    onComplete
}: PostSessionExperienceFormProps) {
    const [stressLevel, setStressLevel] = useState<number>(5);
    const [anxietyLevel, setAnxietyLevel] = useState<number>(5);
    const [focusLevel, setFocusLevel] = useState<number>(5);
    const [emotionalState, setEmotionalState] = useState<string>("Calm");
    const [insights, setInsights] = useState<string>("");
    const [effectivenessRating, setEffectivenessRating] = useState<number>(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (effectivenessRating === 0) {
            alert("Please rate the session effectiveness");
            return;
        }

        setIsSubmitting(true);

        try {
            const { meditationService } = await import("@/services/meditationService");
            await meditationService.recordPostSessionExperience({
                experience_id: experienceId,
                stress_level: stressLevel,
                anxiety_level: anxietyLevel,
                focus_level: focusLevel,
                emotional_state: emotionalState,
                insights: insights || undefined,
                effectiveness_rating: effectivenessRating
            });

            onComplete();
        } catch (error) {
            console.error("Failed to record post-session experience:", error);
            // Still proceed even if recording fails
            onComplete();
        } finally {
            setIsSubmitting(false);
        }
    };

    const getImprovement = (pre: number, post: number, type: "stress" | "anxiety" | "focus") => {
        if (type === "focus") {
            return post - pre; // For focus, higher is better
        } else {
            return pre - post; // For stress/anxiety, lower is better
        }
    };

    const renderImprovementIndicator = (improvement: number) => {
        if (improvement > 0) {
            return (
                <div className="flex items-center gap-1 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">+{improvement}</span>
                </div>
            );
        } else if (improvement < 0) {
            return (
                <div className="flex items-center gap-1 text-red-400">
                    <TrendingDown className="w-4 h-4" />
                    <span className="text-sm font-semibold">{improvement}</span>
                </div>
            );
        } else {
            return (
                <div className="flex items-center gap-1 text-muted-foreground">
                    <Minus className="w-4 h-4" />
                    <span className="text-sm font-semibold">0</span>
                </div>
            );
        }
    };

    const stressImprovement = getImprovement(preSessionData.stress, stressLevel, "stress");
    const anxietyImprovement = getImprovement(preSessionData.anxiety, anxietyLevel, "anxiety");
    const focusImprovement = getImprovement(preSessionData.focus, focusLevel, "focus");

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
            style={{
                backgroundColor: '#0a0a0a',
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)'
            }}
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-4">
                    <CheckCircle2 className="w-4 h-4" />
                    Session Complete
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    How Do You Feel Now?
                </h1>
                <p className="text-muted-foreground">
                    Reflect on your experience and track your progress
                </p>
            </motion.div>

            {/* Form Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full max-w-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-2xl p-8 space-y-8"
            >
                {/* Stress Level with Comparison */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <label className="text-white font-semibold">Stress Level</label>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">
                                Before: {preSessionData.stress}
                            </span>
                            {renderImprovementIndicator(stressImprovement)}
                            <span className="text-2xl font-bold text-white">
                                {stressLevel}
                            </span>
                        </div>
                    </div>
                    <Slider
                        value={[stressLevel]}
                        onValueChange={(value) => setStressLevel(value[0])}
                        min={1}
                        max={10}
                        step={1}
                        className="w-full"
                    />
                </div>

                {/* Anxiety Level with Comparison */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <label className="text-white font-semibold">Anxiety Level</label>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">
                                Before: {preSessionData.anxiety}
                            </span>
                            {renderImprovementIndicator(anxietyImprovement)}
                            <span className="text-2xl font-bold text-white">
                                {anxietyLevel}
                            </span>
                        </div>
                    </div>
                    <Slider
                        value={[anxietyLevel]}
                        onValueChange={(value) => setAnxietyLevel(value[0])}
                        min={1}
                        max={10}
                        step={1}
                        className="w-full"
                    />
                </div>

                {/* Focus Level with Comparison */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <label className="text-white font-semibold">Focus Ability</label>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">
                                Before: {preSessionData.focus}
                            </span>
                            {renderImprovementIndicator(focusImprovement)}
                            <span className="text-2xl font-bold text-white">
                                {focusLevel}
                            </span>
                        </div>
                    </div>
                    <Slider
                        value={[focusLevel]}
                        onValueChange={(value) => setFocusLevel(value[0])}
                        min={1}
                        max={10}
                        step={1}
                        className="w-full"
                    />
                </div>

                {/* Emotional State */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <label className="text-white font-semibold">Emotional State</label>
                        <span className="text-sm text-muted-foreground">
                            Before: {preSessionData.emotionalState}
                        </span>
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                        {EMOTIONAL_STATES.map((state) => (
                            <button
                                key={state.value}
                                onClick={() => setEmotionalState(state.value)}
                                className={`
                                    p-4 rounded-xl border-2 transition-all text-center
                                    ${emotionalState === state.value
                                        ? 'border-green-500 bg-green-500/20'
                                        : 'border-neutral-700 bg-neutral-800/50 hover:border-neutral-600'
                                    }
                                `}
                            >
                                <div className="text-3xl mb-1">{state.emoji}</div>
                                <div className={`text-xs font-medium ${state.color}`}>
                                    {state.value}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Session Effectiveness Rating */}
                <div className="space-y-4">
                    <label className="text-white font-semibold">
                        How Effective Was This Session?
                    </label>
                    <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                                key={rating}
                                onClick={() => setEffectivenessRating(rating)}
                                className="group transition-transform hover:scale-110"
                            >
                                <Star
                                    className={`w-12 h-12 transition-colors ${rating <= effectivenessRating
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-muted-foreground group-hover:text-muted-foreground'
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                    {effectivenessRating > 0 && (
                        <p className="text-center text-sm text-muted-foreground">
                            {effectivenessRating === 5 && "Excellent! Highly effective"}
                            {effectivenessRating === 4 && "Very effective"}
                            {effectivenessRating === 3 && "Moderately effective"}
                            {effectivenessRating === 2 && "Somewhat effective"}
                            {effectivenessRating === 1 && "Not very effective"}
                        </p>
                    )}
                </div>

                {/* Insights */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-yellow-400" />
                        <label className="text-white font-semibold">
                            Session Insights <span className="text-muted-foreground text-sm font-normal">(Optional)</span>
                        </label>
                    </div>
                    <Textarea
                        value={insights}
                        onChange={(e) => setInsights(e.target.value)}
                        placeholder="What did you notice during the session? Any realizations or observations..."
                        className="w-full min-h-[100px] bg-neutral-800 border-neutral-700 text-white placeholder:text-muted-foreground resize-none"
                    />
                </div>

                {/* Submit Button */}
                <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting || effectivenessRating === 0}
                    className="w-full py-6 text-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500"
                >
                    {isSubmitting ? "Recording Progress..." : "Complete & Continue"}
                </Button>
            </motion.div>

            {/* Success glow animation */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, rgba(34,197,94,0.15) 0%, transparent 50%)'
                }}
            />
        </div>
    );
}

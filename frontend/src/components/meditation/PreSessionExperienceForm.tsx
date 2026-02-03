"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Heart, Focus, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

interface PreSessionExperienceFormProps {
    level: number;
    dayNumber: number;
    onComplete: (experienceId: number, data: {
        stress: number;
        anxiety: number;
        focus: number;
        emotionalState: string;
    }) => void;
    onSkip: () => void;
}

const EMOTIONAL_STATES = [
    { value: "Calm", color: "text-green-400", emoji: "😌" },
    { value: "Neutral", color: "text-blue-400", emoji: "😐" },
    { value: "Anxious", color: "text-yellow-400", emoji: "😰" },
    { value: "Stressed", color: "text-orange-400", emoji: "😣" },
    { value: "Overwhelmed", color: "text-red-400", emoji: "😫" }
];

export default function PreSessionExperienceForm({
    level,
    dayNumber,
    onComplete,
    onSkip
}: PreSessionExperienceFormProps) {
    const [stressLevel, setStressLevel] = useState<number>(5);
    const [anxietyLevel, setAnxietyLevel] = useState<number>(5);
    const [focusLevel, setFocusLevel] = useState<number>(5);
    const [emotionalState, setEmotionalState] = useState<string>("Neutral");
    const [concerns, setConcerns] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            const { meditationService } = await import("@/services/meditationService");
            const response = await meditationService.recordPreSessionExperience({
                level,
                day_number: dayNumber,
                stress_level: stressLevel,
                anxiety_level: anxietyLevel,
                focus_level: focusLevel,
                emotional_state: emotionalState,
                concerns: concerns || undefined
            });

            onComplete(response.id, {
                stress: stressLevel,
                anxiety: anxietyLevel,
                focus: focusLevel,
                emotionalState: emotionalState
            });
        } catch (error) {
            console.error("Failed to record pre-session experience:", error);
            // Still proceed to session even if recording fails
            onSkip();
        } finally {
            setIsSubmitting(false);
        }
    };

    const getLevelColor = (value: number) => {
        if (value <= 3) return "bg-green-500";
        if (value <= 6) return "bg-yellow-500";
        return "bg-red-500";
    };

    const getLevelLabel = (value: number, type: "stress" | "anxiety" | "focus") => {
        if (type === "focus") {
            // For focus, higher is better
            if (value <= 3) return "Very Low";
            if (value <= 6) return "Moderate";
            return "High";
        } else {
            // For stress/anxiety, lower is better
            if (value <= 3) return "Low";
            if (value <= 6) return "Moderate";
            return "High";
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
            style={{
                backgroundColor: '#0a0a0a',
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)'
            }}
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
                    <Brain className="w-4 h-4" />
                    Mental State Check-In
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    How Are You Feeling?
                </h1>
                <p className="text-gray-400">
                    Take a moment to reflect on your current mental state
                </p>
            </motion.div>

            {/* Form Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full max-w-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-2xl p-8 space-y-8"
            >
                {/* Stress Level */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Heart className="w-5 h-5 text-red-400" />
                            <label className="text-white font-semibold">Stress Level</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`text-2xl font-bold ${getLevelColor(stressLevel).replace('bg-', 'text-')}`}>
                                {stressLevel}
                            </span>
                            <span className="text-sm text-gray-400">
                                {getLevelLabel(stressLevel, "stress")}
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
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Very Calm</span>
                        <span>Extremely Stressed</span>
                    </div>
                </div>

                {/* Anxiety Level */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-yellow-400" />
                            <label className="text-white font-semibold">Anxiety Level</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`text-2xl font-bold ${getLevelColor(anxietyLevel).replace('bg-', 'text-')}`}>
                                {anxietyLevel}
                            </span>
                            <span className="text-sm text-gray-400">
                                {getLevelLabel(anxietyLevel, "anxiety")}
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
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Very Relaxed</span>
                        <span>Very Anxious</span>
                    </div>
                </div>

                {/* Focus Level */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Focus className="w-5 h-5 text-blue-400" />
                            <label className="text-white font-semibold">Focus Ability</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`text-2xl font-bold ${focusLevel <= 3 ? 'text-red-500' :
                                focusLevel <= 6 ? 'text-yellow-500' :
                                    'text-green-500'
                                }`}>
                                {focusLevel}
                            </span>
                            <span className="text-sm text-gray-400">
                                {getLevelLabel(focusLevel, "focus")}
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
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Can't Focus</span>
                        <span>Highly Focused</span>
                    </div>
                </div>

                {/* Emotional State */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-purple-400" />
                        <label className="text-white font-semibold">Emotional State</label>
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                        {EMOTIONAL_STATES.map((state) => (
                            <button
                                key={state.value}
                                onClick={() => setEmotionalState(state.value)}
                                className={`
                                    p-4 rounded-xl border-2 transition-all text-center
                                    ${emotionalState === state.value
                                        ? 'border-indigo-500 bg-indigo-500/20'
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

                {/* Concerns */}
                <div className="space-y-4">
                    <label className="text-white font-semibold">
                        Any Specific Concerns? <span className="text-gray-500 text-sm font-normal">(Optional)</span>
                    </label>
                    <Textarea
                        value={concerns}
                        onChange={(e) => setConcerns(e.target.value)}
                        placeholder="What's on your mind? Share any worries or thoughts..."
                        className="w-full min-h-[100px] bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 resize-none"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                    <Button
                        variant="outline"
                        onClick={onSkip}
                        className="flex-1 border-gray-700 text-gray-400 hover:text-white"
                        disabled={isSubmitting}
                    >
                        Skip for Now
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
                    >
                        {isSubmitting ? "Recording..." : "Continue to Session"}
                    </Button>
                </div>
            </motion.div>

            {/* Subtle breathing animation */}
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
                    background: 'radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, transparent 50%)'
                }}
            />
        </div>
    );
}

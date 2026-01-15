
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Award, BookOpen, Crown } from "lucide-react";
import { ExamData } from "@/data/exams";
import api from "@/lib/api";

interface OnboardingFlowProps {
    examId: string;
    exam: ExamData | undefined;
}

type Step = "video" | "level-select" | "redirecting";

export default function OnboardingFlow({ examId, exam }: OnboardingFlowProps) {
    const router = useRouter();
    const [step, setStep] = useState<Step>("video");
    const [videoCompleted, setVideoCompleted] = useState(false);

    const handleVideoComplete = () => {
        setVideoCompleted(true);
        setTimeout(() => setStep("level-select"), 500);
    };

    const handleLevelSelect = async (level: string) => {
        setStep("redirecting");

        try {
            // Persist selection to backend
            await api.put("/users/me", {
                revision_level: level,
                revision_exam_id: examId
            });
        } catch (error) {
            console.error("Failed to save revision preferences:", error);
            // We continue redirecting even if save fails, to not block the user
        }

        // Simulate processing delay for UX
        setTimeout(() => {
            // Redirect to the persona-specific dashboard
            router.push(`/student/revision/${level}?exam=${examId}`);
        }, 1000);
    };

    return (
        <div className="w-full max-w-4xl mx-auto min-h-[60vh] flex flex-col items-center justify-center p-6">
            <AnimatePresence mode="wait">

                {step === "video" && (
                    <motion.div
                        key="video-step"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="w-full flex flex-col items-center space-y-8"
                    >
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-grapho-ink dark:text-white">
                                Welcome to <span className="text-grapho-gold">{exam?.shortName}</span> Revision
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto">
                                Watch this short introduction to understand how our AI-powered revision engine works.
                            </p>
                        </div>

                        {/* Video Placeholder */}
                        <div className="relative w-full aspect-video bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden group border border-neutral-800">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={() => setVideoCompleted(true)} // Simulate watching
                                    className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform"
                                >
                                    <Play className="w-8 h-8 fill-current ml-1" />
                                </button>
                            </div>
                            {/* Progress Bar Simulation */}
                            <div className="absolute bottom-0 left-0 h-1 bg-grapho-gold" style={{ width: videoCompleted ? '100%' : '5%', transition: 'width 2s' }} />
                        </div>

                        <button
                            onClick={handleVideoComplete}
                            className={`btn-ink-hover px-8 py-3 rounded-full font-bold text-lg transition-all duration-500 ${videoCompleted
                                ? "bg-grapho-ink text-white translate-y-0 opacity-100"
                                : "bg-neutral-200 text-neutral-400 cursor-not-allowed translate-y-4 opacity-0 pointer-events-none"
                                }`}
                        >
                            I have completed the intro
                        </button>
                    </motion.div>
                )}

                {step === "level-select" && (
                    <motion.div
                        key="level-step"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="w-full flex flex-col items-center space-y-12"
                    >
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-grapho-ink dark:text-white">
                                Choose Your <span className="text-grapho-gold">Path</span>
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto">
                                Tell us where you stand, and we will customize your revision journey.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 w-full">
                            <LevelCard
                                level="beginner"
                                title="Beginner"
                                icon={<BookOpen className="w-6 h-6 text-level-1-primary" />}
                                desc="Starting my preparation. Need basics and fundamentals."
                                onSelect={() => handleLevelSelect("beginner")}
                                color="border-level-1-primary"
                            />
                            <LevelCard
                                level="intermediate"
                                title="Intermediate"
                                icon={<Award className="w-6 h-6 text-level-2-primary" />}
                                desc="Have studied before. Need structured revision and practice."
                                onSelect={() => handleLevelSelect("intermediate")}
                                color="border-level-2-primary"
                            />
                            <LevelCard
                                level="advanced"
                                title="Advanced"
                                icon={<Crown className="w-6 h-6 text-level-3-primary" />}
                                desc="Ready for exam. Need gap analysis and polishing."
                                onSelect={() => handleLevelSelect("advanced")}
                                color="border-level-3-primary"
                            />
                        </div>
                    </motion.div>
                )}

                {step === "redirecting" && (
                    <motion.div
                        key="redirect-step"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center space-y-6"
                    >
                        <div className="w-16 h-16 border-4 border-neutral-200 border-t-grapho-gold rounded-full animate-spin" />
                        <h3 className="text-2xl font-display font-bold">Setting up your dashboard...</h3>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
}

function LevelCard({ level, title, icon, desc, onSelect, color }: any) {
    return (
        <button
            onClick={onSelect}
            className={`group text-left p-8 rounded-2xl bg-white dark:bg-neutral-800 border-2 ${color} hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all hover:scale-105 shadow-sm hover:shadow-xl`}
        >
            <div className={`w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-grapho-ink dark:text-white group-hover:text-primary-blue transition-colors">{title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{desc}</p>
        </button>
    )
}

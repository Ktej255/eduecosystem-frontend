
"use client";

import React, { useState } from "react";
import GlobalHero from "@/components/revision-portal/GlobalHero";
import ExamCard from "@/components/revision-portal/ExamCard";
import { exams, examCategories } from "@/data/exams";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Target, Brain } from "lucide-react";

export default function RevisionGlobalPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredExams = activeCategory === "All"
        ? exams
        : exams.filter(exam => exam.category === activeCategory);

    return (
        <div className="flex flex-col w-full pb-20">
            <GlobalHero />

            {/* Directory Section */}
            <section className="container mx-auto px-4 md:px-6 py-20 relative z-10" id="explore">
                <div className="flex flex-col items-center mb-12 space-y-4">
                    <h2 className="text-4xl font-display font-bold text-center text-grapho-ink dark:text-neutral-100">
                        Explore Examinations
                    </h2>
                    <div className="h-1 w-20 bg-grapho-gold rounded-full" />

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {examCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                        ? "bg-grapho-ink text-white shadow-lg scale-105"
                                        : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 hover:scale-105 border border-neutral-200 dark:border-neutral-700"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredExams.map((exam, index) => (
                        <ExamCard key={exam.id} exam={exam} index={index} />
                    ))}
                </div>

                {filteredExams.length === 0 && (
                    <div className="text-center py-20 text-neutral-500">
                        No exams found in this category yet. Stay tuned!
                    </div>
                )}
            </section>

            {/* Why Choose Us / Features */}
            <section className="w-full py-20 bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute right-0 top-0 w-96 h-96 bg-accent-green/10 rounded-full blur-[80px]" />
                    <div className="absolute left-0 bottom-0 w-96 h-96 bg-accent-yellow/10 rounded-full blur-[80px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-grapho-ink dark:text-white leading-tight">
                                Why Top Rankers Choose <span className="text-primary-blue">Eduecosystem?</span>
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                We don't just provide content; we engineer success. Our platform adapts to your learning style, ensuring maximum retention and efficiency.
                            </p>

                            <div className="space-y-6">
                                <FeatureItem
                                    icon={<Brain className="w-6 h-6 text-purple-600" />}
                                    title="Cognitive Optimization"
                                    desc="Scientific revision schedules based on Ebbinghaus forgetting curve."
                                />
                                <FeatureItem
                                    icon={<Target className="w-6 h-6 text-red-500" />}
                                    title="Precision Targeting"
                                    desc="Pinpoint your weak areas with AI-driven analytics and micro-tests."
                                />
                                <FeatureItem
                                    icon={<Zap className="w-6 h-6 text-amber-500" />}
                                    title="Interactive Learning"
                                    desc="Gamified modules, flashcards, and live quizzes to keep you engaged."
                                />
                            </div>
                        </div>

                        <div className="relative">
                            {/* Abstract Visual Representation features */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-neutral-800 p-8 border border-neutral-100 dark:border-neutral-700">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-xl font-bold">Your Progress</h3>
                                    <span className="text-green-500 font-bold text-sm">+24% This Week</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "75%" }}
                                            transition={{ duration: 1.5 }}
                                            className="h-full bg-primary-blue"
                                        />
                                    </div>
                                    <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "60%" }}
                                            transition={{ duration: 1.5, delay: 0.2 }}
                                            className="h-full bg-purple-500"
                                        />
                                    </div>
                                    <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "90%" }}
                                            transition={{ duration: 1.5, delay: 0.4 }}
                                            className="h-full bg-accent-green"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-neutral-50 rounded-xl text-center">
                                        <div className="text-3xl font-bold text-grapho-ink">98%</div>
                                        <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Retention</div>
                                    </div>
                                    <div className="p-4 bg-neutral-50 rounded-xl text-center">
                                        <div className="text-3xl font-bold text-grapho-ink">120+</div>
                                        <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Tests Taking</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-lg text-grapho-ink dark:text-neutral-200">{title}</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mt-1">{desc}</p>
            </div>
        </div>
    )
}


"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function GlobalHero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            {/* Background Gradients & Organic Shapes */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-level-1-primary/20 rounded-full blur-[100px] animate-blob mix-blend-multiply filter opacity-70" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-level-2-primary/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter opacity-70" />
                <div className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] bg-purple-300/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter opacity-70" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 border border-grapho-gold/30 backdrop-blur-sm shadow-sm">
                        <Sparkles className="w-4 h-4 text-grapho-gold" />
                        <span className="text-sm font-medium text-grapho-ink dark:text-grapho-cream">
                            The Ultimate Revision Ecosystem
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-grapho-ink dark:text-white leading-[1.1]">
                        Master Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-level-1-primary via-level-2-primary to-grapho-gold animate-gradient-x">
                            Next Big Exam
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-sans leading-relaxed">
                        A scientifically designed, AI-powered revision portal tailored for
                        UPSC, NEET, JEE and more. Experience the future of learning.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                    >
                        <button className="btn-ink-hover group relative px-8 py-4 rounded-full bg-grapho-ink dark:bg-white text-white dark:text-grapho-ink font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Free 30-Day Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button className="px-8 py-4 rounded-full border-2 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium text-lg hover:border-grapho-gold hover:text-grapho-gold transition-all duration-300 bg-white/50 backdrop-blur-sm">
                            View All Exams
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-neutral-400 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}

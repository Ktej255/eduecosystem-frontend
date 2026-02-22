"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Link,
    Lightbulb,
    Send,
    CheckCircle,
    Sparkles,
    ArrowRight,
    Coins,
    X,
} from "lucide-react";

interface ConnectTheDotsProps {
    currentTopic: string;
    previousTopics: string[];
    onSubmit?: (connection: string) => void;
    onSkip?: () => void;
    coinsReward?: number;
}

// AI-generated prompts based on topics
const CONNECTION_PROMPTS = [
    "How does {current} build upon {previous}?",
    "What's the common principle between {current} and {previous}?",
    "How would you apply both {current} and {previous} together?",
    "What would you lose if you only practiced {current} without {previous}?",
];

export default function ConnectTheDots({
    currentTopic = "Om Chanting",
    previousTopics = ["Breath Awareness", "Counting Breath"],
    onSubmit,
    onSkip,
    coinsReward = 15,
}: ConnectTheDotsProps) {
    const [connection, setConnection] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showReward, setShowReward] = useState(false);
    const [selectedPrevious, setSelectedPrevious] = useState(previousTopics[0]);

    const getRandomPrompt = () => {
        const prompt = CONNECTION_PROMPTS[Math.floor(Math.random() * CONNECTION_PROMPTS.length)];
        return prompt
            .replace("{current}", currentTopic)
            .replace("{previous}", selectedPrevious);
    };

    const [currentPrompt] = useState(getRandomPrompt());

    const handleSubmit = () => {
        if (connection.trim().length < 10) return;

        setIsSubmitted(true);
        onSubmit?.(connection);

        // Show coin reward animation
        setTimeout(() => setShowReward(true), 500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl" />

            {/* Header */}
            <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                    <motion.div
                        animate={{
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Link className="w-5 h-5 text-purple-400" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white">Connect The Dots</h3>
                </div>

                {/* Reward badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30">
                    <Coins className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium text-amber-400">+{coinsReward}</span>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {!isSubmitted ? (
                    <motion.div
                        key="input"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative z-10 space-y-4"
                    >
                        {/* Topic Connection Visual */}
                        <div className="flex items-center justify-center gap-2 py-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30"
                            >
                                <p className="text-sm text-indigo-400">{selectedPrevious}</p>
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="w-5 h-5 text-muted-foreground" />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/30"
                            >
                                <p className="text-sm text-purple-400">{currentTopic}</p>
                            </motion.div>
                        </div>

                        {/* Select previous topic */}
                        {previousTopics.length > 1 && (
                            <div className="flex items-center gap-2 justify-center">
                                <p className="text-xs text-muted-foreground">Connect with:</p>
                                {previousTopics.map((topic) => (
                                    <button
                                        key={topic}
                                        onClick={() => setSelectedPrevious(topic)}
                                        className={`
                                            px-3 py-1 rounded-full text-xs transition-all
                                            ${selectedPrevious === topic
                                                ? "bg-indigo-500/30 text-indigo-400 border border-indigo-500/50"
                                                : "bg-neutral-800 text-muted-foreground hover:bg-neutral-700"
                                            }
                                        `}
                                    >
                                        {topic}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Prompt */}
                        <div className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700">
                            <div className="flex items-start gap-2">
                                <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {currentPrompt}
                                </p>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="relative">
                            <textarea
                                value={connection}
                                onChange={(e) => setConnection(e.target.value)}
                                placeholder="Write your connection in one sentence..."
                                className="w-full h-24 p-4 rounded-xl bg-neutral-800 border border-neutral-700 
                                        text-white placeholder-gray-500 resize-none focus:outline-none 
                                        focus:border-purple-500 transition-colors"
                            />
                            <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                                {connection.length}/150
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleSubmit}
                                disabled={connection.trim().length < 10}
                                className={`
                                    flex-1 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all
                                    ${connection.trim().length >= 10
                                        ? "bg-purple-600 hover:bg-purple-500 text-white"
                                        : "bg-neutral-800 text-muted-foreground cursor-not-allowed"
                                    }
                                `}
                            >
                                <Send className="w-4 h-4" />
                                Submit Connection
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={onSkip}
                                className="px-4 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-muted-foreground transition-colors"
                            >
                                Skip
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative z-10 py-8 text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", duration: 0.5 }}
                        >
                            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                        </motion.div>

                        <h4 className="text-xl font-bold text-white mb-2">
                            Connection Made!
                        </h4>
                        <p className="text-muted-foreground mb-4">
                            You're building a web of knowledge
                        </p>

                        {/* Reward Animation */}
                        <AnimatePresence>
                            {showReward && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center justify-center gap-2"
                                >
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 10, -10, 0],
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Sparkles className="w-6 h-6 text-amber-400" />
                                    </motion.div>
                                    <span className="text-2xl font-bold text-amber-400">
                                        +{coinsReward} Coins
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

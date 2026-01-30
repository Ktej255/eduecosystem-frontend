"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle,
    Circle,
    Flame,
    Clock,
    ChevronDown,
    ChevronUp,
    Plus,
    Coins,
    Target,
    Sparkles,
} from "lucide-react";
import { useHabits, Habit } from "@/context/HabitContext";

interface HabitTrackerProps {
    habits?: Habit[];
    onComplete?: (habitId: number) => void;
    onAddHabit?: () => void;
}

export default function HabitTracker({
    habits: propHabits,
    onComplete,
    onAddHabit,
}: HabitTrackerProps) {
    const { habits: contextHabits, completeHabit, addHabit } = useHabits();
    const habits = propHabits || contextHabits;

    const [isExpanded, setIsExpanded] = useState(true);
    const [completingId, setCompletingId] = useState<number | null>(null);
    const [showCoinPop, setShowCoinPop] = useState<number | null>(null);

    // Calculate completed based on today's status
    const today = new Date().toISOString().split('T')[0];
    const completedCount = habits.filter((h) => h.lastCompletedDate === today).length;

    // Helper to check completion status
    const isCompletedToday = (habit: Habit) => habit.lastCompletedDate === today;

    const progressPercent = habits.length > 0 ? (completedCount / habits.length) * 100 : 0;

    const handleComplete = (habit: Habit) => {
        if (isCompletedToday(habit)) return;

        setCompletingId(habit.id);
        setTimeout(() => {
            setCompletingId(null);
            setShowCoinPop(habit.id);

            // Call context action
            completeHabit(habit.id);

            onComplete?.(habit.id);

            setTimeout(() => setShowCoinPop(null), 1500);
        }, 500);
    };

    const handleAddHabitDefault = () => {
        // Simple prompt for now, or just add a placeholder
        // In a real app, this should open a modal.
        // For Quick Win, let's add a "Drink Water" habit if not exists
        const name = prompt("Enter habit name (e.g., Read 10 pages):");
        if (name) {
            addHabit({
                name,
                icon: "✨",
                category: "productivity",
                coinsPerCompletion: 5,
                reminderTime: ""
            });
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "mindfulness":
                return "bg-purple-500/20 text-purple-400 border-purple-500/30";
            case "study":
                return "bg-blue-500/20 text-blue-400 border-blue-500/30";
            case "health":
                return "bg-green-500/20 text-green-400 border-green-500/30";
            case "productivity":
                return "bg-orange-500/20 text-orange-400 border-orange-500/30";
            default:
                return "bg-gray-500/20 text-gray-400 border-gray-500/30";
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 overflow-hidden"
        >
            {/* Header */}
            <div
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-neutral-800/50 transition-colors"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Today's Habits</h3>
                        <p className="text-sm text-gray-400">
                            {completedCount}/{habits.length} completed
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Progress ring */}
                    <div className="relative w-10 h-10">
                        <svg className="w-10 h-10 transform -rotate-90">
                            <circle
                                cx="20"
                                cy="20"
                                r="16"
                                stroke="#333"
                                strokeWidth="3"
                                fill="none"
                            />
                            <motion.circle
                                cx="20"
                                cy="20"
                                r="16"
                                stroke="#10b981"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: progressPercent / 100 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    strokeDasharray: "100",
                                    strokeDashoffset: 0,
                                }}
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-emerald-400">
                            {Math.round(progressPercent)}%
                        </span>
                    </div>

                    {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                </div>
            </div>

            {/* Habit List */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-neutral-800"
                    >
                        <div className="p-4 space-y-3">
                            {habits.map((habit, index) => (
                                <motion.div
                                    key={habit.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`
                                        flex items-center gap-3 p-3 rounded-xl
                                        ${isCompletedToday(habit)
                                            ? "bg-emerald-500/10 border border-emerald-500/30"
                                            : "bg-neutral-800/50 border border-neutral-700"
                                        }
                                        transition-all relative
                                    `}
                                >
                                    {/* Checkbox */}
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleComplete(habit)}
                                        disabled={isCompletedToday(habit)}
                                        className="flex-shrink-0"
                                    >
                                        {completingId === habit.id ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Sparkles className="w-6 h-6 text-amber-400" />
                                            </motion.div>
                                        ) : isCompletedToday(habit) ? (
                                            <CheckCircle className="w-6 h-6 text-emerald-400" />
                                        ) : (
                                            <Circle className="w-6 h-6 text-gray-500 hover:text-gray-300" />
                                        )}
                                    </motion.button>

                                    {/* Icon */}
                                    <span className="text-2xl">{habit.icon}</span>

                                    {/* Details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <p
                                                className={`font-medium ${isCompletedToday(habit)
                                                    ? "text-emerald-400 line-through"
                                                    : "text-white"
                                                    }`}
                                            >
                                                {habit.name}
                                            </p>
                                            <span
                                                className={`px-2 py-0.5 rounded-full text-xs border ${getCategoryColor(
                                                    habit.category
                                                )}`}
                                            >
                                                {habit.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                                            {habit.reminderTime && (
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {habit.reminderTime}
                                                </span>
                                            )}
                                            <span className="flex items-center gap-1">
                                                <Flame className="w-3 h-3 text-orange-400" />
                                                {habit.currentStreak} day streak
                                            </span>
                                        </div>
                                    </div>

                                    {/* Coins */}
                                    <div className="flex items-center gap-1 text-amber-400">
                                        <Coins className="w-4 h-4" />
                                        <span className="text-sm font-medium">
                                            +{habit.coinsPerCompletion}
                                        </span>
                                    </div>

                                    {/* Coin pop animation */}
                                    <AnimatePresence>
                                        {showCoinPop === habit.id && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, y: -30, scale: 1 }}
                                                exit={{ opacity: 0, y: -50 }}
                                                className="absolute right-4 top-0 flex items-center gap-1 text-amber-400 font-bold"
                                            >
                                                <Coins className="w-5 h-5" />
                                                +{habit.coinsPerCompletion}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}

                            {/* Add Habit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={onAddHabit || handleAddHabitDefault}
                                className="w-full p-3 rounded-xl border-2 border-dashed border-neutral-700 
                                         hover:border-neutral-600 text-gray-500 hover:text-gray-400
                                         flex items-center justify-center gap-2 transition-colors"
                            >
                                <Plus className="w-5 h-5" />
                                Add New Habit
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

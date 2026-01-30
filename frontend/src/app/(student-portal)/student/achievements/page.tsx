"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Trophy, Star, Flame, BookOpen, Target, Zap, Award, Medal,
    Crown, Shield, Rocket, Brain, Calendar, CheckCircle, TrendingUp,
    Lock, Sparkles
} from 'lucide-react';
import { useGamification } from '@/context/GamificationContext';

// Achievement definitions
const ACHIEVEMENTS = [
    // Streak Achievements
    { id: 'streak_3', name: 'Getting Started', description: '3-day study streak', icon: Flame, category: 'Streaks', requirement: 3, type: 'streak', color: 'from-orange-500 to-red-500' },
    { id: 'streak_7', name: 'Week Warrior', description: '7-day study streak', icon: Flame, category: 'Streaks', requirement: 7, type: 'streak', color: 'from-orange-500 to-red-600' },
    { id: 'streak_30', name: 'Monthly Master', description: '30-day study streak', icon: Flame, category: 'Streaks', requirement: 30, type: 'streak', color: 'from-red-500 to-pink-600' },
    { id: 'streak_100', name: 'Century Champion', description: '100-day study streak', icon: Crown, category: 'Streaks', requirement: 100, type: 'streak', color: 'from-yellow-400 to-amber-600' },

    // XP Achievements
    { id: 'xp_500', name: 'XP Collector', description: 'Earn 500 XP', icon: Star, category: 'Progress', requirement: 500, type: 'xp', color: 'from-blue-500 to-indigo-600' },
    { id: 'xp_2000', name: 'Rising Star', description: 'Earn 2000 XP', icon: Star, category: 'Progress', requirement: 2000, type: 'xp', color: 'from-indigo-500 to-purple-600' },
    { id: 'xp_5000', name: 'XP Master', description: 'Earn 5000 XP', icon: Trophy, category: 'Progress', requirement: 5000, type: 'xp', color: 'from-purple-500 to-pink-600' },
    { id: 'xp_10000', name: 'Legend', description: 'Earn 10000 XP', icon: Crown, category: 'Progress', requirement: 10000, type: 'xp', color: 'from-yellow-400 to-orange-500' },

    // Level Achievements
    { id: 'level_5', name: 'Level 5 Scholar', description: 'Reach Level 5', icon: Rocket, category: 'Levels', requirement: 5, type: 'level', color: 'from-emerald-500 to-teal-600' },
    { id: 'level_10', name: 'Expert Aspirant', description: 'Reach Level 10', icon: Shield, category: 'Levels', requirement: 10, type: 'level', color: 'from-teal-500 to-cyan-600' },
    { id: 'level_20', name: 'Master Aspirant', description: 'Reach Level 20', icon: Award, category: 'Levels', requirement: 20, type: 'level', color: 'from-cyan-500 to-blue-600' },

    // Subject Mastery
    { id: 'polity_master', name: 'Polity Pro', description: 'Complete 50+ Polity MCQs', icon: BookOpen, category: 'Subjects', requirement: 50, type: 'subject', color: 'from-blue-600 to-indigo-700' },
    { id: 'history_master', name: 'History Buff', description: 'Complete 50+ History MCQs', icon: BookOpen, category: 'Subjects', requirement: 50, type: 'subject', color: 'from-amber-600 to-orange-700' },
    { id: 'geography_master', name: 'Geo Expert', description: 'Complete 50+ Geography MCQs', icon: BookOpen, category: 'Subjects', requirement: 50, type: 'subject', color: 'from-emerald-600 to-green-700' },

    // Special Achievements
    { id: 'early_bird', name: 'Early Bird', description: 'Study before 6 AM', icon: Sparkles, category: 'Special', requirement: 1, type: 'special', color: 'from-pink-500 to-rose-600' },
    { id: 'night_owl', name: 'Night Owl', description: 'Study after 11 PM', icon: Brain, category: 'Special', requirement: 1, type: 'special', color: 'from-purple-600 to-indigo-700' },
    { id: 'perfect_week', name: 'Perfect Week', description: 'Complete all daily goals for a week', icon: Target, category: 'Special', requirement: 1, type: 'special', color: 'from-green-500 to-emerald-600' },
];

const CATEGORIES = ['All', 'Streaks', 'Progress', 'Levels', 'Subjects', 'Special'];

export default function AchievementsPage() {
    const { xp, level, streak, longestStreak, badges } = useGamification();
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    const checkAchievementUnlocked = (achievement: typeof ACHIEVEMENTS[0]) => {
        switch (achievement.type) {
            case 'streak':
                return longestStreak >= achievement.requirement;
            case 'xp':
                return xp >= achievement.requirement;
            case 'level':
                return level >= achievement.requirement;
            case 'subject':
                return badges.includes(achievement.id);
            case 'special':
                return badges.includes(achievement.id);
            default:
                return false;
        }
    };

    const getProgress = (achievement: typeof ACHIEVEMENTS[0]) => {
        switch (achievement.type) {
            case 'streak':
                return Math.min((longestStreak / achievement.requirement) * 100, 100);
            case 'xp':
                return Math.min((xp / achievement.requirement) * 100, 100);
            case 'level':
                return Math.min((level / achievement.requirement) * 100, 100);
            default:
                return badges.includes(achievement.id) ? 100 : 0;
        }
    };

    const filteredAchievements = selectedCategory === 'All'
        ? ACHIEVEMENTS
        : ACHIEVEMENTS.filter(a => a.category === selectedCategory);

    const unlockedCount = ACHIEVEMENTS.filter(a => checkAchievementUnlocked(a)).length;
    const totalCount = ACHIEVEMENTS.length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#0a0a0a] dark:to-[#111] p-4 md:p-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <div className="flex items-center gap-3 mb-2">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Achievement Gallery</h1>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                    Track your progress and unlock rewards as you master UPSC preparation.
                </p>
            </motion.div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-yellow-500 to-amber-600 p-5 rounded-2xl text-white shadow-lg"
                >
                    <Trophy className="w-6 h-6 mb-2 opacity-80" />
                    <p className="text-2xl font-bold">{unlockedCount}/{totalCount}</p>
                    <p className="text-xs opacity-80">Achievements Unlocked</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-blue-500 to-indigo-600 p-5 rounded-2xl text-white shadow-lg"
                >
                    <Star className="w-6 h-6 mb-2 opacity-80" />
                    <p className="text-2xl font-bold">{xp.toLocaleString()}</p>
                    <p className="text-xs opacity-80">Total XP Earned</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-emerald-500 to-teal-600 p-5 rounded-2xl text-white shadow-lg"
                >
                    <TrendingUp className="w-6 h-6 mb-2 opacity-80" />
                    <p className="text-2xl font-bold">Level {level}</p>
                    <p className="text-xs opacity-80">Current Level</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-orange-500 to-red-600 p-5 rounded-2xl text-white shadow-lg"
                >
                    <Flame className="w-6 h-6 mb-2 opacity-80" />
                    <p className="text-2xl font-bold">{longestStreak} days</p>
                    <p className="text-xs opacity-80">Longest Streak</p>
                </motion.div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                            ${selectedCategory === cat
                                ? 'bg-indigo-600 text-white shadow-lg'
                                : 'bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAchievements.map((achievement, index) => {
                    const isUnlocked = checkAchievementUnlocked(achievement);
                    const progress = getProgress(achievement);
                    const Icon = achievement.icon;

                    return (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`relative p-5 rounded-2xl border transition-all overflow-hidden
                                ${isUnlocked
                                    ? 'bg-white dark:bg-[#111] border-transparent shadow-lg'
                                    : 'bg-gray-50 dark:bg-[#0a0a0a] border-gray-200 dark:border-gray-800 opacity-60'
                                }`}
                        >
                            {/* Background Gradient for Unlocked */}
                            {isUnlocked && (
                                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10`} />
                            )}

                            <div className="relative z-10 flex items-start gap-4">
                                <div className={`p-3 rounded-xl ${isUnlocked
                                    ? `bg-gradient-to-br ${achievement.color} text-white shadow-lg`
                                    : 'bg-gray-200 dark:bg-gray-800 text-gray-400'}`}
                                >
                                    <Icon className="w-6 h-6" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold text-gray-900 dark:text-white">{achievement.name}</h3>
                                        {isUnlocked && <CheckCircle className="w-4 h-4 text-green-500" />}
                                        {!isUnlocked && <Lock className="w-4 h-4 text-gray-400" />}
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{achievement.description}</p>

                                    {/* Progress Bar */}
                                    {!isUnlocked && (
                                        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                                            <div
                                                className={`bg-gradient-to-r ${achievement.color} h-2 rounded-full transition-all`}
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Category Badge */}
                            <span className="absolute top-3 right-3 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                                {achievement.category}
                            </span>
                        </motion.div>
                    );
                })}
            </div>

            {/* Motivation Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-center"
            >
                <p className="text-gray-500 dark:text-gray-400">
                    🏆 Keep studying consistently to unlock more achievements!
                </p>
            </motion.div>
        </div>
    );
}

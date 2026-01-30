"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    BarChart3, TrendingUp, Calendar, Clock, Target, Brain,
    BookOpen, CheckCircle, Activity, PieChart, ArrowUpRight,
    ChevronRight, Flame, Star, Award
} from 'lucide-react';
import { useGamification } from '@/context/GamificationContext';
import Link from 'next/link';

// Mock data for demonstration
const WEEKLY_STUDY_HOURS = [
    { day: 'Mon', hours: 4.5 },
    { day: 'Tue', hours: 3.2 },
    { day: 'Wed', hours: 5.1 },
    { day: 'Thu', hours: 2.8 },
    { day: 'Fri', hours: 4.0 },
    { day: 'Sat', hours: 6.5 },
    { day: 'Sun', hours: 5.0 },
];

const SUBJECT_PROGRESS = [
    { name: 'Polity', progress: 78, color: 'bg-blue-500' },
    { name: 'History', progress: 45, color: 'bg-amber-500' },
    { name: 'Geography', progress: 62, color: 'bg-emerald-500' },
    { name: 'Economy', progress: 35, color: 'bg-indigo-500' },
    { name: 'Environment', progress: 28, color: 'bg-green-500' },
];

const RECENT_ACTIVITIES = [
    { type: 'mcq', subject: 'Polity', topic: 'Fundamental Rights', score: '8/10', time: '2 hours ago' },
    { type: 'chapter', subject: 'History', topic: 'Revolt of 1857', score: 'Completed', time: '4 hours ago' },
    { type: 'flashcard', subject: 'Geography', topic: 'Pressure Belts', score: '15 cards', time: 'Yesterday' },
    { type: 'quiz', subject: 'Polity', topic: 'Parliament', score: '85%', time: 'Yesterday' },
];

export default function ReportsPage() {
    const { xp, level, streak, longestStreak } = useGamification();
    const maxHours = Math.max(...WEEKLY_STUDY_HOURS.map(d => d.hours));

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#0a0a0a] dark:to-[#111] p-4 md:p-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="w-8 h-8 text-indigo-600" />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Progress Reports</h1>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                    Track your UPSC preparation journey with detailed analytics.
                </p>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                    <Clock className="w-5 h-5 text-blue-500 mb-2" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">31.1 hrs</p>
                    <p className="text-xs text-gray-500">This Week</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                    <Target className="w-5 h-5 text-emerald-500 mb-2" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
                    <p className="text-xs text-gray-500">MCQs Solved</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                    <Flame className="w-5 h-5 text-orange-500 mb-2" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{streak}</p>
                    <p className="text-xs text-gray-500">Day Streak</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                    <Star className="w-5 h-5 text-yellow-500 mb-2" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{xp.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">Total XP</p>
                </motion.div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Weekly Study Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-900 dark:text-white">Weekly Study Hours</h3>
                        <span className="text-xs text-emerald-500 font-medium flex items-center gap-1">
                            <ArrowUpRight className="w-3 h-3" /> +12% vs last week
                        </span>
                    </div>

                    <div className="flex items-end justify-between h-48 gap-2">
                        {WEEKLY_STUDY_HOURS.map((d, i) => (
                            <div key={d.day} className="flex flex-col items-center flex-1">
                                <div
                                    className="w-full bg-gradient-to-t from-indigo-500 to-blue-400 rounded-t-lg transition-all hover:from-indigo-600 hover:to-blue-500"
                                    style={{ height: `${(d.hours / maxHours) * 100}%` }}
                                />
                                <p className="text-xs text-gray-500 mt-2">{d.day}</p>
                                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{d.hours}h</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Subject Progress */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
                >
                    <h3 className="font-bold text-gray-900 dark:text-white mb-6">Subject Progress</h3>
                    <div className="space-y-4">
                        {SUBJECT_PROGRESS.map((subject) => (
                            <div key={subject.name}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">{subject.name}</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{subject.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                                    <div
                                        className={`${subject.color} h-2 rounded-full transition-all`}
                                        style={{ width: `${subject.progress}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Recent Activity */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
            >
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-gray-900 dark:text-white">Recent Activity</h3>
                    <Link href="/student/batch1/analytics" className="text-xs text-indigo-600 font-medium flex items-center gap-1 hover:underline">
                        View All <ChevronRight className="w-3 h-3" />
                    </Link>
                </div>

                <div className="space-y-4">
                    {RECENT_ACTIVITIES.map((activity, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-[#0a0a0a] rounded-xl">
                            <div className={`p-2 rounded-lg ${activity.type === 'mcq' ? 'bg-blue-100 text-blue-600' :
                                    activity.type === 'chapter' ? 'bg-amber-100 text-amber-600' :
                                        activity.type === 'flashcard' ? 'bg-purple-100 text-purple-600' :
                                            'bg-emerald-100 text-emerald-600'
                                }`}>
                                {activity.type === 'mcq' && <Target className="w-4 h-4" />}
                                {activity.type === 'chapter' && <BookOpen className="w-4 h-4" />}
                                {activity.type === 'flashcard' && <Brain className="w-4 h-4" />}
                                {activity.type === 'quiz' && <CheckCircle className="w-4 h-4" />}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.topic}</p>
                                <p className="text-xs text-gray-500">{activity.subject}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-gray-900 dark:text-white">{activity.score}</p>
                                <p className="text-xs text-gray-400">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/student/achievements" className="p-4 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl text-white hover:scale-[1.02] transition-transform">
                    <Award className="w-5 h-5 mb-2" />
                    <p className="font-bold">Achievements</p>
                    <p className="text-xs opacity-80">View badges</p>
                </Link>
                <Link href="/student/revision" className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white hover:scale-[1.02] transition-transform">
                    <Brain className="w-5 h-5 mb-2" />
                    <p className="font-bold">Revision</p>
                    <p className="text-xs opacity-80">Smart review</p>
                </Link>
                <Link href="/student/planner" className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl text-white hover:scale-[1.02] transition-transform">
                    <Calendar className="w-5 h-5 mb-2" />
                    <p className="font-bold">Planner</p>
                    <p className="text-xs opacity-80">Daily schedule</p>
                </Link>
                <Link href="/student/upsc" className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl text-white hover:scale-[1.02] transition-transform">
                    <BookOpen className="w-5 h-5 mb-2" />
                    <p className="font-bold">UPSC Store</p>
                    <p className="text-xs opacity-80">Get resources</p>
                </Link>
            </div>
        </div>
    );
}

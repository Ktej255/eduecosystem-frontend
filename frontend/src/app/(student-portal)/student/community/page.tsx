"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Users, MessageSquare, UserPlus, Search, Crown, Star,
    BookOpen, Clock, CheckCircle, Flame, Trophy, Send,
    Heart, Share2, MoreHorizontal, Bell
} from 'lucide-react';
import { useGamification } from '@/context/GamificationContext';

// Mock study groups
const STUDY_GROUPS = [
    { id: 1, name: 'Polity Champions', members: 156, active: true, subject: 'Polity', streak: 45 },
    { id: 2, name: 'UPSC 2026 Batch', members: 324, active: true, subject: 'General', streak: 30 },
    { id: 3, name: 'Geography Explorers', members: 89, active: false, subject: 'Geography', streak: 22 },
    { id: 4, name: 'Current Affairs Daily', members: 512, active: true, subject: 'Current Affairs', streak: 100 },
];

// Mock community feed
const COMMUNITY_FEED = [
    {
        id: 1,
        user: 'Priya S.',
        avatar: '👩‍🎓',
        content: 'Just completed the entire Laxmikanth in 45 days! Key tip: Focus on constitutional provisions first, then move to statutory bodies.',
        likes: 89,
        comments: 23,
        time: '2 hours ago',
        type: 'achievement'
    },
    {
        id: 2,
        user: 'Rahul M.',
        avatar: '👨‍💼',
        content: 'Can someone explain the difference between Money Bill and Financial Bill? Getting confused with the procedures.',
        likes: 12,
        comments: 45,
        time: '5 hours ago',
        type: 'question'
    },
    {
        id: 3,
        user: 'Anita K.',
        avatar: '👩‍💻',
        content: '🎉 Hit 100-day streak today! Consistency is indeed the key. Started with just 2 hours, now doing 6+ hours daily.',
        likes: 234,
        comments: 67,
        time: '1 day ago',
        type: 'milestone'
    },
];

// Mock leaderboard
const LEADERBOARD = [
    { rank: 1, name: 'Vikram S.', xp: 15420, streak: 156, avatar: '🏆' },
    { rank: 2, name: 'Meera P.', xp: 14890, streak: 134, avatar: '🥈' },
    { rank: 3, name: 'Arjun D.', xp: 13560, streak: 98, avatar: '🥉' },
    { rank: 4, name: 'Sneha R.', xp: 12340, streak: 87, avatar: '⭐' },
    { rank: 5, name: 'Karan B.', xp: 11230, streak: 76, avatar: '⭐' },
];

export default function CommunityPage() {
    const { xp, streak } = useGamification();
    const [activeTab, setActiveTab] = useState('feed');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#0a0a0a] dark:to-[#111] p-4 md:p-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <div className="flex items-center gap-3 mb-2">
                    <Users className="w-8 h-8 text-indigo-600" />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Community Hub</h1>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                    Connect with fellow aspirants, share knowledge, and grow together.
                </p>
            </motion.div>

            {/* Search & Tabs */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search groups, people, or discussions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="flex gap-2">
                    {['feed', 'groups', 'leaderboard'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-xl font-medium capitalize transition-all
                                ${activeTab === tab
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-4">
                    {activeTab === 'feed' && (
                        <>
                            {/* Create Post */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white dark:bg-[#111] p-4 rounded-2xl border border-gray-200 dark:border-gray-800"
                            >
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                                        You
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Share your progress, ask questions, or motivate others..."
                                        className="flex-1 bg-gray-50 dark:bg-[#0a0a0a] rounded-xl px-4 py-2 text-sm border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors">
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Feed Posts */}
                            {COMMUNITY_FEED.map((post, i) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-200 dark:border-gray-800"
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-xl">
                                            {post.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <p className="font-bold text-gray-900 dark:text-white">{post.user}</p>
                                                {post.type === 'achievement' && <Trophy className="w-4 h-4 text-yellow-500" />}
                                                {post.type === 'milestone' && <Flame className="w-4 h-4 text-orange-500" />}
                                            </div>
                                            <p className="text-xs text-gray-500">{post.time}</p>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>
                                    <div className="flex items-center gap-6 text-sm text-gray-500">
                                        <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                                            <Heart className="w-4 h-4" /> {post.likes}
                                        </button>
                                        <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                                            <MessageSquare className="w-4 h-4" /> {post.comments}
                                        </button>
                                        <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                                            <Share2 className="w-4 h-4" /> Share
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </>
                    )}

                    {activeTab === 'groups' && (
                        <div className="space-y-4">
                            {STUDY_GROUPS.map((group, i) => (
                                <motion.div
                                    key={group.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 transition-all cursor-pointer"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                                {group.name[0]}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-bold text-gray-900 dark:text-white">{group.name}</h3>
                                                    {group.active && (
                                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    {group.members} members • {group.subject}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-right">
                                                <p className="text-sm font-bold text-orange-500">🔥 {group.streak}</p>
                                                <p className="text-xs text-gray-400">day streak</p>
                                            </div>
                                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                                                <UserPlus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'leaderboard' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                        >
                            <div className="p-5 border-b border-gray-200 dark:border-gray-800">
                                <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Crown className="w-5 h-5 text-yellow-500" />
                                    Weekly Leaderboard
                                </h3>
                            </div>
                            <div className="divide-y divide-gray-200 dark:divide-gray-800">
                                {LEADERBOARD.map((user) => (
                                    <div key={user.rank} className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-[#0a0a0a] transition-colors">
                                        <span className="w-8 h-8 flex items-center justify-center text-xl">
                                            {user.avatar}
                                        </span>
                                        <div className="flex-1">
                                            <p className="font-bold text-gray-900 dark:text-white">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.xp.toLocaleString()} XP</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-orange-500">🔥 {user.streak}</p>
                                            <p className="text-xs text-gray-400">streak</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-4">
                    {/* Your Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gradient-to-br from-indigo-500 to-purple-600 p-5 rounded-2xl text-white"
                    >
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <Star className="w-5 h-5" /> Your Stats
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-2xl font-bold">{xp.toLocaleString()}</p>
                                <p className="text-xs opacity-80">Total XP</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{streak}</p>
                                <p className="text-xs opacity-80">Day Streak</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Suggested Groups */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-200 dark:border-gray-800"
                    >
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4">Suggested Groups</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">P</div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 dark:text-white">Prelims 2026</p>
                                    <p className="text-xs text-gray-500">892 members</p>
                                </div>
                                <button className="text-xs text-indigo-600 font-medium">Join</button>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 font-bold">H</div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 dark:text-white">History Buffs</p>
                                    <p className="text-xs text-gray-500">234 members</p>
                                </div>
                                <button className="text-xs text-indigo-600 font-medium">Join</button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Upcoming Events */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-200 dark:border-gray-800"
                    >
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Bell className="w-4 h-4" /> Upcoming
                        </h3>
                        <div className="space-y-3 text-sm">
                            <div className="p-3 bg-gray-50 dark:bg-[#0a0a0a] rounded-lg">
                                <p className="font-medium text-gray-900 dark:text-white">Polity Quiz Night</p>
                                <p className="text-xs text-gray-500">Tomorrow, 8 PM</p>
                            </div>
                            <div className="p-3 bg-gray-50 dark:bg-[#0a0a0a] rounded-lg">
                                <p className="font-medium text-gray-900 dark:text-white">Weekly Mock Test</p>
                                <p className="text-xs text-gray-500">Sunday, 10 AM</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

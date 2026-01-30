"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Users, MessageSquare, UserPlus, Search, Crown, Star,
    BookOpen, Clock, CheckCircle, Flame, Trophy, Send,
    Heart, Share2, MoreHorizontal, Bell, MessageCircle
} from 'lucide-react';
import { useGamification } from '@/context/GamificationContext';
import { useCommunity } from '@/context/CommunityContext';
import { useAuth } from '@/contexts/auth-context';
import Leaderboard from '@/components/upsc/Leaderboard';
import StudyGroups from '@/components/social/StudyGroups';
import MessageThread from '@/components/social/MessageThread';

// Mock friends for messaging
const MOCK_FRIENDS = [
    { id: 1, full_name: 'Vikram S.' },
    { id: 2, full_name: 'Meera P.' },
    { id: 3, full_name: 'Arjun D.' },
    { id: 4, full_name: 'Sneha R.' },
    { id: 5, full_name: 'Karan B.' },
];

export default function CommunityPage() {
    const { user } = useAuth();
    const { xp, streak } = useGamification();
    const { posts, addPost, toggleLike } = useCommunity();
    const [activeTab, setActiveTab] = useState('feed');
    const [searchQuery, setSearchQuery] = useState('');
    const [newPostContent, setNewPostContent] = useState('');
    const [selectedFriend, setSelectedFriend] = useState<{ id: number; full_name: string } | null>(null);

    const handlePost = () => {
        if (!newPostContent.trim()) return;
        addPost(newPostContent, 'general');
        setNewPostContent('');
    };

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
                <div className="flex gap-2 flex-wrap">
                    {['feed', 'groups', 'messages', 'leaderboard'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-xl font-medium capitalize transition-all flex items-center gap-2
                                ${activeTab === tab
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-white dark:bg-[#111] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800'
                                }`}
                        >
                            {tab === 'messages' && <MessageCircle className="w-4 h-4" />}
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
                                        value={newPostContent}
                                        onChange={(e) => setNewPostContent(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handlePost()}
                                        className="flex-1 bg-gray-50 dark:bg-[#0a0a0a] rounded-xl px-4 py-2 text-sm border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <button
                                        onClick={handlePost}
                                        disabled={!newPostContent.trim()}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Feed Posts */}
                            {posts.map((post, i) => (
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
                                                {post.type === 'question' && <MessageSquare className="w-4 h-4 text-blue-500" />}
                                            </div>
                                            <p className="text-xs text-gray-500">{post.time}</p>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>
                                    <div className="flex items-center gap-6 text-sm text-gray-500">
                                        <button
                                            onClick={() => toggleLike(post.id)}
                                            className={`flex items-center gap-1 transition-colors ${post.isLikedByMe ? 'text-red-500 font-bold' : 'hover:text-red-500'}`}
                                        >
                                            <Heart className={`w-4 h-4 ${post.isLikedByMe ? 'fill-current' : ''}`} /> {post.likes}
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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="h-[600px]"
                        >
                            <StudyGroups />
                        </motion.div>
                    )}

                    {activeTab === 'messages' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {!selectedFriend ? (
                                <div className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-200 dark:border-gray-800">
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                        <MessageCircle className="w-5 h-5 text-indigo-600" />
                                        Messages
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">Select a friend to start chatting</p>
                                    <div className="space-y-2">
                                        {MOCK_FRIENDS.map((friend) => (
                                            <button
                                                key={friend.id}
                                                onClick={() => setSelectedFriend(friend)}
                                                className="w-full flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                                            >
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                                    {friend.full_name[0]}
                                                </div>
                                                <div className="flex-1 text-left">
                                                    <p className="font-medium text-gray-900 dark:text-white">{friend.full_name}</p>
                                                    <p className="text-xs text-gray-500">Tap to message</p>
                                                </div>
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="h-[600px]">
                                    <button
                                        onClick={() => setSelectedFriend(null)}
                                        className="mb-4 text-sm text-indigo-600 hover:underline"
                                    >
                                        ← Back to Contacts
                                    </button>
                                    <MessageThread
                                        currentUser={{ id: user?.id || 0, full_name: user?.full_name || 'You' }}
                                        selectedFriend={selectedFriend}
                                    />
                                </div>
                            )}
                        </motion.div>
                    )}

                    {activeTab === 'leaderboard' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Leaderboard />
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

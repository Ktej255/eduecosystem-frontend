"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Users, MessageSquare, UserPlus, Search, Crown, Star,
    BookOpen, Clock, CheckCircle, Flame, Trophy, Send,
    Heart, Share2, MoreHorizontal, Bell, MessageCircle, Sword
} from 'lucide-react';
import { useGamification } from '@/context/GamificationContext';
import { useCommunity } from '@/context/CommunityContext';
import { useAuth } from '@/contexts/auth-context';
import { toast } from 'sonner';
import Leaderboard from '@/components/upsc/Leaderboard';
import StudyGroups from '@/components/social/StudyGroups';
import MessageThread from '@/components/social/MessageThread';
import SuccessCard from '@/components/community/SuccessCard';

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
    const [activePresences, setActivePresences] = useState<any[]>([]);

    useEffect(() => {
        const fetchPresence = async () => {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
                const token = localStorage.getItem('edueco_auth_token');
                const response = await fetch(`${baseUrl}/community/presence`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    setActivePresences(data);
                }
            } catch (error) {
                console.error('Failed to fetch presence:', error);
            }
        };

        // Update presence on load
        const updateMyPresence = async () => {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
            const token = localStorage.getItem('edueco_auth_token');
            await fetch(`${baseUrl}/community/presence?status=online`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });
        };

        updateMyPresence();
        fetchPresence();
        const interval = setInterval(fetchPresence, 30000); // Every 30s
        return () => clearInterval(interval);
    }, []);

    const handleChallenge = async (opponentId: number) => {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1/pack-battles';
        const token = localStorage.getItem('edueco_auth_token');
        try {
            const response = await fetch(`${baseUrl}/challenge?defender_id=${opponentId}`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(`Challenge sent! Battle ID: ${data.battle_id}`);
            }
        } catch (error) {
            toast.error("Failed to send challenge");
        }
    };

    const handlePost = () => {
        if (!newPostContent.trim()) return;
        addPost(newPostContent, 'general');
        setNewPostContent('');
    };

    const [showSuccessCard, setShowSuccessCard] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#0a0a0a] dark:to-[#111] p-4 md:p-8">
            {/* Success Card Modal */}
            {showSuccessCard && (
                <SuccessCard
                    stats={{ xp, streak, level: Math.floor(xp / 1000) + 1 }}
                    userName={user?.full_name || "Aspirant"}
                    onClose={() => setShowSuccessCard(false)}
                />
            )}

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <div className="flex items-center gap-3 mb-2">
                    <Users className="w-8 h-8 text-indigo-600" />
                    <h1 className="text-3xl font-bold text-foreground">Community Hub</h1>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground">
                    Connect with fellow aspirants, share knowledge, and grow together.
                </p>
            </motion.div>

            {/* Search & Tabs */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search groups, people, or discussions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card dark:bg-[#111] text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                                    : 'bg-card dark:bg-[#111] text-muted-foreground dark:text-muted-foreground border border-border'
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
                                className="bg-card dark:bg-[#111] p-4 rounded-2xl border border-border"
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
                                        className="flex-1 bg-muted dark:bg-[#0a0a0a] rounded-xl px-4 py-2 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                                    className="bg-card dark:bg-[#111] p-5 rounded-2xl border border-border"
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-xl">
                                            {post.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <p className="font-bold text-foreground">{post.user}</p>
                                                {post.type === 'achievement' && <Trophy className="w-4 h-4 text-yellow-500" />}
                                                {post.type === 'milestone' && <Flame className="w-4 h-4 text-orange-500" />}
                                                {post.type === 'question' && <MessageSquare className="w-4 h-4 text-blue-500" />}
                                            </div>
                                            <p className="text-xs text-muted-foreground">{post.time}</p>
                                        </div>
                                        <button className="text-muted-foreground hover:text-muted-foreground">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="text-muted-foreground dark:text-muted-foreground mb-4">{post.content}</p>
                                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
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
                                <div className="bg-card dark:bg-[#111] p-5 rounded-2xl border border-border">
                                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                        <MessageCircle className="w-5 h-5 text-indigo-600" />
                                        Messages
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">Select a friend to start chatting</p>
                                    <div className="space-y-2">
                                        {MOCK_FRIENDS.map((friend) => (
                                            <button
                                                key={friend.id}
                                                onClick={() => setSelectedFriend(friend)}
                                                className="w-full flex items-center gap-3 p-3 rounded-xl bg-muted dark:bg-[#0a0a0a] hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                                            >
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                                    {friend.full_name[0]}
                                                </div>
                                                <div className="flex-1 text-left">
                                                    <p className="font-medium text-foreground">{friend.full_name}</p>
                                                    <p className="text-xs text-muted-foreground">Tap to message</p>
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
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-2xl font-bold">{xp.toLocaleString()}</p>
                                <p className="text-xs opacity-80">Total XP</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{streak}</p>
                                <p className="text-xs opacity-80">Day Streak</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowSuccessCard(true)}
                            className="w-full py-2 bg-card/20 hover:bg-card/30 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                        >
                            <Share2 className="w-3 h-3" /> Share Progress Card
                        </button>
                    </motion.div>

                    {/* Live in Library */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-card dark:bg-[#111] p-5 rounded-2xl border border-border"
                    >
                        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Online Aspirants
                        </h3>
                        <div className="space-y-4">
                            {activePresences.length > 0 ? activePresences.map((presence) => (
                                <div key={presence.user_id} className="flex items-center gap-3 text-sm">
                                    <div className="relative">
                                        <img src={presence.avatar} className="w-8 h-8 rounded-full" alt={presence.name} />
                                        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-[#111]" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-foreground">{presence.name}</p>
                                        <p className="text-[10px] text-muted-foreground">{presence.status} • {presence.current_subject}</p>
                                    </div>
                                    {presence.user_id !== user?.id && (
                                        <button
                                            onClick={() => handleChallenge(presence.user_id)}
                                            className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 rounded-lg transition-colors"
                                            title="Challenge to Battle"
                                        >
                                            <Sword className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            )) : (
                                <p className="text-xs text-muted-foreground text-center">No one else in the library yet.</p>
                            )}
                        </div>
                    </motion.div>

                    {/* Suggested Groups (Moving down or keeping) */}

                    {/* Upcoming Events */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-card dark:bg-[#111] p-5 rounded-2xl border border-border"
                    >
                        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                            <Bell className="w-4 h-4" /> Upcoming
                        </h3>
                        <div className="space-y-3 text-sm">
                            <div className="p-3 bg-muted dark:bg-[#0a0a0a] rounded-lg">
                                <p className="font-medium text-foreground">Polity Quiz Night</p>
                                <p className="text-xs text-muted-foreground">Tomorrow, 8 PM</p>
                            </div>
                            <div className="p-3 bg-muted dark:bg-[#0a0a0a] rounded-lg">
                                <p className="font-medium text-foreground">Weekly Mock Test</p>
                                <p className="text-xs text-muted-foreground">Sunday, 10 AM</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

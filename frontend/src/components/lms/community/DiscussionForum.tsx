"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Hash, MessageSquare, ThumbsUp, MoreHorizontal, Send, Search } from 'lucide-react';
import { toast } from 'sonner';

// Mock Data
const CHANNELS = [
    { id: 'general', name: 'general-chat', desc: 'Chill vibes only ☕' },
    { id: 'polity', name: 'polity-doubts', desc: 'Constitution & Laws ⚖️' },
    { id: 'geo', name: 'geography-help', desc: 'Maps & Tectonics 🌍' },
    { id: 'csat', name: 'csat-maths', desc: 'Numbers game 🔢' },
];

const MOCK_POSTS = [
    {
        id: 1,
        author: "Sneha Gupta",
        avatar: "SG",
        content: "Can someone explain the difference between Article 32 and 226 again? Specifically regarding the writ jurisdiction?",
        time: "10m ago",
        likes: 12,
        replies: 4,
        channel: 'polity'
    },
    {
        id: 2,
        author: "Rohan Kumar",
        avatar: "RK",
        content: "Just finished the Rivers 3D simulation. The visual for the Indus flow is insane! Highly recommend checking it out.",
        time: "2h ago",
        likes: 45,
        replies: 8,
        channel: 'general'
    }
];

export default function DiscussionForum() {
    const [activeChannel, setActiveChannel] = useState('general');
    const [newPost, setNewPost] = useState("");

    const handlePost = () => {
        if (!newPost.trim()) return;
        toast.success("Post shared to community!");
        setNewPost("");
    };

    const currentPosts = MOCK_POSTS.filter(p => p.channel === activeChannel || activeChannel === 'general');

    return (
        <div className="flex h-[calc(100vh-100px)] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900">
            {/* Sidebar Channels */}
            <div className="w-64 bg-neutral-50 dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 flex flex-col">
                <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
                    <h2 className="font-bold text-lg flex items-center gap-2">
                        Student Hub
                    </h2>
                </div>
                <ScrollArea className="flex-1 p-3">
                    <div className="space-y-1">
                        {CHANNELS.map(channel => (
                            <button
                                key={channel.id}
                                onClick={() => setActiveChannel(channel.id)}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${activeChannel === channel.id
                                        ? 'bg-neutral-200 dark:bg-neutral-800 font-semibold'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                                    }`}
                            >
                                <Hash className="w-4 h-4 text-neutral-400" />
                                {channel.name}
                            </button>
                        ))}
                    </div>
                </ScrollArea>
                <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-400">
                    {CHANNELS.find(c => c.id === activeChannel)?.desc}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="h-16 flex items-center justify-between px-6 border-b border-neutral-200 dark:border-neutral-800 bg-white/50 backdrop-blur">
                    <div className="flex items-center gap-2 font-bold text-lg">
                        <Hash className="w-5 h-5 text-neutral-400" />
                        {CHANNELS.find(c => c.id === activeChannel)?.name}
                    </div>
                    <div className="relative w-64">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-neutral-400" />
                        <Input placeholder="Search messages..." className="pl-9 h-9" />
                    </div>
                </div>

                {/* Posts Feed */}
                <ScrollArea className="flex-1 p-6 bg-neutral-50/30">
                    <div className="space-y-6 max-w-3xl mx-auto">
                        {currentPosts.map(post => (
                            <div key={post.id} className="flex gap-4 group">
                                <Avatar className="w-10 h-10 border">
                                    <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold">{post.avatar}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold hover:underline cursor-pointer">{post.author}</span>
                                        <span className="text-xs text-neutral-400">{post.time}</span>
                                    </div>
                                    <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">
                                        {post.content}
                                    </p>

                                    {/* Action Bar */}
                                    <div className="flex items-center gap-4 mt-2">
                                        <button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-xs font-medium text-neutral-500">
                                            <ThumbsUp className="w-3.5 h-3.5" />
                                            {post.likes}
                                        </button>
                                        <button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-xs font-medium text-neutral-500">
                                            <MessageSquare className="w-3.5 h-3.5" />
                                            {post.replies} Replies
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="max-w-3xl mx-auto flex gap-4">
                        <Button variant="outline" size="icon" className="shrink-0">
                            <MoreHorizontal className="w-5 h-5 text-neutral-500" />
                        </Button>
                        <Input
                            value={newPost}
                            onChange={(e) => setNewPost(e.target.value)}
                            placeholder={`Message #${CHANNELS.find(c => c.id === activeChannel)?.name}`}
                            className="bg-neutral-100 dark:bg-neutral-800 border-0"
                            onKeyDown={(e) => e.key === 'Enter' && handlePost()}
                        />
                        <Button onClick={handlePost} size="icon" className="shrink-0 bg-indigo-600 hover:bg-indigo-700">
                            <Send className="w-4 h-4 text-white" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

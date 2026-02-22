"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share2, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Post {
    id: string;
    author: string;
    authorImage?: string;
    content: string;
    category: string;
    resonance: number;
    timestamp: string;
}

const MOCK_POSTS: Post[] = [
    {
        id: "1",
        author: "K Tej",
        content: "Realized during today's meditation that speed is often the enemy of depth. Mastery requires pause.",
        category: "Upanishad Wisdom",
        resonance: 42,
        timestamp: "2 hours ago"
    },
    {
        id: "2",
        author: "Sarit",
        content: "Completed Chapter 12 of Polity. Seeing the constitution as a living Sadhana for a nation.",
        category: "Polity Mastery",
        resonance: 28,
        timestamp: "5 hours ago"
    },
    {
        id: "3",
        author: "Aditya",
        content: "The 3D Tree visualization is insane. Seeing it grow makes the struggle of MCQs worth it.",
        category: "Engagement",
        resonance: 85,
        timestamp: "8 hours ago"
    }
];

export function WisdomFeed() {
    const [posts, setPosts] = useState(MOCK_POSTS);

    const handleResonate = (id: string) => {
        setPosts(prev => prev.map(post =>
            post.id === id ? { ...post, resonance: post.resonance + 1 } : post
        ));
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    Global Wisdom Feed
                </h2>
                <div className="flex gap-2">
                    <div className="bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                        <p className="text-xs text-cyan-400 font-bold">1.2k Active Now</p>
                    </div>
                </div>
            </div>

            <div className="grid gap-4">
                {posts.map((post, i) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors">
                            <CardContent className="pt-6">
                                <div className="flex gap-4">
                                    <Avatar className="w-10 h-10 border border-gray-700">
                                        <AvatarImage src={post.authorImage} />
                                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-bold text-sm">{post.author}</h3>
                                            <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{post.category}</span>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {post.content}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-4">
                                                <button
                                                    onClick={() => handleResonate(post.id)}
                                                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-cyan-400 transition-colors group"
                                                >
                                                    <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                    <span>{post.resonance} Resonance</span>
                                                </button>
                                                <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors">
                                                    <MessageSquare className="w-4 h-4" />
                                                    <span>Reply</span>
                                                </button>
                                            </div>
                                            <span className="text-[10px] text-muted-foreground font-medium">{post.timestamp}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

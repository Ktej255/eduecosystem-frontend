"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from "@/contexts/auth-context";

export interface Comment {
    id: number;
    user: string;
    avatar: string;
    content: string;
    time: string;
}

export interface Post {
    id: number;
    user: string;
    avatar: string;
    content: string;
    likes: number;
    comments: number;
    time: string;
    type: 'achievement' | 'question' | 'milestone' | 'general';
    isLikedByMe?: boolean;
}

interface CommunityContextType {
    posts: Post[];
    addPost: (content: string, type: Post['type']) => void;
    toggleLike: (id: number) => void;
}

const CommunityContext = createContext<CommunityContextType | undefined>(undefined);

// Initial Seed Data
const INITIAL_POSTS: Post[] = [
    {
        id: 1,
        user: 'Priya S.',
        avatar: '👩‍🎓',
        content: 'Just completed the entire Laxmikanth in 45 days! Key tip: Focus on constitutional provisions first, then move to statutory bodies.',
        likes: 89,
        comments: 23,
        time: '2 hours ago',
        type: 'achievement',
        isLikedByMe: false
    },
    {
        id: 2,
        user: 'Rahul M.',
        avatar: '👨‍💼',
        content: 'Can someone explain the difference between Money Bill and Financial Bill? Getting confused with the procedures.',
        likes: 12,
        comments: 45,
        time: '5 hours ago',
        type: 'question',
        isLikedByMe: false
    },
    {
        id: 3,
        user: 'Anita K.',
        avatar: '👩‍💻',
        content: '🎉 Hit 100-day streak today! Consistency is indeed the key. Started with just 2 hours, now doing 6+ hours daily.',
        likes: 234,
        comments: 67,
        time: '1 day ago',
        type: 'milestone',
        isLikedByMe: false
    },
];

export function CommunityProvider({ children }: { children: ReactNode }) {
    const [posts, setPosts] = useState<Post[]>([]);
    const { user } = useAuth(); // Get current user for posting

    // Load from LocalStorage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('community_posts');
            if (saved) {
                try {
                    setPosts(JSON.parse(saved));
                } catch (e) {
                    console.error("Failed to parse community posts", e);
                    setPosts(INITIAL_POSTS);
                }
            } else {
                setPosts(INITIAL_POSTS);
            }
        }
    }, []);

    // Save to LocalStorage
    useEffect(() => {
        if (typeof window !== 'undefined' && posts.length > 0) {
            localStorage.setItem('community_posts', JSON.stringify(posts));
        }
    }, [posts]);

    const addPost = (content: string, type: Post['type'] = 'general') => {
        const newPost: Post = {
            id: Date.now(),
            user: user?.full_name || user?.email?.split('@')[0] || 'Me',
            avatar: '👤', // Default avatar
            content,
            likes: 0,
            comments: 0,
            time: 'Just now',
            type,
            isLikedByMe: false
        };
        setPosts(prev => [newPost, ...prev]);
    };

    const toggleLike = (id: number) => {
        setPosts(prev => prev.map(post => {
            if (post.id === id) {
                const isLiked = !post.isLikedByMe;
                return {
                    ...post,
                    likes: isLiked ? post.likes + 1 : post.likes - 1,
                    isLikedByMe: isLiked
                };
            }
            return post;
        }));
    };

    return (
        <CommunityContext.Provider value={{ posts, addPost, toggleLike }}>
            {children}
        </CommunityContext.Provider>
    );
}

export function useCommunity() {
    const context = useContext(CommunityContext);
    if (context === undefined) {
        throw new Error("useCommunity must be used within a CommunityProvider");
    }
    return context;
}

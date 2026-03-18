"use client";

import React, { useState } from "react";
import {
    Twitter, Users, Heart, MessageSquare, Repeat2,
    Settings, TrendingUp, ArrowLeft, BarChart3,
    CheckCircle2, ExternalLink, PenSquare, AtSign
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function TwitterPage() {
    const [isConnected] = useState(true);
    const [autoTweet, setAutoTweet] = useState(true);

    const stats = {
        followers: 18500,
        following: 420,
        tweets: 3450,
        impressions: 450000
    };

    const recentTweets = [
        { id: "1", content: "📢 Just released a new detailed guide on Indian Polity for #UPSC aspirants. Check it out! 📚 #Education #IAS", likes: 234, retweets: 56, replies: 12, date: "2h ago" },
        { id: "2", content: "💡 Tip of the day: Consistency is key in preparation. Study small chunks daily rather than cramming. #StudyTips", likes: 456, retweets: 89, replies: 23, date: "5h ago" },
        { id: "3", content: "🔔 Live session on Current Affairs starting in 30 mins! Join us on YouTube. 📺", likes: 123, retweets: 34, replies: 5, date: "1d ago" },
    ];

    const trends = [
        { topic: "#UPSC2026", tweets: "12.5K" },
        { topic: "#IndianPolity", tweets: "8.9K" },
        { topic: "#EducationForAll", tweets: "5.6K" },
        { topic: "#ExamPrep", tweets: "4.2K" },
    ];

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
            <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-muted-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
            </Link>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                            <Twitter className="h-5 w-5 text-white" />
                        </div>
                        X (Twitter)
                    </h1>
                    <p className="text-muted-foreground dark:text-muted-foreground mt-1">
                        Manage your X (Twitter) presence and interactions
                    </p>
                </div>
                <Badge className="bg-green-100 text-green-700 px-3 py-1">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Connected
                </Badge>
            </div>

            {/* Quick Tweet */}
            <Card>
                <CardContent className="p-5">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-muted rounded-full flex-shrink-0" />
                        <div className="flex-1 space-y-3">
                            <Textarea placeholder="What is happening?!" className="resize-none border-0 shadow-none p-0 focus-visible:ring-0 text-lg min-h-[50px]" />
                            <div className="flex justify-between items-center border-t pt-3">
                                <div className="text-sm text-blue-500 font-medium cursor-pointer">
                                    Everyone can reply
                                </div>
                                <Button className="bg-[#1DA1F2] hover:bg-[#1a91da] rounded-full px-6">Post</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-black text-white border-0">
                    <CardContent className="p-5">
                        <Users className="h-8 w-8 opacity-30 mb-2" />
                        <p className="text-2xl font-bold">{(stats.followers / 1000).toFixed(1)}K</p>
                        <p className="text-sm opacity-80">Followers</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-5">
                        <BarChart3 className="h-8 w-8 text-blue-500 mb-2" />
                        <p className="text-2xl font-bold">{(stats.impressions / 1000).toFixed(0)}K</p>
                        <p className="text-sm text-muted-foreground">Impressions</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-5">
                        <MessageSquare className="h-8 w-8 text-purple-500 mb-2" />
                        <p className="text-2xl font-bold">{stats.tweets}</p>
                        <p className="text-sm text-muted-foreground">Total Tweets</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-5">
                        <AtSign className="h-8 w-8 text-green-500 mb-2" />
                        <p className="text-2xl font-bold">{stats.following}</p>
                        <p className="text-sm text-muted-foreground">Following</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Recent Tweets */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Recent Posts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentTweets.map((tweet) => (
                            <div key={tweet.id} className="p-4 bg-muted rounded-lg">
                                <p className="mb-3">{tweet.content}</p>
                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition">
                                            <Heart className="h-4 w-4" /> {tweet.likes}
                                        </span>
                                        <span className="flex items-center gap-1 hover:text-green-500 cursor-pointer transition">
                                            <Repeat2 className="h-4 w-4" /> {tweet.retweets}
                                        </span>
                                        <span className="flex items-center gap-1 hover:text-blue-500 cursor-pointer transition">
                                            <MessageSquare className="h-4 w-4" /> {tweet.replies}
                                        </span>
                                    </div>
                                    <span>{tweet.date}</span>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Sidebar - Trends & Settings */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5" />
                                Trending Topics
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {trends.map((trend, idx) => (
                                <div key={idx} className="flex justify-between items-center">
                                    <span className="font-medium text-blue-600">{trend.topic}</span>
                                    <span className="text-sm text-muted-foreground">{trend.tweets} posts</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Settings className="h-5 w-5" />
                                Settings
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-sm">Auto-tweet updates</p>
                                    <p className="text-xs text-muted-foreground">Share new content automatically</p>
                                </div>
                                <Switch checked={autoTweet} onCheckedChange={setAutoTweet} />
                            </div>
                            <Button variant="outline" className="w-full">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Profile
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

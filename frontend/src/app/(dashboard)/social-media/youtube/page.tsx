"use client";

import React, { useState } from "react";
import {
    Youtube, Users, Eye, ThumbsUp, Clock, Play,
    Settings, TrendingUp, ArrowLeft, Video, BarChart3,
    CheckCircle2, ExternalLink, Calendar
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function YouTubePage() {
    const [autoUpload, setAutoUpload] = useState(false);

    const stats = {
        subscribers: 25600,
        totalViews: 1250000,
        videos: 156,
        watchTime: 45000
    };

    const recentVideos = [
        { id: "1", title: "Complete Indian Polity for UPSC 2026 | Chapter 1", views: 45000, likes: 2300, duration: "45:30", date: "Jan 10" },
        { id: "2", title: "Constitutional Amendments Explained | Easy Way", views: 32000, likes: 1800, duration: "32:15", date: "Jan 8" },
        { id: "3", title: "Fundamental Rights Complete Series | Part 1", views: 28000, likes: 1500, duration: "38:45", date: "Jan 5" },
        { id: "4", title: "State Legislature | Detailed Analysis", views: 19000, likes: 980, duration: "41:20", date: "Jan 3" },
    ];

    const channelAnalytics = {
        avgViews: 28000,
        avgWatchTime: "12:45",
        ctr: 5.8,
        subscriberGrowth: 1250
    };

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
            <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
            </Link>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#FF0000] rounded-lg flex items-center justify-center">
                            <Youtube className="h-6 w-6 text-white" />
                        </div>
                        YouTube
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Manage your YouTube channel integration
                    </p>
                </div>
                <Badge className="bg-green-100 text-green-700 px-3 py-1">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Channel Connected
                </Badge>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-[#FF0000] to-red-700 text-white border-0">
                    <CardContent className="p-5">
                        <Users className="h-8 w-8 opacity-30 mb-2" />
                        <p className="text-2xl font-bold">{(stats.subscribers / 1000).toFixed(1)}K</p>
                        <p className="text-sm opacity-80">Subscribers</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-5">
                        <Eye className="h-8 w-8 text-blue-500 mb-2" />
                        <p className="text-2xl font-bold">{(stats.totalViews / 1000000).toFixed(1)}M</p>
                        <p className="text-sm text-gray-500">Total Views</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-5">
                        <Video className="h-8 w-8 text-purple-500 mb-2" />
                        <p className="text-2xl font-bold">{stats.videos}</p>
                        <p className="text-sm text-gray-500">Videos</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-5">
                        <Clock className="h-8 w-8 text-green-500 mb-2" />
                        <p className="text-2xl font-bold">{(stats.watchTime / 1000).toFixed(0)}K</p>
                        <p className="text-sm text-gray-500">Watch Hours</p>
                    </CardContent>
                </Card>
            </div>

            {/* Channel Analytics */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-red-600" />
                        Channel Analytics (Last 28 Days)
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                            <p className="text-2xl font-bold text-blue-600">{(channelAnalytics.avgViews / 1000).toFixed(0)}K</p>
                            <p className="text-sm text-gray-500">Avg Views/Video</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                            <p className="text-2xl font-bold text-green-600">{channelAnalytics.avgWatchTime}</p>
                            <p className="text-sm text-gray-500">Avg Watch Time</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                            <p className="text-2xl font-bold text-purple-600">{channelAnalytics.ctr}%</p>
                            <p className="text-sm text-gray-500">Click-through Rate</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                            <p className="text-2xl font-bold text-red-600">+{channelAnalytics.subscriberGrowth}</p>
                            <p className="text-sm text-gray-500">New Subscribers</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Recent Videos */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="h-5 w-5" />
                        Recent Videos
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {recentVideos.map((video) => (
                        <div key={video.id} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className="w-32 h-20 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Play className="h-8 w-8 text-red-500" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-medium line-clamp-1">{video.title}</h4>
                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <Eye className="h-4 w-4" />
                                        {(video.views / 1000).toFixed(0)}K views
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <ThumbsUp className="h-4 w-4" />
                                        {(video.likes / 1000).toFixed(1)}K
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {video.duration}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {video.date}
                                    </span>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm">
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Settings */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Integration Settings
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div>
                            <p className="font-medium">Auto-upload course videos</p>
                            <p className="text-sm text-gray-500">Automatically upload new course content to YouTube</p>
                        </div>
                        <Switch checked={autoUpload} onCheckedChange={setAutoUpload} />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div>
                            <p className="font-medium">Connected Channel</p>
                            <p className="text-sm text-gray-500">EduEcosystem - UPSC Preparation</p>
                        </div>
                        <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Channel
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

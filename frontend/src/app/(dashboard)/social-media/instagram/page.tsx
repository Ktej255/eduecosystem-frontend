"use client";

import React, { useState } from "react";
import {
  Instagram as InstagramIcon, Users, Heart, MessageSquare, Image,
  Settings, TrendingUp, ArrowLeft, Eye, Bookmark, Grid3X3,
  CheckCircle2, ExternalLink, Play
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function InstagramPage() {
  const [isConnected] = useState(true);
  const [autoPost, setAutoPost] = useState(false);

  const stats = {
    followers: 12500,
    following: 245,
    posts: 89,
    avgEngagement: 4.8
  };

  const recentPosts = [
    { id: "1", type: "image", likes: 1234, comments: 89, saves: 234, thumbnail: "📚" },
    { id: "2", type: "reel", likes: 3456, comments: 234, saves: 567, thumbnail: "🎬" },
    { id: "3", type: "image", likes: 890, comments: 56, saves: 123, thumbnail: "📝" },
    { id: "4", type: "carousel", likes: 2100, comments: 145, saves: 345, thumbnail: "📖" },
    { id: "5", type: "reel", likes: 5600, comments: 456, saves: 890, thumbnail: "🎥" },
    { id: "6", type: "image", likes: 780, comments: 45, saves: 98, thumbnail: "✨" },
  ];

  const audienceInsights = {
    topLocations: ["Delhi", "Mumbai", "Bangalore"],
    ageRange: "18-34",
    genderSplit: { male: 65, female: 35 },
    activeHours: "6PM - 10PM"
  };

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
            <div className="w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-lg flex items-center justify-center">
              <InstagramIcon className="h-6 w-6 text-white" />
            </div>
            Instagram
          </h1>
          <p className="text-muted-foreground dark:text-muted-foreground mt-1">
            Manage your Instagram business account
          </p>
        </div>
        <Badge className="bg-green-100 text-green-700 px-3 py-1">
          <CheckCircle2 className="h-4 w-4 mr-1" />
          Connected
        </Badge>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white border-0">
          <CardContent className="p-5">
            <Users className="h-8 w-8 opacity-30 mb-2" />
            <p className="text-2xl font-bold">{(stats.followers / 1000).toFixed(1)}K</p>
            <p className="text-sm opacity-80">Followers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <Grid3X3 className="h-8 w-8 text-purple-500 mb-2" />
            <p className="text-2xl font-bold">{stats.posts}</p>
            <p className="text-sm text-muted-foreground">Posts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <Heart className="h-8 w-8 text-pink-500 mb-2" />
            <p className="text-2xl font-bold">{stats.avgEngagement}%</p>
            <p className="text-sm text-muted-foreground">Avg Engagement</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <TrendingUp className="h-8 w-8 text-green-500 mb-2" />
            <p className="text-2xl font-bold">{stats.following}</p>
            <p className="text-sm text-muted-foreground">Following</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Posts Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Grid3X3 className="h-5 w-5" />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {recentPosts.map((post) => (
              <div key={post.id} className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center group cursor-pointer hover:opacity-90 transition">
                <span className="text-4xl">{post.thumbnail}</span>
                {post.type === 'reel' && (
                  <div className="absolute top-2 right-2">
                    <Play className="h-5 w-5 text-white drop-shadow" />
                  </div>
                )}
                {post.type === 'carousel' && (
                  <div className="absolute top-2 right-2">
                    <Image className="h-5 w-5 text-white drop-shadow" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4 text-white rounded-lg">
                  <span className="flex items-center gap-1 text-sm">
                    <Heart className="h-4 w-4" />
                    {(post.likes / 1000).toFixed(1)}K
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <MessageSquare className="h-4 w-4" />
                    {post.comments}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audience Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-purple-600" />
            Audience Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Top Locations</p>
              <p className="font-medium">{audienceInsights.topLocations.join(", ")}</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Age Range</p>
              <p className="font-medium">{audienceInsights.ageRange}</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Gender Split</p>
              <p className="font-medium">{audienceInsights.genderSplit.male}% M / {audienceInsights.genderSplit.female}% F</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Active Hours</p>
              <p className="font-medium">{audienceInsights.activeHours}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Auto-post stories</p>
              <p className="text-sm text-muted-foreground">Share announcements as Instagram stories</p>
            </div>
            <Switch checked={autoPost} onCheckedChange={setAutoPost} />
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Connected Account</p>
              <p className="text-sm text-muted-foreground">@eduecosystem_official</p>
            </div>
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

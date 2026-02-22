"use client";

import React, { useState } from "react";
import {
  Linkedin, Link2, Settings, TrendingUp, Users, Share2,
  CheckCircle2, XCircle, ExternalLink, RefreshCw, ArrowLeft,
  BarChart3, Eye, ThumbsUp, MessageSquare
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function LinkedInPage() {
  const [isConnected, setIsConnected] = useState(true);
  const [autoPost, setAutoPost] = useState(true);

  const stats = {
    followers: 2450,
    connections: 890,
    posts: 45,
    impressions: 125000
  };

  const recentPosts = [
    { id: "1", title: "Top 10 Tips for UPSC Preparation", likes: 234, comments: 45, shares: 67, date: "Jan 10" },
    { id: "2", title: "Understanding Constitutional Amendments", likes: 189, comments: 32, shares: 42, date: "Jan 8" },
    { id: "3", title: "New Batch 1 Course Launch", likes: 312, comments: 89, shares: 120, date: "Jan 5" },
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
            <div className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center">
              <Linkedin className="h-6 w-6 text-white" />
            </div>
            LinkedIn
          </h1>
          <p className="text-muted-foreground dark:text-muted-foreground mt-1">
            Manage your LinkedIn integration and posts
          </p>
        </div>
        <div className="flex gap-2">
          {isConnected ? (
            <Badge className="bg-green-100 text-green-700 px-3 py-1">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              Connected
            </Badge>
          ) : (
            <Button className="bg-[#0A66C2]">
              <Link2 className="h-4 w-4 mr-2" />
              Connect Account
            </Button>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-[#0A66C2] to-blue-700 text-white border-0">
          <CardContent className="p-5">
            <Users className="h-8 w-8 opacity-30 mb-2" />
            <p className="text-2xl font-bold">{stats.followers.toLocaleString()}</p>
            <p className="text-sm opacity-80">Followers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <Share2 className="h-8 w-8 text-blue-500 mb-2" />
            <p className="text-2xl font-bold">{stats.connections}</p>
            <p className="text-sm text-muted-foreground">Connections</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <BarChart3 className="h-8 w-8 text-purple-500 mb-2" />
            <p className="text-2xl font-bold">{stats.posts}</p>
            <p className="text-sm text-muted-foreground">Posts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <Eye className="h-8 w-8 text-green-500 mb-2" />
            <p className="text-2xl font-bold">{(stats.impressions / 1000).toFixed(0)}K</p>
            <p className="text-sm text-muted-foreground">Impressions</p>
          </CardContent>
        </Card>
      </div>

      {/* Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Integration Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Auto-post blog articles</p>
              <p className="text-sm text-muted-foreground">Automatically share new blog posts to LinkedIn</p>
            </div>
            <Switch checked={autoPost} onCheckedChange={setAutoPost} />
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Connected Account</p>
              <p className="text-sm text-muted-foreground">eduecosystem@company.com</p>
            </div>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reconnect
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent LinkedIn Posts</CardTitle>
          <CardDescription>Performance of your latest posts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium">{post.title}</h4>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  {post.comments}
                </span>
                <span className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  {post.shares}
                </span>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

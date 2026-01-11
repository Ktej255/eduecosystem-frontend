"use client";

import React, { useState } from "react";
import {
  Facebook as FacebookIcon, Users, ThumbsUp, Share2, Eye,
  Settings, Link2, TrendingUp, MessageSquare, ArrowLeft,
  Calendar, Image, Video, CheckCircle2, ExternalLink
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";

export default function FacebookPage() {
  const [isConnected] = useState(true);
  const [autoPost, setAutoPost] = useState(true);

  const stats = {
    pageFollowers: 8900,
    reach: 45000,
    engagement: 3.2,
    posts: 120
  };

  const recentPosts = [
    { id: "1", content: "🎓 Join our free UPSC webinar this Sunday!", type: "image", likes: 456, comments: 89, shares: 123, reach: 5600 },
    { id: "2", content: "New batch starting soon! Limited seats available.", type: "video", likes: 678, comments: 145, shares: 234, reach: 8900 },
    { id: "3", content: "Student success story: How Rahul cracked UPSC in first attempt", type: "image", likes: 890, comments: 234, shares: 456, reach: 12000 },
  ];

  const pageInsights = [
    { label: "Page Views", value: "12.5K", change: 15 },
    { label: "Post Reach", value: "45K", change: 8 },
    { label: "Engagement Rate", value: "3.2%", change: -2 },
  ];

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
            <div className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center">
              <FacebookIcon className="h-6 w-6 text-white" />
            </div>
            Facebook
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your Facebook page and ads
          </p>
        </div>
        <Badge className="bg-green-100 text-green-700 px-3 py-1">
          <CheckCircle2 className="h-4 w-4 mr-1" />
          Page Connected
        </Badge>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-[#1877F2] to-blue-700 text-white border-0">
          <CardContent className="p-5">
            <Users className="h-8 w-8 opacity-30 mb-2" />
            <p className="text-2xl font-bold">{stats.pageFollowers.toLocaleString()}</p>
            <p className="text-sm opacity-80">Page Followers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <Eye className="h-8 w-8 text-purple-500 mb-2" />
            <p className="text-2xl font-bold">{(stats.reach / 1000).toFixed(0)}K</p>
            <p className="text-sm text-gray-500">Monthly Reach</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <ThumbsUp className="h-8 w-8 text-blue-500 mb-2" />
            <p className="text-2xl font-bold">{stats.engagement}%</p>
            <p className="text-sm text-gray-500">Engagement</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <Calendar className="h-8 w-8 text-green-500 mb-2" />
            <p className="text-2xl font-bold">{stats.posts}</p>
            <p className="text-sm text-gray-500">Total Posts</p>
          </CardContent>
        </Card>
      </div>

      {/* Page Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Page Insights (Last 28 Days)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {pageInsights.map((insight, idx) => (
              <div key={idx} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-2xl font-bold">{insight.value}</p>
                <p className="text-sm text-gray-500">{insight.label}</p>
                <p className={`text-sm mt-1 ${insight.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {insight.change >= 0 ? '↑' : '↓'} {Math.abs(insight.change)}%
                </p>
              </div>
            ))}
          </div>
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
              <p className="font-medium">Auto-post announcements</p>
              <p className="text-sm text-gray-500">Automatically share announcements to Facebook</p>
            </div>
            <Switch checked={autoPost} onCheckedChange={setAutoPost} />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div>
              <p className="font-medium">Connected Page</p>
              <p className="text-sm text-gray-500">EduEcosystem - UPSC Preparation</p>
            </div>
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Page
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts Performance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${post.type === 'video' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                }`}>
                {post.type === 'video' ? <Video className="h-6 w-6" /> : <Image className="h-6 w-6" />}
              </div>
              <div className="flex-1">
                <p className="font-medium">{post.content}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
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
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {post.reach.toLocaleString()} reach
                  </span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  Send, Users, MessageSquare, Bell, Settings, Link2,
  CheckCircle2, Bot, Plus, ArrowLeft, TrendingUp, Image,
  Trash2, Edit, ExternalLink
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

export default function TelegramPage() {
  const [isConnected, setIsConnected] = useState(true);
  const [botNotifications, setBotNotifications] = useState(true);

  const stats = {
    subscribers: 4560,
    groups: 3,
    channels: 2,
    messagesSent: 1250
  };

  const connectedChannels = [
    { name: "@EduEcosystem_Official", type: "channel", members: 2340, status: "active" },
    { name: "@UPSC_Batch1_Updates", type: "channel", members: 890, status: "active" },
    { name: "Batch 1 Discussion", type: "group", members: 1330, status: "active" },
  ];

  const recentBroadcasts = [
    { id: "1", message: "📚 New Day 5 content is now available!", sent: "2 hours ago", reach: 2100 },
    { id: "2", message: "🔔 Reminder: Live session tomorrow at 7 PM", sent: "1 day ago", reach: 1890 },
    { id: "3", message: "✅ Mock test results are out!", sent: "2 days ago", reach: 2340 },
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
            <div className="w-10 h-10 bg-[#0088CC] rounded-lg flex items-center justify-center">
              <Send className="h-6 w-6 text-white" />
            </div>
            Telegram Social
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your Telegram channels and bot
          </p>
        </div>
        <Badge className="bg-green-100 text-green-700 px-3 py-1">
          <Bot className="h-4 w-4 mr-1" />
          Bot Active
        </Badge>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-[#0088CC] to-blue-600 text-white border-0">
          <CardContent className="p-5">
            <Users className="h-8 w-8 opacity-30 mb-2" />
            <p className="text-2xl font-bold">{stats.subscribers.toLocaleString()}</p>
            <p className="text-sm opacity-80">Subscribers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <MessageSquare className="h-8 w-8 text-blue-500 mb-2" />
            <p className="text-2xl font-bold">{stats.groups}</p>
            <p className="text-sm text-gray-500">Groups</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <Bell className="h-8 w-8 text-purple-500 mb-2" />
            <p className="text-2xl font-bold">{stats.channels}</p>
            <p className="text-sm text-gray-500">Channels</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <TrendingUp className="h-8 w-8 text-green-500 mb-2" />
            <p className="text-2xl font-bold">{stats.messagesSent}</p>
            <p className="text-sm text-gray-500">Messages Sent</p>
          </CardContent>
        </Card>
      </div>

      {/* Connected Channels */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Connected Channels & Groups</CardTitle>
              <CardDescription>Your linked Telegram channels and groups</CardDescription>
            </div>
            <Button className="bg-[#0088CC]">
              <Plus className="h-4 w-4 mr-2" />
              Add Channel
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {connectedChannels.map((channel, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${channel.type === 'channel' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                  }`}>
                  {channel.type === 'channel' ? <Bell className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                </div>
                <div>
                  <p className="font-medium">{channel.name}</p>
                  <p className="text-sm text-gray-500">{channel.members.toLocaleString()} members</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-700">{channel.status}</Badge>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Bot Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            Bot Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div>
              <p className="font-medium">Push Notifications</p>
              <p className="text-sm text-gray-500">Send automatic notifications for new content</p>
            </div>
            <Switch checked={botNotifications} onCheckedChange={setBotNotifications} />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div>
              <p className="font-medium">Bot Username</p>
              <p className="text-sm text-gray-500">@EduEcosystemBot</p>
            </div>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configure
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Broadcasts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Broadcasts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentBroadcasts.map((broadcast) => (
            <div key={broadcast.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <p className="font-medium">{broadcast.message}</p>
                <p className="text-sm text-gray-500">{broadcast.sent} • Reached {broadcast.reach.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

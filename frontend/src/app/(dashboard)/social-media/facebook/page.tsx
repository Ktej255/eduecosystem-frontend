"use client";

import React, { useState } from "react";
import {
  Facebook as FacebookIcon, Users, ThumbsUp, Share2, Eye,
  Settings, TrendingUp, MessageSquare, ArrowLeft,
  Calendar, Image, Video, CheckCircle2, ExternalLink,
  Plus, Megaphone, Target, DollarSign
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SocialPostComposer from "@/components/teacher-portal/marketing/SocialPostComposer";
import { toast } from "sonner";

export default function FacebookPage() {
  const [autoPost, setAutoPost] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Boost Modal State
  const [isBoostModalOpen, setIsBoostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [boostBudget, setBoostBudget] = useState("500");
  const [isBoosting, setIsBoosting] = useState(false);

  const stats = {
    pageFollowers: 8900,
    reach: 45000,
    engagement: 3.2,
    posts: 120
  };

  const recentPosts = [
    { id: "1", content: "🎓 Join our free UPSC webinar this Sunday!", type: "image", likes: 456, comments: 89, shares: 123, reach: 5600, status: 'published' },
    { id: "2", content: "New batch starting soon! Limited seats available.", type: "video", likes: 678, comments: 145, shares: 234, reach: 8900, status: 'published' },
    { id: "3", content: "Student success story: How Rahul cracked UPSC in first attempt", type: "image", likes: 890, comments: 234, shares: 456, reach: 12000, status: 'published' },
  ];

  const scheduledPosts = [
    { id: "4", content: "The ultimate guide to reading the Hindu for UPSC.", type: "image", date: "Tomorrow, 10:00 AM" },
    { id: "5", content: "Pop Quiz: Can you answer this CSAT question?", type: "image", date: "Friday, 4:30 PM" }
  ];

  const handleBoostSubmit = () => {
    setIsBoosting(true);
    setTimeout(() => {
      toast.success(`Post boosted successfully with a budget of ₹${boostBudget}/day!`);
      setIsBoosting(false);
      setIsBoostModalOpen(false);
    }, 1500);
  };

  const openBoostModal = (postId: string) => {
    setSelectedPost(postId);
    setIsBoostModalOpen(true);
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
      <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Dashboard
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center shadow-sm">
              <FacebookIcon className="h-6 w-6 text-white" />
            </div>
            Facebook Marketing
          </h1>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            Create posts, schedule content, and run lead generation ads.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 px-3 py-1">
            <CheckCircle2 className="h-4 w-4 mr-1.5" />
            Page Connected
          </Badge>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" /> Settings
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="dashboard">Overview & Composer</TabsTrigger>
          <TabsTrigger value="calendar">Content Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6 animate-in fade-in duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Composer & Stats */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* AI Post Composer */}
              <div className="h-[380px]">
                <SocialPostComposer />
              </div>

              {/* High Level Stats Overview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-[#1877F2] to-blue-700 text-white border-0 shadow-md">
                  <CardContent className="p-4 flex flex-col items-center text-center justify-center h-full">
                    <Users className="h-6 w-6 opacity-80 mb-2" />
                    <p className="text-2xl font-bold">{stats.pageFollowers.toLocaleString()}</p>
                    <p className="text-xs opacity-80">Followers</p>
                  </CardContent>
                </Card>
                <Card className="border-border shadow-sm">
                  <CardContent className="p-4 flex flex-col items-center text-center justify-center h-full">
                    <Eye className="h-6 w-6 text-purple-500 mb-2" />
                    <p className="text-2xl font-bold">{(stats.reach / 1000).toFixed(0)}K</p>
                    <p className="text-xs text-muted-foreground">Mo. Reach</p>
                  </CardContent>
                </Card>
                <Card className="border-border shadow-sm">
                  <CardContent className="p-4 flex flex-col items-center text-center justify-center h-full">
                    <ThumbsUp className="h-6 w-6 text-blue-500 mb-2" />
                    <p className="text-2xl font-bold">{stats.engagement}%</p>
                    <p className="text-xs text-muted-foreground">Engagement</p>
                  </CardContent>
                </Card>
                <Card className="border-border shadow-sm">
                  <CardContent className="p-4 flex flex-col items-center text-center justify-center h-full">
                    <Calendar className="h-6 w-6 text-emerald-500 mb-2" />
                    <p className="text-2xl font-bold">{stats.posts}</p>
                    <p className="text-xs text-muted-foreground">Total Posts</p>
                  </CardContent>
                </Card>
              </div>

            </div>

            {/* Right Column: Recent & Scheduled */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Scheduled Posts Preview */}
              <Card className="border-border shadow-sm overflow-hidden">
                <div className="bg-slate-50 dark:bg-slate-900 border-b border-border p-4 flex items-center justify-between">
                  <h3 className="font-semibold text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-indigo-500" /> 
                    Upcoming Posts
                  </h3>
                  <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={() => setActiveTab("calendar")}>
                    View All
                  </Button>
                </div>
                <div className="p-0">
                  {scheduledPosts.length === 0 ? (
                    <div className="p-6 text-center text-sm text-muted-foreground">No posts scheduled.</div>
                  ) : (
                    <div className="divide-y divide-border">
                      {scheduledPosts.map(post => (
                        <div key={post.id} className="p-4 flex gap-3 hover:bg-muted/50 transition-colors">
                          <div className="w-10 h-10 rounded bg-indigo-100 dark:bg-indigo-900/50 flex flex-shrink-0 items-center justify-center text-indigo-600">
                            {post.type === 'image' ? <Image className="w-5 h-5"/> : <Video className="w-5 h-5"/>}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{post.content}</p>
                            <p className="text-xs text-muted-foreground mt-1 flex items-center">
                              <Calendar className="w-3 h-3 mr-1" /> {post.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>

              {/* Published & Boostable Posts */}
              <Card className="border-border shadow-sm overflow-hidden">
                <div className="bg-slate-50 dark:bg-slate-900 border-b border-border p-4">
                  <h3 className="font-semibold text-sm flex items-center">
                    <Share2 className="w-4 h-4 mr-2 text-[#1877F2]" /> 
                    Recent Activity
                  </h3>
                </div>
                <div className="p-0 divide-y divide-border">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="p-4 hover:bg-muted/50 transition-colors group">
                      <p className="text-sm text-foreground mb-3">{post.content}</p>
                      
                      <div className="flex flex-wrap items-center justify-between gap-y-3">
                        {/* Metrics */}
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
                            <ThumbsUp className="h-3 w-3" /> {post.likes}
                          </span>
                          <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
                            <MessageSquare className="h-3 w-3" /> {post.comments}
                          </span>
                          <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
                            <Eye className="h-3 w-3" /> {post.reach >= 1000 ? (post.reach/1000).toFixed(1) + 'k' : post.reach}
                          </span>
                        </div>
                        
                        {/* Boost Button */}
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="h-8 text-xs bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:hover:bg-orange-900/50"
                          onClick={() => openBoostModal(post.id)}
                        >
                          <Megaphone className="w-3 h-3 mr-1.5" /> Boost
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

            </div>
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="border-border min-h-[500px] flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/20">
            <Calendar className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <h3 className="text-lg font-medium">Visual Content Calendar</h3>
            <p className="text-muted-foreground text-sm max-w-sm text-center mt-2">
              Drag and drop scheduled posts onto specific dates. Calendar grid implementation goes here.
            </p>
            <Button className="mt-6" variant="outline" onClick={() => setActiveTab("dashboard")}>
              Back to Composer
            </Button>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Boost Post Modal */}
      <Dialog open={isBoostModalOpen} onOpenChange={setIsBoostModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-orange-500" />
              Boost Post to Generate Leads
            </DialogTitle>
            <DialogDescription>
              Turn this organic post into an Ad to capture more student leads.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="audience" className="flex items-center text-sm font-medium">
                <Target className="w-4 h-4 mr-2 text-muted-foreground" />
                Target Audience
              </Label>
              <Select defaultValue="upsc">
                <SelectTrigger id="audience">
                  <SelectValue placeholder="Select Audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upsc">UPSC Aspirants (18-35 yrs)</SelectItem>
                  <SelectItem value="state">State PSC Candidates</SelectItem>
                  <SelectItem value="custom">Custom Lookalike Audience</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2 mt-2">
              <Label htmlFor="leadform" className="flex items-center text-sm font-medium">
                <ExternalLink className="w-4 h-4 mr-2 text-muted-foreground" />
                Connect Lead Magnet (Destination)
              </Label>
              <Select defaultValue="magnet_1">
                <SelectTrigger id="leadform">
                  <SelectValue placeholder="Select Magnet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="magnet_1">"50+ Geography Mnemonics" Form</SelectItem>
                  <SelectItem value="magnet_2">"Polity Cheat Sheet" Form</SelectItem>
                  <SelectItem value="none">Send directly to Course Page</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">Leads collected will automatically appear in your CRM.</p>
            </div>

            <div className="grid gap-2 mt-2">
              <Label htmlFor="budget" className="flex items-center text-sm font-medium">
                <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
                Daily Budget (₹)
              </Label>
              <Input 
                id="budget" 
                type="number" 
                value={boostBudget}
                onChange={(e) => setBoostBudget(e.target.value)}
                placeholder="500" 
              />
              <p className="text-xs text-muted-foreground mt-1">
                Est. Reach: {parseInt(boostBudget) * 5} - {parseInt(boostBudget) * 12} people per day.
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="ghost" onClick={() => setIsBoostModalOpen(false)}>Cancel</Button>
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white" 
              onClick={handleBoostSubmit}
              disabled={isBoosting}
            >
              {isBoosting ? "Launching..." : "Launch Ad Campaign"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Ensure proper re-exporting of Clock by including it in lucide-react imports above
import { Clock } from "lucide-react";

"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import RewardGranter from '@/components/teacher-portal/gamification/RewardGranter';
import SeasonManager from '@/components/teacher-portal/gamification/SeasonManager';
import DiscussionForum from '@/components/lms/community/DiscussionForum';
import { Trophy, MessageSquare, Users } from 'lucide-react';

export default function TeacherCommunityPage() {
    return (
        <div className="p-6 h-[calc(100vh-64px)] overflow-y-auto">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-foreground">Community & Gamification</h1>
                <p className="text-muted-foreground">Manage student engagement, rewards, and discussions.</p>
            </div>

            <Tabs defaultValue="gamification" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="gamification">
                        <Trophy className="w-4 h-4 mr-2" />
                        Gamification Control
                    </TabsTrigger>
                    <TabsTrigger value="forum">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Discussion Forum
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="gamification" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <RewardGranter />
                        <SeasonManager />
                    </div>
                </TabsContent>

                <TabsContent value="forum">
                    <DiscussionForum />
                </TabsContent>
            </Tabs>
        </div>
    );
}

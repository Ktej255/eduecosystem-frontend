"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Send, Users, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function PushNotificationCenter() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [audience, setAudience] = useState("all");
    const [isSending, setIsSending] = useState(false);

    const handleSend = () => {
        if (!title || !message) {
            toast.error("Please enter a title and message");
            return;
        }

        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            toast.success(`Notification sent to ${audience === 'all' ? 'All Users' : audience}!`);
            setTitle("");
            setMessage("");
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto h-full space-y-6">
            <Card className="border-neutral-200 dark:border-neutral-800 bg-card dark:bg-neutral-900">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-rose-500">
                        <Bell className="w-5 h-5" />
                        Push Notification Center
                    </CardTitle>
                    <p className="text-xs text-neutral-500">Send instant alerts to students' mobile devices.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Target Audience</Label>
                            <Select value={audience} onValueChange={setAudience}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Users (15.2k)</SelectItem>
                                    <SelectItem value="paid">Paid Students (2.4k)</SelectItem>
                                    <SelectItem value="batch1">UPSC Batch 1 (850)</SelectItem>
                                    <SelectItem value="inactive">Inactive (30 days)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Metric Preview</Label>
                            <div className="flex items-center gap-4 text-sm text-neutral-500 pt-2">
                                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> ~{audience === 'all' ? '15,200' : '850'} Users</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Instant Delivery</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Notification Title</Label>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g. 🔴 Live Class Starting in 10 Mins!"
                            maxLength={50}
                        />
                        <div className="flex justify-end text-[10px] text-neutral-400">{title.length}/50</div>
                    </div>

                    <div className="space-y-2">
                        <Label>Message Body</Label>
                        <Textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Join now to cover Indian Polity basics..."
                            maxLength={150}
                            className="h-24 resize-none"
                        />
                        <div className="flex justify-end text-[10px] text-neutral-400">{message.length}/150</div>
                    </div>

                    <Button
                        onClick={handleSend}
                        disabled={isSending}
                        className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold h-12"
                    >
                        {isSending ? (
                            <span className="flex items-center gap-2">
                                <Send className="w-4 h-4 animate-spin" /> Sending...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <Send className="w-4 h-4" /> Send Blast
                            </span>
                        )}
                    </Button>
                </CardContent>
            </Card>

            <Card className="border-neutral-200 dark:border-neutral-800 bg-card dark:bg-neutral-900 opacity-60">
                <CardHeader>
                    <CardTitle className="text-sm">Recent Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                            <span className="font-medium">New History Notes Uploaded</span>
                            <div className="flex items-center gap-4 text-neutral-500">
                                <span>Batch 1</span>
                                <span className="flex items-center gap-1 text-green-600"><CheckCircle className="w-3 h-3" /> Sent</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-sm p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                            <span className="font-medium">Sunday Mock Test Reminder</span>
                            <div className="flex items-center gap-4 text-neutral-500">
                                <span>All Active</span>
                                <span className="flex items-center gap-1 text-green-600"><CheckCircle className="w-3 h-3" /> Sent</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

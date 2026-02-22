"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
    ArrowLeft, Bell, Send, Users, GraduationCap, Clock,
    CheckCircle2, AlertTriangle, Trash2, Plus
} from "lucide-react";

interface Announcement {
    id: number;
    title: string;
    message: string;
    target: "all" | "students" | "teachers" | "batch1" | "ras";
    created_at: string;
    is_active: boolean;
}

export default function AdminAnnouncementsPage() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newMessage, setNewMessage] = useState("");
    const [newTarget, setNewTarget] = useState<Announcement["target"]>("all");
    const [loading, setLoading] = useState(false);

    // Mock data for now - would be fetched from API
    useEffect(() => {
        setAnnouncements([
            {
                id: 1,
                title: "Welcome to Batch 1!",
                message: "Congratulations on joining UPSC Batch 1. Your journey starts now!",
                target: "batch1",
                created_at: "2026-01-03T10:00:00Z",
                is_active: true
            },
            {
                id: 2,
                title: "New Polity Content Available",
                message: "Cycle 1 Day 3 content is now uploaded. Check your dashboard.",
                target: "students",
                created_at: "2026-01-02T15:00:00Z",
                is_active: true
            }
        ]);
    }, []);

    const handleCreateAnnouncement = async () => {
        if (!newTitle.trim() || !newMessage.trim()) return;

        setLoading(true);
        // API call would go here
        const newAnnouncement: Announcement = {
            id: announcements.length + 1,
            title: newTitle,
            message: newMessage,
            target: newTarget,
            created_at: new Date().toISOString(),
            is_active: true
        };

        setAnnouncements([newAnnouncement, ...announcements]);
        setNewTitle("");
        setNewMessage("");
        setNewTarget("all");
        setShowCreateForm(false);
        setLoading(false);
    };

    const getTargetBadge = (target: Announcement["target"]) => {
        const styles = {
            all: "bg-blue-100 text-blue-700",
            students: "bg-purple-100 text-purple-700",
            teachers: "bg-emerald-100 text-emerald-700",
            batch1: "bg-orange-100 text-orange-700",
            ras: "bg-pink-100 text-pink-700"
        };
        return <Badge className={styles[target]}>{target.toUpperCase()}</Badge>;
    };

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">
                            📢 Announcements
                        </h1>
                        <p className="text-muted-foreground text-sm">Send notifications to teachers and students</p>
                    </div>
                </div>
                <Button onClick={() => setShowCreateForm(!showCreateForm)} className="gap-2">
                    <Plus className="h-4 w-4" /> New Announcement
                </Button>
            </div>

            {/* Create Form */}
            {showCreateForm && (
                <Card className="border-2 border-dashed border-blue-300">
                    <CardHeader>
                        <CardTitle className="text-lg">Create New Announcement</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Title</label>
                            <Input
                                placeholder="Announcement title..."
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Message</label>
                            <Textarea
                                placeholder="Write your announcement message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                className="mt-1"
                                rows={4}
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Target Audience</label>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {(["all", "students", "teachers", "batch1", "ras"] as const).map((target) => (
                                    <Button
                                        key={target}
                                        variant={newTarget === target ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setNewTarget(target)}
                                        className="capitalize"
                                    >
                                        {target}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-2 pt-2">
                            <Button onClick={handleCreateAnnouncement} disabled={loading} className="gap-2">
                                <Send className="h-4 w-4" /> Send Announcement
                            </Button>
                            <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                                Cancel
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Announcements List */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-blue-600" />
                        Active Announcements ({announcements.length})
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {announcements.map((announcement) => (
                            <div key={announcement.id} className="p-4 bg-muted rounded-lg">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold text-foreground">
                                                {announcement.title}
                                            </h3>
                                            {getTargetBadge(announcement.target)}
                                        </div>
                                        <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">
                                            {announcement.message}
                                        </p>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {new Date(announcement.created_at).toLocaleString()}
                                        </p>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                        {announcements.length === 0 && (
                            <div className="text-center py-8 text-muted-foreground">
                                <Bell className="h-12 w-12 mx-auto mb-3 opacity-50" />
                                <p>No announcements yet</p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

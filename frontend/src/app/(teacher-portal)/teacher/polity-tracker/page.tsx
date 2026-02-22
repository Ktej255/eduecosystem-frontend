"use client";

import { useState, useEffect } from "react";
import { Shield, Check, Circle, Loader2, AlertCircle, FileText, Video, Mic, Smartphone, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import api from "@/lib/api";
import { toast } from "sonner"; // Assuming sonner or use-toast is available, if not I'll use standard alert or console

interface PolityChapterTask {
    id: number;
    chapter_number: number;
    chapter_title: string;
    research_done: boolean;
    report_generated: boolean;
    report_saved: boolean;
    video_generated: boolean;
    podcast_generated: boolean;
    status: 'pending' | 'in_progress' | 'completed';
    updated_at: string;
}

export default function PolityTrackerPage() {
    const [tasks, setTasks] = useState<PolityChapterTask[]>([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({ completed: 0, total: 95, percentage: 0 });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            // First try to fetch, if empty try seed
            let res = await api.get('/polity/tasks');
            let data = res.data;

            if (data.length === 0) {
                // Determine if we need to seed
                const seedRes = await api.post('/polity/seed');
                data = seedRes.data;
            }

            setTasks(data);
            calculateStats(data);
        } catch (error) {
            console.error("Failed to fetch polity tasks:", error);
            // toast.error("Failed to load tasks");
        } finally {
            setLoading(false);
        }
    };

    const calculateStats = (data: PolityChapterTask[]) => {
        const completed = data.filter(t => t.status === 'completed').length;
        setStats({
            completed,
            total: 95, // Or data.length
            percentage: Math.round((completed / 95) * 100)
        });
    };

    const updateTask = async (taskId: number, field: keyof PolityChapterTask, value: boolean) => {
        // Optimistic update
        const oldTasks = [...tasks];
        const newTasks = tasks.map(t => {
            if (t.id === taskId) {
                const updated = { ...t, [field]: value };
                // Simple local status logic for UI responsiveness
                const allDone = updated.research_done && updated.report_generated && updated.report_saved && updated.video_generated && updated.podcast_generated;
                const anyDone = updated.research_done || updated.report_generated || updated.report_saved || updated.video_generated || updated.podcast_generated;
                updated.status = allDone ? 'completed' : (anyDone ? 'in_progress' : 'pending');
                return updated;
            }
            return t;
        });
        setTasks(newTasks);
        calculateStats(newTasks);

        try {
            await api.patch(`/polity/tasks/${taskId}`, { [field]: value });
        } catch (error) {
            console.error("Failed to update task:", error);
            // Revert on failure
            setTasks(oldTasks);
            calculateStats(oldTasks);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                    <p className="text-sm text-muted-foreground">Loading operations center...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                        <Shield className="h-8 w-8 text-blue-600" />
                        Operation Lakshmikant Shield
                    </h1>
                    <p className="text-muted-foreground dark:text-muted-foreground mt-1">
                        Tracking the 5-step content factory for all 95 chapters
                    </p>
                </div>

                {/* Stats Card */}
                <Card className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white border-0">
                    <CardContent className="p-4 flex items-center gap-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold">{stats.completed}</div>
                            <div className="text-xs opacity-70">Completed</div>
                        </div>
                        <div className="h-10 w-px bg-card/20"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">{stats.total - stats.completed}</div>
                            <div className="text-xs opacity-70">Pending</div>
                        </div>
                        <div className="h-10 w-px bg-card/20"></div>
                        <div className="w-24">
                            <div className="flex justify-between text-xs mb-1">
                                <span>Progress</span>
                                <span>{stats.percentage}%</span>
                            </div>
                            <Progress value={stats.percentage} className="h-2 bg-card/20" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Content Pipeline</CardTitle>
                    <CardDescription>Manage the 5-step process for each chapter</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[80px]">Ch #</TableHead>
                                    <TableHead className="min-w-[200px]">Chapter Title</TableHead>
                                    <TableHead className="text-center">Research</TableHead>
                                    <TableHead className="text-center">Report</TableHead>
                                    <TableHead className="text-center">Save DB</TableHead>
                                    <TableHead className="text-center">Video</TableHead>
                                    <TableHead className="text-center">Podcast</TableHead>
                                    <TableHead className="text-center">Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tasks.map((task) => (
                                    <TableRow key={task.id} className={task.status === 'completed' ? 'bg-green-50/50 dark:bg-green-900/10' : ''}>
                                        <TableCell className="font-medium">#{task.chapter_number}</TableCell>
                                        <TableCell>
                                            <span className={task.status === 'completed' ? 'text-green-700 font-medium' : ''}>
                                                {task.chapter_title}
                                            </span>
                                        </TableCell>

                                        {/* Step 1: Research */}
                                        <TableCell className="text-center">
                                            <Checkbox
                                                checked={task.research_done}
                                                onCheckedChange={(c) => updateTask(task.id, 'research_done', c as boolean)}
                                                className="data-[state=checked]:bg-blue-600"
                                            />
                                        </TableCell>

                                        {/* Step 2: Report */}
                                        <TableCell className="text-center">
                                            <Checkbox
                                                checked={task.report_generated}
                                                disabled={!task.research_done}
                                                onCheckedChange={(c) => updateTask(task.id, 'report_generated', c as boolean)}
                                                className="data-[state=checked]:bg-indigo-600"
                                            />
                                        </TableCell>

                                        {/* Step 3: Save DB */}
                                        <TableCell className="text-center">
                                            <Checkbox
                                                checked={task.report_saved}
                                                disabled={!task.report_generated}
                                                onCheckedChange={(c) => updateTask(task.id, 'report_saved', c as boolean)}
                                                className="data-[state=checked]:bg-purple-600"
                                            />
                                        </TableCell>

                                        {/* Step 4: Video */}
                                        <TableCell className="text-center">
                                            <Checkbox
                                                checked={task.video_generated}
                                                disabled={!task.report_saved}
                                                onCheckedChange={(c) => updateTask(task.id, 'video_generated', c as boolean)}
                                                className="data-[state=checked]:bg-pink-600"
                                            />
                                        </TableCell>

                                        {/* Step 5: Podcast */}
                                        <TableCell className="text-center">
                                            <Checkbox
                                                checked={task.podcast_generated}
                                                disabled={!task.video_generated}
                                                onCheckedChange={(c) => updateTask(task.id, 'podcast_generated', c as boolean)}
                                                className="data-[state=checked]:bg-orange-600"
                                            />
                                        </TableCell>

                                        {/* Status */}
                                        <TableCell className="text-center">
                                            {task.status === 'completed' && <Badge className="bg-green-600">Done</Badge>}
                                            {task.status === 'in_progress' && <Badge variant="secondary" className="bg-blue-100 text-blue-700">WIP</Badge>}
                                            {task.status === 'pending' && <Badge variant="outline" className="text-muted-foreground">Todo</Badge>}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

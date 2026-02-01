"use client";

import { useState } from "react";
import {
    BookOpen,
    FileText,
    Mic,
    Video,
    CheckCircle,
    Clock,
    MoreVertical,
    Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type Status = 'research' | 'script' | 'record' | 'edit' | 'publish';

interface ChapterTask {
    id: string;
    chapter: number;
    title: string;
    status: Status;
    assignee?: string;
    dueDate?: string;
}

const MOCK_TASKS: ChapterTask[] = [
    { id: '1', chapter: 27, title: 'Supreme Court', status: 'research' },
    { id: '2', chapter: 28, title: 'Judicial Review', status: 'script' },
    { id: '3', chapter: 29, title: 'Judicial Activism', status: 'record' },
    { id: '4', chapter: 30, title: 'Governor', status: 'edit' },
    { id: '5', chapter: 26, title: 'Parliamentary Committees', status: 'publish' },
];

const COLUMNS: { id: Status; label: string; icon: any; color: string }[] = [
    { id: 'research', label: 'Research', icon: BookOpen, color: 'text-blue-500 bg-blue-50 border-blue-200' },
    { id: 'script', label: 'Scripting', icon: FileText, color: 'text-purple-500 bg-purple-50 border-purple-200' },
    { id: 'record', label: 'Recording', icon: Mic, color: 'text-red-500 bg-red-50 border-red-200' },
    { id: 'edit', label: 'Editing', icon: Video, color: 'text-orange-500 bg-orange-50 border-orange-200' },
    { id: 'publish', label: 'Ready', icon: CheckCircle, color: 'text-emerald-500 bg-emerald-50 border-emerald-200' },
];

export default function LakshmikantKanban() {
    const [tasks, setTasks] = useState<ChapterTask[]>(MOCK_TASKS);

    // Group tasks by status
    const groupedTasks = tasks.reduce((acc, task) => {
        if (!acc[task.status]) acc[task.status] = [];
        acc[task.status].push(task);
        return acc;
    }, {} as Record<Status, ChapterTask[]>);

    return (
        <Card className="col-span-1 md:col-span-3 lg:col-span-4 border-indigo-100 shadow-sm bg-gradient-to-br from-white to-slate-50">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                        <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-lg font-bold text-slate-800">Operation Lakshmikant</CardTitle>
                        <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Production Pipeline</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="hidden md:flex items-center gap-2 text-xs font-medium bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 shadow-sm">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        Next Deadline: Governor (Today 6 PM)
                    </div>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md">
                        <Plus className="h-4 w-4 mr-1.5" /> New Chapter
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 h-[300px]">
                    {COLUMNS.map((col) => (
                        <div key={col.id} className="flex flex-col h-full rounded-xl bg-slate-100/50 border border-slate-200/60 overflow-hidden">
                            {/* Column Header */}
                            <div className={cn("p-2 border-b border-slate-200/60 flex items-center justify-between bg-white", col.color.split(' ')[2])}>
                                <div className="flex items-center gap-2">
                                    <col.icon className={cn("h-3.5 w-3.5", col.color.split(' ')[0])} />
                                    <span className="text-xs font-bold text-slate-700">{col.label}</span>
                                </div>
                                <span className="text-[10px] font-bold bg-slate-100 px-1.5 py-0.5 rounded-full text-slate-500">
                                    {groupedTasks[col.id]?.length || 0}
                                </span>
                            </div>

                            {/* Column Content */}
                            <ScrollArea className="flex-1 p-2">
                                <div className="space-y-2">
                                    {groupedTasks[col.id]?.map((task) => (
                                        <div
                                            key={task.id}
                                            className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group relative"
                                        >
                                            <div className="flex items-start justify-between mb-1">
                                                <Badge variant="outline" className="text-[10px] px-1 h-4 border-indigo-100 text-indigo-600 bg-indigo-50 font-normal">
                                                    Ch {task.chapter}
                                                </Badge>
                                                <MoreVertical className="h-3 w-3 text-slate-300 opacity-0 group-hover:opacity-100" />
                                            </div>
                                            <h4 className="text-xs font-semibold text-slate-800 leading-tight mb-2">
                                                {task.title}
                                            </h4>

                                            {/* Progress Bar (Mock) */}
                                            <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className={cn("h-full w-[60%] rounded-full opacity-60", col.color.split(' ')[1].replace('bg-', 'bg-'))}></div>
                                            </div>
                                        </div>
                                    ))}
                                    {(!groupedTasks[col.id] || groupedTasks[col.id].length === 0) && (
                                        <div className="h-full flex items-center justify-center pt-8 opacity-20">
                                            <div className="border-2 border-dashed border-slate-400 rounded-lg p-3">
                                                <Plus className="h-4 w-4 text-slate-500" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </ScrollArea>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

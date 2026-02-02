"use client";

import { useState } from "react";
import {
    ShieldAlert,
    Search,
    Filter,
    Download,
    Clock,
    User,
    Activity,
    FileText,
    Settings,
    Trash2,
    MessageSquare
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// --- Mock Data ---

interface LogEntry {
    id: string;
    action: string;
    description: string;
    user: string;
    role: string;
    ip: string;
    timestamp: string;
    status: "success" | "warning" | "error";
    module: "content" | "auth" | "settings" | "finance";
}

const mockLogs: LogEntry[] = [
    {
        id: "log-001",
        action: "Content Published",
        description: "Published 'Geography Module 2.0' to Batch 1",
        user: "Rahul Varma",
        role: "Instructor",
        ip: "192.168.1.42",
        timestamp: "2 mins ago",
        status: "success",
        module: "content"
    },
    {
        id: "log-002",
        action: "Permission Changed",
        description: "Granted 'Finance View' access to Amit Kumar",
        user: "System Admin",
        role: "Super Admin",
        ip: "10.0.0.5",
        timestamp: "1 hour ago",
        status: "warning",
        module: "settings"
    },
    {
        id: "log-003",
        action: "Login Failed",
        description: "Multiple failed login attempts detected",
        user: "unknown@example.com",
        role: "Guest",
        ip: "45.2.1.99",
        timestamp: "3 hours ago",
        status: "error",
        module: "auth"
    },
    {
        id: "log-004",
        action: "Coupon Created",
        description: "Created discount code 'WELCOME50'",
        user: "Priya Singh",
        role: "Marketing",
        ip: "192.168.1.12",
        timestamp: "Yesterday",
        status: "success",
        module: "finance"
    },
    {
        id: "log-005",
        action: "Content Deleted",
        description: "Deleted 'Old Polity Notes.pdf'",
        user: "Rahul Varma",
        role: "Instructor",
        ip: "192.168.1.42",
        timestamp: "Yesterday",
        status: "warning",
        module: "content"
    }
];

import { useActivityLogStore } from "@/store/activityLogStore";

export default function AuditLogViewer() {
    const { logs } = useActivityLogStore();
    const [searchTerm, setSearchTerm] = useState("");
    const [moduleFilter, setModuleFilter] = useState("all");

    const getIcon = (module: string) => {
        switch (module) {
            case "content": return FileText;
            case "settings": return Settings;
            case "auth": return ShieldAlert;
            case "finance": return Activity;
            case "communication": return MessageSquare;
            default: return Activity;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "success": return "bg-green-100 text-green-700 border-green-200";
            case "warning": return "bg-amber-100 text-amber-700 border-amber-200";
            case "error": return "bg-red-100 text-red-700 border-red-200";
            default: return "bg-slate-100";
        }
    };

    const filteredLogs = logs.filter(log =>
        (moduleFilter === "all" || log.module === moduleFilter) &&
        (log.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.action.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <ShieldAlert className="h-5 w-5 text-indigo-500" />
                            System Audit Log
                        </CardTitle>
                        <CardDescription>Track all administrative actions and security events.</CardDescription>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <div className="relative w-full sm:w-64">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                placeholder="Search logs..."
                                className="pl-9 h-9 text-xs bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Select value={moduleFilter} onValueChange={setModuleFilter}>
                            <SelectTrigger className="w-[140px] h-9 text-xs">
                                <Filter className="h-3 w-3 mr-2 text-slate-500" />
                                <SelectValue placeholder="Module" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Modules</SelectItem>
                                <SelectItem value="content">Content</SelectItem>
                                <SelectItem value="auth">Security</SelectItem>
                                <SelectItem value="settings">Settings</SelectItem>
                                <SelectItem value="finance">Finance</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm" className="h-9">
                            <Download className="h-4 w-4 mr-2" /> Export
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 font-medium border-b border-slate-100 dark:border-slate-800">
                            <tr>
                                <th className="px-6 py-3 w-[250px]">Action</th>
                                <th className="px-6 py-3">User</th>
                                <th className="px-6 py-3">Details</th>
                                <th className="px-6 py-3 w-[150px] text-right">Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {filteredLogs.map((log) => {
                                const Icon = getIcon(log.module);
                                return (
                                    <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-start gap-3">
                                                <div className={cn("p-2 rounded-lg bg-slate-100 dark:bg-slate-800",
                                                    log.status === 'error' ? "text-red-600 bg-red-50" :
                                                        log.status === 'warning' ? "text-amber-600 bg-amber-50" : "text-slate-600"
                                                )}>
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-slate-800 dark:text-slate-200">{log.action}</div>
                                                    <Badge variant="outline" className={cn("mt-1 text-[10px] capitalize border-0 px-1.5 py-0 h-5", getStatusColor(log.status))}>
                                                        {log.status}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <User className="h-3 w-3 text-slate-400" />
                                                <span className="font-medium text-slate-700 dark:text-slate-300">{log.user}</span>
                                            </div>
                                            <div className="text-xs text-slate-500 ml-5">{log.role}</div>
                                            <div className="text-[10px] text-slate-400 ml-5 font-mono mt-0.5">IP: {log.ip}</div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                                            {log.description}
                                        </td>
                                        <td className="px-6 py-4 text-right whitespace-nowrap">
                                            <div className="flex items-center justify-end gap-1.5 text-xs text-slate-500">
                                                <Clock className="h-3 w-3" />
                                                {log.timestamp}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {filteredLogs.length === 0 && (
                        <div className="text-center py-10 text-slate-500">
                            <ShieldAlert className="h-10 w-10 mx-auto text-slate-300 mb-2" />
                            <p>No audit logs found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

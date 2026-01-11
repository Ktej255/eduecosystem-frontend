"use client";

import React from "react";
import {
    History, ArrowLeft, Download, Filter, Search,
    AlertCircle, CheckCircle2, Clock, Globe
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function IntegrationLogsPage() {
    const logs = [
        { id: "log_1", event: "user.created", source: "API", status: "success", code: 201, latency: "45ms", timestamp: "Today, 10:45 AM", details: "User ID 45890 created via API" },
        { id: "log_2", event: "payment.failed", source: "Stripe Webhook", status: "error", code: 402, latency: "120ms", timestamp: "Today, 10:42 AM", details: "Card declined for Invoice #9001" },
        { id: "log_3", event: "course.updated", source: "System", status: "success", code: 200, latency: "38ms", timestamp: "Today, 10:30 AM", details: "Course 'Polity 101' updated" },
        { id: "log_4", event: "email.sent", source: "Mailchimp", status: "success", code: 200, latency: "245ms", timestamp: "Today, 10:15 AM", details: "Welcome email sent to user@example.com" },
        { id: "log_5", event: "webhook.delivery", source: "Slack", status: "success", code: 200, latency: "180ms", timestamp: "Today, 09:55 AM", details: "Notification posted to #alerts" },
        { id: "log_6", event: "db.backup", source: "System Automation", status: "warning", code: 200, latency: "15s", timestamp: "Today, 04:00 AM", details: "Backup completed with warnings" },
    ];

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
            <Link href="/teacher/integrations/webhooks" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Webhooks
            </Link>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
                        <History className="h-8 w-8 text-gray-600" />
                        Integration Logs
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                        View processing history for APIs, webhooks, and integrations
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Export Logs
                    </Button>
                </div>
            </div>

            {/* Filters */}
            <Card>
                <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input placeholder="Search logs by event, ID, or details..." className="pl-9" />
                        </div>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Statuses</SelectItem>
                                <SelectItem value="success">Success</SelectItem>
                                <SelectItem value="error">Error</SelectItem>
                                <SelectItem value="warning">Warning</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Source" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Sources</SelectItem>
                                <SelectItem value="api">API</SelectItem>
                                <SelectItem value="webhook">Webhooks</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="secondary">
                            <Filter className="h-4 w-4 mr-2" />
                            Apply
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Logs Table */}
            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Status</TableHead>
                                <TableHead>Event & ID</TableHead>
                                <TableHead>Source</TableHead>
                                <TableHead>Details</TableHead>
                                <TableHead>Time & Latency</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {logs.map((log) => (
                                <TableRow key={log.id}>
                                    <TableCell>
                                        <div className={`p-1.5 rounded-full w-fit ${log.status === 'success' ? 'bg-green-100 text-green-600' :
                                                log.status === 'error' ? 'bg-red-100 text-red-600' :
                                                    'bg-yellow-100 text-yellow-600'
                                            }`}>
                                            {log.status === 'success' ? <CheckCircle2 className="h-4 w-4" /> :
                                                log.status === 'error' ? <AlertCircle className="h-4 w-4" /> :
                                                    <AlertCircle className="h-4 w-4" />}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">{log.event}</div>
                                        <div className="text-xs text-gray-500 font-mono">{log.id}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="flex items-center gap-1 w-fit">
                                            <Globe className="h-3 w-3" />
                                            {log.source}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="max-w-[300px] truncate" title={log.details}>
                                        {log.details}
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-sm">{log.timestamp}</div>
                                        <div className="text-xs text-gray-500 flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {log.latency}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="ghost" size="sm">
                                            Details
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

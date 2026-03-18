"use client";

import React, { useState } from "react";
import {
    Webhook, ArrowLeft, Plus, CheckCircle2, XCircle,
    MoreVertical, History, Activity, AlertCircle, RefreshCw
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function WebhooksPage() {
    const webhooks = [
        { id: "1", url: "https://api.myapp.com/webhooks/enrolments", events: ["user.enrolled", "course.completed"], status: "active", lastDelivery: "Success (2m ago)" },
        { id: "2", url: "https://slack.com/api/webhooks/notifications", events: ["payment.failed"], status: "active", lastDelivery: "Success (1h ago)" },
        { id: "3", url: "https://backup-service.com/hooks", events: ["db.backup"], status: "inactive", lastDelivery: "Failed (2d ago)" },
    ];

    const recentDeliveries = [
        { id: "req_123", event: "user.enrolled", url: ".../enrolments", status: "success", code: 200, time: "2 mins ago" },
        { id: "req_124", event: "payment.succeeded", url: ".../payments", status: "success", code: 200, time: "15 mins ago" },
        { id: "req_125", event: "course.published", url: ".../notifications", status: "failed", code: 500, time: "1 hour ago" },
    ];

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
            <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-muted-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
            </Link>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                        <Webhook className="h-8 w-8 text-pink-600" />
                        Webhooks
                    </h1>
                    <p className="text-muted-foreground dark:text-muted-foreground mt-1">
                        Configure real-time event notifications for your applications
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" asChild>
                        <Link href="/teacher/integrations/activity-logs">
                            <History className="h-4 w-4 mr-2" />
                            View Full Log
                        </Link>
                    </Button>
                    <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Endpoint
                    </Button>
                </div>
            </div>

            {/* Active Webhooks */}
            <Card>
                <CardHeader>
                    <CardTitle>Configured Endpoints</CardTitle>
                    <CardDescription>Destinations receiving real-time updates</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Target URL</TableHead>
                                    <TableHead>Events</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Last Delivery</TableHead>
                                    <TableHead className="w-[50px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {webhooks.map((hook) => (
                                    <TableRow key={hook.id}>
                                        <TableCell className="font-mono text-sm max-w-[200px] truncate" title={hook.url}>
                                            {hook.url}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex gap-1 flex-wrap">
                                                {hook.events.map((e, i) => (
                                                    <Badge key={i} variant="secondary" className="text-xs">{e}</Badge>
                                                ))}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={hook.status === 'active' ? "default" : "secondary"} className={hook.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-200' : ''}>
                                                {hook.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-sm text-muted-foreground">
                                            {hook.lastDelivery}
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                        <MoreVertical className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>Test Delivery</DropdownMenuItem>
                                                    <DropdownMenuItem>Edit Settings</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-red-600">Disable</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Recent Deliveries */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <Activity className="h-5 w-5" />
                            Recent Deliveries
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recentDeliveries.map((log) => (
                            <div key={log.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-full ${log.status === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                        }`}>
                                        {log.status === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                                    </div>
                                    <div>
                                        <p className="font-medium flex items-center gap-2">
                                            {log.event}
                                            <Badge variant="outline" className="font-mono text-xs">{log.code}</Badge>
                                        </p>
                                        <p className="text-sm text-muted-foreground font-mono truncate max-w-[300px]">{log.url}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-muted-foreground">{log.time}</p>
                                    <Button variant="link" size="sm" className="h-auto p-0 text-blue-600">
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

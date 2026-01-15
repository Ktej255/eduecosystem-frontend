"use client";

import { useEffect, useState } from "react";
import { attendanceService, AttendanceRecord, AttendanceAnalytics } from "@/services/attendanceService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Calendar, TrendingUp } from "lucide-react";
import { format } from "date-fns";

export default function AdminAttendancePage() {
    const [analytics, setAnalytics] = useState<AttendanceAnalytics | null>(null);
    const [records, setRecords] = useState<AttendanceRecord[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const [stats, recent] = await Promise.all([
                attendanceService.getAnalytics(),
                attendanceService.getAllRecords(1, 20) // Get recent 20
            ]);
            setAnalytics(stats);
            setRecords(recent.records);
        } catch (error) {
            console.error("Failed to load attendance:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Loading Attendance Data...</div>;
    }

    return (
        <div className="p-8 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Morning Session Attendance
                </h1>
                <div className="text-sm text-gray-500">
                    Live Tracking: {format(new Date(), "MMMM do, yyyy")}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Checked In Today</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analytics?.total_today || 0}</div>
                        <p className="text-xs text-muted-foreground">Students joined Morning Session</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Weekly Total</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analytics?.total_this_week || 0}</div>
                        <p className="text-xs text-muted-foreground">Check-ins this week</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analytics?.average_daily || 0}</div>
                        <p className="text-xs text-muted-foreground">Active students per day</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">On-Time Rate</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">94%</div>
                        <p className="text-xs text-muted-foreground">Before 5:40 AM cutoff</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent List */}
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Recent Check-Ins</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {records.map((record) => (
                            <div
                                key={record.id}
                                className="flex items-center justify-between p-4 border rounded-lg bg-gray-50 dark:bg-gray-800/50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                                        {record.user.full_name?.[0] || "U"}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {record.user.full_name}
                                        </p>
                                        <p className="text-sm text-gray-500">{record.user.email}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-gray-900 dark:text-white">
                                        {format(new Date(record.joined_at), "h:mm a")}
                                    </p>
                                    <p className={`text-xs ${record.is_late ? "text-red-500" : "text-green-500"}`}>
                                        {record.is_late ? "Late Entry" : "On Time"}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {records.length === 0 && (
                            <p className="text-center text-gray-500 py-4">No check-ins recorded yet today.</p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

"use client"

import { useState, useEffect } from "react"
import {
    BarChart3,
    Users,
    TrendingUp,
    Eye,
    Clock,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Play,
    CheckCircle2,
    BookOpen,
    Video,
    Download,
    Activity,
    Zap
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import axios from "axios"

interface AnalyticsData {
    overview: {
        total_students: number
        total_revenue: number
        avg_rating: number
        total_courses: number
        active_students: number
        completion_rate: number
    }
    enrollment_trend: Array<{ date: string, enrollments: number }>
    revenue_by_course: Array<{ course: string, revenue: number }>
    completion_stats: Array<{ name: string, value: number }>
    top_courses: Array<{
        id: number
        title: string
        students: number
        rating: number
        revenue: number
    }>
    live_activity: {
        studying: number
        drilling: number
    }
}

export default function TeacherAnalyticsPage() {
    const [timeRange, setTimeRange] = useState("30")
    const [data, setData] = useState<AnalyticsData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchAnalytics()
        const interval = setInterval(fetchAnalytics, 30000)
        return () => clearInterval(interval)
    }, [timeRange])

    const fetchAnalytics = async () => {
        try {
            const response = await axios.get(`/api/v1/instructor/analytics/summary?days=${timeRange}`)
            setData(response.data)
        } catch (error) {
            console.error("Failed to load analytics:", error)
        } finally {
            setLoading(false)
        }
    }

    if (!data) return <div className="p-12 text-center text-gray-500">Loading teacher analytics...</div>

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                        <BarChart3 className="h-8 w-8 text-emerald-600" />
                        Analytics Dashboard
                    </h1>
                    <div className="flex items-center gap-3 mt-1">
                        <p className="text-gray-600">Track student engagement and performance</p>
                        {data.live_activity && (data.live_activity.studying > 0 || data.live_activity.drilling > 0) && (
                            <div className="flex gap-2">
                                {data.live_activity.studying > 0 && (
                                    <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 text-emerald-600 text-[10px] font-bold uppercase rounded-full border border-emerald-500/20 animate-pulse">
                                        ● {data.live_activity.studying} Studying Live
                                    </span>
                                )}
                                {data.live_activity.drilling > 0 && (
                                    <span className="flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 text-blue-600 text-[10px] font-bold uppercase rounded-full border border-blue-500/20 animate-pulse">
                                        ● {data.live_activity.drilling} Drilling Live
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Select value={timeRange} onValueChange={setTimeRange}>
                        <SelectTrigger className="w-40">
                            <SelectValue placeholder="Time Range" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="7">Last 7 Days</SelectItem>
                            <SelectItem value="30">Last 30 Days</SelectItem>
                            <SelectItem value="90">Last 90 Days</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-blue-100">
                                    <Users className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">{data.overview.total_students.toLocaleString()}</p>
                                    <p className="text-sm text-gray-500">Total Students</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-green-100">
                                    <Activity className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">{data.overview.active_students}</p>
                                    <p className="text-sm text-gray-500">Active Now</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-purple-100">
                                    <CheckCircle2 className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">{data.overview.completion_rate}%</p>
                                    <p className="text-sm text-gray-500">Avg. Completion</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-amber-100">
                                    <TrendingUp className="h-6 w-6 text-amber-600" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">₹{data.overview.total_revenue.toLocaleString()}</p>
                                    <p className="text-sm text-gray-500">Total Revenue</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Enrollment Trend */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-sm">
                            <TrendingUp className="h-4 w-4 text-emerald-600" />
                            Enrollment Trend
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={data.enrollment_trend}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="date" hide />
                                <YAxis hide />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="enrollments"
                                    stroke="#10b981"
                                    strokeWidth={3}
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Completion Pie */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                            Completion Status
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-[250px] flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data.completion_stats}
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.completion_stats.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={['#10b981', '#6366f1', '#f43f5e'][index % 3]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Top Courses */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Top Performing Courses</CardTitle>
                    <CardDescription>Based on student enrollment and revenue</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {data.top_courses.map((course, idx) => (
                            <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                                        #{idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{course.title}</h4>
                                        <p className="text-xs text-gray-500">{course.students} Students • ⭐ {course.rating}</p>
                                    </div>
                                </div>
                                <div className="text-right font-bold text-emerald-600">
                                    ₹{course.revenue.toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

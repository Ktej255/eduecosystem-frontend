"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Activity,
    Gauge,
    Clock,
    AlertTriangle,
    CheckCircle2,
    TrendingUp,
    Server,
    Globe,
    Zap,
    RefreshCw
} from "lucide-react"
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
} from "recharts"
import { cn } from "@/lib/utils"

// Mock performance data
const responseTimeData = [
    { time: '00:00', api: 120, page: 850 },
    { time: '04:00', api: 95, page: 720 },
    { time: '08:00', api: 180, page: 1100 },
    { time: '12:00', api: 210, page: 1350 },
    { time: '16:00', api: 165, page: 980 },
    { time: '20:00', api: 140, page: 890 },
]

const errorsByEndpoint = [
    { endpoint: '/api/auth/login', errors: 12, success: 1488 },
    { endpoint: '/api/flashcards', errors: 3, success: 2997 },
    { endpoint: '/api/mcq/submit', errors: 8, success: 1992 },
    { endpoint: '/api/pomodoro/start', errors: 2, success: 998 },
]

export default function AdminPerformancePage() {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [webVitals, setWebVitals] = useState({
        lcp: 2.1,
        fid: 45,
        cls: 0.08,
        ttfb: 320
    })

    const refreshData = async () => {
        setIsRefreshing(true)
        await new Promise(r => setTimeout(r, 1000))
        // Simulate slight variation
        setWebVitals({
            lcp: 2.1 + (Math.random() - 0.5) * 0.3,
            fid: 45 + Math.floor((Math.random() - 0.5) * 20),
            cls: 0.08 + (Math.random() - 0.5) * 0.02,
            ttfb: 320 + Math.floor((Math.random() - 0.5) * 50)
        })
        setIsRefreshing(false)
    }

    const getVitalStatus = (metric: string, value: number): { status: 'good' | 'needs-improvement' | 'poor', color: string } => {
        const thresholds: Record<string, { good: number, poor: number }> = {
            lcp: { good: 2.5, poor: 4.0 },
            fid: { good: 100, poor: 300 },
            cls: { good: 0.1, poor: 0.25 },
            ttfb: { good: 800, poor: 1800 }
        }
        const t = thresholds[metric]
        if (value <= t.good) return { status: 'good', color: 'text-emerald-400' }
        if (value <= t.poor) return { status: 'needs-improvement', color: 'text-amber-400' }
        return { status: 'poor', color: 'text-red-400' }
    }

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        <Activity className="h-8 w-8 text-emerald-600" />
                        Performance Monitor
                    </h1>
                    <p className="text-gray-500 mt-1">Core Web Vitals and API health tracking</p>
                </div>
                <Button
                    onClick={refreshData}
                    variant="outline"
                    disabled={isRefreshing}
                >
                    <RefreshCw className={cn("w-4 h-4 mr-2", isRefreshing && "animate-spin")} />
                    Refresh
                </Button>
            </div>

            {/* Core Web Vitals */}
            <div>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-500" />
                    Core Web Vitals
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-gray-500 font-bold uppercase">LCP</span>
                                <Badge className={cn("text-[10px]", getVitalStatus('lcp', webVitals.lcp).status === 'good' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400')}>
                                    {getVitalStatus('lcp', webVitals.lcp).status.replace('-', ' ')}
                                </Badge>
                            </div>
                            <p className={cn("text-3xl font-black", getVitalStatus('lcp', webVitals.lcp).color)}>
                                {webVitals.lcp.toFixed(1)}s
                            </p>
                            <p className="text-[10px] text-gray-500 mt-1">Largest Contentful Paint</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-gray-500 font-bold uppercase">FID</span>
                                <Badge className="bg-emerald-500/20 text-emerald-400 text-[10px]">good</Badge>
                            </div>
                            <p className={cn("text-3xl font-black", getVitalStatus('fid', webVitals.fid).color)}>
                                {webVitals.fid}ms
                            </p>
                            <p className="text-[10px] text-gray-500 mt-1">First Input Delay</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-gray-500 font-bold uppercase">CLS</span>
                                <Badge className="bg-emerald-500/20 text-emerald-400 text-[10px]">good</Badge>
                            </div>
                            <p className={cn("text-3xl font-black", getVitalStatus('cls', webVitals.cls).color)}>
                                {webVitals.cls.toFixed(3)}
                            </p>
                            <p className="text-[10px] text-gray-500 mt-1">Cumulative Layout Shift</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-gray-500 font-bold uppercase">TTFB</span>
                                <Badge className="bg-emerald-500/20 text-emerald-400 text-[10px]">good</Badge>
                            </div>
                            <p className={cn("text-3xl font-black", getVitalStatus('ttfb', webVitals.ttfb).color)}>
                                {webVitals.ttfb}ms
                            </p>
                            <p className="text-[10px] text-gray-500 mt-1">Time to First Byte</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Response Time Trends */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-500" />
                            Response Time (24h)
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={responseTimeData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                                <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#666' }} />
                                <YAxis tick={{ fontSize: 10, fill: '#666' }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                                    labelStyle={{ color: '#9ca3af' }}
                                />
                                <Line type="monotone" dataKey="api" stroke="#10b981" strokeWidth={2} dot={false} name="API (ms)" />
                                <Line type="monotone" dataKey="page" stroke="#6366f1" strokeWidth={2} dot={false} name="Page (ms)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Error Rates */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-amber-500" />
                            Error Rates by Endpoint
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {errorsByEndpoint.map((ep) => {
                                const errorRate = (ep.errors / (ep.errors + ep.success)) * 100
                                return (
                                    <div key={ep.endpoint} className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                                        <div className="flex items-center justify-between mb-2">
                                            <code className="text-xs font-mono text-gray-600 dark:text-gray-400">{ep.endpoint}</code>
                                            <span className={cn(
                                                "text-xs font-bold",
                                                errorRate < 0.5 ? "text-emerald-500" : errorRate < 1 ? "text-amber-500" : "text-red-500"
                                            )}>
                                                {errorRate.toFixed(2)}%
                                            </span>
                                        </div>
                                        <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className={cn(
                                                    "h-full",
                                                    errorRate < 0.5 ? "bg-emerald-500" : errorRate < 1 ? "bg-amber-500" : "bg-red-500"
                                                )}
                                                style={{ width: `${Math.min(errorRate * 10, 100)}%` }}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* System Health */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                        <Server className="w-4 h-4 text-purple-500" />
                        System Health
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Database', status: 'healthy', latency: '12ms' },
                            { label: 'Redis Cache', status: 'healthy', latency: '2ms' },
                            { label: 'API Server', status: 'healthy', latency: '45ms' },
                            { label: 'CDN', status: 'healthy', latency: '8ms' },
                        ].map((service) => (
                            <div key={service.label} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-sm font-medium">{service.label}</span>
                                </div>
                                <p className="text-xs text-gray-500">Latency: {service.latency}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

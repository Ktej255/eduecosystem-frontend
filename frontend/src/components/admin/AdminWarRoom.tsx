"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
    Zap, Activity, Shield, Users, 
    Target, Heart, TrendingUp, AlertTriangle,
    RefreshCw, ChevronRight, ArrowUpRight,
    Clock, DollarSign, History, Globe, FileText
} from "lucide-react";
import api from "@/lib/api";
import Link from "next/link";

interface PulseData {
    incidents: { failed_logins_hr: number; status: string };
    crm: { new_leads_hr: number; unassigned_leads: number };
    lms: { live_students: number };
    wellness: { grapho_daily: number; meditation_daily_mins: number };
    marketing: { messages_24h: number; active_workflows: number };
    timestamp: string;
}

interface ActivityFeedItem {
    type: 'activity' | 'payment' | 'submission';
    action: string;
    user_name: string;
    timestamp: string;
    amount?: number;
    details?: any;
    status?: string;
}

interface RevenueTickerData {
    today_total: number;
    last_hour: number;
    recent_transactions: { user: string; amount: number; timestamp: string }[];
}

interface Alert {
    id: string;
    severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
    message: string;
    action_link: string;
    action_label: string;
}

export default function AdminWarRoom() {
    const [pulse, setPulse] = useState<PulseData | null>(null);
    const [alerts, setAlerts] = useState<Alert[]>([]);
    const [activities, setActivities] = useState<ActivityFeedItem[]>([]);
    const [revenue, setRevenue] = useState<RevenueTickerData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchWarRoomData();
        const interval = setInterval(fetchWarRoomData, 30000); // Update every 30s
        return () => clearInterval(interval);
    }, []);

    const fetchWarRoomData = async () => {
        try {
            setLoading(true);
            const [pulseRes, alertsRes, activityRes, revenueRes] = await Promise.all([
                api.get("/admin/war-room/pulse"),
                api.get("/admin/war-room/alerts"),
                api.get("/admin/war-room/activity-feed"),
                api.get("/admin/war-room/revenue-ticker")
            ]);
            setPulse(pulseRes.data);
            setAlerts(alertsRes.data);
            setActivities(activityRes.data);
            setRevenue(revenueRes.data);
        } catch (error) {
            console.error("War Room fetch failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Phase 5 Revenue Ticker */}
            <div className="bg-slate-950 border-y border-slate-800 py-2 overflow-hidden relative">
                <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
                    <div className="flex items-center gap-2 px-4 border-r border-slate-800">
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-bold text-slate-300 uppercase">Today:</span>
                        <span className="text-xs font-black text-emerald-400">₹{revenue?.today_total.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 border-r border-slate-800">
                        <Clock className="w-4 h-4 text-indigo-400" />
                        <span className="text-xs font-bold text-slate-300 uppercase">Last Hour:</span>
                        <span className="text-xs font-black text-indigo-400">₹{revenue?.last_hour.toLocaleString()}</span>
                    </div>
                    {revenue?.recent_transactions.map((tx, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 text-xs">
                            <span className="text-slate-500">{new Date(tx.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            <span className="font-bold text-slate-200">{tx.user}</span>
                            <span className="text-emerald-500 font-black">+₹{tx.amount}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Header / Status Bar */}
            <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-2xl shadow-indigo-500/10">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className={`w-3 h-3 rounded-full ${pulse?.incidents.status === 'HEALTHY' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                        <div className={`absolute -inset-1 rounded-full ${pulse?.incidents.status === 'HEALTHY' ? 'bg-green-500' : 'bg-red-500'} opacity-20 animate-ping`} />
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                            Global Command Pulse
                            <Globe className="w-3 h-3 text-indigo-400" />
                        </h2>
                        <p className="text-[10px] text-muted-foreground italic">System Operational • {pulse ? new Date(pulse.timestamp).toLocaleTimeString() : '---'}</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-4">
                        <div className="text-right">
                            <p className="text-[10px] uppercase text-muted-foreground font-bold">API Latency</p>
                            <p className="text-xs font-black text-emerald-400">24ms</p>
                        </div>
                        <div className="text-right border-l border-slate-800 pl-4">
                            <p className="text-[10px] uppercase text-muted-foreground font-bold">Server Load</p>
                            <p className="text-xs font-black text-indigo-400">12.4%</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={fetchWarRoomData} className={loading ? 'animate-spin' : 'hover:bg-indigo-500/10 text-indigo-400'}>
                        <RefreshCw className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Pulse Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* CRM Portal */}
                <Link href="/admin/leads" className="block">
                    <Card className="bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-colors cursor-pointer h-full">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold text-blue-400 uppercase flex justify-between">
                                CRM Command
                                <Target className="w-4 h-4" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-black text-white">{pulse?.crm.new_leads_hr || 0}</div>
                            <p className="text-[10px] text-muted-foreground uppercase">New Leads (Hr)</p>
                            <div className="mt-4 flex justify-between items-center text-xs">
                                <span className="text-muted-foreground">Unassigned:</span>
                                <span className="font-bold text-amber-500">{pulse?.crm.unassigned_leads || 0}</span>
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                {/* LMS Portal */}
                <Link href="/admin/content-system" className="block">
                    <Card className="bg-slate-900 border-slate-800 hover:border-indigo-500/50 transition-colors cursor-pointer h-full">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold text-indigo-400 uppercase flex justify-between">
                                LMS Live
                                <Users className="w-4 h-4" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-black text-white">{pulse?.lms.live_students || 0}</div>
                            <p className="text-[10px] text-muted-foreground uppercase">Active Learners</p>
                            <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500" style={{ width: '65%' }} />
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                {/* Wellness Portal */}
                <Link href="/admin/meditation" className="block">
                    <Card className="bg-slate-900 border-slate-800 hover:border-emerald-500/50 transition-colors cursor-pointer h-full">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold text-emerald-400 uppercase flex justify-between">
                                Wellness
                                <Heart className="w-4 h-4" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-black text-white">{pulse?.wellness.meditation_daily_mins || 0}m</div>
                            <p className="text-[10px] text-muted-foreground uppercase">Meditation Daily</p>
                            <div className="mt-4 flex justify-between items-center text-xs">
                                <span className="text-muted-foreground">Grapho Submissions:</span>
                                <span className="font-bold text-emerald-500">{pulse?.wellness.grapho_daily || 0}</span>
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                {/* Marketing Portal */}
                <Link href="/admin/marketing-automation" className="block">
                    <Card className="bg-slate-900 border-slate-800 hover:border-purple-500/50 transition-colors cursor-pointer h-full">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold text-purple-400 uppercase flex justify-between">
                                Marketing
                                <Zap className="w-4 h-4" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-black text-white">{pulse?.marketing.messages_24h || 0}</div>
                            <p className="text-[10px] text-muted-foreground uppercase">Nudges (24h)</p>
                            <div className="mt-4 flex justify-between items-center text-xs">
                                <span className="text-muted-foreground">Active Workflows:</span>
                                <span className="font-bold text-purple-500">{pulse?.marketing.active_workflows || 0}</span>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>

            {/* Bottom Section: Alerts and Activity Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Alerts Column */}
                <div className="lg:col-span-1 space-y-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        Actionable Intelligence
                    </h3>
                    {alerts.length > 0 ? (
                        <div className="flex flex-col gap-2">
                            {alerts.map((alert, idx) => (
                                <div key={idx} className={`p-3 rounded-lg border bg-slate-900/50 ${
                                    alert.severity === 'CRITICAL' || alert.severity === 'HIGH' ? 'border-red-500/30' : 
                                    alert.severity === 'MEDIUM' ? 'border-amber-500/30' : 
                                    'border-blue-500/30'
                                }`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="outline" className={`text-[8px] h-4 ${
                                            alert.severity === 'CRITICAL' || alert.severity === 'HIGH' ? 'border-red-500 text-red-500' : 
                                            alert.severity === 'MEDIUM' ? 'border-amber-500 text-amber-500' : 
                                            'border-blue-500 text-blue-500'
                                        }`}>
                                            {alert.severity}
                                        </Badge>
                                        <span className="text-[8px] text-slate-600 font-mono">#{alert.id}</span>
                                    </div>
                                    <p className="text-xs font-medium text-slate-200 mb-3">{alert.message}</p>
                                    <Button variant="outline" size="sm" className="w-full h-7 text-[10px] border-slate-800 hover:bg-white/5" asChild>
                                        <a href={alert.action_link}>{alert.action_label} <ArrowUpRight className="ml-1 w-3 h-3" /></a>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 text-center border border-dashed border-slate-800 rounded-lg">
                            <p className="text-xs text-slate-500 italic">No active alerts detected.</p>
                        </div>
                    )}
                </div>

                {/* Unified Activity Feed */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <History className="w-4 h-4 text-indigo-400" />
                        Unified Activity Stream
                    </h3>
                    <Card className="bg-slate-900 border-slate-800 overflow-hidden">
                        <CardContent className="p-0">
                            <div className="divide-y divide-slate-800 max-h-[400px] overflow-y-auto">
                                {activities.map((item, i) => (
                                    <div key={i} className="p-3 hover:bg-white/5 transition-colors flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg ${
                                                item.type === 'payment' ? 'bg-emerald-500/10 text-emerald-500' :
                                                item.type === 'submission' ? 'bg-purple-500/10 text-purple-500' :
                                                'bg-blue-500/10 text-blue-500'
                                            }`}>
                                                {item.type === 'payment' ? <DollarSign className="w-3 h-3" /> :
                                                 item.type === 'submission' ? <FileText className="w-3 h-3" /> :
                                                 <Activity className="w-3 h-3" />}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold text-slate-200">{item.user_name}</span>
                                                    <span className="text-[10px] text-slate-500 uppercase">{item.action.replace(/_/g, ' ')}</span>
                                                </div>
                                                <p className="text-[10px] text-slate-400">
                                                    {item.type === 'payment' ? `Received ₹${item.amount}` : 
                                                     item.type === 'submission' ? `Level ${item.details?.level || '?'}` : 
                                                     item.action}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-slate-600 font-mono">
                                            {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* AI Strategic Advice */}
            <Card className="bg-gradient-to-br from-slate-900 to-indigo-950 border-indigo-500/20">
                <CardHeader>
                    <CardTitle className="text-sm font-bold text-white flex items-center gap-2">
                        <Shield className="w-4 h-4 text-indigo-400" />
                        AI Strategic Commander
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-sm text-slate-300 leading-relaxed">
                            "System detected 12% drop in meditation streaks across Batch-A. 
                            Suggested Action: Trigger a 5-minute Focus Session nudge to all active learners 
                            before the afternoon mock test."
                        </p>
                        <div className="mt-4 flex gap-3">
                            <Button 
                                size="sm" 
                                className="bg-indigo-600 hover:bg-indigo-700 text-xs text-white"
                                onClick={async () => {
                                    try {
                                        await api.post("/admin/meditation-analytics/broadcast-nudge", {
                                            message: "System detected 12% drop in meditation streaks. Please take 5 mins to focus before the next session."
                                        });
                                        alert("Global Nudge Broadcasted Successfully!");
                                    } catch (e) {
                                        console.error(e);
                                    }
                                }}
                            >
                                Execute Global Nudge
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs border-slate-700">Dismiss Advice</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}


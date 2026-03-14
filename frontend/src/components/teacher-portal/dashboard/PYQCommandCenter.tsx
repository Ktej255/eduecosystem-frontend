"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Database, Plus, Search, Filter,
    FileUp, GraduationCap, Gavel,
    History, Globe, Zap, CheckCircle2
} from 'lucide-react';
import { Input } from "@/components/ui/input";

const PYQ_STATS = [
    { label: "Total Questions", value: "2,450", color: "text-blue-600" },
    { label: "Polity", value: "420", color: "text-amber-600" },
    { label: "Economy", value: "385", color: "text-emerald-600" },
    { label: "History", value: "512", color: "text-orange-600" },
];

import api from "@/lib/api";
import { toast } from "sonner";

export default function PYQCommandCenter() {
    const [stats, setStats] = useState({ total: 0, by_subject: {} as Record<string, number> });
    const [loading, setLoading] = useState(true);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const res = await api.get("/upsc/admin/questions/stats");
            setStats(res.data);
        } catch (error) {
            console.error("Failed to fetch PYQ stats:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleBulkIngest = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        try {
            toast.loading("Ingesting archive...");
            await api.post("/upsc/admin/questions/bulk-ingest", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            toast.success("Successfully ingested archive");
            fetchStats();
        } catch (error) {
            toast.error("Failed to ingest archive");
        }
    };

    return (
        <Card className="w-full bg-slate-900 border-slate-800 shadow-2xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

            <CardHeader className="bg-slate-950/50 border-b border-slate-800 p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-900/20">
                            <Database className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <CardTitle className="text-xl font-bold text-white">PYQ Command Center</CardTitle>
                            <CardDescription className="text-muted-foreground">Manage 2013-2024 UPSC Prelims Archive</CardDescription>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept=".json,.csv"
                            onChange={handleBulkIngest}
                        />
                        <Button
                            className="bg-blue-600 hover:bg-blue-700 text-white gap-2 flex-1 md:flex-none"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <FileUp className="w-4 h-4" />
                            Bulk Ingest
                        </Button>
                        <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 flex-1 md:flex-none">
                            <Plus className="w-4 h-4" />
                            Add Single
                        </Button>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-6">
                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by topic, keyword, or Year..."
                            className="pl-10 bg-slate-950 border-slate-800 text-slate-200 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-muted-foreground border border-slate-800">
                            <Filter className="w-4 h-4 mr-2" /> Filters
                        </Button>
                        <Badge variant="outline" className="bg-blue-950/30 text-blue-400 border-blue-900/50 px-3">
                            <Zap className="w-3 h-3 mr-1 fill-blue-400" /> Auto-Categorize Enabled
                        </Badge>
                    </div>
                </div>

                {/* Subject Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 group/item hover:border-blue-500/50 transition-all">
                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1">Total Questions</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-black text-blue-600">{(stats.total || 0).toLocaleString()}</span>
                            <span className="text-[10px] text-muted-foreground">Total Items</span>
                        </div>
                    </div>
                    {Object.entries(stats.by_subject || {}).slice(0, 3).map(([subject, count], i) => (
                        <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 group/item hover:border-blue-500/50 transition-all">
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1 capitalize">{subject}</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-black text-emerald-600">{(count || 0).toLocaleString()}</span>
                                <span className="text-[10px] text-muted-foreground">Total Items</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Active Projects / Recent Ingestions */}
                <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase text-muted-foreground tracking-widest">Recent Archive Updates</h3>
                    <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/30">
                        {[
                            { title: "2024 Prelims Economics Section", count: 18, status: "Active", icon: <CheckCircle2 className="text-emerald-500" /> },
                            { title: "Judiciary & Separation of Powers", count: 42, status: "Review", icon: <History className="text-amber-500" /> },
                            { title: "Environment & Climate Conventions", count: 25, status: "Draft", icon: <Globe className="text-blue-500" /> }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 border-b border-slate-800/50 last:border-0 hover:bg-slate-900 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-muted-foreground">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-200 text-sm">{item.title}</p>
                                        <p className="text-xs text-muted-foreground">{item.count} Questions • Last updated 2h ago</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20">
                                    Analyze & Edit
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

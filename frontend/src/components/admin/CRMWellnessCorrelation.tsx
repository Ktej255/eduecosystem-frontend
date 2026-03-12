"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    AlertCircle, Flame, Droplets, Target, 
    ArrowRight, Activity, ShieldAlert
} from "lucide-react";
import api from "@/lib/api";

interface CorrelationData {
    lead_id: number;
    name: string;
    email: string;
    lead_status: string;
    meditation_streak: number;
    graphotherapy_streak: number;
    is_red_flag: boolean;
    risk_score: number;
}

export default function CRMWellnessCorrelation() {
    const [data, setData] = useState<CorrelationData[]>([]);
    const [summary, setSummary] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [dataRes, summaryRes] = await Promise.all([
                api.get("/admin/crm-wellness/correlation"),
                api.get("/admin/crm-wellness/summary")
            ]);
            setData(dataRes.data);
            setSummary(summaryRes.data);
        } catch (error) {
            console.error("Failed to fetch CRM-Wellness correlation:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-8 text-center animate-pulse text-muted-foreground uppercase tracking-widest">Analyzing Lead-Focus Correlation...</div>;

    return (
        <div className="space-y-6">
            {/* Health Summary Banner */}
            <div className={`p-4 rounded-xl border flex justify-between items-center ${
                summary?.health_status === 'CRITICAL' ? 'bg-red-500/10 border-red-500/30' : 'bg-emerald-500/10 border-emerald-500/30'
            }`}>
                <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${summary?.health_status === 'CRITICAL' ? 'bg-red-500 text-white' : 'bg-emerald-500 text-white'}`}>
                        <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-tight">Lead Focus Integrity: {summary?.health_status}</h3>
                        <p className="text-xs text-muted-foreground">{summary?.active_red_flags} High-Value Leads showing focus decay.</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground">Avg Focus Risk</p>
                    <p className="text-xl font-black text-white">{summary?.average_focus_risk}%</p>
                </div>
            </div>

            {/* Risk Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((lead) => (
                    <Card key={lead.lead_id} className={`bg-slate-900 border-slate-800 hover:border-indigo-500/50 transition-all ${lead.is_red_flag ? 'border-red-500/20 ring-1 ring-red-500/10' : ''}`}>
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <Badge variant="outline" className={`${
                                    lead.lead_status === 'hot' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' : 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                                } uppercase text-[8px]`}>
                                    {lead.lead_status} Lead
                                </Badge>
                                {lead.is_red_flag && <AlertCircle className="w-4 h-4 text-red-500 animate-pulse" />}
                            </div>
                            <CardTitle className="text-sm font-bold text-white truncate mt-2">{lead.name}</CardTitle>
                            <p className="text-[10px] text-slate-500 truncate">{lead.email}</p>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="mt-4 space-y-3">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-slate-400 flex items-center gap-1"><Droplets className="w-3 h-3 text-blue-400" /> Meditation</span>
                                    <span className={`font-black ${lead.meditation_streak < 3 ? 'text-red-400' : 'text-emerald-400'}`}>{lead.meditation_streak}d</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-slate-400 flex items-center gap-1"><Flame className="w-3 h-3 text-orange-400" /> Graphotherapy</span>
                                    <span className={`font-black ${lead.graphotherapy_streak < 3 ? 'text-red-400' : 'text-emerald-400'}`}>{lead.graphotherapy_streak}d</span>
                                </div>
                                
                                <div className="pt-3 border-t border-slate-800">
                                    <div className="flex justify-between text-[10px] uppercase font-bold text-slate-500 mb-1">
                                        <span>Focus Risk Score</span>
                                        <span>{lead.risk_score}%</span>
                                    </div>
                                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full transition-all duration-1000 ${lead.risk_score > 60 ? 'bg-red-500' : lead.risk_score > 30 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                                            style={{ width: `${lead.risk_score}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";
import { 
    Trophy, 
    Target, 
    Zap, 
    BookOpen,
    TrendingUp,
    Activity
} from "lucide-react";
import { knowledgeService, KnowledgeGraphData } from "@/lib/knowledgeService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function HistoryMasteryDashboard() {
    const [stats, setStats] = useState({
        totalNodes: 0,
        mastered: 0,
        stable: 0,
        emerging: 0,
        fragile: 0,
        avgMastery: 0,
        coverage: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await knowledgeService.getStudentGraph("history");
                const nodes = data.nodes;
                
                const mastered = nodes.filter(n => (n.mastery || 0) >= 85).length;
                const stable = nodes.filter(n => (n.mastery || 0) >= 60 && (n.mastery || 0) < 85).length;
                const emerging = nodes.filter(n => (n.mastery || 0) >= 30 && (n.mastery || 0) < 60).length;
                const fragile = nodes.filter(n => (n.mastery || 0) < 30).length;
                const avgMastery = nodes.reduce((acc, curr) => acc + (curr.mastery || 0), 0) / (nodes.length || 1);
                const coverage = ((mastered + stable) / (nodes.length || 1)) * 100;

                setStats({
                    totalNodes: nodes.length,
                    mastered,
                    stable,
                    emerging,
                    fragile,
                    avgMastery,
                    coverage
                });
            } catch (error) {
                console.error("Failed to fetch history stats:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-32 rounded-2xl bg-muted/20 animate-pulse border border-border/50" />
                ))}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
                    <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-xs font-black uppercase tracking-wider text-green-600 dark:text-green-400">Mastery</CardTitle>
                        <Trophy className="w-4 h-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black">{Math.round(stats.avgMastery)}%</div>
                        <p className="text-[10px] text-muted-foreground mt-1 font-bold">Aggregate Logic Strength</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20">
                    <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">Coverage</CardTitle>
                        <BookOpen className="w-4 h-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black">{Math.round(stats.coverage)}%</div>
                        <p className="text-[10px] text-muted-foreground mt-1 font-bold">Stable syllabus footprint</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/20">
                    <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">Concepts</CardTitle>
                        <Target className="w-4 h-4 text-amber-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black">{stats.totalNodes}</div>
                        <p className="text-[10px] text-muted-foreground mt-1 font-bold">Active knowledge nodes</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-500/10 to-transparent border-red-500/20">
                    <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-xs font-black uppercase tracking-wider text-red-600 dark:text-red-400">Fragility</CardTitle>
                        <Activity className="w-4 h-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black">{stats.fragile}</div>
                        <p className="text-[10px] text-muted-foreground mt-1 font-bold">Nodes requiring immediate fix</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="p-6 bg-muted/30 border-dashed">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <h3 className="font-bold">Knowledge Saturation</h3>
                    </div>
                    <span className="text-sm font-mono font-bold">{stats.mastered} / {stats.totalNodes} Nodes Mastered</span>
                </div>
                <div className="flex gap-1 h-3 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full transition-all" style={{ width: `${(stats.mastered / stats.totalNodes) * 100}%` }} />
                    <div className="bg-blue-500 h-full transition-all" style={{ width: `${(stats.stable / stats.totalNodes) * 100}%` }} />
                    <div className="bg-amber-500 h-full transition-all" style={{ width: `${(stats.emerging / stats.totalNodes) * 100}%` }} />
                    <div className="bg-red-500 h-full transition-all" style={{ width: `${(stats.fragile / stats.totalNodes) * 100}%` }} />
                </div>
                <div className="grid grid-cols-4 mt-3 text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                    <div>Mastered</div>
                    <div>Stable</div>
                    <div>Emerging</div>
                    <div className="text-red-500">Fragile</div>
                </div>
            </Card>
        </div>
    );
}

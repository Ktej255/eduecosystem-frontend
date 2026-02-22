"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    AlertTriangle,
    Bell,
    CheckCircle2,
    Zap,
    ShieldAlert,
    Users,
    Clock,
    ArrowRight,
    MessageSquare,
    Ban
} from "lucide-react";
import api from "@/lib/api";
import { toast } from "sonner";

interface ActionItem {
    id: string;
    type: 'SECURITY' | 'SENTIMENT' | 'ENGAGEMENT' | 'AI_SUGGESTION';
    title: string;
    description: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    timestamp: string;
    metadata: any;
}

export default function AdminActionCenter() {
    const [actions, setActions] = useState<ActionItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchActions();
        const interval = setInterval(fetchActions, 60000); // Check for new actions every minute
        return () => clearInterval(interval);
    }, []);

    const fetchActions = async () => {
        try {
            // We'll aggregate from security alerts, sentiment, and AI planning
            const [securityRes, aiPlanRes, statsRes] = await Promise.all([
                api.get("/admin/ai-security/ghost-alerts"),
                api.get("/admin/ai/plan"),
                api.get("/admin/stats")
            ]);

            const newActions: ActionItem[] = [];

            // 1. Unresolved Security Alerts
            securityRes.data.filter((a: any) => !a.is_resolved).forEach((alert: any) => {
                newActions.push({
                    id: `sec-${alert.id}`,
                    type: 'SECURITY',
                    title: 'Suspicious Login Detected',
                    description: `Multiple logins from ${alert.city1} and ${alert.city2}.`,
                    priority: alert.risk_score > 7 ? 'HIGH' : 'MEDIUM',
                    timestamp: alert.timestamp,
                    metadata: { alertId: alert.id, userId: alert.user_id }
                });
            });

            // 2. AI Planning Insights
            if (aiPlanRes.data?.strategic_insights) {
                aiPlanRes.data.strategic_insights.forEach((insight: any, idx: number) => {
                    newActions.push({
                        id: `ai-${idx}`,
                        type: 'AI_SUGGESTION',
                        title: `AI: ${insight.type.toUpperCase()}`,
                        description: insight.message,
                        priority: insight.type === 'priority' ? 'HIGH' : 'LOW',
                        timestamp: new Date().toISOString(),
                        metadata: { portal: insight.portal }
                    });
                });
            }

            // 3. Low Engagement Alerts (Mocked heuristic for now)
            if (statsRes.data?.engagement?.avg_streak < 2) {
                newActions.push({
                    id: 'eng-avg-streak',
                    type: 'ENGAGEMENT',
                    title: 'Systemic Engagement Drop',
                    description: 'Average streak has fallen below 2 days. Consider a mass motivation nudge.',
                    priority: 'MEDIUM',
                    timestamp: new Date().toISOString(),
                    metadata: {}
                });
            }

            // Sort by priority and timestamp
            newActions.sort((a, b) => {
                const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
                if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                    return priorityOrder[a.priority] - priorityOrder[b.priority];
                }
                return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
            });

            setActions(newActions.slice(0, 5)); // Keep top 5
        } catch (error) {
            console.error("Failed to fetch action items:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAction = async (action: ActionItem) => {
        toast.info(`Executing: ${action.title}`);
        // Logic for specific action execution would go here
        // e.g., if SECURITY, open security modal or block
    };

    if (loading && actions.length === 0) return null;

    return (
        <Card className="border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm h-full">
            <CardHeader className="pb-3 border-b border-indigo-500/10 flex flex-row items-center justify-between">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Zap className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        Admin Action Center
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">Surgical interventions suggested by AI</p>
                </div>
                <Button variant="ghost" size="icon" onClick={fetchActions} className="h-8 w-8">
                    <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                </Button>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
                {actions.length > 0 ? (
                    actions.map((action) => (
                        <div
                            key={action.id}
                            className={`p-3 rounded-xl border transition-all hover:shadow-md cursor-pointer group bg-card ${action.priority === 'HIGH' ? 'border-red-500/30' : 'border-indigo-500/10'
                                }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className={`mt-1 p-2 rounded-lg ${action.type === 'SECURITY' ? 'bg-red-100 text-red-600' :
                                        action.type === 'AI_SUGGESTION' ? 'bg-purple-100 text-purple-600' :
                                            'bg-blue-100 text-blue-600'
                                    }`}>
                                    {action.type === 'SECURITY' ? <ShieldAlert className="h-4 w-4" /> :
                                        action.type === 'AI_SUGGESTION' ? <Brain className="h-4 w-4" /> :
                                            <MessageSquare className="h-4 w-4" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-0.5">
                                        <h4 className="text-sm font-bold text-foreground truncate">
                                            {action.title}
                                        </h4>
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${action.priority === 'HIGH' ? 'bg-red-100 text-red-700' :
                                                action.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-blue-100 text-blue-700'
                                            }`}>
                                            {action.priority}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2 leading-relaxed">
                                        {action.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {new Date(action.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                        <Button
                                            size="sm"
                                            className="h-7 text-xs px-2 gap-1 bg-indigo-600 hover:bg-indigo-700"
                                            onClick={() => handleAction(action)}
                                        >
                                            Take Action
                                            <ArrowRight className="h-3 w-3" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-12 text-center">
                        <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2 opacity-50" />
                        <p className="text-sm text-muted-foreground">All clear! No urgent actions.</p>
                    </div>
                )}

                {actions.length > 0 && (
                    <Button variant="outline" className="w-full text-xs font-medium border-indigo-500/20 text-indigo-600 hover:bg-indigo-50">
                        View Full Command Feed
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}

import { RefreshCw, Brain } from "lucide-react";

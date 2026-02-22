"use client";

import { useState, useEffect } from "react";
import {
    AlertTriangle,
    CheckCircle2,
    ShieldAlert,
    FileText,
    Image as ImageIcon,
    Link as LinkIcon,
    RefreshCw
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContentHealthScore() {
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [issues, setIssues] = useState<any[]>([]);

    const runAudit = () => {
        setLoading(true);
        setScore(0);

        // Simulate audit process
        setTimeout(() => {
            const mockIssues = [
                { id: 1, type: "thumbnail", title: "Polity Chapter 5", severity: "medium" },
                { id: 2, type: "description", title: "Geography Basics PDF", severity: "low" },
                { id: 3, type: "tags", title: "Environment Quiz 2", severity: "low" },
                { id: 4, type: "broken-link", title: "External Reference: Wiki", severity: "high" },
            ];

            setIssues(mockIssues);
            setScore(78); // Mock score
            setLoading(false);
        }, 1500);
    };

    useEffect(() => {
        runAudit();
    }, []);

    const getIcon = (type: string) => {
        switch (type) {
            case "thumbnail": return <ImageIcon className="h-4 w-4" />;
            case "description": return <FileText className="h-4 w-4" />;
            case "broken-link": return <LinkIcon className="h-4 w-4" />;
            default: return <AlertTriangle className="h-4 w-4" />;
        }
    };

    return (
        <Card className="border-l-4 border-l-amber-500 shadow-sm">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                        <ShieldAlert className="h-5 w-5 text-amber-500" />
                        Content Health
                    </CardTitle>
                    <Button variant="ghost" size="sm" onClick={runAudit} disabled={loading} className="h-8 w-8 p-0">
                        <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-end gap-2 mb-2">
                    <span className="text-3xl font-bold">{score}%</span>
                    <span className="text-sm text-muted-foreground mb-1">optimization score</span>
                </div>
                <Progress value={score} className="h-2 mb-4 bg-amber-100" indicatorClassName={score > 80 ? "bg-green-500" : score > 50 ? "bg-amber-500" : "bg-red-500"} />

                <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3 tracking-wider">Action Items</h4>

                <div className="space-y-2">
                    {loading ? (
                        <div className="space-y-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-8 bg-muted rounded animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        issues.map((issue) => (
                            <div key={issue.id} className="flex items-center justify-between p-2 bg-muted rounded-lg hover:bg-muted transition-colors group cursor-pointer border border-transparent hover:border-border">
                                <div className="flex items-center gap-3">
                                    <div className={`p-1.5 rounded-md ${issue.severity === 'high' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`}>
                                        {getIcon(issue.type)}
                                    </div>
                                    <div className="text-xs">
                                        <p className="font-medium text-muted-foreground">{issue.title}</p>
                                        <p className="text-muted-foreground capitalize">{issue.type.replace('-', ' ')} missing</p>
                                    </div>
                                </div>
                                <Badge variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] h-5 bg-card">
                                    Fix
                                </Badge>
                            </div>
                        ))
                    )}
                </div>

                {!loading && issues.length === 0 && (
                    <div className="text-center py-4 text-green-600 flex flex-col items-center">
                        <CheckCircle2 className="h-8 w-8 mb-2 opacity-50" />
                        <p className="text-sm font-medium">All content optimized!</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

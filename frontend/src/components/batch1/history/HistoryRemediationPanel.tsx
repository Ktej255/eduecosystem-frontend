"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
    AlertCircle, 
    ArrowRight, 
    PlayCircle, 
    MessageCircle, 
    ChevronRight, 
    Zap,
    History,
    Shield
} from "lucide-react";
import { knowledgeService, WeakNode } from "@/lib/knowledgeService";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";

export function HistoryRemediationPanel() {
    const router = useRouter();
    const [weakNodes, setWeakNodes] = useState<WeakNode[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeakNodes = async () => {
            try {
                const nodes = await knowledgeService.getWeakNodes("history");
                setWeakNodes(nodes);
            } catch (error) {
                console.error("Failed to fetch weak nodes:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchWeakNodes();
    }, []);

    const getActionIcon = (suggestion: string) => {
        switch (suggestion) {
            case "watch_video": return <PlayCircle className="w-5 h-5 text-blue-500" />;
            case "ai_conversation": return <MessageCircle className="w-5 h-5 text-purple-500" />;
            case "practice_mcq": return <Zap className="w-5 h-5 text-amber-500" />;
            default: return <History className="w-5 h-5 text-primary" />;
        }
    };

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-48 rounded-2xl bg-muted/20 animate-pulse border border-border/50" />
                ))}
            </div>
        );
    }

    if (weakNodes.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed rounded-3xl bg-muted/10">
                <Shield className="w-12 h-12 text-green-500 mb-4 opacity-50" />
                <h3 className="text-xl font-bold mb-2">Defense Secured</h3>
                <p className="text-muted-foreground">All Modern History nodes currently exceed the 60% stability threshold.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-black flex items-center gap-2">
                        <AlertCircle className="text-red-500" />
                        Fragile Concepts ({weakNodes.length})
                    </h2>
                    <p className="text-muted-foreground">These nodes are currently below the stability threshold.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {weakNodes.map((node) => (
                    <Card key={node.node_id} className="border-l-4 border-l-red-500 hover:shadow-xl transition-all group">
                        <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                        Module {node.module_id} • {node.difficulty}
                                    </div>
                                    <CardTitle className="text-lg font-bold line-clamp-1">{node.node_name}</CardTitle>
                                </div>
                                <div className="bg-red-500/10 text-red-500 px-2 py-1 rounded-md text-xs font-mono font-bold">
                                    {Math.round(node.mastery_score)}%
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                            <div className="space-y-4">
                                <Progress value={node.mastery_score} className="h-1.5 bg-red-100 dark:bg-red-900/20" />
                                <div className="flex items-start gap-3 bg-muted/50 p-3 rounded-lg border border-border/50">
                                    {getActionIcon(node.suggestion)}
                                    <div className="space-y-1">
                                        <div className="text-xs font-bold uppercase text-primary">System Suggestion</div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{node.suggestion_text}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button 
                                variant="outline" 
                                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                                onClick={() => {
                                    if (node.suggestion === "practice_mcq") {
                                        router.push(`/student/drill/history?topic=${encodeURIComponent(node.node_name)}`);
                                    } else if (node.suggestion === "watch_video") {
                                        router.push(`/student/courses/history/lesson/${node.node_id}`);
                                    } else {
                                        router.push(`/student/chat?context=${encodeURIComponent(node.node_name)}`);
                                    }
                                }}
                            >
                                Stabilize Now <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

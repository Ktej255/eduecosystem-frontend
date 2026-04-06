"use client";

import { useCallback, useEffect, useState, memo } from "react";
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    Controls,
    Background,
    MiniMap,
    Handle,
    Position,
    BackgroundVariant,
    Edge,
    Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Loader2, BookOpen, Target, AlertCircle, CheckCircle2 } from "lucide-react";
import { knowledgeService, KnowledgeGraphData } from "@/lib/knowledgeService";

// Custom Node Types
const HistoryNode = memo(({ data }: { data: any }) => {
    const getMasteryColor = (score: number) => {
        if (score >= 85) return "border-green-500 bg-green-500/10";
        if (score >= 60) return "border-blue-500 bg-blue-500/10";
        if (score >= 30) return "border-amber-500 bg-amber-500/10";
        return "border-red-500 bg-red-500/10";
    };

    const StatusIcon = () => {
        if (data.mastery >= 85) return <CheckCircle2 className="w-4 h-4 text-green-500" />;
        if (data.mastery >= 60) return <BookOpen className="w-4 h-4 text-blue-500" />;
        if (data.mastery >= 30) return <Target className="w-4 h-4 text-amber-500" />;
        return <AlertCircle className="w-4 h-4 text-red-500" />;
    };

    return (
        <div className={`px-4 py-3 rounded-xl border-2 shadow-lg min-w-[180px] bg-card transition-all hover:scale-105 ${getMasteryColor(data.mastery || 0)}`}>
            <Handle type="target" position={Position.Top} className="!bg-muted-foreground" />
            
            <div className="flex items-center justify-between mb-2">
                <StatusIcon />
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-tighter">
                    {data.difficulty}
                </span>
            </div>
            
            <div className="font-bold text-sm mb-1 line-clamp-2">{data.label}</div>
            
            <div className="w-full bg-muted rounded-full h-1 mt-2 overflow-hidden">
                <div 
                    className={`h-full transition-all duration-1000 ${
                        data.mastery >= 85 ? "bg-green-500" : 
                        data.mastery >= 60 ? "bg-blue-500" : 
                        data.mastery >= 30 ? "bg-amber-500" : "bg-red-500"
                    }`}
                    style={{ width: `${data.mastery || 0}%` }}
                />
            </div>
            
            <div className="flex justify-between items-center mt-1">
                <span className="text-[9px] text-muted-foreground uppercase">Mastery</span>
                <span className="text-[10px] font-mono font-bold">{Math.round(data.mastery || 0)}%</span>
            </div>

            <Handle type="source" position={Position.Bottom} className="!bg-muted-foreground" />
        </div>
    );
});

HistoryNode.displayName = "HistoryNode";

const nodeTypes = {
    historyNode: HistoryNode,
};

export function HistoryKnowledgeGraph() {
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
    const [loading, setLoading] = useState(true);

    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    useEffect(() => {
        const fetchGraph = async () => {
            try {
                const data = await knowledgeService.getStudentGraph("history");
                
                // Map backend nodes to XYFlow format
                const flowNodes: Node[] = data.nodes.map((node: any, index: number) => ({
                    id: node.id,
                    type: "historyNode",
                    data: { 
                        label: node.label,
                        mastery: node.mastery,
                        difficulty: node.difficulty,
                        exam_relevance: node.exam_relevance
                    },
                    // Simple grid layout if no positions provided
                    position: node.position || { x: (index % 5) * 250, y: Math.floor(index / 5) * 150 },
                }));

                const flowEdges: Edge[] = data.edges.map((edge: any) => ({
                    id: `e-${edge.source}-${edge.target}`,
                    source: edge.source,
                    target: edge.target,
                    animated: edge.type === "prerequisite",
                    style: { stroke: "#4b5563", strokeWidth: 2 },
                }));

                setNodes(flowNodes);
                setEdges(flowEdges);
            } catch (error) {
                console.error("Failed to fetch history knowledge graph:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGraph();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-[500px] w-full border border-dashed rounded-3xl bg-muted/30">
                <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground animate-pulse font-medium">Reconstructing Timeline...</p>
            </div>
        );
    }

    return (
        <div className="h-[600px] w-full rounded-2xl border bg-background/50 backdrop-blur-sm overflow-hidden relative group">
            <div className="absolute top-4 left-4 z-10 flex gap-2">
                <div className="px-3 py-1.5 rounded-full bg-background/80 border text-[10px] font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" /> Mastered (&gt;85%)
                </div>
                <div className="px-3 py-1.5 rounded-full bg-background/80 border text-[10px] font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" /> Stable (&gt;60%)
                </div>
                <div className="px-3 py-1.5 rounded-full bg-background/80 border text-[10px] font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500" /> Emerging (&gt;30%)
                </div>
                <div className="px-3 py-1.5 rounded-full bg-background/80 border text-[10px] font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" /> Fragile (&lt;30%)
                </div>
            </div>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 0.2 }}
                minZoom={0.1}
                maxZoom={1.5}
                attributionPosition="bottom-left"
                proOptions={{ hideAttribution: true }}
            >
                <Background variant={BackgroundVariant.Lines} color="#1f2937" gap={40} size={1} />
                <Controls className="!bg-background !border !shadow-lg" />
                <MiniMap
                    nodeColor={(node) => {
                        const data = node.data as any;
                        const mastery = data?.mastery || 0;
                        if (mastery >= 85) return "#22c55e";
                        if (mastery >= 60) return "#3b82f6";
                        if (mastery >= 30) return "#f59e0b";
                        return "#ef4444";
                    }}
                    maskColor="rgba(0,0,0,0.5)"
                    className="!bg-card !border !rounded-xl"
                />
            </ReactFlow>
        </div>
    );
}

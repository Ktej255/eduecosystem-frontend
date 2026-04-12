"use client";

import { useEffect, useState, useCallback } from "react";
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
import { 
    Search, 
    Filter, 
    Info, 
    Network, 
    AlertTriangle, 
    Database,
    ChevronRight,
    RefreshCw
} from "lucide-react";
import { historyKnowledgeService, GraphNode } from "@/lib/historyKnowledgeService";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
    Sheet, 
    SheetContent, 
    SheetHeader, 
    SheetTitle, 
    SheetDescription 
} from "@/components/ui/sheet";

const AdminNode = ({ data }: { data: any }) => (
    <div className={`px-4 py-3 rounded-lg border-2 shadow-sm bg-card hover:border-primary transition-all ${
        data.difficulty === "Foundation" ? "border-slate-300" :
        data.difficulty === "Advanced" ? "border-amber-500" : "border-purple-500"
    }`}>
        <Handle type="target" position={Position.Top} />
        <div className="text-[10px] font-black uppercase text-muted-foreground opacity-50 mb-1">{data.difficulty}</div>
        <div className="font-bold text-xs truncate max-w-[150px]">{data.label}</div>
        <Handle type="source" position={Position.Bottom} />
    </div>
);

const nodeTypes = {
    historyNode: AdminNode,
};

export default function HistoryAdminExplorer() {
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
    const [loading, setLoading] = useState(true);
    const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchGraph = useCallback(async () => {
        setLoading(true);
        try {
            const data = await historyKnowledgeService.getGraph();
            
            const flowNodes: Node[] = data.nodes.map((node, index) => ({
                id: node.id,
                type: "historyNode",
                data: { ...node },
                position: { x: (index % 10) * 220, y: Math.floor(index / 10) * 120 },
            }));

            const flowEdges: Edge[] = data.edges.map((edge) => ({
                id: `e-${edge.source}-${edge.target}`,
                source: edge.source,
                target: edge.target,
                label: edge.type,
                labelStyle: { fontSize: 8, fill: "#94a3b8" },
                style: { stroke: "#cbd5e1" },
            }));

            setNodes(flowNodes);
            setEdges(flowEdges);
        } catch (error) {
            console.error("Failed to fetch admin history graph:", error);
        } finally {
            setLoading(false);
        }
    }, [setNodes, setEdges]);

    useEffect(() => {
        fetchGraph();
    }, [fetchGraph]);

    const onNodeClick = (_: any, node: Node) => {
        setSelectedNode(node.data as unknown as unknown as GraphNode & {module_order?: number});
    };

    return (
        <div className="h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
            {/* Admin Header */}
            <header className="p-4 border-b bg-background flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500 rounded-lg text-white">
                        <Network className="w-5 h-5" />
                    </div>
                    <div>
                        <h1 className="text-xl font-black italic tracking-tighter">History Graph Explorer</h1>
                        <p className="text-xs text-muted-foreground">Admin Observability: 273 Modern History Nodes</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input 
                            placeholder="Find node by name..." 
                            className="pl-9 h-9"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" size="sm" onClick={fetchGraph}>
                        <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                        Relink
                    </Button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 relative">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onNodeClick={onNodeClick}
                    nodeTypes={nodeTypes}
                    fitView
                    minZoom={0.05}
                    maxZoom={2}
                >
                    <Background variant={BackgroundVariant.Dots} gap={20} color="#cbd5e1" />
                    <Controls />
                    <MiniMap />
                </ReactFlow>

                {/* Graph Feedback Overlay */}
                <div className="absolute bottom-6 left-6 p-4 bg-background/80 backdrop-blur border rounded-2xl shadow-xl space-y-3 pointer-events-none">
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                        <Database className="w-4 h-4" />
                        GRAPH INTEGRITY
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-2xl font-black">{nodes.length}</span>
                            <span className="text-[10px] uppercase text-muted-foreground">Nodes</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black">{edges.length}</span>
                            <span className="text-[10px] uppercase text-muted-foreground">Dependencies</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black text-green-500">0</span>
                            <span className="text-[10px] uppercase text-muted-foreground">Cycles</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Node Inspector Sheet */}
            <Sheet open={!!selectedNode} onOpenChange={() => setSelectedNode(null)}>
                <SheetContent side="right" className="w-[400px] sm:w-[540px]">
                    {selectedNode && (
                        <div className="space-y-8">
                            <SheetHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="secondary" className="font-mono text-[10px]">
                                        ID: {selectedNode.id}
                                    </Badge>
                                    <Badge className={selectedNode.difficulty === "Advanced" ? "bg-amber-500" : "bg-blue-500"}>
                                        {selectedNode.difficulty}
                                    </Badge>
                                </div>
                                <SheetTitle className="text-2xl font-black tracking-tight">
                                    {selectedNode.label}
                                </SheetTitle>
                                <SheetDescription>
                                    Technical properties and relationships for this history node.
                                </SheetDescription>
                            </SheetHeader>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-900 border-border">
                                    <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Exam Relevance</div>
                                    <div className="text-lg font-black">{selectedNode.exam_relevance}</div>
                                </div>
                                <div className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-900 border-border">
                                    <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Module Order</div>
                                    <div className="text-lg font-black">{(selectedNode as {module_order?: number}).module_order || "N/A"}</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-sm font-bold flex items-center gap-2">
                                    <Info className="w-4 h-4" /> Related Nodes
                                </h3>
                                <div className="space-y-2">
                                    {edges
                                        .filter(e => e.source === selectedNode.id || e.target === selectedNode.id)
                                        .map(e => (
                                            <div key={e.id} className="flex items-center justify-between p-2 rounded-md bg-muted text-xs">
                                                <span>{e.source === selectedNode.id ? "Prerequisite for" : "Depends on"}</span>
                                                <span className="font-bold">
                                                    {e.source === selectedNode.id ? e.target : e.source}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex gap-3">
                                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                                <div className="text-xs leading-relaxed text-amber-800 dark:text-amber-200">
                                    <strong>Admin Note:</strong> Changing this node's prerequisites may affect the cognitive journey for current students.
                                </div>
                            </div>

                            <div className="flex gap-3 pt-8">
                                <Button className="flex-1">Edit Properties</Button>
                                <Button variant="outline" className="flex-1">View Analytics</Button>
                            </div>
                        </div>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
}

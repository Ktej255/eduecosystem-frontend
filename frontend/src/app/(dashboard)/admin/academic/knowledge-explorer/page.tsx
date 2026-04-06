"use client";

import { useEffect, useState, useCallback, memo } from "react";
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
    RefreshCw,
    Globe,
    History,
    Leaf
} from "lucide-react";
import { knowledgeService, GraphNode } from "@/lib/knowledgeService";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const AdminNode = memo(({ data }: { data: any }) => (
    <div className={`px-4 py-3 rounded-lg border-2 shadow-sm bg-card hover:border-primary transition-all group ${
        data.difficulty === "Foundation" ? "border-slate-300" :
        data.difficulty === "Advanced" ? "border-amber-500" : "border-purple-500"
    }`}>
        <Handle type="target" position={Position.Top} className="!bg-muted-foreground" />
        <div className="text-[10px] font-black uppercase text-muted-foreground opacity-50 mb-1 leading-none">{data.difficulty}</div>
        <div className="font-bold text-xs truncate max-w-[150px] group-hover:text-primary transition-colors">{data.label}</div>
        <div className="mt-1 flex items-center gap-1">
            <div className="h-[2px] flex-1 bg-muted rounded-full">
                <div className="h-full bg-primary/30" style={{ width: `${(data.exam_relevance / 10) * 100}%` }} />
            </div>
        </div>
        <Handle type="source" position={Position.Bottom} className="!bg-muted-foreground" />
    </div>
));

AdminNode.displayName = "AdminNode";

const nodeTypes = {
    knowledgeNode: AdminNode,
};

export default function KnowledgeExplorer() {
    const [subject, setSubject] = useState("history");
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
    const [rawNodes, setRawNodes] = useState<GraphNode[]>([]);
    const [rawEdges, setRawEdges] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState<string[]>(["FOUNDATION", "UPSC_OVERLAY", "ADVANCED"]);

    const fetchGraph = useCallback(async (currentSubject: string) => {
        setLoading(true);
        try {
            const data = await knowledgeService.getGraph(currentSubject);
            setRawNodes(data.nodes);
            setRawEdges(data.edges);
            
            applyFilters(data.nodes, data.edges, searchTerm, filters);
        } catch (error) {
            console.error(`Failed to fetch ${currentSubject} graph:`, error);
        } finally {
            setLoading(false);
        }
    }, [searchTerm, filters]);

    const applyFilters = (nodesData: GraphNode[], edgesData: any[], search: string, activeFilters: string[]) => {
        const filteredNodes = nodesData.filter(n => {
            const matchesSearch = n.label.toLowerCase().includes(search.toLowerCase()) || n.id.toLowerCase().includes(search.toLowerCase());
            const matchesDifficulty = activeFilters.includes(n.difficulty);
            return matchesSearch && matchesDifficulty;
        });

        const nodeIds = new Set(filteredNodes.map(n => n.id));

        const flowNodes: Node[] = filteredNodes.map((node, index) => ({
            id: node.id,
            type: "knowledgeNode",
            data: { ...node },
            position: { x: (index % 8) * 250, y: Math.floor(index / 8) * 150 },
        }));

        // Generate edges from prerequisites
        const flowEdges: Edge[] = edgesData
            .filter(e => nodeIds.has(e.source) && nodeIds.has(e.target))
            .map((edge) => ({
                id: `e-${edge.source}-${edge.target}`,
                source: edge.source,
                target: edge.target,
                label: edge.type,
                labelStyle: { fontSize: 8, fill: "#94a3b8" },
                style: { stroke: "#cbd5e1", strokeWidth: 1.5 },
                animated: edge.type === "prerequisite",
            }));

        // ADD: Context edges (Dashed) from context_nodes field
        filteredNodes.forEach(node => {
            if (node.context_nodes && Array.isArray(node.context_nodes)) {
                node.context_nodes.forEach(ctxId => {
                    // Only draw edge if the target exists in current set (or across subjects)
                    // For now, only draw if target is in current visible set
                    if (nodeIds.has(ctxId)) {
                        flowEdges.push({
                            id: `ctx-${node.id}-${ctxId}`,
                            source: node.id,
                            target: ctxId,
                            label: "synapse",
                            style: { stroke: "#8b5cf6", strokeDasharray: "5,5", strokeWidth: 2 },
                            animated: true,
                        });
                    }
                });
            }
        });

        setNodes(flowNodes);
        setEdges(flowEdges);
    };

    useEffect(() => {
        fetchGraph(subject);
    }, [subject]); // Only re-fetch on subject change

    // Re-apply filters when search or filters change without re-fetching
    useEffect(() => {
        if (rawNodes.length > 0) {
            applyFilters(rawNodes, rawEdges, searchTerm, filters);
        }
    }, [searchTerm, filters, rawNodes, rawEdges]);

    const toggleFilter = (f: string) => {
        setFilters(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);
    };

    const onNodeClick = (_: any, node: Node) => {
        setSelectedNode(node.data as GraphNode);
    };

    const getSubjectIcon = (s: string) => {
        switch (s) {
            case "history": return <History className="w-4 h-4" />;
            case "environment": return <Leaf className="w-4 h-4" />;
            case "geography": return <Globe className="w-4 h-4" />;
            default: return <Database className="w-4 h-4" />;
        }
    };

    return (
        <div className="h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
            {/* Admin Header */}
            <header className="p-4 border-b bg-background flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary rounded-lg text-white">
                            <Network className="w-5 h-5" />
                        </div>
                        <div>
                            <h1 className="text-xl font-black italic tracking-tighter">Knowledge Explorer</h1>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                Saturated Nodes: <span className="font-bold text-primary">{rawNodes.length}</span> | Filters Active: <span className="font-bold text-primary">{filters.length}</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Select value={subject} onValueChange={setSubject}>
                            <SelectTrigger className="w-48 h-9 font-bold bg-muted/50 border-none shadow-none">
                                <div className="flex items-center gap-2">
                                    {getSubjectIcon(subject)}
                                    <SelectValue placeholder="Select Subject" />
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="environment">Environment</SelectItem>
                                <SelectItem value="history">History (Modern)</SelectItem>
                                <SelectItem value="polity">Indian Polity</SelectItem>
                                <SelectItem value="geography">Geography</SelectItem>
                                <SelectItem value="economy">Economy</SelectItem>
                                <SelectItem value="science-tech">Science & Tech</SelectItem>
                                <SelectItem value="ir">International Relations</SelectItem>
                                <SelectItem value="security">Internal Security</SelectItem>
                                <SelectItem value="disaster-mgmt">Disaster Management</SelectItem>
                                <SelectItem value="ethics">Ethics (GS4)</SelectItem>
                                <SelectItem value="social-issues">Social Issues</SelectItem>
                                <SelectItem value="agriculture">Agriculture</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="relative w-64">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input 
                                placeholder="Jump to Node ID or Name..." 
                                className="pl-9 h-9 border-none bg-muted/50 focus-visible:ring-1"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" size="sm" onClick={() => fetchGraph(subject)}>
                            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                            Sync
                        </Button>
                    </div>
                </div>

                {/* Difficulty Filters */}
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mr-2">Filter Level:</span>
                    {["FOUNDATION", "UPSC_OVERLAY", "ADVANCED"].map(f => (
                        <Badge 
                            key={f}
                            variant={filters.includes(f) ? "default" : "outline"}
                            className="cursor-pointer px-3 py-1 text-[10px] uppercase tracking-wider transition-all"
                            onClick={() => toggleFilter(f)}
                        >
                            {f.replace("_", " ")}
                        </Badge>
                    ))}
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
                    minZoom={0.01}
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
                        SUBJECT SATURATION: {subject.toUpperCase()}
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-2xl font-black">{nodes.length}</span>
                            <span className="text-[10px] uppercase text-muted-foreground">Visible Nodes</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black">{edges.length}</span>
                            <span className="text-[10px] uppercase text-muted-foreground">Edges</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Node Inspector Sheet */}
            <Sheet open={!!selectedNode} onOpenChange={() => setSelectedNode(null)}>
                <SheetContent side="right" className="w-[400px] sm:w-[540px]">
                    {selectedNode && (
                        <div className="space-y-8 h-full overflow-y-auto pr-6">
                            <SheetHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="secondary" className="font-mono text-[10px]">
                                        ID: {selectedNode.id}
                                    </Badge>
                                    <Badge className={selectedNode.difficulty === "ADVANCED" ? "bg-amber-500" : "bg-blue-500"}>
                                        {selectedNode.difficulty}
                                    </Badge>
                                </div>
                                <SheetTitle className="text-2xl font-black tracking-tight">
                                    {selectedNode.label}
                                </SheetTitle>
                                <SheetDescription>
                                    Technical properties and relationships for this {subject} node.
                                </SheetDescription>
                            </SheetHeader>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-900 border-border">
                                    <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Exam Relevance</div>
                                    <div className="text-lg font-black">{selectedNode.exam_relevance}</div>
                                </div>
                                <div className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-900 border-border">
                                    <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Module Order</div>
                                    <div className="text-lg font-black">{selectedNode.module_order || "N/A"}</div>
                                </div>
                            </div>

                            {/* Cross-Subject Synapse Section */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold flex items-center gap-2 text-primary">
                                    <Network className="w-4 h-4" /> Cross-Subject Synapses
                                </h3>
                                {selectedNode.context_nodes && selectedNode.context_nodes.length > 0 ? (
                                    <div className="flex flex-wrap gap-2">
                                        {selectedNode.context_nodes.map(ctxId => (
                                            <Badge key={ctxId} variant="outline" className="bg-primary/5 text-[10px] border-primary/20">
                                                {ctxId}
                                            </Badge>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-xs text-muted-foreground italic">No cross-subject context bridges established yet.</div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-sm font-bold flex items-center gap-2">
                                    <Info className="w-4 h-4" /> Dependency Mapping
                                </h3>
                                <div className="space-y-2">
                                    {edges
                                        .filter(e => e.source === selectedNode.id || e.target === selectedNode.id)
                                        .map(e => (
                                            <div key={e.id} className="flex items-center justify-between p-2 rounded-md bg-muted text-[10px]">
                                                <span className="uppercase text-muted-foreground font-bold">
                                                    {e.source === selectedNode.id ? "Outcome" : "Prerequisite"}
                                                </span>
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
                                    <strong>Curriculum Lock:</strong> This node is part of a saturated subject. Modification will trigger a global cache invalidation for all students.
                                </div>
                            </div>

                            <div className="flex gap-3 pt-4 pb-8">
                                <Button className="flex-1 font-bold">Edit Node</Button>
                                <Button variant="outline" className="flex-1 font-bold">Deep Audit</Button>
                            </div>
                        </div>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
}

"use client";

import { useCallback, useEffect, useState } from "react";
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
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Loader2, Layers, Zap, BookOpen } from "lucide-react";
import api from "@/lib/api";

// Custom Node Types
const RootNode = ({ data }: { data: any }) => (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-4 rounded-2xl shadow-2xl text-center border-2 border-white/20">
        <Layers className="w-8 h-8 mx-auto mb-2" />
        <div className="text-xl font-black">{data.label}</div>
        <Handle type="source" position={Position.Bottom} className="!bg-white" />
    </div>
);

const SubjectNode = ({ data }: { data: any }) => (
    <div className={`bg-gray-900 text-white px-6 py-4 rounded-xl shadow-lg border-2 ${data.priority === "high" ? "border-amber-500" : "border-gray-700"
        }`}>
        <Handle type="target" position={Position.Top} className="!bg-cyan-500" />
        <div className="flex items-center gap-2 mb-1">
            {data.priority === "high" && <Zap className="w-4 h-4 text-amber-500" />}
            <span className="font-bold text-lg">{data.label}</span>
        </div>
        <div className="text-xs text-gray-400">{data.topic_count} topics</div>
        <Handle type="source" position={Position.Bottom} className="!bg-cyan-500" />
    </div>
);

const TopicNode = ({ data }: { data: any }) => (
    <div className="bg-white text-gray-900 px-4 py-3 rounded-lg shadow-md border border-gray-200 max-w-[200px]">
        <Handle type="target" position={Position.Top} className="!bg-blue-500" />
        <div className="flex items-center gap-1 mb-1">
            <BookOpen className="w-3 h-3 text-blue-500" />
            <span className="font-semibold text-sm line-clamp-2">{data.label}</span>
        </div>
        {data.subtopics && data.subtopics.length > 0 && (
            <div className="text-[10px] text-gray-500 flex flex-wrap gap-1 mt-1">
                {data.subtopics.slice(0, 3).map((st: string, i: number) => (
                    <span key={i} className="bg-gray-100 px-1.5 py-0.5 rounded">{st}</span>
                ))}
                {data.subtopics.length > 3 && (
                    <span className="text-gray-400">+{data.subtopics.length - 3} more</span>
                )}
            </div>
        )}
        {data.note && (
            <div className="text-[10px] text-amber-700 mt-1 italic">📌 {data.note}</div>
        )}
    </div>
);

const nodeTypes = {
    root: RootNode,
    subject: SubjectNode,
    topic: TopicNode,
};

export function SyllabusKnowledgeGraph() {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
    const [loading, setLoading] = useState(true);

    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    useEffect(() => {
        const fetchGraph = async () => {
            try {
                const res = await api.get("/knowledge-graph/syllabus-graph");
                setNodes(res.data.nodes);
                setEdges(res.data.edges);
            } catch (error) {
                console.error("Failed to fetch knowledge graph:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGraph();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-[600px] bg-gray-900 rounded-2xl border border-gray-800">
                <Loader2 className="h-10 w-10 animate-spin text-cyan-500 mb-4" />
                <p className="text-gray-400">Generating Knowledge Graph...</p>
            </div>
        );
    }

    return (
        <div className="h-[700px] w-full bg-gray-950 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="bottom-left"
                proOptions={{ hideAttribution: true }}
                defaultViewport={{ x: 0, y: 0, zoom: 0.7 }}
            >
                <Background variant={BackgroundVariant.Dots} color="#333" gap={20} />
                <Controls className="!bg-gray-800 !border-gray-700 !text-white" />
                <MiniMap
                    nodeColor={(node) => {
                        if (node.type === "root") return "#0ea5e9";
                        if (node.type === "subject") return "#1f2937";
                        return "#ffffff";
                    }}
                    maskColor="rgba(0,0,0,0.8)"
                    className="!bg-gray-900 !border-gray-700 rounded-lg"
                />
            </ReactFlow>
        </div>
    );
}

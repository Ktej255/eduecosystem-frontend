"use client";

import { useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, Node, Edge, useNodesState, useEdgesState, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Loader2, Search, Share2, Download } from 'lucide-react';
import { toast } from 'react-hot-toast';
import dagre from 'dagre';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: 150, height: 50 }); // Approximate width/height
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const layoutedNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        return {
            ...node,
            targetPosition: isHorizontal ? Position.Left : Position.Top,
            sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
            position: {
                x: nodeWithPosition.x - 75, // Half width
                y: nodeWithPosition.y - 25, // Half height
            },
        };
    });

    return { nodes: layoutedNodes, edges };
};

export default function MindMapGenerator() {
    const [topic, setTopic] = useState('');
    const [loading, setLoading] = useState(false);

    // ReactFlow hooks
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

    const generateMap = async () => {
        if (!topic.trim()) return;
        setLoading(true);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/ai/mindmap`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ message: topic })
            });

            if (!response.ok) throw new Error("Failed to generate mind map");

            const data = await response.json();

            if (data.nodes && data.edges) {
                // Apply Layout
                const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
                    data.nodes.map((n: any) => ({ ...n, data: { label: n.label } })),
                    data.edges,
                    'TB'
                );

                setNodes(layoutedNodes as Node[]);
                setEdges(layoutedEdges as Edge[]);
                toast.success("Mind Map Generated!");
            } else {
                toast.error("Invalid data format received.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Could not generate mind map. Try a different topic.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-[700px] w-full flex flex-col gap-4">
            <div className="flex gap-2">
                <Input
                    placeholder="Enter topic (e.g., 'Indian Constitution', 'Inflation')"
                    value={topic}
                    onChange={e => setTopic(e.target.value)}
                    className="max-w-md border-indigo-200 dark:border-indigo-800"
                    onKeyDown={(e) => e.key === 'Enter' && generateMap()}
                />
                <Button onClick={generateMap} disabled={loading} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    {loading ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : <Search className="h-4 w-4 mr-2" />}
                    Generate
                </Button>
            </div>

            <Card className="flex-1 overflow-hidden border-indigo-100 dark:border-indigo-900 shadow-sm relative bg-gray-50 dark:bg-gray-900">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    fitView
                    attributionPosition="bottom-right"
                >
                    <Background color="#ccc" gap={16} />
                    <Controls />
                </ReactFlow>

                {nodes.length === 0 && !loading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                        <Share2 className="h-16 w-16 mb-4 opacity-50" />
                        <p>Enter a topic to generate an interactive AI mind map.</p>
                    </div>
                )}
            </Card>
        </div>
    );
}

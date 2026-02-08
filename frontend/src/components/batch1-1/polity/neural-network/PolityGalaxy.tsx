
"use client";

import React, { useCallback, useEffect } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    BackgroundVariant,
    Edge,
    Node,
    MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { INITIAL_GRAPH_DATA } from './data/initial-data';
import { PolityNode, PolityEdge } from './types';

interface PolityGalaxyProps {
    onNodeClick: (node: PolityNode) => void;
    mode: 'NORMAL' | 'EMERGENCY' | 'ELECTION';
}

export default function PolityGalaxy({ onNodeClick, mode }: PolityGalaxyProps) {
    const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_GRAPH_DATA.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(INITIAL_GRAPH_DATA.edges);

    // Apply "Circuit Board" Logic (The Master Switch Effect)
    useEffect(() => {
        setNodes((nds) => nds.map((node) => {
            const pNode = node as PolityNode;
            // Default Style
            let style = {
                background: '#1e293b',
                color: '#fff',
                border: '1px solid #334155',
                width: 180,
                fontSize: '12px',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                borderRadius: '4px' // Squared off for "Chip" look
            };

            // EMERGENCY LOGIC
            if (mode === 'EMERGENCY') {
                if (pNode.type === 'union') {
                    // High Power
                    style = { ...style, background: '#7f1d1d', border: '1px solid #ef4444', boxShadow: '0 0 15px rgba(239,68,68,0.6)' };
                } else if (pNode.type === 'state') {
                    // Power Cut
                    style = { ...style, background: '#334155', color: '#94a3b8', border: '1px solid #475569', opacity: 0.5 };
                }
            } else {
                // NORMAL LOGIC
                if (pNode.type === 'union') {
                    style = { ...style, border: '1px solid #06b6d4', boxShadow: '0 0 10px rgba(6,182,212,0.2)' };
                } else if (pNode.type === 'state') {
                    style = { ...style, border: '1px solid #10b981', boxShadow: '0 0 10px rgba(16,185,129,0.2)' };
                } else if (pNode.type === 'judiciary') {
                    style = { ...style, border: '1px solid #eab308', boxShadow: '0 0 10px rgba(234,179,8,0.2)' };
                } else if (pNode.type === 'abstract') {
                    // Concept Nodes (Shields/Firewalls)
                    style = {
                        ...style,
                        background: '#1e1b4b', // Deep Indigo
                        border: '2px dashed #6366f1',
                        borderRadius: '50%', // Circular/Orb-like
                        width: 140,
                        height: 140,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        boxShadow: '0 0 20px rgba(99,102,241,0.3)'
                    };
                } else if (pNode.type === 'citizen') {
                    // The Citizen Node
                    style = {
                        ...style,
                        background: '#fff',
                        color: '#000',
                        border: '4px solid #000',
                        borderRadius: '100px',
                        width: 120,
                        textAlign: 'center'
                    };
                }
            }

            return { ...node, style };
        }));

        setEdges((eds) => eds.map((edge) => {
            const pEdge = edge as PolityEdge;
            let hidden = false;
            let animated = false;
            let stroke = '#475569'; // Default Slate-600

            // Visibility Logic
            if (pEdge.visible_during === 'EMERGENCY' && mode !== 'EMERGENCY') {
                hidden = true;
            } else if (pEdge.visible_during === 'EMERGENCY' && mode === 'EMERGENCY') {
                hidden = false;
                animated = true;
                stroke = '#ef4444'; // Red for Override
            }

            // Dotted Lines styling
            if (pEdge.style?.strokeDasharray) {
                stroke = '#cbd5e1';  // Light grey for dotted
            }

            return {
                ...edge,
                hidden,
                animated: animated || edge.animated,
                style: { ...edge.style, stroke }
            };
        }));

    }, [mode, setNodes, setEdges]);


    const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={(event, node) => onNodeClick(node as PolityNode)}
                fitView
                colorMode="dark" // Using dark mode
                // Connection Line Style
                connectionLineStyle={{ stroke: '#fff' }}
                defaultEdgeOptions={{
                    type: 'smoothstep', // Orthogonal Lines (Metro Style)
                    markerEnd: { type: MarkerType.ArrowClosed }
                }}
            >
                <Controls showInteractive={false} className="bg-slate-800 border-slate-700 fill-slate-400" />
                <Background
                    variant={BackgroundVariant.Lines} // Grid Style like PCB 
                    gap={20}
                    size={1}
                    color="#334155" // Slate-700 lines
                    style={{ opacity: 0.2 }}
                />
            </ReactFlow>
        </div>
    );
}

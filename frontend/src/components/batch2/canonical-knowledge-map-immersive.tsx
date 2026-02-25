"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { Info, Maximize2 } from "lucide-react";
import dynamic from "next/dynamic";
import * as THREE from 'three';

// Dynamic import with SSR disabled for the 3D graph (requires browser APIs)
const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), { ssr: false });

export function CanonicalKnowledgeMapImmersive() {
    const { mode } = useBatch2UI();
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hoverNode, setHoverNode] = useState<any | null>(null);
    const fgRef = useRef<any>();

    useEffect(() => {
        if (mode !== 'immersive') return;

        async function loadData() {
            try {
                const [nodesRes, edgesRes] = await Promise.all([
                    fetch("/data/knowledge-map/nodes.json"),
                    fetch("/data/knowledge-map/edges.json"),
                ]);

                if (!nodesRes.ok || !edgesRes.ok) {
                    throw new Error("Failed to load data files");
                }

                let nodesData = await nodesRes.json();
                const edgesData = await edgesRes.json();

                // Map styling data to nodes
                nodesData = nodesData.map((n: any) => ({
                    ...n,
                    val: n.style?.includes('header') || n.style === 'primary' ? 20 : 10,
                    color: getColorForStyle(n.style)
                }));

                // react-force-graph expects 'source' and 'target'
                const linksData = edgesData.map((e: any) => ({
                    source: e.source,
                    target: e.target,
                    type: e.type
                }));

                setGraphData({ nodes: nodesData, links: linksData });
            } catch (err) {
                console.error("Failed to load knowledge map data:", err);
                setError("Failed to load 3D Knowledge Map. Ensure JSON data exists.");
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [mode]);

    const getColorForStyle = (style: string) => {
        if (!style) return '#ffffff';
        if (style.includes('primary')) return '#C4A35A'; // Brahman
        if (style.includes('veda')) return '#E07B39';
        if (style.includes('smriti')) return '#B8860B';
        if (style.includes('prasthana')) return '#E8B98D';
        if (style.includes('darshana')) return '#5A8F7B';
        if (style.includes('vedanga')) return '#4A90A4';
        if (style.includes('upaveda')) return '#6B8E23';
        if (style.includes('purana')) return '#9B6B9E';
        if (style.includes('itihas')) return '#C94C4C';
        return '#8B7355'; // Default sutra/other
    };

    const handleNodeClick = useCallback((node: any) => {
        // Aim at node from current position
        if (fgRef.current) {
            const distance = 100;
            const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

            fgRef.current.cameraPosition(
                { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
                node, // lookAt ({ x, y, z })
                2000  // ms transition duration
            );
        }
    }, [fgRef]);

    if (mode !== 'immersive') return null;

    if (loading) {
        return (
            <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center font-sans">
                <div className="text-amber-500 tracking-[0.3em] uppercase text-xs animate-pulse">Initializing Neural Web...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center font-sans">
                <div className="text-red-500 flex items-center gap-2"><Info className="w-5 h-5" /> {error}</div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black z-[100] overflow-hidden font-sans">

            <div className="absolute top-6 right-6 z-50">
                <TranceToggle />
            </div>

            {/* Ambient Title Overlay */}
            <div className="absolute top-10 left-10 z-40 pointer-events-none mix-blend-screen opacity-50">
                <h1 className="text-5xl font-serif text-amber-500 font-bold mb-2 blur-[1px]">Neural Web of Dharma</h1>
                <p className="text-amber-200/60 uppercase tracking-[0.4em] text-xs font-mono ml-1">3D Canonical Topology</p>
            </div>

            {/* Hover Info Panel */}
            {hoverNode && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 bg-black/80 backdrop-blur-md border border-amber-500/30 px-8 py-6 rounded-2xl min-w-[300px] text-center shadow-[0_0_50px_rgba(245,158,11,0.1)] transition-opacity">
                    <h3 className="text-xl font-serif text-amber-400 mb-1">{hoverNode.label}</h3>
                    {hoverNode.sublabel && <p className="text-amber-200/70 text-sm tracking-widest uppercase mb-3">{hoverNode.sublabel}</p>}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent my-3" />
                    {hoverNode.description ? (
                        <p className="text-stone-400 text-xs leading-relaxed max-w-sm mx-auto">{hoverNode.description}</p>
                    ) : (
                        <p className="text-stone-600 text-[10px] uppercase tracking-widest">Node active</p>
                    )}
                </div>
            )}

            {/* Instructions */}
            <div className="absolute bottom-4 right-4 z-40 text-stone-600 text-[10px] uppercase tracking-widest font-mono flex items-center gap-2">
                <Maximize2 className="w-3 h-3" /> Drag to Rotate • Scroll to Zoom • Click Node to Focus
            </div>

            {/* 3D Force Graph */}
            <div className="w-full h-full cursor-move">
                <ForceGraph3D
                    ref={fgRef}
                    graphData={graphData}
                    nodeLabel={(node: any) => `<div style="background: rgba(0,0,0,0.8); padding: 4px 8px; border-radius: 4px; border: 1px solid ${node.color}; color: white; font-family: sans-serif; font-size: 12px;">${node.label}</div>`}
                    nodeColor={(node: any) => node.color}
                    nodeRelSize={4}
                    nodeResolution={16}
                    linkColor={() => 'rgba(245, 158, 11, 0.15)'}
                    linkWidth={1}
                    linkOpacity={0.2}
                    linkDirectionalParticles={2}
                    linkDirectionalParticleWidth={1.5}
                    linkDirectionalParticleSpeed={0.005}
                    onNodeHover={(node) => setHoverNode(node)}
                    onNodeClick={handleNodeClick}
                    backgroundColor="#000000"
                    showNavInfo={false}
                />
            </div>

            {/* Ambient volumetric lighting fake overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] pointer-events-none mix-blend-multiply" />
        </div>
    );
}

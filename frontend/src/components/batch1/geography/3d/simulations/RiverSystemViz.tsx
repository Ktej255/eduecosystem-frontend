"use client";

import { useState, Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import * as THREE from "three";
import FlowArrows from "../shared/FlowArrows";
import ConfluenceMarker, { latLngToPosition } from "../shared/ConfluenceMarker";
import gangaData from "../../data/rivers/ganga-system.json";
import brahmaputraData from "../../data/rivers/brahmaputra-system.json";

interface RiverNode {
    id: string;
    name: string;
    type: string;
    coordinates: [number, number];
    description?: string;
    tributaryJoining?: string;
}

interface SelectedNode {
    node: RiverNode;
    position: [number, number, number];
}

function RiverScene({
    systemId,
    onSelectNode
}: {
    systemId: 'ganga' | 'brahmaputra';
    onSelectNode: (node: SelectedNode | null) => void
}) {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    // Select data based on systemId
    const data = useMemo(() => {
        return systemId === 'ganga' ? gangaData : brahmaputraData;
    }, [systemId]);

    // Main flow path
    const mainPath = data.flowPath as [number, number][];

    // Nodes
    const nodes = data.nodes as RiverNode[];

    // Tributaries definition (visual paths)
    const tributaries = useMemo(() => {
        const leftBank = (data.tributaries?.leftBank || []) as any[];
        const rightBank = (data.tributaries?.rightBank || []) as any[];

        const allTribs = [...leftBank, ...rightBank];

        // Filter those with paths and map to required format
        return allTribs
            .filter(t => t.path && t.path.length > 0)
            .map(t => ({
                id: t.id,
                color: t.color || '#4FC3F7',
                path: t.path as [number, number][]
            }));
    }, [data]);

    return (
        <>
            <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, 5, -5]} intensity={0.5} color="#4FC3F7" />

            {/* India Base (Holographic World) */}
            <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshPhongMaterial
                    color="#0a1a0f"
                    emissive="#1a3a2a"
                    emissiveIntensity={0.5}
                    shininess={100}
                    transparent
                    opacity={0.9}
                />
            </mesh>
            {/* Glow / Rim Light */}
            <mesh scale={[1.02, 1.02, 1.02]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#2e7d32"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Main River */}
            <FlowArrows
                path={mainPath}
                color="#4FC3F7"
                speed={0.4}
                particleCount={80}
            />

            {/* Tributaries */}
            {tributaries.map((trib) => (
                <FlowArrows
                    key={trib.id}
                    path={trib.path}
                    color={trib.color}
                    speed={0.3}
                    particleCount={30}
                />
            ))}

            {/* Confluence Markers */}
            {nodes.map((node) => {
                const pos = latLngToPosition(node.coordinates[0], node.coordinates[1]);
                return (
                    <ConfluenceMarker
                        key={node.id}
                        position={pos}
                        name={node.name}
                        tributaryName={node.tributaryJoining}
                        isActive={activeNode === node.id}
                        onSelect={() => {
                            setActiveNode(node.id);
                            onSelectNode({ node, position: pos });
                        }}
                    />
                );
            })}

            <OrbitControls
                enablePan={true}
                enableZoom={true}
                minDistance={1.8}
                maxDistance={4}
                autoRotate={!activeNode}
                autoRotateSpeed={0.5}
            />
        </>
    );
}

export default function RiverSystemViz({ systemId = 'ganga' }: { systemId?: 'ganga' | 'brahmaputra' }) {
    const [selectedNode, setSelectedNode] = useState<SelectedNode | null>(null);
    const title = systemId === 'ganga' ? 'Ganga River System' : 'Brahmaputra River System';

    return (
        <div className="w-full h-full relative bg-slate-950">
            {/* 3D Canvas */}
            <Canvas
                camera={{ position: systemId === 'ganga' ? [0, 2, 3] : [1.5, 2, 2.5], fov: 50 }}
                style={{ background: 'linear-gradient(to bottom, #0f172a, #020617)' }}
            >
                <Suspense fallback={null}>
                    <RiverScene systemId={systemId} onSelectNode={setSelectedNode} />
                </Suspense>
            </Canvas>

            {/* Info Panel */}
            {selectedNode && (
                <div className="absolute bottom-6 left-6 right-6 max-w-md bg-slate-900/90 backdrop-blur-md rounded-xl border border-cyan-500/30 p-4 animate-in slide-in-from-bottom-4 duration-300">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                            <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-1">{selectedNode.node.name}</h3>
                            {selectedNode.node.tributaryJoining && (
                                <p className="text-cyan-400 text-sm mb-1">↳ {selectedNode.node.tributaryJoining} joins here</p>
                            )}
                            {selectedNode.node.description && (
                                <p className="text-slate-400 text-sm">{selectedNode.node.description}</p>
                            )}
                            <div className="mt-2 text-xs text-slate-500">
                                Loc: {selectedNode.node.coordinates[0].toFixed(2)}°N, {selectedNode.node.coordinates[1].toFixed(2)}°E
                            </div>
                        </div>
                        <button onClick={() => setSelectedNode(null)} className="text-slate-500 hover:text-white transition-colors">✕</button>
                    </div>
                </div>
            )}

            {/* Title */}
            <div className="absolute top-4 left-4 text-white">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-slate-400 text-sm">Interactive 3D Visualization</p>
            </div>
        </div>
    );
}

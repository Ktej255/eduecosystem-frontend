"use client";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import FlowArrows from "../shared/FlowArrows";
import ConfluenceMarker, { latLngToPosition } from "../shared/ConfluenceMarker";
import gangaData from "../../data/rivers/ganga-system.json";

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

function RiverScene({ onSelectNode }: { onSelectNode: (node: SelectedNode | null) => void }) {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    // Main Ganga flow path
    const gangaPath = gangaData.flowPath as [number, number][];

    // All confluence/landmark nodes
    const nodes = gangaData.nodes as RiverNode[];

    // Tributary paths (simplified - just showing major ones)
    const yamunaPath: [number, number][] = [
        [30.98, 78.45], // Yamunotri
        [30.50, 78.30],
        [29.80, 78.00],
        [28.50, 77.50],
        [28.61, 77.21], // Delhi
        [27.20, 78.00],
        [26.85, 80.90],
        [25.43, 81.85]  // Prayagraj confluence
    ];

    const kosiPath: [number, number][] = [
        [27.98, 87.00], // Near Everest
        [27.00, 87.20],
        [26.50, 87.00],
        [26.00, 86.80],
        [25.25, 86.98]  // Bhagalpur confluence
    ];

    const gandakPath: [number, number][] = [
        [28.50, 84.50], // Nepal
        [27.50, 84.20],
        [26.80, 84.50],
        [26.20, 84.80],
        [25.60, 85.10]  // Patna confluence
    ];

    return (
        <>
            {/* Background Stars */}
            <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />

            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, 5, -5]} intensity={0.5} color="#4FC3F7" />

            {/* India Base (simplified sphere segment) */}
            <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#1a472a"
                    roughness={0.8}
                    metalness={0.2}
                    opacity={0.9}
                    transparent
                />
            </mesh>

            {/* Main Ganga River */}
            <FlowArrows
                path={gangaPath}
                color="#4FC3F7"
                speed={0.4}
                particleCount={80}
            />

            {/* Yamuna Tributary */}
            <FlowArrows
                path={yamunaPath}
                color="#29B6F6"
                speed={0.35}
                particleCount={40}
            />

            {/* Kosi Tributary */}
            <FlowArrows
                path={kosiPath}
                color="#26C6DA"
                speed={0.3}
                particleCount={25}
            />

            {/* Gandak Tributary */}
            <FlowArrows
                path={gandakPath}
                color="#00BCD4"
                speed={0.3}
                particleCount={25}
            />

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

            {/* Camera Controls */}
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

export default function RiverSystemViz() {
    const [selectedNode, setSelectedNode] = useState<SelectedNode | null>(null);

    return (
        <div className="w-full h-full relative bg-slate-950">
            {/* 3D Canvas */}
            <Canvas
                camera={{ position: [0, 2, 3], fov: 50 }}
                style={{ background: 'linear-gradient(to bottom, #0f172a, #020617)' }}
            >
                <Suspense fallback={null}>
                    <RiverScene onSelectNode={setSelectedNode} />
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
                            <h3 className="text-lg font-bold text-white mb-1">
                                {selectedNode.node.name}
                            </h3>
                            {selectedNode.node.tributaryJoining && (
                                <p className="text-cyan-400 text-sm mb-1">
                                    ↳ {selectedNode.node.tributaryJoining} joins here
                                </p>
                            )}
                            {selectedNode.node.description && (
                                <p className="text-slate-400 text-sm">
                                    {selectedNode.node.description}
                                </p>
                            )}
                            <div className="mt-2 text-xs text-slate-500">
                                📍 {selectedNode.node.coordinates[0].toFixed(2)}°N, {selectedNode.node.coordinates[1].toFixed(2)}°E
                            </div>
                        </div>
                        <button
                            onClick={() => setSelectedNode(null)}
                            className="text-slate-500 hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Legend */}
            <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-xs">
                <div className="text-white font-semibold mb-2">River Legend</div>
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-cyan-400" />
                        <span className="text-slate-400">Ganga (Main)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-blue-400" />
                        <span className="text-slate-400">Yamuna</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-teal-400" />
                        <span className="text-slate-400">Kosi / Gandak</span>
                    </div>
                </div>
            </div>

            {/* Title */}
            <div className="absolute top-4 left-4 text-white">
                <h2 className="text-xl font-bold">Ganga River System</h2>
                <p className="text-slate-400 text-sm">Interactive 3D Visualization</p>
            </div>
        </div>
    );
}

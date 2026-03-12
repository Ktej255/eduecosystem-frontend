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
    const data = systemId === 'ganga' ? gangaData : brahmaputraData;

    // Process nodes to 3D positions
    const nodes = useMemo(() => {
        return (data.nodes as RiverNode[]).map(node => ({
            ...node,
            pos: latLngToPosition(node.coordinates[0], node.coordinates[1])
        }));
    }, [data]);

    // Create paths connecting nodes
    const paths = useMemo(() => {
        const pathList: { start: [number, number, number], end: [number, number, number] }[] = [];

        nodes.forEach(node => {
            if (node.tributaryJoining) {
                const target = nodes.find(n => n.name === node.tributaryJoining);
                if (target) {
                    pathList.push({
                        start: node.pos,
                        end: target.pos
                    });
                }
            }
        });
        return pathList;
    }, [nodes]);

    return (
        <group rotation={[0, Math.PI, 0]}> {/* Rotate to face camera */}
            {/* Draw River Paths */}
            {paths.map((path, i) => (
                <group key={`path-${i}`}>
                    {/* Water Line */}
                    <mesh>
                        <tubeGeometry args={[
                            new THREE.CatmullRomCurve3([
                                new THREE.Vector3(...path.start),
                                new THREE.Vector3(...path.end)
                            ]),
                            20, // segments
                            0.05, // radius
                            8, // radial segments
                            false // closed
                        ]} />
                        <meshStandardMaterial color="#3b82f6" emissive="#2563eb" emissiveIntensity={0.5} transparent opacity={0.8} />
                    </mesh>
                    {/* Animated Flow Arrows */}
                    <FlowArrows start={path.start} end={path.end} />
                </group>
            ))}

            {/* Draw Confluence Points */}
            {nodes.map((node) => (
                <ConfluenceMarker
                    key={node.id}
                    position={node.pos}
                    name={node.name}
                    isMajor={node.type === 'main'}
                    onClick={() => onSelectNode({ node, position: node.pos })}
                />
            ))}

            {/* Ground Plane for reference */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#0f172a" transparent opacity={0.4} />
            </mesh>
            <gridHelper args={[20, 20, "#1e293b", "#0f172a"]} position={[0, -1.99, 0]} />
        </group>
    );
}

export default function RiverSystemViz({ systemId = 'ganga' }: { systemId?: 'ganga' | 'brahmaputra' }) {
    const [selectedNode, setSelectedNode] = useState<SelectedNode | null>(null);

    return (
        <div className="w-full h-[600px] relative bg-slate-950 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-sm pointer-events-none">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-8 bg-blue-500 rounded-full" />
                    {systemId === 'ganga' ? 'Ganga River System' : 'Brahmaputra River System'}
                </h2>
                <p className="text-sm text-blue-200/60 ml-4">
                    Interactive 3D Topological Map
                </p>
            </div>

            <Canvas camera={{ position: [0, 5, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <Suspense fallback={null}>
                    <RiverScene systemId={systemId} onSelectNode={setSelectedNode} />
                </Suspense>

                <OrbitControls
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2.2}
                    minDistance={2}
                    maxDistance={15}
                    autoRotate={!selectedNode}
                    autoRotateSpeed={0.5}
                />
            </Canvas>

            {/* Selection Panel */}
            {selectedNode && (
                <div className="absolute bottom-4 left-4 z-20 w-80 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-300">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                                {selectedNode.node.type}
                            </span>
                            <h3 className="text-2xl font-bold text-white leading-none mt-1">
                                {selectedNode.node.name}
                            </h3>
                        </div>
                        <button
                            onClick={() => setSelectedNode(null)}
                            className="p-1 rounded-full hover:bg-card/10 text-muted-foreground hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {selectedNode.node.description || "A major water body in the system."}
                    </p>

                    {selectedNode.node.tributaryJoining && (
                        <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                            <p className="text-xs text-blue-300">
                                <span className="font-bold">Confluence:</span> Joins {selectedNode.node.tributaryJoining}
                            </p>
                        </div>
                    )}
                </div>
            )}

            {/* Legend */}
            <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2 pointer-events-none">
                <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/50 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                    River Path
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/50 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-card shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    Confluence Point
                </div>
            </div>
        </div>
    );
}

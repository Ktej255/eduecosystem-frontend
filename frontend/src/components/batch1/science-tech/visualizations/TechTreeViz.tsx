"use client";

import { Atom, Cpu, Dna, FileText, FlaskConical, Rocket, Zap, Microscope, Globe2, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Html, MeshTransmissionMaterial, OrbitControls, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";

const TECHNOLOGIES = [
    { id: 'biotech', name: 'Biotechnology', icon: Dna, color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-900/30', x: 200, y: 100, requires: [] },
    { id: 'nano', name: 'Nanotech', icon: Atom, color: 'text-cyan-500', bg: 'bg-cyan-100 dark:bg-cyan-900/30', x: 500, y: 100, requires: [] },
    { id: 'space', name: 'Space Tech', icon: Rocket, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/30', x: 350, y: 250, requires: ['biotech', 'nano'] },
    { id: 'ai', name: 'Artificial Intelligence', icon: Cpu, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30', x: 200, y: 400, requires: ['space'] },
    { id: 'energy', name: 'Clean Energy', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30', x: 500, y: 400, requires: ['space'] },
];

function TechNode({ tech, isSelected, isHovered, onSelect, onHover }: {
    tech: typeof TECHNOLOGIES[0],
    isSelected: boolean,
    isHovered: boolean,
    onSelect: (id: string) => void,
    onHover: (id: string | null) => void
}) {
    const Icon = tech.icon;
    const pos: [number, number, number] = [tech.x / 100 - 3.5, -tech.y / 100 + 2.5, 0];

    return (
        <group position={pos} onPointerOver={() => onHover(tech.id)} onPointerOut={() => onHover(null)} onClick={() => onSelect(tech.id)}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={0.5}
                        chromaticAberration={0.02}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.1}
                        temporalDistortion={0.1}
                        color={tech.color.includes('rose') ? '#f43f5e' : tech.color.includes('cyan') ? '#06b6d4' : tech.color.includes('indigo') ? '#4f46e5' : tech.color.includes('purple') ? '#a855f7' : '#eab308'}
                        emissive={isSelected || isHovered ? '#ffffff' : 'black'}
                        emissiveIntensity={isSelected ? 0.5 : isHovered ? 0.2 : 0}
                    />
                </mesh>
            </Float>
            <Html center distanceFactor={10}>
                <div className={`flex flex-col items-center gap-2 transition-all duration-300 ${isSelected || isHovered ? 'scale-110' : 'scale-100'}`}>
                    <div className={`p-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-2xl`}>
                        <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black text-white uppercase tracking-tighter whitespace-nowrap bg-black/20 px-1 rounded">
                        {tech.name}
                    </span>
                </div>
            </Html>
        </group>
    );
}

function TechConnection({ fromPos, toPos, isHighlighted }: { fromPos: [number, number, number], toPos: [number, number, number], isHighlighted: boolean }) {
    const curve = useMemo(() => {
        const start = new THREE.Vector3(...fromPos);
        const end = new THREE.Vector3(...toPos);
        const mid = new THREE.Vector3((start.x + end.x) / 2, (start.y + end.y) / 2 + 0.5, (start.z + end.z) / 2);
        return new THREE.QuadraticBezierCurve3(start, mid, end);
    }, [fromPos, toPos]);

    const points = useMemo(() => curve.getPoints(50), [curve]);
    const lineRef = useRef<THREE.Line>(null);

    useFrame((state) => {
        if (lineRef.current) {
            (lineRef.current.material as THREE.LineBasicMaterial).opacity = isHighlighted ? 0.8 : 0.2;
            // Pulse effect
            if (isHighlighted) {
                (lineRef.current.material as THREE.LineBasicMaterial).opacity += Math.sin(state.clock.elapsedTime * 4) * 0.1;
            }
        }
    });

    return (
        <line ref={lineRef as any}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={points.length}
                    array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
                    itemSize={3}
                    args={[new Float32Array(points.flatMap(p => [p.x, p.y, p.z])), 3]}
                />
            </bufferGeometry>
            <lineBasicMaterial color={isHighlighted ? "#6366f1" : "#94a3b8"} transparent opacity={0.2} linewidth={2} />
        </line>
    );
}

export default function TechTreeViz() {
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    const selectedTech = TECHNOLOGIES.find(t => t.id === selectedNodeId);

    return (
        <Card className="w-full bg-slate-950 border-white/10 shadow-2xl overflow-hidden h-[600px] relative">
            <CardHeader className="relative z-10 border-b border-white/5 bg-slate-900/50 backdrop-blur-md">
                <CardTitle className="flex items-center gap-2 text-white">
                    <span className="w-8 h-8 rounded-lg bg-indigo-900/50 flex items-center justify-center text-indigo-400">
                        <Microscope className="w-5 h-5" />
                    </span>
                    Technology Evolution Tree 3D
                </CardTitle>
                <CardDescription className="text-slate-400">
                    Interact with the 3D graph to explore technological dependencies
                </CardDescription>
            </CardHeader>
            <CardContent className="h-full relative p-0 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                        <ambientLight intensity={0.4} />
                        <pointLight position={[10, 10, 10]} intensity={1} color="#4f46e5" />
                        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

                        {/* Node Connections */}
                        {TECHNOLOGIES.map(tech =>
                            tech.requires.map(reqId => {
                                const reqNode = TECHNOLOGIES.find(t => t.id === reqId);
                                if (!reqNode) return null;
                                return (
                                    <TechConnection
                                        key={`${reqId}-${tech.id}`}
                                        fromPos={[reqNode.x / 100 - 3.5, -reqNode.y / 100 + 2.5, 0]}
                                        toPos={[tech.x / 100 - 3.5, -tech.y / 100 + 2.5, 0]}
                                        isHighlighted={hoveredNode === tech.id || hoveredNode === reqId || selectedNodeId === tech.id || selectedNodeId === reqId}
                                    />
                                );
                            })
                        )}

                        {/* Technology Nodes */}
                        {TECHNOLOGIES.map(tech => (
                            <TechNode
                                key={tech.id}
                                tech={tech}
                                isSelected={selectedNodeId === tech.id}
                                isHovered={hoveredNode === tech.id}
                                onSelect={setSelectedNodeId}
                                onHover={setHoveredNode}
                            />
                        ))}

                        <OrbitControls enableZoom={false} enablePan={false} />
                    </Canvas>
                </div>
            </CardContent>

            {/* Detail Modal Overlay */}
            {selectedTech && (
                <div className="absolute inset-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm p-6 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${selectedTech.bg} ${selectedTech.color}`}>
                                <selectedTech.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white">{selectedTech.name}</h3>
                                <Badge variant="outline" className="mt-1">Core Syllabus Topic</Badge>
                            </div>
                        </div>
                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedNodeId(null); }}
                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                        >
                            <span className="sr-only">Close</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-6 custom-scrollbar pr-2">
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-3">Key Concepts</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="bg-white dark:bg-black p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-medium">✨ Concept 1: Fundamentals & Applications</div>
                                <div className="bg-white dark:bg-black p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-medium">🚀 Concept 2: Recent Developments (2024-25)</div>
                                <div className="bg-white dark:bg-black p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-medium">⚖️ Concept 3: Ethical & Regulatory Issues</div>
                                <div className="bg-white dark:bg-black p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-medium">🇮🇳 Concept 4: India's Achievements</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1 bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                                <div className="text-2xl font-black text-indigo-600 mb-1">2-3</div>
                                <div className="text-xs font-bold text-indigo-800 dark:text-indigo-300">Expected Questions</div>
                            </div>
                            <div className="col-span-1 bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                                <div className="text-2xl font-black text-emerald-600 mb-1">High</div>
                                <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300">Mains Weightage</div>
                            </div>
                            <div className="col-span-1 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30">
                                <div className="text-2xl font-black text-amber-600 mb-1">Dynamic</div>
                                <div className="text-xs font-bold text-amber-800 dark:text-amber-300">Current Affairs Link</div>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2">
                            <FileText className="w-5 h-5" />
                            Start Revision for {selectedTech.name}
                        </button>
                    </div>
                </div>
            )}
        </Card>
    );
}

"use client";

import React, { useMemo, useRef } from "react";
import { Cloud, Factory, Flame, Leaf, Wind, Play, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Html, Points, PointMaterial, MeshDistortMaterial, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function HubNode({
    position,
    label,
    icon: Icon,
    color,
    onClick,
    isSelected
}: {
    position: [number, number, number],
    label: string,
    icon: any,
    color: string,
    onClick?: () => void,
    isSelected?: boolean
}) {
    return (
        <group position={position} onClick={(e) => { e.stopPropagation(); onClick?.(); }}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {/* Outer Glow */}
                {isSelected && (
                    <mesh scale={[1.4, 1.4, 1.4]}>
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshBasicMaterial color={color} transparent opacity={0.2} />
                    </mesh>
                )}
                <mesh scale={isSelected ? [1.1, 1.1, 1.1] : [1, 1, 1]}>
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
                        color={color}
                        emissive={color}
                        emissiveIntensity={isSelected ? 1.5 : 0.5}
                        transparent
                        opacity={0.8}
                    />
                </mesh>
                <mesh scale={[1.1, 1.1, 1.1]}>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color={color} wireframe transparent opacity={0.1} />
                </mesh>
            </Float>
            <Html position={[0, 1.2, 0]} center>
                <div onClick={onClick} className="flex flex-col items-center cursor-pointer transition-transform hover:scale-110">
                    <div className={`
                        backdrop-blur-md p-2 rounded-xl border shadow-2xl flex items-center gap-2 transition-all
                        ${isSelected ? 'bg-white/20 border-white/40 ring-2 ring-white/20 scale-110' : 'bg-white/10 border-white/20'}
                    `}>
                        <Icon className="w-4 h-4" style={{ color }} />
                        <span className="text-[10px] font-black text-white uppercase tracking-tighter whitespace-nowrap">{label}</span>
                    </div>
                </div>
            </Html>
        </group>
    );
}

function CarbonFlow({ from, to, color, count = 20 }: { from: [number, number, number], to: [number, number, number], color: string, count?: number }) {
    const particles = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            offset: Math.random(),
            speed: 0.002 + Math.random() * 0.005,
            spread: (Math.random() - 0.5) * 0.5
        }));
    }, [count]);

    const pointsRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        particles.forEach((p, i) => {
            p.offset = (p.offset + p.speed) % 1;
            if (!pointsRef.current) return;
            const child = pointsRef.current.children[i];
            if (child) {
                child.position.lerpVectors(
                    new THREE.Vector3(...from),
                    new THREE.Vector3(...to),
                    p.offset
                );
                // Add some jitter
                child.position.x += Math.sin(state.clock.elapsedTime + i) * 0.05;
                child.position.y += Math.cos(state.clock.elapsedTime + i) * 0.05;
            }
        });
    });

    return (
        <group ref={pointsRef}>
            {particles.map((_, i) => (
                <mesh key={i}>
                    <sphereGeometry args={[0.04, 8, 8]} />
                    <meshBasicMaterial color={color} transparent opacity={0.8} blending={THREE.AdditiveBlending} />
                </mesh>
            ))}
        </group>
    );
}

export default function CarbonCycleViz() {
    const [selectedNode, setSelectedNode] = React.useState<string | null>(null);
    const [showFlows, setShowFlows] = React.useState(true);

    const nodeData = {
        "Atmosphere": {
            description: "The reservoir of CO2 and other greenhouse gases.",
            stats: "415 ppm CO2 Concentration",
            flux: "+2.5 ppm/year"
        },
        "Biosphere": {
            description: "Organic matter in plants, animals, and soil.",
            stats: "550 Gt Carbon Stored",
            flux: "-120 Gt/year via Photosynthesis"
        },
        "Industry": {
            description: "Human activities releasing stored carbon.",
            stats: "36.3 Gt CO2 Emissions",
            flux: "Rising at 1.5% annually"
        }
    };

    return (
        <Card className="w-full bg-slate-950 border-white/10 shadow-2xl overflow-hidden h-[600px] flex flex-col">
            <CardHeader className="bg-slate-900/50 backdrop-blur-md z-10 border-b border-white/5 relative shrink-0">
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2 text-white">
                            <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                                <Wind className="w-5 h-5" />
                            </span>
                            Volumetric Carbon Cycle
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Interactive simulation of CO₂ fluxes. Click nodes for details.
                        </CardDescription>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setShowFlows(!showFlows)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${showFlows
                                ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                                : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10"
                                }`}
                        >
                            {showFlows ? "Hide Flows" : "Show Flows"}
                        </button>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex-1 relative p-0 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
                        <ambientLight intensity={0.4} />
                        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
                        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

                        {/* Hubs */}
                        <HubNode
                            position={[0, 2.5, 0]}
                            label="Atmosphere"
                            icon={Cloud}
                            color="#38bdf8"
                            onClick={() => setSelectedNode("Atmosphere")}
                            isSelected={selectedNode === "Atmosphere"}
                        />
                        <HubNode
                            position={[-3, -1.5, 0]}
                            label="Biosphere"
                            icon={Leaf}
                            color="#22c55e"
                            onClick={() => setSelectedNode("Biosphere")}
                            isSelected={selectedNode === "Biosphere"}
                        />
                        <HubNode
                            position={[3, -1.5, 0]}
                            label="Industry"
                            icon={Factory}
                            color="#f43f5e"
                            onClick={() => setSelectedNode("Industry")}
                            isSelected={selectedNode === "Industry"}
                        />

                        {/* Flows */}
                        {showFlows && (
                            <>
                                {/* Photosynthesis: Atmos -> Biosphere */}
                                <CarbonFlow from={[0, 2.5, 0]} to={[-3, -1.5, 0]} color="#22c55e" />
                                {/* Respiration: Biosphere -> Atmos */}
                                <CarbonFlow from={[-3, -1.5, 0]} to={[0, 2.5, 0]} color="#fbbf24" />
                                {/* Combustion: Industry -> Atmos */}
                                <CarbonFlow from={[3, -1.5, 0]} to={[0, 2.5, 0]} color="#f43f5e" />
                            </>
                        )}

                        <mesh rotation-x={-Math.PI / 2} position={[0, -3, 0]}>
                            <planeGeometry args={[20, 20]} />
                            <meshStandardMaterial color="#0f172a" transparent opacity={0.2} />
                        </mesh>

                        <gridHelper args={[20, 20, "#1e293b", "#0f172a"]} position={[0, -2.99, 0]} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
                    </Canvas>
                </div>

                {/* Info Panel Overlay */}
                {selectedNode && nodeData[selectedNode as keyof typeof nodeData] && (
                    <div className="absolute top-4 left-4 z-20 w-64 bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 p-4 shadow-2xl animate-in fade-in slide-in-from-left-4">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-white">{selectedNode}</h3>
                            <button onClick={() => setSelectedNode(null)} className="text-slate-400 hover:text-white">
                                <RotateCcw className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                            {nodeData[selectedNode as keyof typeof nodeData].description}
                        </p>
                        <div className="space-y-2">
                            <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">Current Status</p>
                                <p className="text-xs font-mono text-blue-300">{nodeData[selectedNode as keyof typeof nodeData].stats}</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">Annual Flux</p>
                                <p className="text-xs font-mono text-emerald-300">{nodeData[selectedNode as keyof typeof nodeData].flux}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute bottom-6 right-6 z-20 flex flex-col gap-2 pointer-events-none">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Bio-Accumulation
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded-full border border-amber-500/20 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        Respiration
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full border border-rose-500/20 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                        Industrial Emissions
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

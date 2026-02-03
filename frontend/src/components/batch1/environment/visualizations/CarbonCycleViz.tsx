"use client";

import React, { useMemo, useRef } from "react";
import { Cloud, Factory, Flame, Leaf, Wind, Play, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Html, Points, PointMaterial, MeshDistortMaterial, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function HubNode({ position, label, icon: Icon, color }: { position: [number, number, number], label: string, icon: any, color: string }) {
    return (
        <group position={position}>
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
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.5}
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
                <div className="flex flex-col items-center">
                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 shadow-2xl flex items-center gap-2">
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
    return (
        <Card className="w-full bg-slate-950 border-white/10 shadow-2xl overflow-hidden h-[500px]">
            <CardHeader className="bg-slate-900/50 backdrop-blur-md z-10 border-b border-white/5 relative">
                <CardTitle className="flex items-center gap-2 text-white">
                    <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                        <Wind className="w-5 h-5" />
                    </span>
                    Volumetric Carbon Cycle
                </CardTitle>
                <CardDescription className="text-slate-400">
                    Active simulation of CO₂ fluxes between Atmosphere, Biosphere & Industry
                </CardDescription>
            </CardHeader>

            <CardContent className="h-full relative p-0 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
                        <ambientLight intensity={0.4} />
                        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
                        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

                        {/* Hubs */}
                        <HubNode position={[0, 3, 0]} label="Atmosphere" icon={Cloud} color="#38bdf8" />
                        <HubNode position={[-3.5, -1, 0]} label="Biosphere" icon={Leaf} color="#22c55e" />
                        <HubNode position={[3.5, -1, 0]} label="Industry" icon={Factory} color="#f43f5e" />

                        {/* Flows */}
                        {/* Photosynthesis: Atmos -> Biosphere */}
                        <CarbonFlow from={[0, 3, 0]} to={[-3.5, -1, 0]} color="#22c55e" />
                        {/* Respiration: Biosphere -> Atmos */}
                        <CarbonFlow from={[-3.5, -1, 0]} to={[0, 3, 0]} color="#f43f5e" />
                        {/* Combustion: Industry -> Atmos */}
                        <CarbonFlow from={[3.5, -1, 0]} to={[0, 3, 0]} color="#f43f5e" />

                        <mesh rotation-x={-Math.PI / 2} position={[0, -2, 0]}>
                            <planeGeometry args={[20, 20]} />
                            <meshStandardMaterial color="#0f172a" transparent opacity={0.2} />
                        </mesh>

                        {/* Holographic Grid */}
                        <gridHelper args={[20, 20, "#1e293b", "#0f172a"]} position={[0, -1.99, 0]} />
                    </Canvas>
                </div>

                <div className="absolute bottom-6 right-6 z-20 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Active Sequestration
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full border border-rose-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                        Industrial Emissions
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

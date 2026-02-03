"use client";

import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html, Box, Sphere, Line } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Home, Factory, Play, Pause, Layers, Building2, Globe, TrendingUp } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import * as THREE from 'three';

// --- 3D Components (Hardened for Production) ---

function Building({ position, color, roofColor, label, icon: Icon, scale = 1 }: { position: [number, number, number], color: string, roofColor: string, label: string, icon: any, scale?: number }) {
    const isFactory = label === "Firms";
    const isGovt = label === "Government";
    const isForeign = label === "Foreign Sector";

    return (
        <group position={position} scale={[scale, scale, scale]}>
            {/* Base */}
            {isForeign ? (
                <mesh position={[0, 0.5, 0]}>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} map={null} />
                    {/* Simple wireframe globe effect */}
                    <mesh scale={[1.01, 1.01, 1.01]}>
                        <sphereGeometry args={[0.8, 16, 16]} />
                        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.2} />
                    </mesh>
                </mesh>
            ) : (
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[isGovt ? 2 : 1.5, 1, isGovt ? 1.5 : 1.5]} />
                    <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
                </mesh>
            )}

            {/* Detailed Geometry */}
            {isFactory ? (
                <>
                    {/* Chimneys */}
                    <mesh position={[-0.4, 1.2, -0.4]}>
                        <cylinderGeometry args={[0.2, 0.2, 0.8, 16]} />
                        <meshStandardMaterial color="#475569" />
                    </mesh>
                    <mesh position={[0.4, 1.2, 0.2]}>
                        <cylinderGeometry args={[0.15, 0.15, 0.6, 16]} />
                        <meshStandardMaterial color="#475569" />
                    </mesh>
                </>
            ) : isGovt ? (
                <>
                    {/* Dome for Government */}
                    <mesh position={[0, 1.1, 0]}>
                        <sphereGeometry args={[0.7, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
                        <meshStandardMaterial color={roofColor} roughness={0.2} metalness={0.5} />
                    </mesh>
                    <mesh position={[0.6, 1.2, 0.5]}>
                        <cylinderGeometry args={[0.1, 0.15, 0.8, 8]} />
                        <meshStandardMaterial color={color} />
                    </mesh>
                    <mesh position={[-0.6, 1.2, 0.5]}>
                        <cylinderGeometry args={[0.1, 0.15, 0.8, 8]} />
                        <meshStandardMaterial color={color} />
                    </mesh>
                </>
            ) : isForeign ? (
                <>
                    {/* Satellite or ring for Foreign */}
                    <mesh rotation={[Math.PI / 3, 0, 0]}>
                        <torusGeometry args={[1.2, 0.05, 16, 100]} />
                        <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={0.5} />
                    </mesh>
                </>
            ) : (
                <>
                    {/* Roof for Households */}
                    <mesh position={[0, 1.25, 0]} rotation={[0, Math.PI / 4, 0]}>
                        <coneGeometry args={[1.2, 0.8, 4]} />
                        <meshStandardMaterial color={roofColor} />
                    </mesh>
                    {/* Windows */}
                    <mesh position={[0.4, 0.5, 0.76]}>
                        <boxGeometry args={[0.3, 0.3, 0.05]} />
                        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} />
                    </mesh>
                    <mesh position={[-0.4, 0.5, 0.76]}>
                        <boxGeometry args={[0.3, 0.3, 0.05]} />
                        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} />
                    </mesh>
                </>
            )}

            {/* Label */}
            <Html position={[0, isForeign ? 1.8 : 2.2, 0]} center>
                <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
                    <div className="bg-slate-950/80 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-2 ring-1 ring-white/5">
                        <Icon className="w-4 h-4" style={{ color: color }} />
                        <span className="text-xs font-bold text-white whitespace-nowrap tracking-tight">{label}</span>
                    </div>
                </div>
            </Html>
        </group>
    );
}

function FlowPath({ start, end, controlPointOffset, color, label, isPlaying, reverse = false, particleColor }: {
    start: [number, number, number],
    end: [number, number, number],
    controlPointOffset: [number, number, number],
    color: string,
    label?: string,
    isPlaying: boolean,
    reverse?: boolean,
    particleColor?: string
}) {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);

    // Calculate control point dynamically based on midpoint + offset
    const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
    const controlPoint = new THREE.Vector3().addVectors(midPoint, new THREE.Vector3(...controlPointOffset));

    const curve = useMemo(() => new THREE.QuadraticBezierCurve3(startVec, controlPoint, endVec), [start, end, controlPointOffset]);

    const particleCount = 12;
    const particles = useMemo(() => {
        return new Array(particleCount).fill(0).map(() => ({
            offset: Math.random(),
            speed: 0.3 + Math.random() * 0.2
        }));
    }, []);

    return (
        <group>
            {/* Tube Path */}
            <mesh>
                <tubeGeometry args={[curve, 64, 0.03, 8, false]} />
                <meshStandardMaterial color={color} transparent opacity={0.3} emissive={color} emissiveIntensity={0.2} />
            </mesh>

            {/* Label at Midpoint */}
            {label && (
                <Html position={[controlPoint.x, controlPoint.y, controlPoint.z]} center>
                    <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded-md backdrop-blur-md uppercase tracking-wide border shadow-sm whitespace-nowrap"
                        style={{
                            backgroundColor: `${color}20`,
                            color: particleColor || color,
                            borderColor: `${color}40`
                        }}
                    >
                        {label}
                    </span>
                </Html>
            )}

            {/* Particles */}
            {particles.map((p, i) => (
                <Particle
                    key={i}
                    config={p}
                    path={curve}
                    color={particleColor || color}
                    isPlaying={isPlaying}
                    reverse={reverse}
                />
            ))}
        </group>
    );
}

function Particle({ config, path, color, isPlaying, reverse }: { config: { offset: number, speed: number }, path: THREE.QuadraticBezierCurve3, color: string, isPlaying: boolean, reverse: boolean }) {
    const ref = useRef<THREE.Mesh>(null);
    const [progress, setProgress] = useState(config.offset);

    useFrame((state, delta) => {
        if (!isPlaying || !ref.current) return;

        const speed = config.speed * delta * 0.5;
        let newProg = progress + (reverse ? -speed : speed);

        if (newProg > 1) newProg = 0;
        if (newProg < 0) newProg = 1;

        setProgress(newProg);
        const pos = path.getPoint(newProg);
        ref.current.position.copy(pos);
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
        </mesh>
    );
}

function Scene({ isPlaying, sectorMode }: { isPlaying: boolean, sectorMode: '2' | '3' | '4' }) {
    // Node Positions
    const posHH: [number, number, number] = [-4, 0, 0];
    const posFirms: [number, number, number] = [4, 0, 0];
    const posGovt: [number, number, number] = [0, 2, -4]; // Elevated and further back
    const posForeign: [number, number, number] = [0, 0, 4]; // Floor level and front

    const showGovt = sectorMode === '3' || sectorMode === '4';
    const showForeign = sectorMode === '4';

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

            {/* Grid */}
            <gridHelper args={[20, 20, '#1e293b', '#0f172a']} position={[0, -0.5, 0]} />

            {/* --- NODES --- */}
            <Building position={posHH} color="#6366f1" roofColor="#4f46e5" label="Households" icon={Home} />
            <Building position={posFirms} color="#f97316" roofColor="#ea580c" label="Firms" icon={Factory} />

            {showGovt && (
                <Building position={posGovt} color="#eab308" roofColor="#ca8a04" label="Government" icon={Building2} scale={1.2} />
            )}

            {showForeign && (
                <Building position={posForeign} color="#a855f7" roofColor="#9333ea" label="Foreign Sector" icon={Globe} />
            )}

            {/* --- FLOWS --- */}

            {/* 1. Core Flows (HH <-> Firms) */}
            {/* Real Flow (Factor Services) */}
            <FlowPath
                start={posHH} end={posFirms} controlPointOffset={[0, 4, 0]}
                color="#3b82f6" particleColor="#60a5fa" label="Factor Services" isPlaying={isPlaying}
            />
            {/* Money Flow (Factor Payments) - Reverse of Services */}
            <FlowPath
                start={posHH} end={posFirms} controlPointOffset={[0, 3.5, 0]}
                color="#22c55e" particleColor="#4ade80" label="Factor Payments" isPlaying={isPlaying} reverse
            />

            {/* Real Flow (Goods & Services) */}
            <FlowPath
                start={posFirms} end={posHH} controlPointOffset={[0, -2, 0]}
                color="#3b82f6" particleColor="#60a5fa" label="Goods & Services" isPlaying={isPlaying}
            />
            {/* Money Flow (Consumption Exp) - Reverse of Goods */}
            <FlowPath
                start={posFirms} end={posHH} controlPointOffset={[0, -2.5, 0]}
                color="#22c55e" particleColor="#4ade80" label="Consumption Exp" isPlaying={isPlaying} reverse
            />


            {/* 2. Government Flows (Sector 3) */}
            {showGovt && (
                <>
                    {/* Taxes (HH -> Govt) */}
                    <FlowPath
                        start={posHH} end={posGovt} controlPointOffset={[-1, 1, 0]}
                        color="#eab308" particleColor="#facc15" label="Taxes" isPlaying={isPlaying}
                    />
                    {/* Taxes (Firms -> Govt) */}
                    <FlowPath
                        start={posFirms} end={posGovt} controlPointOffset={[1, 1, 0]}
                        color="#eab308" particleColor="#facc15" label="Corp Taxes" isPlaying={isPlaying}
                    />

                    {/* Transfers (Govt -> HH) */}
                    <FlowPath
                        start={posGovt} end={posHH} controlPointOffset={[-2, 0.5, 0]}
                        color="#22c55e" particleColor="#4ade80" label="Transfers" isPlaying={isPlaying}
                    />
                    {/* Subsidies (Govt -> Firms) */}
                    <FlowPath
                        start={posGovt} end={posFirms} controlPointOffset={[2, 0.5, 0]}
                        color="#22c55e" particleColor="#4ade80" label="Subsidies" isPlaying={isPlaying}
                    />
                </>
            )}

            {/* 3. Foreign Sector Flows (Sector 4) */}
            {showForeign && (
                <>
                    {/* Exports (Foreign -> Firms : Money IN) */}
                    <FlowPath
                        start={posForeign} end={posFirms} controlPointOffset={[2, 0.5, 0]}
                        color="#a855f7" particleColor="#c084fc" label="Exports (Income)" isPlaying={isPlaying}
                    />

                    {/* Imports (Firms -> Foreign : Money OUT) */}
                    <FlowPath
                        start={posFirms} end={posForeign} controlPointOffset={[1, -1, 0]}
                        color="#a855f7" particleColor="#c084fc" label="Imports (Payment)" isPlaying={isPlaying}
                    />
                </>
            )}

            <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2.2} />
        </>
    );
}

export default function CircularFlowViz() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [sectorMode, setSectorMode] = useState<'2' | '3' | '4'>('4');

    return (
        <Card className="w-full bg-slate-950 border-slate-800 shadow-sm relative overflow-hidden h-[600px] flex flex-col">
            <CardHeader className="bg-slate-900/50 backdrop-blur-sm z-10 border-b border-white/10 shrink-0">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-white">
                            <span className="w-8 h-8 rounded-lg bg-emerald-900/50 flex items-center justify-center text-emerald-400">
                                <DollarSign className="w-5 h-5" />
                            </span>
                            Circular Flow of Income
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Interactive Macroeconomic Model
                        </CardDescription>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="mr-2">
                            <Select value={sectorMode} onValueChange={(v: any) => setSectorMode(v)}>
                                <SelectTrigger className="w-[140px] h-8 bg-slate-900 border-slate-700 text-slate-200 text-xs">
                                    <SelectValue placeholder="Select Model" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                                    <SelectItem value="2">Two Sector (Simple)</SelectItem>
                                    <SelectItem value="3">Three Sector (+Govt)</SelectItem>
                                    <SelectItem value="4">Four Sector (Open)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button
                            variant="secondary"
                            size="icon"
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-8 h-8 rounded-full"
                        >
                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                    </div>
                </div>
            </CardHeader>

            <div className="flex-1 relative bg-slate-950">
                <Canvas camera={{ position: [0, 4, 12], fov: 45 }}>
                    <Scene isPlaying={isPlaying} sectorMode={sectorMode} />
                </Canvas>

                {/* Legend Overlay */}
                <div className="absolute bottom-4 left-4 grid grid-cols-1 gap-2 pointer-events-none">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        <span className="text-[10px] text-slate-300 font-medium">Real Flow (Goods/Services)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <span className="text-[10px] text-slate-300 font-medium">Money Flow (Payments)</span>
                    </div>
                    {['3', '4'].includes(sectorMode) && (
                        <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2">
                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                            <span className="text-[10px] text-slate-300 font-medium">Fiscal Flow (Taxes/Transfers)</span>
                        </div>
                    )}
                    {sectorMode === '4' && (
                        <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2">
                            <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                            <span className="text-[10px] text-slate-300 font-medium">Trade Flow (Exports/Imports)</span>
                        </div>
                    )}
                </div>

                {/* Sector Badges */}
                <div className="absolute top-4 right-4 flex flex-col items-end gap-2 pointer-events-none">
                    <Badge variant="outline" className="bg-slate-900/50 border-indigo-500/30 text-indigo-400">Household Sector</Badge>
                    <Badge variant="outline" className="bg-slate-900/50 border-orange-500/30 text-orange-400">Firm Sector</Badge>
                    {['3', '4'].includes(sectorMode) && (
                        <Badge variant="outline" className="bg-slate-900/50 border-yellow-500/30 text-yellow-400 animate-in fade-in slide-in-from-right-2">Government Sector</Badge>
                    )}
                    {sectorMode === '4' && (
                        <Badge variant="outline" className="bg-slate-900/50 border-purple-500/30 text-purple-400 animate-in fade-in slide-in-from-right-2">Foreign Sector</Badge>
                    )}
                </div>
            </div>
        </Card>
    );
}

"use client";

import { Leaf, Rabbit, Skull, Bug, Sun, AlertTriangle, RefreshCw, Sparkles, Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Html, MeshTransmissionMaterial, OrbitControls, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";

// --- Ecosystem Data ---
interface Species {
    id: string;
    name: string;
    type: 'producer' | 'primary_consumer' | 'secondary_consumer' | 'decomposer';
    icon: any;
    x: number; // Percentage 0-100
    y: number; // Percentage 0-100
    color: string;
}

const INITIAL_SPECIES: Species[] = [
    { id: 'sun', name: 'Sun', type: 'producer', icon: Sun, x: 50, y: 10, color: '#eab308' },
    { id: 'grass', name: 'Grass', type: 'producer', icon: Leaf, x: 50, y: 30, color: '#22c55e' },
    { id: 'rabbit', name: 'Rabbit', type: 'primary_consumer', icon: Rabbit, x: 30, y: 55, color: '#3b82f6' },
    { id: 'deer', name: 'Deer', type: 'primary_consumer', icon: Rabbit, x: 70, y: 55, color: '#3b82f6' },
    { id: 'wolf', name: 'Wolf', type: 'secondary_consumer', icon: Skull, x: 30, y: 80, color: '#f97316' },
    { id: 'tiger', name: 'Tiger', type: 'secondary_consumer', icon: Skull, x: 70, y: 80, color: '#ef4444' },
    { id: 'fungi', name: 'Fungi', type: 'decomposer', icon: Bug, x: 90, y: 90, color: '#a8a29e' },
];

const CONNECTIONS = [
    { from: 'sun', to: 'grass' },
    { from: 'grass', to: 'rabbit' },
    { from: 'grass', to: 'deer' },
    { from: 'grass', to: 'fungi', dashed: true }, // Decay
    { from: 'rabbit', to: 'wolf' },
    { from: 'rabbit', to: 'tiger' },
    { from: 'deer', to: 'tiger' },
    { from: 'wolf', to: 'fungi', dashed: true },
    { from: 'tiger', to: 'fungi', dashed: true },
    { from: 'rabbit', to: 'fungi', dashed: true },
    { from: 'deer', to: 'fungi', dashed: true },
];

function TrophicNode({ species, isExtinct, onClick }: {
    species: Species,
    isExtinct: boolean,
    onClick: () => void
}) {
    const Icon = species.icon;
    const pos: [number, number, number] = [species.x / 10 - 5, -species.y / 10 + 5, 0];

    return (
        <group position={pos} onClick={onClick}>
            <Float speed={isExtinct ? 0.5 : 2} rotationIntensity={0.5} floatIntensity={isExtinct ? 0.2 : 1}>
                <mesh>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={0.5}
                        chromaticAberration={0.02}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.1}
                        temporalDistortion={0.1}
                        color={isExtinct ? '#334155' : species.color}
                        emissive={isExtinct ? 'black' : species.color}
                        emissiveIntensity={isExtinct ? 0 : 0.4}
                        transparent
                        opacity={isExtinct ? 0.4 : 0.9}
                    />
                </mesh>
                {isExtinct && (
                    <mesh>
                        <sphereGeometry args={[0.61, 16, 16]} />
                        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.2} />
                    </mesh>
                )}
            </Float>
            <Html center distanceFactor={10}>
                <div className={`flex flex-col items-center gap-1 transition-all duration-500 ${isExtinct ? 'grayscale scale-90 opacity-50' : 'scale-100'}`}>
                    <div className={`p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-2xl`}>
                        {isExtinct ? <AlertTriangle className="w-5 h-5 text-red-500" /> : <Icon className="w-5 h-5" style={{ color: species.color }} />}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-tighter whitespace-nowrap px-1 rounded ${isExtinct ? 'text-slate-500 line-through' : 'text-white bg-black/20'}`}>
                        {species.name}
                    </span>
                    {!isExtinct && (
                        <div className="text-[8px] font-mono text-slate-400">
                            {species.type === 'producer' ? '100% E' : species.type === 'primary_consumer' ? '10% E' : species.type === 'secondary_consumer' ? '1% E' : 'Recycle'}
                        </div>
                    )}
                </div>
            </Html>
        </group>
    );
}

function EnergyFlow({ from, to, isBroken, dashed }: { from: [number, number, number], to: [number, number, number], isBroken: boolean, dashed?: boolean }) {
    const curve = useMemo(() => {
        const start = new THREE.Vector3(...from);
        const end = new THREE.Vector3(...to);
        const mid = new THREE.Vector3((start.x + end.x) / 2, (start.y + end.y) / 2 + 0.5, (start.z + end.z) / 2);
        return new THREE.QuadraticBezierCurve3(start, mid, end);
    }, [from, to]);

    const points = useMemo(() => curve.getPoints(50), [curve]);
    const lineRef = useRef<THREE.Line>(null);

    useFrame((state) => {
        if (lineRef.current) {
            if (lineRef.current.material instanceof THREE.Material) {
                lineRef.current.material.opacity = isBroken ? 0.1 : 0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
            }
        }
    });

    return (
        <line ref={lineRef as any}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[new Float32Array(points.flatMap(p => [p.x, p.y, p.z])), 3]}
                />
            </bufferGeometry>
            <lineDashedMaterial
                color={isBroken ? "#334155" : "#64748b"}
                transparent
                opacity={0.4}
                linewidth={2}
                dashSize={dashed ? 0.2 : 0}
                gapSize={dashed ? 0.1 : 0}
            />
        </line>
    );
}

export default function FoodWebViz() {
    const [extinctSpecies, setExtinctSpecies] = useState<string[]>([]);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        let newMessage = null;
        if (extinctSpecies.includes('grass')) {
            newMessage = "CRITICAL: Without Producers (Grass), the entire ecosystem collapses!";
            if (!extinctSpecies.includes('rabbit')) setExtinctSpecies(prev => Array.from(new Set([...prev, 'rabbit'])));
            if (!extinctSpecies.includes('deer')) setExtinctSpecies(prev => Array.from(new Set([...prev, 'deer'])));
        } else if (extinctSpecies.includes('tiger') && extinctSpecies.includes('wolf')) {
            newMessage = "WARNING: Without Predators, Herbivore population explodes, depleting Grass.";
        }
        setMessage(newMessage);
    }, [extinctSpecies]);

    const toggleExtinction = (id: string) => {
        if (id === 'sun') return;
        setExtinctSpecies(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
    };

    const reset = () => {
        setExtinctSpecies([]);
        setMessage(null);
    };

    return (
        <Card className="w-full bg-slate-950 border-white/10 shadow-2xl overflow-hidden h-[600px] flex flex-col relative">
            <CardHeader className="bg-slate-900/50 backdrop-blur-md z-10 border-b border-white/10 shrink-0">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-white">
                            <span className="w-8 h-8 rounded-lg bg-green-900/50 flex items-center justify-center text-green-400">
                                <Leaf className="w-5 h-5" />
                            </span>
                            Interactive 3D Food Web
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Simulate ecosystem collapse in a 3D environment.
                        </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" onClick={reset} className="border-slate-700 hover:bg-slate-800 text-slate-300">
                        <RefreshCw className="w-4 h-4 mr-2" /> Reset
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="flex-1 relative p-0 overflow-hidden">
                {/* Message Overlay */}
                {message && (
                    <div className="absolute top-4 left-0 right-0 z-20 flex justify-center pointer-events-none">
                        <div className="bg-red-500/10 backdrop-blur-md border border-red-500/50 text-red-200 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg animate-bounce">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                            <span className="text-sm font-black uppercase tracking-tighter">{message}</span>
                        </div>
                    </div>
                )}

                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
                        <ambientLight intensity={0.4} />
                        <pointLight position={[10, 10, 10]} intensity={1} color="#22c55e" />
                        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />

                        {/* Energy Flows */}
                        {CONNECTIONS.map(conn => {
                            const start = INITIAL_SPECIES.find(s => s.id === conn.from);
                            const end = INITIAL_SPECIES.find(s => s.id === conn.to);
                            if (!start || !end) return null;
                            const isBroken = extinctSpecies.includes(conn.from) || extinctSpecies.includes(conn.to);
                            return (
                                <EnergyFlow
                                    key={`${conn.from}-${conn.to}`}
                                    from={[start.x / 10 - 5, -start.y / 10 + 5, 0]}
                                    to={[end.x / 10 - 5, -end.y / 10 + 5, 0]}
                                    isBroken={isBroken}
                                    dashed={conn.dashed}
                                />
                            );
                        })}

                        {/* Species Nodes */}
                        {INITIAL_SPECIES.map(species => (
                            <TrophicNode
                                key={species.id}
                                species={species}
                                isExtinct={extinctSpecies.includes(species.id)}
                                onClick={() => toggleExtinction(species.id)}
                            />
                        ))}

                        <OrbitControls enableZoom={false} enablePan={false} />
                    </Canvas>
                </div>
            </CardContent>
        </Card>
    );
}

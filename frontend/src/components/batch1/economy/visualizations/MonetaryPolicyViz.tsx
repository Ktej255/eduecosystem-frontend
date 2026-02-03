"use client";

import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, RefreshCcw } from 'lucide-react';

function ScaleArm({ rotation }: { rotation: number }) {
    const ref = useRef<THREE.Group>(null);
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, rotation, 0.1);
        }
    });

    return (
        <group ref={ref} position={[0, 2, 0]}>
            {/* The Beam */}
            <mesh>
                <boxGeometry args={[6, 0.2, 0.5]} />
                <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Left Pan (Stability) */}
            <group position={[-3, -1.5, 0]}>
                <line>
                    <bufferGeometry />
                    <lineBasicMaterial color="#94a3b8" />
                </line>
                {/* Visual String */}
                <mesh position={[0, 1, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 2]} />
                    <meshBasicMaterial color="#94a3b8" />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[1, 0.1, 0.1, 32]} />
                    <meshStandardMaterial color="#3b82f6" transparent opacity={0.8} />
                </mesh>
                <Text position={[0, 0.5, 0]} fontSize={0.35} color="white">
                    PRICE STABILITY
                </Text>
            </group>

            {/* Right Pan (Growth) */}
            <group position={[3, -1.5, 0]}>
                <mesh position={[0, 1, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 2]} />
                    <meshBasicMaterial color="#94a3b8" />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[1, 0.1, 0.1, 32]} />
                    <meshStandardMaterial color="#10b981" transparent opacity={0.8} />
                </mesh>
                <Text position={[0, 0.5, 0]} fontSize={0.35} color="white">
                    GDP GROWTH
                </Text>
            </group>
        </group>
    );
}

function Base() {
    return (
        <group position={[0, -2, 0]}>
            <mesh position={[0, 2, 0]}>
                <cylinderGeometry args={[0.2, 0.4, 4]} />
                <MeshTransmissionMaterial color="#cbd5e1" roughness={0.1} />
            </mesh>
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[2, 2.2, 0.2]} />
                <meshStandardMaterial color="#1e293b" />
            </mesh>
        </group>
    );
}

export default function MonetaryPolicyViz() {
    const [repoRate, setRepoRate] = useState(6.5);

    // Logic Fix:
    // Left Pan: PRICE STABILITY. Right Pan: GDP GROWTH.
    // High Repo (Tight) -> Prioritizes Stability (Left Heavy/Down).
    // Low Repo (Loose) -> Prioritizes Growth (Right Heavy/Down).

    // Rotation Z Positive (CCW) => Left Pan Down.
    // So High Repo should be Positive.
    const rotation = (repoRate - 6.5) * 0.25;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
            {/* Controls */}
            <Card className="p-6 flex flex-col justify-center space-y-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <div>
                    <h3 className="text-lg font-bold flex items-center gap-2 mb-1">
                        <RefreshCcw className="w-5 h-5 text-indigo-500" />
                        RBI Control Tower
                    </h3>
                    <p className="text-xs text-slate-500">Adjust Repo Rate to balance the economy.</p>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Repo Rate</span>
                        <span className="text-2xl font-black text-indigo-600">{repoRate}%</span>
                    </div>
                    <Slider
                        value={[repoRate]}
                        min={3.5}
                        max={9.5}
                        step={0.25}
                        onValueChange={(vals) => setRepoRate(vals[0])}
                        className="py-4"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                        <span>Dovish (Growth)</span>
                        <span>Hawkish (Stability)</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase text-slate-500">Projected Impact</h4>
                    <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800">
                        <span className="text-xs font-bold text-red-700 dark:text-red-400">Inflation</span>
                        {repoRate < 6.0 ? (
                            <div className="flex items-center gap-1 text-red-600 font-bold text-sm">
                                <TrendingUp className="w-4 h-4" /> High
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                                <TrendingDown className="w-4 h-4" /> Controlled
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
                        <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">GDP Growth</span>
                        {repoRate < 6.0 ? (
                            <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                                <TrendingUp className="w-4 h-4" /> Boosted
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 text-amber-600 font-bold text-sm">
                                <TrendingDown className="w-4 h-4" /> Slowing
                            </div>
                        )}
                    </div>
                </div>
            </Card>

            {/* 3D Visualization */}
            <Card className="lg:col-span-2 bg-slate-950 border-0 overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 text-right">
                    <Badge variant="outline" className="text-white border-white/20 bg-black/50 backdrop-blur-md">
                        Policy Stance: {repoRate < 6 ? "ACCOMMODATIVE" : repoRate > 7 ? "TIGHT" : "NEUTRAL"}
                    </Badge>
                </div>
                <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <ScaleArm rotation={rotation} />
                    <Base />
                    <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2} />
                </Canvas>
            </Card>
        </div>
    );
}

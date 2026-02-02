"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Play, Pause, ThermometerSun, AlertTriangle, Calendar, TrendingUp, Globe as GlobeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Html, MeshTransmissionMaterial, Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// --- Data Simulation ---
// Global Temp Anomaly (Baseline 1951-1980)
// Simplified projections for visualization
const getTempAnomaly = (year: number, scenario: 'bau' | 'paris') => {
    if (year < 2024) {
        // Historical (Approx)
        // 1880: -0.2, 2023: +1.2
        const t = (year - 1880) / (2023 - 1880);
        return -0.2 + (t * 1.4);
    } else {
        // Future
        const t = (year - 2024) / (2100 - 2024);
        if (scenario === 'bau') {
            // +4.5C by 2100
            return 1.2 + (t * 3.3);
        } else {
            // +2.0C by 2100 (Paris Goal ish)
            return 1.2 + (t * 0.8);
        }
    }
};

const getColorForTemp = (temp: number) => {
    // Blue for negative/low, Red/Black for high
    if (temp < 0) return "#3b82f6"; // Blue
    if (temp < 1.5) return "#fb923c"; // Orange
    if (temp < 3) return "#ef4444"; // Red
    return "#1e1b4b"; // Deep Indigo/Black (Burnt)
};

function Atmosphere({ temp, scale, opacity, color }: { temp: number, scale: number, opacity: number, color: string }) {
    return (
        <mesh scale={[scale, scale, scale]}>
            <sphereGeometry args={[2, 64, 64]} />
            <meshPhongMaterial
                color={color}
                transparent
                opacity={opacity}
                side={THREE.BackSide}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
}

function TemperatureSmoke({ temp }: { temp: number }) {
    const pointsRef = useRef<THREE.Points>(null!);
    const particleCount = 200;
    const isActive = temp > 2.0;

    const [positions, sizes] = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        const s = new Float32Array(particleCount);
        for (let i = 0; i < particleCount; i++) {
            const r = 2.1 + Math.random() * 0.5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
            s[i] = Math.random();
        }
        return [pos, s];
    }, []);

    useFrame((state) => {
        if (!pointsRef.current || !isActive) return;
        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3 + 1] += 0.005; // Rise up
            if (positions[i * 3 + 1] > 3) positions[i * 3 + 1] = -1.5; // Reset
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        pointsRef.current.rotation.y += 0.001;
    });

    if (!isActive) return null;

    return (
        <Points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <PointMaterial
                transparent
                color="#4b5563"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.3}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

function HolographicGlobe({ temp }: { temp: number }) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const glowColor = getColorForTemp(temp);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
            const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * (temp > 1.5 ? 0.02 : 0.005);
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group>
            {/* Core Earth with Transmission */}
            <mesh ref={meshRef}>
                <sphereGeometry args={[2, 64, 64]} />
                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    thickness={0.5}
                    chromaticAberration={0.02}
                    anisotropy={0.1}
                    distortion={0.1}
                    distortionScale={0.1}
                    temporalDistortion={0.1}
                    color="#0a1a1f"
                    emissive={glowColor}
                    emissiveIntensity={Math.max(0.2, temp * 0.8)}
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Multi-layered Atmosphere */}
            <Atmosphere temp={temp} scale={1.05} opacity={0.1} color={glowColor} />
            <Atmosphere temp={temp} scale={1.15} opacity={0.05} color={glowColor} />
            <Atmosphere temp={temp} scale={1.25} opacity={0.02} color={glowColor} />

            {/* Grid Pattern */}
            <mesh scale={[1.01, 1.01, 1.01]}>
                <sphereGeometry args={[2, 64, 64]} />
                <meshStandardMaterial
                    color="#ffffff"
                    wireframe
                    transparent
                    opacity={0.03}
                />
            </mesh>

            <TemperatureSmoke temp={temp} />
        </group>
    );
}

export default function ClimateTimeMachine() {
    const [year, setYear] = useState(2024);
    const [isPlaying, setIsPlaying] = useState(false);
    const [scenario, setScenario] = useState<'bau' | 'paris'>('bau');

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setYear(prev => {
                    if (prev >= 2100) {
                        setIsPlaying(false);
                        return 2100;
                    }
                    return prev + 1;
                });
            }, 50);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const tempAnomaly = getTempAnomaly(year, scenario);
    const intensityColor = getColorForTemp(tempAnomaly);

    return (
        <Card className="w-full bg-slate-950 border-slate-800 shadow-xl overflow-hidden flex flex-col">
            <CardHeader className="bg-slate-900/50 backdrop-blur-sm z-10 border-b border-white/10 shrink-0">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-white">
                            <span className="w-8 h-8 rounded-lg bg-orange-900/50 flex items-center justify-center text-orange-400">
                                <ThermometerSun className="w-5 h-5" />
                            </span>
                            Climate Time Machine
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Visualize Global Warming (1880 - 2100)
                        </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-slate-900 border border-slate-700 rounded-lg p-1 flex">
                            <button
                                onClick={() => setScenario('bau')}
                                className={`px-3 py-1 text-xs font-bold rounded transition-all ${scenario === 'bau' ? 'bg-red-500/20 text-red-500' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                Business as Usual
                            </button>
                            <button
                                onClick={() => setScenario('paris')}
                                className={`px-3 py-1 text-xs font-bold rounded transition-all ${scenario === 'paris' ? 'bg-green-500/20 text-green-500' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                Paris Agreement
                            </button>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex-1 p-0 relative min-h-[400px]">
                {/* 3D Visual Layer */}
                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                        <ambientLight intensity={0.4} />
                        <pointLight position={[10, 10, 10]} intensity={1} color={getColorForTemp(tempAnomaly)} />
                        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

                        <HolographicGlobe temp={tempAnomaly} />

                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            autoRotate
                            autoRotateSpeed={0.5}
                        />
                    </Canvas>
                </div>

                {/* Legend Overlay */}
                <div className="absolute bottom-24 left-8 z-20 pointer-events-none">
                    <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500" />
                            <span className="text-[10px] text-white/70">1880 Baseline</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-orange-400" />
                            <span className="text-[10px] text-white/70">Paris Goal (+1.5C)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-600" />
                            <span className="text-[10px] text-white/70">Business as Usual (+4C)</span>
                        </div>
                    </div>
                </div>

                {/* Data Overlay */}
                <div className="absolute top-8 left-8 z-20">
                    <span className="text-6xl font-black text-white/10 tracking-tighter select-none">
                        {year}
                    </span>
                </div>

                <div className="absolute top-8 right-8 z-20 text-right">
                    <div className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Delta T</div>
                    <div className={`text-4xl font-bold ${tempAnomaly > 1.5 ? 'text-red-500' : 'text-blue-400'}`}>
                        {tempAnomaly > 0 ? '+' : ''}{tempAnomaly.toFixed(1)}°C
                    </div>
                    {year > 2030 && tempAnomaly > 1.5 && (
                        <Badge variant="destructive" className="mt-2 animate-pulse">
                            <AlertTriangle className="w-3 h-3 mr-1" /> Critical Threshold
                        </Badge>
                    )}
                </div>

                {/* Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="secondary"
                            size="icon"
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="shrink-0 h-10 w-10 text-black border border-white/20"
                        >
                            {isPlaying ? <Pause className="fill-current w-4 h-4" /> : <Play className="fill-current w-4 h-4" />}
                        </Button>
                        <div className="flex-1 space-y-2">
                            <Slider
                                value={[year]}
                                min={1880}
                                max={2100}
                                step={1}
                                onValueChange={(val) => {
                                    setYear(val[0]);
                                    setIsPlaying(false);
                                }}
                                className="cursor-pointer"
                            />
                            <div className="flex justify-between text-[10px] text-slate-500 font-mono uppercase">
                                <span>1880 (Pre-Ind)</span>
                                <span className={year === 2024 ? 'text-white font-bold' : ''}>2024 (Today)</span>
                                <span>2100 (Future)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

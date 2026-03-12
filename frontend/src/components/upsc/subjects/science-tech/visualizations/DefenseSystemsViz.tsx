"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html, Float } from "@react-three/drei";
import * as THREE from "three";
import { Shield, Target, Zap, Info } from "lucide-react";

// Helper to convert lat/lng to 3D position
function latLngToVector3(lat: number, lng: number, radius: number = 1.6): THREE.Vector3 {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

function BallisticPath({
    start,
    end,
    color,
    speed = 0.5,
    height = 0.5
}: {
    start: [number, number],
    end: [number, number],
    color: string,
    speed?: number,
    height?: number
}) {
    const missileRef = useRef<THREE.Mesh>(null);
    const progress = useRef(0);
    const materialRef = useRef<THREE.LineBasicMaterial>(null);

    const { curve, midPoint } = useMemo(() => {
        const p1 = latLngToVector3(start[0], start[1], 1.5);
        const p2 = latLngToVector3(end[0], end[1], 1.5);

        // Calculate middle point with altitude
        const midLat = (start[0] + end[0]) / 2;
        const midLng = (start[1] + end[1]) / 2;
        const mid = latLngToVector3(midLat, midLng, 1.5 + height);

        const curve = new THREE.CatmullRomCurve3([p1, mid, p2]);
        return { curve, midPoint: mid };
    }, [start, end, height]);

    useFrame((state, delta) => {
        // Missile animation
        if (missileRef.current) {
            progress.current += delta * speed * 0.2;
            if (progress.current > 1) progress.current = 0;

            const pos = curve.getPoint(progress.current);
            missileRef.current.position.copy(pos);

            // Orient missile towards movement
            const nextPos = curve.getPoint(Math.min(progress.current + 0.01, 1));
            missileRef.current.lookAt(nextPos);
        }

        // Path pulse
        if (materialRef.current) {
            materialRef.current.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 3) * 0.15;
        }
    });

    const points = useMemo(() => curve.getPoints(50), [curve]);

    return (
        <group>
            {/* Trajectory Line */}
            <line>
                <bufferGeometry attach="geometry">
                    <bufferAttribute
                        attach="attributes-position"
                        count={points.length}
                        array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
                        itemSize={3}
                        args={[new Float32Array(points.flatMap(p => [p.x, p.y, p.z])), 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    ref={materialRef}
                    attach="material"
                    color={color}
                    transparent
                    linewidth={2}
                    blending={THREE.AdditiveBlending}
                />
            </line>

            {/* Pulsing Target Zone */}
            <mesh position={latLngToVector3(end[0], end[1], 1.51)} rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.04, 0.08, 32]} />
                <meshBasicMaterial color="#ff4444" transparent opacity={0.6} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={latLngToVector3(end[0], end[1], 1.51)} rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.02, 0.1, 32]} />
                <meshBasicMaterial color="#ff4444" transparent opacity={0.2} side={THREE.DoubleSide} />
            </mesh>

            {/* Missile */}
            <mesh ref={missileRef}>
                <coneGeometry args={[0.03, 0.1, 8]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
            </mesh>
        </group>
    );
}

function DefenseScene() {
    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#4f46e5" />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.2} />

            {/* Holographic Earth Base */}
            <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshPhongMaterial
                    color="#0a1a1f"
                    emissive="#001a1a"
                    emissiveIntensity={0.8}
                    shininess={100}
                    transparent
                    opacity={0.9}
                />
            </mesh>
            {/* Atmosphere Rim Light */}
            <mesh scale={[1.05, 1.05, 1.05]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#0ea5e9"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </mesh>
            {/* Grid Mask */}
            <mesh scale={[1.01, 1.01, 1.01]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#00e5ff"
                    transparent
                    opacity={0.05}
                    wireframe
                />
            </mesh>

            {/* Defense Trajectories (Simulating DRDO/ISRO systems) */}
            {/* Agni Series Simulation (Long Range) */}
            <BallisticPath start={[21.0, 86.8]} end={[0, 90]} color="#fbbf24" speed={0.4} height={0.8} />

            {/* Short Range Interceptor Simulation */}
            <BallisticPath start={[17.38, 78.48]} end={[19.0, 80.0]} color="#38bdf8" speed={0.8} height={0.3} />

            <OrbitControls enablePan={false} minDistance={2} maxDistance={6} />
        </>
    );
}

export default function DefenseSystemsViz() {
    const [activeTab, setActiveTab] = useState<'trajectories' | 'interceptors'>('trajectories');

    return (
        <div className="w-full h-[600px] bg-slate-950 relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
            {/* 3D Canvas */}
            <Canvas camera={{ position: [3, 2, 3], fov: 45 }}>
                <DefenseScene />
            </Canvas>

            {/* Left Overlay Menu */}
            <div className="absolute top-4 left-4 z-10 w-64 space-y-4">
                <div className="bg-slate-900/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-emerald-400" />
                        Defense Lab
                    </h2>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                        Visualizing ballistic missile detection and interceptor flight paths. Models based on DRDO's Ballistic Missile Defense (BMD) shield logic.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => setActiveTab('trajectories')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${activeTab === 'trajectories' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-900/60 text-muted-foreground hover:bg-slate-800'
                            }`}
                    >
                        <Zap className="w-3 h-3" />
                        Launch Trajectories
                    </button>
                    <button
                        onClick={() => setActiveTab('interceptors')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${activeTab === 'interceptors' ? 'bg-cyan-600 text-white shadow-lg' : 'bg-slate-900/60 text-muted-foreground hover:bg-slate-800'
                            }`}
                    >
                        <Shield className="w-3 h-3" />
                        Interceptor Shield
                    </button>
                </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 z-10 flex gap-4">
                <div className="flex items-center gap-2 text-[10px] text-white bg-black/40 px-3 py-1 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-amber-400" /> Ballistic Path
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white bg-black/40 px-3 py-1 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-sky-400" /> Interceptor
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white bg-black/40 px-3 py-1 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Impact Zone
                </div>
            </div>

            {/* Info Badge */}
            <div className="absolute top-4 right-4 z-10">
                <div className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    SYSTEMS ACTIVE
                </div>
            </div>
        </div>
    );
}

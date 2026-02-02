"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html, Text } from "@react-three/drei";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, Info } from "lucide-react";
import * as THREE from "three";

function Earth() {
    return (
        <group>
            {/* Holographic Base */}
            <mesh>
                <sphereGeometry args={[1, 64, 64]} />
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
            <mesh scale={[1.08, 1.08, 1.08]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#00bcd4"
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                />
            </mesh>
            {/* Data Grid Mask */}
            <mesh scale={[1.02, 1.02, 1.02]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#00e5ff"
                    transparent
                    opacity={0.05}
                    wireframe
                />
            </mesh>
        </group>
    );
}

function OrbitPath({ radius, color, label }: { radius: number, color: string, label: string }) {
    return (
        <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh>
                <ringGeometry args={[radius - 0.01, radius + 0.01, 128]} />
                <meshBasicMaterial
                    color={color}
                    opacity={0.4}
                    transparent
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
            {/* Glow Outer Ring */}
            <mesh>
                <ringGeometry args={[radius - 0.03, radius + 0.03, 128]} />
                <meshBasicMaterial
                    color={color}
                    opacity={0.1}
                    transparent
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
            <Html position={[radius, 0, 0]}>
                <div className="text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-black/80 text-white whitespace-nowrap border border-white/20 uppercase tracking-tighter">
                    {label}
                </div>
            </Html>
        </group>
    );
}

function Satellite({ radius, speed, color, size = 0.1 }: { radius: number, speed: number, color: string, size?: number }) {
    const ref = useRef<THREE.Group>(null);
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.y = clock.getElapsedTime() * speed;
        }
    });

    return (
        <group ref={ref}>
            <mesh position={[radius, 0, 0]}>
                <boxGeometry args={[size, size, size]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#4f46e5" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Earth />

            {/* LEO: Low Earth Orbit (~200-2000km) - Scaled for viz */}
            <OrbitPath radius={1.4} color="#06b6d4" label="LEO (ISS/Spy)" />
            <Satellite radius={1.4} speed={0.8} color="#06b6d4" />
            <Satellite radius={1.4} speed={0.9} color="#06b6d4" />

            {/* MEO: Medium Earth Orbit (GPS) */}
            <OrbitPath radius={2.2} color="#8b5cf6" label="MEO (GPS/NavIC)" />
            <Satellite radius={2.2} speed={0.4} color="#8b5cf6" />

            {/* GEO: Geostationary Orbit (~36000km) */}
            <OrbitPath radius={3.5} color="#f59e0b" label="GEO (Comm/TV)" />
            <Satellite radius={3.5} speed={0.15} color="#f59e0b" size={0.15} />

            <OrbitControls enableZoom={true} minDistance={2} maxDistance={8} autoRotate={false} />
        </>
    );
}

export default function SpaceOrbitViz() {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <Card className="w-full bg-slate-950 border-slate-800 shadow-sm overflow-hidden h-[400px] relative">
            <CardHeader className="absolute top-0 left-0 right-0 z-10 border-b border-white/10 bg-slate-900/50 backdrop-blur-sm pointer-events-none">
                <div className="flex items-center justify-between pointer-events-auto">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-white text-base">
                            <span className="w-6 h-6 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400">
                                <Rocket className="w-3 h-3" />
                            </span>
                            Orbital Mechanics
                        </CardTitle>
                        <CardDescription className="text-slate-400 text-xs">
                            LEO vs MEO vs GEO Regimes
                        </CardDescription>
                    </div>
                    <button
                        onClick={() => setShowInfo(!showInfo)}
                        className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
                    >
                        <Info className="w-4 h-4" />
                    </button>
                </div>
            </CardHeader>

            <CardContent className="h-full p-0">
                <Canvas camera={{ position: [3, 3, 5], fov: 45 }}>
                    <Scene />
                </Canvas>

                {showInfo && (
                    <div className="absolute inset-x-4 bottom-4 z-20 bg-slate-900/90 border border-slate-700 p-4 rounded-xl text-sm text-slate-300 animate-in slide-in-from-bottom-2">
                        <h4 className="font-bold text-white mb-2">Key Exam Points:</h4>
                        <ul className="space-y-1 text-xs list-disc pl-4">
                            <li><strong className="text-cyan-400">LEO:</strong> Remote Sensing, ISS. Fast period (90 mins).</li>
                            <li><strong className="text-purple-400">MEO:</strong> Navigation (GPS, Galileo). ~12hr period.</li>
                            <li><strong className="text-amber-400">GEO:</strong> Telecomm. Matches Earth's rotation (24hrs). Stationary from ground.</li>
                        </ul>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

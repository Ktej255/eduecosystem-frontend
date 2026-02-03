"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html, Text } from "@react-three/drei";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, Info } from "lucide-react";
import * as THREE from "three";

// Enhanced Earth Component with Shader Material placeholder
function Earth() {
    return (
        <group>
            {/* Core Earth Sphere */}
            <mesh>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#1e3a8a" // Ocean Blue
                    roughness={0.6}
                    metalness={0.1}
                />
            </mesh>
            {/* Continents (Procedural Noise Facade - Simplified for Viz) */}
            <mesh scale={[1.001, 1.001, 1.001]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#15803d" // Land Green
                    transparent
                    opacity={0.3}
                    roughness={0.8}
                />
            </mesh>
            {/* Atmosphere Halo */}
            <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#38bdf8"
                    transparent
                    opacity={0.2}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
            {/* Clouds */}
            <mesh scale={[1.01, 1.01, 1.01]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.4}
                    alphaMap={null!} // Placeholder for future texture
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
                            <li><strong className="text-cyan-400">LEO (160-2000km):</strong> Remote Sensing (Cartosat), Spy Satellites, ISS. Period: ~90 mins. <span className="text-xs text-slate-500 block">Advantages: High resolution imaging, low latency.</span></li>
                            <li><strong className="text-purple-400">MEO (2000-35786km):</strong> Navigation (GPS, GLONASS, Galileo). Period: ~12 hrs. <span className="text-xs text-slate-500 block">Advantages: Covered larger area than LEO, fewer hops for signals.</span></li>
                            <li><strong className="text-amber-400">GEO (35,786km):</strong> Telecommunications, Weather (INSAT). Period: 24 hrs. <span className="text-xs text-slate-500 block">Advantages: Fixed position relative to ground, continuous coverage of one area.</span></li>
                        </ul>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

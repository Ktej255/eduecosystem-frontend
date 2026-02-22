"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from "three";
import { Satellite, Info } from "lucide-react";

function Earth() {
    return (
        <group>
            {/* Earth Sphere */}
            <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#1c3b72"
                    emissive="#0a1a3a"
                    emissiveIntensity={0.5}
                    roughness={0.8}
                />
            </mesh>
            {/* Atmosphere Glow */}
            <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#4f46e5"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </mesh>
        </group>
    );
}

function Orbit({ radius, color, speed, label, type }: { radius: number, color: string, speed: number, label: string, type: string }) {
    const satelliteRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (satelliteRef.current) {
            satelliteRef.current.rotation.y += speed;
        }
    });

    return (
        <group>
            {/* Orbit Path Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
                <meshBasicMaterial color={color} opacity={0.3} transparent side={THREE.DoubleSide} />
            </mesh>

            {/* Rotating Satellite Group */}
            <group ref={satelliteRef}>
                <mesh position={[radius, 0, 0]}>
                    <boxGeometry args={[0.1, 0.1, 0.1]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
                </mesh>
                <Html position={[radius, 0.2, 0]} distanceFactor={8}>
                    <div className="bg-black/80 text-white text-[10px] px-2 py-1 rounded border border-white/20 whitespace-nowrap backdrop-blur-md">
                        <strong>{label}</strong>
                        <div className="text-[8px] text-muted-foreground">{type}</div>
                    </div>
                </Html>
            </group>
        </group>
    );
}

function OrbitScene() {
    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#fbbf24" />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.2} />

            <Earth />

            {/* LEO (Low Earth Orbit) */}
            <Orbit radius={2.0} color="#38bdf8" speed={0.01} label="ISS Station" type="LEO (400km)" />

            {/* MEO (Medium Earth Orbit - GPS) */}
            <Orbit radius={3.2} color="#4ade80" speed={0.005} label="GPS Satellites" type="MEO (20,000km)" />

            {/* GEO (Geostationary Orbit) */}
            <Orbit radius={5.5} color="#fbbf24" speed={0.001} label="CommSats" type="GEO (36,000km)" />

            <OrbitControls minDistance={4} maxDistance={10} enablePan={false} />
        </>
    );
}

export default function OrbitSimulation() {
    return (
        <div className="w-full h-[600px] bg-slate-950 relative rounded-xl overflow-hidden border border-slate-800">
            <Canvas camera={{ position: [5, 3, 5], fov: 45 }}>
                <OrbitScene />
            </Canvas>

            {/* Overlay Info */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Satellite className="w-5 h-5 text-indigo-400" />
                    Orbital Mechanics
                </h2>
                <p className="text-muted-foreground text-sm max-w-xs mt-1">
                    Comparing LEO, MEO, and GEO altitudes and velocities. Note how lower orbits require faster speeds.
                </p>
            </div>

            <div className="absolute bottom-4 left-4 z-10 grid grid-cols-3 gap-2">
                <div className="bg-slate-900/80 p-2 rounded border border-slate-700 text-center">
                    <div className="text-xs text-sky-400 font-bold">LEO</div>
                    <div className="text-[10px] text-muted-foreground">Low Earth</div>
                </div>
                <div className="bg-slate-900/80 p-2 rounded border border-slate-700 text-center">
                    <div className="text-xs text-green-400 font-bold">MEO</div>
                    <div className="text-[10px] text-muted-foreground">Medium Earth</div>
                </div>
                <div className="bg-slate-900/80 p-2 rounded border border-slate-700 text-center">
                    <div className="text-xs text-amber-400 font-bold">GEO</div>
                    <div className="text-[10px] text-muted-foreground">Geostationary</div>
                </div>
            </div>
        </div>
    );
}

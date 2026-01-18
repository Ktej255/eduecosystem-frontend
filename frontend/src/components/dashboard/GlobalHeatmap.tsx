"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
    const globeRef = useRef<THREE.Mesh>(null);

    // Create random activity points
    const points = useMemo(() => {
        const pts = [];
        for (let i = 0; i < 40; i++) {
            const phi = Math.acos(-1 + (2 * i) / 40);
            const theta = Math.sqrt(40 * Math.PI) * phi;
            pts.push({
                position: new THREE.Vector3().setFromSphericalCoords(2.05, phi, theta),
                size: Math.random() * 0.05 + 0.02,
                opacity: Math.random() * 0.5 + 0.5
            });
        }
        return pts;
    }, []);

    useFrame((state) => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.002;
        }
    });

    return (
        <group>
            <mesh ref={globeRef}>
                <sphereGeometry args={[2, 64, 64]} />
                <meshStandardMaterial
                    color="#0a192f"
                    emissive="#001a2c"
                    emissiveIntensity={0.5}
                    roughness={0.7}
                    metalness={0.3}
                />

                {/* Points of activity */}
                {points.map((pt, i) => (
                    <mesh key={i} position={pt.position}>
                        <sphereGeometry args={[pt.size, 8, 8]} />
                        <meshBasicMaterial color="#22d3ee" transparent opacity={pt.opacity} />
                    </mesh>
                ))}
            </mesh>

            {/* Atmospheric glow */}
            <Sphere args={[2.2, 32, 32]}>
                <meshBasicMaterial color="#22d3ee" transparent opacity={0.05} side={THREE.BackSide} />
            </Sphere>
        </group>
    );
}

export function GlobalHeatmap() {
    return (
        <div className="w-full h-[400px] bg-black rounded-xl border border-gray-800 relative overflow-hidden group">
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    Global Presence
                </h3>
                <p className="text-[10px] text-gray-500">Live activity from the Eduecosystem</p>
            </div>

            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
                <Globe />
            </Canvas>

            <div className="absolute bottom-4 right-4 z-10 text-right pointer-events-none">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Active Seekers</p>
                <p className="text-2xl font-black text-white">14,208</p>
            </div>
        </div>
    );
}

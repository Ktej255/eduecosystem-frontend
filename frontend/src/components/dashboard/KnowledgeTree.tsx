"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, Stars, Environment } from "@react-three/drei";
import * as THREE from "three";

interface BranchProps {
    position: [number, number, number];
    rotation: [number, number, number];
    length: number;
    thickness: number;
    depth: number;
    maxDepth: number;
}

function Branch({ position, rotation, length, thickness, depth, maxDepth }: BranchProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    // Calculate next branches
    const nextBranches = useMemo(() => {
        if (depth >= maxDepth) return [];

        const count = depth === 0 ? 3 : 2; // More branches at the base
        const branches = [];

        for (let i = 0; i < count; i++) {
            const nextRotation: [number, number, number] = [
                rotation[0] + (Math.random() - 0.5) * 0.8,
                rotation[1] + (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5,
                rotation[2] + (Math.random() - 0.5) * 0.8
            ];

            branches.push({
                position: [0, length, 0] as [number, number, number],
                rotation: nextRotation,
                length: length * 0.75,
                thickness: thickness * 0.7,
                depth: depth + 1
            });
        }
        return branches;
    }, [depth, maxDepth, length, thickness, rotation]);

    return (
        <group position={position} rotation={rotation}>
            <mesh ref={meshRef}>
                <cylinderGeometry args={[thickness * 0.7, thickness, length, 8]} />
                <meshStandardMaterial
                    color={new THREE.Color().setHSL(0.1 + depth * 0.05, 0.5, 0.4 - depth * 0.05)}
                    roughness={0.8}
                />
            </mesh>

            {/* Leaves/Fruits if at the end */}
            {depth === maxDepth - 1 && (
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <mesh position={[0, length, 0]}>
                        <sphereGeometry args={[0.15, 16, 16]} />
                        <meshStandardMaterial
                            color="#00ffff"
                            emissive="#00ffff"
                            emissiveIntensity={2}
                            toneMapped={false}
                        />
                    </mesh>
                </Float>
            )}

            {nextBranches.map((props, i) => (
                <Branch key={i} {...props} maxDepth={maxDepth} />
            ))}
        </group>
    );
}

export function KnowledgeTree({ progress = 0.5 }: { progress?: number }) {
    // Map progress (0-1) to tree complexity (3-7 depth)
    const maxDepth = Math.max(3, Math.min(7, Math.floor(progress * 7 + 2)));

    return (
        <div className="w-full h-[400px] rounded-xl overflow-hidden bg-gray-950 relative border border-gray-800 shadow-2xl">
            <div className="absolute top-4 left-4 z-10">
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Sadhana Tree</h3>
                <p className="text-xs text-muted-foreground">Growth based on your progress</p>
            </div>

            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 5, 12]} fov={50} />
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 4}
                />

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#4ade80" />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#22d3ee" />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <group position={[0, -4, 0]}>
                    <Branch
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        length={2.5}
                        thickness={0.3}
                        depth={0}
                        maxDepth={maxDepth}
                    />

                    {/* Ground reflection plate */}
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
                        <circleGeometry args={[5, 32]} />
                        <meshStandardMaterial color="#050505" roughness={0.1} metalness={0.8} />
                    </mesh>
                </group>

                <Environment preset="night" />
            </Canvas>
        </div>
    );
}

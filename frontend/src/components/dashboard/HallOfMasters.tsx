"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Float, MeshDistortMaterial, Backdrop, Center } from "@react-three/drei";
import * as THREE from "three";

interface MasterProps {
    name: string;
    streak: number;
    position: [number, number, number];
    color: string;
}

function MasterStatue({ name, streak, position, color }: MasterProps) {
    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[0, 1.5, 0]}>
                    <octahedronGeometry args={[1, 0]} />
                    <MeshDistortMaterial
                        color={color}
                        speed={2}
                        distort={0.4}
                        radius={1}
                        emissive={color}
                        emissiveIntensity={0.5}
                    />
                </mesh>

                <Center position={[0, -0.5, 0]}>
                    <Text
                        font="/fonts/Inter-Bold.woff" // Fallback to default if not found
                        fontSize={0.4}
                        color="white"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {name}
                    </Text>
                </Center>

                <Center position={[0, -1, 0]}>
                    <Text
                        fontSize={0.2}
                        color={color}
                        anchorX="center"
                        anchorY="middle"
                    >
                        {streak} Day Streak
                    </Text>
                </Center>
            </Float>

            {/* Pedestal */}
            <mesh position={[0, -1.8, 0]}>
                <boxGeometry args={[2, 0.2, 2]} />
                <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
            </mesh>
        </group>
    );
}

const MOCK_MASTERS = [
    { name: "K Tej", streak: 45, color: "#22d3ee" },
    { name: "Sarit", streak: 38, color: "#4ade80" },
    { name: "Aditya", streak: 30, color: "#fbbf24" },
    { name: "Priya", streak: 25, color: "#f472b6" },
    { name: "Rahul", streak: 20, color: "#a78bfa" },
];

export function HallOfMasters() {
    return (
        <div className="w-full h-screen bg-black">
            <Canvas shadows camera={{ position: [0, 5, 15], fov: 45 }}>
                <fog attach="fog" args={["#000", 10, 25]} />
                <ambientLight intensity={0.4} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                <group position={[0, -1, 0]}>
                    {MOCK_MASTERS.map((master, i) => {
                        const angle = (i / MOCK_MASTERS.length) * Math.PI * 2;
                        const radius = 6;
                        return (
                            <MasterStatue
                                key={master.name}
                                name={master.name}
                                streak={master.streak}
                                color={master.color}
                                position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
                            />
                        );
                    })}

                    {/* Central Flame / Pillar */}
                    <Float speed={5} rotationIntensity={2}>
                        <mesh position={[0, 2, 0]}>
                            <icosahedronGeometry args={[1.5, 15]} />
                            <MeshDistortMaterial
                                color="#ff4400"
                                speed={5}
                                distort={0.6}
                                emissive="#ff4400"
                                emissiveIntensity={2}
                                toneMapped={false}
                            />
                        </mesh>
                    </Float>

                    <Backdrop
                        receiveShadow
                        floor={20} // Size of the floor
                        segments={20} // Number of segments
                        position={[0, -2, -5]}
                    >
                        <meshStandardMaterial color="#050505" />
                    </Backdrop>
                </group>

                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.2}
                    enablePan={false}
                    maxDistance={20}
                    minDistance={10}
                    maxPolarAngle={Math.PI / 2.1}
                />
            </Canvas>

            <div className="absolute bottom-10 left-10 z-20 pointer-events-none">
                <h1 className="text-5xl font-black text-white uppercase tracking-tighter opacity-20">Hall of Masters</h1>
                <p className="text-gray-500 max-w-xs">The eternal sanctuary for those who conquered their Sadhana.</p>
            </div>
        </div>
    );
}

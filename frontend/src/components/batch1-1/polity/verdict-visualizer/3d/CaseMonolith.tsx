
"use client";

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';
import { LandmarkCase } from '../data/landmark-cases';
import * as THREE from 'three';

interface CaseMonolithProps {
    data: LandmarkCase;
    onClick: (data: LandmarkCase) => void;
    isSelected: boolean;
}

export default function CaseMonolith({ data, onClick, isSelected }: CaseMonolithProps) {
    const groupRef = useRef<THREE.Group>(null);
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Gentle rotation for selected or hovered state
        if (isSelected || hovered) {
            groupRef.current.rotation.y += 0.01;
        } else {
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.05);
        }

        // Bobbing motion
        if (isSelected) {
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.15 + 0.5;
        } else {
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, 0, 0.1);
        }
    });

    return (
        <group position={new THREE.Vector3(...data.position)}>
            <Float speed={isSelected ? 4 : 1} rotationIntensity={0.2} floatIntensity={0.5}>
                <group
                    ref={groupRef}
                    onClick={(e) => { e.stopPropagation(); onClick(data); }}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    {/* Main Monolith Body */}
                    <mesh position={[0, 1.5, 0]} castShadow>
                        <boxGeometry args={[0.8, 3.2, 0.8]} />
                        <meshStandardMaterial
                            color={isSelected ? '#fbbf24' : data.color}
                            emissive={isSelected ? '#fbbf24' : data.color}
                            emissiveIntensity={isSelected || hovered ? 0.8 : 0.2}
                            roughness={0.1}
                            metalness={0.8}
                        />
                    </mesh>

                    {/* Glowing Core (visible when selected) */}
                    {isSelected && (
                        <mesh position={[0, 1.5, 0]}>
                            <boxGeometry args={[0.82, 3.22, 0.82]} />
                            <MeshDistortMaterial
                                color="#fbbf24"
                                speed={5}
                                distort={0.2}
                                radius={1}
                                transparent
                                opacity={0.3}
                            />
                        </mesh>
                    )}

                    {/* Detailed Base */}
                    <group position={[0, -0.1, 0]}>
                        <mesh>
                            <boxGeometry args={[1.2, 0.2, 1.2]} />
                            <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
                        </mesh>
                        <mesh position={[0, -0.2, 0]}>
                            <boxGeometry args={[1.5, 0.2, 1.5]} />
                            <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
                        </mesh>
                    </group>

                    {/* Verdict Icon (Floating above) */}
                    <mesh position={[0, 3.5, 0]}>
                        <octahedronGeometry args={[0.25]} />
                        <meshStandardMaterial
                            color={isSelected ? "#ffffff" : data.color}
                            emissive={isSelected ? "#ffffff" : data.color}
                            emissiveIntensity={isSelected ? 2 : 0.5}
                        />
                    </mesh>
                </group>
            </Float>

            {/* Year Label */}
            <Text
                position={[0, 4.5, 0]}
                fontSize={0.6}
                font="/fonts/Inter-Bold.woff" // Assuming Inter is available or fallback
                color={isSelected ? "#fbbf24" : "white"}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.04}
                outlineColor="#020617"
            >
                {data.year}
            </Text>

            {/* Case Title */}
            <Text
                position={[0, -1, 0]}
                fontSize={0.3}
                maxWidth={3}
                color={isSelected ? "white" : "#94a3b8"}
                textAlign="center"
                anchorX="center"
                anchorY="top"
                outlineWidth={0.02}
                outlineColor="#020617"
            >
                {data.title}
            </Text>

            {/* Ground Glow */}
            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0, 1.5, 32]} />
                <meshBasicMaterial
                    color={data.color}
                    transparent
                    opacity={isSelected ? 0.3 : 0.1}
                />
            </mesh>
        </group>
    );
}

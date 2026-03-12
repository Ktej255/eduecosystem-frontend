
"use client";

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const KEYWORDS = [
    { text: "SOVEREIGN", color: "#ef4444", position: [4, 1.5, 0], desc: "Absolute Independence" },
    { text: "SOCIALIST", color: "#f97316", position: [4, 0.75, 0], desc: "Wealth Equity" },
    { text: "SECULAR", color: "#eab308", position: [4, 0, 0], desc: "State has no Religion" },
    { text: "DEMOCRATIC", color: "#22c55e", position: [4, -0.75, 0], desc: "Rule by People" },
    { text: "REPUBLIC", color: "#3b82f6", position: [4, -1.5, 0], desc: "Elected Head of State" },
];

export default function LightBeams() {
    const [hovered, setHover] = useState<string | null>(null);

    return (
        <group>
            {/* Incoming White Beam (Source -> Prism) */}
            <mesh position={[-4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 6, 8]} />
                <meshBasicMaterial color="white" transparent opacity={0.8} />
            </mesh>
            <Text position={[-6, 0.5, 0]} fontSize={0.3} color="white">
                WE THE PEOPLE
            </Text>

            {/* Refracted Beams (Prism -> Keywords) */}
            {KEYWORDS.map((k, i) => (
                <group key={i}>
                    {/* The Beam Line */}
                    <mesh position={[2, (k.position[1] / 2), 0]} rotation={[0, 0, -Math.atan(k.position[1] / 2)]}>
                        <cylinderGeometry args={[0.02, 0.05, 4.5, 8]} />
                        <meshBasicMaterial color={k.color} transparent opacity={hovered === k.text ? 1 : 0.4} />
                    </mesh>

                    {/* The Keyword Text */}
                    <group position={new THREE.Vector3(...k.position)}>
                        <Text
                            fontSize={0.5}
                            color={k.color}
                            anchorX="left"
                            anchorY="middle"
                            onPointerOver={() => setHover(k.text)}
                            onPointerOut={() => setHover(null)}
                        >
                            {k.text}
                        </Text>

                        {/* Description Tooltip (Simplified) */}
                        {hovered === k.text && (
                            <Text
                                position={[0, -0.4, 0]}
                                fontSize={0.2}
                                color="white"
                                anchorX="left"
                            >
                                {k.desc}
                            </Text>
                        )}
                    </group>
                </group>
            ))}
        </group>
    );
}

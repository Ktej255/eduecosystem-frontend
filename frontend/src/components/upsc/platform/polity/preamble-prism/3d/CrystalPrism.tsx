
"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function CrystalPrism() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        // Slow, majestic rotation
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
        meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    });

    return (
        <group>
            {/* The Glass Prism */}
            <mesh ref={meshRef} rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0]}>
                <cylinderGeometry args={[2, 2, 4, 3]} />
                <MeshTransmissionMaterial
                    backside
                    samples={16}
                    resolution={512}
                    thickness={0.5}
                    roughness={0.1}
                    anisotropy={1}
                    chromaticAberration={1}
                    color="#ffffff"
                />
            </mesh>

            {/* Inner Glow / Core */}
            <pointLight position={[0, 0, 0]} intensity={2} color="white" distance={5} />
        </group>
    );
}

"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FlowArrowsProps {
    start: [number, number, number];
    end: [number, number, number];
    color?: string;
    speed?: number;
    particleCount?: number;
    width?: number;
}

// Convert lat/lng to 3D position on a sphere
function latLngToVector3(lat: number, lng: number, radius: number = 1.5): THREE.Vector3 {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

export default function FlowArrows({
    start,
    end,
    color = "#4FC3F7",
    speed = 0.3,
    particleCount = 50,
    width = 0.02
}: FlowArrowsProps) {
    const particlesRef = useRef<THREE.Points>(null);
    const lineRef = useRef<THREE.Line>(null);

    // Convert start and end into a 3D curve
    const { curve, positions } = useMemo(() => {
        const points = [
            new THREE.Vector3(...start),
            new THREE.Vector3(...end)
        ];
        const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);

        // Generate curve points for the river line
        const curvePoints = curve.getPoints(100);
        const positions = new Float32Array(curvePoints.length * 3);
        curvePoints.forEach((point, i) => {
            positions[i * 3] = point.x;
            positions[i * 3 + 1] = point.y;
            positions[i * 3 + 2] = point.z;
        });

        return { curve, positions };
    }, [start, end]);

    // Initialize particle positions
    const particlePositions = useMemo(() => {
        const arr = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const t = Math.random();
            const point = curve.getPoint(t);
            arr[i * 3] = point.x;
            arr[i * 3 + 1] = point.y;
            arr[i * 3 + 2] = point.z;
        }
        return arr;
    }, [curve, particleCount]);

    // Store particle progress (0 to 1 along curve)
    const particleProgress = useRef<number[]>(
        Array.from({ length: particleCount }, () => Math.random())
    );

    // Animate particles along the curve
    useFrame((_, delta) => {
        if (particlesRef.current) {
            const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                particleProgress.current[i] += delta * speed * 0.1;
                if (particleProgress.current[i] > 1) {
                    particleProgress.current[i] = 0;
                }

                const point = curve.getPoint(particleProgress.current[i]);
                positions[i * 3] = point.x;
                positions[i * 3 + 1] = point.y;
                positions[i * 3 + 2] = point.z;
            }

            particlesRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <group>
            {/* River Path Tube (Volumetric Line) */}
            <mesh ref={lineRef as any}>
                <tubeGeometry args={[curve, 100, width, 8, false]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.4}
                    roughness={0}
                    metalness={1}
                />
            </mesh>

            {/* Flowing Particles */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particleCount}
                        array={particlePositions}
                        itemSize={3}
                        args={[particlePositions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    color={color}
                    size={0.03}
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                />
            </points>
        </group>
    );
}

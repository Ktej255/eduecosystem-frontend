"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FlowArrowsProps {
    path: [number, number][]; // Array of [lat, lng] coordinates
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
    path,
    color = "#4FC3F7",
    speed = 0.3,
    particleCount = 50,
    width = 0.02
}: FlowArrowsProps) {
    const particlesRef = useRef<THREE.Points>(null);
    const lineRef = useRef<THREE.Line>(null);

    // Convert path to 3D curve
    const { curve, positions } = useMemo(() => {
        const points = path.map(([lat, lng]) => latLngToVector3(lat, lng));
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
    }, [path]);

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
            {/* River Path Line */}
            <line ref={lineRef as any}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial color={color} linewidth={width} opacity={0.6} transparent />
            </line>

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

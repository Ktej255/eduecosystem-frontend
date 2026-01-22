"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface WindArrowProps {
    from: [number, number]; // [lat, lng]
    to: [number, number];
    color?: string;
    label?: string;
    speed?: number;
    opacity?: number;
}

// Convert lat/lng to 3D position on a sphere
function latLngToVector3(lat: number, lng: number, radius: number = 1.6): THREE.Vector3 {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

export default function WindArrow({
    from,
    to,
    color = "#26A69A",
    speed = 0.5,
    opacity = 0.8
}: WindArrowProps) {
    const groupRef = useRef<THREE.Group>(null);
    const particlesRef = useRef<THREE.Points>(null);

    const { curve, linePositions } = useMemo(() => {
        const start = latLngToVector3(from[0], from[1]);
        const end = latLngToVector3(to[0], to[1]);

        // Create a curved path (arc above the globe surface)
        const mid = new THREE.Vector3()
            .addVectors(start, end)
            .multiplyScalar(0.5)
            .normalize()
            .multiplyScalar(1.75); // Lift the midpoint above the surface

        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);

        // Generate line points
        const curvePoints = curve.getPoints(30);
        const linePositions = new Float32Array(curvePoints.length * 3);
        curvePoints.forEach((point, i) => {
            linePositions[i * 3] = point.x;
            linePositions[i * 3 + 1] = point.y;
            linePositions[i * 3 + 2] = point.z;
        });

        return { curve, linePositions };
    }, [from, to]);

    // Particle positions along the curve
    const particleCount = 8;
    const particlePositions = useMemo(() => {
        const arr = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const t = i / particleCount;
            const point = curve.getPoint(t);
            arr[i * 3] = point.x;
            arr[i * 3 + 1] = point.y;
            arr[i * 3 + 2] = point.z;
        }
        return arr;
    }, [curve]);

    const particleProgress = useRef<number[]>(
        Array.from({ length: particleCount }, (_, i) => i / particleCount)
    );

    // Animate particles
    useFrame((_, delta) => {
        if (particlesRef.current) {
            const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                particleProgress.current[i] += delta * speed * 0.3;
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
        <group ref={groupRef as any}>
            {/* Wind Path Line */}
            <line>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePositions.length / 3}
                        array={linePositions}
                        itemSize={3}
                        args={[linePositions, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color={color}
                    opacity={opacity * 0.4}
                    transparent
                    linewidth={2}
                />
            </line>

            {/* Animated Wind Particles */}
            <points ref={particlesRef as any}>
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
                    size={0.04}
                    transparent
                    opacity={opacity}
                    sizeAttenuation
                />
            </points>

            {/* Arrowhead at destination */}
            <mesh position={latLngToVector3(to[0], to[1]).toArray()}>
                <coneGeometry args={[0.03, 0.06, 8]} />
                <meshBasicMaterial color={color} opacity={opacity} transparent />
            </mesh>
        </group>
    );
}

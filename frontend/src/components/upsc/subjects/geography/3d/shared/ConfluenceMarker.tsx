"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ConfluenceMarkerProps {
    position: [number, number, number];
    name: string;
    tributaryName?: string;
    onSelect?: () => void;
    onClick?: () => void; // Support for legacy onClick
    isActive?: boolean;
    isMajor?: boolean;
}

export default function ConfluenceMarker({
    position,
    name,
    tributaryName,
    onSelect,
    onClick,
    isActive = false,
    isMajor = false
}: ConfluenceMarkerProps) {
    const markerRef = useRef<THREE.Mesh>(null);
    const ringRef = useRef<THREE.Mesh>(null);

    // Pulsing animation
    useFrame((state) => {
        if (ringRef.current) {
            const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
            ringRef.current.scale.set(scale, scale, scale);
            (ringRef.current.material as THREE.MeshBasicMaterial).opacity =
                0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
        }
    });

    return (
        <group position={position}>
            {/* Main Marker */}
            <mesh
                ref={markerRef as any}
                onClick={(e) => {
                    e.stopPropagation();
                    onSelect?.();
                }}
            >
                <sphereGeometry args={[isMajor ? 0.05 : 0.03, 16, 16]} />
                <meshStandardMaterial
                    color={isActive ? "#FFD700" : (isMajor ? "#60A5FA" : "#4FC3F7")}
                    emissive={isActive ? "#FFD700" : (isMajor ? "#60A5FA" : "#4FC3F7")}
                    emissiveIntensity={0.5}
                />
            </mesh>

            {/* Pulsing Ring */}
            <mesh ref={ringRef as any} rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.04, 0.05, 32]} />
                <meshBasicMaterial
                    color={isActive ? "#FFD700" : "#4FC3F7"}
                    transparent
                    opacity={0.5}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
}

// Convert lat/lng to 3D position
export function latLngToPosition(lat: number, lng: number, radius: number = 1.52): [number, number, number] {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    return [
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    ];
}

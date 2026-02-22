"use client";

import React, { useState, Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Text, Environment, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Info, Waves } from "lucide-react";

// --- Types & Data ---

// Simplified data structure matching OCEAN_RELIEF_CONTENT from oceanography-data.ts
const OCEAN_ZONES = [
    {
        id: "shelf",
        name: "Continental Shelf",
        depth: "0 - 200m",
        description: "Shallow, gently sloping extension of the continent. Rich in resources.",
        position: [-6, 1.5, 0], // x, y, z
        cameraPos: [-4, 3, 5]
    },
    {
        id: "slope",
        name: "Continental Slope",
        depth: "200 - 3000m",
        description: "Steep descent connecting the shelf to the deep ocean floor.",
        position: [-3, 0, 0],
        cameraPos: [-2, 2, 5]
    },
    {
        id: "rise",
        name: "Continental Rise",
        depth: "3000 - 4000m",
        description: "Gentle slope at the base of the continental slope, formed by sediment.",
        position: [-0.5, -1.5, 0],
        cameraPos: [0, 1, 5]
    },
    {
        id: "abyssal",
        name: "Abyssal Plain",
        depth: "3000 - 6000m",
        description: "Vast, flat, sediment-covered areas of the deep ocean floor.",
        position: [3, -2, 0],
        cameraPos: [3, 1, 5]
    },
    {
        id: "trench",
        name: "Oceanic Trench",
        depth: "> 6000m",
        description: "Deepest parts of the ocean, formed at subduction zones.",
        position: [7, -3.5, 0],
        cameraPos: [7, 0, 5]
    }
];

// --- 3D Components ---

function OceanSurface() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1.8, 0]}>
            <planeGeometry args={[20, 10, 32, 32]} />
            <meshStandardMaterial
                color="#0ea5e9"
                transparent
                opacity={0.4}
                roughness={0.1}
                metalness={0.8}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

function TerrainMesh({ onZoneClick }: { onZoneClick: (zoneId: string) => void }) {
    // Procedural generation of the profile
    const geometry = useMemo(() => {
        // Create a custom shape for the cross-section
        const shape = new THREE.Shape();

        // Start top-left (Continental Shelf)
        shape.moveTo(-10, 1.5);
        shape.lineTo(-5, 1.3);   // Shelf edge

        // Slope
        shape.lineTo(-2, -1.5);  // Base of slope

        // Rise
        shape.lineTo(0, -2.0);   // End of rise

        // Abyssal Plain
        shape.lineTo(5, -2.2);   // Plain

        // Trench
        shape.lineTo(6.5, -4.5); // Trench bottom
        shape.lineTo(8, -2.2);   // Trench other side

        // Continue Plain/Ridge
        shape.lineTo(10, -1.5);

        // Close the shape (bottom and sides)
        shape.lineTo(10, -5);    // Bottom right
        shape.lineTo(-10, -5);   // Bottom left
        shape.lineTo(-10, 1.5);  // Back to start

        const extrudeSettings = {
            steps: 2,
            depth: 6,
            bevelEnabled: true,
            bevelThickness: 0.2,
            bevelSize: 0.1,
            bevelOffset: 0,
            bevelSegments: 3
        };

        const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        // Center the geometry
        geo.translate(0, 0, -3);
        return geo;
    }, []);

    return (
        <group>
            <mesh geometry={geometry} receiveShadow>
                <meshStandardMaterial
                    color="#1e1b4b" // Dark blue/indigo base
                    roughness={0.8}
                    vertexColors={false}
                />
            </mesh>
            {/* Overlay Grid/Wireframe for "tech" look */}
            <mesh geometry={geometry}>
                <meshBasicMaterial color="#4f46e5" wireframe transparent opacity={0.1} />
            </mesh>

            {/* Zone Click Areas (Invisible Hitboxes) or just use logic based on click position */}
            {OCEAN_ZONES.map((zone) => (
                <mesh
                    key={zone.id}
                    position={new THREE.Vector3(...zone.position)}
                    onClick={(e) => {
                        e.stopPropagation();
                        onZoneClick(zone.id);
                    }}
                    onPointerOver={() => document.body.style.cursor = 'pointer'}
                    onPointerOut={() => document.body.style.cursor = 'auto'}
                >
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color="#facc15" emissive="#facc15" emissiveIntensity={0.5} transparent opacity={0.6} />
                    <Html distanceFactor={8}>
                        <div className="bg-slate-900/80 text-white text-xs px-2 py-1 rounded backdrop-blur border border-white/20 whitespace-nowrap hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1 group">
                            <Info className="w-3 h-3 group-hover:text-yellow-400" />
                            {zone.name}
                        </div>
                    </Html>
                </mesh>
            ))}
        </group>
    );
}

function WaterVolume() {
    return (
        <mesh position={[0, -1.6, 0]}>
            <boxGeometry args={[20, 6.8, 6]} />
            <meshStandardMaterial
                color="#0284c7"
                transparent
                opacity={0.1}
                side={THREE.DoubleSide}
                depthWrite={false}
            />
        </mesh>
    );
}

function OceanScene({ onSelectZone }: { onSelectZone: (zone: any) => void }) {
    return (
        <>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
            <pointLight position={[-5, 2, 0]} intensity={0.5} color="#0ea5e9" />

            {/* Environment for reflections */}
            {/* <Environment preset="night" /> */}

            <OceanSurface />
            <TerrainMesh onZoneClick={(id) => onSelectZone(OCEAN_ZONES.find(z => z.id === id))} />
            <WaterVolume />

            <OrbitControls
                enablePan={true}
                enableZoom={true}
                minDistance={5}
                maxDistance={15}
                maxPolarAngle={Math.PI / 2 - 0.1} // Don't go below ground
                target={[0, -1, 0]}
            />
        </>
    );
}

export default function OceanFloorViz() {
    const [selectedZone, setSelectedZone] = useState<typeof OCEAN_ZONES[0] | null>(null);

    return (
        <div className="w-full h-full relative bg-slate-950">
            <Canvas camera={{ position: [0, 5, 12], fov: 45 }}>
                <Suspense fallback={<Html><div className="text-white">Loading Ocean Terrain...</div></Html>}>
                    <OceanScene onSelectZone={setSelectedZone} />
                </Suspense>
            </Canvas>

            {/* Title */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Waves className="text-sky-400" />
                    Ocean Relief Profile
                </h1>
                <p className="text-muted-foreground text-sm">Interactive Cross-Section of the Ocean Floor</p>
            </div>

            {/* Info Panel */}
            <div className={`absolute bottom-6 left-6 right-6 md:right-auto md:w-96 bg-slate-900/90 backdrop-blur-xl border border-sky-500/30 rounded-2xl p-6 transition-all duration-300 transform ${selectedZone ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
                {selectedZone && (
                    <>
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-xl font-bold text-sky-100">{selectedZone.name}</h2>
                            <button onClick={() => setSelectedZone(null)} className="text-muted-foreground hover:text-white">✕</button>
                        </div>
                        <div className="inline-block bg-sky-900/50 text-sky-300 text-xs px-2 py-1 rounded mb-3 border border-sky-500/20 font-mono">
                            Depth: {selectedZone.depth}
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            {selectedZone.description}
                        </p>
                    </>
                )}
            </div>

            {/* Helper Hint */}
            {!selectedZone && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm animate-pulse">
                    Click the yellow markers to explore zones
                </div>
            )}
        </div>
    );
}

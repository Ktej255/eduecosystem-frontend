"use client";

import React, { useState, Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import * as THREE from "three";
import { Info, Globe, ThermometerSun, Snowflake } from "lucide-react";

// --- Types & Data ---

interface CurrentData {
    id: string;
    name: string;
    type: 'warm' | 'cold';
    description: string;
    // Simplified path points [lat, lng]
    path: [number, number][];
}

// Major Currents Data based on Water Movement lesson
const OCEAN_CURRENTS: CurrentData[] = [
    {
        id: "gulf_stream",
        name: "Gulf Stream",
        type: "warm",
        description: "A powerful warm current that keeps Western Europe warmer than other regions at similar latitudes.",
        path: [[25, -80], [35, -75], [40, -60], [45, -40], [50, -20], [55, -10]]
    },
    {
        id: "kuroshio",
        name: "Kuroshio Current",
        type: "warm",
        description: "The 'Black Tide'. Flows north on the west side of the North Pacific Ocean.",
        path: [[20, 125], [30, 135], [35, 145], [40, 155]]
    },
    {
        id: "canary",
        name: "Canary Current",
        type: "cold",
        description: "A cold current that flows south along the west coast of Africa. Creates stable air/deserts.",
        path: [[45, -15], [35, -18], [25, -20], [15, -22]]
    },
    {
        id: "peru",
        name: "Peru (Humboldt) Current",
        type: "cold",
        description: "A cold, low-salinity ocean current that flows north along the western coast of South America.",
        path: [[-45, -75], [-35, -73], [-25, -72], [-15, -75], [-5, -80]]
    },
    {
        id: "brazil",
        name: "Brazil Current",
        type: "warm",
        description: "A warm current flowing south along the Brazilian coast.",
        path: [[-10, -35], [-20, -38], [-30, -45], [-40, -50]]
    },
    {
        id: "benguela",
        name: "Benguela Current",
        type: "cold",
        description: "Flows north along the west coast of Southern Africa.",
        path: [[-35, 18], [-25, 12], [-15, 10], [-5, 8]]
    },
    {
        id: "california",
        name: "California Current",
        type: "cold",
        description: "Moves south along the western coast of North America.",
        path: [[48, -128], [40, -126], [30, -120], [23, -110]]
    },
    {
        id: "agulhas",
        name: "Agulhas Current",
        type: "warm",
        description: "The western boundary current of the southwest Indian Ocean (warm).",
        path: [[-25, 35], [-30, 32], [-35, 25], [-40, 20]]
    }
];

// --- Helpers ---

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
        -(radius) * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

// --- 3D Components ---

function EarthBase() {
    return (
        <mesh>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial
                color="#0f172a" // Deep dark blue ocean base
                roughness={0.6}
                metalness={0.1}
            />
        </mesh>
    );
}

function Continents() {
    // Simplified Continents using primitives - in real app, use a texture or GeoJSON mesh
    // Start with wireframe sphere to suggest globe
    return (
        <mesh scale={[1.005, 1.005, 1.005]}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshBasicMaterial
                color="#334155"
                wireframe
                transparent
                opacity={0.15}
            />
        </mesh>
    );
}

function CurrentPath({ current, onSelect }: { current: CurrentData, onSelect: (c: CurrentData) => void }) {
    // Create curve from path points
    const curvePoints = useMemo(() => {
        return current.path.map(p => latLngToVector3(p[0], p[1], 2.05));
    }, [current.path]);

    const curve = useMemo(() => new THREE.CatmullRomCurve3(curvePoints), [curvePoints]);
    const geometry = useMemo(() => new THREE.TubeGeometry(curve, 20, 0.04, 8, false), [curve]);

    // Animate flow texture or just pulses
    const materialRef = useRef<THREE.MeshStandardMaterial>(null);

    useFrame((state) => {
        if (materialRef.current) {
            // Pulse opacity/emissive
            const t = state.clock.getElapsedTime();
            materialRef.current.emissiveIntensity = 0.5 + Math.sin(t * 3) * 0.3;
        }
    });

    const color = current.type === 'warm' ? '#ef4444' : '#3b82f6';

    return (
        <group onClick={(e) => { e.stopPropagation(); onSelect(current); }}>
            <mesh geometry={geometry}>
                <meshStandardMaterial
                    ref={materialRef}
                    color={color}
                    emissive={color}
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* Arrowheads/Particles moving along path - Simplified to spheres at start/end for minimal code */}
            <mesh position={curvePoints[0]}>
                <sphereGeometry args={[0.06]} />
                <meshBasicMaterial color={color} />
            </mesh>
            <mesh position={curvePoints[curvePoints.length - 1]}>
                <coneGeometry args={[0.08, 0.2, 8]} />
                {/* Rotate cone to face direction? simplified for now */}
                <meshBasicMaterial color={color} />
            </mesh>

            {/* Hover Interaction Area (Invisible tube around path) */}
            <mesh
                onPointerOver={() => document.body.style.cursor = 'pointer'}
                onPointerOut={() => document.body.style.cursor = 'auto'}
            >
                <tubeGeometry args={[curve, 10, 0.15, 8, false]} />
                <meshBasicMaterial visible={false} />
            </mesh>
        </group>
    );
}

function GlobeScene({ onSelectCurrent }: { onSelectCurrent: (c: CurrentData) => void }) {
    return (
        <>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 5, 5]} intensity={1.5} />
            <directionalLight position={[-5, 5, -5]} intensity={0.5} color="blue" />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />

            <EarthBase />
            <Continents />

            {OCEAN_CURRENTS.map(current => (
                <CurrentPath key={current.id} current={current} onSelect={onSelectCurrent} />
            ))}

            <OrbitControls
                enablePan={false}
                minDistance={3.5}
                maxDistance={8}
                autoRotate
                autoRotateSpeed={0.5}
            />
        </>
    );
}

export default function OceanCurrentsViz() {
    const [selectedCurrent, setSelectedCurrent] = useState<CurrentData | null>(null);

    return (
        <div className="w-full h-full relative bg-slate-950">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <Suspense fallback={null}>
                    <GlobeScene onSelectCurrent={setSelectedCurrent} />
                </Suspense>
            </Canvas>

            {/* Title */}
            <div className="absolute top-4 left-4 pointer-events-none z-10">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Globe className="text-blue-400" />
                    Major Ocean Currents
                </h1>
                <p className="text-slate-400 text-sm">Global circulation of warm & cold water</p>
            </div>

            {/* Legend */}
            <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur rounded-lg p-3 border border-white/10 text-xs">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                    <span className="text-slate-300">Warm Current</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                    <span className="text-slate-300">Cold Current</span>
                </div>
            </div>

            {/* Info Panel */}
            <div className={`absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-5 transition-all duration-300 transform ${selectedCurrent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
                {selectedCurrent && (
                    <>
                        <div className="flex justify-between items-start mb-2">
                            <h2 className={`text-xl font-bold ${selectedCurrent.type === 'warm' ? 'text-red-400' : 'text-blue-400'} flex items-center gap-2`}>
                                {selectedCurrent.type === 'warm' ? <ThermometerSun className="w-5 h-5" /> : <Snowflake className="w-5 h-5" />}
                                {selectedCurrent.name}
                            </h2>
                            <button onClick={() => setSelectedCurrent(null)} className="text-slate-400 hover:text-white">✕</button>
                        </div>
                        <Badge className={`mb-3 ${selectedCurrent.type === 'warm' ? 'bg-red-900/50 text-red-200 hover:bg-red-900/50' : 'bg-blue-900/50 text-blue-200 hover:bg-blue-900/50'} border-none`}>
                            {selectedCurrent.type === 'warm' ? 'Warm Current' : 'Cold Current'}
                        </Badge>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            {selectedCurrent.description}
                        </p>
                    </>
                )}
            </div>

            {/* Helper Hint */}
            {!selectedCurrent && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 text-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm animate-pulse">
                    Click on the flow lines to identify currents
                </div>
            )}
        </div>
    );
}

// Simple Badge Component inline to avoid import issues if missing
function Badge({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
            {children}
        </span>
    );
}

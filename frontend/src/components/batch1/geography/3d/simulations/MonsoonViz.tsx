"use client";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import WindArrow from "../shared/WindArrow";
import monsoonData from "../../data/climate/monsoon-system.json";

type PhaseId = 'winter' | 'summer' | 'swMonsoon' | 'retreat';

interface MonsoonPhase {
    id: string;
    name: string;
    months: string[];
    itczPosition: number;
    characteristics: string[];
    windPatterns: Array<{
        from: [number, number];
        to: [number, number];
        direction: string;
        color: string;
        label?: string;
    }>;
    pressureZones: Array<{
        type: string;
        center: [number, number];
        label: string;
    }>;
}

// Convert lat/lng to 3D position
function latLngToPosition(lat: number, lng: number, radius: number = 1.55): [number, number, number] {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    return [
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    ];
}

function MonsoonScene({ phase }: { phase: MonsoonPhase }) {
    return (
        <>
            {/* Background Stars */}
            <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />

            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, 5, -5]} intensity={0.3} color="#FFA726" />

            {/* Earth/India Base */}
            <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#1a472a"
                    roughness={0.8}
                    metalness={0.2}
                    opacity={0.85}
                    transparent
                />
            </mesh>

            {/* Ocean Layer */}
            <mesh>
                <sphereGeometry args={[1.48, 64, 64]} />
                <meshStandardMaterial
                    color="#1565C0"
                    roughness={0.9}
                    opacity={0.4}
                    transparent
                />
            </mesh>

            {/* ITCZ Line */}
            <mesh rotation={[0, 0, 0]}>
                <torusGeometry args={[
                    1.52 * Math.cos(phase.itczPosition * Math.PI / 180),
                    0.01,
                    8,
                    64
                ]} />
                <meshBasicMaterial color="#FF5722" opacity={0.7} transparent />
            </mesh>

            {/* ITCZ Label */}
            <Html position={latLngToPosition(phase.itczPosition, 90)}>
                <div className="bg-orange-500/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    ITCZ ({phase.itczPosition}°N)
                </div>
            </Html>

            {/* Wind Patterns */}
            {phase.windPatterns.map((wind, index) => (
                <WindArrow
                    key={index}
                    from={wind.from}
                    to={wind.to}
                    color={wind.color}
                    speed={0.6}
                />
            ))}

            {/* Pressure Zones */}
            {phase.pressureZones.map((zone, index) => {
                const pos = latLngToPosition(zone.center[0], zone.center[1]);
                const isHigh = zone.type === 'high';
                return (
                    <group key={index} position={pos}>
                        {/* Pressure indicator */}
                        <mesh>
                            <sphereGeometry args={[0.08, 16, 16]} />
                            <meshBasicMaterial
                                color={isHigh ? "#F44336" : "#2196F3"}
                                opacity={0.6}
                                transparent
                            />
                        </mesh>
                        {/* Label */}
                        <Html distanceFactor={3}>
                            <div className={`text-xs px-2 py-1 rounded whitespace-nowrap ${isHigh ? 'bg-red-500/80' : 'bg-blue-500/80'
                                } text-white`}>
                                {isHigh ? 'H' : 'L'} {zone.label}
                            </div>
                        </Html>
                    </group>
                );
            })}

            {/* Camera Controls */}
            <OrbitControls
                enablePan={true}
                enableZoom={true}
                minDistance={2}
                maxDistance={5}
                autoRotate
                autoRotateSpeed={0.3}
            />
        </>
    );
}

export default function MonsoonViz() {
    const [activePhase, setActivePhase] = useState<PhaseId>('swMonsoon');

    const phases = monsoonData.phases as MonsoonPhase[];
    const currentPhase = phases.find(p => p.id === activePhase) || phases[2];

    const phaseColors: Record<PhaseId, string> = {
        winter: 'from-blue-600 to-blue-800',
        summer: 'from-orange-500 to-red-600',
        swMonsoon: 'from-teal-500 to-emerald-600',
        retreat: 'from-purple-500 to-indigo-600'
    };

    return (
        <div className="w-full h-full relative bg-slate-950">
            {/* 3D Canvas */}
            <Canvas
                camera={{ position: [0, 1.5, 3.5], fov: 50 }}
                style={{ background: 'linear-gradient(to bottom, #0f172a, #020617)' }}
            >
                <Suspense fallback={null}>
                    <MonsoonScene phase={currentPhase} />
                </Suspense>
            </Canvas>

            {/* Phase Selector */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
                {phases.map((phase) => (
                    <button
                        key={phase.id}
                        onClick={() => setActivePhase(phase.id as PhaseId)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activePhase === phase.id
                                ? `bg-gradient-to-r ${phaseColors[phase.id as PhaseId]} text-white shadow-lg`
                                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                            }`}
                    >
                        {phase.name.split(' ')[0]}
                    </button>
                ))}
            </div>

            {/* Info Panel */}
            <div className="absolute bottom-6 left-6 right-6 max-w-lg bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 p-4">
                <h3 className={`text-lg font-bold bg-gradient-to-r ${phaseColors[activePhase]} bg-clip-text text-transparent mb-2`}>
                    {currentPhase.name}
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                    {currentPhase.months.join(', ')}
                </p>
                <ul className="space-y-1">
                    {currentPhase.characteristics.slice(0, 3).map((char, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-emerald-400 mt-0.5">•</span>
                            {char}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Legend */}
            <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-xs">
                <div className="text-white font-semibold mb-2">Legend</div>
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="text-slate-400">High Pressure</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="text-slate-400">Low Pressure</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-orange-500" />
                        <span className="text-slate-400">ITCZ</span>
                    </div>
                </div>
            </div>

            {/* Title */}
            <div className="absolute top-16 left-4 text-white">
                <h2 className="text-xl font-bold">Indian Monsoon Mechanism</h2>
                <p className="text-slate-400 text-sm">Interactive 3D Visualization</p>
            </div>
        </div>
    );
}

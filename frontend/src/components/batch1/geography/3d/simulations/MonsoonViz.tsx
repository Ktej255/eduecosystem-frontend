"use client";

import React, { useState, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Stars, CurveModifier } from "@react-three/drei";
import * as THREE from "three";
import monsoonData from "../../data/climate/monsoon-system.json";
import { ArrowLeft, Wind, Sun, CloudRain } from "lucide-react";
import activityService from '@/services/activityService';

// --- Types ---
interface WindPattern {
    from: [number, number];
    to: [number, number];
    direction: string;
    color: string;
    label?: string;
}

interface PressureZone {
    type: 'high' | 'low';
    center: [number, number];
    label: string;
}

interface SeasonPhase {
    id: string;
    name: string;
    months: string[];
    itczPosition: number;
    characteristics: string[];
    windPatterns: WindPattern[];
    pressureZones: PressureZone[];
}

// --- Helpers ---
function latLngToVector3(lat: number, lng: number, radius: number = 1.6): THREE.Vector3 {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

// --- Components ---

function Earth() {
    return (
        <group>
            {/* Ocean */}
            <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial color="#1e3a8a" roughness={0.6} metalness={0.1} />
            </mesh>
            {/* Landmass Hint (Simplified) */}
            <mesh rotation={[0, -Math.PI / 2, 0]}> {/* Adjust rotation to align India roughly */}
                {/* This is a placeholder for actual texture or geojson. 
                     For now, we rely on the vector markers to define the region. */}
            </mesh>
            {/* Atmosphere Halo */}
            <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial color="#4f46e5" transparent opacity={0.1} side={THREE.BackSide} />
            </mesh>
        </group>
    );
}

// Animated Wind Vector
function WindVector({ pattern }: { pattern: WindPattern }) {
    const start = latLngToVector3(pattern.from[0], pattern.from[1], 1.55);
    const end = latLngToVector3(pattern.to[0], pattern.to[1], 1.55);

    // Create a curve for the wind path (arced slightly above surface)
    const mid = start.clone().lerp(end, 0.5).normalize().multiplyScalar(1.65); // Arc height
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);

    const points = useMemo(() => curve.getPoints(20), [curve]);
    const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

    // Animated particle
    const particleRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (particleRef.current) {
            const t = (state.clock.elapsedTime * 0.5) % 1; // Loop 0 to 1
            const pos = curve.getPoint(t);
            particleRef.current.position.copy(pos);
            const tangent = curve.getTangent(t).normalize();
            particleRef.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tangent);
        }
    });

    return (
        <group>
            {/* Trajectory Line */}
            <line>
                <primitive object={geometry} attach="geometry" />
                <lineBasicMaterial color={pattern.color} opacity={0.3} transparent />
            </line>

            {/* Moving Arrow Head/Particle */}
            <mesh ref={particleRef as any}>
                <coneGeometry args={[0.03, 0.1, 8]} />
                <meshBasicMaterial color={pattern.color} />
            </mesh>

            {/* Label */}
            {pattern.label && (
                <Html position={mid.toArray()} distanceFactor={5}>
                    <div className="bg-black/50 text-white text-[10px] px-1 rounded backdrop-blur-sm whitespace-nowrap">
                        {pattern.label}
                    </div>
                </Html>
            )}
        </group>
    );
}

function PressureMarker({ zone }: { zone: PressureZone }) {
    const pos = latLngToVector3(zone.center[0], zone.center[1], 1.55);
    const color = zone.type === 'high' ? '#ef4444' : '#3b82f6'; // Red for High, Blue for Low (Physics convention usually implies High=Cool/Blue, Low=Warm/Red, but Geography maps often use Red for High pressure cells like Mascarene? Actually standard maps use Blue/Red variously. Let's stick to H=Red(Strong), L=Blue(Depression) or Vica Versa. Let's use Red for HEAT (Low) and Blue for COLD (High).

    // Correction: 
    // Summer: Land is Hot (Low Pressure) -> Red
    // Winter: Land is Cold (High Pressure) -> Blue
    const displayColor = zone.type === 'low' ? '#ef4444' : '#3b82f6';

    return (
        <group position={pos.toArray()}>
            <mesh>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial color={displayColor} opacity={0.7} transparent />
            </mesh>
            <Html distanceFactor={5}>
                <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs bg-white/10 backdrop-blur-md ${zone.type === 'low' ? 'border-red-500 text-red-500' : 'border-blue-500 text-blue-500'}`}>
                        {zone.type === 'high' ? 'H' : 'L'}
                    </div>
                    <span className="text-white text-[10px] mt-1 bg-black/40 px-1 rounded">{zone.label}</span>
                </div>
            </Html>
        </group>
    );
}

function MonsoonScene({ activePhaseId }: { activePhaseId: string }) {
    const phases = monsoonData.phases as unknown as SeasonPhase[];
    const activePhase = phases.find(p => p.id === activePhaseId) || phases[0];

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 3, 5]} intensity={2} />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />

            <Earth />

            {/* Wind Patterns */}
            {activePhase.windPatterns.map((pattern, idx) => (
                <WindVector key={`${activePhaseId}-wind-${idx}`} pattern={pattern} />
            ))}

            {/* Pressure Zones */}
            {activePhase.pressureZones.map((zone, idx) => (
                <PressureMarker key={`${activePhaseId}-pressure-${idx}`} zone={zone} />
            ))}

            <OrbitControls
                enablePan={false}
                minDistance={2.5}
                maxDistance={6}
            // Lock rotation to view India approx
            // minAzimuthAngle={-Math.PI / 2}
            // maxAzimuthAngle={Math.PI / 2}
            // minPolarAngle={0}
            // maxPolarAngle={Math.PI / 2}
            />
        </>
    );
}

export default function MonsoonViz() {
    const [activePhaseId, setActivePhaseId] = useState<string>('swMonsoon'); // Default to SW Monsoon

    // Find phase data for UI
    const phases = monsoonData.phases as unknown as SeasonPhase[];
    const activePhase = phases.find(p => p.id === activePhaseId) || phases[0];

    const handlePhaseChange = (phaseId: string) => {
        setActivePhaseId(phaseId);
        activityService.logActivity('interaction', `Monsoon Viz: Switched to ${phaseId}`);
    };

    return (
        <div className="w-full h-full relative bg-slate-950">
            <Canvas camera={{ position: [2, 2, 4], fov: 45 }}>
                <MonsoonScene activePhaseId={activePhaseId} />
            </Canvas>

            {/* UI Controls */}
            <div className="absolute top-4 left-4 z-10">
                <h1 className="text-2xl font-bold text-white mb-1">Indian Monsoon System</h1>
                <p className="text-slate-400 text-sm">Seasonal Wind Reversal & ITCZ Shift</p>
            </div>

            {/* Season Toggles */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-slate-900/80 backdrop-blur-md rounded-2xl p-2 border border-white/10 flex gap-2">
                {phases.map(phase => (
                    <button
                        key={phase.id}
                        onClick={() => handlePhaseChange(phase.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activePhaseId === phase.id
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                            : 'hover:bg-white/10 text-slate-400'
                            }`}
                    >
                        {phase.id === 'winter' && <Wind className="w-4 h-4" />}
                        {phase.id === 'summer' && <Sun className="w-4 h-4" />}
                        {phase.id === 'swMonsoon' && <CloudRain className="w-4 h-4" />}
                        {phase.id === 'retreat' && <Wind className="w-4 h-4 text-orange-400" />}
                        {phase.name.split(' (')[0]}
                    </button>
                ))}
            </div>

            {/* Info Panel */}
            <div className="absolute top-20 right-4 w-80 bg-slate-900/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">{activePhase.name}</h3>
                <div className="mb-4 flex flex-wrap gap-2">
                    {activePhase.months.map(m => (
                        <span key={m} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-white/5">{m}</span>
                    ))}
                </div>

                <ul className="space-y-2 mb-4">
                    {activePhase.characteristics.map((char, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                            {char}
                        </li>
                    ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center text-xs text-slate-500">
                        <span>ITCZ Position</span>
                        <span className="text-white font-mono">{activePhase.itczPosition}Γ░ N</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

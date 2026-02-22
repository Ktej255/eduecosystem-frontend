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
            {/* Holographic India Base */}
            <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshPhongMaterial
                    color="#0a1a1f"
                    emissive="#001a1a"
                    emissiveIntensity={0.8}
                    shininess={100}
                    transparent
                    opacity={0.9}
                />
            </mesh>
            {/* Atmosphere Rim Light */}
            <mesh scale={[1.05, 1.05, 1.05]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#00bcd4"
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                />
            </mesh>
            {/* Glow / Rim Light Effect */}
            <mesh scale={[1.01, 1.01, 1.01]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#00e5ff"
                    transparent
                    opacity={0.05}
                    wireframe
                />
            </mesh>
        </group>
    );
}

// Animated Wind Vector
// Animated Wind Vector (Particle Stream)
function WindVector({ pattern }: { pattern: WindPattern }) {
    const start = latLngToVector3(pattern.from[0], pattern.from[1], 1.55);
    const end = latLngToVector3(pattern.to[0], pattern.to[1], 1.55);

    // Create a curve for the wind path (arced slightly above surface)
    const mid = start.clone().lerp(end, 0.5).normalize().multiplyScalar(1.65); // Arc height
    const curve = useMemo(() => new THREE.QuadraticBezierCurve3(start, mid, end), [start, mid, end]);

    const particleCount = 20;
    const speed = 0.5;

    // Initialize particle positions
    const particlePositions = useMemo(() => {
        const arr = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            // Distribute initial positions along the curve
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

    const particlesRef = useRef<THREE.Points>(null);

    // Animate particles
    useFrame((_, delta) => {
        if (particlesRef.current) {
            const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                particleProgress.current[i] += delta * speed;
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

    // Create tube geometry for the faint path line
    const tubeGeo = useMemo(() => new THREE.TubeGeometry(curve, 20, 0.005, 8, false), [curve]);

    return (
        <group>
            {/* Trajectory Guide Line (Faint Tube) */}
            <mesh geometry={tubeGeo}>
                <meshBasicMaterial color={pattern.color} opacity={0.1} transparent />
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
                    color={pattern.color}
                    size={0.04}
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    depthWrite={false}
                />
            </points>

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

function ITCZBand({ latitude }: { latitude: number }) {
    // Convert latitude to 3D Y position on sphere
    const radius = 1.58;
    const phi = (90 - latitude) * (Math.PI / 180);
    const yPos = radius * Math.cos(phi);

    return (
        <group position={[0, yPos, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[radius * Math.sin(phi), 0.02, 16, 100]} />
                <meshBasicMaterial color="#fbbf24" transparent opacity={0.6} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.5]}>
                <torusGeometry args={[radius * Math.sin(phi), 0.05, 8, 50]} />
                <meshBasicMaterial color="#fbbf24" transparent opacity={0.15} />
            </mesh>
            <Html position={[radius * 1.1, 0, 0]}>
                <div className="bg-amber-500/20 text-amber-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-500/50 backdrop-blur-md whitespace-nowrap uppercase tracking-widest shadow-lg">
                    ITCZ: {latitude}°N
                </div>
            </Html>
        </group>
    );
}

function PressureMarker({ zone }: { zone: PressureZone }) {
    const pos = latLngToVector3(zone.center[0], zone.center[1], 1.55);
    const displayColor = zone.type === 'low' ? '#f43f5e' : '#3b82f6';

    return (
        <group position={pos.toArray()}>
            <mesh>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial color={displayColor} emissive={displayColor} emissiveIntensity={2} />
            </mesh>
            <Html distanceFactor={5} center>
                <div className="flex flex-col items-center group">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black text-sm bg-black/60 shadow-2xl transition-all group-hover:scale-110 ${zone.type === 'low' ? 'border-rose-500 text-rose-500 shadow-rose-900/50' : 'border-blue-500 text-blue-500 shadow-blue-900/50'}`}>
                        {zone.type === 'high' ? 'H' : 'L'}
                    </div>
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
            <ITCZBand latitude={activePhase.itczPosition} />

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
                <p className="text-muted-foreground text-sm">Seasonal Wind Reversal & ITCZ Shift</p>
            </div>

            {/* Season Toggles */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-slate-900/80 backdrop-blur-md rounded-2xl p-2 border border-white/10 flex gap-2">
                {phases.map(phase => (
                    <button
                        key={phase.id}
                        onClick={() => handlePhaseChange(phase.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activePhaseId === phase.id
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                            : 'hover:bg-card/10 text-muted-foreground'
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
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>ITCZ Position</span>
                        <span className="text-white font-mono">{activePhase.itczPosition}° N</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

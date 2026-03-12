"use client";

import { useState, Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Text } from "@react-three/drei";
import * as THREE from "three";
import volcanoData from "../../data/tectonics/volcano-data.json";

type EruptionPhase = 'dormant' | 'pre-eruption' | 'eruption' | 'post-eruption';

// Magma particle system
function MagmaParticles({ phase }: { phase: EruptionPhase }) {
    const particlesRef = useRef<THREE.Points>(null);
    const particleCount = phase === 'eruption' ? 200 : (phase === 'pre-eruption' ? 50 : 10);

    const positions = useMemo(() => {
        const arr = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 0.3;     // x
            arr[i * 3 + 1] = Math.random() * 2 - 1;       // y (inside conduit)
            arr[i * 3 + 2] = (Math.random() - 0.5) * 0.3; // z
        }
        return arr;
    }, [particleCount]);

    const velocities = useRef<number[]>(
        Array.from({ length: particleCount }, () => Math.random() * 0.5 + 0.2)
    );

    useFrame((_, delta) => {
        if (particlesRef.current && phase !== 'dormant') {
            const pos = particlesRef.current.geometry.attributes.position.array as Float32Array;
            const speed = phase === 'eruption' ? 3 : 0.5;

            for (let i = 0; i < particleCount; i++) {
                pos[i * 3 + 1] += delta * speed * velocities.current[i];

                // Reset particles that exit the top
                if (pos[i * 3 + 1] > 3) {
                    pos[i * 3 + 1] = -1;
                    pos[i * 3] = (Math.random() - 0.5) * 0.3;
                    pos[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
                }
            }
            particlesRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    if (phase === 'dormant' || phase === 'post-eruption') return null;

    return (
        <points ref={particlesRef as any}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                color={phase === 'eruption' ? "#FF5722" : "#FF8A65"}
                size={0.08}
                transparent
                opacity={0.9}
                sizeAttenuation
            />
        </points>
    );
}

// Ash cloud effect
function AshCloud({ phase }: { phase: EruptionPhase }) {
    const cloudRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (cloudRef.current && phase === 'eruption') {
            const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
            cloudRef.current.scale.set(scale, scale * 0.6, scale);
        }
    });

    if (phase !== 'eruption') return null;

    return (
        <mesh ref={cloudRef as any} position={[0, 2.8, 0]}>
            <sphereGeometry args={[0.8, 16, 16]} />
            <meshStandardMaterial
                color="#424242"
                transparent
                opacity={0.6}
                roughness={1}
            />
        </mesh>
    );
}

function VolcanoScene({ phase }: { phase: EruptionPhase }) {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[0, 0, 0]} intensity={phase === 'eruption' ? 2 : 0.5} color="#FF5722" />

            {/* Ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#2d4a3a" />
            </mesh>

            {/* Volcano Cone - Outer Shell */}
            <mesh position={[0, 0, 0]}>
                <coneGeometry args={[2.5, 3, 32, 1, true]} />
                <meshStandardMaterial color="#5D4037" side={THREE.DoubleSide} />
            </mesh>

            {/* Volcano Cross-Section (Half visible) */}
            <mesh position={[0, 0, 0]} rotation={[0, Math.PI, 0]}>
                <coneGeometry args={[2.5, 3, 32, 1, true, 0, Math.PI]} />
                <meshStandardMaterial color="#8D6E63" side={THREE.DoubleSide} />
            </mesh>

            {/* Magma Chamber */}
            <mesh position={[0, -1.2, 0]}>
                <sphereGeometry args={[0.8, 16, 16]} />
                <meshStandardMaterial
                    color="#FF5722"
                    emissive="#FF5722"
                    emissiveIntensity={phase === 'dormant' ? 0.3 : 0.8}
                />
            </mesh>

            {/* Conduit */}
            <mesh position={[0, 0.3, 0]}>
                <cylinderGeometry args={[0.15, 0.25, 2.5, 16]} />
                <meshStandardMaterial
                    color="#FF8A65"
                    emissive="#FF5722"
                    emissiveIntensity={phase === 'eruption' ? 1 : 0.2}
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Crater */}
            <mesh position={[0, 1.5, 0]} rotation={[Math.PI, 0, 0]}>
                <coneGeometry args={[0.4, 0.3, 16, 1, true]} />
                <meshStandardMaterial color="#4E342E" side={THREE.DoubleSide} />
            </mesh>

            {/* Labels */}
            <Html position={[1.5, -1.2, 0]} distanceFactor={5}>
                <div className="bg-orange-800/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Magma Chamber
                </div>
            </Html>
            <Html position={[0.8, 0.3, 0]} distanceFactor={5}>
                <div className="bg-orange-700/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Conduit
                </div>
            </Html>
            <Html position={[0.6, 1.5, 0]} distanceFactor={5}>
                <div className="bg-amber-900/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Crater
                </div>
            </Html>

            {/* Lava layers (stripes on cone) */}
            {[0.3, 0.6, 0.9, 1.2].map((height, i) => (
                <mesh key={i} position={[0, height - 0.5, 0]}>
                    <torusGeometry args={[2 - height * 0.7, 0.03, 8, 32]} />
                    <meshStandardMaterial color={i % 2 === 0 ? "#795548" : "#4E342E"} />
                </mesh>
            ))}

            {/* Magma Particles */}
            <MagmaParticles phase={phase} />

            {/* Ash Cloud */}
            <AshCloud phase={phase} />

            {/* Camera Controls */}
            <OrbitControls
                enablePan={true}
                enableZoom={true}
                minDistance={3}
                maxDistance={10}
                maxPolarAngle={Math.PI / 2}
            />
        </>
    );
}

export default function VolcanoViz() {
    const [phase, setPhase] = useState<EruptionPhase>('dormant');

    const phases = volcanoData.eruptionPhases as Array<{
        id: string;
        name: string;
        description: string;
        activity: string;
    }>;

    const currentPhase = phases.find(p => p.id === phase);

    const phaseColors: Record<EruptionPhase, string> = {
        'dormant': 'from-slate-600 to-slate-800',
        'pre-eruption': 'from-yellow-600 to-orange-700',
        'eruption': 'from-red-500 to-red-700',
        'post-eruption': 'from-gray-500 to-gray-700'
    };

    return (
        <div className="w-full h-full relative bg-slate-950">
            <Canvas
                camera={{ position: [4, 2, 4], fov: 50 }}
                style={{ background: 'linear-gradient(to bottom, #1e3a5f, #0a1929)' }}
            >
                <Suspense fallback={null}>
                    <VolcanoScene phase={phase} />
                </Suspense>
            </Canvas>

            {/* Phase Controls */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
                {phases.map((p) => (
                    <button
                        key={p.id}
                        onClick={() => setPhase(p.id as EruptionPhase)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${phase === p.id
                            ? `bg-gradient-to-r ${phaseColors[p.id as EruptionPhase]} text-white shadow-lg`
                            : 'bg-slate-800/80 text-muted-foreground hover:bg-slate-700'
                            }`}
                    >
                        {p.name.split('(')[0].trim()}
                    </button>
                ))}
            </div>

            {/* Info Panel */}
            <div className="absolute bottom-6 left-6 right-6 max-w-md bg-slate-900/90 backdrop-blur-md rounded-xl border border-orange-500/30 p-4">
                <h3 className={`text-lg font-bold bg-gradient-to-r ${phaseColors[phase]} bg-clip-text text-transparent mb-1`}>
                    {currentPhase?.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{currentPhase?.description}</p>
                <p className="text-orange-300 text-xs">
                    Activity: {currentPhase?.activity}
                </p>
            </div>

            {/* Title */}
            <div className="absolute top-16 left-4 text-white">
                <h2 className="text-xl font-bold">Volcano Cross-Section</h2>
                <p className="text-muted-foreground text-sm">Interactive Eruption Phases</p>
            </div>

            {/* Volcano Types Legend */}
            <div className="absolute bottom-6 right-6 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-xs max-w-xs">
                <div className="text-white font-semibold mb-2">Volcano Types</div>
                <div className="space-y-1">
                    {(volcanoData.volcanoTypes as Array<{ id: string; name: string; example: string }>).slice(0, 3).map((type) => (
                        <div key={type.id} className="text-muted-foreground">
                            <span className="text-white">{type.name}</span>: {type.example}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

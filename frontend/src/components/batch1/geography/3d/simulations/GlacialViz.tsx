"use client";

import { useState, Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Sky, Environment } from "@react-three/drei";
import * as THREE from "three";
import glacialData from "../../data/landforms/glacial-data.json";

type GlacialStage = 'pre-glaciation' | 'glaciation' | 'post-glaciation';

function Terrain({ stage }: { stage: GlacialStage }) {
    const meshRef = useRef<THREE.Mesh>(null);

    // Geometry morphing logic (simplified by switching geometries/scales)
    // We construct a valley using multiple meshes

    return (
        <group>
            {/* Left Mountain Slope */}
            <mesh position={[-2, 0, 0]} rotation={[0, 0, stage === 'post-glaciation' ? -0.2 : -0.5]}>
                <boxGeometry args={[4, 5, 8]} />
                <meshStandardMaterial
                    color="#4a6741" // Greenish rocky
                    roughness={0.9}
                />
            </mesh>

            {/* Right Mountain Slope */}
            <mesh position={[2, 0, 0]} rotation={[0, 0, stage === 'post-glaciation' ? 0.2 : 0.5]}>
                <boxGeometry args={[4, 5, 8]} />
                <meshStandardMaterial
                    color="#4a6741"
                    roughness={0.9}
                />
            </mesh>

            {/* Valley Floor / River / Glacier */}
            {stage === 'pre-glaciation' && (
                <mesh position={[0, -2.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[1, 8]} />
                    <meshStandardMaterial color="#4FC3F7" /> {/* River */}
                </mesh>
            )}

            {stage === 'glaciation' && (
                <mesh position={[0, -1, 0]}>
                    <boxGeometry args={[2.5, 3, 8]} />
                    <meshStandardMaterial
                        color="#E1F5FE"
                        roughness={0.2}
                        opacity={0.9}
                        transparent
                    /> {/* Ice Mass */}
                </mesh>
            )}

            {stage === 'post-glaciation' && (
                <group>
                    {/* U-Shape Flat Floor */}
                    <mesh position={[0, -2.5, 0]}>
                        <boxGeometry args={[3, 0.5, 8]} />
                        <meshStandardMaterial color="#5D4037" /> {/* Soil/Debris */}
                    </mesh>
                    {/* Misfit Stream */}
                    <mesh position={[0, -2.24, 0]} rotation={[-Math.PI / 2, 0, Math.sin(0.5)]}>
                        <planeGeometry args={[0.5, 8]} />
                        <meshStandardMaterial color="#4FC3F7" />
                    </mesh>
                    {/* Pater Noster Lake example */}
                    <mesh position={[0, -2.23, 2]} rotation={[-Math.PI / 2, 0, 0]}>
                        <circleGeometry args={[0.8, 32]} />
                        <meshStandardMaterial color="#0277BD" />
                    </mesh>
                </group>
            )}

            {/* Environment Details */}
            {/* Trees (Pre/Post only) */}
            {stage !== 'glaciation' && [-1.5, 1.5].map((x, i) => (
                <group key={i} position={[x, -1, -2]}>
                    <mesh position={[0, 0.5, 0]}>
                        <coneGeometry args={[0.3, 1, 8]} />
                        <meshStandardMaterial color="#2E7D32" />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[0.05, 0.05, 0.4]} />
                        <meshStandardMaterial color="#3E2723" />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

// Snow particles
function Snow() {
    const count = 500;
    const ref = useRef<THREE.Points>(null);

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 10;
            arr[i * 3 + 1] = Math.random() * 10;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
        return geo;
    }, []);

    useFrame((_, delta) => {
        if (ref.current) {
            const pos = ref.current.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < count; i++) {
                pos[i * 3 + 1] -= delta * 2;
                if (pos[i * 3 + 1] < -5) pos[i * 3 + 1] = 10;
            }
            ref.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={ref} geometry={geometry}>
            <pointsMaterial color="white" size={0.05} transparent opacity={0.6} />
        </points>
    );
}

function GlacialScene({ stage }: { stage: GlacialStage }) {
    return (
        <>
            <Sky sunPosition={[10, 20, 10]} turbidity={stage === 'glaciation' ? 10 : 0.5} rayleigh={0.5} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

            <Terrain stage={stage} />

            {stage === 'glaciation' && <Snow />}

            <OrbitControls minDistance={5} maxDistance={15} maxPolarAngle={Math.PI / 2 - 0.1} />
        </>
    );
}

export default function GlacialViz() {
    const [stage, setStage] = useState<GlacialStage>('pre-glaciation');

    const stages = glacialData.stages as Array<{
        id: string;
        name: string;
        description: string;
    }>;

    return (
        <div className="w-full h-full relative bg-slate-950">
            <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
                <Suspense fallback={null}>
                    <GlacialScene stage={stage} />
                </Suspense>
            </Canvas>

            {/* Stage Controls */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 bg-slate-900/50 p-1 rounded-xl backdrop-blur-md">
                {stages.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => setStage(s.id as GlacialStage)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${stage === s.id
                            ? 'bg-cyan-600 text-white shadow-lg'
                            : 'text-slate-400 hover:text-white hover:bg-white/10'
                            }`}
                    >
                        {s.name.split('(')[0].trim()}
                    </button>
                ))}
            </div>

            {/* Info Panel */}
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md rounded-xl border border-cyan-500/30 p-5">
                <h3 className="text-xl font-bold text-white mb-2">
                    {stages.find(s => s.id === stage)?.name}
                </h3>
                <p className="text-slate-300">
                    {stages.find(s => s.id === stage)?.description}
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                    {glacialData.stages.find(s => s.id === stage)?.features.map((f, i) => (
                        <span key={i} className="px-2 py-1 bg-cyan-900/40 text-cyan-200 text-xs rounded border border-cyan-700/50">
                            {f}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

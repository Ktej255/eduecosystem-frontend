"use client";

import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html, useGLTF, Line } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Shield, Rocket, Target, Crosshair, Radio, Radar, ChevronRight, Play, Info } from 'lucide-react';
import * as THREE from 'three';

// --- TS & Data ---
interface MissileSystem {
    id: string;
    name: string;
    type: string;
    range: string;
    description: string;
    status: 'operational' | 'development' | 'testing';
    developer: string;
    trajectory: 'ballistic' | 'cruise' | 'surface-to-air';
    maxHeight: number; // for viz simulation
}

const MISSILE_SYSTEMS: MissileSystem[] = [
    {
        id: 'agni-v',
        name: 'Agni-V',
        type: 'ICBM',
        range: '5,000+ km',
        description: 'Intercontinental Ballistic Missile with MIRV capability',
        status: 'operational',
        developer: 'DRDO',
        trajectory: 'ballistic',
        maxHeight: 2.5
    },
    {
        id: 'agni-p',
        name: 'Agni Prime',
        type: 'MRBM',
        range: '1,000-2,000 km',
        description: 'New generation canisterised missile',
        status: 'testing',
        developer: 'DRDO',
        trajectory: 'ballistic',
        maxHeight: 1.8
    },
    {
        id: 'brahmos',
        name: 'BrahMos',
        type: 'Cruise Missile',
        range: '290-500 km',
        description: 'Supersonic cruise missile (India-Russia joint)',
        status: 'operational',
        developer: 'BrahMos Aerospace',
        trajectory: 'cruise',
        maxHeight: 0.2 // Low altitude
    },
    {
        id: 'nirbhay',
        name: 'Nirbhay',
        type: 'Subsonic Cruise',
        range: '1,000 km',
        description: 'Long range all-weather subsonic cruise missile',
        status: 'operational',
        developer: 'DRDO',
        trajectory: 'cruise',
        maxHeight: 0.15
    },
    {
        id: 'prithvi',
        name: 'Prithvi-II',
        type: 'SRBM',
        range: '350 km',
        description: 'Surface-to-surface tactical missile',
        status: 'operational',
        developer: 'DRDO',
        trajectory: 'ballistic',
        maxHeight: 1.0
    },
    {
        id: 'akash',
        name: 'Akash NG',
        type: 'SAM',
        range: '80 km',
        description: 'Next-gen surface-to-air missile with active radar',
        status: 'testing',
        developer: 'DRDO',
        trajectory: 'surface-to-air',
        maxHeight: 0.8
    }
];

// --- 3D Components ---

function Terrain() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
            <planeGeometry args={[20, 20, 64, 64]} />
            <meshStandardMaterial color="#1a202c" wireframe />
        </mesh>
    );
}

function Missile({ type, active, maxHeight }: { type: string, active: boolean, maxHeight: number }) {
    const ref = useRef<THREE.Group>(null);
    const [t, setT] = useState(0);

    useFrame((state, delta) => {
        if (!active || !ref.current) {
            setT(0);
            if (ref.current) ref.current.position.set(-4, 0, 0);
            return;
        }

        // Increment time
        if (t < 1) {
            setT(prev => Math.min(prev + delta * 0.5, 1)); // 2 seconds duration
        } else {
            setT(0); // Loop
        }

        // Trajectory Logic
        const start = new THREE.Vector3(-4, 0, 0);
        const end = new THREE.Vector3(4, 0, 0);

        let position = new THREE.Vector3();

        if (type === 'ballistic' || type === 'surface-to-air') {
            // Parabola
            position.lerpVectors(start, end, t);
            position.y = Math.sin(t * Math.PI) * maxHeight;
        } else if (type === 'cruise') {
            // Low altitude + curve
            const mid = new THREE.Vector3(0, maxHeight, 2); // Zigzag
            if (t < 0.5) {
                position.lerpVectors(start, mid, t * 2);
            } else {
                position.lerpVectors(mid, end, (t - 0.5) * 2);
            }
        }

        ref.current.position.copy(position);
        ref.current.lookAt(position.clone().add(new THREE.Vector3(1, 0, 0))); // Simplified lookAt
    });

    return (
        <group ref={ref} position={[-4, 0, 0]}>
            <mesh rotation={[0, 0, -Math.PI / 2]}>
                <coneGeometry args={[0.1, 0.4, 8]} />
                <meshStandardMaterial color={type === 'ballistic' ? '#ef4444' : '#f59e0b'} emissive={type === 'ballistic' ? '#ef4444' : '#f59e0b'} emissiveIntensity={0.5} />
            </mesh>
            <pointLight distance={1} intensity={2} color="orange" />
        </group>
    );
}

function TrajectoryLine({ type, maxHeight }: { type: string, maxHeight: number }) {
    const points = useMemo(() => {
        const pts = [];
        const segments = 50;
        const start = new THREE.Vector3(-4, 0, 0);
        const end = new THREE.Vector3(4, 0, 0);

        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            let pos = new THREE.Vector3();

            if (type === 'ballistic' || type === 'surface-to-air') {
                pos.lerpVectors(start, end, t);
                pos.y = Math.sin(t * Math.PI) * maxHeight;
            } else if (type === 'cruise') {
                const mid = new THREE.Vector3(0, maxHeight, 2);
                if (t < 0.5) {
                    pos.lerpVectors(start, mid, t * 2);
                } else {
                    pos.lerpVectors(mid, end, (t - 0.5) * 2);
                }
            }
            pts.push(pos);
        }
        return pts;
    }, [type, maxHeight]);

    return (
        <Line points={points} color={type === 'ballistic' ? '#ef4444' : '#f59e0b'} opacity={0.3} transparent lineWidth={1} />
    );
}

function Scene({ selectedSystem }: { selectedSystem: MissileSystem | null }) {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
            <fog attach="fog" args={['#020617', 5, 20]} />

            <Terrain />

            {/* Launch Pad */}
            <mesh position={[-4, 0, 0]}>
                <boxGeometry args={[1, 0.1, 1]} />
                <meshStandardMaterial color="#334155" />
            </mesh>
            {/* Target */}
            <mesh position={[4, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
                <meshStandardMaterial color="#ef4444" opacity={0.5} transparent />
            </mesh>

            {selectedSystem && (
                <>
                    <Missile
                        type={selectedSystem.trajectory}
                        active={true}
                        maxHeight={selectedSystem.maxHeight}
                    />
                    <TrajectoryLine
                        type={selectedSystem.trajectory}
                        maxHeight={selectedSystem.maxHeight}
                    />
                </>
            )}

            <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2.2} />
        </>
    );
}


// --- Main Layout ---

export default function DefenseTechViz() {
    const [selectedSystem, setSelectedSystem] = useState<MissileSystem>(MISSILE_SYSTEMS[0]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border rounded-2xl overflow-hidden shadow-sm h-[500px]">
            {/* Left: List & Info */}
            <div className="bg-card overflow-y-auto w-full p-4 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                        <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-foreground">Defense Tech</h3>
                        <p className="text-xs text-muted-foreground">Missile Systems Registry</p>
                    </div>
                </div>

                <div className="space-y-2 flex-1">
                    {MISSILE_SYSTEMS.map(sys => (
                        <button
                            key={sys.id}
                            onClick={() => setSelectedSystem(sys)}
                            className={`w-full text-left p-3 rounded-lg border transition-all ${selectedSystem.id === sys.id
                                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                                : 'border-border hover:border-indigo-300'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <span className={`font-bold text-sm ${selectedSystem.id === sys.id ? 'text-indigo-700 dark:text-indigo-300' : 'text-muted-foreground'}`}>
                                    {sys.name}
                                </span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono uppercase ${sys.trajectory === 'ballistic' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                                    }`}>
                                    {sys.trajectory}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-1">{sys.description}</p>
                        </button>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-muted rounded-lg border border-slate-100">
                    <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
                        <Info className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">Strategic Context</span>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        {selectedSystem.type.includes('ICBM') && "ICBMs (Intercontinental Ballistic Missiles) exit the atmosphere (exospheric) for maximum range, re-entering at hypersonic speeds. Agni-V puts all of China/Europe in range."}
                        {selectedSystem.type.includes('MRBM') && "MRBM (Medium Range) bridges the gap between tactical and strategic deterrence. Agni-P is canisterised, meaning rapid deployment."}
                        {selectedSystem.type.includes('Cruise') && "Cruise missiles (like BrahMos/Nirbhay) fly at low altitudes (endospheric) to evade radar detection, hugging the terrain."}
                        {selectedSystem.type.includes('SAM') && "SAM systems (Surface-to-Air) are critical for air defense, creating an 'Iron Dome' type shield against incoming aircraft or missiles."}
                        {selectedSystem.type.includes('SRBM') && "SRBMs (Short Range) are tactical battlefield weapons, used for striking immediate enemy logistics or troop concentrations."}
                    </p>
                </div>
            </div>

            {/* Right: 3D Visualization */}
            <div className="bg-slate-950 relative border-l border-slate-800">
                <div className="absolute top-4 left-4 z-10">
                    <div className="bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                        <Play className="w-3 h-3 text-green-400 fill-green-400 animate-pulse" />
                        <span className="text-xs font-mono text-green-400">SIMULATION LIVE</span>
                    </div>
                </div>

                <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
                    <Scene selectedSystem={selectedSystem} />
                </Canvas>
            </div>
        </div>
    );
}

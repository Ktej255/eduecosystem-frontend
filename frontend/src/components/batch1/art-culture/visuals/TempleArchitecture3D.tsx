"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Stars, Text, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const TEMPLE_PARTS = [
    { name: 'Amalaka', pos: [0, 4.2, 0], desc: 'Stone disk with ridges on top of shikhara', color: '#fbbf24' },
    { name: 'Shikhara', pos: [0, 2.5, 0], desc: 'Mountain-like spire representing Meru', color: '#f59e0b' },
    { name: 'Garbhagriha', pos: [0, 0.5, 0], desc: 'Sanctum Sanctorum where deity resides', color: '#d97706' },
    { name: 'Mandapa', pos: [2, 0.5, 0], desc: 'Pillared hall for assembly of devotees', color: '#eab308' },
    { name: 'Antarala', pos: [1, 0.5, 0], desc: 'Vestibule connecting Garbhagriha and Mandapa', color: '#ca8a04' },
];

function StylizedTemple() {
    return (
        <group>
            {/* Adhisthana (Base) */}
            <mesh position={[0.5, 0, 0]}>
                <boxGeometry args={[6, 0.4, 4]} />
                <meshStandardMaterial color="#8b5e3c" />
            </mesh>

            {/* Garbhagriha (Main Cube) */}
            <mesh position={[0, 0.7, 0]}>
                <boxGeometry args={[2, 1.4, 2]} />
                <meshStandardMaterial color="#a0522d" />
            </mesh>

            {/* Shikhara (Tapering Spire) */}
            <mesh position={[0, 2.8, 0]}>
                <coneGeometry args={[1.2, 3, 4]} />
                <meshStandardMaterial color="#cd853f" />
            </mesh>

            {/* Amalaka (Disk on top) */}
            <mesh position={[0, 4.3, 0]}>
                <cylinderGeometry args={[0.4, 0.5, 0.2, 16]} />
                <meshStandardMaterial color="#d2b48c" />
            </mesh>

            {/* Mandapa (Pillared Hall) */}
            <mesh position={[2.5, 0.7, 0]}>
                <boxGeometry args={[2.5, 1, 3]} />
                <meshStandardMaterial color="#bc8f8f" />
            </mesh>

            {/* Pillars */}
            {[[-1.2, 0, 1.2], [1.2, 0, 1.2], [-1.2, 0, -1.2], [1.2, 0, -1.2]].map((pos, i) => (
                <mesh key={i} position={[2.5 + pos[0], 0.4, pos[2]]}>
                    <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
                    <meshStandardMaterial color="#8b5e3c" />
                </mesh>
            ))}
        </group>
    );
}

function Label({ name, position, description }: { name: string, position: [number, number, number], description: string }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Html position={position} center distanceFactor={10}>
            <div
                className={`flex flex-col items-center transition-all cursor-pointer ${hovered ? 'scale-110' : 'scale-100'}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="w-1 h-8 bg-card/50 mb-1" />
                <div className={`px-2 py-1 rounded-md text-[10px] whitespace-nowrap font-bold shadow-lg border ${hovered ? 'bg-amber-500 text-white border-white' : 'bg-black/50 text-amber-200 border-amber-900/50'}`}>
                    {name}
                </div>
                {hovered && (
                    <div className="mt-2 w-48 p-2 bg-slate-900 text-white text-[9px] rounded border border-amber-500/50 shadow-2xl backdrop-blur-md">
                        <p className="font-bold text-amber-400 mb-1">{name}</p>
                        <p className="leading-tight opacity-90">{description}</p>
                    </div>
                )}
            </div>
        </Html>
    );
}

export default function TempleArchitecture3D() {
    return (
        <div className="w-full h-[500px] bg-slate-950 rounded-2xl overflow-hidden relative border border-amber-900/30">
            <div className="absolute top-6 left-6 z-10">
                <h3 className="text-amber-500 font-black text-xl tracking-tighter uppercase italic">Temple Anatomy</h3>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Nagara Style | 3D Interactive Explorer</p>
            </div>

            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[8, 5, 8]} fov={45} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffd4a3" />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#fff" />

                <group position={[0, -1, 0]}>
                    <StylizedTemple />

                    {TEMPLE_PARTS.map((part, i) => (
                        <Label key={i} name={part.name} position={part.pos as any} description={part.desc} />
                    ))}
                </group>

                <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.1} minDistance={5} maxDistance={20} />
            </Canvas>

            <div className="absolute bottom-6 right-6 z-10 bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Exam Insight</span>
                </div>
                <p className="text-[11px] text-amber-100/80 leading-relaxed italic mb-4">
                    "Differentiate between Nagara (North) and Dravida (South). Nagara lacks elaborate gatehouses (Gopurams) and water tanks unlike Dravida style."
                </p>
                <Link href="/student/batch1/art-culture/2">
                    <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700 text-white text-[10px] h-8">
                        Deep Dive: Nagara Style
                        <ChevronRight className="ml-1 w-3 h-3" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}

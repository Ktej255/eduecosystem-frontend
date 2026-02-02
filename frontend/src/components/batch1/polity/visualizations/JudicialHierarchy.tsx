"use client";

import { Gavel, Landmark, ShieldAlert, Users, Info, Scale, Sparkles } from 'lucide-react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Html, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";
import GlobalLightingManager from "@/components/batch1/geography/3d/shared/GlobalLightingManager";

interface CourtLevel {
    id: string;
    name: string;
    title: string;
    type: string;
    icon: any;
    color: string;
    bg: string;
    border: string;
    description: string;
    jurisdictions: string[];
    upscTip: string;
}

const COURT_LEVELS: CourtLevel[] = [
    {
        id: 'supreme',
        name: 'Supreme Court',
        title: 'Guardian of the Constitution',
        type: 'Apex Level',
        icon: Landmark,
        color: 'text-amber-600',
        bg: 'bg-amber-100 dark:bg-amber-900/30',
        border: 'border-amber-200 dark:border-amber-800',
        description: 'The highest court of justice in India. It is a court of record and has power to punish for contempt of itself.',
        jurisdictions: ['Original', 'Appellate', 'Advisory', 'Writ'],
        upscTip: 'Art 124-147. Judges appointed by President under Collegium system. Retirement age: 65 years.'
    },
    {
        id: 'high',
        name: 'High Courts',
        title: 'Highest Judicial Organ in State',
        type: 'State Level',
        icon: Gavel,
        color: 'text-indigo-600',
        bg: 'bg-indigo-100 dark:bg-indigo-900/30',
        border: 'border-indigo-200 dark:border-indigo-800',
        description: 'Each state has a High Court, though two or more states can have a common High Court (e.g., Punjab & Haryana).',
        jurisdictions: ['Original', 'Appellate', 'Supervisory', 'Writ (Art 226)'],
        upscTip: 'Art 214-231. Judges appointed by President in consultation with CJI, Governor, and CJ of HC. Retirement age: 62 years.'
    },
    {
        id: 'subordinate',
        name: 'Subordinate Courts',
        title: 'District & Sessions Courts',
        type: 'District Level',
        icon: Users,
        color: 'text-emerald-600',
        bg: 'bg-emerald-100 dark:bg-emerald-900/30',
        border: 'border-emerald-200 dark:border-emerald-800',
        description: 'Includes District Courts, Munsif Courts, and Lok Adalats. They deal with civil and criminal cases at the grassroots level.',
        jurisdictions: ['Civil (District Judge)', 'Criminal (Sessions Judge)'],
        upscTip: 'Art 233-237. District Judges appointed by Governor in consultation with High Court.'
    }
];

function PyramidSection({
    level,
    isSelected,
    onClick,
    yPos,
    height,
    topRadius,
    bottomRadius
}: {
    level: any,
    isSelected: boolean,
    onClick: () => void,
    yPos: number,
    height: number,
    topRadius: number,
    bottomRadius: number
}) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, isSelected ? yPos + 0.2 : yPos, 0.1);
            if (isSelected) {
                meshRef.current.rotation.y += 0.005;
            }
        }
    });

    const glassColor = isSelected ? (level.id === 'supreme' ? '#d97706' : level.id === 'high' ? '#4f46e5' : '#059669') : '#1e293b';

    return (
        <group onClick={onClick}>
            <mesh ref={meshRef} position={[0, yPos, 0]}>
                <cylinderGeometry args={[topRadius, bottomRadius, height, 4]} />
                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    thickness={0.5}
                    chromaticAberration={0.02}
                    anisotropy={0.1}
                    distortion={0.1}
                    distortionScale={0.1}
                    temporalDistortion={0.1}
                    color={glassColor}
                    emissive={isSelected ? glassColor : 'black'}
                    emissiveIntensity={isSelected ? 0.5 : 0}
                    transparent
                    opacity={0.9}
                />
            </mesh>
            <Html position={[0, yPos, 2]} center distanceFactor={10}>
                <div
                    className={`cursor-pointer flex flex-col items-center transition-all duration-500 ${isSelected ? 'scale-110' : 'scale-100 opacity-60'}`}
                >
                    <span className="text-[14px] font-black text-white uppercase tracking-tighter whitespace-nowrap">
                        {level.name}
                    </span>
                    <span className="text-[8px] font-bold text-white/60 uppercase tracking-widest whitespace-nowrap">
                        {level.type}
                    </span>
                </div>
            </Html>
        </group>
    );
}

export default function JudicialHierarchy() {
    const [selectedLevel, setSelectedLevel] = useState<CourtLevel>(COURT_LEVELS[0]);

    return (
        <div className="w-full bg-slate-950 rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row h-full min-h-[650px] relative">

            {/* Left: 3D Pyramid Visual */}
            <div className="flex-1 relative bg-slate-900/40">
                <div className="absolute top-8 left-8 z-10">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30`}>
                            <Scale className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-black uppercase tracking-tight text-white">Judiciary 3D</h2>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-indigo-400/70">Integrated System Concept</p>
                        </div>
                    </div>
                </div>

                <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
                    <ambientLight intensity={0.4} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#4f46e5" />
                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

                    <group scale={[1.2, 1.2, 1.2]} position={[0, -1, 0]}>
                        {/* Subordinate - 50% bottom */}
                        <PyramidSection
                            level={COURT_LEVELS[2]}
                            isSelected={selectedLevel.id === 'subordinate'}
                            onClick={() => setSelectedLevel(COURT_LEVELS[2])}
                            yPos={-1.5}
                            height={1.5}
                            topRadius={2}
                            bottomRadius={3}
                        />
                        {/* High Court - Middle */}
                        <PyramidSection
                            level={COURT_LEVELS[1]}
                            isSelected={selectedLevel.id === 'high'}
                            onClick={() => setSelectedLevel(COURT_LEVELS[1])}
                            yPos={0}
                            height={1.5}
                            topRadius={1}
                            bottomRadius={2}
                        />
                        {/* Supreme Court - Top */}
                        <PyramidSection
                            level={COURT_LEVELS[0]}
                            isSelected={selectedLevel.id === 'supreme'}
                            onClick={() => setSelectedLevel(COURT_LEVELS[0])}
                            yPos={1.25}
                            height={1}
                            topRadius={0.01}
                            bottomRadius={1}
                        />
                    </group>

                    <OrbitControls enableZoom={false} enablePan={false} />
                    <GlobalLightingManager />
                </Canvas>
            </div>

            {/* Right: Info Details */}
            <div className="w-full md:w-96 border-t md:border-t-0 md:border-l border-white/10 p-8 flex flex-col bg-slate-900/60 backdrop-blur-xl shrink-0 overflow-y-auto custom-scrollbar">
                <div key={selectedLevel.id} className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className={`p-4 rounded-2xl ${selectedLevel?.bg || ''} ${selectedLevel?.color || ''} border border-current opacity-80 shadow-lg`}>
                            {selectedLevel?.icon && <selectedLevel.icon className="w-8 h-8" />}
                        </div>
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-black tracking-widest uppercase border-current ${selectedLevel?.color || ''}`}>
                            {String(selectedLevel?.type || '')}
                        </span>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black tracking-tight text-white uppercase italic">
                            {selectedLevel.name}
                        </h3>
                        <p className="text-sm font-bold text-indigo-400 mt-1 uppercase tracking-wide">
                            {selectedLevel.title}
                        </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                        {selectedLevel.description}
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                                <Sparkles className="w-3 h-3 text-indigo-400" />
                                Jurisdiction Scope
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedLevel.jurisdictions.map(j => (
                                    <span key={j} className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${selectedLevel?.bg || ''} ${selectedLevel?.color || ''} border-none px-3 font-bold`}>{j}</span>
                                ))}
                            </div>
                        </div>

                        <div className={`p-4 rounded-2xl ${selectedLevel.bg} border-l-4 border-l-current shadow-inner`}>
                            <div className="flex items-center gap-2 mb-2 text-white">
                                <Info className={`w-4 h-4 ${selectedLevel.color}`} />
                                <h4 className="text-xs font-black uppercase tracking-widest">UPSC Quick Facts</h4>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                {selectedLevel.upscTip}
                            </p>
                        </div>
                    </div>

                    <div className="pt-6 mt-auto">
                        <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest text-center px-4 leading-relaxed group">
                            India has an <span className="text-indigo-400 group-hover:text-amber-400 transition-colors">"Integrated"</span> Judiciary system.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

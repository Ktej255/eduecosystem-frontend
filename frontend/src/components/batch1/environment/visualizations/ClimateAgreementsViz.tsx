"use client";

import { Globe2, FileText, AlertTriangle, CheckCircle, Info, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Html, MeshTransmissionMaterial, OrbitControls, useHelper, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Agreement {
    id: string;
    year: string;
    name: string;
    location: string;
    focus: string;
    indiaStatus: 'ratified' | 'signed' | 'observer';
    keyPoints: string[];
    upscTip: string;
}

import { Badge } from "@/components/ui/badge";

const CLIMATE_AGREEMENTS: Agreement[] = [
    {
        id: 'stockholm',
        year: '1972',
        name: 'Stockholm Conference',
        location: 'Stockholm, Sweden',
        focus: 'First UN Conference on Human Environment',
        indiaStatus: 'ratified',
        keyPoints: [
            'UNEP established',
            '26 Principles adopted',
            'June 5 = World Environment Day'
        ],
        upscTip: 'Indira Gandhi was the only Head of State to attend. Slogan: "Only One Earth"'
    },
    {
        id: 'montreal',
        year: '1987',
        name: 'Montreal Protocol',
        location: 'Montreal, Canada',
        focus: 'Ozone Layer Protection',
        indiaStatus: 'ratified',
        keyPoints: [
            'Phaseout of CFCs, HCFCs',
            'Kigali Amendment (2016) for HFCs',
            'Most successful environmental treaty'
        ],
        upscTip: 'India ratified Kigali Amendment in 2021. HFC phasedown: 80% by 2047'
    },
    {
        id: 'rio',
        year: '1992',
        name: 'Earth Summit (Rio)',
        location: 'Rio de Janeiro, Brazil',
        focus: 'Sustainable Development',
        indiaStatus: 'ratified',
        keyPoints: [
            'UNFCCC established',
            'CBD (Biodiversity) adopted',
            'Agenda 21 action plan'
        ],
        upscTip: 'Three Rio Conventions: UNFCCC, CBD, UNCCD. Principle of CBDR introduced'
    },
    {
        id: 'kyoto',
        year: '1997',
        name: 'Kyoto Protocol',
        location: 'Kyoto, Japan',
        focus: 'Binding Emission Targets',
        indiaStatus: 'ratified',
        keyPoints: [
            'Developed countries = binding targets',
            'CDM, JI, ET mechanisms',
            'USA never ratified'
        ],
        upscTip: 'India had no binding targets (developing country). CDM projects common in India'
    },
    {
        id: 'cop21',
        year: '2015',
        name: 'Paris Agreement',
        location: 'Paris, France (COP21)',
        focus: 'Limit warming to 1.5-2°C',
        indiaStatus: 'ratified',
        keyPoints: [
            'NDCs from all countries',
            'Global Stocktake every 5 years',
            '$100B/year climate finance goal'
        ],
        upscTip: 'India\'s NDC: 45% emissions intensity reduction by 2030. Net Zero by 2070'
    },
    {
        id: 'glasgow',
        year: '2021',
        name: 'Glasgow Climate Pact',
        location: 'Glasgow, UK (COP26)',
        focus: 'Ratcheting of ambition',
        indiaStatus: 'ratified',
        keyPoints: [
            'Phasedown of coal (not phaseout)',
            'Forests & Land Use Declaration',
            'Methane pledge (India not signed)'
        ],
        upscTip: 'India\'s Panchamrit targets announced. Did NOT sign methane pledge or coal phaseout'
    },
    {
        id: 'kunming',
        year: '2022',
        name: 'Kunming-Montreal Framework',
        location: 'Montreal, Canada (COP15 CBD)',
        focus: 'Biodiversity - 30x30 Target',
        indiaStatus: 'ratified',
        keyPoints: [
            '30% land & sea protected by 2030',
            '$200B/year biodiversity finance',
            'Halt species extinction'
        ],
        upscTip: 'GBF replaces Aichi Targets. India\'s current protected area: ~22%'
    },
];

function AgreementCard({ agreement, isSelected, onClick, position }: {
    agreement: Agreement,
    isSelected: boolean,
    onClick: () => void,
    position: [number, number, number]
}) {
    return (
        <group position={position} onClick={onClick}>
            <Float speed={isSelected ? 3 : 1} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh>
                    <boxGeometry args={[2.5, 1.5, 0.1]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={0.2}
                        chromaticAberration={0.02}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.1}
                        temporalDistortion={0.1}
                        color={isSelected ? '#059669' : '#1e293b'}
                        emissive={isSelected ? '#10b981' : 'black'}
                        emissiveIntensity={isSelected ? 0.5 : 0}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
            </Float>
            <Html center distanceFactor={10}>
                <div
                    className={`cursor-pointer flex flex-col items-center gap-1 transition-all duration-500 ${isSelected ? 'scale-110' : 'scale-100 opacity-60'}`}
                >
                    <span className="text-xl font-black text-white">{agreement.year}</span>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter text-center whitespace-normal w-24">
                        {agreement.name}
                    </span>
                </div>
            </Html>
        </group>
    );
}

function MiniGlobe({ location }: { location: string }) {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame(() => {
        if (meshRef.current) meshRef.current.rotation.y += 0.01;
    });

    return (
        <group>
            <mesh ref={meshRef}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial
                    color="#0a1a1f"
                    emissive="#10b981"
                    emissiveIntensity={0.5}
                    shininess={100}
                    transparent
                    opacity={0.9}
                />
            </mesh>
            <mesh scale={[1.05, 1.05, 1.05]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#34d399" wireframe transparent opacity={0.1} />
            </mesh>
            <Html position={[0, 1.5, 0]} center>
                <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30 text-[10px] text-emerald-400 font-bold whitespace-nowrap">
                    {location}
                </div>
            </Html>
        </group>
    );
}

export default function ClimateAgreementsViz() {
    const [selectedId, setSelectedId] = useState('paris');
    const selected = CLIMATE_AGREEMENTS.find(a => a.id === selectedId) || CLIMATE_AGREEMENTS[4];

    return (
        <div className="w-full h-[650px] bg-slate-950 rounded-2xl border border-white/10 overflow-hidden relative flex flex-col">
            <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-6 z-10 border-b border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                        <Globe2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-xl">Climate History 3D</h3>
                        <p className="text-sm text-emerald-400/70">From Stockholm to Montreal | Global Commitment Timeline</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 relative flex">
                <div className="w-2/3 relative h-full">
                    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                        <ambientLight intensity={0.4} />
                        <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
                        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

                        {/* Agreements Ribbon */}
                        {CLIMATE_AGREEMENTS.map((a, i) => (
                            <AgreementCard
                                key={a.id}
                                agreement={a}
                                isSelected={selectedId === a.id}
                                onClick={() => setSelectedId(a.id)}
                                position={[(i - 3) * 3, Math.sin(i * 0.5) * 0.5, 0]}
                            />
                        ))}

                        <OrbitControls enableZoom={false} enablePan={false} />
                    </Canvas>
                </div>

                <div className="w-1/3 p-6 z-10 bg-slate-900/40 backdrop-blur-xl border-l border-white/10 overflow-y-auto custom-scrollbar">
                    <div className="space-y-6">
                        <div className="h-40 relative">
                            <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
                                <ambientLight intensity={0.5} />
                                <pointLight position={[5, 5, 5]} intensity={1} color="#10b981" />
                                <MiniGlobe location={selected.location} />
                            </Canvas>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-3xl font-black text-white">{selected.year}</span>
                                <Badge className={selected.indiaStatus === 'ratified' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-slate-500/20 text-slate-400 border-slate-500/30'}>
                                    India: {selected.indiaStatus}
                                </Badge>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-1">{selected.name}</h4>
                            <p className="text-sm text-emerald-400 font-medium mb-4">{selected.focus}</p>

                            <div className="space-y-3 mb-6">
                                {selected.keyPoints.map((point, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm bg-white/5 p-3 rounded-xl border border-white/5">
                                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300 leading-relaxed">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-500/10 rounded-2xl p-4 border border-amber-500/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles className="w-4 h-4 text-amber-400" />
                                    <span className="text-xs font-black text-amber-500 uppercase tracking-widest">UPSC Perspective</span>
                                </div>
                                <p className="text-xs text-amber-200/80 leading-relaxed font-medium">
                                    {selected.upscTip}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Nav Helper */}
            <div className="absolute bottom-6 left-6 z-10 flex gap-2">
                {CLIMATE_AGREEMENTS.map((a) => (
                    <button
                        key={a.id}
                        onClick={() => setSelectedId(a.id)}
                        className={`w-3 h-3 rounded-full transition-all ${selectedId === a.id ? 'bg-emerald-500 w-8' : 'bg-slate-700 hover:bg-slate-500'}`}
                    />
                ))}
            </div>
        </div>
    );
}


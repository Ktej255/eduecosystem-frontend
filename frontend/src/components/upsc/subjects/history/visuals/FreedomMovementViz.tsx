"use client";

import { Flag, Users, FileText, Flame, Star, ChevronLeft, ChevronRight, Info, Sparkles } from 'lucide-react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Html, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera, CurveModifier, Line } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";
import GlobalLightingManager from "@/components/upsc/subjects/geography/3d/shared/GlobalLightingManager";

interface Movement {
    id: string;
    year: string;
    name: string;
    leader: string;
    type: 'movement' | 'act' | 'event' | 'organization';
    description: string;
    upscTip: string;
}

const FREEDOM_MOVEMENTS: Movement[] = [
    {
        id: 'inc-formation',
        year: '1885',
        name: 'INC Formation',
        leader: 'A.O. Hume',
        type: 'organization',
        description: 'Indian National Congress founded in Bombay with 72 delegates',
        upscTip: 'First President: W.C. Bonnerjee. "Safety Valve" theory associated with Lala Lajpat Rai\'s criticism'
    },
    {
        id: 'partition-bengal',
        year: '1905',
        name: 'Partition of Bengal',
        leader: 'Lord Curzon',
        type: 'act',
        description: 'Divided Bengal on religious lines, sparked Swadeshi Movement',
        upscTip: 'Annulled in 1911. Led to rise of revolutionary nationalism'
    },
    {
        id: 'swadeshi',
        year: '1905',
        name: 'Swadeshi Movement',
        leader: 'Tilak, Bipin Pal',
        type: 'movement',
        description: 'Boycott of British goods, promotion of Indian industries',
        upscTip: 'First mass movement. Boycott of Manchester cloth, Liverpool salt'
    },
    {
        id: 'muslim-league',
        year: '1906',
        name: 'Muslim League',
        leader: 'Aga Khan III',
        type: 'organization',
        description: 'All India Muslim League founded at Dhaka',
        upscTip: 'Founded to safeguard Muslim political rights. Role in Pakistan demand later'
    },
    {
        id: 'lucknow-pact',
        year: '1916',
        name: 'Lucknow Pact',
        leader: 'Tilak, Jinnah',
        type: 'event',
        description: 'INC-Muslim League unity. Separate electorates accepted',
        upscTip: 'Jinnah called "Ambassador of Hindu-Muslim Unity" by Sarojini Naidu'
    },
    {
        id: 'rowlatt',
        year: '1919',
        name: 'Rowlatt Act',
        leader: 'British Govt',
        type: 'act',
        description: 'Indefinite detention without trial. Called "Black Act"',
        upscTip: 'Led to Jallianwala Bagh massacre (April 13, 1919)'
    },
    {
        id: 'ncm',
        year: '1920',
        name: 'Non-Cooperation',
        leader: 'Mahatma Gandhi',
        type: 'movement',
        description: 'First mass movement under Gandhi. Boycott of councils, courts, schools',
        upscTip: 'Suspended after Chauri Chaura (Feb 1922). Tilak Swaraj Fund started'
    },
    {
        id: 'cdm',
        year: '1930',
        name: 'Civil Disobedience',
        leader: 'Mahatma Gandhi',
        type: 'movement',
        description: 'Salt March (Dandi, 390 km). Breaking salt laws',
        upscTip: 'Started March 12, 1930. Gandhi-Irwin Pact (1931) suspended it'
    },
    {
        id: 'rrt',
        year: '1942',
        name: 'Quit India',
        leader: 'Mahatma Gandhi',
        type: 'movement',
        description: '"Do or Die" call. Parallel governments formed',
        upscTip: 'August 8, 1942 at Gowalia Tank. All leaders arrested. Most radical movement'
    },
    {
        id: 'ina',
        year: '1943',
        name: 'INA Reorganized',
        leader: 'Subhas Bose',
        type: 'organization',
        description: 'Indian National Army in Southeast Asia. "Delhi Chalo" slogan',
        upscTip: 'First formed by Mohan Singh (1942). INA trials at Red Fort (1945)'
    },
    {
        id: 'independence',
        year: '1947',
        name: 'Independence',
        leader: 'Nehru, Patel',
        type: 'event',
        description: 'India gains independence. Partition and transfer of power',
        upscTip: 'Mountbatten Plan (June 3, 1947). Indian Independence Act (July 18, 1947)'
    }
];

const TYPE_COLORS = {
    movement: 'bg-orange-500',
    act: 'bg-red-500',
    event: 'bg-blue-500',
    organization: 'bg-emerald-500'
};

const TYPE_ICONS = {
    movement: Flame,
    act: FileText,
    event: Star,
    organization: Users
};

function EventCard({ movement, isSelected, onClick, position }: {
    movement: Movement,
    isSelected: boolean,
    onClick: () => void,
    position: [number, number, number]
}) {
    const TypeIcon = TYPE_ICONS[movement.type];

    return (
        <group position={position} onClick={onClick}>
            <Float speed={isSelected ? 4 : 1} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh>
                    <boxGeometry args={[2.5, 1.8, 0.1]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={0.2}
                        chromaticAberration={0.02}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.1}
                        temporalDistortion={0.1}
                        color={isSelected ? '#f97316' : '#1e293b'}
                        emissive={isSelected ? '#f97316' : 'black'}
                        emissiveIntensity={isSelected ? 0.5 : 0}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
            </Float>
            <Html center distanceFactor={10}>
                <div
                    className={`cursor-pointer flex flex-col items-center gap-1 transition-all duration-500 w-32 ${isSelected ? 'scale-110' : 'scale-100 opacity-60'}`}
                >
                    <div className={`p-2 rounded-lg bg-orange-500/20 text-orange-500 border border-orange-500/30 mb-2`}>
                        <TypeIcon className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-black text-white text-center leading-tight">{movement.year}</span>
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-tighter text-center line-clamp-2">
                        {movement.name}
                    </span>
                </div>
            </Html>
        </group>
    );
}

function JourneyPath() {
    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < 11; i++) {
            p.push(new THREE.Vector3((i - 5) * 4, Math.sin(i * 0.8) * 2, -i * 2));
        }
        return new THREE.CatmullRomCurve3(p);
    }, []);

    const curvePoints = useMemo(() => points.getPoints(100), [points]);

    return (
        <Line
            points={curvePoints}
            color="#f97316"
            lineWidth={2}
            transparent
            opacity={0.3}
            dashed
            dashScale={2}
            dashSize={1}
            gapSize={1}
        />
    );
}

export default function FreedomMovementViz() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = FREEDOM_MOVEMENTS[selectedIndex];

    const goNext = () => setSelectedIndex(prev => Math.min(prev + 1, FREEDOM_MOVEMENTS.length - 1));
    const goPrev = () => setSelectedIndex(prev => Math.max(prev - 1, 0));

    // Dynamic positions along the curve for cards
    const cardPositions = useMemo(() => {
        return FREEDOM_MOVEMENTS.map((_, i) => [
            (i - 5) * 4,
            Math.sin(i * 0.8) * 2,
            -i * 2
        ] as [number, number, number]);
    }, []);

    return (
        <div className="w-full h-[650px] bg-slate-950 rounded-2xl border border-white/10 overflow-hidden relative flex flex-col shadow-2xl">
            <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 p-6 z-10 border-b border-white/10 backdrop-blur-md">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-500/20 rounded-lg">
                            <Flag className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-xl uppercase italic">Freedom Trail 3D</h3>
                            <p className="text-sm text-orange-400/70 font-medium">1885 - 1947 | The Journey to Independence</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={goPrev} disabled={selectedIndex === 0} className="p-2 rounded-xl bg-card/5 border border-white/10 text-white disabled:opacity-20 hover:bg-orange-500/20 transition-all">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={goNext} disabled={selectedIndex === FREEDOM_MOVEMENTS.length - 1} className="p-2 rounded-xl bg-card/5 border border-white/10 text-white disabled:opacity-20 hover:bg-orange-500/20 transition-all">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 relative flex">
                <div className="flex-1 relative h-full">
                    <Canvas camera={{ position: [0, 2, 12], fov: 45 }}>
                        <ambientLight intensity={0.4} />
                        <pointLight position={[10, 10, 10]} intensity={1} color="#f97316" />
                        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

                        <group position={[-(selectedIndex - 5) * 4, -Math.sin(selectedIndex * 0.8) * 2, selectedIndex * 2]}>
                            <JourneyPath />
                            {FREEDOM_MOVEMENTS.map((m, i) => (
                                <EventCard
                                    key={m.id}
                                    movement={m}
                                    isSelected={selectedIndex === i}
                                    onClick={() => setSelectedIndex(i)}
                                    position={cardPositions[i]}
                                />
                            ))}
                        </group>

                        <OrbitControls enableZoom={false} enablePan={false} />
                        <GlobalLightingManager />
                    </Canvas>

                    {/* Desktop Overlay Details */}
                    <div className="absolute bottom-8 right-8 w-96 z-10 space-y-4 pointer-events-none">
                        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 pointer-events-auto shadow-2xl transition-all duration-700">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-sm font-black text-orange-500 uppercase tracking-widest">{selected.year}</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full ${TYPE_COLORS[selected.type]} text-white font-bold opacity-80 uppercase`}>
                                    {selected.type}
                                </span>
                            </div>
                            <h4 className="text-2xl font-black text-white mb-2 leading-tight uppercase italic">{selected.name}</h4>
                            <p className="text-xs text-orange-400 font-bold mb-3 uppercase tracking-tighter">Leader/Pivot: {selected.leader}</p>
                            <p className="text-sm text-slate-300 leading-relaxed font-medium mb-4">{selected.description}</p>

                            <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles className="w-4 h-4 text-amber-500" />
                                    <span className="text-xs font-black text-amber-500 uppercase tracking-widest">UPSC High Yield</span>
                                </div>
                                <p className="text-[11px] text-amber-200/80 leading-relaxed font-medium">
                                    {selected.upscTip}
                                </p>
                            </div>
                        </div>

                        {/* Progress */}
                        <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-3 border border-white/5 pointer-events-auto">
                            <div className="flex justify-between items-center mb-2 px-1">
                                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Movement Stage</span>
                                <span className="text-[10px] font-black text-white">{selectedIndex + 1} / {FREEDOM_MOVEMENTS.length}</span>
                            </div>
                            <div className="h-1.5 w-full bg-card/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000"
                                    style={{ width: `${((selectedIndex + 1) / FREEDOM_MOVEMENTS.length) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stage Indicators */}
            <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-2">
                {FREEDOM_MOVEMENTS.map((m, i) => (
                    <button
                        key={m.id}
                        onClick={() => setSelectedIndex(i)}
                        className={`w-1.5 transition-all duration-500 rounded-full h-8 ${selectedIndex === i ? 'bg-orange-500 h-12' : 'bg-slate-800 hover:bg-slate-600'}`}
                        title={m.name}
                    />
                ))}
            </div>
        </div>
    );
}

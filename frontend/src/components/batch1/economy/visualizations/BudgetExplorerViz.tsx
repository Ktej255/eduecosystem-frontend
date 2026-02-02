"use client";

import { ArrowRight, PieChart, TrendingUp, IndianRupee, Sparkles } from 'lucide-react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Html, MeshTransmissionMaterial, OrbitControls, Box, Cylinder, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";
import GlobalLightingManager from "@/components/batch1/geography/3d/shared/GlobalLightingManager";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// --- Data ---
const INFLOW_DATA = [
    { name: 'Borrowings & Liabilities', size: 28, fill: '#ef4444' }, // Deficit financing
    { name: 'Income Tax', size: 19, fill: '#3b82f6' },
    { name: 'GST', size: 18, fill: '#8b5cf6' },
    { name: 'Corporation Tax', size: 17, fill: '#06b6d4' },
    { name: 'Non-Tax Revenue', size: 7, fill: '#10b981' },
    { name: 'Union Excise Duties', size: 5, fill: '#f59e0b' },
    { name: 'Customs', size: 4, fill: '#ec4899' },
    { name: 'Non-Debt Capital Receipts', size: 2, fill: '#6366f1' },
];

const OUTFLOW_DATA = [
    { name: 'Interest Payments', size: 20, fill: '#ef4444' }, // Debt servicing
    { name: 'States Share of Taxes', size: 20, fill: '#f97316' },
    { name: 'Central Sector Schemes', size: 16, fill: '#3b82f6' },
    { name: 'Centrally Sponsored Schemes', size: 8, fill: '#06b6d4' },
    { name: 'Finance Commission Grants', size: 8, fill: '#8b5cf6' },
    { name: 'Interest Payments', size: 20, fill: '#ef4444' },
    { name: 'States Share', size: 20, fill: '#f97316' },
    { name: 'Central Schemes', size: 16, fill: '#3b82f6' },
    { name: 'Sponsored Schemes', size: 8, fill: '#06b6d4' },
    { name: 'Finance Grants', size: 8, fill: '#8b5cf6' },
    { name: 'Defence', size: 8, fill: '#10b981' },
    { name: 'Subsidies', size: 6, fill: '#f59e0b' },
    { name: 'Pensions', size: 4, fill: '#64748b' },
    { name: 'Other Exp', size: 10, fill: '#94a3b8' },
];

function FiscalPillar({
    item,
    isSelected,
    onClick,
    position,
    heightScale
}: {
    item: any,
    isSelected: boolean,
    onClick: () => void,
    position: [number, number, number],
    heightScale: number
}) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const height = item.size * heightScale;

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1, 0.1);
            if (isSelected) {
                meshRef.current.position.y = (height / 2) + 0.2 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
            } else {
                meshRef.current.position.y = height / 2;
            }
        }
    });

    return (
        <group onClick={onClick} position={position}>
            <mesh ref={meshRef} position={[0, height / 2, 0]}>
                <boxGeometry args={[1, height, 1]} />
                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    thickness={0.5}
                    chromaticAberration={0.02}
                    anisotropy={0.1}
                    distortion={0.1}
                    distortionScale={0.1}
                    temporalDistortion={0.1}
                    color={isSelected ? item.fill : '#1e293b'}
                    emissive={isSelected ? item.fill : 'black'}
                    emissiveIntensity={isSelected ? 0.5 : 0}
                    transparent
                    opacity={0.9}
                />
            </mesh>
            <Html position={[0, height + 0.5, 0]} center distanceFactor={10}>
                <div
                    className={`cursor-pointer transition-all duration-500 ${isSelected ? 'scale-110' : 'scale-100 opacity-60'}`}
                >
                    <div className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[8px] font-black text-white uppercase tracking-tighter text-center whitespace-nowrap">
                        {item.name}
                    </div>
                </div>
            </Html>
        </group>
    );
}

function CurrencyFlow({ color, mode }: { color: string, mode: 'inflow' | 'outflow' }) {
    const pointsRef = useRef<THREE.Points>(null!);
    const count = 500;

    const [positions, speeds] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const s = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = mode === 'inflow' ? 10 + Math.random() * 5 : Math.random() * 5;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
            s[i] = 0.05 + Math.random() * 0.1;
        }
        return [pos, s];
    }, [mode]);

    useFrame(() => {
        if (!pointsRef.current) return;
        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
            if (mode === 'inflow') {
                positions[i * 3 + 1] -= speeds[i];
                if (positions[i * 3 + 1] < 0) positions[i * 3 + 1] = 10;
            } else {
                positions[i * 3 + 1] += speeds[i];
                if (positions[i * 3 + 1] > 10) positions[i * 3 + 1] = 0;
            }
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <Points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <PointMaterial
                transparent
                color={color}
                size={0.08}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.4}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

export default function BudgetExplorerViz() {
    const [mode, setMode] = useState<'inflow' | 'outflow'>('inflow');
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const data = mode === 'inflow' ? INFLOW_DATA : OUTFLOW_DATA;

    return (
        <Card className="w-full bg-slate-950 border-white/10 shadow-2xl overflow-hidden h-[650px] relative flex flex-col">
            <CardHeader className="bg-slate-900/50 backdrop-blur-md z-10 border-b border-white/10 shrink-0">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="flex items-center gap-3 text-white">
                            <div className="p-2 bg-indigo-500/20 rounded-lg">
                                <IndianRupee className="w-6 h-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight">Fiscal Pulse 3D</h3>
                        </CardTitle>
                        <CardDescription className="text-slate-400 font-medium">
                            Volumetric analysis of the Union Budget (2024-25)
                        </CardDescription>
                    </div>
                    <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl">
                        <button
                            onClick={() => { setMode('inflow'); setSelectedItem(null); }}
                            className={`px-4 py-2 text-xs font-black rounded-lg transition-all uppercase tracking-widest ${mode === 'inflow' ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                        >
                            Inflow
                        </button>
                        <button
                            onClick={() => { setMode('outflow'); setSelectedItem(null); }}
                            className={`px-4 py-2 text-xs font-black rounded-lg transition-all uppercase tracking-widest ${mode === 'outflow' ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                        >
                            Outflow
                        </button>
                    </div>
                </div>
            </CardHeader>

            <div className="flex-1 relative flex">
                <div className="flex-1 relative bg-slate-900/20">
                    <Canvas camera={{ position: [0, 5, 12], fov: 45 }}>
                        <ambientLight intensity={0.4} />
                        <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
                        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

                        <CurrencyFlow color={mode === 'inflow' ? '#10b981' : '#ef4444'} mode={mode} />

                        <group position={[0, -2, 0]}>
                            {data.map((item, i) => {
                                const rowSize = mode === 'inflow' ? 4 : 3;
                                const x = (i % rowSize - (rowSize - 1) / 2) * 2;
                                const z = Math.floor(i / rowSize) * 2 - 2;
                                return (
                                    <FiscalPillar
                                        key={item.name}
                                        item={item}
                                        isSelected={selectedItem?.name === item.name}
                                        onClick={() => setSelectedItem(item)}
                                        position={[x, 0, z]}
                                        heightScale={0.2}
                                    />
                                );
                            })}

                            {/* Grid Base */}
                            <gridHelper args={[20, 20, "#1e293b", "#0f172a"]} position={[0, -0.01, 0]} />
                        </group>

                        <OrbitControls enableZoom={false} enablePan={false} />
                        <GlobalLightingManager />
                    </Canvas>
                </div>

                {/* Right Info Panel */}
                <div className="w-80 border-l border-white/10 p-6 flex flex-col bg-slate-900/60 backdrop-blur-xl shrink-0 overflow-y-auto custom-scrollbar z-10">
                    <div className="space-y-6">
                        <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-4 h-4 text-indigo-400" />
                                <h4 className="text-xs font-black uppercase text-indigo-400 tracking-widest">Key Fact</h4>
                            </div>
                            <p className="text-sm font-medium text-slate-300 leading-relaxed italic">
                                {mode === 'inflow'
                                    ? "Borrowings remain the largest source of funds (28%), indicating a fiscal deficit."
                                    : "Interest Payments (20%) are the single largest expenditure item, limiting funds for development."}
                            </p>
                        </div>

                        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 shadow-inner">
                            <h4 className="text-sm font-black mb-4 flex items-center gap-2 text-white uppercase tracking-tighter italic">
                                <PieChart className="w-4 h-4 text-indigo-500" />
                                {selectedItem ? selectedItem.name : 'Selection Required'}
                            </h4>

                            {selectedItem ? (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="flex items-end justify-between border-b border-white/5 pb-3">
                                        <span className="text-xs text-slate-500 font-black uppercase tracking-widest">Budget Share</span>
                                        <span className="text-3xl font-black text-indigo-400 italic">{selectedItem.size}p</span>
                                    </div>
                                    <p className="text-xs text-slate-400 leading-relaxed font-bold">
                                        For every ₹1 earned/spent by the Government, <span className="text-indigo-400">{selectedItem.size} paise</span> is accounted for by this category.
                                    </p>
                                </div>
                            ) : (
                                <div className="text-xs text-slate-500 py-6 text-center italic font-medium">
                                    Click on any fiscal pillar in the 3D space for granular details.
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-auto pt-6 text-center">
                        <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest opacity-60">
                            Union Budget Data | Educational Perspective
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
}

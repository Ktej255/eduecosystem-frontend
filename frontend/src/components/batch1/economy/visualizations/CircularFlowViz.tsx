"use client";

import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html, Box, Sphere, Line } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Home, Factory, Play, Pause, Layers } from 'lucide-react';
import * as THREE from 'three';

// --- 3D Components (Hardened for Production) ---

function Building({ position, color, roofColor, label, icon: Icon }: { position: [number, number, number], color: string, roofColor: string, label: string, icon: any }) {
    const isFactory = label === "Firms";

    return (
        <group position={position}>
            {/* Base */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[1.5, 1, 1.5]} />
                <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
            </mesh>

            {/* Detailed Geometry */}
            {isFactory ? (
                <>
                    {/* Chimneys */}
                    <mesh position={[-0.4, 1.2, -0.4]}>
                        <cylinderGeometry args={[0.2, 0.2, 0.8, 16]} />
                        <meshStandardMaterial color="#475569" />
                    </mesh>
                    <mesh position={[0.4, 1.2, 0.2]}>
                        <cylinderGeometry args={[0.15, 0.15, 0.6, 16]} />
                        <meshStandardMaterial color="#475569" />
                    </mesh>
                </>
            ) : (
                <>
                    {/* Roof */}
                    <mesh position={[0, 1.25, 0]} rotation={[0, Math.PI / 4, 0]}>
                        <coneGeometry args={[1.2, 0.8, 4]} />
                        <meshStandardMaterial color={roofColor} />
                    </mesh>
                    {/* Windows */}
                    <mesh position={[0.4, 0.5, 0.76]}>
                        <boxGeometry args={[0.3, 0.3, 0.05]} />
                        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} />
                    </mesh>
                    <mesh position={[-0.4, 0.5, 0.76]}>
                        <boxGeometry args={[0.3, 0.3, 0.05]} />
                        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} />
                    </mesh>
                </>
            )}

            {/* Label */}
            <Html position={[0, 2.2, 0]} center>
                <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
                    <div className="bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-2 ring-1 ring-white/10">
                        <Icon className="w-5 h-5" style={{ color: color }} />
                        <span className="text-sm font-black text-white whitespace-nowrap tracking-tight">{label}</span>
                    </div>
                </div>
            </Html>
        </group>
    );
}

function FlowSystem({ type, isPlaying }: { type: 'real' | 'money', isPlaying: boolean }) {
    const particleCount = 20;
    const particles = useMemo(() => {
        return new Array(particleCount).fill(0).map(() => ({
            offset: Math.random(),
            speed: 0.2 + Math.random() * 0.1
        }));
    }, []);

    const curveTop = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-3, 1, 0),
        new THREE.Vector3(0, 4, 0),
        new THREE.Vector3(3, 1, 0)
    );

    const curveBottom = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(3, 1, 0),
        new THREE.Vector3(0, -2, 0),
        new THREE.Vector3(-3, 1, 0)
    );

    return (
        <group>
            {/* Paths Visuals - Volumetric Tubes */}
            {type === 'real' ? (
                <>
                    <mesh>
                        <tubeGeometry args={[curveTop, 64, 0.04, 8, false]} />
                        <meshStandardMaterial color="#3b82f6" transparent opacity={0.4} emissive="#3b82f6" emissiveIntensity={0.5} />
                    </mesh>
                    <mesh>
                        <tubeGeometry args={[curveBottom, 64, 0.04, 8, false]} />
                        <meshStandardMaterial color="#3b82f6" transparent opacity={0.4} emissive="#3b82f6" emissiveIntensity={0.5} />
                    </mesh>
                    <Html position={[0, 3, 0]}>
                        <span className="text-[10px] font-black bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full backdrop-blur-md uppercase tracking-tighter shadow-lg">Factor Services</span>
                    </Html>
                    <Html position={[0, -1, 0]}>
                        <span className="text-[10px] font-black bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full backdrop-blur-md uppercase tracking-tighter shadow-lg">Goods & Services</span>
                    </Html>
                </>
            ) : (
                <>
                    <mesh>
                        <tubeGeometry args={[curveTop, 64, 0.06, 8, false]} />
                        <meshStandardMaterial color="#22c55e" transparent opacity={0.6} emissive="#22c55e" emissiveIntensity={1} />
                    </mesh>
                    <mesh>
                        <tubeGeometry args={[curveBottom, 64, 0.06, 8, false]} />
                        <meshStandardMaterial color="#22c55e" transparent opacity={0.6} emissive="#22c55e" emissiveIntensity={1} />
                    </mesh>
                    <Html position={[0, 2.5, 0]}>
                        <span className="text-[10px] font-black bg-green-600/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full backdrop-blur-md uppercase tracking-tighter shadow-lg">Factor Payments</span>
                    </Html>
                    <Html position={[0, -0.5, 0]}>
                        <span className="text-[10px] font-black bg-green-600/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full backdrop-blur-md uppercase tracking-tighter shadow-lg">Consumption Exp.</span>
                    </Html>
                </>
            )}

            {/* Particles */}
            {particles.map((p, i) => (
                <Particle
                    key={i}
                    config={p}
                    pathTop={curveTop}
                    pathBottom={curveBottom}
                    color={type === 'real' ? '#3b82f6' : '#22c55e'}
                    reverse={type === 'money'} // Money flows opposite to Real
                    isPlaying={isPlaying}
                />
            ))}
        </group>
    );
}

function Particle({ config, pathTop, pathBottom, color, reverse, isPlaying }: { config: { offset: number, speed: number }, pathTop: THREE.QuadraticBezierCurve3, pathBottom: THREE.QuadraticBezierCurve3, color: string, reverse: boolean, isPlaying: boolean }) {
    const ref = useRef<THREE.Mesh>(null);
    const [progress, setProgress] = useState(config.offset);

    useFrame((state, delta) => {
        if (!isPlaying || !ref.current) return;

        const speed = config.speed * delta * 0.5;
        let newProg = progress + speed;
        if (newProg > 1) newProg = 0;
        setProgress(newProg);

        let pos = new THREE.Vector3();

        if (reverse) {
            if (newProg < 0.5) {
                const t = newProg * 2;
                pos = pathTop.getPoint(1 - t);
            } else {
                const t = (newProg - 0.5) * 2;
                pos = pathBottom.getPoint(1 - t);
            }
        } else {
            if (newProg < 0.5) {
                const t = newProg * 2;
                pos = pathTop.getPoint(t);
            } else {
                const t = (newProg - 0.5) * 2;
                pos = pathBottom.getPoint(t);
            }
        }

        ref.current.position.copy(pos);
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
    );
}

function Scene({ isPlaying, showReal, showMoney }: { isPlaying: boolean, showReal: boolean, showMoney: boolean }) {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

            {/* Grid */}
            <gridHelper args={[20, 20, '#1e293b', '#0f172a']} position={[0, -0.5, 0]} />

            {/* Nodes */}
            <Building
                position={[-3, 0, 0]}
                color="#6366f1"
                roofColor="#4f46e5"
                label="Households"
                icon={Home}
            />
            <Building
                position={[3, 0, 0]}
                color="#f97316"
                roofColor="#ea580c"
                label="Firms"
                icon={Factory}
            />

            {/* Flows */}
            {showReal && <FlowSystem type="real" isPlaying={isPlaying} />}
            {showMoney && <FlowSystem type="money" isPlaying={isPlaying} />}

            <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2.2} />
        </>
    );
}

export default function CircularFlowViz() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [showReal, setShowReal] = useState(true);
    const [showMoney, setShowMoney] = useState(true);

    return (
        <Card className="w-full bg-slate-950 border-slate-800 shadow-sm relative overflow-hidden h-[500px] flex flex-col">
            <CardHeader className="bg-slate-900/50 backdrop-blur-sm z-10 border-b border-white/10 shrink-0">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-white">
                            <span className="w-8 h-8 rounded-lg bg-emerald-900/50 flex items-center justify-center text-emerald-400">
                                <DollarSign className="w-5 h-5" />
                            </span>
                            Circular Flow 3D
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Two-Sector Economy Model (Real vs Money Flows)
                        </CardDescription>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowReal(!showReal)}
                            className={`border-slate-700 hover:bg-slate-800 ${showReal ? 'bg-blue-900/20 text-blue-400 border-blue-900' : 'text-slate-500'}`}
                        >
                            <Layers className="w-4 h-4 mr-1" />
                            Real Flow
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowMoney(!showMoney)}
                            className={`border-slate-700 hover:bg-slate-800 ${showMoney ? 'bg-green-900/20 text-green-400 border-green-900' : 'text-slate-500'}`}
                        >
                            <Layers className="w-4 h-4 mr-1" />
                            Money Flow
                        </Button>
                        <Button
                            variant="secondary"
                            size="icon"
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-8 h-8 rounded-full"
                        >
                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                    </div>
                </div>
            </CardHeader>

            <div className="flex-1 relative bg-slate-950">
                <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
                    <Scene isPlaying={isPlaying} showReal={showReal} showMoney={showMoney} />
                </Canvas>

                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-4 pointer-events-none">
                    <div className={`p-3 rounded-xl border backdrop-blur-md transition-all ${showMoney ? 'bg-green-900/20 border-green-900/50 opacity-100' : 'opacity-30 border-transparent'}`}>
                        <h4 className="text-green-400 font-bold text-xs uppercase mb-1">Money Flow (Green)</h4>
                        <p className="text-[10px] text-green-200/70">
                            Households → Firms: Consumption Expenditure<br />
                            Firms → Households: Factor Payments (Rent, Wages)
                        </p>
                    </div>
                    <div className={`p-3 rounded-xl border backdrop-blur-md transition-all ${showReal ? 'bg-blue-900/20 border-blue-900/50 opacity-100' : 'opacity-30 border-transparent'}`}>
                        <h4 className="text-blue-400 font-bold text-xs uppercase mb-1">Real Flow (Blue)</h4>
                        <p className="text-[10px] text-blue-200/70">
                            Households → Firms: Factor Services (Labor, Capital)<br />
                            Firms → Households: Goods & Services
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
}

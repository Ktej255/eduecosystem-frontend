"use client";

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Stars, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BELTS = [
    { name: 'Polar High', lat: 90, desc: 'High pressure due to extreme cold.', color: '#93c5fd' },
    { name: 'Subpolar Low', lat: 60, desc: 'Convergence of polar easterlies and westerlies.', color: '#60a5fa' },
    { name: 'Subtropical High', lat: 30, desc: 'Horse Latitudes. Sinking dry air.', color: '#fbbf24' },
    { name: 'Equatorial Low', lat: 0, desc: 'ITCZ. Doldrums. Rising warm air.', color: '#f87171' },
    { name: 'Subtropical High', lat: -30, desc: 'Horse Latitudes. Sinking dry air.', color: '#fbbf24' },
    { name: 'Subpolar Low', lat: -60, desc: 'Convergence zone in Southern Hemisphere.', color: '#60a5fa' },
    { name: 'Polar High', lat: -90, desc: 'High pressure at South Pole.', color: '#93c5fd' },
];

const WINDS = [
    { name: 'Polar Easterlies', range: [60, 90], dir: -1, offset: 0 },
    { name: 'Westerlies', range: [30, 60], dir: 1, offset: 0.5 },
    { name: 'Trade Winds', range: [5, 30], dir: -1, offset: 1 },
    { name: 'Trade Winds', range: [-30, -5], dir: -1, offset: 1.5 },
    { name: 'Westerlies', range: [-60, -30], dir: 1, offset: 2 },
    { name: 'Polar Easterlies', range: [-90, -60], dir: -1, offset: 2.5 },
];

function latToY(lat: number, radius: number = 2) {
    return radius * Math.sin(lat * (Math.PI / 180));
}

function WindArrows({ range, direction, count = 20 }: { range: [number, number], direction: number, count?: number }) {
    const group = useRef<THREE.Group>(null);
    const radius = 2.1;

    const arrows = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const lat = range[0] + Math.random() * (range[1] - range[0]);
            const lng = Math.random() * 360;
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = lng * (Math.PI / 180);

            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.cos(phi);
            const z = radius * Math.sin(phi) * Math.sin(theta);

            temp.push({
                pos: new THREE.Vector3(x, y, z),
                rot: new THREE.Euler(0, theta + (direction > 0 ? Math.PI : 0), -phi + Math.PI / 2),
                speed: 0.5 + Math.random()
            });
        }
        return temp;
    }, [range, direction, count]);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.005 * direction;
        }
    });

    return (
        <group ref={group}>
            {arrows.map((arrow, i) => (
                <mesh key={i} position={arrow.pos} rotation={arrow.rot}>
                    <coneGeometry args={[0.03, 0.1, 4]} />
                    <meshBasicMaterial color="#ffffff" opacity={0.6} transparent />
                </mesh>
            ))}
        </group>
    );
}

function PressureBelt({ lat, color }: { lat: number, color: string }) {
    const y = latToY(lat, 2);
    const r = 2 * Math.cos(lat * (Math.PI / 180));

    return (
        <mesh position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[r, 0.01, 16, 100]} />
            <meshBasicMaterial color={color} opacity={0.3} transparent />
        </mesh>
    );
}

export default function AtmosphericViz() {
    const [hoveredBelt, setHoveredBelt] = useState<any>(null);

    return (
        <div className="w-full h-[600px] bg-slate-950 rounded-3xl overflow-hidden relative border border-blue-900/30">
            <div className="absolute top-8 left-8 z-10">
                <h3 className="text-blue-400 font-black text-2xl tracking-tighter uppercase italic">Atmospheric Circulation</h3>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Global Pressure Belts & Wind Systems</p>
            </div>

            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={45} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#93c5fd" />

                <group rotation={[0, 0, 0.4]}> {/* Earth Axial Tilt */}
                    {/* Globe */}
                    <mesh>
                        <sphereGeometry args={[2, 64, 64]} />
                        <meshStandardMaterial color="#1e293b" opacity={0.9} transparent metalness={0.2} roughness={0.8} />
                    </mesh>

                    {/* Grid Lines */}
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                        <sphereGeometry args={[2.01, 32, 16]} />
                        <meshStandardMaterial wireframe color="#334155" opacity={0.1} transparent />
                    </mesh>

                    {/* Pressure Belts */}
                    {BELTS.map((belt, i) => (
                        <PressureBelt key={i} lat={belt.lat} color={belt.color} />
                    ))}

                    {/* Wind Systems */}
                    {WINDS.map((wind, i) => (
                        <WindArrows key={i} range={wind.range as [number, number]} direction={wind.dir} />
                    ))}

                    {/* Labels */}
                    {BELTS.map((belt, i) => (
                        <Html key={i} position={[0, latToY(belt.lat, 2.2), 0]} center>
                            <div
                                className="group relative"
                                onMouseEnter={() => setHoveredBelt(belt)}
                                onMouseLeave={() => setHoveredBelt(null)}
                            >
                                <div className={`w-2 h-2 rounded-full cursor-help shadow-lg transition-transform hover:scale-150`} style={{ backgroundColor: belt.color }} />
                                {hoveredBelt?.lat === belt.lat && (
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-48 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl z-50 animate-in fade-in slide-in-from-left-2">
                                        <h4 className="font-black text-[10px] uppercase tracking-tighter" style={{ color: belt.color }}>{belt.name}</h4>
                                        <p className="text-[10px] text-white/70 leading-relaxed mt-1">{belt.desc}</p>
                                    </div>
                                )}
                            </div>
                        </Html>
                    ))}
                </group>

                <OrbitControls enablePan={false} minDistance={4} maxDistance={10} autoRotate autoRotateSpeed={0.5} />
            </Canvas>

            <div className="absolute bottom-8 right-8 z-10 flex flex-col gap-3">
                <Card className="bg-black/60 backdrop-blur-md border-white/10 p-4 max-w-[240px]">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-1 bg-blue-500/20 rounded">
                            <Info className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-[10px] font-black uppercase text-white tracking-widest">UPSC Key Concept</span>
                    </div>
                    <p className="text-[11px] text-blue-100/70 leading-relaxed">
                        Wind blows from **High Pressure** to **Low Pressure**. Coriolis force deflects winds to the **right** in the Northern Hemisphere and **left** in the Southern Hemisphere.
                    </p>
                </Card>

                <div className="flex gap-2 justify-end">
                    <Badge variant="outline" className="bg-slate-900/50 border-blue-500/30 text-blue-400 text-[9px] uppercase font-bold">Hadley Cell</Badge>
                    <Badge variant="outline" className="bg-slate-900/50 border-emerald-500/30 text-emerald-400 text-[9px] uppercase font-bold">Ferrel Cell</Badge>
                    <Badge variant="outline" className="bg-slate-900/50 border-rose-500/30 text-rose-400 text-[9px] uppercase font-bold">Polar Cell</Badge>
                </div>
            </div>
        </div>
    );
}



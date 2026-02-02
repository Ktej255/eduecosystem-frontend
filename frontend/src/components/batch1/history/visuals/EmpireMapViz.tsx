"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Scroll, Landmark, Map as MapIcon, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';

const EMPIRES = [
    {
        id: 'mauryan',
        name: 'Mauryan Empire',
        period: '322 BCE – 185 BCE',
        year: -300,
        color: 'fill-amber-500',
        stroke: 'stroke-amber-600',
        description: 'First pan-Indian empire. Reached its zenith under Ashoka.',
        keyFacts: ['Chanakya & Chandragupta', 'Ashoka Inscriptions', 'Pataliputra HQ'],
        // Simplified boundary path for India map (abstract)
        path: "M 350,150 Q 500,50 650,150 L 700,450 L 300,450 Z"
    },
    {
        id: 'gupta',
        name: 'Gupta Empire',
        period: '319 CE – 550 CE',
        year: 400,
        color: 'fill-yellow-400',
        stroke: 'stroke-yellow-500',
        description: 'Golden Age of Indian history. Flourishing of arts and science.',
        keyFacts: ['Chandragupta I', 'Samudragupta', 'Kalidasa & Aryabhatta'],
        path: "M 400,200 Q 500,150 600,200 L 600,350 L 400,350 Z"
    },
    {
        id: 'delhi-sultanate',
        name: 'Delhi Sultanate',
        period: '1206 CE – 1526 CE',
        year: 1350,
        color: 'fill-rose-400',
        stroke: 'stroke-rose-500',
        description: 'Muslim dynasties ruling from Delhi. Tughlaq expansion.',
        keyFacts: ['Qutub Minar', 'Iltutmish', 'Alauddin Khilji'],
        path: "M 420,100 L 520,100 L 550,400 L 350,250 Z"
    },
    {
        id: 'mughal',
        name: 'Mughal Empire',
        period: '1526 CE – 1857 CE',
        year: 1650,
        color: 'fill-orange-500',
        stroke: 'stroke-orange-600',
        description: 'Zenith of Mughal power under Aurangzeb.',
        keyFacts: ['Akbar Administration', 'Taj Mahal', 'Religious Policy'],
        path: "M 350,100 L 650,100 L 600,450 L 300,450 Z",
        center: [27.1767, 78.0081] as [number, number], // Agra
        radius: 0.8
    },
    {
        id: 'british',
        name: 'British India',
        period: '1858 CE – 1947 CE',
        year: 1900,
        color: 'fill-red-500',
        stroke: 'stroke-red-600',
        description: 'Direct Crown rule after 1857 revolt.',
        keyFacts: ['Railways', 'Drain of Wealth', 'Freedom Struggle'],
        path: "M 300,50 L 700,50 L 700,500 L 300,500 Z",
        center: [22.5726, 88.3639] as [number, number], // Calcutta
        radius: 1.2
    }
];

// Add coordinates to others
EMPIRES[0].center = [25.6126, 85.1239]; // Mauryan/Gupta: Pataliputra
EMPIRES[0].radius = 1.0;
EMPIRES[1].center = [25.6126, 85.1239];
EMPIRES[1].radius = 0.7;
EMPIRES[2].center = [28.6139, 77.2090]; // Delhi
EMPIRES[2].radius = 0.9;

function latLngToVector3(lat: number, lng: number, radius: number = 2): THREE.Vector3 {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

function MiniGlobe({ activeEmpire }: { activeEmpire: any }) {
    const focusPos = latLngToVector3(activeEmpire.center[0], activeEmpire.center[1], 2.05);
    const glowColor = activeEmpire.color.replace('fill-', '#');

    return (
        <group>
            {/* Holographic Base */}
            <mesh>
                <sphereGeometry args={[2, 64, 64]} />
                <meshPhongMaterial
                    color="#0a1a1f"
                    emissive="#001a1a"
                    emissiveIntensity={0.5}
                    shininess={100}
                    transparent
                    opacity={0.8}
                />
            </mesh>
            <mesh scale={[1.02, 1.02, 1.02]}>
                <sphereGeometry args={[2, 64, 64]} />
                <meshStandardMaterial color="#00e5ff" wireframe transparent opacity={0.05} />
            </mesh>

            {/* Imperial Power Center */}
            <group position={focusPos.toArray()}>
                <mesh>
                    <sphereGeometry args={[activeEmpire.radius * 0.4, 32, 32]} />
                    <meshStandardMaterial
                        color={glowColor}
                        emissive={glowColor}
                        emissiveIntensity={2}
                        transparent
                        opacity={0.4}
                    />
                </mesh>
                <Html distanceFactor={10}>
                    <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                        <span className="text-[8px] font-black text-white bg-black/40 px-1 rounded mt-1 uppercase tracking-tighter shadow-glow">
                            {activeEmpire.id === 'british' ? 'Calcutta' : activeEmpire.id === 'mughal' ? 'Agra' : 'Pataliputra'}
                        </span>
                    </div>
                </Html>
            </group>
        </group>
    );
}

export default function EmpireMapViz() {
    const [year, setYear] = useState(1900);

    // Find closest empire
    const closestEmpire = EMPIRES.slice().sort((a, b) => Math.abs(a.year - year) - Math.abs(b.year - year))[0];

    return (
        <Card className="w-full bg-white dark:bg-[#111] border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 shrink-0">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <MapIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <CardTitle className="text-white">Imperial Boundaries Tracker</CardTitle>
                            <CardDescription className="text-white/70">Visualize the rise and fall of Indian Empires</CardDescription>
                        </div>
                    </div>
                    <div className="text-2xl font-black text-white/40 font-mono">
                        {year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0 flex flex-col md:flex-row h-[500px]">
                {/* Map View - 3D Mini Globe */}
                <div className="flex-1 bg-slate-950 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 z-0">
                        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                            <ambientLight intensity={0.4} />
                            <pointLight position={[10, 10, 10]} intensity={1} />
                            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />

                            <MiniGlobe activeEmpire={closestEmpire} />

                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                autoRotate
                                autoRotateSpeed={0.3}
                            />
                        </Canvas>
                    </div>

                    {/* Controls Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-800/50">
                            <Slider
                                value={[year]}
                                min={-400}
                                max={1947}
                                step={10}
                                onValueChange={(val) => setYear(val[0])}
                                className="mb-4"
                            />
                            <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                <span>Ancient</span>
                                <span>Medieval</span>
                                <span>Modern</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Panel */}
                <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-800 p-6 flex flex-col bg-white dark:bg-[#0a0a0a]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={closestEmpire.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div>
                                <Badge className={`${closestEmpire.color} ${closestEmpire.color.replace('fill', 'text')} bg-opacity-10 border-none mb-2`}>
                                    {closestEmpire.period}
                                </Badge>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                                    {closestEmpire.name}
                                </h3>
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {closestEmpire.description}
                            </p>

                            <div className="space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-orange-600 flex items-center gap-2">
                                    <Landmark className="w-3 h-3" /> Key Elements
                                </h4>
                                <div className="space-y-2">
                                    {closestEmpire.keyFacts.map((fact, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                                            {fact}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 mt-auto">
                                <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg border border-amber-100 dark:border-amber-900/50">
                                    <div className="flex items-center gap-2 mb-1 text-amber-800 dark:text-amber-200">
                                        <Info className="w-4 h-4" />
                                        <span className="text-xs font-bold">UPSC Anchor</span>
                                    </div>
                                    <p className="text-[10px] text-amber-700 dark:text-amber-300 italic">
                                        Focus on regional expansion and administrative reforms for Mains.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </CardContent>
        </Card>
    );
}

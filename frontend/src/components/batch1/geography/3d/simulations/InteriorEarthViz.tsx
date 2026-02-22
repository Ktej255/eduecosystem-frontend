"use client";

import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { INTERIOR_EARTH_CONTENT } from '../../content/interior-earth-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Layers } from 'lucide-react';

// --- Types ---
type LayerType = 'crust' | 'mantle' | 'outerCore' | 'innerCore';

interface EarthLayerProps {
    type: LayerType;
    radius: number;
    color: string;
    texture?: string;
    opacity?: number;
    cutout?: boolean;
    onHover: (hovered: boolean) => void;
    onClick: () => void;
    isActive: boolean;
}

// --- Data Mapping ---
const LAYER_INFO: Record<LayerType, { name: string; depth: string; composition: string; temp: string }> = {
    crust: {
        name: "Crust",
        depth: "0 - 100 km",
        composition: "SiAl (Continental) & SiMa (Oceanic)",
        temp: "Ambient - 400°C"
    },
    mantle: {
        name: "Mantle",
        depth: "100 - 2,900 km",
        composition: "Silicates, Magnesium, Iron",
        temp: "500°C - 4,000°C"
    },
    outerCore: {
        name: "Outer Core",
        depth: "2,900 - 5,100 km",
        composition: "Liquid Iron & Nickel",
        temp: "4,000°C - 5,700°C"
    },
    innerCore: {
        name: "Inner Core",
        depth: "5,100 - 6,371 km",
        composition: "Solid Iron & Nickel",
        temp: "~6,000°C"
    }
};

// --- 3D Components ---

function InteriorLayer({ type, radius, color, cutout = true, onHover, onClick, isActive }: EarthLayerProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Subtle rotation for 'liquid' outer core or just general aliveness
            if (type === 'outerCore') {
                meshRef.current.rotation.y += delta * 0.05;
            }
        }
    });

    // Geometry: Sphere with a slice removed (phiLength = 2PI * 0.75 for 90deg cutout)
    // Inner core is solid (full sphere) usually, but to show it inside we need to see it. 
    // Actually Inner Core should be full sphere. Outer layers are cut.
    const geometry = useMemo(() => {
        if (!cutout) return new THREE.SphereGeometry(radius, 64, 64);
        return new THREE.SphereGeometry(radius, 64, 64, 0, Math.PI * 1.5);
    }, [radius, cutout]);

    // Material
    const material = useMemo(() => {
        return new THREE.MeshStandardMaterial({
            color: isActive ? '#fbbf24' : color, // Highlight active
            emissive: color,
            emissiveIntensity: type === 'innerCore' || type === 'outerCore' ? 0.5 : 0.1,
            roughness: type === 'mantle' ? 0.8 : 0.3,
            metalness: type === 'innerCore' ? 0.8 : 0.2,
            side: THREE.DoubleSide, // Important to see inside of the shell
            transparent: true,
            opacity: hovered && !isActive ? 0.8 : 1,
        });
    }, [color, type, isActive, hovered]);

    return (
        <mesh
            ref={meshRef}
            geometry={geometry}
            rotation={[0, Math.PI / 4, 0]} // Rotate to face cutout towards camera nicely
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            onPointerOver={(e) => {
                e.stopPropagation();
                setHovered(true);
                onHover(true);
            }}
            onPointerOut={(e) => {
                setHovered(false);
                onHover(false);
            }}
        >
            <primitive object={material} attach="material" />

            {/* If Cutout, add capping planes or just rely on DoubleSide. 
                DoubleSide on a SphereGeometry with phiLength < 2PI works but 'thickness' is 0. 
                For a visualization this is usually acceptable if we nest them tightly.
            */}
        </mesh>
    );
}

function Scene({ activeLayer, onLayerSelect }: { activeLayer: LayerType | null, onLayerSelect: (l: LayerType | null) => void }) {
    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -5, -10]} intensity={0.5} />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />

            {/* 1. Inner Core (Solid, Full) - Though visible via cutout of others */}
            <InteriorLayer
                type="innerCore"
                radius={0.8}
                color="#fef08a" // Yellow-ish white hot
                cutout={false}
                onHover={() => { }}
                onClick={() => onLayerSelect('innerCore')}
                isActive={activeLayer === 'innerCore'}
            />

            {/* 2. Outer Core (Liquid, Cutout) */}
            <InteriorLayer
                type="outerCore"
                radius={1.6}
                color="#ea580c" // Orange hot
                cutout={true}
                onHover={() => { }}
                onClick={() => onLayerSelect('outerCore')}
                isActive={activeLayer === 'outerCore'}
            />

            {/* 3. Mantle (Rock, Cutout) */}
            <InteriorLayer
                type="mantle"
                radius={2.6}
                color="#b91c1c" // Red/Brown
                cutout={true}
                onHover={() => { }}
                onClick={() => onLayerSelect('mantle')}
                isActive={activeLayer === 'mantle'}
            />

            {/* 4. Crust (Thin, Cutout) */}
            <InteriorLayer
                type="crust"
                radius={2.7} // Thin layer on top of mantle
                color="#3b82f6" // Blue/Earth
                cutout={true}
                onHover={() => { }}
                onClick={() => onLayerSelect('crust')}
                isActive={activeLayer === 'crust'}
            />

            <OrbitControls enablePan={true} enableZoom={true} minDistance={4} maxDistance={10} />
            <Environment preset="city" />
        </>
    );
}

export default function InteriorEarthViz() {
    const [activeLayer, setActiveLayer] = useState<LayerType | null>(null);

    return (
        <Card className="w-full bg-slate-950 border-slate-800 shadow-xl overflow-hidden h-[600px] flex flex-col relative">
            <CardHeader className="bg-slate-900/50 backdrop-blur-sm z-10 border-b border-white/10 shrink-0">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-white">
                            <span className="w-8 h-8 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400">
                                <Layers className="w-5 h-5" />
                            </span>
                            Interior of the Earth
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            Interactive 3D Layer Analysis
                        </CardDescription>
                    </div>
                    {activeLayer && (
                        <div className="flex animate-in fade-in slide-in-from-right-4">
                            <Badge variant="outline" className="border-yellow-500/50 text-yellow-400 bg-yellow-500/10 px-3 py-1">
                                {LAYER_INFO[activeLayer].name} Selected
                            </Badge>
                            <button
                                onClick={() => setActiveLayer(null)}
                                className="ml-2 text-muted-foreground hover:text-white text-xs underline"
                            >
                                Reset
                            </button>
                        </div>
                    )}
                </div>
            </CardHeader>

            <div className="flex-1 relative bg-slate-950">
                <Canvas camera={{ position: [4, 2, 5], fov: 45 }}>
                    <Scene activeLayer={activeLayer} onLayerSelect={setActiveLayer} />
                </Canvas>

                {/* Info Panel Overlay */}
                <div className={`absolute top-4 right-4 w-64 transition-all duration-300 ${activeLayer ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
                    {activeLayer && (
                        <div className="bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-2xl">
                            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${activeLayer === 'crust' ? 'bg-blue-500' :
                                        activeLayer === 'mantle' ? 'bg-red-600' :
                                            activeLayer === 'outerCore' ? 'bg-orange-500' : 'bg-yellow-300'
                                    }`}></div>
                                {LAYER_INFO[activeLayer].name}
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Depth</div>
                                    <div className="text-sm text-slate-200 font-mono">{LAYER_INFO[activeLayer].depth}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Composition</div>
                                    <div className="text-sm text-slate-200">{LAYER_INFO[activeLayer].composition}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Temperature</div>
                                    <div className="text-sm text-slate-200">{LAYER_INFO[activeLayer].temp}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Quick Legend / Call to Action */}
                {!activeLayer && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur rounded-full px-4 py-2 border border-white/10 text-slate-300 text-sm flex items-center gap-2 animate-pulse">
                        <Info className="w-4 h-4" />
                        Click on a layer to reveal details
                    </div>
                )}
            </div>
        </Card>
    );
}

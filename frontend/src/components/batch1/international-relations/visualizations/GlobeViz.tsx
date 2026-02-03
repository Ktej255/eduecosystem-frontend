"use client";

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html, Sphere } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe2, Info, Navigation } from 'lucide-react';
import * as THREE from 'three';

// --- Geography Data (Approximate Coords for Viz) ---
const COUNTRIES: Record<string, { lat: number, lon: number, color?: string }> = {
    'India': { lat: 20.59, lon: 78.96, color: '#f97316' }, // Orange
    'USA': { lat: 37.09, lon: -95.71, color: '#3b82f6' },
    'China': { lat: 35.86, lon: 104.19, color: '#ef4444' },
    'Russia': { lat: 61.52, lon: 105.31, color: '#ef4444' },
    'Brazil': { lat: -14.23, lon: -51.92, color: '#22c55e' },
    'South Africa': { lat: -30.55, lon: 22.93, color: '#eab308' },
    'France': { lat: 46.22, lon: 2.21, color: '#3b82f6' },
    'UK': { lat: 55.37, lon: -3.43, color: '#3b82f6' },
    'Japan': { lat: 36.20, lon: 138.25, color: '#3b82f6' },
    'Australia': { lat: -25.27, lon: 133.77, color: '#3b82f6' },
    'Saudi Arabia': { lat: 23.88, lon: 45.07 },
    'Iran': { lat: 32.42, lon: 53.68 },
    'Pakistan': { lat: 30.37, lon: 69.34 },
};

const ALLIANCES = {
    'SCO': { members: ['China', 'Russia', 'India', 'Pakistan', 'Iran'], color: '#ef4444' }, // Red-ish
    'QUAD': { members: ['India', 'USA', 'Japan', 'Australia'], color: '#3b82f6' }, // Blue
    'BRICS': { members: ['Brazil', 'Russia', 'India', 'China', 'South Africa'], color: '#ec4899' }, // Pink
    'NATO': { members: ['USA', 'UK', 'France'], color: '#0ea5e9' } // Cyan (Simplified)
};

// --- Utils ---
function latLonToVector3(lat: number, lon: number, radius: number = 2) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
}

// --- 3D Components ---

function EarthMesh() {
    return (
        <group>
            {/* Holographic Base */}
            <Sphere args={[2, 64, 64]}>
                <meshPhongMaterial
                    color="#0a1a1f"
                    emissive="#001a1a"
                    emissiveIntensity={0.8}
                    shininess={100}
                    transparent
                    opacity={0.9}
                />
            </Sphere>
            {/* Atmosphere Halo */}
            <Sphere args={[2.1, 64, 64]}>
                <meshStandardMaterial
                    color="#0ea5e9"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </Sphere>
            {/* Data Grid Mask */}
            <Sphere args={[2.02, 64, 64]}>
                <meshStandardMaterial
                    color="#00e5ff"
                    wireframe
                    transparent
                    opacity={0.05}
                />
            </Sphere>
        </group>
    );
}

function CountryMarker({ name, data, isHighlighted, highlightColor }: { name: string, data: any, isHighlighted: boolean, highlightColor: string }) {
    const pos = useMemo(() => latLonToVector3(data.lat, data.lon, 2.05), [data]);

    // Pulse animation logic could go here, for now static
    const color = isHighlighted ? highlightColor : (name === 'India' ? '#f97316' : '#64748b');
    const scale = isHighlighted || name === 'India' ? 1.5 : 1;

    return (
        <group position={pos}>
            <mesh>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={isHighlighted ? 3 : 1}
                />
            </mesh>
            {isHighlighted && (
                <mesh>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshBasicMaterial color={color} transparent opacity={0.3} />
                </mesh>
            )}
            {(isHighlighted || name === 'India') && (
                <Html distanceFactor={10}>
                    <div className={`px-2 py-0.5 rounded text-[10px] font-black text-white shadow-glow translate-x-3 -translate-y-3 whitespace-nowrap uppercase tracking-tighter ${name === 'India' ? 'bg-orange-600' : 'bg-slate-900/90 backdrop-blur-md border border-white/20'}`}>
                        {name}
                    </div>
                </Html>
            )}
        </group>
    );
}

function ConnectionLine({ start, end, color }: { start: string, end: string, color: string }) {
    const startPos = useMemo(() => latLonToVector3(COUNTRIES[start].lat, COUNTRIES[start].lon, 2.05), [start]);
    const endPos = useMemo(() => latLonToVector3(COUNTRIES[end].lat, COUNTRIES[end].lon, 2.05), [end]);

    const curve = useMemo(() => {
        // Create an arc that goes slightly above surface
        const mid = startPos.clone().add(endPos).multiplyScalar(0.5).normalize().multiplyScalar(2.5); // Arcs up to 2.5 radius
        return new THREE.QuadraticBezierCurve3(startPos, mid, endPos);
    }, [startPos, endPos]);

    const { positions, count } = useMemo(() => {
        const pts = curve.getPoints(50);
        const data = new Float32Array(pts.length * 3);
        pts.forEach((p, i) => {
            data[i * 3] = p.x;
            data[i * 3 + 1] = p.y;
            data[i * 3 + 2] = p.z;
        });
        return { positions: data, count: pts.length };
    }, [curve]);

    const materialRef = useRef<THREE.LineBasicMaterial>(null);
    useFrame((state) => {
        if (materialRef.current) {
            // Pulse opacity based on time
            materialRef.current.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 3) * 0.15;
        }
    });

    return (
        <line>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <lineBasicMaterial
                ref={materialRef}
                color={color}
                transparent
                linewidth={2}
                blending={THREE.AdditiveBlending}
            />
        </line>
    );
}

function Scene({ activeAlliance }: { activeAlliance: string | null }) {
    const allianceData = activeAlliance ? ALLIANCES[activeAlliance as keyof typeof ALLIANCES] : null;

    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

            <EarthMesh />

            {/* Render Country Markers */}
            {Object.entries(COUNTRIES).map(([name, data]) => {
                const isMember = allianceData?.members.includes(name) ?? false;
                return (
                    <CountryMarker
                        key={name}
                        name={name}
                        data={data}
                        isHighlighted={isMember}
                        highlightColor={allianceData?.color || '#fff'}
                    />
                );
            })}

            {/* Render Connections (Hub & Spoke from India or Ring) */}
            {activeAlliance && allianceData?.members.includes('India') && (
                allianceData.members.filter(m => m !== 'India').map(member => (
                    COUNTRIES[member] && <ConnectionLine key={`India-${member}`} start="India" end={member} color={allianceData.color} />
                ))
            )}

            <OrbitControls
                enableZoom={true}
                minDistance={3}
                maxDistance={8}
                autoRotate={!activeAlliance}
                autoRotateSpeed={0.5}
            />
        </>
    );
}


export default function GlobeViz() {
    const [activeAlliance, setActiveAlliance] = useState<string | null>(null);

    return (
        <Card className="w-full bg-slate-950 border-slate-800 shadow-xl overflow-hidden h-[500px]">
            <CardHeader className="bg-slate-900/50 backdrop-blur-sm border-b border-white/10 relative z-10">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-white">
                            <span className="w-8 h-8 rounded-lg bg-indigo-900/50 flex items-center justify-center text-indigo-400">
                                <Globe2 className="w-5 h-5" />
                            </span>
                            Geopolitics 3D
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Interactive Alliance Mapper
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="h-full p-0 relative">
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    {Object.keys(ALLIANCES).map(alliance => (
                        <button
                            key={alliance}
                            onClick={() => setActiveAlliance(activeAlliance === alliance ? null : alliance)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center gap-2 w-24
                                ${activeAlliance === alliance
                                    ? 'bg-slate-100/10 border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                                    : 'bg-black/50 border-white/10 text-slate-400 hover:bg-white/10'
                                }`}
                        >
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ALLIANCES[alliance as keyof typeof ALLIANCES].color }} />
                            {alliance}
                        </button>
                    ))}
                </div>

                <div className="absolute bottom-4 right-4 z-20 max-w-xs pointer-events-none">
                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 text-slate-300 text-xs leading-relaxed animate-in slide-in-from-right-4">
                        {activeAlliance ? (
                            <>
                                <strong className="text-white text-sm block mb-1">{activeAlliance} Highlights</strong>
                                {activeAlliance === 'SCO' && "Shanghai Cooperation Organization: Focus on Central Asian security. India joined in 2017."}
                                {activeAlliance === 'QUAD' && "Dialogue for 'Free and Open Indo-Pacific'. Countering maritime influence in the region."}
                                {activeAlliance === 'BRICS' && "Emerging economies bloc. Recently expanded to include Iran, UAE, Ethiopia, Egypt."}
                                {activeAlliance === 'NATO' && "North Atlantic Treaty Org. India is NOT a member but engages strategically."}
                            </>
                        ) : (
                            <span className="flex items-center gap-2 text-slate-500">
                                <Navigation className="w-4 h-4" />
                                Select an alliance to visualize strategic depth.
                            </span>
                        )}
                    </div>
                </div>

                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <Scene activeAlliance={activeAlliance} />
                </Canvas>
            </CardContent>
        </Card>
    );
}

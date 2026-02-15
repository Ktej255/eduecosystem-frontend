"use client";

import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, Info, Satellite as SatIcon } from "lucide-react";
import * as THREE from "three";

// --- Atmosphere Shader Material ---
const AtmosphereShaderMaterial = {
    uniforms: {
        glowColor: { value: new THREE.Color(0x38bdf8) },
        viewVector: { value: new THREE.Vector3(0, 0, 0) },
        c: { value: 1.2 }, // Intensity
        p: { value: 3.5 }, // Falloff
    },
    vertexShader: `
    uniform vec3 viewVector;
    varying float intensity;
    uniform float c;
    uniform float p;
    void main() {
        vec3 vNormal = normalize(normalMatrix * normal);
        vec3 vNormel = normalize(normalMatrix * viewVector); // approximate view vector
        intensity = pow(c - dot(vNormal, vNormel), p);
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,
    fragmentShader: `
    uniform vec3 glowColor;
    varying float intensity;
    void main() {
        vec3 glow = glowColor * intensity;
        gl_FragColor = vec4( glow, 1.0 );
    }
  `,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
};

function Atmosphere() {
    const shaderRef = useRef<THREE.ShaderMaterial>(null);
    useFrame((state) => {
        if (shaderRef.current) {
            // Very simple view vector approximation for this effect
            shaderRef.current.uniforms.viewVector.value = state.camera.position;
        }
    });

    return (
        <mesh scale={[1.2, 1.2, 1.2]}>
            <sphereGeometry args={[1, 64, 64]} />
            <shaderMaterial
                ref={shaderRef}
                args={[AtmosphereShaderMaterial]}
                uniforms-glowColor-value={new THREE.Color(0x38bdf8)}
            />
        </mesh>
    );
}

// Enhanced Earth Component
function Earth() {
    return (
        <group>
            {/* Core Earth Sphere */}
            <mesh>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#1e3a8a" // Ocean Blue
                    roughness={0.6}
                    metalness={0.1}
                />
            </mesh>
            {/* Continents (Procedural Noise Facade - Simplified for Viz) */}
            <mesh scale={[1.001, 1.001, 1.001]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#15803d" // Land Green
                    transparent
                    opacity={0.3}
                    roughness={0.8}
                />
            </mesh>
            {/* Clouds */}
            <mesh scale={[1.01, 1.01, 1.01]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.4}
                />
            </mesh>
            <Atmosphere />
        </group>
    );
}

function OrbitPath({ radius, color, label }: { radius: number, color: string, label: string }) {
    return (
        <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh>
                <ringGeometry args={[radius - 0.01, radius + 0.01, 128]} />
                <meshBasicMaterial
                    color={color}
                    opacity={0.4}
                    transparent
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
            <Html position={[radius, 0, 0]}>
                <div className="text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-black/80 text-white whitespace-nowrap border border-white/20 uppercase tracking-tighter shadow-[0_0_10px_rgba(0,0,0,0.5)] backdrop-blur-md">
                    {label}
                </div>
            </Html>
        </group>
    );
}

interface SatelliteProps {
    radius: number;
    speed: number;
    color: string;
    size?: number;
    label: string;
    desc: string;
    startAngle?: number;
}

function Satellite({ radius, speed, color, size = 0.1, label, desc, startAngle = 0 }: SatelliteProps) {
    const ref = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.y = startAngle + clock.getElapsedTime() * speed;
        }
    });

    return (
        <group ref={ref}>
            <mesh
                position={[radius, 0, 0]}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <boxGeometry args={[size, size, size]} />
                <meshStandardMaterial
                    color={hovered ? "#ffffff" : color}
                    emissive={color}
                    emissiveIntensity={hovered ? 2 : 0.5}
                />

                {hovered && (
                    <Html distanceFactor={10}>
                        <div className="bg-slate-900/95 text-white text-xs p-2 rounded border border-white/20 w-32 backdrop-blur-md pointer-events-none transform -translate-y-full -translate-x-1/2 mb-2">
                            <div className="font-bold text-cyan-400 mb-0.5">{label}</div>
                            <div className="text-[10px] text-slate-300 leading-tight">{desc}</div>
                        </div>
                    </Html>
                )}
            </mesh>
        </group>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#4f46e5" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Earth />

            {/* LEO: Low Earth Orbit */}
            <OrbitPath radius={1.6} color="#06b6d4" label="LEO" />
            <Satellite
                radius={1.6}
                speed={0.8}
                color="#06b6d4"
                label="ISS"
                desc="International Space Station. ~400km altitude."
                startAngle={0}
            />
            <Satellite
                radius={1.6}
                speed={0.9}
                color="#22d3ee"
                label="Cartosat"
                desc="Earth Observation. Sun-synchronous orbit."
                startAngle={2}
            />

            {/* MEO: Medium Earth Orbit */}
            <OrbitPath radius={2.5} color="#8b5cf6" label="MEO" />
            <Satellite
                radius={2.5}
                speed={0.4}
                color="#8b5cf6"
                label="GPS"
                desc="Global Positioning System. ~20,200km altitude."
                startAngle={1}
            />
            <Satellite
                radius={2.5}
                speed={0.35}
                color="#a78bfa"
                label="NavIC"
                desc="Indian Regional Navigation Satellite System."
                startAngle={4}
            />

            {/* GEO: Geostationary Orbit */}
            <OrbitPath radius={3.8} color="#f59e0b" label="GEO" />
            <Satellite
                radius={3.8}
                speed={0.1}
                color="#f59e0b"
                size={0.15}
                label="INSAT-3D"
                desc="Meteorological Satellite. ~36,000km altitude."
                startAngle={0.5}
            />

            <OrbitControls enableZoom={true} minDistance={2.5} maxDistance={10} autoRotate={false} />
        </>
    );
}

export default function SpaceOrbitViz() {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <Card className="w-full bg-slate-950 border-slate-800 shadow-sm overflow-hidden h-full min-h-[400px] relative flex flex-col">
            <CardHeader className="absolute top-0 left-0 right-0 z-10 border-b border-white/10 bg-slate-900/50 backdrop-blur-sm pointer-events-none p-4">
                <div className="flex items-center justify-between pointer-events-auto">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-white text-base">
                            <span className="w-6 h-6 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400">
                                <Rocket className="w-3 h-3" />
                            </span>
                            Orbital Mechanics
                        </CardTitle>
                    </div>
                    <button
                        onClick={() => setShowInfo(!showInfo)}
                        className={`p-2 rounded-full transition-colors ${showInfo ? 'bg-white/20 text-white' : 'hover:bg-white/10 text-slate-400 hover:text-white'}`}
                    >
                        <Info className="w-4 h-4" />
                    </button>
                </div>
            </CardHeader>

            <CardContent className="flex-1 p-0 relative">
                <div className="absolute inset-0">
                    <Canvas camera={{ position: [4, 2, 5], fov: 45 }}>
                        <Scene />
                    </Canvas>
                </div>

                {showInfo && (
                    <div className="absolute inset-x-4 bottom-4 z-20 bg-slate-900/95 border border-slate-700 p-4 rounded-xl text-sm text-slate-300 animate-in slide-in-from-bottom-2 shadow-xl backdrop-blur-md">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-white flex items-center gap-2">
                                <SatIcon className="w-3 h-3 text-cyan-400" />
                                Key Exam Points
                            </h4>
                        </div>

                        <ul className="space-y-2 text-xs">
                            <li className="flex gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 shrink-0" />
                                <div>
                                    <strong className="text-cyan-400 block">LEO (160-2000km)</strong>
                                    <span className="text-slate-400">Remote Sensing (Cartosat), Spy Satellites, ISS. Period: ~90 mins. Best for high-res imaging.</span>
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shrink-0" />
                                <div>
                                    <strong className="text-purple-400 block">MEO (2000-35786km)</strong>
                                    <span className="text-slate-400">Navigation (GPS, GLONASS, Galileo). Period: ~12 hrs. Larger coverage area than LEO.</span>
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                                <div>
                                    <strong className="text-amber-400 block">GEO (35,786km)</strong>
                                    <span className="text-slate-400">Telecommunications, Weather (INSAT). Period: 24 hrs. Fixed position relative to Earth.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

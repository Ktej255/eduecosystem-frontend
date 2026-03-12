"use client";

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Html, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import { GEOGRAPHY_SYLLABUS, Module, SubTopic, MicroTopic } from '../data/geography-syllabus-data';

interface GeographyGlobeProps {
    activeModuleId: string;
    onSelectTopic: (topic: MicroTopic) => void;
}

function EarthCore() {
    return (
        <group>
            {/* Inner Core */}
            <mesh>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial color="#fca5a5" emissive="#7f1d1d" emissiveIntensity={2} />
            </mesh>
            {/* Outer Core / Mantle Glow */}
            <mesh>
                <sphereGeometry args={[3.8, 32, 32]} />
                <meshStandardMaterial color="#ea580c" transparent opacity={0.1} wireframe />
            </mesh>
        </group>
    );
}

function EarthSurface({ activeModuleColor }: { activeModuleColor: string }) {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
        }
    });

    return (
        <mesh ref={meshRef as any}>
            <sphereGeometry args={[4, 64, 64]} />
            <meshStandardMaterial
                color="#1e3a8a" // Ocean Blue Base
                wireframe={true}
                transparent
                opacity={0.15}
                emissive={activeModuleColor}
                emissiveIntensity={0.2}
            />
        </mesh>
    );
}

// Visual representation of a SubTopic (Orbiting Node)
function TopicNode({
    subTopic,
    moduleColor,
    onSelect
}: {
    subTopic: SubTopic,
    moduleColor: string,
    onSelect: (micro: MicroTopic) => void
}) {
    const [hovered, setHovered] = useState(false);

    // Default coords if missing
    const position = subTopic.coordinates
        ? new THREE.Vector3(...subTopic.coordinates).multiplyScalar(6) // Scale out from earth radius (4)
        : new THREE.Vector3(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5).normalize().multiplyScalar(6);

    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.lookAt(0, 0, 0); // Always face center or camera?
        }
    });

    return (
        <group position={position} ref={ref as any}>
            <mesh
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={(e) => {
                    e.stopPropagation();
                    // For now, selecting the subtopic selects its first microtopic
                    if (subTopic.microTopics.length > 0) {
                        onSelect(subTopic.microTopics[0]);
                    }
                }}
            >
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial
                    color={hovered ? '#ffffff' : moduleColor}
                    emissive={moduleColor}
                    emissiveIntensity={hovered ? 1 : 0.5}
                />
            </mesh>

            {/* Connecting line to Earth surface */}
            <Line
                points={[[0, 0, 0], position.clone().normalize().multiplyScalar(-2).toArray()]} // Points relative to group? No, Line needs absolute or local. 
                // Actually if we put Line inside the group, [0,0,0] is the box. 
                // We want to draw TO the Earth center (which is -position relative to this group)
                color={moduleColor}
                transparent
                opacity={0.2}
                lineWidth={1}
            />

            <Html distanceFactor={12} position={[0, 0.7, 0]} style={{ pointerEvents: 'none' }}>
                <div className={`px-2 py-1 rounded bg-black/60 border ${hovered ? 'border-white' : 'border-transparent'} text-white text-xs whitespace-nowrap backdrop-blur-md`}>
                    {subTopic.title}
                </div>
            </Html>
        </group>
    );
}

function SyllabusOrbit({ module, isActive, onSelectTopic }: { module: Module, isActive: boolean, onSelectTopic: (topic: MicroTopic) => void }) {
    if (!isActive) return null;

    return (
        <group>
            {module.topics.map(topic => (
                <TopicNode
                    key={topic.id}
                    subTopic={topic}
                    moduleColor={module.color}
                    onSelect={onSelectTopic}
                />
            ))}
        </group>
    );
}

export default function GeographyGlobe({ activeModuleId, onSelectTopic }: GeographyGlobeProps) {
    const activeModule = GEOGRAPHY_SYLLABUS.find(m => m.id === activeModuleId);

    return (
        <div className="w-full h-full bg-black relative">
            <Canvas camera={{ position: [8, 8, 8], fov: 45 }}>
                <color attach="background" args={['#020617']} />

                <ambientLight intensity={0.4} />
                <pointLight position={[15, 15, 15]} intensity={1.5} color="#fbbf24" />
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

                {/* Earth System */}
                <group>
                    <EarthCore />
                    <EarthSurface activeModuleColor={activeModule?.color || '#ffffff'} />

                    {/* Render Orbiting Topics for the Active Module */}
                    {GEOGRAPHY_SYLLABUS.map(mod => (
                        <SyllabusOrbit
                            key={mod.id}
                            module={mod}
                            isActive={mod.id === activeModuleId}
                            onSelectTopic={onSelectTopic}
                        />
                    ))}
                </group>

                <OrbitControls
                    enablePan={false}
                    minDistance={6}
                    maxDistance={30}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                />
            </Canvas>

            {/* Overlay Info */}
            <div className="absolute top-6 left-6 pointer-events-none">
                <h2
                    className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 uppercase tracking-tighter"
                    style={{ textShadow: `0 0 30px ${activeModule?.color}40` }}
                >
                    {activeModule?.id.toUpperCase()}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeModule?.color }}></div>
                    <span className="text-muted-foreground text-sm font-mono tracking-widest">LIVE DATA FEED</span>
                </div>
            </div>
        </div>
    );
}

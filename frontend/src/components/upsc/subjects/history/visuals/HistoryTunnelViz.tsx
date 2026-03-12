"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Text, Float, PerspectiveCamera, ScrollControls, Scroll, useScroll, MeshTransmissionMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const EVENTS = [
    { year: '2500 BCE', title: 'Indus Valley', desc: 'Urban Planning', color: '#fbbf24' },
    { year: '321 BCE', title: 'Mauryas', desc: 'Empire Building', color: '#f59e0b' },
    { year: '320 CE', title: 'Guptas', desc: 'Golden Age', color: '#d97706' },
    { year: '1206 CE', title: 'Sultanate', desc: 'New Architecture', color: '#e11d48' },
    { year: '1526 CE', title: 'Mughals', desc: 'Cultural Synthesis', color: '#ea580c' },
    { year: '1857 CE', title: 'Revolt', desc: 'First War of Independence', color: '#b91c1c' },
    { year: '1947 CE', title: 'Independence', desc: 'New Nation', color: '#059669' },
];

function TimeParticles({ count = 1000 }) {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 10;
            p[i * 3 + 1] = (Math.random() - 0.5) * 10;
            p[i * 3 + 2] = Math.random() * -100;
        }
        return p;
    }, [count]);

    useFrame((state) => {
        state.camera.position.z -= 0.01; // Subtle drift
    });

    return (
        <Points positions={points} stride={3}>
            <PointMaterial
                transparent
                vertexColors={false}
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                color="#ffffff"
                opacity={0.4}
            />
        </Points>
    );
}

function Tunnel() {
    const scroll = useScroll();
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!group.current) return;
        const offset = scroll.offset;
        group.current.position.z = offset * 70; // Map scroll to depth
    });

    return (
        <group ref={group}>
            {/* Volumetric Tunnel */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -35]}>
                <cylinderGeometry args={[6, 6, 120, 32, 1, true]} />
                <meshStandardMaterial
                    color="#0a0a0a"
                    side={THREE.BackSide}
                    wireframe
                    transparent
                    opacity={0.1}
                />
            </mesh>

            <TimeParticles />

            {EVENTS.map((event, i) => (
                <EventCard key={i} event={event} position={[
                    Math.sin(i) * 3,
                    Math.cos(i) * 3,
                    -i * 10
                ]} />
            ))}
        </group>
    );
}

function EventCard({ event, position }: { event: any, position: [number, number, number] }) {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group position={position} rotation={[0, 0, Math.atan2(position[1], position[0]) - Math.PI / 2]}>
                {/* Visual Card Background - Glassmorphic */}
                <mesh>
                    <boxGeometry args={[4, 2, 0.1]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={0.2}
                        chromaticAberration={0.02}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.1}
                        temporalDistortion={0.1}
                        color={event.color}
                        transparent
                        opacity={0.3}
                    />
                </mesh>
                <mesh position={[0, 0, 0.05]}>
                    <planeGeometry args={[4.1, 2.1]} />
                    <meshBasicMaterial color={event.color} wireframe transparent opacity={0.2} />
                </mesh>

                {/* Text Elements */}
                <Text
                    position={[0, 0.5, 0.1]}
                    fontSize={0.4}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                >
                    {event.year}
                </Text>
                <Text
                    position={[0, -0.1, 0.1]}
                    fontSize={0.25}
                    color={event.color}
                    anchorX="center"
                    anchorY="middle"
                >
                    {event.title}
                </Text>
                <Text
                    position={[0, -0.6, 0.1]}
                    fontSize={0.15}
                    color="gray"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={3}
                >
                    {event.desc}
                </Text>
            </group>
        </Float>
    );
}

export default function HistoryTunnelViz() {
    return (
        <div className="w-full h-[600px] bg-black rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <ScrollControls pages={4} damping={0.2}>
                    <Tunnel />

                    {/* Fixed UI on overlay */}
                    <Scroll html>
                        <div className="w-screen h-screen pointer-events-none flex flex-col items-center justify-between p-12">
                            <div className="bg-card/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center">
                                <h2 className="text-white font-bold text-xl tracking-tighter uppercase">Chronicle Tunnel</h2>
                                <p className="text-white/50 text-xs">Scroll to navigate through the river of time</p>
                            </div>
                            <div className="text-white/20 animate-bounce pb-12">
                                ↓ Scroll Down
                            </div>
                        </div>
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    );
}

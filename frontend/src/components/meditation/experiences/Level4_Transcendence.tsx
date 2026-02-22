"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { X, Infinity, Volume2, Mic2 } from 'lucide-react'; // Mic for 'Om' detection placeholder
import PreSessionExperienceForm from '@/components/meditation/PreSessionExperienceForm';
import PostSessionExperienceForm from '@/components/meditation/PostSessionExperienceForm';
import SessionSummary from '@/components/meditation/features/SessionSummary';
import { MEDITATION_THEME } from '../theme/MeditationTheme';

// --- 3D Components ---

function CosmicParticles({ count = 2000 }) {
    const mesh = useRef<THREE.Points>(null);
    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();

        for (let i = 0; i < count; i++) {
            const r = 20 + Math.random() * 30; // Radius
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta); // x
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
            positions[i * 3 + 2] = r * Math.cos(phi); // z

            // Cosmic colors (Purple, Blue, Pink)
            const vx = (positions[i * 3] / r) + 0.5;
            const vy = (positions[i * 3 + 1] / r) + 0.5;
            const vz = (positions[i * 3 + 2] / r) + 0.5;

            color.setHSL(0.6 + 0.2 * Math.random(), 0.8, 0.5 + 0.5 * Math.random());
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return [positions, colors];
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;
        // Slow rotation
        mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        mesh.current.rotation.z = state.clock.getElapsedTime() * 0.02;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

function NebulaCore() {
    const mesh = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <mesh ref={mesh}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial
                color="#4c1d95" // Violet-900
                emissive="#8b5cf6" // Violet-500
                emissiveIntensity={0.5}
                roughness={0.1}
                metalness={0.8}
                wireframe
                transparent
                opacity={0.3}
            />
        </mesh>
    );
}

// --- Main Component ---

interface Level4Props {
    onExit: () => void;
    onComplete: (minutes: number) => void;
    level?: number;
    dayNumber?: number;
}

export default function Level4_Transcendence({ onExit, onComplete, level = 4, dayNumber = 1 }: Level4Props) {
    // Experience recording state
    const [showPreExperience, setShowPreExperience] = useState(true);
    const [showPostExperience, setShowPostExperience] = useState(false);
    const [experienceId, setExperienceId] = useState<number | null>(null);
    const [preSessionData, setPreSessionData] = useState<any>(null);
    const [sessionComplete, setSessionComplete] = useState(false);

    // Session state
    const [timeLeft, setTimeLeft] = useState(1200); // 20 Minutes (Deep Session)
    const [isPlaying, setIsPlaying] = useState(false);

    // Timer Logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPlaying && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setIsPlaying(false);
                        setSessionComplete(true);
                        if (experienceId) setShowPostExperience(true);
                        onComplete(20);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isPlaying, timeLeft, onComplete, experienceId]);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center text-white bg-black font-sans overflow-hidden">

            {/* UI Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Header */}
                <div className="absolute top-8 left-0 w-full flex justify-between px-8 pointer-events-auto">
                    <Button variant="ghost" className="text-white/60 hover:text-white" onClick={onExit}>
                        <X className="w-6 h-6" />
                    </Button>
                    <div className="flex items-center gap-2 px-3 py-1 bg-card/5 rounded-full backdrop-blur-md border border-white/10">
                        <Infinity className="w-4 h-4 text-fuchsia-400" />
                        <span className="text-xs font-medium tracking-wide opacity-80">LEVEL 4 • TRANSCENDENCE</span>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="ghost" className="text-white/60 hover:text-white" title="Mute Ambiance">
                            <Volume2 className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Center Message (Fade In/Out) */}
                {!showPreExperience && !showPostExperience && !sessionComplete && !isPlaying && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto">
                        <h1 className="text-5xl font-thin tracking-[0.2em] mb-4 text-white/80">VOID</h1>
                        <Button
                            onClick={() => setIsPlaying(true)}
                            className="bg-card/10 hover:bg-card/20 text-white border border-white/20 rounded-full px-8 py-6 text-lg tracking-widest transition-all hover:scale-105 backdrop-blur-md"
                        >
                            ENTER
                        </Button>
                    </div>
                )}

                {/* Timer (Bottom) */}
                {isPlaying && (
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000">
                        <div className="text-4xl font-thin tracking-tighter tabular-nums opacity-50 drop-shadow-lg">
                            {formatTime(timeLeft)}
                        </div>
                    </div>
                )}
            </div>

            {/* Modals */}
            {showPreExperience && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm pointer-events-auto">
                    <PreSessionExperienceForm
                        level={level}
                        dayNumber={dayNumber}
                        onComplete={async (expId, data) => {
                            setExperienceId(expId);
                            setPreSessionData(data);
                            setShowPreExperience(false);
                        }}
                        onSkip={() => setShowPreExperience(false)}
                    />
                </div>
            )}

            {showPostExperience && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm pointer-events-auto">
                    <PostSessionExperienceForm
                        experienceId={experienceId || 0}
                        preSessionData={preSessionData || { stress: 5, anxiety: 5, focus: 5, emotionalState: "Neutral" }}
                        onComplete={() => {
                            setShowPostExperience(false);
                            onExit();
                        }}
                    />
                </div>
            )}

            {/* Celebration */}
            {!showPostExperience && sessionComplete && (
                <SessionSummary
                    durationMinutes={20}
                    karmaEarned={200}
                    onExit={onExit}
                    levelName="Level 4 • Transcendence"
                />
            )}

            {/* 3D Scene */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 40], fov: 45 }}>
                    <ambientLight intensity={0.2} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    <CosmicParticles count={3000} />
                    <NebulaCore />

                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />

                    <OrbitControls
                        enableZoom={true}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.2}
                        maxDistance={100}
                        minDistance={10}
                    />
                </Canvas>
            </div>
        </div>
    );
}

"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { X, Settings2 } from 'lucide-react';
import PreSessionExperienceForm from '@/components/meditation/PreSessionExperienceForm';
import PostSessionExperienceForm from '@/components/meditation/PostSessionExperienceForm';
import SessionSummary from '@/components/meditation/features/SessionSummary';

// --- 3D Components ---

function Rock({ position, scale, rotation }: { position: [number, number, number], scale: number, rotation: [number, number, number] }) {
    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh position={position} scale={scale} rotation={rotation} castShadow receiveShadow>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#888" roughness={0.8} flatShading />
            </mesh>
        </Float>
    );
}

function SandPlane() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
            <planeGeometry args={[50, 50, 64, 64]} />
            <meshStandardMaterial
                color="#e6d5b8"
                roughness={1}
                metalness={0}
                displacementScale={0.2}
            />
        </mesh>
    );
}

function CherryBlossoms({ count = 50 }) {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
        return new Array(count).fill(0).map(() => ({
            position: [
                (Math.random() - 0.5) * 20,
                Math.random() * 10 + 5,
                (Math.random() - 0.5) * 20
            ],
            speed: Math.random() * 0.05 + 0.02,
            rotationAxis: [Math.random(), Math.random(), Math.random()]
        }));
    }, [count]);

    useFrame(() => {
        if (!mesh.current) return;
        particles.forEach((particle, i) => {
            // Fall down
            particle.position[1] -= particle.speed;
            if (particle.position[1] < -2) particle.position[1] = 10; // Reset

            dummy.position.set(particle.position[0], particle.position[1], particle.position[2]);
            dummy.rotation.x += 0.01;
            dummy.rotation.y += 0.01;
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <planeGeometry args={[0.2, 0.2]} />
            <meshBasicMaterial color="#ffb7b2" side={THREE.DoubleSide} transparent opacity={0.8} />
        </instancedMesh>
    );
}

// --- Main Component ---

interface Level2Props {
    onExit: () => void;
    onComplete: (minutes: number) => void;
    level?: number;
    dayNumber?: number;
}

export default function Level2ZenGarden({ onExit, onComplete, level = 2, dayNumber = 1 }: Level2Props) {
    // Experience recording state
    const [showPreExperience, setShowPreExperience] = useState(true);
    const [showPostExperience, setShowPostExperience] = useState(false);
    const [experienceId, setExperienceId] = useState<number | null>(null);
    const [preSessionData, setPreSessionData] = useState<any>(null);

    // Session state
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setIsComplete(true);
                    if (experienceId) {
                        setShowPostExperience(true);
                    }
                    onComplete(10);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [onComplete, experienceId]);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center text-white bg-black font-sans">

            {/* UI Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Header Controls */}
                <div className="absolute top-8 left-0 w-full flex justify-between px-8 pointer-events-auto">
                    <Button variant="ghost" className="text-white/60 hover:text-white" onClick={onExit}>
                        <X className="w-6 h-6" />
                    </Button>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full backdrop-blur-md border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                        <span className="text-xs font-medium tracking-wide opacity-80">LEVEL 2 • ZEN GARDEN</span>
                    </div>
                    <Button variant="ghost" className="text-white/60 hover:text-white">
                        <Settings2 className="w-6 h-6" />
                    </Button>
                </div>

                {/* Timer (Bottom) */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <div className="text-4xl font-thin tracking-tighter tabular-nums opacity-90 drop-shadow-lg">
                        {formatTime(timeLeft)}
                    </div>
                    <p className="text-xs uppercase tracking-widest opacity-60">Focus on the falling blossoms</p>
                </div>
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

            {/* Session Complete Screen (Shared Component) */}
            {!showPostExperience && isComplete && (
                <SessionSummary
                    durationMinutes={10}
                    karmaEarned={50}
                    onExit={onExit}
                    levelName="Level 2 • Zen Garden"
                />
            )}

            {/* 3D Scene */}
            <div className="absolute inset-0 z-0">
                <Canvas shadows camera={{ position: [0, 5, 10], fov: 60 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight
                        position={[10, 20, 10]}
                        intensity={1.5}
                        castShadow
                        shadow-mapSize={[1024, 1024]}
                    />
                    <fog attach="fog" args={['#020617', 5, 30]} /> {/* Deep Space Fog */}

                    <group position={[0, -1, 0]}>
                        <SandPlane />
                        <Rock position={[-2, 0.5, 0]} scale={1.2} rotation={[0, 0, 0]} />
                        <Rock position={[3, 0.2, 1]} scale={0.8} rotation={[0.5, 0.5, 0]} />
                        <Rock position={[0, 0.8, -3]} scale={1.5} rotation={[-0.2, 0, 0.2]} />
                    </group>

                    <CherryBlossoms count={100} />

                    <OrbitControls
                        enableZoom={true}
                        maxPolarAngle={Math.PI / 2 - 0.1}
                        minDistance={5}
                        maxDistance={20}
                        autoRotate
                        autoRotateSpeed={0.5}
                    />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                </Canvas>
            </div>
        </div>
    );
}

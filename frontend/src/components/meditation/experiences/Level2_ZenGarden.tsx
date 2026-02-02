"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, ContactShadows, Text } from '@react-three/drei';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { X, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Components ---

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
}

export default function Level2_ZenGarden({ onExit, onComplete }: Level2Props) {
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setIsComplete(true);
                    onComplete(10);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [onComplete]);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    if (isComplete) {
        return (
            <div className="h-full w-full flex flex-col items-center justify-center bg-rose-950 text-white">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center space-y-6"
                >
                    <div className="w-24 h-24 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto ring-4 ring-pink-500/50">
                        <CheckCircle className="w-12 h-12 text-pink-400" />
                    </div>
                    <h2 className="text-4xl font-bold">Zen State Achieved</h2>
                    <p className="text-pink-200 text-xl">+100 Karma Coins Earned</p>
                    <Button onClick={onExit} size="lg" className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-6 rounded-full">
                        Return
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full bg-gradient-to-b from-rose-100 to-rose-200">
            {/* UI Overlay */}
            <div className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-start pointer-events-none">
                <div className="pointer-events-auto">
                    <h2 className="text-2xl font-bold text-rose-900 pointer-events-auto">The Garden</h2>
                    <p className="text-rose-700">Visualize peace. Shape your reality.</p>
                </div>
                <div className="flex gap-4 pointer-events-auto">
                    <div className="px-6 py-2 bg-white/80 backdrop-blur rounded-full text-rose-900 font-mono text-xl font-bold shadow-sm">
                        {formatTime(timeLeft)}
                    </div>
                    <button onClick={onExit} className="p-3 bg-rose-900 text-white rounded-full hover:bg-rose-800 shadow-md">
                        <X className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* 3D Scene */}
            <Canvas shadows camera={{ position: [0, 5, 10], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[10, 20, 10]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                />
                <fog attach="fog" args={['#ffe4e1', 5, 30]} />

                <group position={[0, -1, 0]}>
                    <SandPlane />
                    <Rock position={[-2, 0.5, 0]} scale={1.2} rotation={[0, 0, 0]} />
                    <Rock position={[3, 0.2, 1]} scale={0.8} rotation={[0.5, 0.5, 0]} />
                    <Rock position={[0, 0.8, -3]} scale={1.5} rotation={[-0.2, 0, 0.2]} />
                </group>

                <CherryBlossoms count={100} />

                <OrbitControls
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2 - 0.1} // Prevent going under ground
                    minDistance={5}
                    maxDistance={20}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
}

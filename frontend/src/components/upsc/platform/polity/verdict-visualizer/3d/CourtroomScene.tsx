
"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, ContactShadows, Float, MeshReflectorMaterial } from '@react-three/drei';
import CaseMonolith from './CaseMonolith';
import { LANDMARK_CASES, LandmarkCase } from '../data/landmark-cases';

interface CourtroomSceneProps {
    onSelectCase: (data: LandmarkCase) => void;
    selectedCaseId: string | null;
}

function BackgroundPillars() {
    return (
        <group position={[0, 0, -10]}>
            {[-25, -15, -5, 5, 15, 25].map((x, i) => (
                <mesh key={i} position={[x, 5, 0]}>
                    <boxGeometry args={[2, 12, 2]} />
                    <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
                </mesh>
            ))}
        </group>
    );
}

export default function CourtroomScene({ onSelectCase, selectedCaseId }: CourtroomSceneProps) {
    return (
        <div className="w-full h-full bg-slate-950">
            <Canvas camera={{ position: [0, 8, 20], fov: 45 }}>
                <Suspense fallback={null}>
                    {/* Atmospheric Fog */}
                    <fog attach="fog" args={['#020617', 5, 45]} />

                    {/* Environment */}
                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                    <ambientLight intensity={0.4} />

                    {/* Hero Spotlights */}
                    <spotLight position={[0, 20, 10]} angle={0.4} penumbra={1} intensity={2} color="#fbbf24" castShadow />
                    <spotLight position={[-15, 10, 5]} angle={0.3} penumbra={1} intensity={1} color="#3b82f6" />
                    <spotLight position={[15, 10, 5]} angle={0.3} penumbra={1} intensity={1} color="#ef4444" />

                    {/* Floor with Reflection */}
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]} receiveShadow>
                        <planeGeometry args={[100, 100]} />
                        <MeshReflectorMaterial
                            mirror={0.5}
                            resolution={1024}
                            mixBlur={1}
                            mixStrength={10}
                            roughness={1}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color="#050505"
                            metalness={0.5}
                        />
                    </mesh>

                    {/* Floor Grid */}
                    <gridHelper args={[100, 50, '#1e293b', '#0f172a']} position={[0, 0, 0]} />

                    {/* Scene Elements */}
                    <BackgroundPillars />
                    <ContactShadows resolution={1024} scale={50} blur={2.5} opacity={0.4} far={10} color="#000000" />

                    {/* Cases Timeline */}
                    <group position={[0, 0, 0]}>
                        {LANDMARK_CASES.map((caseData) => (
                            <CaseMonolith
                                key={caseData.id}
                                data={caseData}
                                onClick={onSelectCase}
                                isSelected={selectedCaseId === caseData.id}
                            />
                        ))}
                    </group>

                    {/* Controls */}
                    <OrbitControls
                        enablePan={true}
                        enableZoom={true}
                        minPolarAngle={Math.PI / 6}
                        maxPolarAngle={Math.PI / 2}
                        minDistance={8}
                        maxDistance={40}
                        makeDefault
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}

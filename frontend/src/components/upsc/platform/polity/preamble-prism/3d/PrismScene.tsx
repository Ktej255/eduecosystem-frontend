
"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import CrystalPrism from './CrystalPrism';
import LightBeams from './LightBeams';

export default function PrismScene() {
    return (
        <div className="w-full h-full bg-black">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <Suspense fallback={null}>
                    {/* Environment */}
                    <color attach="background" args={['#000000']} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Environment preset="city" />

                    {/* Lights */}
                    <ambientLight intensity={0.2} />
                    <pointLight position={[-10, 0, 0]} intensity={2} color="white" />

                    {/* The Prism & Beams */}
                    <group rotation={[0, -0.2, 0]}>
                        <CrystalPrism />
                        <LightBeams />
                    </group>

                    {/* Post Processing */}
                    <EffectComposer>
                        <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.8} />
                    </EffectComposer>

                    {/* Controls */}
                    <OrbitControls
                        enablePan={true}
                        enableZoom={true}
                        minDistance={5}
                        maxDistance={20}
                        maxPolarAngle={Math.PI / 1.5}
                        minPolarAngle={Math.PI / 3}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}

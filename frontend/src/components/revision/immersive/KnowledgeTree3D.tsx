"use client";

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { MOCK_TREE_DATA, TreeBranch, TreeLeaf } from './tree-data';
import { fetchKnowledgeTree } from '@/lib/revision/revision-analytics-service';

// --- Helper: Get color based on retention ---
const getLeafColor = (score: number, status: string): string => {
    if (status === 'blooming' || score >= 80) return '#22c55e'; // Green
    if (status === 'healthy' || score >= 50) return '#eab308'; // Yellow
    return '#78350f'; // Brown (withered)
};

const getLeafEmissive = (score: number): string => {
    if (score >= 80) return '#22c55e';
    if (score >= 50) return '#eab308';
    return '#000000';
};

// --- Leaf Component ---
interface LeafProps {
    leaf: TreeLeaf;
    position: [number, number, number];
}

const Leaf = ({ leaf, position }: LeafProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const color = getLeafColor(leaf.retentionScore, leaf.status);
    const emissive = getLeafEmissive(leaf.retentionScore);
    const scale = 0.15 + (leaf.retentionScore / 100) * 0.2;

    // Pulse and Breathing
    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.elapsedTime;

        // Breathing animation for healthy/blooming leaves
        if (leaf.status === 'blooming' || leaf.retentionScore >= 80) {
            meshRef.current.scale.setScalar(scale + Math.sin(time * 2) * 0.03);
            // Dynamic emissive pulse
            if (meshRef.current.material instanceof THREE.MeshStandardMaterial) {
                meshRef.current.material.emissiveIntensity = 0.4 + Math.sin(time * 3) * 0.2;
            }
        }
    });

    // Droop effect for withered leaves
    const isWithered = leaf.status === 'withered' || leaf.retentionScore < 40;
    const droopY = isWithered ? -0.4 : 0;
    const droopRotation = isWithered ? Math.PI / 4 : 0; // Rotate downwards
    const witheredScale = isWithered ? 0.7 : 1.0;
    const finalScale = scale * witheredScale;

    return (
        <Float
            speed={isWithered ? 0.5 : 1.5}
            rotationIntensity={isWithered ? 0.1 : 0.2}
            floatIntensity={isWithered ? 0.1 : 0.3}
        >
            <mesh
                ref={meshRef}
                position={[position[0], position[1] + droopY, position[2]]}
                rotation={[droopRotation, 0, 0]}
                scale={finalScale}
            >
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial
                    color={color}
                    emissive={emissive}
                    emissiveIntensity={leaf.retentionScore >= 80 ? 0.4 : 0.1}
                    roughness={isWithered ? 1.0 : 0.4} // Rougher for withered
                    metalness={isWithered ? 0.0 : 0.2}
                />
            </mesh>
            {/* Topic Label */}
            <Text
                position={[position[0], position[1] + droopY + 0.5, position[2]]}
                fontSize={0.15}
                color="white"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#000000"
            >
                {leaf.topicName.length > 15 ? leaf.topicName.substring(0, 12) + '...' : leaf.topicName}
            </Text>
        </Float>
    );
};

// --- Branch Component ---
interface BranchProps {
    branch: TreeBranch;
    index: number;
    totalBranches: number;
}

const Branch = ({ branch, index, totalBranches }: BranchProps) => {
    const groupRef = useRef<THREE.Group>(null);

    // Procedural Sway (Wind Effect)
    useFrame((state) => {
        if (groupRef.current) {
            const time = state.clock.elapsedTime;
            const swayAmount = 0.02;
            const speed = 0.5;
            groupRef.current.rotation.z = Math.sin(time * speed + index) * swayAmount;
            groupRef.current.rotation.x = Math.cos(time * speed * 0.8 + index) * swayAmount;
        }
    });

    // Calculate radial position
    const angle = (index / totalBranches) * Math.PI * 2;
    const radius = 3;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = 2 + index * 0.5; // Staggered height

    return (
        <group ref={groupRef} position={[x, y, z]}>
            {/* Branch Cylinder */}
            <mesh rotation={[0, 0, Math.PI / 2 - angle]}>
                <cylinderGeometry args={[0.08, 0.12, 2, 8]} />
                <meshStandardMaterial
                    color="#5c4033"
                    roughness={0.9}
                    metalness={0.1}
                    bumpScale={0.05}
                />
            </mesh>

            {/* Subject Label */}
            <Text
                position={[0, -0.5, 0]}
                fontSize={0.25}
                color="#a78bfa"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#2e1065"
            >
                {branch.subjectName}
            </Text>

            {/* Leaves (Topics) */}
            {branch.leaves.map((leaf, leafIdx) => {
                const leafAngle = (leafIdx / branch.leaves.length) * Math.PI - Math.PI / 2;
                const leafRadius = 1.2;
                const lx = Math.cos(leafAngle) * leafRadius;
                const ly = 0.5 + leafIdx * 0.3;
                const lz = Math.sin(leafAngle) * leafRadius;

                return (
                    <Leaf
                        key={leaf.id}
                        leaf={leaf}
                        position={[lx, ly, lz]}
                    />
                );
            })}
        </group>
    );
};

// --- Tree Trunk Component ---
const TreeTrunk = () => {
    return (
        <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.3, 0.5, 3, 12]} />
            <meshStandardMaterial
                color="#3d2914"
                roughness={1.0}
                metalness={0.0}
            />
        </mesh>
    );
};

// --- Main Scene ---
const KnowledgeGardenScene = ({ data }: { data: TreeBranch[] }) => {
    return (
        <group>
            {/* Lighting */}
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <hemisphereLight intensity={0.5} />

            {/* World */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <TreeTrunk />

            {/* Procedural Branches */}
            {data.map((branch, idx) => (
                <Branch
                    key={branch.id}
                    branch={branch}
                    index={idx}
                    totalBranches={data.length}
                />
            ))}

            {/* Ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                <circleGeometry args={[20, 64]} />
                <meshStandardMaterial color="#1a1a1a" transparent opacity={0.8} />
            </mesh>
            <gridHelper args={[40, 40, '#444', '#222']} position={[0, -0.99, 0]} />
        </group>
    );
};

export default function KnowledgeTree3D() {
    const [treeData, setTreeData] = useState<TreeBranch[]>(MOCK_TREE_DATA);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchKnowledgeTree().then(data => {
            if (data && data.length > 0) {
                setTreeData(data);
            }
        }).finally(() => setIsLoading(false));
    }, []);

    const isUsingMockData = treeData === MOCK_TREE_DATA;

    return (
        <div className="w-full h-[600px] bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
            <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur px-4 py-2 rounded-xl border border-white/10">
                <h3 className="text-white font-bold text-lg">Knowledge Garden 3D</h3>
                <p className="text-slate-400 text-xs uppercase tracking-widest">Interactive Retention Visualizer</p>
                {isUsingMockData && (
                    <span className="text-[10px] text-amber-500 block mt-1">*Demo Mode (Connect Learning History)</span>
                )}
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 z-10 bg-black/50 backdrop-blur px-4 py-2 rounded-xl border border-white/10 flex gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-slate-300">High Retention</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="text-slate-300">Moderate</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-amber-900" />
                    <span className="text-slate-300">Needs Review</span>
                </div>
            </div>

            {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white font-semibold animate-pulse">Loading Garden...</div>
                </div>
            ) : (
                <Canvas camera={{ position: [10, 8, 15], fov: 50 }}>
                    <KnowledgeGardenScene data={treeData} />
                    <OrbitControls
                        enablePan={false}
                        minPolarAngle={0}
                        maxPolarAngle={Math.PI / 2}
                        autoRotate
                        autoRotateSpeed={0.5}
                    />
                </Canvas>
            )}
        </div>
    );
}

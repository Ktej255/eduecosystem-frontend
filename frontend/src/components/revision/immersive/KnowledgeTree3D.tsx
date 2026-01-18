"use client";

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { MOCK_TREE_DATA, TreeBranch, TreeLeaf } from './tree-data';
import { fetchKnowledgeTree } from '@/lib/revision/revision-analytics-service';

// --- Components ---

// ... (Leaf, Branch, TreeTrunk components remain same but Branch doesn't need changes as it takes props) 

// ...

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
                <gridHelper args={[40, 40, '#444', '#222']} rotation={[-Math.PI / 2, 0, 0]} />
            </mesh>
        </group>
    );
};

export default function KnowledgeTree3D() {
    const [treeData, setTreeData] = useState<TreeBranch[]>(MOCK_TREE_DATA);

    useEffect(() => {
        fetchKnowledgeTree().then(data => {
            if (data && data.length > 0) {
                setTreeData(data);
            }
        });
    }, []);

    return (
        <div className="w-full h-[600px] bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
            <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur px-4 py-2 rounded-xl border border-white/10">
                <h3 className="text-white font-bold text-lg">Knowledge Garden 3D</h3>
                <p className="text-slate-400 text-xs uppercase tracking-widest">Interactive Retention Visualizer</p>
                {treeData === MOCK_TREE_DATA && (
                    <span className="text-[10px] text-amber-500 block mt-1">*Demo Mode (Connect Learning History)</span>
                )}
            </div>

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
        </div>
    );
}

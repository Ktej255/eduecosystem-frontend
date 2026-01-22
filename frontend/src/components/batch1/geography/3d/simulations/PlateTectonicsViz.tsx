"use client";

import { useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import * as THREE from "three";
import tectonicsData from "../../data/tectonics/plate-tectonics.json";

type BoundaryType = 'divergent' | 'convergent' | 'transform';

interface Plate {
    id: string;
    name: string;
    color: string;
    centerCoords: [number, number];
    movement: { direction: string; speed: string };
}

interface Boundary {
    id: string;
    name: string;
    type: BoundaryType;
    description: string;
    path: [number, number][];
    color: string;
}

// Convert lat/lng to 3D position
function latLngToVector3(lat: number, lng: number, radius: number = 1.52): THREE.Vector3 {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

// Animated boundary line component
function BoundaryLine({ boundary, isActive }: { boundary: Boundary; isActive: boolean }) {
    const lineRef = useRef<THREE.Line>(null);
    const particlesRef = useRef<THREE.Points>(null);

    const { curve, positions, particlePositions } = React.useMemo(() => {
        const points = boundary.path.map(([lat, lng]) => latLngToVector3(lat, lng, 1.53));
        const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);

        const curvePoints = curve.getPoints(50);
        const positions = new Float32Array(curvePoints.length * 3);
        curvePoints.forEach((point, i) => {
            positions[i * 3] = point.x;
            positions[i * 3 + 1] = point.y;
            positions[i * 3 + 2] = point.z;
        });

        // Particles for animation
        const particleCount = 15;
        const particlePositions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const t = i / particleCount;
            const point = curve.getPoint(t);
            particlePositions[i * 3] = point.x;
            particlePositions[i * 3 + 1] = point.y;
            particlePositions[i * 3 + 2] = point.z;
        }

        return { curve, positions, particlePositions };
    }, [boundary.path]);

    const particleProgress = useRef<number[]>(
        Array.from({ length: 15 }, (_, i) => i / 15)
    );

    // Animate particles along boundary
    useFrame((_, delta) => {
        if (particlesRef.current && isActive) {
            const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
            const speed = boundary.type === 'divergent' ? 0.15 : 0.25;

            for (let i = 0; i < 15; i++) {
                particleProgress.current[i] += delta * speed;
                if (particleProgress.current[i] > 1) {
                    particleProgress.current[i] = 0;
                }

                const point = curve.getPoint(particleProgress.current[i]);
                positions[i * 3] = point.x;
                positions[i * 3 + 1] = point.y;
                positions[i * 3 + 2] = point.z;
            }

            particlesRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <group>
            {/* Boundary Line */}
            <line ref={lineRef as any}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color={boundary.color}
                    linewidth={2}
                    opacity={isActive ? 1 : 0.4}
                    transparent
                />
            </line>

            {/* Animated Particles */}
            {isActive && (
                <points ref={particlesRef as any}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={15}
                            array={particlePositions}
                            itemSize={3}
                            args={[particlePositions, 3]}
                        />
                    </bufferGeometry>
                    <pointsMaterial
                        color={boundary.color}
                        size={0.04}
                        transparent
                        opacity={0.9}
                        sizeAttenuation
                    />
                </points>
            )}
        </group>
    );
}

// Plate center marker
function PlateMarker({ plate, isActive, onClick }: {
    plate: Plate;
    isActive: boolean;
    onClick: () => void;
}) {
    const pos = latLngToVector3(plate.centerCoords[0], plate.centerCoords[1], 1.55);

    return (
        <group position={pos.toArray()} onClick={(e) => { e.stopPropagation(); onClick(); }}>
            <mesh>
                <sphereGeometry args={[isActive ? 0.06 : 0.04, 16, 16]} />
                <meshBasicMaterial
                    color={plate.color}
                    opacity={isActive ? 1 : 0.7}
                    transparent
                />
            </mesh>
            {isActive && (
                <Html distanceFactor={3}>
                    <div className="bg-slate-900/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-white/20">
                        <div className="font-bold">{plate.name}</div>
                        <div className="text-slate-400">{plate.movement.direction} @ {plate.movement.speed}</div>
                    </div>
                </Html>
            )}
        </group>
    );
}

function TectonicsScene({
    selectedBoundary,
    selectedPlate,
    onSelectPlate
}: {
    selectedBoundary: BoundaryType | null;
    selectedPlate: string | null;
    onSelectPlate: (id: string | null) => void;
}) {
    const plates = tectonicsData.majorPlates as unknown as Plate[];
    const boundaries = tectonicsData.boundaries as Boundary[];

    return (
        <>
            <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />

            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            {/* Earth Globe */}
            <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#1a365d"
                    roughness={0.9}
                    metalness={0.1}
                    opacity={0.8}
                    transparent
                />
            </mesh>

            {/* Land mass hints */}
            <mesh>
                <sphereGeometry args={[1.51, 64, 64]} />
                <meshStandardMaterial
                    color="#2d4739"
                    roughness={0.9}
                    wireframe
                    opacity={0.2}
                    transparent
                />
            </mesh>

            {/* Plate Boundaries */}
            {boundaries.map((boundary) => (
                <BoundaryLine
                    key={boundary.id}
                    boundary={boundary}
                    isActive={selectedBoundary === null || selectedBoundary === boundary.type}
                />
            ))}

            {/* Plate Center Markers */}
            {plates.map((plate) => (
                <PlateMarker
                    key={plate.id}
                    plate={plate}
                    isActive={selectedPlate === plate.id}
                    onClick={() => onSelectPlate(selectedPlate === plate.id ? null : plate.id)}
                />
            ))}

            <OrbitControls
                enablePan={true}
                enableZoom={true}
                minDistance={2}
                maxDistance={5}
                autoRotate
                autoRotateSpeed={0.2}
            />
        </>
    );
}

// Need to import React for useMemo
import React from "react";

export default function PlateTectonicsViz() {
    const [selectedBoundary, setSelectedBoundary] = useState<BoundaryType | null>(null);
    const [selectedPlate, setSelectedPlate] = useState<string | null>(null);

    const boundaryInfo = tectonicsData.boundaryTypes as Record<BoundaryType, {
        name: string;
        description: string;
        features: string[];
        example: string;
    }>;

    return (
        <div className="w-full h-full relative bg-slate-950">
            <Canvas
                camera={{ position: [0, 1.5, 3.5], fov: 50 }}
                style={{ background: 'linear-gradient(to bottom, #0f172a, #020617)' }}
            >
                <Suspense fallback={null}>
                    <TectonicsScene
                        selectedBoundary={selectedBoundary}
                        selectedPlate={selectedPlate}
                        onSelectPlate={setSelectedPlate}
                    />
                </Suspense>
            </Canvas>

            {/* Boundary Type Selector */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
                <button
                    onClick={() => setSelectedBoundary(null)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${selectedBoundary === null
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700'
                        }`}
                >
                    All
                </button>
                <button
                    onClick={() => setSelectedBoundary('divergent')}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${selectedBoundary === 'divergent'
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700'
                        }`}
                >
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Divergent
                </button>
                <button
                    onClick={() => setSelectedBoundary('convergent')}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${selectedBoundary === 'convergent'
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700'
                        }`}
                >
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Convergent
                </button>
                <button
                    onClick={() => setSelectedBoundary('transform')}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${selectedBoundary === 'transform'
                        ? 'bg-orange-600 text-white'
                        : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700'
                        }`}
                >
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    Transform
                </button>
            </div>

            {/* Info Panel */}
            {selectedBoundary && (
                <div className="absolute bottom-6 left-6 right-6 max-w-md bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 p-4 animate-in slide-in-from-bottom-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                        {boundaryInfo[selectedBoundary].name}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3">
                        {boundaryInfo[selectedBoundary].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {boundaryInfo[selectedBoundary].features.map((feature, i) => (
                            <span key={i} className="bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded">
                                {feature}
                            </span>
                        ))}
                    </div>
                    <p className="text-emerald-400 text-xs">
                        Example: {boundaryInfo[selectedBoundary].example}
                    </p>
                </div>
            )}

            {/* Title */}
            <div className="absolute top-16 left-4 text-white">
                <h2 className="text-xl font-bold">Plate Tectonics</h2>
                <p className="text-slate-400 text-sm">Interactive 3D Visualization</p>
            </div>

            {/* Legend */}
            <div className="absolute bottom-6 right-6 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-xs">
                <div className="text-white font-semibold mb-2">Major Plates</div>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                    {(tectonicsData.majorPlates as unknown as Plate[]).slice(0, 5).map((plate) => (
                        <div key={plate.id} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: plate.color }} />
                            <span className="text-slate-400">{plate.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

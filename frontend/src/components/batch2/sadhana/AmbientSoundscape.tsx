"use client";

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Trees, Waves, Bell, Music, X, ChevronDown, ChevronUp } from 'lucide-react';

interface SoundLayer {
    id: string;
    name: string;
    icon: React.FC<any>;
    frequency: number;
    type: OscillatorType;
    volume: number;
    description: string;
}

const SOUND_LAYERS: SoundLayer[] = [
    { id: 'om-drone', name: 'Om Drone', icon: Music, frequency: 136.1, type: 'sine', volume: 0.06, description: 'Earth frequency (136.1 Hz) — deep resonance' },
    { id: 'tanpura-sa', name: 'Tanpura Sa', icon: Music, frequency: 261.63, type: 'sine', volume: 0.03, description: 'Middle C — fundamental Sa note' },
    { id: 'tanpura-pa', name: 'Tanpura Pa', icon: Music, frequency: 392.0, type: 'sine', volume: 0.02, description: 'Perfect fifth — Pa drone' },
    { id: 'temple-bell', name: 'Temple Bell', icon: Bell, frequency: 396, type: 'sine', volume: 0.04, description: 'Liberation frequency (396 Hz)' },
];

type Preset = 'silent' | 'temple' | 'deep-focus';

const PRESETS: { id: Preset; name: string; layers: string[]; volumes: Record<string, number> }[] = [
    { id: 'silent', name: 'Silent', layers: [], volumes: {} },
    { id: 'temple', name: 'Temple', layers: ['om-drone', 'temple-bell'], volumes: { 'om-drone': 0.06, 'temple-bell': 0.03 } },
    { id: 'deep-focus', name: 'Deep Focus', layers: ['om-drone', 'tanpura-sa', 'tanpura-pa'], volumes: { 'om-drone': 0.08, 'tanpura-sa': 0.04, 'tanpura-pa': 0.03 } },
];

export default function AmbientSoundscape() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLayers, setActiveLayers] = useState<Set<string>>(new Set());
    const [volumes, setVolumes] = useState<Record<string, number>>({});
    const audioCtxRef = useRef<AudioContext | null>(null);
    const oscillatorsRef = useRef<Map<string, { osc: OscillatorNode; gain: GainNode }>>(new Map());

    const getAudioContext = useCallback(() => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new AudioContext();
        }
        return audioCtxRef.current;
    }, []);

    const startLayer = useCallback((layer: SoundLayer) => {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = layer.type;
        osc.frequency.value = layer.frequency;
        gain.gain.value = 0;

        // Add slight detune for warmth
        if (layer.id.includes('tanpura')) {
            osc.detune.value = Math.random() * 4 - 2;
        }

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        // Fade in over 2 seconds
        const vol = volumes[layer.id] ?? layer.volume;
        gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + 2);

        oscillatorsRef.current.set(layer.id, { osc, gain });
    }, [getAudioContext, volumes]);

    const stopLayer = useCallback((layerId: string) => {
        const entry = oscillatorsRef.current.get(layerId);
        if (entry) {
            const ctx = audioCtxRef.current;
            if (ctx) {
                entry.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
                setTimeout(() => {
                    try { entry.osc.stop(); } catch { }
                    oscillatorsRef.current.delete(layerId);
                }, 1200);
            }
        }
    }, []);

    const toggleLayer = useCallback((layer: SoundLayer) => {
        setActiveLayers(prev => {
            const next = new Set(prev);
            if (next.has(layer.id)) {
                next.delete(layer.id);
                stopLayer(layer.id);
            } else {
                next.add(layer.id);
                startLayer(layer);
            }
            return next;
        });
    }, [startLayer, stopLayer]);

    const updateVolume = useCallback((layerId: string, vol: number) => {
        setVolumes(prev => ({ ...prev, [layerId]: vol }));
        const entry = oscillatorsRef.current.get(layerId);
        if (entry && audioCtxRef.current) {
            entry.gain.gain.linearRampToValueAtTime(vol, audioCtxRef.current.currentTime + 0.3);
        }
    }, []);

    const applyPreset = useCallback((preset: typeof PRESETS[number]) => {
        // Stop all current layers
        activeLayers.forEach(id => stopLayer(id));

        // Start preset layers
        const newActive = new Set<string>();
        setVolumes(preset.volumes);

        setTimeout(() => {
            preset.layers.forEach(layerId => {
                const layer = SOUND_LAYERS.find(l => l.id === layerId);
                if (layer) {
                    const vol = preset.volumes[layerId] ?? layer.volume;
                    const modifiedLayer = { ...layer, volume: vol };
                    startLayer(modifiedLayer);
                    newActive.add(layerId);
                }
            });
            setActiveLayers(newActive);
        }, 100);
    }, [activeLayers, startLayer, stopLayer]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            oscillatorsRef.current.forEach(({ osc }) => {
                try { osc.stop(); } catch { }
            });
            audioCtxRef.current?.close();
        };
    }, []);

    const isPlaying = activeLayers.size > 0;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Floating Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl border transition-all ${isPlaying
                        ? 'bg-amber-600 text-white border-amber-500 shadow-amber-500/30'
                        : 'bg-white text-amber-700 border-amber-200 hover:bg-amber-50'
                    }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
            </motion.button>

            {/* Expanded Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-18 right-0 w-80 bg-white/95 backdrop-blur-xl rounded-3xl p-5 shadow-2xl border border-amber-200 mb-2"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-serif font-bold text-amber-950 text-lg">Ambient Soundscape</h3>
                            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-stone-100 rounded-lg">
                                <X className="w-4 h-4 text-stone-400" />
                            </button>
                        </div>

                        {/* Presets */}
                        <div className="flex gap-2 mb-5">
                            {PRESETS.map(preset => (
                                <button
                                    key={preset.id}
                                    onClick={() => applyPreset(preset)}
                                    className="flex-1 text-xs font-bold py-2 px-3 rounded-xl border border-amber-200 text-amber-800 hover:bg-amber-50 transition-colors"
                                >
                                    {preset.name}
                                </button>
                            ))}
                        </div>

                        {/* Sound Layers */}
                        <div className="space-y-3">
                            {SOUND_LAYERS.map(layer => {
                                const isActive = activeLayers.has(layer.id);
                                const Icon = layer.icon;
                                const vol = volumes[layer.id] ?? layer.volume;
                                return (
                                    <div key={layer.id} className={`p-3 rounded-2xl border transition-all ${isActive ? 'bg-amber-50 border-amber-200' : 'bg-stone-50 border-stone-100'}`}>
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => toggleLayer(layer)}
                                                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${isActive ? 'bg-amber-500 text-white shadow-sm' : 'bg-white text-stone-400 border border-stone-200'
                                                    }`}
                                            >
                                                <Icon className="w-4 h-4" />
                                            </button>
                                            <div className="flex-1">
                                                <div className="text-sm font-bold text-amber-950">{layer.name}</div>
                                                <div className="text-[10px] text-stone-500">{layer.description}</div>
                                            </div>
                                        </div>
                                        {isActive && (
                                            <input
                                                type="range"
                                                min="0"
                                                max="0.15"
                                                step="0.005"
                                                value={vol}
                                                onChange={(e) => updateVolume(layer.id, parseFloat(e.target.value))}
                                                className="w-full mt-2 h-1 bg-amber-200 rounded-full appearance-none cursor-pointer accent-amber-500"
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

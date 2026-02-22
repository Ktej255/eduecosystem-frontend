"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MEDITATION_THEME } from './MeditationTheme';

export default function AmbientBackground() {
    // Generate random particles
    // We strive for "Deep Space Zen" - slow, consistent movement
    const particleCount = 20;
    const [particles, setParticles] = useState<Array<{
        id: number;
        x: number;
        y: number;
        size: number;
        duration: number;
        delay: number;
        opacity: number;
    }>>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // %
            y: Math.random() * 100, // %
            size: Math.random() * 4 + 2, // 2-6px
            duration: Math.random() * 20 + 20, // 20-40s (very slow)
            delay: Math.random() * 5,
            opacity: Math.random() * 0.3 + 0.1 // 0.1-0.4 opacity
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Deep Space Gradient Base */}
            <div className={`absolute inset-0 ${MEDITATION_THEME.gradients.deepSpace}`} />

            {/* Northern Lights Mist (Top Left) */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse" />

            {/* Violet Nebula (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[100px] mix-blend-screen opacity-30 animate-pulse" style={{ animationDuration: '8s' }} />

            {/* Floating Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-card"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                        boxShadow: `0 0 ${particle.size * 2}px ${MEDITATION_THEME.colors.primary.teal}`
                    }}
                    animate={{
                        y: [0, -100, 0], // Float up and down gently
                        x: [0, 50, 0], // Slight horizontal drift
                        opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: particle.delay
                    }}
                />
            ))}

            {/* Vignette Overlay for Focus */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80" />
        </div>
    );
}

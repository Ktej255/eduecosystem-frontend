"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    delay: number;
    duration: number;
}

interface InkParticleBackgroundProps {
    particleCount?: number;
    colors?: string[];
    className?: string;
    interactive?: boolean;
}

export default function InkParticleBackground({
    particleCount = 30,
    colors = ['#D4AF37', '#4ECDC4', '#2D6A4F', '#FF8C42'],
    className = '',
    interactive = true,
}: InkParticleBackgroundProps) {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Generate initial particles
    useEffect(() => {
        const newParticles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 6 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                delay: Math.random() * 5,
                duration: Math.random() * 10 + 10,
            });
        }
        setParticles(newParticles);
    }, [particleCount, colors]);

    // Handle mouse movement for interactive effect
    useEffect(() => {
        if (!interactive || !containerRef.current) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setMousePos({ x, y });
        };

        const container = containerRef.current;
        container.addEventListener('mousemove', handleMouseMove);
        return () => container.removeEventListener('mousemove', handleMouseMove);
    }, [interactive]);

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        >
            {/* Gradient overlay based on mouse position */}
            {interactive && (
                <div
                    className="absolute inset-0 opacity-30 transition-all duration-300 ease-out pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)`,
                    }}
                />
            )}

            {/* Floating Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        opacity: 0.4,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 10, -10, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Ink Splatter Decorations */}
            <svg
                className="absolute w-full h-full opacity-5"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {/* Large ink blob */}
                <circle cx="80" cy="20" r="15" fill="#D4AF37" />
                <ellipse cx="20" cy="80" rx="12" ry="8" fill="#4ECDC4" />
                <circle cx="90" cy="70" r="8" fill="#2D6A4F" />
            </svg>

            {/* Quill pen trail effect - decorative curves */}
            <svg
                className="absolute w-full h-full opacity-10"
                viewBox="0 0 1000 600"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M0 300 Q 250 100 500 300 T 1000 300"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                />
                <motion.path
                    d="M0 350 Q 250 550 500 350 T 1000 350"
                    stroke="#4ECDC4"
                    strokeWidth="1.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, delay: 0.5, ease: 'easeInOut' }}
                />
            </svg>
        </div>
    );
}

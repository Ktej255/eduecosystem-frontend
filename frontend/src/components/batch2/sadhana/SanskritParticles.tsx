"use client";

import React, { useEffect, useState, useRef } from 'react';

const SANSKRIT_SYLLABLES = [
    'ॐ', 'श्री', 'ह्रीं', 'क्लीं', 'ऐं', 'ह्रूं', 'स्वाहा', 'नमः',
    'अ', 'इ', 'उ', 'ए', 'ओ', 'क', 'ख', 'ग', 'घ', 'च', 'छ', 'ज',
    'ट', 'ठ', 'ड', 'ढ', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब',
    'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह',
];

interface Particle {
    id: number;
    char: string;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
}

function generateParticle(id: number): Particle {
    return {
        id,
        char: SANSKRIT_SYLLABLES[Math.floor(Math.random() * SANSKRIT_SYLLABLES.length)],
        x: Math.random() * 100,
        y: 100 + Math.random() * 20,
        size: 10 + Math.random() * 18,
        opacity: 0.04 + Math.random() * 0.08,
        duration: 15 + Math.random() * 25,
        delay: Math.random() * 10,
    };
}

export default function SanskritParticles({ count = 20 }: { count?: number }) {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const initial = Array.from({ length: count }, (_, i) => generateParticle(i));
        setParticles(initial);
    }, [count]);

    if (particles.length === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
            {particles.map(p => (
                <span
                    key={p.id}
                    className="absolute font-serif select-none"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        fontSize: `${p.size}px`,
                        opacity: p.opacity,
                        color: '#92400e',
                        animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
                    }}
                >
                    {p.char}
                </span>
            ))}
            <style jsx>{`
                @keyframes floatUp {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: ${0.04 + Math.random() * 0.08};
                    }
                    90% {
                        opacity: ${0.03 + Math.random() * 0.05};
                    }
                    100% {
                        transform: translateY(-120vh) rotate(${Math.random() > 0.5 ? '' : '-'}${15 + Math.random() * 30}deg);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
}

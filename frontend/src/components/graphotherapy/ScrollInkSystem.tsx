"use client";

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ScrollInkSystem() {
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll progress
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform scroll to path length (0 to 1)
    const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    // Opacity fades in after a bit of scrolling
    const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {/* Left Border */}
            <svg className="absolute left-0 top-0 w-24 h-full" preserveAspectRatio="none">
                <motion.path
                    d="M 12 0 V 2000" // Simple vertical line for now, can be complex curve
                    stroke="url(#goldGradientLeft)"
                    strokeWidth="3"
                    fill="none"
                    style={{ pathLength: pathLength, opacity }}
                    className="drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                />
                <defs>
                    <linearGradient id="goldGradientLeft" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                        <stop offset="10%" stopColor="#D4AF37" />
                        <stop offset="90%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Right Border */}
            <svg className="absolute right-0 top-0 w-24 h-full" preserveAspectRatio="none">
                <motion.path
                    d="M 12 0 V 2000" // Mirrored line
                    stroke="url(#goldGradientRight)"
                    strokeWidth="3"
                    fill="none"
                    style={{ pathLength: pathLength, opacity }}
                    className="drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                />
                <defs>
                    <linearGradient id="goldGradientRight" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                        <stop offset="10%" stopColor="#D4AF37" />
                        <stop offset="90%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Decorative Nodes at key scroll points relative to viewport height */}
            {/* Logic: These appear when the 'ink' reaches them */}
            <InkNode top="20%" progress={scrollYProgress} threshold={0.2} side="left" />
            <InkNode top="45%" progress={scrollYProgress} threshold={0.45} side="right" />
            <InkNode top="70%" progress={scrollYProgress} threshold={0.7} side="left" />
        </div>
    );
}

// Sub-component for decorative nodes that 'bloom' when ink reaches them
function InkNode({ top, progress, threshold, side }: { top: string, progress: any, threshold: number, side: 'left' | 'right' }) {
    // Opacity triggers when scroll passes threshold
    const opacity = useTransform(progress,
        [threshold - 0.05, threshold, threshold + 0.05],
        [0, 1, 1]
    );

    // Scale spring for "pop" effect
    const scale = useTransform(progress,
        [threshold - 0.05, threshold],
        [0, 1]
    );

    const style = side === 'left' ? { left: '8px', top } : { right: '8px', top };

    return (
        <motion.div
            style={{ ...style, opacity, scale }}
            className="absolute w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] z-50"
        >
            <div className="absolute inset-0 animate-ping bg-[#D4AF37] opacity-75 rounded-full" />
        </motion.div>
    );
}

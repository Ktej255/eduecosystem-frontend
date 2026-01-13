"use client";

import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
    beforeLabel?: string;
    afterLabel?: string;
    beforeImage?: string;
    afterImage?: string;
    className?: string;
}

export default function BeforeAfterSlider({
    beforeLabel = "Before Graphotherapy",
    afterLabel = "After Graphotherapy",
    beforeImage,
    afterImage,
    className = "",
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    }, []);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl ${className}`}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
        >
            {/* Before - Stressed Handwriting (Left Side) */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                {beforeImage ? (
                    <img
                        src={beforeImage}
                        alt="Before Graphotherapy"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        {/* Placeholder handwriting sample - stressed style */}
                        <svg viewBox="0 0 400 150" className="w-full max-w-md opacity-80">
                            <defs>
                                <filter id="rough">
                                    <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" />
                                    <feDisplacementMap in="SourceGraphic" scale="2" />
                                </filter>
                            </defs>
                            {/* Stressed handwriting - irregular, slanting left, uneven */}
                            <path
                                d="M30 80 Q50 60 70 85 Q90 110 110 75 Q130 40 150 80"
                                stroke="#4a4a4a"
                                strokeWidth="2.5"
                                fill="none"
                                style={{ filter: 'url(#rough)' }}
                            />
                            <path
                                d="M160 90 Q180 50 200 85 Q220 120 240 70"
                                stroke="#4a4a4a"
                                strokeWidth="2"
                                fill="none"
                                style={{ filter: 'url(#rough)' }}
                            />
                            <path
                                d="M260 75 Q280 100 300 65 Q320 30 340 80 Q360 130 380 60"
                                stroke="#4a4a4a"
                                strokeWidth="2.5"
                                fill="none"
                                style={{ filter: 'url(#rough)' }}
                            />
                            {/* Low t-bar */}
                            <line x1="85" y1="75" x2="115" y2="80" stroke="#4a4a4a" strokeWidth="2" />
                            {/* Incomplete y-loop */}
                            <path
                                d="M200 85 Q195 110 210 100"
                                stroke="#4a4a4a"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                        <p className="mt-6 text-lg font-medium text-gray-600 text-center">
                            Irregular strokes • Low t-bars • Incomplete loops
                        </p>
                    </div>
                )}
            </div>

            {/* After - Successful Handwriting (Right Side) */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-white"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                {afterImage ? (
                    <img
                        src={afterImage}
                        alt="After Graphotherapy"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        {/* Placeholder handwriting sample - confident style */}
                        <svg viewBox="0 0 400 150" className="w-full max-w-md">
                            {/* Confident handwriting - smooth, consistent, slight right slant */}
                            <path
                                d="M30 75 C50 65 70 85 90 75 S130 65 150 75"
                                stroke="#0A1628"
                                strokeWidth="2.5"
                                fill="none"
                                className="animate-ink-flow"
                            />
                            <path
                                d="M160 75 C180 65 200 85 220 75 S260 65 280 75"
                                stroke="#0A1628"
                                strokeWidth="2.5"
                                fill="none"
                                className="animate-ink-flow"
                                style={{ animationDelay: '0.2s' }}
                            />
                            <path
                                d="M290 75 C310 65 330 85 350 75 S380 70 390 75"
                                stroke="#0A1628"
                                strokeWidth="2.5"
                                fill="none"
                                className="animate-ink-flow"
                                style={{ animationDelay: '0.4s' }}
                            />
                            {/* High t-bar (willpower) */}
                            <line x1="85" y1="55" x2="125" y2="50" stroke="#D4AF37" strokeWidth="3" />
                            {/* Complete y-loop */}
                            <path
                                d="M220 85 Q210 120 235 125 Q250 115 235 100"
                                stroke="#0A1628"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                        <p className="mt-6 text-lg font-medium text-amber-800 text-center">
                            Smooth flow • High t-bars • Complete loops
                        </p>
                        {/* Gold accent decoration */}
                        <div className="absolute top-4 right-4">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-16 h-16 border-2 border-amber-300 rounded-full opacity-30"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                {/* Handle Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-amber-400">
                    <div className="flex gap-0.5">
                        <div className="w-0.5 h-4 bg-amber-500 rounded-full" />
                        <div className="w-0.5 h-4 bg-amber-500 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-gray-800/80 text-white text-sm font-medium rounded-lg backdrop-blur-sm">
                {beforeLabel}
            </div>
            <div
                className="absolute bottom-4 right-4 px-3 py-1.5 bg-amber-600/90 text-white text-sm font-medium rounded-lg backdrop-blur-sm"
                style={{ opacity: sliderPosition > 20 ? 1 : 0, transition: 'opacity 0.3s' }}
            >
                {afterLabel}
            </div>
        </motion.div>
    );
}

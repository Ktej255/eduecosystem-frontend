"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface Point {
    x: number;
    y: number;
    pressure: number;
    time: number;
}

interface NeuroCanvasProps {
    interactive?: boolean;
    className?: string;
    onSpeedChange?: (speed: number) => void;
}

export default function NeuroCanvas({
    interactive = true,
    className = '',
    onSpeedChange
}: NeuroCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const points = useRef<Point[]>([]);
    const requestRef = useRef<number | null>(null);

    // Physics constants
    const FRICTION = 0.92;
    const GRAVITY = 0; // Ink doesn't drip in this simulation, it flows
    const TRAIL_LENGTH = 40;

    // State for particles
    const particles = useRef<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        life: number;
        size: number;
        color: string;
    }[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const handleResize = () => {
            if (containerRef.current && canvas) {
                canvas.width = containerRef.current.offsetWidth;
                canvas.height = containerRef.current.offsetHeight;
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        // Main Animation Loop
        const animate = (time: number) => {
            if (!ctx || !canvas) return;

            // Clear with trail effect
            ctx.fillStyle = 'rgba(10, 22, 40, 0.2)'; // Dark navy fade
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.current.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vx *= FRICTION;
                p.vy *= FRICTION;
                p.life -= 0.02;
                p.size *= 0.95;

                if (p.life <= 0 || p.size < 0.1) {
                    particles.current.splice(index, 1);
                    return;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color; // Gold or Teal based on velocity
                ctx.fill();
            });

            // Draw Ink Trail
            if (points.current.length > 1) {
                ctx.beginPath();
                ctx.moveTo(points.current[0].x, points.current[0].y);

                for (let i = 1; i < points.current.length - 2; i++) {
                    const xc = (points.current[i].x + points.current[i + 1].x) / 2;
                    const yc = (points.current[i].y + points.current[i + 1].y) / 2;
                    ctx.quadraticCurveTo(points.current[i].x, points.current[i].y, xc, yc);

                    // Tapering width based on index (older = thinner)
                    ctx.lineWidth = 3 * (1 - i / points.current.length);
                }

                // Curve through the last two points
                if (points.current.length > 2) {
                    ctx.quadraticCurveTo(
                        points.current[points.current.length - 2].x,
                        points.current[points.current.length - 2].y,
                        points.current[points.current.length - 1].x,
                        points.current[points.current.length - 1].y
                    );
                }

                const gradient = ctx.createLinearGradient(
                    points.current[0].x, points.current[0].y,
                    points.current[points.current.length - 1].x, points.current[points.current.length - 1].y
                );
                gradient.addColorStop(0, 'rgba(212, 175, 55, 0)'); // Fade out tail
                gradient.addColorStop(0.5, 'rgba(212, 175, 55, 0.5)'); // Gold mid
                gradient.addColorStop(1, '#D4AF37'); // Solid Gold head

                ctx.strokeStyle = gradient;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.stroke();
            }

            // Trim trail
            if (points.current.length > TRAIL_LENGTH) {
                points.current.shift();
            } else if (!isDrawing && points.current.length > 0) {
                points.current.shift(); // Decay when not moving
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [isDrawing]);

    const addParticle = (x: number, y: number, speed: number) => {
        const count = Math.floor(speed * 2); // More particles for faster movement
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * speed * 0.5;
            particles.current.push({
                x,
                y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                life: 1.0,
                size: Math.random() * 3 + 1,
                color: speed > 15 ? 'rgba(78, 205, 196, 0.8)' : 'rgba(212, 175, 55, 0.6)' // Teal for fast, Gold for slow
            });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!interactive || !containerRef.current) return;

        setIsDrawing(true);
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const time = Date.now();

        // Calculate Speed
        let speed = 0;
        if (points.current.length > 0) {
            const lastPoint = points.current[points.current.length - 1];
            const dx = x - lastPoint.x;
            const dy = y - lastPoint.y;
            const dt = time - lastPoint.time;
            if (dt > 0) {
                speed = Math.sqrt(dx * dx + dy * dy) / dt * 10; // Normalize speed
            }
        }

        if (onSpeedChange) onSpeedChange(speed);

        // Add point
        points.current.push({ x, y, pressure: 1, time });

        // Add particles on movement
        if (Math.random() > 0.5) {
            addParticle(x, y, speed);
        }
    };

    const handleMouseLeave = () => {
        setIsDrawing(false);
        if (onSpeedChange) onSpeedChange(0);
    };

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <canvas
                ref={canvasRef}
                className="block w-full h-full pointer-events-none" // Canvas itself doesn't block interactions below
            />
        </div>
    );
}

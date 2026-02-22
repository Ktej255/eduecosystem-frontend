"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Eraser, PenTool, RotateCcw, Save, Grid, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NeuroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('#4f46e5'); // Indigo-600
    const [lineWidth, setLineWidth] = useState(3);
    const [showGrid, setShowGrid] = useState(true);
    const [flowScore, setFlowScore] = useState(0);

    // Physics State
    const lastPos = useRef<{ x: number; y: number } | null>(null);
    const strokeCount = useRef(0);
    const totalLength = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // High DPI setup
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.scale(dpr, dpr);
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
        }

        // Window resize handler
        const handleResize = () => {
            // Basic implementation: clears canvas on resize (could be improved)
            // For now, simpler is stable.
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const startDrawing = (e: React.PointerEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.setPointerCapture(e.pointerId);
        setIsDrawing(true);

        const rect = canvas.getBoundingClientRect();
        lastPos.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    const draw = (e: React.PointerEvent) => {
        if (!isDrawing || !lastPos.current || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;

        // Velocity calc for dynamic width (Simulating Fountain Pen)
        const dist = Math.hypot(currentX - lastPos.current.x, currentY - lastPos.current.y);
        const velocity = dist; // Simplified
        const dynamicWidth = Math.max(1, Math.min(lineWidth + 2, lineWidth - Math.min(velocity * 0.1, 2) + (lineWidth * 0.2)));

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = dynamicWidth;
        ctx.moveTo(lastPos.current.x, lastPos.current.y);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        lastPos.current = { x: currentX, y: currentY };
        totalLength.current += dist;

        // Update "Flow Score" (Gimmick)
        if (totalLength.current % 500 < dist) {
            setFlowScore(prev => Math.min(100, prev + 1));
        }
    };

    const stopDrawing = (e: React.PointerEvent) => {
        setIsDrawing(false);
        lastPos.current = null;
        strokeCount.current += 1;

        const canvas = canvasRef.current;
        if (canvas) canvas.releasePointerCapture(e.pointerId);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Note: DPR scaling handles coordinates
        }
        setFlowScore(0);
        totalLength.current = 0;
    };

    const downloadCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const link = document.createElement('a');
        link.download = 'neuro-canvas-art.png';
        link.href = canvas.toDataURL();
        link.click();
    };

    return (
        <div className="flex flex-col h-[80vh] gap-4">
            {/* Toolbar */}
            <Card className="p-4 flex flex-wrap items-center justify-between gap-4 border-indigo-100 dark:border-indigo-900 bg-card/80/80 backend-blur supports-[backdrop-filter]:backdrop-blur-sm sticky top-0 z-10 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        {['#000000', '#4f46e5', '#ef4444', '#10b981', '#ffffff'].map((c) => (
                            <button
                                key={c}
                                onClick={() => setColor(c)}
                                className={`h-8 w-8 rounded-full border-2 transition-all ${color === c ? 'border-primary scale-110 shadow' : 'border-transparent opacity-80'}`}
                                style={{ backgroundColor: c === '#ffffff' ? '#f3f4f6' : c }}
                                aria-label={`Select color ${c}`}
                            />
                        ))}
                    </div>

                    <div className="h-8 w-px bg-muted mx-2" />

                    <div className="flex items-center gap-2">
                        <PenTool className="h-4 w-4 text-muted-foreground" />
                        <Slider
                            value={[lineWidth]}
                            min={1}
                            max={20}
                            step={1}
                            onValueChange={(v) => setLineWidth(v[0])}
                            className="w-32"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-indigo-500 flex items-center gap-1">
                        <Sparkles className="h-3 w-3" /> Flow: {flowScore}%
                    </span>
                    <Button variant="ghost" size="icon" onClick={() => setShowGrid(!showGrid)} className={showGrid ? "bg-indigo-50" : ""}>
                        <Grid className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={clearCanvas}>
                        <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={downloadCanvas}>
                        <Save className="h-4 w-4 mr-2" /> Save Art
                    </Button>
                </div>
            </Card>

            {/* Canvas Area */}
            <div className="flex-1 relative rounded-xl overflow-hidden border border-border shadow-inner bg-card">
                {/* Grid Background */}
                {showGrid && (
                    <div className="absolute inset-0 pointer-events-none opacity-10"
                        style={{
                            backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}
                    />
                )}

                <canvas
                    ref={canvasRef}
                    className="w-full h-full touch-none cursor-crosshair"
                    onPointerDown={startDrawing}
                    onPointerMove={draw}
                    onPointerUp={stopDrawing}
                    onPointerLeave={stopDrawing}
                />

                <div className="absolute bottom-4 left-4 pointer-events-none select-none">
                    <p className="text-xs text-muted-foreground font-handwriting italic opacity-50">
                        "Let the ink flow, let the mind steady."
                    </p>
                </div>
            </div>
        </div>
    );
}

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Info, Users } from 'lucide-react';

interface Seat {
    id: string;
    x: number;
    y: number;
    party: 'treasury' | 'opposition' | 'neutral' | 'speaker';
    role?: string;
}

export default function ParliamentViz() {
    const [hoveredSeat, setHoveredSeat] = useState<Seat | null>(null);

    // Generate Hemicycle Seating
    const generateSeats = (): Seat[] => {
        const seats: Seat[] = [];
        const rows = 8;

        // Speaker
        seats.push({ id: 'speaker', x: 50, y: 80, party: 'speaker', role: 'Hon\'ble Speaker' });

        for (let r = 1; r <= rows; r++) {
            const radius = 25 + (r * 6); // Increasing radius
            const count = 10 + (r * 5);  // More seats in outer rows

            for (let i = 0; i < count; i++) {
                // Angle from 180 (left) to 360/0 (right) -> actually 180 to 0 for SVG coords usually
                // Let's use 10 degrees to 170 degrees for a semi-circle
                const angleDeg = 180 + (180 * (i / (count - 1)));
                const angleRad = (angleDeg * Math.PI) / 180;

                // SVG Coordinate system: Center is 50,80
                // x = 50 + r * cos(a)
                // y = 80 + r * sin(a)
                // Adjusting for top-semicircle: y goes up as value decreases

                // Let's flip it. 
                // X: 0 to 100.
                // Y: 0 to 100.
                // Center Bottom: 50, 90.

                // Normalized Angle: 0 (Left) to 180 (Right)
                const seatAngle = 180 - (180 * i / (count - 1));
                const rad = (seatAngle * Math.PI) / 180;

                const x = 50 + (radius * Math.cos(rad)); // cos(180) = -1 (Left), cos(0) = 1 (Right)
                // Keep radius logic but flip Cos/Sin if needed.
                // Actually:
                // Left is x < 50. Right is x > 50.
                // cos(180) is -1. So 50 - radius. Correct.

                const y = 90 - (radius * Math.sin(rad)); // sin(90) = 1 (Top). 

                // Party Logic
                // Right side (x > 50) is Treasury. Left is Opposition.
                let party: Seat['party'] = 'neutral';
                let role = 'Member of Parliament';

                if (x > 52) {
                    party = 'treasury';
                    if (r === 1 && i < 3) role = 'Prime Minister & Cabinet';
                } else if (x < 48) {
                    party = 'opposition';
                    if (r === 1 && i > count - 4) role = 'Leader of Opposition';
                }

                seats.push({ id: `r${r}-s${i}`, x, y, party, role });
            }
        }
        return seats;
    };

    const seats = generateSeats();

    return (
        <div className="w-full h-[600px] bg-slate-900 rounded-2xl relative overflow-hidden flex flex-col items-center">
            {/* Header / Info */}
            <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Users className="w-6 h-6 text-amber-400" />
                    Lok Sabha (House of the People)
                </h3>
                <p className="text-muted-foreground text-sm">Interactive Seating Arrangement</p>
            </div>

            {/* Legend */}
            <div className="absolute top-6 right-6 z-10 bg-slate-800/80 p-4 rounded-xl backdrop-blur border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-white">Treasury (Govt)</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-xs text-white">Opposition</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="text-xs text-white">Speaker</span>
                </div>
            </div>

            {/* The Hemicycle Visualization */}
            <div className="relative w-full max-w-3xl aspect-[4/3] mt-12">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Floor Area */}
                    <path d="M 10 90 A 40 40 0 0 1 90 90 L 50 90 Z" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.5" />

                    {/* Well of the House */}
                    <path d="M 35 90 A 15 15 0 0 1 65 90" fill="none" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="1 1" />
                    <text x="50" y="85" textAnchor="middle" fontSize="3" fill="#64748b" className="uppercase font-bold tracking-widest">The Well</text>

                    {/* Seats */}
                    {seats.map((seat) => (
                        <circle
                            key={seat.id}
                            cx={seat.x}
                            cy={seat.y}
                            r={seat.party === 'speaker' ? 1.5 : 0.8}
                            className={`cursor-pointer transition-all duration-300 hover:r-1.5`}
                            fill={
                                seat.party === 'treasury' ? '#22c55e' :
                                    seat.party === 'opposition' ? '#ef4444' :
                                        seat.party === 'speaker' ? '#fbbf24' : '#94a3b8'
                            }
                            onMouseEnter={() => setHoveredSeat(seat)}
                            onMouseLeave={() => setHoveredSeat(null)}
                        />
                    ))}
                </svg>

                {/* Hover Tooltip */}
                {hoveredSeat && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bg-card text-foreground p-3 rounded-lg shadow-xl pointer-events-none z-50 text-center min-w-[150px]"
                        style={{
                            left: `${hoveredSeat.x}%`,
                            top: `${hoveredSeat.y - 10}%`,
                            transform: 'translateX(-50%)'
                        }}
                    >
                        <div className="font-bold text-sm mb-1">{hoveredSeat.role}</div>
                        <div className="text-xs text-muted-foreground capitalize">{hoveredSeat.party} Bench</div>
                    </motion.div>
                )}
            </div>

            {/* Bottom Info Bar */}
            <div className="w-full bg-slate-800 p-4 flex justify-around items-center border-t border-slate-700 mt-auto">
                <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">272+</div>
                    <div className="text-xs text-muted-foreground">Majority Mark</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-white">543</div>
                    <div className="text-xs text-muted-foreground">Total Strength</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">55</div>
                    <div className="text-xs text-muted-foreground">Quorum (10%)</div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { SkillProgress } from '../data/sadhana-data';

interface LotusVisualizerProps {
    skills: SkillProgress[];
}

const LotusVisualizer: React.FC<LotusVisualizerProps> = ({ skills }) => {
    // Helper to generate petal path
    const getPetalPath = (cx: number, cy: number, r: number, angle: number, size: number) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = cx + r * Math.cos(rad);
        const y1 = cy + r * Math.sin(rad);

        // Petal shape points
        const width = size * 0.5;
        const length = size;

        const cp1x = cx + (r + length * 0.5) * Math.cos(rad - width * 0.01);
        const cp1y = cy + (r + length * 0.5) * Math.sin(rad - width * 0.01);

        const tipx = cx + (r + length) * Math.cos(rad);
        const tipy = cy + (r + length) * Math.sin(rad);

        const cp2x = cx + (r + length * 0.5) * Math.cos(rad + width * 0.01);
        const cp2y = cy + (r + length * 0.5) * Math.sin(rad + width * 0.01);

        return `M ${x1} ${y1} Q ${cp1x} ${cp1y} ${tipx} ${tipy} Q ${cp2x} ${cp2y} ${x1} ${y1} Z`;
    };

    const rings = [
        { name: 'Immediate', radius: 40, size: 30, color: 'text-emerald-500', glow: 'emerald' },
        { name: 'Mid-term', radius: 25, size: 25, color: 'text-blue-500', glow: 'blue' },
        { name: 'Evergreen', radius: 10, size: 20, color: 'text-amber-500', glow: 'amber' }
    ];

    return (
        <div className="relative w-full aspect-square max-w-[300px] mx-auto flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <defs>
                    <filter id="glow-emerald">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="glow-blue">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="glow-amber">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Center Core */}
                <circle cx="100" cy="100" r="8" className="fill-slate-800 stroke-slate-700" strokeWidth="1" />

                {rings.map((ring, ringIdx) => (
                    <g key={ring.name}>
                        {[...Array(12)].map((_, petalIdx) => {
                            const angle = petalIdx * 30 + (ringIdx * 15); // Offset each ring
                            const skillId = `${ring.name.toLowerCase()}-${petalIdx}`;
                            const skillProgress = skills.find(s => s.skillId === skillId);

                            let opacity = "0.1";
                            let strokeWidth = "1";
                            let filter = "";

                            if (skillProgress?.maturity === 'Sapling') opacity = "0.3";
                            if (skillProgress?.maturity === 'Tree') opacity = "0.7";
                            if (skillProgress?.maturity === 'Orchard') {
                                opacity = "1";
                                filter = `url(#glow-${ring.glow})`;
                                strokeWidth = "1.5";
                            }

                            return (
                                <path
                                    key={petalIdx}
                                    d={getPetalPath(100, 100, ring.radius, angle, ring.size)}
                                    className={`${ring.color} stroke-current transition-all duration-1000`}
                                    fill="currentColor"
                                    fillOpacity={opacity}
                                    strokeWidth={strokeWidth}
                                    filter={filter}
                                />
                            );
                        })}
                    </g>
                ))}
            </svg>

            {/* Center Symbol */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-500 text-[8px] font-bold uppercase tracking-widest bg-slate-950 p-1 rounded-full border border-slate-800">
                OM
            </div>
        </div>
    );
};

export default LotusVisualizer;

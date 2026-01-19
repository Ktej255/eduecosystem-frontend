import React from 'react';
import { cn } from "@/lib/utils";

interface CosmicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    glowColor?: 'blue' | 'purple' | 'pink' | 'emerald' | 'amber';
    hoverEffect?: boolean;
}

const colorMap = {
    blue: 'shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] border-blue-500/20 bg-blue-500/5',
    purple: 'shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] border-purple-500/20 bg-purple-500/5',
    pink: 'shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] border-pink-500/20 bg-pink-500/5',
    emerald: 'shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] border-emerald-500/20 bg-emerald-500/5',
    amber: 'shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)] border-amber-500/20 bg-amber-500/5',
};

export default function CosmicCard({
    children,
    className,
    glowColor = 'blue',
    hoverEffect = true,
    ...props
}: CosmicCardProps) {
    return (
        <div
            className={cn(
                "relative backdrop-blur-xl rounded-[24px] border transition-all duration-300",
                colorMap[glowColor],
                hoverEffect && "hover:translate-y-[-4px] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.1)]",
                className
            )}
            {...props}
        >
            {/* Inner noise texture for 'frosted' look */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none rounded-[24px]" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

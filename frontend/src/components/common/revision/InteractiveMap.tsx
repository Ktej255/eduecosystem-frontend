import React from 'react';
import { MapCoordinate } from "@/components/batch1/history/data/ancient-types-27";
import { MapPin } from "lucide-react";

export function InteractiveMap({ points, title }: { points: MapCoordinate[], title?: string }) {
    if (!points || points.length === 0) return null;

    return (
        <div className="w-full my-8 bg-stone-50 rounded-xl border border-stone-200 overflow-hidden shadow-sm">
            {title && (
                <div className="bg-stone-100 px-4 py-3 border-b border-stone-200">
                    <h4 className="font-semibold text-stone-800 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-emerald-600" />
                        {title}
                    </h4>
                </div>
            )}

            <div className="relative w-full aspect-square md:aspect-video bg-[#E5E5F7] overflow-hidden"
                style={{ backgroundImage: 'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)', backgroundSize: '10px 10px' }}>

                {/* Temporary Placeholder for actual India SVG */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <span className="text-4xl font-extrabold tracking-widest text-[#444CF7] rotate-[-15deg]">INDIA MAP BASE</span>
                </div>

                {/* Plot Points */}
                {points.map((pt, idx) => (
                    <div
                        key={idx}
                        className="absolute group z-10"
                        style={{ left: `${pt.x}%`, top: `${pt.y}%`, transform: 'translate(-50%, -100%)' }}
                    >
                        <MapPin className="h-6 w-6 text-red-600 animate-bounce drop-shadow-md cursor-pointer" />

                        {/* Tooltip */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] bg-white text-stone-800 text-xs rounded shadow-xl border border-stone-100 p-2 z-20 pointer-events-none">
                            <strong className="block text-sm text-stone-900 border-b pb-1 mb-1">{pt.name}</strong>
                            {pt.description && <span className="text-stone-600 leading-snug">{pt.description}</span>}
                        </div>
                    </div>
                ))}
            </div>

            {/* Legend Area */}
            <div className="px-4 py-3 text-sm text-stone-600 flex flex-wrap gap-x-4 gap-y-2">
                {points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="font-medium">{pt.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

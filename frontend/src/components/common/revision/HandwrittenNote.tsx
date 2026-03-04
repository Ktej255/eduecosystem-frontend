import { cn } from "@/lib/utils";

interface HandwrittenNoteProps {
    title: string;
    content: string;
    styleType?: "cursive" | "marker" | "sketch";
    className?: string;
}

export function HandwrittenNote({ title, content, styleType = "marker", className }: HandwrittenNoteProps) {
    const getStyleClasses = () => {
        switch (styleType) {
            case "cursive":
                return "font-['Caveat',_cursive] text-blue-800 text-xl tracking-wide";
            case "marker":
                return "font-['Indie_Flower',_cursive] text-slate-800 text-lg font-bold";
            case "sketch":
                return "font-['Permanent_Marker',_cursive] text-stone-700 text-sm";
            default:
                return "font-['Caveat',_cursive] text-blue-800 text-xl";
        }
    };

    return (
        <div className={cn(
            "relative p-6 bg-yellow-50 rounded shadow-[2px_2px_5px_rgba(0,0,0,0.1)] border-l-4 border-yellow-400 rotate-[-1deg] my-6 transition-transform hover:rotate-0",
            className
        )}>
            {/* Paper Texture Lines */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #3b82f6 28px)' }}>
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-500 font-bold text-lg">*</span>
                    <h4 className="font-semibold text-stone-800 uppercase tracking-wider text-sm">{title}</h4>
                </div>
                <p className={cn(getStyleClasses(), "leading-relaxed whitespace-pre-wrap")}>
                    {content}
                </p>
            </div>

            {/* Tape Effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm shadow-sm rotate-[2deg]"></div>
        </div>
    );
}

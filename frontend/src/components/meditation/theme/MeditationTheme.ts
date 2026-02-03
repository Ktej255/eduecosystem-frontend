export const MEDITATION_THEME = {
    colors: {
        background: {
            deep: "#020617",    // Deep Space Black (Slate-950)
            void: "#000000",    // Pure Void
            overlay: "rgba(2, 6, 23, 0.85)" // Glassmorphism base
        },
        primary: {
            teal: "#14b8a6",    // Teal-500
            emerald: "#10b981", // Emerald-500
            cyan: "#06b6d4"     // Cyan-500
        },
        accent: {
            violet: "#8b5cf6",  // Violet-500
            fuchsia: "#d946ef", // Fuchsia-500
            amber: "#f59e0b"    // Amber-500
        },
        text: {
            primary: "#f8fafc", // Slate-50
            secondary: "#94a3b8", // Slate-400
            muted: "#475569"    // Slate-600
        }
    },
    gradients: {
        // Main atmospheric gradients
        deepSpace: "bg-gradient-to-b from-slate-950 via-slate-900 to-black",
        northernLights: "bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-violet-900/20",

        // Button & Card gradients
        glassCard: "bg-white/5 border-white/10 backdrop-blur-xl",
        glassCardHover: "bg-white/10 border-white/20 backdrop-blur-xl",

        // Text gradients
        goldText: "bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent",
        tealText: "bg-gradient-to-r from-teal-200 to-emerald-400 bg-clip-text text-transparent"
    },
    animations: {
        breathDuration: 4000, // 4 seconds in, 4 seconds out
        floatDuration: 6000,  // Slow floating elements
        pulseDuration: 3000   // Rhythmic pulsing
    }
};

export const PARTICLES_CONFIG = {
    count: 20,
    minSize: 2,
    maxSize: 6,
    colors: [
        MEDITATION_THEME.colors.primary.teal,
        MEDITATION_THEME.colors.primary.emerald,
        MEDITATION_THEME.colors.accent.violet
    ]
};

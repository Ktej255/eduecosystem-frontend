"use client";

import GeographyDashboard from "@/components/batch1/geography/GeographyDashboard";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function GeographyPage() {
    return (
        <div className="min-h-screen bg-muted">
            <div className="relative bg-slate-950 text-white py-20 px-6 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-indigo-950 to-slate-950 opacity-90" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-4 py-1.5 font-black uppercase tracking-widest text-[10px]">
                            Advanced Earth Systems
                        </Badge>
                        <h1 className="text-6xl font-black tracking-tighter mb-4 uppercase leading-none">
                            Physical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Geography</span>
                        </h1>
                        <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
                            A deep-dive visualization of global systems—from subduction zones 
                            to stratospheric circulation. Built for precision preparation.
                        </p>
                    </motion.div>
                </div>
            </div>
            <GeographyDashboard />
        </div>
    );
}

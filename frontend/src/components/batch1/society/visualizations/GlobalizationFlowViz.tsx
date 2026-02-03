"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Globe, DollarSign, Music, Users } from 'lucide-react';

const FLOWS = [
    { id: 'culture', title: 'Culture', icon: <Music />, from: 'West', to: 'India', desc: 'Food, Fashion, Movies', color: 'bg-pink-500' },
    { id: 'capital', title: 'Capital', icon: <DollarSign />, from: 'Global', to: 'India', desc: 'FDI, FII, Remittances', color: 'bg-green-500' },
    { id: 'people', title: 'Migration', icon: <Users />, from: 'India', to: 'West', desc: 'Brain Drain, Diaspora', color: 'bg-blue-500' },
];

export default function GlobalizationFlowViz() {
    return (
        <div className="bg-slate-900 rounded-xl p-8 relative overflow-hidden min-h-[300px] flex items-center justify-center">
            {/* Background Globe Effect */}
            <div className="absolute inset-0 opacity-20">
                <Globe className="w-full h-full text-slate-700" strokeWidth={0.5} />
            </div>

            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {FLOWS.map((flow, i) => (
                    <motion.div
                        key={flow.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-black/40 backdrop-blur-sm border border-white/10 p-4 rounded-xl text-center group hover:border-white/30 transition-all"
                    >
                        <div className={`w-12 h-12 mx-auto rounded-full ${flow.color} flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                            {flow.icon}
                        </div>
                        <h4 className="text-white font-bold mb-1">{flow.title}</h4>
                        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-2">
                            <span>{flow.from}</span>
                            <span className="text-slate-600">→</span>
                            <span>{flow.to}</span>
                        </div>
                        <p className="text-xs text-slate-300 bg-white/5 py-1 px-2 rounded-lg inline-block">
                            {flow.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, BookOpen, Newspaper, Calculator, Archive, ArrowRight, Zap, Info, Globe, ShieldCheck, Landmark, TreeDeciduous, Scale, GitMerge, Target, Palette, Rocket, Factory } from 'lucide-react';
import IndiaMap from './MapRoom/IndiaMap';
import MinistryDatabase from './MinistryDatabase/MinistryDatabase';
import PremiumCAPortal from './PremiumCAPortal/PremiumCAPortal';
import CSATToolkit from './CSATToolkit/CSATToolkit';
import ArchiveCompiler from './ArchiveCompiler/ArchiveCompiler';
import BudgetDeepDive from './BudgetDeepDive/BudgetDeepDive';
import ISFRAnalysis from './ISFR/ISFRAnalysis';
import IRTimeline from './IRTimeline/IRTimeline';
import ConstitutionalMatrix from './ConstitutionalMatrix/ConstitutionalMatrix';
import SchemesConvergence from './SchemesConvergence/SchemesConvergence';
import MapQuiz from './MapRoom/MapQuiz';
import VisualGeoLab from './VisualGeoLab/VisualGeoLab';
import ArticleArcade from './platform/polity/revision/ArticleArcade';
import PerformingArtsMatrix from './subjects/art-culture/visuals/PerformingArtsMatrix';
import BudgetExplorerViz from './subjects/economy/visualizations/BudgetExplorerViz';
import SpaceOrbitViz from './subjects/science-tech/visualizations/SpaceOrbitViz';
import CarbonCycleViz from './subjects/environment/visualizations/CarbonCycleViz';
import DefenseTechViz from './subjects/science-tech/visualizations/DefenseTechViz';
import CustomTestEngine from './CustomTestEngine/CustomTestEngine';

const MODULES = [
    {
        id: 'custom-test',
        title: 'Custom Test Engine',
        description: 'Generate personalized mock tests by selecting specific subjects and chapters from the 4,000+ question pool.',
        icon: Target,
        color: 'bg-blue-600',
        textColor: 'text-blue-600',
        badge: 'Priority'
    },
    {
        id: 'map-room',
        title: 'Interactive Map Room',
        description: 'Vibrant, clickable India map with toggleable layers for National Parks, Minerals, and Biodiversity.',
        icon: Globe,
        color: 'bg-blue-500',
        textColor: 'text-blue-500',
        badge: 'Flagship'
    },
    {
        id: 'ministry-db',
        title: 'Ministry Database',
        description: 'Comprehensive tracker for 50+ Ministries, их schemes, reports, and PYQ relevance.',
        icon: ShieldCheck,
        color: 'bg-indigo-500',
        textColor: 'text-indigo-500'
    },
    {
        id: 'premium-ca',
        title: 'Premium CA Portal',
        description: 'Last 24 months of Current Affairs sequenced by subject relevance and chapter connectivity.',
        icon: Newspaper,
        color: 'bg-emerald-500',
        textColor: 'text-emerald-500'
    },
    {
        id: 'csat-toolkit',
        title: 'CSAT Formula Toolkit',
        description: 'Interactive formula sheets and rapid-solve shortcuts for Quant and Logical Reasoning.',
        icon: Calculator,
        color: 'bg-orange-500',
        textColor: 'text-orange-500'
    },
    {
        id: 'archive-compiler',
        title: 'PIB & Archive Compiler',
        description: 'One-stop shop for PIB Year End Reviews, India Yearbook 2026, and Yojana archives.',
        icon: Archive,
        color: 'bg-purple-500',
        textColor: 'text-purple-500'
    },
    {
        id: 'budget-2026',
        title: 'Budget 2026 Deep Dive',
        description: 'Interactive sectoral allocations, fiscal deficit trends, and UPSC-focused policy summaries.',
        icon: Landmark,
        color: 'bg-amber-500',
        textColor: 'text-amber-500',
        badge: 'New'
    },
    {
        id: 'isfr-2026',
        title: 'ISFR 2026 Analysis',
        description: 'India State of Forest Report data: forest cover by state, mangrove trends, and carbon stock.',
        icon: TreeDeciduous,
        color: 'bg-emerald-500',
        textColor: 'text-emerald-500',
        badge: 'Eco'
    },
    {
        id: 'ir-timeline',
        title: 'IR Global Timeline',
        description: 'Chronological tracker for 2023-24 global events, India’s stance, and bilateral insights.',
        icon: Globe,
        color: 'bg-indigo-600',
        textColor: 'text-indigo-600',
        badge: 'Critical'
    },
    {
        id: 'constitutional-matrix',
        title: 'Constitutional Matrix',
        description: 'Comparison tool for constitutional bodies: ECI, UPSC, CAG, FC. Tenure, Removal & Powers.',
        icon: Scale,
        color: 'bg-blue-600',
        textColor: 'text-blue-600',
        badge: 'Polity'
    },
    {
        id: 'schemes-convergence',
        title: 'Schemes Convergence',
        description: 'Visual map of inter-ministerial synergy. See how different schemes converge on common development goals.',
        icon: GitMerge,
        color: 'bg-amber-600',
        textColor: 'text-amber-600',
        badge: 'Governance'
    },
    {
        id: 'map-quiz',
        title: 'Map-based Quiz',
        description: 'Locate National Parks, Rivers, and Minerals on the India map to improve spatial retention.',
        icon: Target,
        color: 'bg-rose-600',
        textColor: 'text-rose-600',
        badge: 'High Yield'
    },
    {
        id: 'visual-lab',
        title: 'Visual Geo Lab',
        description: 'Immersive 3D simulations of Plate Tectonics, Monsoon, Volcanoes, and more.',
        icon: Globe,
        color: 'bg-indigo-600',
        textColor: 'text-indigo-600',
        badge: 'Interactive 3D'
    },
    {
        id: 'article-arcade',
        title: 'Article Arcade',
        description: 'Gamified memorization of Constitutional Articles. High-speed पॉलिटी training.',
        icon: Zap,
        color: 'bg-purple-600',
        textColor: 'text-purple-600',
        badge: 'Gamified'
    },
    {
        id: 'performing-arts',
        title: 'Art Matrix',
        description: 'Visual map of Classical Dances and Music Gharanas with UPSC high-yield tips.',
        icon: Palette,
        color: 'bg-rose-600',
        textColor: 'text-rose-600',
        badge: 'Art & Culture'
    },
    {
        id: 'economic-3d',
        title: 'Economic Pulse 3D',
        description: 'Volumetric analysis of fiscal flows, budget allocations, and economic trends.',
        icon: Landmark,
        color: 'bg-indigo-500',
        textColor: 'text-indigo-500',
        badge: 'New Economy'
    },
    {
        id: 'space-lab',
        title: 'Space & Orbit Lab',
        description: '3D simulation of Orbital Mechanics, LEO/GEO satellites, and mission trajectories.',
        icon: Rocket,
        color: 'bg-cyan-500',
        textColor: 'text-cyan-500',
        badge: 'Sci-Tech'
    },
    {
        id: 'environment-flux',
        title: 'Environment Flux 3D',
        description: 'Interactive Carbon Cycle and global climate flux simulations.',
        icon: Factory,
        color: 'bg-emerald-600',
        textColor: 'text-emerald-600',
        badge: 'Environment'
    },
    {
        id: 'defense-registry',
        title: 'Defense Tech Registry',
        description: 'Interactive missile system database with ballistic vs cruise trajectory simulations.',
        icon: ShieldCheck,
        color: 'bg-rose-500',
        textColor: 'text-rose-500',
        badge: 'Security'
    }
];

export default function KnowledgeBuilderDashboard() {
    const [selectedModule, setSelectedModule] = useState<string | null>(null);

    return (
        <div className="space-y-8">
            <AnimatePresence mode="wait">
                {!selectedModule ? (
                    <motion.div 
                        key="grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {MODULES.map((mod) => (
                            <div 
                                key={mod.id}
                                onClick={() => setSelectedModule(mod.id)}
                                className="group relative bg-card dark:bg-[#111] p-6 rounded-3xl border border-border hover:border-blue-500/50 transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-xl"
                            >
                                <div className="absolute top-0 right-0 p-4">
                                    {mod.badge && (
                                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                            {mod.badge}
                                        </span>
                                    )}
                                </div>
                                <div className={`w-14 h-14 ${mod.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <mod.icon className={`w-7 h-7 ${mod.textColor}`} />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">{mod.title}</h3>
                                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                    {mod.description}
                                </p>
                                <div className="flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                                    ENTER MODULE <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                                
                                {/* Background Glow */}
                                <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${mod.color} opacity-5 blur-3xl rounded-full group-hover:opacity-10 transition-opacity`}></div>
                            </div>
                        ))}

                        {/* Concept of the Day Card */}
                        <div className="lg:col-span-1 bg-gradient-to-br from-gray-900 to-black p-6 rounded-3xl border border-white/10 text-white relative overflow-hidden flex flex-col justify-between">
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 text-yellow-500 mb-4">
                                    <Zap className="w-5 h-5 fill-current" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Aura Insight</span>
                                </div>
                                <h4 className="text-lg font-bold mb-2">The "Great Trigonometrical Survey"</h4>
                                <p className="text-xs text-gray-400 mb-4">
                                    Did you know? The survey that mapped India started in 1802 and took over 70 years to complete. Connects to: Geography (Mapping) & Modern History (Survey of India).
                                </p>
                            </div>
                            <button className="relative z-10 w-full py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition-colors">
                                READ FULL STORY
                            </button>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[80px]"></div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="content"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="bg-card dark:bg-[#0c0c0c] min-h-[600px] rounded-3xl border border-border p-6 relative"
                    >
                        <button 
                            onClick={() => setSelectedModule(null)}
                            className="absolute top-6 left-6 flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors z-50 bg-muted/50 px-3 py-1.5 rounded-full"
                        >
                            <ArrowRight className="w-4 h-4 rotate-180" /> BACK TO TOOLS
                        </button>
                        
                        <div className="mt-12 w-full h-full">
                            {selectedModule === 'custom-test' ? (
                                <CustomTestEngine />
                            ) : selectedModule === 'map-room' ? (
                                <IndiaMap />
                            ) : selectedModule === 'ministry-db' ? (
                                <MinistryDatabase />
                            ) : selectedModule === 'premium-ca' ? (
                                <PremiumCAPortal />
                            ) : selectedModule === 'csat-toolkit' ? (
                                <CSATToolkit />
                            ) : selectedModule === 'archive-compiler' ? (
                                <ArchiveCompiler />
                            ) : selectedModule === 'budget-2026' ? (
                                <BudgetDeepDive />
                            ) : selectedModule === 'isfr-2026' ? (
                                <ISFRAnalysis />
                            ) : selectedModule === 'ir-timeline' ? (
                                <IRTimeline />
                            ) : selectedModule === 'constitutional-matrix' ? (
                                <ConstitutionalMatrix />
                            ) : selectedModule === 'schemes-convergence' ? (
                                <SchemesConvergence />
                            ) : selectedModule === 'map-quiz' ? (
                                <MapQuiz />
                            ) : selectedModule === 'visual-lab' ? (
                                <VisualGeoLab />
                            ) : selectedModule === 'article-arcade' ? (
                                <ArticleArcade />
                            ) : selectedModule === 'performing-arts' ? (
                                <PerformingArtsMatrix />
                            ) : selectedModule === 'economic-3d' ? (
                                <BudgetExplorerViz />
                            ) : selectedModule === 'space-lab' ? (
                                <SpaceOrbitViz />
                            ) : selectedModule === 'environment-flux' ? (
                                <CarbonCycleViz />
                            ) : selectedModule === 'defense-registry' ? (
                                <DefenseTechViz />
                            ) : (
                                <div className="flex flex-col items-center justify-center h-[500px] text-center">
                                    <div className="bg-muted w-20 h-20 rounded-full flex items-center justify-center mb-6">
                                        <Info className="text-muted-foreground" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-2">Module Under Construction</h2>
                                    <p className="text-muted-foreground max-w-md">
                                        This Knowledge Builder module is part of the April Phase development. Map Room is currently available for testing.
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

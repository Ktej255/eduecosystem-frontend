'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Target, Compass, Flame, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { SKILLS_METADATA } from '../data/sadhana-data';
import { useSadhanaSkillTracker } from '../../hooks/useSadhanaSkillTracker';

const CATEGORY_STYLES = {
    'Immediate': { color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200', icon: Target },
    'Mid-term': { color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200', icon: Compass },
    'Evergreen': { color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200', icon: Flame },
};

interface SkillDetailDrawerProps {
    skillId: string | null;
    onClose: () => void;
}

export function SkillDetailDrawer({ skillId, onClose }: SkillDetailDrawerProps) {
    const { skillProgress: skills } = useSadhanaSkillTracker();

    if (!skillId) return null;

    const skillMeta = SKILLS_METADATA.find(s => s.id === skillId);
    if (!skillMeta) return null;

    const skillProgress = skills.find(s => s.skillId === skillId);
    const hasPoints = skillProgress && skillProgress.points > 0;
    const style = CATEGORY_STYLES[skillMeta.category];
    const Icon = style.icon;

    // How to level up logic
    const firstAction = skillMeta.actions?.[0];

    return (
        <AnimatePresence>
            {skillId && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-[var(--sp-surface)] border-l border-[var(--sp-border)] z-[120] shadow-2xl flex flex-col overflow-hidden text-[var(--sp-text-hi)]"
                    >
                        {/* Header */}
                        <div className="relative p-6 sm:p-8 shrink-0 border-b border-[var(--sp-border)]">
                            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-20 ${style.bg.replace('bg-', 'bg-')}`} />

                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 bg-[var(--sp-bg)] hover:bg-[var(--sp-border)] rounded-full transition-colors z-10 text-[var(--sp-text-hi)]"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="relative z-10">
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 bg-[var(--sp-bg)] border ${style.border} ${style.color}`}>
                                    <Icon className="w-3.5 h-3.5" />
                                    {skillMeta.category} Petal
                                </span>
                                <h2 className="text-3xl font-serif font-bold text-[var(--sp-gold)] mb-2 leading-tight">
                                    {skillMeta.name}
                                </h2>
                                <p className="text-[var(--sp-text-lo)] leading-relaxed font-medium">
                                    {skillMeta.description}
                                </p>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">

                            {/* Current Status */}
                            <div className="bg-[var(--sp-bg)] rounded-2xl p-6 border border-[var(--sp-border)] shadow-sm">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--sp-text-lo)] mb-4">Current Status</h3>
                                <div className="flex items-end justify-between mb-4">
                                    <div>
                                        <div className="text-3xl font-black font-serif text-[var(--sp-gold)]">
                                            {skillProgress?.points || 0} <span className="text-sm font-sans font-medium text-[var(--sp-text-lo)]">pts</span>
                                        </div>
                                        <p className="text-sm text-[var(--sp-text-lo)] capitalize mt-1">
                                            Maturity: <strong className="text-[var(--sp-text-hi)]">{skillProgress?.maturity || 'Undiscovered'}</strong>
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-[var(--sp-text-lo)] mb-1">Last Practiced</p>
                                        <p className="text-sm font-bold text-[var(--sp-text-hi)]">
                                            {skillProgress?.lastPracticed ? new Date(skillProgress.lastPracticed).toLocaleDateString() : 'Never'}
                                        </p>
                                    </div>
                                </div>

                                {/* Progress Bar Visualization */}
                                <div className="w-full h-3 bg-[var(--sp-surface)] rounded-full overflow-hidden border border-[var(--sp-border)]">
                                    <div
                                        className="h-full bg-gradient-to-r from-[var(--sp-gold)] to-[var(--sp-teal)] rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${Math.min(100, (skillProgress?.points || 0) / 100 * 100)}%` }}
                                    />
                                </div>
                            </div>

                            {/* How to Level Up */}
                            {firstAction && (
                                <div className="bg-[var(--sp-surface)] rounded-2xl p-6 border border-[var(--sp-teal)]/30 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[var(--sp-teal)]/5 group-hover:bg-[var(--sp-teal)]/10 transition-colors" />
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--sp-teal)] mb-3 relative z-10 flex items-center gap-2">
                                        <PlayCircle className="w-4 h-4" />
                                        How to Level Up
                                    </h3>
                                    <p className="text-[var(--sp-text-hi)] mb-6 relative z-10">
                                        {firstAction.description} ({firstAction.eventsNeeded} needed) in the {firstAction.moduleName} module.
                                    </p>
                                    <Link
                                        href={firstAction.href}
                                        className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[var(--sp-teal)] hover:bg-[var(--sp-teal)]/80 text-[var(--sp-bg)] font-bold rounded-xl transition-all relative z-10"
                                        onClick={onClose}
                                    >
                                        Go to {firstAction.moduleName}
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                </div>
                            )}

                            {/* Maturity Trajectory */}
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--sp-text-lo)] mb-4">Maturity Trajectory</h3>
                                <div className="space-y-3">
                                    <div className={`p-5 rounded-xl border transition-all ${skillProgress?.maturity === 'Sapling' ? 'border-[var(--sp-gold)] bg-[var(--sp-gold)]/10' : 'border-[var(--sp-border)] bg-[var(--sp-bg)]'}`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-[var(--sp-text-hi)] flex items-center gap-2">🌱 Sapling</span>
                                            {skillProgress?.maturity === 'Sapling' && <span className="text-[10px] font-bold text-[var(--sp-gold)] uppercase tracking-wider">Active Stage</span>}
                                        </div>
                                        <p className="text-sm text-[var(--sp-text-lo)]">{skillMeta.maturityLogic.sapling}</p>
                                    </div>

                                    <div className={`p-5 rounded-xl border transition-all ${skillProgress?.maturity === 'Tree' ? 'border-[var(--sp-teal)] bg-[var(--sp-teal)]/10' : 'border-[var(--sp-border)] bg-[var(--sp-bg)]'}`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-[var(--sp-text-hi)] flex items-center gap-2">🌳 Tree</span>
                                            {skillProgress?.maturity === 'Tree' && <span className="text-[10px] font-bold text-[var(--sp-teal)] uppercase tracking-wider">Active Stage</span>}
                                        </div>
                                        <p className="text-sm text-[var(--sp-text-lo)]">{skillMeta.maturityLogic.tree}</p>
                                    </div>

                                    <div className={`p-5 rounded-xl border transition-all ${skillProgress?.maturity === 'Orchard' ? 'border-[var(--sp-rose)] bg-[var(--sp-rose)]/10' : 'border-[var(--sp-border)] bg-[var(--sp-bg)]'}`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-[var(--sp-text-hi)] flex items-center gap-2">🌺 Orchard</span>
                                            {skillProgress?.maturity === 'Orchard' && <span className="text-[10px] font-bold text-[var(--sp-rose)] uppercase tracking-wider">Mastered</span>}
                                        </div>
                                        <p className="text-sm text-[var(--sp-text-lo)]">{skillMeta.maturityLogic.orchard}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

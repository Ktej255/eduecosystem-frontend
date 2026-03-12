import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Briefcase, Globe, Brain, Sparkles, Heart, Zap,
    ArrowRight, Lock, CheckCircle2, TrendingUp,
    Wallet, ShieldCheck, Cpu, Mic2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { holisticService, SkillProgress } from '@/services/holisticService';
import { toast } from 'sonner';

const ICON_MAP: Record<string, React.ElementType> = {
    'Wallet': Wallet,
    'Cpu': Cpu,
    'Brain': Brain,
    'Mic2': Mic2,
    'Globe': Globe,
    'Briefcase': Briefcase,
    'Sparkles': Sparkles,
    'ShieldCheck': ShieldCheck
};

export default function SkillHub() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [skills, setSkills] = useState<SkillProgress[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const data = await holisticService.getSkills();
                setSkills(data);
            } catch (error) {
                console.error('Failed to fetch skills:', error);
                // Fallback to local data if API fails to avoid empty UI
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    const filteredSkills = selectedCategory
        ? skills.filter(s => s.category === selectedCategory)
        : skills;

    const handleUnlock = async (skillId: string) => {
        try {
            await holisticService.unlockSkill(skillId);
            toast.success("Skill unlocked!");
            // Refresh skills
            const data = await holisticService.getSkills();
            setSkills(data);
        } catch (error) {
            toast.error("Failed to unlock skill");
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-20">
                <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">36 Skills Hub</h2>
                    <p className="text-white/40 text-sm max-w-lg italic">
                        "Your degree gets you an interview; your skills get you the life you want."
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {['financial', 'digital', 'mindset', 'personal'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                            className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${selectedCategory === cat
                                ? 'bg-card text-black shadow-lg shadow-white/10'
                                : 'bg-card/5 text-white/40 hover:bg-card/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredSkills.length === 0 && (
                    <div className="col-span-full py-20 text-center text-white/40 text-sm">
                        No skills found in this category.
                    </div>
                )}
                {filteredSkills.map((skill, idx) => {
                    const Icon = (ICON_MAP[skill.icon] || Sparkles) as any;
                    return (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-500 ${skill.isLocked
                                ? 'bg-neutral-900/50 border-white/5 opacity-60'
                                : 'bg-gradient-to-br from-neutral-900 to-black border-white/10 hover:border-white/20'
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-2xl ${skill.color || 'bg-blue-500'} flex items-center justify-center mb-4 shadow-lg`}>
                                <Icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                {skill.title}
                                {skill.isLocked && <Lock className="w-3 h-3 text-white/20" />}
                            </h3>

                            <p className="text-white/40 text-xs leading-relaxed mb-6 group-hover:text-white/60 transition-colors">
                                {skill.description}
                            </p>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-[10px] font-bold uppercase text-white/20 tracking-tighter">
                                    <span>Mastery</span>
                                    <span>{skill.progress}%</span>
                                </div>
                                <Progress value={skill.progress} className="h-1 bg-card/5" />
                            </div>

                            {!skill.isLocked ? (
                                <Link
                                    href={`/student/holistic/skills/${skill.id}`}
                                    className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-card/5 hover:bg-card/10 rounded-xl text-xs font-bold text-white transition-all group-hover:bg-blue-600"
                                >
                                    {skill.progress === 100 ? 'Review Skill' : 'Resume Learning'}
                                    <ArrowRight className="w-3 h-3" />
                                </Link>
                            ) : (
                                <button
                                    onClick={() => handleUnlock(skill.id)}
                                    className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-card/20 hover:bg-card/30 rounded-xl text-xs font-bold text-white transition-all"
                                >
                                    <Lock className="w-3 h-3" /> Unlock Skill
                                </button>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 text-center">
                <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Why 36 Skills?</h4>
                <p className="text-sm text-white/60 max-w-2xl mx-auto leading-relaxed">
                    Holistic development means bridging the gap between preparation and life.
                    These 36 modules are designed to secure your financial, mental, and professional future alongside your academic journey.
                </p>
                <div className="flex justify-center gap-8 mt-8">
                    {[
                        { label: 'Unlocking Today', count: '12' },
                        { label: 'Skills Mastered', count: skills.filter(s => s.status === 'mastered').length },
                        { label: 'Global Ranking', count: '#420' }
                    ].map(stat => (
                        <div key={stat.label}>
                            <div className="text-2xl font-bold text-white">{stat.count}</div>
                            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

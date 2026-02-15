"use client";

import React from 'react';
import SkillHub from '@/components/holistic/SkillHub';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-black text-white pb-20">
            {/* Header */}
            <div className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/student/dashboard">
                        <Button variant="ghost" size="icon" className="text-white/40 hover:text-white">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold">Holistic Development</h1>
                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Pillar 5 Extension • 36 Skills</p>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 py-12">
                <SkillHub />
            </main>
        </div>
    );
}

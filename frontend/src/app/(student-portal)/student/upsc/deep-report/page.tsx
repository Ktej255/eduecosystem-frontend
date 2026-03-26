"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { BarChart3, ChevronLeft, Calendar, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DeepReportPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-4 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              UPSC Deep Report
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Advanced analytics and performance insights for your civil services preparation.
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-white rounded-full px-6">
              Export PDF
            </Button>
            <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-6 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Refresh Data
            </Button>
          </div>
        </div>

        {/* Placeholder Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Preparation Score', value: '84%', icon: Target, color: 'text-emerald-400' },
            { label: 'Total Study Time', value: '342h', icon: Calendar, color: 'text-blue-400' },
            { label: 'Achievements', value: '12', icon: Award, color: 'text-amber-400' }
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-3xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className={`h-full bg-current ${stat.color}`} style={{ width: stat.value }} />
                </div>
              </div>
              <p className="text-zinc-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Large Visual Placeholder */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative aspect-[16/7] bg-[#121214] border border-white/5 rounded-[2rem] flex flex-col items-center justify-center text-center p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="bg-zinc-900 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto border border-white/5 shadow-2xl">
                <BarChart3 className="w-10 h-10 text-white animate-pulse" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Deep Analytics Engine</h2>
                <p className="text-zinc-500 max-w-md mx-auto">
                  Our advanced AI is currently analyzing your performance data. 
                  Detailed reports for Polity, History, and Geography will appear here shortly.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                {['Accuracy', 'Retention', 'Consistency', 'Speed'].map((tag) => (
                  <span key={tag} className="px-4 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
        </div>

        {/* Footer/Note */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-sm">
          <p>© 2026 EduEcosystem. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ModeToggle from '@/components/guided/ModeToggle';
import { Brain } from 'lucide-react';
import ModuleCard from '@/components/guided/ModuleCard';
import { Leaf, Sprout, Network } from 'lucide-react';

interface ModuleStatus {
  module_id: number;
  title: string;
  clip_count: number;
  is_unlocked: boolean;
  completion_percent: number;
}

export default function GuidedFoundationPage() {
  const router = useRouter();
  const [modules, setModules] = useState<ModuleStatus[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/guided/foundation/environment/modules')
      .then((r) => r.json())
      .then((data) => {
        setModules(Array.isArray(data) ? data : []);
      })
      .catch(() => setModules([]))
      .finally(() => setLoading(false));
  }, []);

  const handleModuleClick = (mod: ModuleStatus) => {
    router.push(`/student/upsc/environment/guided/module/${mod.module_id}`);
  };

  // Find the first incomplete unlocked module
  const currentModuleIndex = modules.findIndex(
    (m) => m.is_unlocked && m.completion_percent < 100
  );

  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#020617]">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-white dark:bg-[#0F172A] border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#375623] flex items-center justify-center">
              <Leaf className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <div className="font-bold text-neutral-800 dark:text-white text-base leading-none">
                Environment
              </div>
              <div className="text-xs text-neutral-400">Guided Learning Path</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/student/upsc/environment/guided/knowledge-graph')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600/10 border border-indigo-600/30 text-indigo-400 hover:bg-indigo-600/20 transition-all text-sm font-medium"
            >
              <Network className="w-4 h-4" />
              Knowledge Graph
            </button>
            <button
              onClick={() => router.push('/student/upsc/environment/guided/dashboard')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-600/10 border border-violet-600/30 text-violet-400 hover:bg-violet-600/20 transition-all text-sm font-medium"
            >
              <Brain className="w-4 h-4" />
              Learning Engine
            </button>
            <button
              onClick={() => router.push('/student/upsc/environment/guided/tagging')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 transition-all text-sm font-medium"
            >
              <span style={{fontSize:13}}>🏷️</span>
              Concept Tags
            </button>
            <ModeToggle currentMode="guided" subjectSlug="environment" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#1F3864] to-[#2E75B6] rounded-2xl p-8 mb-10 text-white shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <Sprout className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">Environment Foundation Course</h1>
              <p className="text-blue-200 text-sm leading-relaxed max-w-xl">
                A structured 6-module journey covering the entire UPSC Environment syllabus.
                Each module builds on the last — complete Day 7 recall to unlock the next.
              </p>
              <div className="flex items-center gap-6 mt-4 text-sm">
                <span className="flex items-center gap-1.5 text-blue-100">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  {modules.filter((m) => m.completion_percent >= 100).length} Complete
                </span>
                <span className="flex items-center gap-1.5 text-blue-100">
                  <span className="w-2 h-2 rounded-full bg-blue-300 inline-block" />
                  {modules.filter((m) => m.is_unlocked && m.completion_percent < 100).length} In Progress
                </span>
                <span className="flex items-center gap-1.5 text-blue-100">
                  <span className="w-2 h-2 rounded-full bg-white/30 inline-block" />
                  {modules.filter((m) => !m.is_unlocked).length} Locked
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Module Grid */}
        <div>
          <h2 className="text-lg font-bold text-neutral-800 dark:text-white mb-4">
            Foundation Modules
          </h2>

          {loading ? (
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-28 bg-white dark:bg-[#0F172A] rounded-2xl animate-pulse border border-neutral-100 dark:border-neutral-800"
                />
              ))}
            </div>
          ) : modules.length === 0 ? (
            <div className="text-center py-20 text-neutral-500">
              <Sprout className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>Foundation modules are being prepared. Check back soon.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {modules.map((mod, i) => (
                <ModuleCard
                  key={mod.module_id}
                  moduleId={mod.module_id}
                  moduleNumber={i}
                  title={mod.title}
                  clipCount={mod.clip_count}
                  isUnlocked={mod.is_unlocked}
                  completionPercent={mod.completion_percent}
                  isCurrent={i === currentModuleIndex}
                  onClick={() => handleModuleClick(mod)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

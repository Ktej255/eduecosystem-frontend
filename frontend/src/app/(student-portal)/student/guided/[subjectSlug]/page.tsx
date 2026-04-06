'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  Zap, Brain, Shield, PlayCircle, Lock, CheckCircle2, 
  ChevronRight, BarChart3, Clock, LayoutDashboard,
  Calendar, Flame, Target
} from 'lucide-react';
import UPSCOverlayMap from '@/components/guided/UPSCOverlayMap';
import GamificationEngine from '@/components/guided/GamificationEngine';
import GuidedJourneyManager from '@/components/guided/GuidedJourneyManager';

interface ModuleStatus {
  module_id: number;
  title: string;
  clip_count: number;
  is_unlocked: boolean;
  completion_percent: number;
}

interface JourneyStatus {
  step: 'intro' | 'studying' | 'selecting' | 'transported';
  completion_percent: number;
  exam_id?: string;
}

export default function GuidedSubjectDashboard() {
  const { subjectSlug } = useParams();
  const router = useRouter();
  const [modules, setModules] = useState<ModuleStatus[]>([]);
  const [journey, setJourney] = useState<JourneyStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [modRes, journeyRes] = await Promise.all([
          fetch(`/api/guided/foundation/${subjectSlug}/modules`),
          fetch(`/api/guided/student/status?subject_slug=${subjectSlug}`)
        ]);
        
        const [modJson, journeyJson] = await Promise.all([
          modRes.json(),
          journeyRes.json()
        ]);
        
        setModules(Array.isArray(modJson) ? modJson : []);
        setJourney(journeyJson);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [subjectSlug]);

  const isTransported = journey?.step === 'transported';

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans pb-20">
      <GuidedJourneyManager subjectSlug={subjectSlug as string} />
      
      {/* Dynamic Header / Hero */}
      <section className="relative px-8 pt-16 pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-40 w-64 h-64 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 left-40 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className={`flex-1 ${isTransported ? 'text-center lg:text-left' : ''}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-6 animate-in slide-in-from-left-4 duration-500">
                <Target className="w-4 h-4" />
                {isTransported ? `Specialization: ${journey?.exam_id?.toUpperCase()}` : 'Foundation Intelligence Path'}
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] mb-6 tracking-tighter animate-in slide-in-from-left-6 duration-700">
                {isTransported ? 'Dimensional' : 'Environment'} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                   {isTransported ? 'Synapse Active' : 'Mastery Autopilot'}
                </span>
              </h1>
              
              <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
                {isTransported 
                  ? `You have successfully projected your Environment knowledge into the ${journey?.exam_id?.toUpperCase()} Dimension. Mastery is now monitored via the Synapse Overlay.` 
                  : 'Your adaptive learning journey is governed by neural spacing and strategic syllabus mapping. Focus on the 70% threshold.'}
              </p>
            </div>

            <div className="w-full lg:w-96 shrink-0 animate-in slide-in-from-right-12 duration-1000">
               <GamificationEngine userId="current" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Transformation Area */}
      <main className="max-w-7xl mx-auto px-8 relative z-20">
        
        {isTransported ? (
          /* Specialized Dimension View (Hero Map) */
          <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[40px] blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <UPSCOverlayMap subjectSlug={subjectSlug as string} />
             </div>
             
             {/* Foundation becomes a sub-resource */}
             <div className="pt-20 opacity-40 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-4 mb-8">
                   <h2 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-widest">Base Foundation Library</h2>
                   <div className="flex-1 h-[1px] bg-slate-200 dark:bg-slate-800" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                   {modules.slice(0, 4).map((mod, i) => (
                     <div key={mod.module_id} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-sm font-bold truncate pr-4">{mod.title}</span>
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        ) : (
          /* Foundation View (Module Tiles) */
          <div className="space-y-16 animate-in slide-in-from-bottom-8 duration-700">
             {/* Action Bar */}
             <div className="bg-white dark:bg-slate-900 rounded-[32px] p-4 shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-4">
                <button 
                  onClick={() => router.push(`/student/guided/${subjectSlug}/recall`)}
                  className="w-full md:flex-1 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl py-6 px-8 flex items-center justify-between group hover:scale-[1.02] transition-all"
                >
                   <div>
                     <div className="flex items-center gap-2 text-blue-400 dark:text-blue-100/60 text-xs font-bold uppercase tracking-widest mb-1">
                       <Brain className="w-4 h-4" />
                       Due Now
                     </div>
                     <div className="text-2xl font-black">Day 2 Neural Recall</div>
                   </div>
                   <ChevronRight className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                </button>

                <button className="w-full md:flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-6 px-8 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                   <div>
                     <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                       <Calendar className="w-4 h-4" />
                       Upcoming
                     </div>
                     <div className="text-2xl font-black text-slate-800 dark:text-white">Day 7 Stress Test</div>
                   </div>
                   <ChevronRight className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                </button>
             </div>

             <div className="space-y-8">
                <div className="flex items-center justify-between">
                   <h2 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                     <BarChart3 className="w-8 h-8 text-blue-600" />
                     Evolutionary Path
                   </h2>
                   <div className="hidden md:flex text-xs font-bold text-slate-400 uppercase tracking-widest items-center gap-2">
                     <Clock className="w-4 h-4" />
                     Next Module unlocks at 70% Mastery
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                   {loading ? (
                     [...Array(6)].map((_, i) => (
                       <div key={i} className="h-64 bg-slate-100 dark:bg-slate-800 rounded-[32px] animate-pulse" />
                     ))
                   ) : (
                     modules.map((mod, i) => (
                       <ModuleTile 
                         key={mod.module_id}
                         module={mod}
                         index={i}
                         onClick={() => mod.is_unlocked && router.push(`/student/guided/${subjectSlug}/${mod.module_id}`)}
                       />
                     ))
                   )}
                </div>
             </div>
          </div>
        )}
      </main>
    </div>
  );
}

function StatsCard({ icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-lg min-w-40">
       <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700">
         {icon}
       </div>
       <div className="text-3xl font-black text-slate-900 dark:text-white">{value}</div>
       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
}

function ModuleTile({ module, index, onClick }: { module: ModuleStatus; index: number; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      disabled={!module.is_unlocked}
      className={`
        relative overflow-hidden p-8 rounded-[40px] text-left transition-all duration-500
        ${module.is_unlocked 
          ? 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:scale-105 hover:-translate-y-2' 
          : 'bg-slate-100 dark:bg-slate-900/40 border border-transparent grayscale cursor-not-allowed'}
      `}
    >
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs font-black text-blue-600 uppercase tracking-widest px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full">
          Module {index}
        </span>
        {!module.is_unlocked && <Lock className="w-5 h-5 text-slate-400" />}
        {module.completion_percent >= 90 && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
      </div>

      <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-4 line-clamp-2 leading-tight">
        {module.title}
      </h3>
      
      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
           <span>Progress</span>
           <span>{Math.round(module.completion_percent)}%</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
           <div 
             className="bg-blue-600 h-full transition-all duration-1000 ease-out" 
             style={{ width: `${module.completion_percent}%` }} 
           />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0">
          {module.clip_count} Detailed Lessons
        </div>
        <div className={`p-3 rounded-2xl ${module.is_unlocked ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'} text-white`}>
           <PlayCircle className="w-5 h-5" />
        </div>
      </div>
    </button>
  );
}

function Trophy({ className }: { className: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 22V18"/><path d="M14 22V18"/><path d="M18 4H6v7a6 6 0 0 0 12 0V4Z"/></svg>
  );
}

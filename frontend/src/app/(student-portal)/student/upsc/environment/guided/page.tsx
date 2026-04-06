/*
GUIDED MODE — 4 TAB LAYOUT PROPOSAL

TAB 1: LEARN
- Left sidebar: Module list (M0, M1, M2...)
- Main area: Video player (YouTube embed or uploaded video)
- Below video: Content/notes for that module
- Current module: M0 (37 pages — document ready)

TAB 2: PATH
- Knowledge graph visualization
- Shows all Environment topics as nodes
- Color coded by mastery level
- Student can click node to jump to topic
- Uses existing 1800+ node graph backend

TAB 3: REVISION
- Today's revision topics (spaced repetition)
- Based on SM-2 algorithm already in backend
- Shows: topic name, last studied, mastery %
- Quick MCQ set for each revision topic

TAB 4: GAP
- Full coverage map
- What student has studied vs total syllabus
- Weak areas highlighted
- Recommended next topics from adaptive system
*/
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ModeToggle from '@/components/guided/ModeToggle';
import { 
  Leaf, 
  Sprout, 
  Network, 
  Brain, 
  Search, 
  Map as MapIcon, 
  Compass, 
  RotateCcw, 
  BookOpen,
  ArrowRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import ModuleCard from '@/components/guided/ModuleCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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
  const [activeTab, setActiveTab] = useState('learn');

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

  const currentModuleIndex = modules.findIndex(
    (m) => m.is_unlocked && m.completion_percent < 100
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] pb-10">
      {/* Top Bar - Compact & Focused */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#375623] to-[#4A732F] flex items-center justify-center shadow-lg shadow-green-900/20">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-neutral-900 dark:text-white text-lg leading-tight">
                Environment
              </div>
              <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                Guided Mastery
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <ModeToggle currentMode="guided" subjectSlug="environment" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <Tabs defaultValue="learn" className="space-y-8" onValueChange={setActiveTab}>
          <div className="flex items-center justify-between bg-white dark:bg-[#0F172A] p-1.5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <TabsList className="bg-transparent h-auto p-0 gap-1">
              {[
                { id: 'learn', label: 'LEARN', icon: BookOpen, color: 'text-blue-500' },
                { id: 'path', label: 'PATH', icon: Compass, color: 'text-indigo-500' },
                { id: 'revision', label: 'REVISION', icon: RotateCcw, color: 'text-rose-500' },
                { id: 'gap', label: 'GAP', icon: MapIcon, color: 'text-amber-500' },
              ].map((tab) => (
                <TabsTrigger 
                  key={tab.id}
                  value={tab.id}
                  className="px-6 py-2.5 rounded-xl data-[state=active]:bg-neutral-100 dark:data-[state=active]:bg-neutral-800 data-[state=active]:text-neutral-900 dark:data-[state=active]:text-white transition-all gap-2 font-bold text-xs tracking-widest"
                >
                  <tab.icon className={`w-4 h-4 ${tab.color}`} />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="px-4 border-l border-neutral-200 dark:border-neutral-800 hidden md:flex items-center gap-4">
               <div className="flex flex-col items-end">
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">Learning Engine</span>
                  <span className="text-xs font-black text-emerald-500 flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3" /> STABLE MOMENTUM
                  </span>
               </div>
            </div>
          </div>

          <TabsContent value="learn" className="space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
            {/* Hero Banner (Learn Specific) */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1F3864] to-[#2E75B6] rounded-[2.5rem] p-10 text-white shadow-2xl shadow-blue-500/10">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-white/10 text-blue-100 border-white/20 mb-4 px-3 py-1 font-bold uppercase tracking-widest text-[10px]">
                    Foundation Path
                  </Badge>
                  <h1 className="text-4xl font-black mb-3 leading-tight italic font-serif">
                    The Environment <br/> Masterclass
                  </h1>
                  <p className="text-blue-100/80 text-sm leading-relaxed max-w-sm mb-6">
                    A clinical, 37-page intensive journey through Environment & Ecology. 
                    No fluff. Pure conceptual clarity.
                  </p>
                  <div className="flex items-center gap-4">
                     <button className="px-6 py-3 bg-white text-blue-900 rounded-xl font-black text-sm hover:scale-105 transition-all shadow-lg active:scale-95">
                        Continue module 1
                     </button>
                      <div className="flex -space-x-3">
                         {[1,2,3,4].map(i => (
                           <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1F3864] bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-white">
                             {i}
                           </div>
                         ))}
                         <div className="w-8 h-8 rounded-full border-2 border-[#1F3864] bg-white text-blue-900 flex items-center justify-center text-[10px] font-bold">+12</div>
                      </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                     <span className="text-[10px] font-black uppercase text-blue-200 tracking-tighter">Syllabus Coverage</span>
                     <span className="text-sm font-black">12/103 Concepts</span>
                  </div>
                  <Progress value={12} className="h-2 bg-white/10" />
                  <div className="grid grid-cols-2 gap-4 mt-6">
                     <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-[10px] text-blue-300 font-bold mb-1">Total Hours</div>
                        <div className="text-xl font-black">42.5</div>
                     </div>
                     <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-[10px] text-blue-300 font-bold mb-1">Recall Accuracy</div>
                        <div className="text-xl font-black">88%</div>
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* Module Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-black text-neutral-800 dark:text-white flex items-center gap-2">
                    <Sprout className="w-5 h-5 text-emerald-500" />
                    Path Modules
                  </h2>
                  <div className="text-xs text-neutral-400 font-bold uppercase">6 Modules Available</div>
                </div>

                {loading ? (
                  <div className="space-y-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-28 bg-white dark:bg-[#0F172A] rounded-2xl animate-pulse border border-neutral-100 dark:border-neutral-800" />
                    ))}
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

              {/* Sidebar Info */}
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-white dark:bg-[#0F172A] border border-neutral-200 dark:border-neutral-800 shadow-sm">
                   <h3 className="text-sm font-black mb-4 flex items-center gap-2">
                     <AlertCircle className="w-4 h-4 text-amber-500" />
                     Study Recommendations
                   </h3>
                   <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20">
                         <div className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-1">Focus Required</div>
                         <div className="text-[11px] text-amber-600 dark:text-amber-500/80 leading-relaxed italic">
                           "Carbon Cycles" mastery has dropped below 60%. Consider a quick recall session today.
                         </div>
                      </div>
                      <button 
                        onClick={() => setActiveTab('revision')}
                        className="w-full py-3 rounded-xl bg-neutral-900 dark:bg-neutral-800 text-white text-xs font-bold hover:bg-neutral-800 flex items-center justify-center gap-2 transition-all"
                      >
                        Start Today's Recall <ArrowRight className="w-4 h-4" />
                      </button>
                   </div>
                </div>

                <div className="p-6 rounded-3xl border border-dashed border-neutral-200 dark:border-neutral-800">
                   <div className="text-center py-4">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 mx-auto flex items-center justify-center mb-3">
                         <TrendingUp className="w-6 h-6 text-neutral-400" />
                      </div>
                      <div className="text-xs font-black text-neutral-800 dark:text-white mb-1">Momentum Tracking</div>
                      <p className="text-[10px] text-neutral-400">Complete Day 7 recall to see your velocity metrics here.</p>
                   </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="path" className="animate-in fade-in slide-in-from-bottom-3 duration-500">
             <div className="h-[70vh] rounded-[2.5rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl relative">
                <iframe 
                  src="/student/upsc/environment/guided/knowledge-graph" 
                  className="w-full h-full border-none"
                  title="Environment Knowledge Graph"
                />
                <div className="absolute top-6 left-6 p-4 bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl max-w-xs pointer-events-none">
                   <h3 className="text-sm font-black mb-1 flex items-center gap-2">
                     <Network className="w-4 h-4 text-indigo-500" />
                     Integrated Syllabus Path
                   </h3>
                   <p className="text-[10px] text-neutral-500 leading-relaxed">
                     Navigate through 1800+ conceptual nodes. Connected lines show prerequisite relationships.
                   </p>
                </div>
             </div>
          </TabsContent>

          <TabsContent value="revision" className="animate-in fade-in slide-in-from-bottom-3 duration-500">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[2.5rem] bg-white dark:bg-[#0F172A] border border-neutral-200 dark:border-neutral-800 shadow-xl">
                   <div className="w-16 h-16 rounded-[2rem] bg-rose-50 dark:bg-rose-900/10 flex items-center justify-center mb-6">
                      <RotateCcw className="w-8 h-8 text-rose-500" />
                   </div>
                   <h2 className="text-3xl font-black mb-4">Spaced Repetition Engine</h2>
                   <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-8">
                     Your personalized revision plan is generated daily based on the SM-2 algorithm. 
                     We track precisely when you're likely to forget a concept and bring it back for reinforcement.
                   </p>
                   
                   <div className="space-y-4">
                      {[
                        { topic: 'Phosphorus Cycle', lastSeen: '3 days ago', status: 'Fragile' },
                        { topic: 'Wetland Conservation', lastSeen: '12 days ago', status: 'Due' },
                        { topic: 'Bio-magnification', lastSeen: '5 days ago', status: 'Stable' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800">
                           <div>
                              <div className="text-sm font-bold text-neutral-800 dark:text-white">{item.topic}</div>
                              <div className="text-[10px] text-neutral-400 uppercase font-black">Last recall: {item.lastSeen}</div>
                           </div>
                           <Badge className={item.status === 'Due' ? 'bg-rose-500' : item.status === 'Fragile' ? 'bg-amber-500' : 'bg-emerald-500'}>
                             {item.status}
                           </Badge>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-gradient-to-br from-rose-500 to-rose-700 rounded-[2.5rem] p-10 text-white shadow-2xl flex flex-col justify-between">
                   <div>
                      <h3 className="text-2xl font-black mb-2 italic font-serif">Today's Focus</h3>
                      <p className="text-rose-100/80 text-sm">4 concepts are due for revision today to maintain 90%+ recall accuracy.</p>
                   </div>
                   
                   <div className="space-y-8">
                      <div className="flex items-center justify-between border-b border-white/20 pb-4">
                         <div className="text-4xl font-black">42.5<span className="text-sm font-normal opacity-60 ml-2">min</span></div>
                         <div className="text-xs font-bold uppercase tracking-widest text-rose-200">Total Revision Time</div>
                      </div>
                      
                      <button className="w-full py-5 rounded-2xl bg-white text-rose-600 font-extrabold shadow-xl hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest">
                         Start Revision Session
                      </button>
                   </div>
                </div>
             </div>
          </TabsContent>

          <TabsContent value="gap" className="animate-in fade-in slide-in-from-bottom-3 duration-500">
             <div className="p-10 rounded-[2.5rem] bg-neutral-900 dark:bg-[#0F172A] text-white shadow-2xl overflow-hidden relative">
                <div className="relative z-10">
                   <div className="flex items-center justify-between mb-10">
                      <div>
                         <h2 className="text-3xl font-black mb-2 italic font-serif">Syllabus Gap Map</h2>
                         <p className="text-neutral-400 text-sm">Visualizing coverage across 103 high-yield environment topics.</p>
                      </div>
                      <div className="text-right">
                         <div className="text-5xl font-black text-amber-500">12%</div>
                         <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Total Coverage</div>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                      {[...Array(48)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-4 rounded-sm transition-all duration-500 ${i < 12 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]' : i < 18 ? 'bg-amber-500/30' : 'bg-white/5'}`}
                          title={`Topic ${i+1}: ${i < 12 ? 'Mastered' : i < 18 ? 'In Progress' : 'Unstarted'}`}
                        />
                      ))}
                   </div>

                   <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
                      <div className="flex items-center gap-3">
                         <div className="w-3 h-3 rounded-full bg-emerald-500" />
                         <div className="text-xs font-bold text-neutral-400">Mastered</div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-3 h-3 rounded-full bg-amber-500/30" />
                         <div className="text-xs font-bold text-neutral-400">Low Mastery</div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-3 h-3 rounded-full bg-white/5" />
                         <div className="text-xs font-bold text-neutral-400">Unstarted</div>
                      </div>
                   </div>
                </div>

                <div className="absolute top-0 right-0 p-20 opacity-5">
                   <MapIcon className="w-64 h-64" />
                </div>
             </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
    </div>
  );
}

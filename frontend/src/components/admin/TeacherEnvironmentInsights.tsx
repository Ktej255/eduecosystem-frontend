'use client';

import { useEffect, useState } from 'react';
import { 
  TrendingDown, Users, AlertCircle, BarChart, 
  ArrowUpRight, ArrowDownRight, Activity, 
  Target, GraduationCap, ChevronRight 
} from 'lucide-react';

interface InsightData {
  hardest_concepts: {
    node_id: string;
    node_name: string;
    avg_mastery: number;
  }[];
  active_students: {
    current_week: number;
    previous_week: number;
    trend: 'up' | 'down';
  };
  critical_gaps: {
    node: string;
    name: string;
    failure_rate: number;
  }[];
}

export default function TeacherEnvironmentInsights({ subjectSlug = 'environment' }: { subjectSlug?: string }) {
  const [data, setData] = useState<InsightData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInsights() {
      try {
        const res = await fetch(`/api/guided/foundation/${subjectSlug}/teacher-insights`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchInsights();
  }, [subjectSlug]);

  if (loading || !data) return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
       {[...Array(3)].map((_, i) => (
         <div key={i} className="h-64 bg-slate-100 dark:bg-slate-800 rounded-[32px]" />
       ))}
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InsightCard 
          title="Active Momentum" 
          value={`${data.active_students.current_week} Students`}
          subtitle={`Prev: ${data.active_students.previous_week}`}
          trend={data.active_students.trend}
          icon={<Users className="text-blue-600" />}
          color="blue"
        />
        <InsightCard 
          title="Avg. Subject Mastery" 
          value="64.2%"
          subtitle="Target: 70% threshold"
          trend="up"
          icon={<Target className="text-emerald-500" />}
          color="emerald"
        />
        <InsightCard 
          title="Critical Alerts" 
          value={`${data.critical_gaps.length} Gaps`}
          subtitle="Concepts < 40% mastery"
          trend="down"
          icon={<AlertCircle className="text-rose-500" />}
          color="rose"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Hardest Concepts Table */}
        <div className="lg:col-span-12 bg-white dark:bg-[#0F172A] rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-3">
                 <TrendingDown className="w-6 h-6 text-rose-500" />
                 Hardest Concepts (Critical Attention)
              </h3>
              <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
                 View Knowledge Graph <ChevronRight className="w-4 h-4" />
              </button>
           </div>

           <div className="space-y-4">
              {data.hardest_concepts.map((concept) => (
                <div key={concept.node_id} className="flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 group hover:border-blue-400/30 transition-all">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-black text-rose-500 text-xs shadow-sm">
                         {Math.round(concept.avg_mastery)}%
                      </div>
                      <div>
                        <div className="text-sm font-black text-slate-800 dark:text-white">{concept.node_name}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{concept.node_id}</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="hidden md:block w-32 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                         <div className="bg-rose-500 h-full" style={{ width: `${concept.avg_mastery}%` }} />
                      </div>
                      <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
                        Assign Drill
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Global Gaps */}
        <div className="lg:col-span-12 bg-slate-900 dark:bg-blue-900/10 rounded-[32px] p-8 border border-white/5 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Activity className="w-32 h-32 text-blue-500" />
           </div>
           
           <div className="relative z-10">
              <h3 className="text-xl font-black text-white flex items-center gap-3 mb-8">
                 <BarChart className="w-6 h-6 text-blue-400" />
                 Active Learning Gaps
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {data.critical_gaps.map((gap) => (
                   <div key={gap.node} className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                      <div className="flex items-center justify-between mb-4">
                         <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{gap.node}</span>
                         <span className="text-xs font-bold text-rose-400 bg-rose-400/10 px-2 py-0.5 rounded-full">{gap.failure_rate}% Failure</span>
                      </div>
                      <div className="text-base font-bold text-white mb-2">{gap.name}</div>
                      <p className="text-xs text-white/50 leading-relaxed mb-4">
                        Significant percentage of students are failing active recall on this node. Recommended action: Supplementary Concept Clip.
                      </p>
                      <button className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                        Create Auto-Nudge <ChevronRight className="w-3 h-3" />
                      </button>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function InsightCard({ title, value, subtitle, trend, icon, color }: { 
  title: string; 
  value: string; 
  subtitle: string; 
  trend: 'up' | 'down'; 
  icon: any;
  color: string;
}) {
  return (
    <div className="bg-white dark:bg-[#0F172A] p-8 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
       <div className={`absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-5 transition-opacity`}>
          {icon}
       </div>
       
       <div className={`w-12 h-12 rounded-2xl bg-${color}-50 dark:bg-${color}-900/20 flex items-center justify-center mb-6 border border-${color}-100 dark:border-${color}-900/30`}>
         {icon}
       </div>
       
       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</div>
       <div className="text-3xl font-black text-slate-900 dark:text-white mb-2">{value}</div>
       
       <div className="flex items-center justify-between mt-4">
          <div className="text-xs text-slate-500 font-medium">{subtitle}</div>
          <div className={`flex items-center gap-1 text-xs font-bold ${trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
             {trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
             {trend === 'up' ? '+12%' : '-4%'}
          </div>
       </div>
    </div>
  );
}

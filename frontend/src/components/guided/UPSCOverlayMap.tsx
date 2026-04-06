'use client';

import { useEffect, useState } from 'react';
import { 
  Trophy, 
  Target, 
  Zap, 
  AlertCircle, 
  ChevronRight, 
  TrendingUp,
  Activity,
  Award,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReadinessData {
  readiness_score: number;
  total_nodes: number;
  status: string;
  thresholds?: {
    buffer: number;
    target: number;
  };
}

interface WeakSpot {
  node_id: string;
  name: string;
  mastery: number;
  relevance: string;
  risk_score: number;
}

export default function UPSCOverlayMap({ subjectSlug = 'environment' }: { subjectSlug?: string }) {
  const [readiness, setReadiness] = useState<ReadinessData | null>(null);
  const [weakSpots, setWeakSpots] = useState<WeakSpot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIntelligence() {
      try {
        const [rRes, wRes] = await Promise.all([
          fetch(`/api/v1/intelligence/readiness?subject=${subjectSlug}`),
          fetch(`/api/v1/intelligence/weak-spots?subject=${subjectSlug}`)
        ]);
        
        if (rRes.ok) setReadiness(await rRes.json());
        if (wRes.ok) setWeakSpots(await wRes.json());
      } catch (err) {
        console.error("Intelligence fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchIntelligence();
  }, [subjectSlug]);

  if (loading) return (
    <div className="h-[600px] w-full flex items-center justify-center bg-[#0a0a0c] rounded-[40px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="min-h-[700px] bg-[#0a0a0c] text-white p-6 md:p-10 rounded-[48px] border border-white/10 shadow-2xl overflow-hidden relative">
      {/* Background Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Readiness & Strategy */}
        <div className="lg:col-span-8 space-y-8">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-600/20">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-3xl font-black tracking-tighter uppercase italic">Exam Intelligence</h1>
              </div>
              <p className="text-white/40 text-sm font-bold tracking-widest pl-1 uppercase">
                {subjectSlug} • Predictive Analytics
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 px-3">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-black uppercase text-white/60">Live Status: Active</span>
              </div>
            </div>
          </header>

          {/* Main Visualization: The Strategy Grid */}
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 aspect-video flex flex-col justify-center items-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none" />
             
             {/* Radial Scan UI */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border border-dashed border-white/5 rounded-full animate-spin-slow" />
             
             {/* Stage-11: Peekable Blur Overlay */}
             {readiness?.status === 'peekable' && (
                <div className="absolute inset-0 backdrop-blur-md z-20 flex flex-col items-center justify-center bg-black/40">
                  <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full flex items-center gap-2 mb-4 animate-pulse">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Pre-Calibration Preview</span>
                  </div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest text-center px-12">
                    70% Mastery Required for Full Dimension Unlock
                  </p>
                </div>
             )}

             {/* Total Lock Stage */}
             {readiness?.status === 'locked' && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-xl z-20 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
                    <AlertCircle className="w-10 h-10 text-white/20" />
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">Dimension Offline</h4>
                  <p className="text-white/40 text-sm font-medium leading-relaxed">
                    UPSC Exam-Ready analytics are currently offline. Achieve {readiness?.thresholds?.target || 70}% foundation mastery to calibrate the portal.
                  </p>
                </div>
             )}

             <div className={`text-center space-y-4 ${readiness?.status === 'locked' ? 'opacity-0' : ''}`}>
                <div className="text-6xl font-black tracking-tighter text-white">
                  {readiness?.readiness_score || 0}<span className="text-3xl text-white/40">%</span>
                </div>
                <div className="text-sm font-black tracking-[0.2em] text-blue-400 uppercase">Current Exam Readiness</div>
                <p className="text-white/40 max-w-sm mx-auto text-sm leading-relaxed">
                  Based on {readiness?.total_nodes} nodes within the {subjectSlug} foundation module.
                </p>
             </div>

             <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center bg-black/40 backdrop-blur-lg border border-white/10 p-5 rounded-3xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-orange-500" />
                   </div>
                   <div>
                      <div className="text-[10px] text-white/30 font-black uppercase tracking-widest">Next Target</div>
                      <div className="text-sm font-bold">Climate Governance & Acts</div>
                   </div>
                </div>
                <button className="bg-white text-black px-6 py-2.5 rounded-xl font-black text-sm hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                   START DRILL <ChevronRight className="w-4 h-4" />
                </button>
             </div>
          </div>
        </div>

        {/* Right Column: Insights & Weak Spots */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Weak Spot Spotlight */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black uppercase tracking-tighter italic flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                Fragility Areas
              </h3>
            </div>

            <div className="space-y-4">
              {weakSpots.length > 0 ? weakSpots.map((spot, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={spot.node_id} 
                  className="p-4 bg-black/40 border border-white/5 rounded-2xl hover:border-red-500/30 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[10px] font-black text-red-400/80 uppercase tracking-widest">RISK: {Math.round(spot.risk_score)}</div>
                    <div className="px-2 py-0.5 rounded-full bg-red-500 text-[8px] font-black uppercase tracking-tighter text-white">Critical</div>
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">{spot.name}</div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-[10px] text-white/30 font-bold uppercase">Mastery: {spot.mastery}%</div>
                    <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-red-500" style={{ width: `${spot.mastery}%` }} />
                    </div>
                  </div>
                </motion.div>
              )) : (
                <div className="text-center py-8 text-white/20 italic">No fragility detected. You are stable.</div>
              )}
            </div>
          </div>

          {/* Achievement Summary */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 p-8 rounded-[40px] space-y-4">
            <div className="flex items-center gap-3">
               <Award className="w-6 h-6 text-indigo-400" />
               <h3 className="text-lg font-black uppercase tracking-tighter italic">Milestone Guard</h3>
            </div>
            <p className="text-xs font-medium text-white/50 leading-relaxed">
              {readiness?.status === 'unlocked' 
                ? "Portal Calibrated. UPSC Exam Readiness dimension is fully active."
                : readiness?.status === 'peekable'
                  ? "Calibration in progress. Previewing dimension alignment (60-69% Buffer)."
                  : "Calibration locked. Access UPSC dimension at 70% subject mastery."
              }
            </p>
            <div className="pt-4">
               <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                 <span>Calibration Status</span>
                 <span>{readiness?.readiness_score}% / {readiness?.thresholds?.target || 70}%</span>
               </div>
               <div className="h-2 bg-black/40 rounded-full overflow-hidden border border-white/5">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: `${Math.min(100, ((readiness?.readiness_score || 0) / (readiness?.thresholds?.target || 70)) * 100)}%` }}
                   className={`h-full ${readiness?.status === 'unlocked' ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                 />
               </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </div>
  );
}

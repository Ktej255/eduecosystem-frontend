'use client';

import { useEffect, useState } from 'react';
import { 
  Zap, Flame, Trophy, Star, 
  ChevronRight, Award, Sparkles, 
  BarChart3, ShieldCheck
} from 'lucide-react';
import { Button } from "@/components/ui/button";

interface GamificationProfile {
  xp: number;
  level: number;
  streak: number;
  coins: number;
  badges: {
    id: string;
    name: string;
    icon_url: string;
    earned_at: string;
  }[];
}

export default function GamificationEngine({ userId }: { userId: string }) {
  const [profile, setProfile] = useState<GamificationProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(`/api/guided/student/rewards`);
        const json = await res.json();
        setProfile(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [userId]);

  if (loading || !profile) return null;

  const xpToNextLevel = 1000 - (profile.xp % 1000);
  const progressPercent = (profile.xp % 1000) / 10;

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-700">
      {/* Level & Streak Summary */}
      <div className="grid grid-cols-2 gap-4">
         <StatsTile 
           icon={<Flame className="text-orange-500 fill-orange-500" />} 
           label="Streak" 
           value={`${profile.streak} Days`} 
           sublabel="Don't stop now!"
         />
         <StatsTile 
           icon={<Star className="text-yellow-400 fill-yellow-400" />} 
           label="Level" 
           value={profile.level} 
           sublabel={`${profile.xp} Total XP`}
         />
      </div>

      {/* Progress Bar and Next Milestone */}
      <div className="bg-white/5 dark:bg-[#0F172A]/50 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl">
         <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-black text-white/80 uppercase tracking-widest flex items-center gap-2">
               <Zap className="w-4 h-4 text-blue-400" />
               Level Progress
            </h4>
            <span className="text-xs font-bold text-blue-400">{Math.round(progressPercent)}%</span>
         </div>
         
         <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mb-3">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              style={{ width: `${progressPercent}%` }}
            />
         </div>
         
         <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-tighter">
            <span>Level {profile.level}</span>
            <span>{xpToNextLevel} XP to Level {profile.level + 1}</span>
         </div>
      </div>

      {/* Recent Badges Container */}
      <div className="space-y-4">
         <div className="flex items-center justify-between px-2">
            <h5 className="text-[10px] font-black text-white/50 uppercase tracking-widest flex items-center gap-2">
               <Trophy className="w-3 h-3" />
               Trophy Room
            </h5>
            <button className="text-[10px] font-bold text-blue-400 hover:underline">View All</button>
         </div>

         <div className="flex flex-wrap gap-3">
            {profile.badges.slice(0, 3).map((badge) => (
              <div 
                key={badge.id}
                className="group relative w-16 h-16 bg-gradient-to-br from-blue-600/20 to-indigo-900/30 rounded-2xl border border-blue-500/30 flex items-center justify-center transition-all hover:scale-110 hover:-rotate-6 shadow-lg shadow-blue-900/40"
                title={badge.name}
              >
                <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <Award className="w-8 h-8 text-blue-400" />
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1 border-2 border-[#0F172A]">
                  <ShieldCheck className="w-2h-2 text-white" />
                </div>
              </div>
            ))}
            
            {/* Empty Slots */}
            {[...Array(Math.max(0, 3 - profile.badges.length))].map((_, i) => (
              <div key={i} className="w-16 h-16 bg-white/5 rounded-2xl border border-dashed border-white/10 flex items-center justify-center opacity-40">
                <Sparkles className="w-6 h-6 text-white/20" />
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}

function StatsTile({ icon, label, value, sublabel }: { icon: any; label: string; value: any; sublabel: string }) {
  return (
    <div className="bg-white/5 dark:bg-[#0F172A]/50 backdrop-blur-md rounded-3xl p-5 border border-white/10 shadow-lg relative overflow-hidden group">
       <div className="absolute top-0 right-0 p-3 opacity-10 transform scale-150 rotate-12 group-hover:scale-[1.7] transition-transform duration-500">
         {icon}
       </div>
       <div className="relative z-10">
          <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">{label}</p>
          <p className="text-2xl font-black text-white">{value}</p>
          <p className="text-[8px] font-bold text-white/30 uppercase mt-1">{sublabel}</p>
       </div>
    </div>
  );
}

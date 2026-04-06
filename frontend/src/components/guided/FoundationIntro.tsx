'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, ChevronRight, X, Headphones, Sparkles, Activity } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface FoundationIntroProps {
  onStart: () => void;
  videoUrl?: string; // YouTube ID
  audioNarrationUrl?: string; // Optional TTS Voiceover
}

export default function FoundationIntro({ onStart, videoUrl = "dQw4w9WgXcQ", audioNarrationUrl }: FoundationIntroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // If audio narration is provided, play it on mount to welcome the user
    if (audioNarrationUrl && audioRef.current) {
       audioRef.current.play().catch(e => console.log("Autoplay blocked, waiting for interaction", e));
    }
  }, [audioNarrationUrl]);

  const handleBeginWatch = () => {
    setIsPlaying(true);
    if (audioRef.current) audioRef.current.pause(); // Pause narration if video starts
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-in fade-in duration-1000 overflow-hidden">
      
      {/* Neural Background Pulse */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      {audioNarrationUrl && <audio ref={audioRef} src={audioNarrationUrl} />}

      <div className="relative w-full max-w-6xl aspect-video px-8 flex flex-col items-center justify-center z-10">
        
        {!isPlaying ? (
          <div className="text-center space-y-8 animate-in slide-in-from-bottom-12 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 text-xs font-black uppercase tracking-[0.2em] mb-4">
              <Activity className="w-4 h-4 animate-pulse" />
              Intelligence Layer: Neural Sync Active
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
              Reading the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 animate-gradient-x">Environment</span>
            </h1>
            
            <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium">
              This isn't just a course. It's a cognitive autopilot designed to map the 103 critical concepts of Environmental Thinking directly into your long-term memory.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
               <button 
                 onClick={handleBeginWatch}
                 className="group relative flex items-center gap-4 bg-white text-black px-10 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]"
               >
                  <Play className="w-8 h-8 fill-black" />
                  Watch Introduction
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
               </button>
               
               <button 
                 onClick={onStart}
                 className="flex items-center gap-2 text-white/40 hover:text-white font-bold transition-colors group"
               >
                  Skip to Training
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-20 text-white/20">
               <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                  <Headphones className="w-4 h-4" />
                  Best with Audio
               </div>
               <div className="w-[1px] h-4 bg-white/10" />
               <div className="text-xs font-bold tracking-widest uppercase">
                  Duration: 3:45 MIN
               </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full relative animate-in zoom-in-95 duration-700">
            <iframe 
              className="w-full h-full rounded-[40px] shadow-2xl border-4 border-white/5"
              src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&rel=0&modestbranding=1`}
              title="Foundation Intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            <button 
              onClick={onStart}
              className="absolute -top-16 right-0 text-white/60 hover:text-white flex items-center gap-2 font-black uppercase tracking-widest text-xs group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
              Finish & Begin Phase 1
            </button>
          </div>
        )}

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-white/10 rounded-tl-[40px]" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-white/10 rounded-br-[40px]" />
      </div>

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </div>
  );
}

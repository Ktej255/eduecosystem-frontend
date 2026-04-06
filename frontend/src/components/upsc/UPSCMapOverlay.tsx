import React from 'react';
import { Lock, Eye, CheckCircle } from 'lucide-react';

interface UPSCMapOverlayProps {
  readinessScore: number;
  status: 'locked' | 'peekable' | 'unlocked';
  onExplore?: () => void;
}

const UPSCMapOverlay: React.FC<UPSCMapOverlayProps> = ({ 
  readinessScore, 
  status: initialStatus, 
  onExplore 
}) => {
  const [isPeeking, setIsPeeking] = React.useState(false);

  // Auto-calculate status if score is provided (Stage-11 Logic)
  const status = readinessScore >= 70 
    ? 'unlocked' 
    : (readinessScore >= 60 ? 'peekable' : 'locked');

  if (status === 'unlocked') return null;

  const isPeekable = status === 'peekable';

  return (
    <div className={`absolute inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
      isPeekable 
        ? (isPeeking ? 'bg-black/5 backdrop-blur-[2px]' : 'bg-black/40 backdrop-blur-xl') 
        : 'bg-slate-950/95 backdrop-blur-3xl'
    }`}>
      <div className={`max-w-md w-full mx-4 p-10 rounded-[2.5rem] bg-white/5 border border-white/20 shadow-2xl text-center space-y-8 transition-opacity duration-500 ${
        isPeeking ? 'opacity-20 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="flex justify-center">
          <div className={`p-6 rounded-3xl ${isPeekable ? 'bg-amber-500/20 text-amber-400' : 'bg-red-500/20 text-red-400'}`}>
            {isPeekable ? <Eye size={56} className={isPeeking ? '' : 'animate-pulse'} /> : <Lock size={56} />}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase">
            {isPeekable ? 'Intelligence Bridge' : 'Subject Locked'}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-medium">
            {isPeekable 
              ? "You've entered the 60% mastery buffer. The Intelligence Layer is visible but encrypted."
              : "Readiness threshold (70%) not met. Subject intelligence is currently restricted."}
          </p>
        </div>

        {/* Tactical Progress Ring (Simplified for Overlay) */}
        <div className="relative h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className={`absolute inset-y-0 left-0 transition-all duration-1000 ease-out ${
              isPeekable ? 'bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]' : 'bg-red-600'
            }`}
            style={{ width: `${Math.min(readinessScore, 70) * (100 / 70)}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
               {readinessScore.toFixed(1)}% Readiness
             </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {isPeekable && (
            <button 
              onMouseDown={() => setIsPeeking(true)}
              onMouseUp={() => setIsPeeking(false)}
              onMouseLeave={() => setIsPeeking(false)}
              onTouchStart={() => setIsPeeking(true)}
              onTouchEnd={() => setIsPeeking(false)}
              className="w-full py-5 px-8 rounded-2xl font-black text-xl bg-amber-500 hover:bg-amber-400 text-black shadow-xl shadow-amber-500/30 transition-all active:scale-95 cursor-pointer select-none"
            >
              HOLD TO PEEK intelligence
            </button>
          )}

          <button 
            onClick={onExplore}
            className={`w-full py-4 px-8 rounded-2xl font-bold text-base transition-all border ${
              isPeekable 
                ? 'bg-transparent border-white/20 text-white hover:bg-white/5' 
                : 'bg-white text-black hover:bg-slate-100 shadow-xl'
            }`}
          >
            {isPeekable ? 'Requirement Details' : 'Unlock Now'}
          </button>
        </div>

        {isPeekable && (
          <div className="flex items-center justify-center gap-2 text-amber-500/60 font-bold text-[10px] uppercase tracking-[0.2em]">
            <span className="h-[1px] w-8 bg-amber-500/20" />
            Stage-11 Adaptive Access Active
            <span className="h-[1px] w-8 bg-amber-500/20" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UPSCMapOverlay;

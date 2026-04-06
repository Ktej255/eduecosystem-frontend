'use client';

import { Lock, CheckCircle, PlayCircle, Clock } from 'lucide-react';

interface ModuleCardProps {
  moduleId: number;
  moduleNumber: number;
  title: string;
  clipCount: number;
  isUnlocked: boolean;
  completionPercent: number;
  isCurrent?: boolean;
  onClick: () => void;
}

export default function ModuleCard({
  moduleId,
  moduleNumber,
  title,
  clipCount,
  isUnlocked,
  completionPercent,
  isCurrent,
  onClick,
}: ModuleCardProps) {
  const isDone = completionPercent >= 100;
  const isLocked = !isUnlocked;

  return (
    <button
      onClick={isLocked ? undefined : onClick}
      disabled={isLocked}
      className={`
        w-full text-left p-5 rounded-2xl border transition-all duration-200 relative overflow-hidden
        ${isLocked
          ? 'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 opacity-60 cursor-not-allowed'
          : isCurrent
          ? 'bg-white dark:bg-[#0F172A] border-[#2E75B6] shadow-lg shadow-blue-500/10 cursor-pointer hover:shadow-xl hover:shadow-blue-500/15'
          : isDone
          ? 'bg-[#F0FDF4] dark:bg-[#052e16]/40 border-[#375623] cursor-pointer hover:bg-[#DCFCE7] dark:hover:bg-[#052e16]/60'
          : 'bg-white dark:bg-[#0F172A] border-neutral-200 dark:border-neutral-800 cursor-pointer hover:border-[#2E75B6]/60 hover:shadow-md'
        }
      `}
    >
      {/* Current module left-border accent */}
      {isCurrent && !isLocked && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2E75B6] rounded-l-2xl" />
      )}

      <div className="flex items-start gap-4">
        {/* Module Number / Status Icon */}
        <div className={`
          w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0
          ${isLocked ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400' : 
            isDone ? 'bg-[#375623] text-white' :
            isCurrent ? 'bg-[#2E75B6] text-white' :
            'bg-blue-50 dark:bg-blue-950/40 text-[#2E75B6]'
          }
        `}>
          {isLocked ? <Lock className="w-5 h-5" /> :
           isDone ? <CheckCircle className="w-5 h-5" /> :
           isCurrent ? <PlayCircle className="w-5 h-5" /> :
           moduleNumber
          }
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
              Module {moduleNumber}
            </span>
            {isLocked && (
              <span className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-500 px-2 py-0.5 rounded-full">
                Locked
              </span>
            )}
            {isDone && !isLocked && (
              <span className="text-xs bg-[#DCFCE7] dark:bg-[#052e16]/60 text-[#375623] dark:text-green-400 px-2 py-0.5 rounded-full font-semibold">
                ✓ Complete
              </span>
            )}
          </div>

          <h3 className="font-semibold text-neutral-800 dark:text-white text-base leading-snug mb-2">
            {title}
          </h3>

          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {clipCount} clips
            </span>
            {!isLocked && (
              <span>{Math.round(completionPercent)}% complete</span>
            )}
          </div>

          {/* Progress bar */}
          {!isLocked && completionPercent > 0 && (
            <div className="mt-3 h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#2E75B6] rounded-full transition-all duration-500"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

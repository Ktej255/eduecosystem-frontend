'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Play, CheckCircle, Lock, Clock } from 'lucide-react';

interface Clip {
  id: number;
  title: string;
  order_index: number;
  youtube_id: string | null;
  is_published: boolean;
  pause_points: { timestamp: number; prompt: string }[];
}

export default function ModuleClipsPage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = Number(params.moduleId);

  const [clips, setClips] = useState<Clip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/guided/module/${moduleId}/clips`)
      .then((r) => r.json())
      .then((data) => setClips(Array.isArray(data) ? data : []))
      .catch(() => setClips([]))
      .finally(() => setLoading(false));
  }, [moduleId]);

  const estimatedMinutes = (clip: Clip) => {
    if (clip.pause_points.length === 0) return 15;
    const lastPp = Math.max(...clip.pause_points.map((p) => p.timestamp));
    return Math.max(10, Math.ceil(lastPp / 60) + 5);
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#020617]">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white dark:bg-[#0F172A] border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center gap-3">
          <button
            onClick={() => router.push('/student/upsc/environment/guided')}
            className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800 dark:hover:text-white text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Foundation
          </button>
          <span className="text-neutral-300 dark:text-neutral-600">/</span>
          <span className="text-sm font-medium text-neutral-700 dark:text-white">
            Module {moduleId}
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {loading ? (
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-20 bg-white dark:bg-[#0F172A] rounded-2xl animate-pulse border border-neutral-100 dark:border-neutral-800"
              />
            ))}
          </div>
        ) : clips.length === 0 ? (
          <div className="text-center py-20 text-neutral-400">
            <Play className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>No clips available for this module yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            <h1 className="text-xl font-bold text-neutral-800 dark:text-white mb-6">
              Module {moduleId} — Video Clips
            </h1>
            {clips
              .sort((a, b) => a.order_index - b.order_index)
              .map((clip, i) => (
                <button
                  key={clip.id}
                  onClick={() =>
                    router.push(
                      `/student/upsc/environment/guided/module/${moduleId}/clip/${clip.id}`
                    )
                  }
                  disabled={!clip.is_published}
                  className={`w-full text-left flex items-center gap-4 p-5 rounded-2xl border transition-all group ${
                    clip.is_published
                      ? 'bg-white dark:bg-[#0F172A] border-neutral-200 dark:border-neutral-800 hover:border-[#2E75B6] hover:shadow-md cursor-pointer'
                      : 'bg-neutral-50 dark:bg-neutral-900/50 border-neutral-100 dark:border-neutral-800/50 opacity-50 cursor-not-allowed'
                  }`}
                >
                  {/* Index badge */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm ${
                      clip.is_published
                        ? 'bg-[#1F3864]/10 text-[#2E75B6] group-hover:bg-[#2E75B6] group-hover:text-white'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400'
                    } transition-colors`}
                  >
                    {i + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-neutral-800 dark:text-white truncate text-sm">
                      {clip.title}
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        ~{estimatedMinutes(clip)} min
                      </span>
                      <span>
                        {clip.pause_points.length} AI checkpoint{clip.pause_points.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  {/* Status icon */}
                  <div className="shrink-0">
                    {!clip.is_published ? (
                      <Lock className="w-4 h-4 text-neutral-300 dark:text-neutral-600" />
                    ) : clip.youtube_id ? (
                      <Play className="w-4 h-4 text-[#2E75B6] group-hover:scale-110 transition-transform" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-neutral-300" />
                    )}
                  </div>
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

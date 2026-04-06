'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BarChart3, Users, Brain, AlertTriangle, TrendingUp, ArrowLeft, Target } from 'lucide-react';

interface ConceptAnalytic {
  node_id: string;
  node_name: string;
  difficulty: string;
  student_count: number;
  avg_mastery: number;
  min_mastery: number;
  max_mastery: number;
  weak_student_count: number;
}

interface ActivityStat {
  type: string;
  count: number;
  avg_score: number;
}

interface AnalyticsData {
  total_students: number;
  total_nodes: number;
  nodes_with_data: number;
  most_difficult_concepts: ConceptAnalytic[];
  all_concepts: ConceptAnalytic[];
  activity_breakdown: ActivityStat[];
}

const DIFFICULTY_COLORS: Record<string, string> = {
  foundation:   '#6366f1',
  intermediate: '#06b6d4',
  advanced:     '#f59e0b',
  upsc_overlay: '#22c55e',
};

export default function TeacherAnalyticsPage() {
  const router = useRouter();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'avg_mastery' | 'weak_student_count'>('avg_mastery');

  useEffect(() => {
    fetch('/api/engine/analytics?subject_slug=environment')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh', background: '#0a0e1a',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Inter, sans-serif',
      }}>
        <div style={{ textAlign: 'center' }}>
          <BarChart3 size={40} color="#6366f1" style={{ margin: '0 auto 12px' }} />
          <p style={{ color: '#94a3b8' }}>Aggregating cohort data…</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{
        minHeight: '100vh', background: '#0a0e1a',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#ef4444', fontFamily: 'Inter, sans-serif',
      }}>
        Could not load analytics. Check backend connection.
      </div>
    );
  }

  const sorted = [...data.all_concepts].sort((a, b) =>
    sortBy === 'avg_mastery'
      ? a.avg_mastery - b.avg_mastery
      : b.weak_student_count - a.weak_student_count
  );

  const activityLabels: Record<string, string> = {
    video_watch:   '📹 Video Watch',
    conversation:  '🤖 AI Conversation',
    mcq:           '✅ MCQ Practice',
    recall:        '🔁 Recall Session',
  };

  return (
    <div style={{
      minHeight: '100vh', background: '#0a0e1a',
      fontFamily: 'Inter, sans-serif', color: '#f1f5f9',
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap'); *{box-sizing:border-box}`}</style>

      {/* Nav */}
      <nav style={{
        background: 'rgba(10,14,26,0.95)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #1e293b', padding: '0 24px',
        height: 54, display: 'flex', alignItems: 'center', gap: 16,
        position: 'sticky', top: 0, zIndex: 40,
      }}>
        <button
          onClick={() => router.back()}
          style={{ background: 'none', border: 'none', color: '#64748b',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}
        >
          <ArrowLeft size={15} /> Back
        </button>
        <BarChart3 size={15} color="#f59e0b" />
        <span style={{ fontWeight: 700 }}>Cohort Analytics — Environment</span>
        <span style={{ color: '#475569', fontSize: 12, marginLeft: 'auto' }}>
          Real-time · {data.total_students} students
        </span>
      </nav>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 20px' }}>

        {/* Top stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 28 }}>
          {[
            { label: 'Active Students', value: data.total_students, icon: Users, color: '#6366f1' },
            { label: 'Concept Nodes', value: data.total_nodes, icon: Brain, color: '#06b6d4' },
            { label: 'Nodes with Data', value: data.nodes_with_data, icon: Target, color: '#22c55e' },
            {
              label: 'At-Risk Concepts',
              value: data.all_concepts.filter(c => c.avg_mastery < 60 && c.student_count > 0).length,
              icon: AlertTriangle, color: '#ef4444',
            },
          ].map(s => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid #1e293b', borderRadius: 14, padding: '16px 18px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <s.icon size={14} color={s.color} />
                <span style={{ color: '#64748b', fontSize: 11, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                  {s.label}
                </span>
              </div>
              <span style={{ color: s.color, fontSize: 28, fontWeight: 800 }}>{s.value}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
          {/* Concept table */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid #1e293b', borderRadius: 16, overflow: 'hidden',
          }}>
            <div style={{
              padding: '16px 20px', borderBottom: '1px solid #1e293b',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span style={{ fontWeight: 700 }}>Concept Performance</span>
              <div style={{ display: 'flex', gap: 8 }}>
                {([['avg_mastery', 'By Mastery'], ['weak_student_count', 'By Risk']] as const).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setSortBy(key)}
                    style={{
                      padding: '4px 12px', borderRadius: 6, fontSize: 11, fontWeight: 600,
                      background: sortBy === key ? '#6366f1' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${sortBy === key ? '#6366f1' : '#334155'}`,
                      color: sortBy === key ? '#fff' : '#94a3b8', cursor: 'pointer',
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Header row */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 80px 80px 70px 70px',
              padding: '8px 16px', background: '#0f172a',
              borderBottom: '1px solid #1e293b',
              color: '#475569', fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.8,
            }}>
              <span>Concept</span>
              <span style={{ textAlign: 'center' }}>Students</span>
              <span style={{ textAlign: 'center' }}>Avg Mastery</span>
              <span style={{ textAlign: 'center' }}>Min</span>
              <span style={{ textAlign: 'center' }}>At Risk</span>
            </div>

            <div style={{ maxHeight: 480, overflowY: 'auto' }}>
              {sorted.filter(c => c.student_count > 0).map((c, idx) => {
                const isRisky = c.avg_mastery < 60;
                return (
                  <div
                    key={c.node_id}
                    style={{
                      display: 'grid', gridTemplateColumns: '1fr 80px 80px 70px 70px',
                      padding: '10px 16px',
                      background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                      borderBottom: '1px solid #0f172a',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <p style={{ color: '#f1f5f9', fontSize: 13, fontWeight: 500, margin: '0 0 2px' }}>
                        {c.node_name}
                      </p>
                      <span style={{
                        fontSize: 10, color: DIFFICULTY_COLORS[c.difficulty] ?? '#94a3b8',
                        textTransform: 'capitalize',
                      }}>
                        {c.difficulty}
                      </span>
                    </div>
                    <span style={{ textAlign: 'center', color: '#94a3b8', fontSize: 13 }}>
                      {c.student_count}
                    </span>
                    <div style={{ textAlign: 'center' }}>
                      <span style={{
                        color: c.avg_mastery >= 80 ? '#22c55e' : c.avg_mastery >= 60 ? '#f59e0b' : '#ef4444',
                        fontSize: 13, fontWeight: 700,
                      }}>
                        {c.avg_mastery.toFixed(1)}%
                      </span>
                    </div>
                    <span style={{ textAlign: 'center', color: '#64748b', fontSize: 12 }}>
                      {c.min_mastery.toFixed(0)}%
                    </span>
                    <div style={{ textAlign: 'center' }}>
                      {c.weak_student_count > 0 ? (
                        <span style={{
                          background: '#ef444422', border: '1px solid #ef444444',
                          borderRadius: 4, padding: '2px 6px', color: '#ef4444', fontSize: 11,
                        }}>
                          {c.weak_student_count}
                        </span>
                      ) : (
                        <span style={{ color: '#334155', fontSize: 12 }}>–</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Most difficult */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid #1e293b', borderRadius: 16, overflow: 'hidden',
            }}>
              <div style={{ padding: '14px 16px', borderBottom: '1px solid #1e293b' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <AlertTriangle size={14} color="#ef4444" />
                  <span style={{ fontWeight: 700, fontSize: 14 }}>Most Difficult Concepts</span>
                </div>
              </div>
              {data.most_difficult_concepts.map((c, idx) => (
                <div key={c.node_id} style={{
                  padding: '12px 16px', borderBottom: '1px solid #0f172a',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ color: '#f1f5f9', fontSize: 13, fontWeight: 500 }}>
                      {idx + 1}. {c.node_name}
                    </span>
                    <span style={{ color: '#ef4444', fontSize: 13, fontWeight: 700 }}>
                      {c.avg_mastery.toFixed(0)}%
                    </span>
                  </div>
                  <div style={{ height: 4, background: '#1e293b', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', width: `${c.avg_mastery}%`,
                      background: c.avg_mastery < 40 ? '#ef4444' : '#f59e0b',
                      borderRadius: 2,
                    }} />
                  </div>
                  <p style={{ color: '#64748b', fontSize: 10, margin: '4px 0 0' }}>
                    {c.weak_student_count} student{c.weak_student_count !== 1 ? 's' : ''} below 60%
                  </p>
                </div>
              ))}
            </div>

            {/* Activity breakdown */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid #1e293b', borderRadius: 16, padding: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <TrendingUp size={14} color="#22c55e" />
                <span style={{ fontWeight: 700, fontSize: 14 }}>Activity Breakdown</span>
              </div>
              {data.activity_breakdown.map(a => (
                <div key={a.type} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ color: '#94a3b8', fontSize: 12 }}>
                      {activityLabels[a.type] || a.type}
                    </span>
                    <span style={{ color: '#f1f5f9', fontSize: 12, fontWeight: 600 }}>
                      {a.count} · avg {a.avg_score.toFixed(0)}%
                    </span>
                  </div>
                  <div style={{ height: 4, background: '#1e293b', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${Math.min((a.count / Math.max(...data.activity_breakdown.map(x => x.count))) * 100, 100)}%`,
                      background: '#6366f1', borderRadius: 2,
                    }} />
                  </div>
                </div>
              ))}
              {data.activity_breakdown.length === 0 && (
                <p style={{ color: '#475569', fontSize: 12, textAlign: 'center', margin: '16px 0 0' }}>
                  No activity recorded yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

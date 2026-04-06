'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Brain, Zap, Target, Clock, BookOpen, RotateCcw,
  AlertTriangle, TrendingUp, ChevronRight, Star, Flame,
  BarChart3, Network, MessageSquare, PlayCircle, Lock
} from 'lucide-react';
import { RemediationPanel } from './RemediationPanel';

// ─── Types ────────────────────────────────────────────────────────────────────

interface PlanItem {
  type: string;
  node_id: string;
  node_name: string;
  estimated_minutes: number;
  description: string;
  icon: string;
}

interface Dashboard {
  student_name: string;
  learning_state: string;
  state_label: string;
  next_action: string;
  priority_node_id: string | null;
  priority_node_name: string | null;
  reason: string;
  exam_readiness: number;
  efficiency_score: number;
  ai_intervention: boolean;
  ai_message: string | null;
  todays_plan: PlanItem[];
  mastery_summary: { strong: number; medium: number; weak: number; total_attempted: number };
  quick_stats: { day_streak: number; today_minutes: number; total_sessions: number; nodes_mastered: number };
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STATE_CONFIG: Record<string, { color: string; bg: string; icon: React.FC<any>; label: string }> = {
  learning:       { color: '#6366f1', bg: 'rgba(99,102,241,0.12)',  icon: BookOpen,    label: 'Learning Mode' },
  recall:         { color: '#06b6d4', bg: 'rgba(6,182,212,0.12)',   icon: RotateCcw,   label: 'Recall Due' },
  reinforcement:  { color: '#ef4444', bg: 'rgba(239,68,68,0.12)',   icon: AlertTriangle, label: 'Reinforcement' },
  exam_practice:  { color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', icon: Target,       label: 'Exam Practice' },
  revision_cycle: { color: '#22c55e', bg: 'rgba(34,197,94,0.12)',  icon: RotateCcw,   label: 'Revision Cycle' },
  healing:        { color: '#f43f5e', bg: 'rgba(244,63,94,0.12)',  icon: Lock,        label: 'Healing Required' },
};

const ACTION_ROUTE: Record<string, string> = {
  watch_video:     '/student/upsc/environment/guided/module/1',
  recall_session:  '/student/upsc/environment/guided',
  practice_mcq:    '/student/upsc/environment/guided',
  exam_drill:      '/student/upsc/environment/guided',
  ai_conversation: '/student/upsc/environment/guided',
  reinforce_prereq:'/student/upsc/environment/guided',
  review_weak:     '/student/upsc/environment/guided/knowledge-graph',
  free_explore:    '/student/upsc/environment/guided/knowledge-graph',
};

const PLAN_ICON_MAP: Record<string, React.FC<any>> = {
  recall:     RotateCcw,
  reinforce:  AlertTriangle,
  learn:      BookOpen,
  exam_drill: Target,
  review:     RotateCcw,
  ai_chat:    MessageSquare,
};

// ─── Small Components ─────────────────────────────────────────────────────────

function StatCard({ icon: Icon, label, value, color }: {
  icon: React.FC<any>; label: string; value: string | number; color: string;
}) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid #1e293b',
      borderRadius: 12, padding: '14px 16px',
      display: 'flex', flexDirection: 'column', gap: 6,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Icon size={14} color={color} />
        <span style={{ color: '#64748b', fontSize: 11, textTransform: 'uppercase', letterSpacing: 0.8 }}>
          {label}
        </span>
      </div>
      <span style={{ color: '#f1f5f9', fontSize: 22, fontWeight: 700 }}>{value}</span>
    </div>
  );
}

function MasteryBar({ label, count, color }: { label: string; count: number; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0' }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
      <span style={{ color: '#94a3b8', fontSize: 12, flex: 1 }}>{label}</span>
      <span style={{ color, fontSize: 14, fontWeight: 700 }}>{count}</span>
    </div>
  );
}

function RadialProgress({ value, size = 80, color = '#6366f1', label }: {
  value: number; size?: number; color?: string; label: string;
}) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#1e293b" strokeWidth={6} />
          <circle
            cx={size/2} cy={size/2} r={r} fill="none"
            stroke={color} strokeWidth={6}
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap="round"
            style={{ transition: 'stroke-dasharray 1s ease' }}
          />
        </svg>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#f1f5f9', fontSize: size > 70 ? 16 : 12, fontWeight: 700,
        }}>
          {value.toFixed(0)}%
        </div>
      </div>
      <span style={{ color: '#64748b', fontSize: 11, textAlign: 'center' }}>{label}</span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function LearningDashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<Dashboard | null>(null);
  const [loading, setLoading] = useState(true);
  const [hour] = useState(new Date().getHours());

  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  useEffect(() => {
    fetch('/api/engine/todays-dashboard?subject_slug=environment')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  // Validation Guard: Ensure data has the required structure before rendering
  const isValidData = data && typeof data === 'object' && 'learning_state' in data && Array.isArray(data.todays_plan);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh', background: '#0a0e1a',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ textAlign: 'center' }}>
          <Brain size={40} color="#6366f1" style={{ margin: '0 auto 16px', animation: 'pulse 1.5s infinite' }} />
          <p style={{ color: '#94a3b8', fontFamily: 'Inter, sans-serif' }}>
            Engine is evaluating your learning state…
          </p>
        </div>
      </div>
    );
  }

  if (!isValidData) {
    return (
      <div style={{
        minHeight: '100vh', background: '#0a0e1a',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#94a3b8', fontFamily: 'Inter, sans-serif', padding: 20, textAlign: 'center',
      }}>
        <div style={{ maxWidth: 400 }}>
          <AlertTriangle size={48} color="#ef4444" style={{ marginBottom: 20 }} />
          <h2 style={{ color: '#f1f5f9', marginBottom: 12 }}>Unable to Load Dashboard</h2>
          <p style={{ marginBottom: 24, fontSize: 14 }}>
            We could not retrieve your personalized learning metrics. Please check your connection or try logging in again.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{ padding: '10px 20px', background: '#6366f1', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer' }}
          >
            Refresh Now
          </button>
        </div>
      </div>
    );
  }

  const stateCfg = STATE_CONFIG[data.learning_state] || STATE_CONFIG.learning;
  const StateIcon = stateCfg.icon;
  const nextRoute = ACTION_ROUTE[data.next_action] ?? '/student/upsc/environment/guided';
  const todaysPlan = data.todays_plan || [];
  
  // Phase 17b: Staff Bypass & Emergency Recovery Logic
  const [isStaffBypass, setIsStaffBypass] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('staff_token') === 'p17_deploy_stable') {
      setIsStaffBypass(true);
      console.warn('🛡️ STAFF BYPASS ACTIVE: Recovery Mode');
    }
  }, []);

  const isLocked = data.learning_state === 'healing' && !isStaffBypass;

  return (
    <div style={{
      minHeight: '100vh', background: '#0a0e1a',
      fontFamily: 'Inter, sans-serif', color: '#f1f5f9',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes slideIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .plan-item:hover { background: rgba(255,255,255,0.06) !important; }
        .action-btn:hover { transform: scale(1.02); }
      `}</style>

      {/* Top Nav */}
      <nav style={{
        background: 'rgba(10,14,26,0.95)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #1e293b', padding: '0 24px',
        height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 40,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Brain size={16} color="white" />
          </div>
          <span style={{ fontWeight: 700, fontSize: 15 }}>Learning Engine</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { label: 'Knowledge Graph', icon: Network, route: '/student/upsc/environment/guided/knowledge-graph' },
            { label: 'Modules', icon: BookOpen, route: '/student/upsc/environment/guided' },
            { label: 'Analytics', icon: BarChart3, route: '/student/upsc/environment/guided/analytics' },
          ].map(btn => (
            <button
              key={btn.label}
              onClick={() => router.push(btn.route)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid #1e293b',
                borderRadius: 8, padding: '6px 12px',
                color: '#94a3b8', cursor: 'pointer',
                fontSize: 12, transition: 'all 0.2s',
              }}
            >
              <btn.icon size={13} />
              {btn.label}
            </button>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 20px' }}>

        {/* AI Intervention Banner */}
        {data.ai_intervention && data.ai_message && (
          <div style={{
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: 14, padding: '14px 18px',
            marginBottom: 20, display: 'flex', gap: 12, alignItems: 'flex-start',
            animation: 'slideIn 0.4s ease',
          }}>
            <Brain size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <p style={{ color: '#fca5a5', fontSize: 13, fontWeight: 600, margin: '0 0 4px' }}>
                AI Tutor Notice
              </p>
              <p style={{ color: '#ef4444', fontSize: 12, margin: 0 }}>{data.ai_message}</p>
            </div>
            <button
              onClick={() => router.push('/student/upsc/environment/guided')}
              style={{
                marginLeft: 'auto', background: '#ef4444', border: 'none',
                borderRadius: 8, padding: '6px 14px', color: 'white',
                cursor: 'pointer', fontSize: 12, fontWeight: 600, flexShrink: 0,
              }}
            >
              Start Session
            </button>
          </div>
        )}

        {/* Greeting + State */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: 20, marginBottom: 24, alignItems: 'start',
        }}>
          <div>
            <p style={{ color: '#64748b', fontSize: 13, margin: '0 0 4px' }}>
              {greeting}, {data.student_name} 👋
            </p>
            <h1 style={{ color: '#f1f5f9', fontSize: 26, fontWeight: 800, margin: '0 0 10px' }}>
              Today&apos;s Learning Dashboard
            </h1>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: stateCfg.bg, border: `1px solid ${stateCfg.color}44`,
              borderRadius: 999, padding: '6px 14px',
            }}>
              <StateIcon size={14} color={stateCfg.color} />
              <span style={{ color: stateCfg.color, fontSize: 13, fontWeight: 600 }}>
                {data.state_label}
              </span>
            </div>
          </div>

          {/* Progress rings */}
          <div style={{ display: 'flex', gap: 20, padding: '4px 0' }}>
            <RadialProgress value={data.exam_readiness} color="#6366f1" label="Exam Ready" />
            <RadialProgress value={data.efficiency_score} color="#22c55e" label="Efficiency" />
          </div>
        </div>

        {/* Next Action Card */}
        <button
          className="action-btn"
          onClick={() => router.push(nextRoute)}
          style={{
            width: '100%', background: `linear-gradient(135deg, ${stateCfg.color}22, ${stateCfg.color}08)`,
            border: `1px solid ${stateCfg.color}44`,
            borderRadius: 16, padding: '20px 24px',
            display: 'flex', alignItems: 'center', gap: 16,
            cursor: 'pointer', textAlign: 'left', marginBottom: 24,
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: `0 0 24px ${stateCfg.color}15`,
          }}
        >
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: stateCfg.bg, border: `1px solid ${stateCfg.color}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Zap size={24} color={stateCfg.color} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ color: stateCfg.color, fontSize: 11, textTransform: 'uppercase',
              letterSpacing: 1, margin: '0 0 4px', fontWeight: 600 }}>
              Recommended Next Action
            </p>
            <h2 style={{ color: '#f1f5f9', fontSize: 18, fontWeight: 700, margin: '0 0 6px' }}>
              {data.priority_node_name ?? data.next_action.replace(/_/g, ' ')}
            </h2>
            <p style={{ color: '#94a3b8', fontSize: 13, margin: 0 }}>{data.reason}</p>
          </div>
          <div style={{
            background: stateCfg.color, borderRadius: 10,
            padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 6,
            color: 'white', fontSize: 13, fontWeight: 600, flexShrink: 0,
          }}>
            Start <ChevronRight size={14} />
          </div>
        </button>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>

          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Today's Plan */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid #1e293b', borderRadius: 16, overflow: 'hidden',
            }}>
              <div style={{
                padding: '16px 20px', borderBottom: '1px solid #1e293b',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Clock size={16} color="#6366f1" />
                  <span style={{ fontWeight: 700, fontSize: 15 }}>Today&apos;s Plan</span>
                </div>
                <span style={{ color: '#64748b', fontSize: 12 }}>
                  ~{todaysPlan.reduce((s: number, i: any) => s + i.estimated_minutes, 0)} min
                </span>
              </div>

              {todaysPlan.length === 0 ? (
                <div style={{ padding: '32px 20px', textAlign: 'center' }}>
                  <Star size={32} color="#22c55e" style={{ margin: '0 auto 12px' }} />
                  <p style={{ color: '#22c55e', fontWeight: 600, margin: '0 0 4px' }}>
                    All caught up!
                  </p>
                  <p style={{ color: '#64748b', fontSize: 13, margin: 0 }}>
                    No tasks due. Explore the knowledge graph.
                  </p>
                </div>
              ) : (
                todaysPlan.map((item, idx) => {
                  const PlanIconComp = PLAN_ICON_MAP[item.type] || BookOpen;
                  const isFirst = idx === 0;
                  return (
                    <div
                      key={idx}
                      className="plan-item"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 14,
                        padding: '14px 20px',
                        borderBottom: idx < todaysPlan.length - 1 ? '1px solid #0f172a' : 'none',
                        background: isFirst ? 'rgba(99,102,241,0.05)' : 'transparent',
                        cursor: 'pointer', transition: 'background 0.2s',
                      }}
                    >
                      <div style={{
                        width: 36, height: 36, borderRadius: 10,
                        background: isFirst ? '#6366f122' : '#1e293b',
                        border: `1px solid ${isFirst ? '#6366f144' : '#334155'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, fontSize: 16,
                      }}>
                        {item.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ color: '#f1f5f9', fontSize: 14, fontWeight: 600, margin: '0 0 2px' }}>
                          {item.node_name}
                        </p>
                        <p style={{ color: '#64748b', fontSize: 11, margin: 0 }}>{item.description}</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#475569', fontSize: 11 }}>
                        <Clock size={11} />
                        {item.estimated_minutes}m
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Quick Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              <StatCard icon={Flame} label="Day Streak" value={data.quick_stats.day_streak} color="#f97316" />
              <StatCard icon={Clock} label="Today" value={`${data.quick_stats.today_minutes}m`} color="#6366f1" />
              <StatCard icon={Star} label="Mastered" value={data.quick_stats.nodes_mastered} color="#22c55e" />
              <StatCard icon={TrendingUp} label="Sessions" value={data.quick_stats.total_sessions} color="#06b6d4" />
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Mastery Breakdown */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid #1e293b', borderRadius: 16, padding: 20,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Brain size={15} color="#6366f1" />
                <span style={{ fontWeight: 700, fontSize: 14 }}>Concept Mastery</span>
              </div>
              <MasteryBar label="Strong (>80%)" count={data.mastery_summary.strong} color="#22c55e" />
              <MasteryBar label="Medium (60–80%)" count={data.mastery_summary.medium} color="#f59e0b" />
              <MasteryBar label="Weak (<60%)" count={data.mastery_summary.weak} color="#ef4444" />
              <div style={{ borderTop: '1px solid #1e293b', marginTop: 12, paddingTop: 12 }}>
                <MasteryBar label="Attempted Total" count={data.mastery_summary.total_attempted} color="#94a3b8" />
              </div>
            </div>

            {/* Exam Readiness Gauge */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid #1e293b', borderRadius: 16, padding: 20,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Target size={15} color="#f59e0b" />
                <span style={{ fontWeight: 700, fontSize: 14 }}>Exam Readiness</span>
              </div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ color: '#94a3b8', fontSize: 12 }}>Foundation Progress</span>
                  <span style={{ color: '#f59e0b', fontSize: 13, fontWeight: 700 }}>
                    {data.exam_readiness.toFixed(0)}%
                  </span>
                </div>
                <div style={{ height: 8, background: '#1e293b', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', width: `${data.exam_readiness}%`,
                    background: data.exam_readiness >= 70
                      ? 'linear-gradient(90deg, #22c55e, #16a34a)'
                      : 'linear-gradient(90deg, #f59e0b, #d97706)',
                    borderRadius: 4, transition: 'width 1s ease',
                  }} />
                </div>
              </div>
              {[
                { label: 'Building Foundation', threshold: 0 },
                { label: 'Exam Ready', threshold: 70 },
              ].map(stage => (
                <div key={stage.label} style={{
                  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4,
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: data.exam_readiness >= stage.threshold ? '#22c55e' : '#334155',
                  }} />
                  <span style={{
                    color: data.exam_readiness >= stage.threshold ? '#22c55e' : '#475569',
                    fontSize: 12,
                  }}>
                    {stage.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid #1e293b', borderRadius: 16, overflow: 'hidden',
            }}>
              <div style={{ padding: '14px 16px', borderBottom: '1px solid #1e293b' }}>
                <span style={{ fontWeight: 700, fontSize: 14 }}>Quick Access</span>
              </div>
              {[
                { label: 'Knowledge Graph', icon: Network, route: '/student/upsc/environment/guided/knowledge-graph', color: '#6366f1' },
                { label: 'Revision Plan', icon: RotateCcw, route: '/student/upsc/environment/guided', color: '#06b6d4' },
                { label: 'Instructor Analytics', icon: BarChart3, route: '/student/upsc/environment/guided/analytics', color: '#f59e0b' },
                { label: 'AI Tutor Session', icon: MessageSquare, route: '/student/upsc/environment/guided', color: '#22c55e' },
              ].map(link => (
                <button
                  key={link.label}
                  onClick={() => router.push(link.route)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    width: '100%', padding: '12px 16px',
                    background: 'transparent', border: 'none',
                    borderBottom: '1px solid #0f172a',
                    cursor: 'pointer', transition: 'background 0.2s',
                    color: '#f1f5f9',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <link.icon size={15} color={link.color} />
                  <span style={{ fontSize: 13, flex: 1, textAlign: 'left' }}>{link.label}</span>
                  <ChevronRight size={13} color="#475569" />
                </button>
              ))}
            </div>
          </div>

            {/* Remediation Panel */}
            <RemediationPanel />
        </div>

        {/* System Lock Overlay */}
        {isLocked && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'rgba(10,14,26,0.9)', backdropFilter: 'blur(12px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24, animation: 'fadeIn 0.5s ease',
          }}>
            <div style={{
              maxWidth: 500, width: '100%', background: '#0a0e1a',
              border: '2px solid #f43f5e', borderRadius: 24, padding: 40,
              textAlign: 'center', boxShadow: '0 0 50px rgba(244,63,94,0.3)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -50, right: -50, width: 200, height: 200,
                background: 'radial-gradient(circle, rgba(244,63,94,0.15) 0%, transparent 70%)',
              }} />
              
              <div style={{
                width: 80, height: 80, borderRadius: 24, background: 'rgba(244,63,94,0.1)',
                border: '1px solid rgba(244,63,94,0.3)', margin: '0 auto 24px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 30px rgba(244,63,94,0.2)',
              }}>
                <Lock size={40} color="#f43f5e" />
              </div>

              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 12 }}>
                System Lock Active
              </h2>
              <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.6, marginBottom: 32 }}>
                Our adaptive engine has detected <strong>Critical Relapses</strong> in 3+ core concepts. 
                New content exploration is suspended to ensure your foundation remains unshakeable.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <button
                  onClick={() => {
                      const el = document.getElementById('remediation-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    width: '100%', background: '#f43f5e', color: 'white',
                    border: 'none', borderRadius: 12, padding: '14px 24px',
                    fontSize: 14, fontWeight: 700, cursor: 'pointer',
                    transition: 'all 0.2s', boxShadow: '0 10px 20px rgba(244,63,94,0.3)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  Start Phase 15 Healing Journey
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginTop: 8 }}>
                  <AlertTriangle size={12} color="#f43f5e" />
                  <span style={{ fontSize: 10, color: '#f43f5e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                    Locked until mastery restored
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
